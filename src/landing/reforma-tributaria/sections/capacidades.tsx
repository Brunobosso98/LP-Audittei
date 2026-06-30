import { ArrowRight, Coins, PackageSearch, ShoppingBag, TrendingUp } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

type Eixo = {
  n: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  titulo: string
  leitura: string
  comoE: string
  saida: string
}

const EIXOS: Eixo[] = [
  {
    n: "01",
    icon: Coins,
    titulo: "Custo",
    leitura: "Custo unitário médio, variação projetada e desvio por fornecedor.",
    comoE:
      "Soma-se ICMS, PIS, COFINS e IPI atuais ao custo NF-e. Aplica-se o cenário IBS+CBS parametrizado e devolve o novo custo unitário com peso por classe de produto.",
    saida: "Planilha de custo por SKU antes e depois, com peso atribuído na margem.",
  },
  {
    n: "02",
    icon: TrendingUp,
    titulo: "Preço",
    leitura: "Impacto projetado em três cenários: conservador, base e crítico.",
    comoE:
      "O cenário ajusta alíquota efetiva, mix de operações interestaduais e regime do cliente. Devolve o percentual de ajuste sugerido para abrir a próxima reunião.",
    saida: "Cenários comparáveis, com nota sobre o que move cada percentual.",
  },
  {
    n: "03",
    icon: ShoppingBag,
    titulo: "Fornecedores",
    leitura: "Pressão sobre o custo por regime tributário e ticket médio.",
    comoE:
      "Cada fornecedor é classificado pelo regime declarado em NF-e. Pressão alta sinaliza renegociação; pressão variável pede análise por item.",
    saida: "Ranking de fornecedores por pressão e por volume capturado.",
  },
  {
    n: "04",
    icon: PackageSearch,
    titulo: "Margem",
    leitura: "Hoje × pós-reforma por produto, com peso na margem média da carteira.",
    comoE:
      "A margem por SKU é recalculada a partir do custo novo e do preço de venda mantido ou ajustado. SKUs com queda acima do limite vão para revisão.",
    saida: "Top SKUs da carteira com a variação em pontos percentuais.",
  },
]

export function Capacidades() {
  return (
    <section id="capacidades" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Capacidades do Simulador
          </p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Quatro eixos que respondem as perguntas que o cliente já traz pronto.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Custo, preço, fornecedor e margem são as quatro objeções de todo cliente antes da próxima
            reunião. O Simulador devolve os números já calibrados, com a fonte e o cenário que o seu
            cliente reconhece como leitura estratégica. É a base que o escritório fatura como
            consultoria mensal ou por entrega.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {EIXOS.map((e) => {
            const Icon = e.icon
            return (
              <li
                key={e.n}
                className="group relative flex flex-col bg-card p-6 transition-colors duration-300 hover:bg-muted/40 lg:p-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="font-mono text-[2.75rem] font-semibold leading-none tracking-[-0.06em] text-primary transition-colors duration-300 group-hover:text-primary/30"
                  >
                    {e.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </span>
                </div>
                <h3 className="mt-4 inline-flex items-baseline gap-2 text-balance text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  <span>{e.titulo}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{e.leitura}</p>

                <dl className="mt-5 grid gap-3 border-t border-border pt-4 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      Como é calculado
                    </dt>
                    <dd className="mt-1 leading-relaxed text-foreground/85">{e.comoE}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      Saída no sistema
                    </dt>
                    <dd className="mt-1 leading-relaxed text-foreground/85">{e.saida}</dd>
                  </div>
                </dl>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
