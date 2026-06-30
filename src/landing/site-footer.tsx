import NttaxLogo from "@/components/nttax-logo"

const COLS = [
  {
    title: "Plataforma",
    links: [
      { label: "Simulador da Reforma", href: "#simulador" },
      { label: "Fiscal 360", href: "#plataforma" },
      { label: "Gestão", href: "#plataforma" },
      { label: "Smart Contábil", href: "#plataforma" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Perguntas frequentes", href: "#faq" },
      { label: "Solicitar demo", href: "#demo" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "(19) 97818-0175", href: "https://wa.me/5519978180175" },
      { label: "comercial@inttax.com.br", href: "mailto:comercial@inttax.com.br" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <NttaxLogo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Auditoria fiscal automatizada para escritórios contábeis. Lê NF-e, valida contra a
              legislação e devolve as exceções para você revisar.
            </p>
            <span
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1 font-mono text-[11px] text-foreground/70"
              aria-label="Status operacional do sistema"
            >
              <span
                aria-hidden="true"
                className="relative inline-flex size-1.5 rounded-full bg-success livePulse-success"
              />
              Sistemas operacionais
            </span>
          </div>

          {COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="group relative inline-block py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {l.label}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Inttax. Itapira, SP — atendimento nacional.</p>
          <p className="font-mono text-xs tabular-nums text-muted-foreground/80">
            v2026.06 · dados e indicadores exibidos são ilustrativos
          </p>
        </div>
      </div>
    </footer>
  )
}
