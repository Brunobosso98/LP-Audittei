import { useEffect, useRef, useState } from "react"
import {
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  ArrowUpRight,
  Search,
  Bell,
} from "lucide-react"
import { useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

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

const COMPARISON = [
  {
    title: "Carga Tributária",
    rows: [
      ["Atual", 82, "R$ 184.300"],
      ["Pós-reforma", 76, "R$ 169.870"],
    ],
  },
  {
    title: "Margem de Contribuição",
    rows: [
      ["Atual", 62, "31,2%"],
      ["Pós-reforma", 66, "33,0%"],
    ],
  },
] as const

function formatClock(date: Date) {
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}

function Bar({
  pct,
  label,
  value,
  color,
  animate,
}: {
  pct: number
  label: string
  value: string
  color: string
  animate: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 shrink-0 text-xs text-muted-foreground">{label}</span>
      <div className="relative h-5 flex-1 overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full", animate && "animate-barGrowX")}
          style={{
            width: `${pct}%`,
            backgroundColor: color,
            transformOrigin: "left center",
            animationDelay: animate ? "120ms" : undefined,
          }}
        />
      </div>
      <span className="w-20 text-right font-mono text-xs tabular-nums text-foreground">{value}</span>
    </div>
  )
}

export function ReformaPanel() {
  const [now, setNow] = useState<Date | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion() ?? false
  const reducedMotionRef = useRef(reducedMotion)
  reducedMotionRef.current = reducedMotion

  // Pause the clock while the panel is off-screen or the tab is hidden.
  useEffect(() => {
    if (!isVisible) return
    if (document.visibilityState !== "visible") return
    setNow(new Date())
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [isVisible])

  // Trigger bar growth + KPI reveal on first viewport entry only.
  useEffect(() => {
    const node = panelRef.current
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      setAnimateIn(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setAnimateIn(true)
            // Keep observing so we can pause/resume the clock on visibility changes.
            return
          }
          setIsVisible(false)
        }
      },
      { threshold: 0.05 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={panelRef}
      className="overflow-hidden rounded-xl border border-border bg-card shadow-lg"
    >
      {/* App chrome — top bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-danger/70" />
            <span className="size-2.5 rounded-full bg-warning/70" />
            <span className="size-2.5 rounded-full bg-success/70" />
          </div>
          <span className="text-sm font-semibold text-foreground">Simulador da Reforma</span>
          <span className="hidden items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary sm:inline-flex">
            <span
              aria-hidden="true"
              className={cn(
                "relative inline-flex size-1.5 rounded-full bg-primary",
                !reducedMotion && "livePulse",
              )}
            />
            IBS + CBS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
            <span aria-hidden="true" className="text-foreground/60">
              Última leitura
            </span>
            <span className="tabular-nums text-foreground/80">
              {now ? formatClock(now) : "--:--:--"}
            </span>
          </span>
          <button
            className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label="Buscar"
          >
            <Search className="size-3.5" />
          </button>
          <button
            className="relative flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label="Notificações"
          >
            <Bell className="size-3.5" />
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary" />
          </button>
          <div className="ml-1 flex size-6 items-center justify-center rounded-full bg-primary/20 text-[10px] font-semibold text-primary ring-1 ring-primary/30">
            J
          </div>
        </div>
      </div>

      {/* Module tabs — visual chrome for the screenshot, not interactive controls. */}
      <div className="flex gap-0 border-b border-border px-4" aria-hidden="true">
        {["Simulador", "Impacto", "Produtos", "Alertas"].map((tab, i) => (
          <span
            key={tab}
            className={cn(
              "relative px-3 py-2 text-xs font-medium transition-colors",
              i === 0
                ? "text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-full after:bg-primary after:content-['']"
                : "text-muted-foreground",
            )}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* KPI cards row */}
      <div className="grid grid-cols-2 gap-2 border-b border-border px-4 py-3 sm:grid-cols-4">
        {KPIS.map((k, idx) => (
          <div
            key={k.label}
            className={cn(
              "rounded-lg border border-border bg-muted/30 p-2.5 transition-all duration-500",
              !reducedMotion && animateIn && "kpi-in",
            )}
            style={{ transitionDelay: reducedMotion ? "0ms" : `${idx * 60}ms` }}
          >
            <div className="truncate text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {k.label}
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-sm font-semibold tabular-nums text-foreground">{k.novo}</span>
              <span
                className={cn(
                  "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums transition-transform group-hover:scale-105",
                  k.up ? "bg-success-tint text-success" : "bg-danger-tint text-danger",
                )}
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
        {COMPARISON.map((section, idx) => (
          <div key={section.title}>
            <h4 className="mb-2 text-xs font-semibold text-foreground">{section.title}</h4>
            <div className="space-y-2">
              {section.rows.map(([label, pct, value]) => (
                <Bar
                  key={label}
                  pct={pct as number}
                  label={label}
                  value={value}
                  color={
                    label === "Pós-reforma"
                      ? "oklch(var(--primary))"
                      : "oklch(var(--muted-foreground))"
                  }
                  animate={animateIn && idx === 0}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* NCMs table */}
      <div className="border-b border-border px-4 py-3">
        <div className="mb-2 flex items-center justify-between">
          <h4 className="text-xs font-semibold text-foreground">Produtos / NCMs mais impactados</h4>
          <button className="group/btn flex items-center gap-0.5 text-[10px] font-medium text-primary transition-colors hover:text-primary/80">
            Ver todos
            <ArrowUpRight className="size-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
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
                <tr
                  key={r.ncm}
                  className="border-t border-border text-xs transition-colors hover:bg-muted/40"
                >
                  <td className="py-2 pr-2 font-mono text-muted-foreground">{r.ncm}</td>
                  <td className="py-2 pr-2 text-foreground">{r.produto}</td>
                  <td className="py-2 pr-2 text-right font-mono tabular-nums text-foreground">
                    {r.participacao}
                  </td>
                  <td className="py-2 pr-2 text-right font-mono tabular-nums text-foreground">
                    {r.impacto}
                  </td>
                  <td className="py-2 text-right">
                    <span
                      className={cn(
                        "inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        r.risco === "Crítico"
                          ? "bg-danger-tint text-danger"
                          : r.risco === "Alto"
                            ? "bg-warning-tint text-warning"
                            : r.risco === "Médio"
                              ? "bg-info-tint text-info"
                              : "bg-muted text-risco-neutral",
                      )}
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
      <div className="flex items-start gap-2.5 bg-warning-tint px-4 py-3">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-warning" />
        <div>
          <p className="text-xs font-semibold text-foreground">Recomendação para o cliente</p>
          <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
            Redução de <strong className="text-foreground">R$ 14.430</strong> na carga anual com
            IBS/CBS. Revisar créditos de fornecedores e renegociar contratos para abrir{" "}
            <strong className="text-foreground">+1,8 p.p.</strong> de margem.
          </p>
        </div>
      </div>
    </div>
  )
}
