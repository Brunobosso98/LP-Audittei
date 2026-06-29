import { useState } from "react"
import { cn } from "@/lib/utils"

type TabKey = "custo" | "preco" | "fornecedores" | "margem"

const TABS: { key: TabKey; n: string; label: string }[] = [
  { key: "custo", n: "01", label: "Custo" },
  { key: "preco", n: "02", label: "Preço" },
  { key: "fornecedores", n: "03", label: "Fornecedores" },
  { key: "margem", n: "04", label: "Margem" },
]

const IMPACT_TONE: Record<string, string> = {
  Baixo: "bg-muted text-muted-foreground",
  Médio: "bg-muted text-foreground",
  Alto: "bg-accent text-accent-foreground",
  Variável: "bg-muted text-foreground",
}

export function Simulador() {
  const [active, setActive] = useState<TabKey>("custo")

  return (
    <section id="simulador" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Reforma Tributária
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
          </div>
          <h2 className="mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            A maior mudança tributária da década, transformada em uma consultoria que o
            cliente paga.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            O Simulador entrega, em números, como a transição afeta custo, preço, fornecedores
            e margem dos seus clientes. É a base de uma oferta premium que o escritório passa a
            oferecer a partir de 2026.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card">
          <div
            role="tablist"
            aria-label="Eixos de impacto da Reforma Tributária"
            className="grid grid-cols-2 gap-px border-b border-border bg-border sm:grid-cols-4"
          >
            {TABS.map((t) => {
              const selected = active === t.key
              return (
                <button
                  key={t.key}
                  role="tab"
                  id={`tab-${t.key}`}
                  aria-selected={selected}
                  aria-controls={`panel-${t.key}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(t.key)}
                  className={cn(
                    "flex flex-col gap-1 px-4 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring",
                    selected ? "bg-card" : "bg-card/40 hover:bg-card",
                  )}
                >
                  <span className={cn("font-mono text-xs", selected ? "text-primary" : "text-muted-foreground")}>
                    {t.n}
                  </span>
                  <span className={cn("text-sm font-medium", selected ? "text-foreground" : "text-muted-foreground")}>
                    Impacto em {t.label.toLowerCase()}
                  </span>
                  {selected && <span className="mt-1 h-0.5 w-8 rounded-full bg-primary" aria-hidden="true" />}
                </button>
              )
            })}
          </div>

          <div className="p-5 sm:p-7">
            {active === "custo" && (
              <Panel
                id="custo"
                title="Como a nova tributação altera o custo total da operação"
                desc="Identifique onde a margem do seu cliente começa a apertar antes da virada."
                note="Exemplo ilustrativo. Os números reais dependem do mix de cada cliente."
              >
                <DataTable
                  head={["Período", "Custo unitário médio", "Variação projetada"]}
                  rows={[
                    ["Hoje", "R$ 8,40", "—"],
                    ["2026 em diante", "R$ 9,75", "+16%"],
                  ]}
                  emphasizeLastCol
                />
              </Panel>
            )}

            {active === "preco" && (
              <Panel
                id="preco"
                title="Efeito no preço de venda, por cenário"
                desc="Simule ajustes e antecipe quais SKUs precisam de revisão antes da virada."
                note="Projeções por cenário sobre a carteira do cliente. Base de cálculo definida na implantação."
              >
                <DataTable
                  head={["Cenário", "Impacto projetado no preço"]}
                  rows={[
                    ["Conservador", "+4%"],
                    ["Base", "+9%"],
                    ["Crítico", "+18%"],
                  ]}
                  emphasizeLastCol
                />
              </Panel>
            )}

            {active === "fornecedores" && (
              <Panel
                id="fornecedores"
                title="Pressão tributária por regime dos fornecedores"
                desc="Descubra quais fornecedores geram maior pressão e onde renegociar."
                note="Classificação relativa, calculada sobre o volume de compras de cada cliente."
              >
                <DataTable
                  head={["Regime tributário", "Pressão sobre o custo"]}
                  rows={[
                    ["Simples Nacional", "Médio"],
                    ["Lucro Presumido", "Alto"],
                    ["Lucro Real", "Variável"],
                    ["MEI", "Baixo"],
                  ]}
                  badgeLastCol
                />
              </Panel>
            )}

            {active === "margem" && (
              <Panel
                id="margem"
                title="Margem por produto, hoje e em 2026"
                desc="Mapeie quais produtos perdem margem e onde o portfólio precisa ser rebalanceado."
                note="Top SKUs do cliente. Margens reais calculadas a partir das notas processadas."
              >
                <DataTable
                  head={["Produto", "Margem hoje", "Margem em 2026"]}
                  rows={[
                    ["Produto A", "32%", "21%"],
                    ["Produto B", "28%", "26%"],
                    ["Produto C", "41%", "27%"],
                    ["Produto D", "19%", "18%"],
                  ]}
                  emphasizeLastCol
                />
              </Panel>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Panel({
  id,
  title,
  desc,
  note,
  children,
}: {
  id: string
  title: string
  desc: string
  note: string
  children: React.ReactNode
}) {
  return (
    <div role="tabpanel" id={`panel-${id}`} aria-labelledby={`tab-${id}`}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
        <div>
          <h3 className="text-pretty text-2xl font-medium leading-snug tracking-[-0.025em] text-foreground sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{desc}</p>
          <p className="mt-5 border-l-2 border-primary/40 pl-3 text-sm text-muted-foreground">{note}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

function DataTable({
  head,
  rows,
  emphasizeLastCol,
  badgeLastCol,
}: {
  head: string[]
  rows: string[][]
  emphasizeLastCol?: boolean
  badgeLastCol?: boolean
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-muted/60">
            {head.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={cn(
                  "px-4 py-2.5 font-medium text-muted-foreground",
                  i > 0 && "text-right",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-border">
              {row.map((cell, i) => {
                const last = i === row.length - 1
                return (
                  <td
                    key={i}
                    className={cn(
                      "px-4 py-3",
                      i === 0 ? "font-medium text-foreground" : "text-right",
                      i > 0 && "font-mono",
                    )}
                  >
                    {last && badgeLastCol ? (
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2.5 py-0.5 font-sans text-xs font-medium",
                          IMPACT_TONE[cell] ?? "bg-muted text-foreground",
                        )}
                      >
                        {cell}
                      </span>
                    ) : last && emphasizeLastCol && cell !== "—" ? (
                      <span className="font-semibold text-primary">{cell}</span>
                    ) : (
                      <span className={i > 0 ? "text-foreground" : undefined}>{cell}</span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
