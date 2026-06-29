import { useEffect, useRef, useState } from "react"
import { Check, ArrowRight, Lock, Loader2 } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

type Errors = Partial<Record<"nome" | "email" | "whatsapp", string>>

const MAX_MSG = 500
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? ""

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trimStart()
}

const TRUST = [
  { label: "Sem spam" },
  { label: "Resposta em até 2 horas úteis" },
  { label: "Dados sob NDA na etapa comercial" },
]

export function DemoForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [msgLen, setMsgLen] = useState(0)
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const formRef = useRef<HTMLFormElement>(null)
  const prefersReducedMotion = useReducedMotion()

  function validate(data: Record<string, string>): Errors {
    const e: Errors = {}
    if (!data.nome || data.nome.trim().length < 2) e.nome = "Informe seu nome completo."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || ""))
      e.email = "Informe um e-mail profissional válido."
    const digits = (data.whatsapp || "").replace(/\D/g, "")
    if (digits.length < 10) e.whatsapp = "Informe um WhatsApp com DDD."
    return e
  }

  async function saveLead(data: Record<string, string>) {
    const response = await fetch(`${apiBaseUrl}/api/demo-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.nome,
        email: data.email,
        phone: data.whatsapp,
        message: data.mensagem || null,
        source: "landing-page",
      }),
    })
    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(errorText || "Falha ao salvar lead.")
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status !== "idle") return
    const form = event.currentTarget
    const data = {
      nome: sanitize((form.elements.namedItem("nome") as HTMLInputElement).value),
      email: sanitize((form.elements.namedItem("email") as HTMLInputElement).value),
      whatsapp: sanitize((form.elements.namedItem("whatsapp") as HTMLInputElement).value),
      mensagem: sanitize((form.elements.namedItem("mensagem") as HTMLTextAreaElement).value),
    }
    const e = validate(data)
    setErrors(e)
    if (Object.keys(e).length > 0) {
      const first = (Object.keys(e)[0]) as keyof Errors
      ;(form.elements.namedItem(first) as HTMLElement | null)?.focus()
      return
    }
    setStatus("sending")
    try {
      await saveLead(data)
      setStatus("sent")
    } catch (error) {
      console.error(error)
      setStatus("idle")
      toast.error("Não foi possível enviar agora. Tente novamente em instantes.")
    }
  }

  // Live announcement when success appears (accessibility).
  const liveRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (status === "sent" && liveRef.current) {
      liveRef.current.focus()
    }
  }, [status])

  return (
    <div className="relative rounded-xl border border-border bg-card p-6 shadow-sm sm:p-7">
      <div ref={liveRef} tabIndex={-1} className="sr-only" aria-live="polite">
        {status === "sent"
          ? "Solicitação enviada com sucesso. O time comercial responde em até duas horas úteis."
          : ""}
      </div>

      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent text-primary ring-1 ring-primary/20">
              <Check className="size-6 draw-check" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Solicitação recebida</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              O time comercial responde em até 2 horas úteis para agendar a conversa de 30 minutos.
              Se preferir, fale agora no WhatsApp.
            </p>
            <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
              <a
                href="https://wa.me/5519978180175"
                className="inline-flex h-10 items-center gap-1.5 rounded-md border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Falar no WhatsApp
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle")
                  setErrors({})
                  setMsgLen(0)
                  formRef.current?.reset()
                }}
                className="inline-flex h-10 items-center rounded-md px-3 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Enviar outra solicitação
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Field
              id="nome"
              label="Nome"
              placeholder="Seu nome completo"
              autoComplete="name"
              error={errors.nome}
            />
            <Field
              id="email"
              label="E-mail profissional"
              type="email"
              placeholder="seuemail@escritorio.com.br"
              autoComplete="email"
              error={errors.email}
            />
            <Field
              id="whatsapp"
              label="WhatsApp"
              type="tel"
              placeholder="(19) 99999-9999"
              autoComplete="tel"
              error={errors.whatsapp}
            />

            <div className="mt-4">
              <label htmlFor="mensagem" className="block text-sm font-medium text-foreground">
                Conte um pouco do seu escritório
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                maxLength={MAX_MSG}
                onChange={(e) => setMsgLen(e.target.value.length)}
                placeholder="Porte da carteira, módulos que interessam, prazo desejado"
                className="mt-1.5 w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground transition-shadow placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring focus-visible:shadow-[0_0_0_3px_oklch(var(--ring)/0.18)]"
              />
              <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                <span>Opcional, mas ajuda a preparar a demo.</span>
                <span
                  className={cn(
                    "font-mono tabular-nums",
                    msgLen > MAX_MSG - 50 && "text-warning",
                  )}
                >
                  {msgLen}/{MAX_MSG}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={cn(
                "group mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-80 disabled:cursor-progress",
              )}
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  Enviando solicitação…
                </>
              ) : (
                <>
                  Solicitar demonstração
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </>
              )}
            </button>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
              {TRUST.map((t, i) => (
                <li key={t.label} className="inline-flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-3.5 items-center justify-center rounded-full bg-primary/10 text-primary"
                  >
                    <Check className="size-2.5" />
                  </span>
                  {t.label}
                  {i < TRUST.length - 1 && (
                    <span aria-hidden="true" className="ml-3 h-3 w-px bg-border" />
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground/80">
              <Lock className="size-3" aria-hidden="true" />
              Dados tratados sob NDA. Sem compartilhamento com terceiros.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function Field({
  id,
  label,
  error,
  type = "text",
  ...rest
}: {
  id: string
  label: string
  error?: string
  type?: string
  placeholder?: string
  autoComplete?: string
}) {
  return (
    <div className="mt-4 first:mt-0">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-1.5 h-11 w-full rounded-md border bg-background px-3 text-sm text-foreground transition-shadow placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring focus-visible:shadow-[0_0_0_3px_oklch(var(--ring)/0.18)]",
          error
            ? "border-destructive focus-visible:outline-destructive focus-visible:shadow-[0_0_0_3px_oklch(var(--destructive)/0.18)]"
            : "border-input focus-visible:border-ring",
        )}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
