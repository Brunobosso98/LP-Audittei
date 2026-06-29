import { useRef, useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type Errors = Partial<Record<"nome" | "email" | "whatsapp", string>>

const MAX_MSG = 500

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trimStart()
}

export function DemoForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [msgLen, setMsgLen] = useState(0)
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  function validate(data: Record<string, string>): Errors {
    const e: Errors = {}
    if (!data.nome || data.nome.trim().length < 2) e.nome = "Informe seu nome completo."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || ""))
      e.email = "Informe um e-mail profissional válido."
    const digits = (data.whatsapp || "").replace(/\D/g, "")
    if (digits.length < 10) e.whatsapp = "Informe um WhatsApp com DDD."
    return e
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
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
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent text-primary">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Solicitação recebida</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          O time comercial responde em até 2 horas úteis para agendar a conversa de 30 minutos.
          Se preferir, fale agora no WhatsApp.
        </p>
        <a
          href="https://wa.me/5519978180175"
          className="mt-5 inline-flex h-10 items-center rounded-md border border-border bg-card px-4 text-sm font-medium text-foreground hover:bg-muted"
        >
          Falar no WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-xl border border-border bg-card p-6 sm:p-7">
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
          className="mt-1.5 w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
        />
        <div className="mt-1 text-right text-xs text-muted-foreground">
          {msgLen}/{MAX_MSG}
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Solicitar demonstração
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Resposta em até 2 horas úteis, em horário comercial.
      </p>
    </form>
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
          "mt-1.5 h-11 w-full rounded-md border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring",
          error ? "border-destructive focus-visible:outline-destructive" : "border-input focus-visible:border-ring",
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
