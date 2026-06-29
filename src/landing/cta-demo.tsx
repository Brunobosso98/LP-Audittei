import { MessageCircle, Mail, MapPin } from "lucide-react"
import { DemoForm } from "@/landing/demo-form"

const CONTACTS = [
  {
    icon: MessageCircle,
    label: "WhatsApp comercial",
    value: "(19) 97818-0175",
    meta: "Segunda a sexta, das 8h às 17h",
    href: "https://wa.me/5519978180175",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "comercial@inttax.com.br",
    meta: "Resposta em até 2 horas úteis",
    href: "mailto:comercial@inttax.com.br",
  },
  {
    icon: MapPin,
    label: "Sede",
    value: "Itapira, SP",
    meta: "Atendimento nacional",
  },
]

export function CtaDemo() {
  return (
    <section id="demo" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium text-primary">Demonstração</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
              Veja o Simulador da Reforma Tributária rodando na sua carteira
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Em uma conversa de 30 minutos, a Inttax mostra o Simulador aplicado a um caso real
              do escritório. Você sai com uma leitura inicial de impacto nos principais clientes.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {CONTACTS.map((c) => {
                const Icon = c.icon
                const inner = (
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                      <div className="text-sm font-medium text-foreground">{c.value}</div>
                      <div className="text-xs text-muted-foreground">{c.meta}</div>
                    </div>
                  </div>
                )
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="block rounded-lg transition-colors hover:[&>div]:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <DemoForm />
        </div>
      </div>
    </section>
  )
}
