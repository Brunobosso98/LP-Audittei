import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Chrome } from "./chrome"

const NCMS = [
  { ncm: "6109.10.00", produto: "Camisetas de algodão", part: "18,2%", impacto: "-12,3%", risco: "Alto", sobe: false },
  { ncm: "3926.10.00", produto: "Artefatos de plástico", part: "12,7%", impacto: "-8,7%", risco: "Médio", sobe: false },
  { ncm: "2202.10.00", produto: "Bebidas não alcoólicas", part: "9,4%", impacto: "+5,2%", risco: "Crítico", sobe: true },
  { ncm: "7323.99.10", produto: "Utensílios metálicos", part: "7,8%", impacto: "-4,1%", risco: "Baixo", sobe: false },
  { ncm: "6403.99.00", produto: "Calçados (outros)", part: "6,5%", impacto: "-6,8%", risco: "Médio", sobe: false },
  { ncm: "9403.60.00", produto: "Móveis de madeira", part: "5,1%", impacto: "+1,9%", risco: "Baixo", sobe: true },
] as const

const Risco: Record<string, string> = {
  Crítico: "bg-danger-tint text-danger",
  Alto: "bg-warning-tint text-warning",
  Médio: "bg-info-tint text-info",
  Baixo: "bg-success-tint text-success",
}

/**
 * Print "NCMs mais sensíveis" — ranking dos produtos mais impactados,
 * com badge de risco, ícone direcional e barra horizontal de impacto.
 */
export function PrintNcms() {
  return (
    <Chrome
      titulo="Simulador da Reforma · NCMs mais sensíveis"
      ativo="IBS + CBS"
      hora="14:32"
      abas={["Ranking", "Por fornecedor", "Por período", "Exportar"]}
    >
      <div className="border-b border-border px-4 py-3">
        <div className="mb-2 flex items-center justify-between text-xs">
          <h4 className="font-semibold text-foreground">Top 6 NCMs por impacto projetado</h4>
          <span className="font-mono text-[10px] text-muted-foreground">Cliente: Confecções Aurora · CLI-014</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] text-muted-foreground">
                <th scope="col" className="pb-1.5 pr-2 font-medium">NCM</th>
                <th scope="col" className="pb-1.5 pr-2 font-medium">Produto</th>
                <th scope="col" className="pb-1.5 pr-2 text-right font-medium">Participação</th>
                <th scope="col" className="pb-1.5 pr-2 text-right font-medium">Impacto</th>
                <th scope="col" className="pb-1.5 pr-2 font-medium">Variação</th>
                <th scope="col" className="pb-1.5 text-right font-medium">Risco</th>
              </tr>
            </thead>
            <tbody>
              {NCMS.map((n) => (
                <tr key={n.ncm} className="border-t border-border text-xs transition-colors hover:bg-muted/40">
                  <td className="py-2 pr-2 font-mono text-muted-foreground">{n.ncm}</td>
                  <td className="py-2 pr-2 text-foreground">{n.produto}</td>
                  <td className="py-2 pr-2 text-right font-mono tabular-nums text-foreground">{n.part}</td>
                  <td className="py-2 pr-2 text-right font-mono tabular-nums text-foreground">{n.impacto}</td>
                  <td className="py-2 pr-2">
                    <div className="flex items-center gap-1.5">
                      {n.sobe ? (
                        <ArrowUpRight className="size-3 text-danger" aria-hidden="true" />
                      ) : (
                        <ArrowDownRight className="size-3 text-success" aria-hidden="true" />
                      )}
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            n.sobe ? "bg-danger/70" : "bg-primary/60",
                          )}
                          style={{ width: `${Math.min(100, Math.abs(parseFloat(n.impacto)) * 6)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-right">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        Risco[n.risco]
                      }`}
                    >
                      {n.risco}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-start gap-2.5 bg-warning-tint px-4 py-3">
        <span className="mt-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-warning">
          Atenção
        </span>
        <p className="text-[11px] leading-relaxed text-foreground/80">
          NCM <strong className="font-mono">2202.10.00</strong> concentra{" "}
          <strong>9,4% do faturamento simulado</strong> e ficou em risco Crítico após o cenário base. Rever tributação
          específica do item antes de virar preço final.
        </p>
      </div>
    </Chrome>
  )
}
