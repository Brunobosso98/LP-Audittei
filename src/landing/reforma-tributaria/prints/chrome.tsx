import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type ChromeProps = {
  titulo: string
  ativo?: string
  abas?: string[]
  hora?: string
  children: ReactNode
  className?: string
}

/**
 * Moldura de "print" usada em todos os mocks de tela do Simulador.
 * Reproduz a barra superior de um app desktop (três pontos, breadcrumb,
 * badge de sistema ativo, indicadores à direita) para que cada print pareça
 * parte de um mesmo sistema, não um diagrama solto.
 */
export function Chrome({
  titulo,
  ativo,
  abas = ["Visão geral", "Detalhe", "Histórico"],
  hora,
  children,
  className,
}: ChromeProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-danger/70" />
            <span className="size-2.5 rounded-full bg-warning/70" />
            <span className="size-2.5 rounded-full bg-success/70" />
          </div>
          <span className="text-sm font-semibold text-foreground">{titulo}</span>
          {ativo && (
            <span className="hidden items-center gap-1.5 rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary sm:inline-flex">
              <span aria-hidden="true" className="inline-flex size-1.5 rounded-full bg-primary" />
              {ativo}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
          {hora && (
            <span className="hidden tabular-nums text-foreground/70 sm:inline">Última leitura · {hora}</span>
          )}
          <span aria-hidden="true" className="hidden text-foreground/40 sm:inline">
            ·
          </span>
          <span className="tabular-nums text-foreground/60">Inttax · v2026.06</span>
        </div>
      </div>

      {abas.length > 0 && (
        <div className="flex gap-0 border-b border-border px-4" aria-hidden="true">
          {abas.map((aba, i) => (
            <span
              key={aba}
              className={cn(
                "relative px-3 py-2 text-xs font-medium",
                i === 0
                  ? "text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-full after:bg-primary after:content-['']"
                  : "text-muted-foreground",
              )}
            >
              {aba}
            </span>
          ))}
        </div>
      )}

      <div className="bg-card">{children}</div>
    </div>
  )
}
