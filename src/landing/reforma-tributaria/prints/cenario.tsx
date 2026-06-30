import { Chrome } from "./chrome"

const CLIENTES = [
  { id: "CLI-014", nome: "Confecções Aurora", porte: "Médio", impacto: "-R$ 38,2 mil/ano", risco: "Alto" },
  { id: "CLI-027", nome: "Distribuidora Vértice", porte: "Grande", impacto: "-R$ 142,0 mil/ano", risco: "Crítico" },
  { id: "CLI-033", nome: "Metalúrgica Itamarati", porte: "Pequeno", impacto: "+R$ 11,4 mil/ano", risco: "Baixo" },
  { id: "CLI-041", nome: "Indústria Pollastri", porte: "Grande", impacto: "-R$ 96,8 mil/ano", risco: "Alto" },
  { id: "CLI-058", nome: "Frigorífico Bandeirantes", porte: "Médio", impacto: "-R$ 24,7 mil/ano", risco: "Médio" },
] as const

const Risco: Record<string, string> = {
  Crítico: "bg-danger-tint text-danger",
  Alto: "bg-warning-tint text-warning",
  Médio: "bg-info-tint text-info",
  Baixo: "bg-success-tint text-success",
}

/**
 * Print "Cenário por cliente" — mostra a seleção de cliente (dropdown falso)
 * e a tabela priorizada da carteira por impacto anual projetado.
 */
export function PrintCenario() {
  return (
    <Chrome
      titulo="Simulador da Reforma · Cenário por cliente"
      ativo="IBS + CBS"
      hora="14:32"
      abas={["Carteira", "Cenário base", "Cenário crítico", "Comparar"]}
    >
      <div className="grid gap-px border-b border-border bg-border sm:grid-cols-3">
        <div className="bg-card px-4 py-3">
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Clientes simulados
          </div>
          <div className="mt-1 font-mono text-lg font-semibold tabular-nums text-foreground">87</div>
        </div>
        <div className="bg-card px-4 py-3">
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Impacto agregado carteira
          </div>
          <div className="mt-1 font-mono text-lg font-semibold tabular-nums text-foreground">-R$ 289 mil/ano</div>
        </div>
        <div className="bg-card px-4 py-3">
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Em risco crítico
          </div>
          <div className="mt-1 font-mono text-lg font-semibold tabular-nums text-foreground">12 / 87</div>
        </div>
      </div>

      <div className="px-4 pt-3">
        <div className="flex items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground">
          <span aria-hidden="true" className="font-mono text-[10px] uppercase tracking-wider text-foreground/60">
            Cliente ativo
          </span>
          <span className="font-medium text-foreground">Confecções Aurora · CLI-014 · Médio porte</span>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-left text-xs">
            <thead className="bg-muted/40 text-[10px] text-muted-foreground">
              <tr>
                <th scope="col" className="px-3 py-2 font-medium">ID</th>
                <th scope="col" className="px-3 py-2 font-medium">Cliente</th>
                <th scope="col" className="px-3 py-2 font-medium">Porte</th>
                <th scope="col" className="px-3 py-2 text-right font-medium">Impacto projetado</th>
                <th scope="col" className="px-3 py-2 text-right font-medium">Risco</th>
              </tr>
            </thead>
            <tbody>
              {CLIENTES.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-t border-border ${
                    i === 0 ? "bg-primary/5" : "bg-card hover:bg-muted/30"
                  }`}
                >
                  <td className="px-3 py-2 font-mono text-muted-foreground">{c.id}</td>
                  <td className="px-3 py-2 font-medium text-foreground">{c.nome}</td>
                  <td className="px-3 py-2 text-muted-foreground">{c.porte}</td>
                  <td className="px-3 py-2 text-right font-mono tabular-nums text-foreground">{c.impacto}</td>
                  <td className="px-3 py-2 text-right">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        Risco[c.risco]
                      }`}
                    >
                      {c.risco}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Chrome>
  )
}
