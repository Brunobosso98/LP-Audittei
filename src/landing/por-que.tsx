const POINTS = [
  {
    role: "Para o cliente do escritório",
    desc: "Mais clareza sobre faturamento, margem, preço, custo e impactos tributários. Relatórios que ele abre sem precisar pedir.",
  },
  {
    role: "Para a equipe fiscal",
    desc: "Menos planilha, mais análise. Cobertura ampla das operações e redução drástica da dependência de amostragem.",
  },
  {
    role: "Para o gestor do escritório",
    desc: "Visão estratégica dos departamentos, indicadores, comercial e societário. Decisões com dado, não com palpite.",
  },
]

export function PorQue() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">Por que Inttax</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Três pontos de vista, um único ganho
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            O que muda para quem assina, para quem opera e para quem decide. Cada papel do
            escritório se beneficia, sem retrabalho.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.role} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold text-foreground">{p.role}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
