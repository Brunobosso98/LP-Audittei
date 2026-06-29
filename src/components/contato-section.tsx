"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react"
import { toast } from "sonner"

type DemoRequestPayload = {
  name: string
  email: string
  phone: string
  message: string
}

const initialFormData: DemoRequestPayload = {
  name: "",
  email: "",
  phone: "",
  message: "",
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? ""

// Máscara para telefone no formato (XX) XXXXX-XXXX
const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 11)
  if (numbers.length === 0) return ""
  if (numbers.length <= 2) return `(${numbers}`
  if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
}

// Sanitização XSS com limite de caracteres
const sanitizeInput = (value: string, maxLength = 100) => {
  const sanitized = value.replace(/<[^>]*>/g, "").slice(0, maxLength)
  return sanitized.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
    }
    return entities[char] || char
  })
}

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp comercial",
    value: "(19) 97818-0175",
    note: "Resposta mais rápida. Seg a Sex, 8h às 17h.",
    href: "https://wa.me/5519978180175?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20a%20Inttax%20Fiscal%20360.",
    preferred: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "comercial@inttax.com.br",
    note: "Resposta em até 2 horas úteis",
    href: "mailto:comercial@inttax.com.br",
    preferred: false,
  },
  {
    icon: MapPin,
    title: "Sede",
    value: "Itapira, SP",
    note: "Atendimento nacional",
    preferred: false,
  },
]

export default function ContatoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhone(value) })
    } else if (name === "name") {
      setFormData({ ...formData, [name]: sanitizeInput(value, 60) })
    } else if (name === "email") {
      setFormData({ ...formData, [name]: value.slice(0, 100) })
    } else if (name === "message") {
      setFormData({ ...formData, [name]: sanitizeInput(value, 500) })
    }
  }

  const saveLead = async (payload: DemoRequestPayload) => {
    const response = await fetch(`${apiBaseUrl}/api/demo-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        message: payload.message || null,
        source: "landing-page",
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(errorText || "Falha ao salvar lead.")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const phoneNumbers = formData.phone.replace(/\D/g, "")
    if (phoneNumbers.length !== 10 && phoneNumbers.length !== 11) {
      toast.error("Informe um WhatsApp válido com 10 ou 11 dígitos.")
      return
    }

    setIsSubmitting(true)
    try {
      await saveLead(formData)
      toast.success("Recebemos seu contato. Em até 1 dia útil um especialista da Inttax fala com você.")
      setFormData(initialFormData)
    } catch {
      toast.error("Não conseguimos enviar agora. Tente novamente em alguns minutos.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contato"
      ref={containerRef}
      className="relative py-20 md:py-28 border-t border-border bg-primary-soft"
      aria-labelledby="contato-title"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-strip" aria-hidden="true" />
          <p className="text-eyebrow">Demonstração</p>
          <h2
            id="contato-title"
            className="text-display-xl text-foreground mt-3"
          >
            Veja o Simulador da Reforma Tributária rodando na sua carteira.
          </h2>
          <p className="text-lead mt-4 text-measure">
            Em uma conversa de 30 minutos, mostramos o Simulador aplicado a um caso real do seu escritório. Você sai com uma leitura inicial de impacto nos seus principais clientes.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-border bg-card p-7 lg:p-9 space-y-5 overflow-hidden"
              aria-label="Solicitar demonstração"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-primary"
                aria-hidden="true"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    maxLength={60}
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-11 bg-background border border-input rounded-lg px-3.5 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    E-mail profissional
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    maxLength={100}
                    placeholder="seuemail@escritorio.com.br"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-11 bg-background border border-input rounded-lg px-3.5 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-foreground mb-1.5 block"
                >
                  WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  maxLength={15}
                  placeholder="(19) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-11 bg-background border border-input rounded-lg px-3.5 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground mb-1.5 block"
                >
                  Conte um pouco do seu escritório
                  <span className="text-muted-foreground font-normal ml-1.5">
                    (opcional)
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Porte da carteira, módulos que te interessam, prazo desejado..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background border border-input rounded-lg px-3.5 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-colors resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1.5 text-right tabular">
                  {formData.message.length}/500
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        opacity="0.25"
                      />
                      <path
                        d="M4 12a8 8 0 018-8v4l3-3-3-3v4A8 8 0 104 12z"
                        fill="currentColor"
                        opacity="0.75"
                      />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Solicitar demonstração
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.aside
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-label="Outros canais de contato"
          >
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.href || "#"}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`relative block rounded-2xl border p-6 flex items-start gap-4 transition-all ${
                  item.preferred
                    ? "bg-primary border-primary text-primary-foreground shadow-sm hover:bg-primary-hover"
                    : "bg-card border-border text-foreground hover:border-primary/40"
                }`}
              >
                {item.preferred && (
                  <span className="absolute -top-2 right-4 inline-flex items-center px-2 py-0.5 rounded-full bg-foreground text-background text-xs font-medium">
                    Mais rápido
                  </span>
                )}
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0 ${
                    item.preferred
                      ? "bg-primary-foreground/15"
                      : "bg-primary-soft"
                  }`}
                  aria-hidden="true"
                >
                  <item.icon
                    className={`w-5 h-5 ${item.preferred ? "text-primary-foreground" : "text-primary"}`}
                  />
                </span>
                <div>
                  <p
                    className={`text-sm ${item.preferred ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                  >
                    {item.title}
                  </p>
                  <p className="text-body font-medium">{item.value}</p>
                  <p
                    className={`text-meta mt-0.5 ${item.preferred ? "text-primary-foreground/75" : "text-muted-foreground"}`}
                  >
                    {item.note}
                  </p>
                </div>
              </a>
            ))}
          </motion.aside>
        </div>
      </div>
    </section>
  )
}