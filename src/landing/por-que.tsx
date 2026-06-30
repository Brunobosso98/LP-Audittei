const POINTS = [
  {
    role: "Cliente do escritório",
    desc: "Mais clareza sobre faturamento, margem, preço, custo e impactos tributários. Relatórios que ele abre sem precisar pedir.",
  },
  {
    role: "Equipe fiscal",
    desc: "Menos planilha, mais análise. Cobertura ampla das operações, fim da dependência de amostragem — e sobra tempo para a consultoria da carteira.",
  },
  {
    role: "Gestor do escritório",
    desc: "Visão estratégica dos departamentos, indicadores, comercial e societário. Decisões com dado, não com palpite.",
  },
]

export function PorQue() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          <div>
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl">
              Três pontos de vista, um único ganho.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              O que muda para quem assina, para quem opera e para quem decide. Cada papel do
              escritório se beneficia, sem retrabalho.
            </p>
          </div>

          <ul className="grid">
            {POINTS.map((p, i) => (
              <li
                key={p.role}
                className="group grid grid-cols-[3rem_minmax(0,1fr)] gap-x-6 gap-y-1 border-t border-border py-7 transition-colors duration-300 first:border-t-0 first:pt-0 hover:bg-muted/30 lg:gap-x-8 lg:py-8"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-4xl font-semibold leading-none tracking-[-0.04em] text-primary transition-colors duration-300 group-hover:text-primary/30 sm:text-5xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-xl">
                    {p.role}
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-success opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
