const ROWS = [
  { item: "Carga tributária", atual: "R$ 184.300", novo: "R$ 169.870", delta: "-7,8%", good: true },
  { item: "Preço sugerido", atual: "R$ 100,00", novo: "R$ 97,40", delta: "-2,6%", good: true },
  { item: "Crédito de fornecedor", atual: "R$ 22.100", novo: "R$ 14.480", delta: "-34%", good: false },
  { item: "Margem de contribuição", atual: "31,2%", novo: "33,0%", delta: "+1,8 p.p.", good: true },
] as const

export function ReformaPanel() {
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
          <span className="text-sm font-medium text-foreground">Simulador da Reforma — cliente exemplo</span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">IBS + CBS</span>
      </div>

      <div className="grid grid-cols-3 gap-px border-b border-border bg-border">
        <Stat label="Setor" value="Comércio" />
        <Stat label="Regime" value="Lucro Real" />
        <Stat label="Transição" value="2026–33" />
      </div>

      <div className="px-1 py-1">
        <table className="w-full text-left">
          <caption className="sr-only">
            Comparação entre o modelo tributário atual e o novo modelo da Reforma para um cliente exemplo
          </caption>
          <thead>
            <tr className="text-xs text-muted-foreground">
              <th scope="col" className="px-3 py-2 font-medium">Indicador</th>
              <th scope="col" className="px-3 py-2 text-right font-medium">Atual</th>
              <th scope="col" className="px-3 py-2 text-right font-medium">Reforma</th>
              <th scope="col" className="px-3 py-2 text-right font-medium">Variação</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.item} className="border-t border-border">
                <td className="px-3 py-2.5 text-[0.8rem] text-foreground">{r.item}</td>
                <td className="px-3 py-2.5 text-right font-mono text-[0.8rem] text-muted-foreground">{r.atual}</td>
                <td className="px-3 py-2.5 text-right font-mono text-[0.8rem] text-foreground">{r.novo}</td>
                <td className="px-3 py-2.5 text-right">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 font-mono text-xs font-medium ${
                      r.good ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {r.delta}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
        Dados ilustrativos. Cada simulação usa as operações e o regime reais do cliente.
      </p>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card px-4 py-3">
      <div className="text-sm font-semibold text-foreground">{value}</div>
      <div className="mt-0.5 text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
