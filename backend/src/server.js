const express = require("express")
const dotenv = require("dotenv")
const { Pool } = require("pg")
const { z } = require("zod")

dotenv.config()

const port = Number(process.env.PORT || 3001)
const rawDatabaseUrl = process.env.DATABASE_URL

if (!rawDatabaseUrl) {
  throw new Error("DATABASE_URL is required")
}

const normalizedDatabaseUrl = rawDatabaseUrl.replace("sslmode=require", "")
  .replace("sslmode=verify-full", "")
  .replace("?&", "?")
  .replace("&&", "&")
  .replace(/[?&]$/, "")

const shouldUseSsl = /sslmode=(require|verify-full|verify-ca|prefer)/.test(rawDatabaseUrl)

const app = express()
const pool = new Pool({
  connectionString: normalizedDatabaseUrl,
  ssl: shouldUseSsl ? { rejectUnauthorized: false } : undefined,
})

const demoRequestSchema = z.object({
  name: z.string().trim().min(1).max(150),
  email: z.string().trim().email().max(150),
  company: z.string().trim().max(150).nullable().optional(),
  phone: z.string().trim().min(1).max(50),
  employees: z.string().trim().max(50).nullable().optional(),
  message: z.string().trim().max(2000).nullable().optional(),
  source: z.string().trim().max(50).default("landing-page"),
})

app.use(express.json())

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("select 1")
    res.status(200).json({ ok: true })
  } catch (error) {
    console.error("Health check failed", error)
    res.status(500).json({ ok: false })
  }
})

app.post("/api/demo-requests", async (req, res) => {
  const parsed = demoRequestSchema.safeParse(req.body)

  if (!parsed.success) {
    return res.status(400).json({
      error: "Invalid payload",
      details: parsed.error.flatten(),
    })
  }

  const { name, email, company, phone, employees, message, source } = parsed.data

  try {
    const result = await pool.query(
      `
        insert into public.demo_requests (
          name,
          email,
          company,
          phone,
          employees,
          message,
          source
        )
        values ($1, $2, $3, $4, $5, $6, $7)
        returning id, created_at
      `,
      [name, email, company ?? null, phone, employees ?? null, message ?? null, source],
    )

    return res.status(201).json({
      id: result.rows[0].id,
      createdAt: result.rows[0].created_at,
    })
  } catch (error) {
    console.error("Failed to save demo request", error)
    return res.status(500).json({ error: "Failed to save demo request" })
  }
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
