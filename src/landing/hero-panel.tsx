import { TrendingDown, TrendingUp, AlertTriangle, ArrowUpRight, Search, Bell } from "lucide-react"

const KPIS = [
  { label: "Carga Tributária", atual: "R$ 184.300", novo: "R$ 169.870", delta: "-7,8%", up: false },
  { label: "Preço Sugerido", atual: "R$ 100,00", novo: "R$ 97,40", delta: "-2,6%", up: false },
  { label: "Crédito Fornecedor", atual: "R$ 22.100", novo: "R$ 14.480", delta: "-34,5%", up: false },
  { label: "Margem Líquida", atual: "31,2%", novo: "33,0%", delta: "+1,8 p.p.", up: true },
] as const

const NCMS = [
  { ncm: "6109.10.00", produto: "Vestuário", participacao: "18,2%", impacto: "-12,3%", risco: "Alto" },
  { ncm: "3926.10.00", produto: "Plásticos", participacao: "12,7%", impacto: "-8,7%", risco: "Médio" },
  { ncm: "2202.10.00", produto: "Bebidas", participacao: "9,4%", impacto: "+5,2%", risco: "Crítico" },
  { ncm: "7323.99.10", produto: "Utensílios", participacao: "7,8%", impacto: "-4,1%", risco: "Baixo" },
] as const

function Bar({ pct, label, value, color }: { pct: number; label: string; value: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 text-xs text-muted-foreground">{label}</span>
      <div className="relative h-5 flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="w-20 text-right font-mono text-xs tabular-nums text-foreground">{value}</span>
    </div>
  )
}

export function ReformaPanel() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg">
      {/* App chrome — top bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-500" />
          </div>
          <span className="text-sm font-semibold text-foreground">Simulador da Reforma</span>
          <span className="hidden rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary sm:inline-block">
            IBS + CBS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted">
            <Search className="size-3.5" />
          </button>
          <button className="relative flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted">
            <Bell className="size-3.5" />
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary" />
          </button>
          <div className="ml-1 flex size-6 items-center justify-center rounded-full bg-primary/20 text-[10px] font-semibold text-primary">
            J
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-border px-4">
        {["Simulador", "Impacto", "Produtos", "Alertas"].map((tab, i) => (
          <button
            key={tab}
            className={`px-3 py-2 text-xs font-medium transition-colors ${
              i === 0
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* KPI cards row */}
      <div className="grid grid-cols-2 gap-2 border-b border-border px-4 py-3 sm:grid-cols-4">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-lg border border-border bg-muted/30 p-2.5">
            <div className="truncate text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {k.label}
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-sm font-semibold text-foreground">{k.novo}</span>
              <span
                className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                  k.up
                    ? "bg-emerald-500/10 text-emerald-600"
                    : "bg-red-500/10 text-red-600"
                }`}
              >
                {k.up ? <TrendingUp className="size-2.5" /> : <TrendingDown className="size-2.5" />}
                {k.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison bars */}
      <div className="grid gap-4 border-b border-border px-4 py-4 sm:grid-cols-2">
        <div>
          <h4 className="mb-2 text-xs font-semibold text-foreground">Carga Tributária</h4>
          <div className="space-y-2">
            <Bar pct={82} label="Atual" value="R$ 184.300" color="hsl(var(--muted-foreground))" />
            <Bar pct={76} label="Pós-reforma" value="R$ 169.870" color="hsl(var(--primary))" />
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-semibold text-foreground">Margem de Contribuição</h4>
          <div className="space-y-2">
            <Bar pct={62} label="Atual" value="31,2%" color="hsl(var(--muted-foreground))" />
            <Bar pct={66} label="Pós-reforma" value="33,0%" color="hsl(var(--primary))" />
          </div>
        </div>
      </div>

      {/* NCMs table */}
      <div className="border-b border-border px-4 py-3">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-xs font-semibold text-foreground">Produtos / NCMs mais impactados</h4>
          <button className="flex items-center gap-0.5 text-[10px] font-medium text-primary hover:underline">
            Ver todos <ArrowUpRight className="size-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] text-muted-foreground">
                <th className="pb-1.5 pr-2 font-medium">NCM</th>
                <th className="pb-1.5 pr-2 font-medium">Produto</th>
                <th className="pb-1.5 pr-2 text-right font-medium">Participação</th>
                <th className="pb-1.5 pr-2 text-right font-medium">Impacto</th>
                <th className="pb-1.5 text-right font-medium">Risco</th>
              </tr>
            </thead>
            <tbody>
              {NCMS.map((r) => (
                <tr key={r.ncm} className="border-t border-border text-xs">
                  <td className="py-2 pr-2 font-mono text-muted-foreground">{r.ncm}</td>
                  <td className="py-2 pr-2 text-foreground">{r.produto}</td>
                  <td className="py-2 pr-2 text-right font-mono text-foreground">{r.participacao}</td>
                  <td className="py-2 pr-2 text-right font-mono text-foreground">{r.impacto}</td>
                  <td className="py-2 text-right">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        r.risco === "Crítico"
                          ? "bg-red-500/10 text-red-600"
                          : r.risco === "Alto"
                            ? "bg-amber-500/10 text-amber-600"
                            : r.risco === "Médio"
                              ? "bg-blue-500/10 text-blue-600"
                              : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {r.risco}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alert / recommendation */}
      <div className="flex items-start gap-2.5 bg-amber-500/5 px-4 py-3">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" />
        <div>
          <p className="text-xs font-semibold text-foreground">Recomendação para o cliente</p>
          <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
            Redução de <strong className="text-foreground">R$ 14.430</strong> na carga anual com
            IBS/CBS. Revisar créditos de fornecedores e renegociar contratos — abertura de
            <strong className="text-foreground"> +1,8 p.p.</strong> de margem.
          </p>
        </div>
      </div>
    </div>
  )
}
