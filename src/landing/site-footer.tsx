import NttaxLogo from "@/components/nttax-logo"

const COLS = [
  {
    title: "Plataforma",
    links: [
      { label: "Simulador da Reforma", href: "#simulador" },
      { label: "Fiscal 360", href: "#plataforma" },
      { label: "Analytics", href: "#plataforma" },
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
          </div>

          {COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Inttax. Itapira, SP — atendimento nacional.</p>
          <p>Dados e indicadores exibidos são ilustrativos.</p>
        </div>
      </div>
    </footer>
  )
}
