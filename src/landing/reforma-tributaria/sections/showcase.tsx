import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Check } from "lucide-react"
import { DEFAULT_PRINT, PRINTS, type PrintMeta } from "@/landing/reforma-tributaria/prints"

type ShowcaseProps = {
  eyebrow?: string
  titulo: string
  descricao: string
}

export function Showcase({ titulo, descricao, eyebrow = "Showcase do Simulador" }: ShowcaseProps) {
  const [activeId, setActiveId] = useState<string>(DEFAULT_PRINT.id)
  const active = PRINTS.find((p) => p.id === activeId) ?? DEFAULT_PRINT
  const ActivePrint = active.Component

  return (
    <section
      id="simulador"
      aria-labelledby="showcase-titulo"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {eyebrow}
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
          </div>
          <h2
            id="showcase-titulo"
            className="mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]"
          >
            {titulo}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{descricao}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <PrintList activeId={activeId} onSelect={setActiveId} active={active} />
          <PrintStage active={active}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <ActivePrint />
              </motion.div>
            </AnimatePresence>
          </PrintStage>
        </div>
      </div>
    </section>
  )
}

function PrintList({
  activeId,
  onSelect,
  active,
}: {
  activeId: string
  onSelect: (id: string) => void
  active: PrintMeta
}) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start" aria-label="Telas do Simulador">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        Selecione uma tela
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
        {PRINTS.map((p) => {
          const isActive = p.id === activeId
          const Icon = p.icon
          return (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => onSelect(p.id)}
                aria-pressed={isActive}
                className={`group relative flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  isActive
                    ? "border-primary/40 bg-primary/[0.06]"
                    : "border-border bg-card hover:border-primary/25 hover:bg-muted/40"
                }`}
              >
                <span
                  className={`mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-md border ${
                    isActive ? "border-primary/30 bg-primary/10" : "border-border bg-background"
                  }`}
                  aria-hidden="true"
                >
                  <Icon className="size-3.5 text-foreground" />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block text-sm font-semibold leading-snug ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {p.titulo}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
                    {p.resumo}
                  </span>
                </span>
                {isActive && (
                  <Check
                    aria-hidden="true"
                    className="absolute right-3 top-3 size-3.5 text-primary"
                  />
                )}
              </button>
            </li>
          )
        })}
      </ul>

      <p className="mt-4 hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground lg:block">
        Tela ativa · {active.titulo}
      </p>
    </div>
  )
}

function PrintStage({ children, active }: { children: React.ReactNode; active: PrintMeta }) {
  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl border border-border bg-muted/20 p-3 shadow-[0_24px_80px_-32px_oklch(0.205_0.012_25/0.35)] sm:p-5"
        aria-live="polite"
        aria-atomic="false"
        aria-label={`Tela do Simulador: ${active.titulo}`}
      >
        {children}
      </div>

      <p className="mt-3 flex items-center justify-between gap-3 font-mono text-[10px] text-muted-foreground">
        <span>Dados ilustrativos de um cliente típico.</span>
        <span className="tabular-nums">v2026.06</span>
      </p>
    </div>
  )
}
