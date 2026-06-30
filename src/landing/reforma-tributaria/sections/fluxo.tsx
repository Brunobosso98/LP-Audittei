import { ClipboardCheck, FileSearch, Presentation, TrendingUp } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

type Passo = {
  n: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  titulo: string
  descricao: string
  meta: string
}

const PASSOS: Passo[] = [
  {
    n: "01",
    icon: FileSearch,
    titulo: "Importar base",
    descricao:
      "NF-e, SPED e cadastros entram pela integração já existente com o seu ERP. Sem migração, sem reformatação.",
    meta: "Janela de leitura: até 60s por cliente",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    titulo: "Cruzar com o calendário",
    descricao:
      "Cada operação é cruzada com a fase vigente do cronograma CONFAZ e com o regime declarado pelo fornecedor.",
    meta: "Atualizado a cada novo marco federativo",
  },
  {
    n: "03",
    icon: TrendingUp,
    titulo: "Parametrizar cenário",
    descricao:
      "Você define conservador, base e crítico pelo Simulador. A Inttax recalcula o impacto nos 4 eixos por cliente.",
    meta: "Recálculo em segundos por carteira",
  },
  {
    n: "04",
    icon: Presentation,
    titulo: "Apresentar e cobrar",
    descricao:
      "O resumo executivo sai pronto para abrir a reunião: cenário antes e depois, NCMs mais sensíveis, ranking de risco e o plano de ação fechado. É a entrega que o cliente reconhece como consultoria estratégica, e que o seu escritório fatura no contrato.",
    meta: "Material pronto para abrir a reunião e justificar a próxima fatura",
  },
]

export function Fluxo() {
  return (
    <section id="fluxo" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Como conversamos com o cliente
          </p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Quatro movimentos que entregam a consultoria, do ERP até a fatura seguinte.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            O fluxo se encerra quando a próxima reunião de consultoria começa e a próxima fatura é
            emitida. Tudo antes disso é leitura calibrada, números validados e filtro do que merece
            virar conversa. O cliente reconhece valor e o escritório sustenta a cobrança mensal,
            trimestral ou por entrega.
          </p>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {PASSOS.map((p, i) => {
            const Icon = p.icon
            const isLast = i === PASSOS.length - 1
            return (
              <li key={p.n} className="group relative flex flex-col">
                <div
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
                >
                  <span
                    className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                    style={{ width: `${((i + 1) / PASSOS.length) * 100}%` }}
                  />
                </div>

                <div className="relative flex items-center gap-3">
                  <span className="relative inline-flex size-14 items-center justify-center rounded-xl border border-border bg-card transition-colors duration-300 group-hover:border-primary/50">
                    <Icon
                      className="size-5 text-foreground transition-colors duration-300 group-hover:text-primary"
                      aria-hidden="true"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -top-2 -right-2 inline-flex size-6 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-semibold text-primary-foreground ring-2 ring-secondary/40"
                    >
                      {p.n}
                    </span>
                  </span>
                  {!isLast && (
                    <span
                      className="size-4 shrink-0 text-border transition-colors duration-300 group-hover:text-primary/50 lg:hidden"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.descricao}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-card px-2.5 py-1 font-mono text-xs text-foreground ring-1 ring-border transition-shadow duration-300 group-hover:shadow-sm group-hover:ring-primary/40">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                    {p.meta}
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
