import { Chrome } from "./chrome"

const PRODUTOS = [
  { sku: "PRD-A12", nome: "Camiseta premium", atual: 32, novo: 21 },
  { sku: "PRD-B07", nome: "Calça social", atual: 28, novo: 26 },
  { sku: "PRD-C19", nome: "Blazer executivo", atual: 41, novo: 27 },
  { sku: "PRD-D04", nome: "Saia midi", atual: 19, novo: 18 },
  { sku: "PRD-E22", nome: "Jaqueta técnica", atual: 35, novo: 24 },
  { sku: "PRD-F31", nome: "Vestido longo", atual: 26, novo: 22 },
] as const

/**
 * Print "Margem por produto" — duas barras (atual × pós-reforma) por produto,
 * comparando margem de contribuição em pontos percentuais.
 */
export function PrintMargem() {
  return (
    <Chrome
      titulo="Simulador da Reforma · Margem por produto"
      ativo="IBS + CBS"
      hora="14:32"
      abas={["Por produto", "Por linha", "Por coleção", "Comparar SKUs"]}
    >
      <div className="border-b border-border px-4 pt-3">
        <div className="mb-2 flex items-center justify-between text-xs">
          <h4 className="font-semibold text-foreground">Margem hoje × pós-reforma (top 6 SKUs)</h4>
          <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <span className="size-2 rounded-full bg-muted-foreground/60" aria-hidden="true" />
              Hoje
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              Pós-reforma
            </span>
          </div>
        </div>
        <div className="space-y-2.5 pb-3">
          {PRODUTOS.map((p, i) => (
            <div key={p.sku} className="grid grid-cols-[8rem_minmax(0,1fr)_3.5rem] items-center gap-3 text-xs">
              <div className="font-mono text-[11px] text-muted-foreground">{p.sku}</div>
              <div className="space-y-1">
                <div className="relative h-2.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-muted-foreground/60"
                    style={{ width: `${p.atual}%` }}
                    aria-label={`Hoje ${p.atual}%`}
                  />
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-primary"
                    style={{ width: `${p.novo}%`, transform: `translateY(0)` }}
                    aria-label={`Pós-reforma ${p.novo}%`}
                  />
                </div>
                <div className="flex items-center justify-between font-mono text-[10px] tabular-nums text-muted-foreground">
                  <span>{p.nome}</span>
                  <span>
                    <span className="text-muted-foreground/80">{p.atual}%</span>{" "}
                    <span className="text-foreground/60">→</span>{" "}
                    <span className="font-semibold text-primary">{p.novo}%</span>
                  </span>
                </div>
              </div>
              <div className="text-right font-mono text-[11px] tabular-nums">
                <span
                  className={
                    p.novo < p.atual - 5
                      ? "text-danger"
                      : p.novo < p.atual
                        ? "text-warning"
                        : "text-success"
                  }
                >
                  {p.novo - p.atual >= 0 ? "+" : ""}
                  {p.novo - p.atual} p.p.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[10px] text-muted-foreground">
          <span>
            Margem média hoje:{" "}
            <span className="text-foreground">30,2%</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>
            Margem média pós-reforma:{" "}
            <span className="font-semibold text-primary">23,0%</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>
            Variação:{" "}
            <span className="text-danger">-7,2 p.p.</span>
          </span>
        </div>
      </div>
    </Chrome>
  )
}
