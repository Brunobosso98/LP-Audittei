import { Search, LineChart, PieChart, Building2, ArrowRight } from "lucide-react"

const STEPS = [
  {
    n: "01",
    icon: Search,
    label: "Operacional",
    title: "Auditar operações",
    desc: "Importe NF-e e SPED. O Fiscal 360 lê até 98% das operações e devolve as inconsistências por cliente, não uma amostra.",
    meta: "98% das operações lidas",
  },
  {
    n: "02",
    icon: LineChart,
    label: "Tributário",
    title: "Simular impactos",
    desc: "Rode o Simulador da Reforma Tributária sobre a carteira. Veja custo, preço, fornecedores e margem projetados por cenário.",
    meta: "4 eixos de impacto",
  },
  {
    n: "03",
    icon: PieChart,
    label: "Consultivo",
    title: "Entregar analytics",
    desc: "Abra o dashboard de Analytics para o cliente. Faturamento, vendas, margem e variações mensais em uma visão que ele entende.",
    meta: "Visão por cliente",
  },
  {
    n: "04",
    icon: Building2,
    label: "Estratégico",
    title: "Gerir o escritório",
    desc: "Use o Smart Contábil para acompanhar tarefas, processos societários, onboarding, comercial e o DRE em tempo real.",
    meta: "DRE em tempo real",
  },
]

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">Como funciona</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Quatro passos encadeados, do operacional ao estratégico
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A Inttax não é uma ferramenta isolada: cada módulo alimenta o seguinte. O resultado é
            uma operação que opera em escala e entrega valor perceptível ao cliente final.
          </p>
        </div>

        <ol className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            const isLast = i === STEPS.length - 1
            return (
              <li key={s.n} className="group relative flex flex-col">
                <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" aria-hidden="true">
                  <span
                    className="absolute inset-y-0 left-0 bg-primary/40"
                    style={{ width: `${((i + 1) / STEPS.length) * 100}%` }}
                  />
                </div>

                <div className="relative flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/25 bg-card shadow-sm ring-1 ring-inset ring-card transition-colors group-hover:border-primary/50">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  {!isLast && (
                    <ArrowRight
                      className="size-4 shrink-0 text-border lg:hidden"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold tracking-widest text-primary">
                      {s.n}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1 font-mono text-xs text-foreground">
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {s.meta}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
