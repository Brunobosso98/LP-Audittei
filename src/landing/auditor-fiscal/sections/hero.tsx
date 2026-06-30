import { ArrowRight } from "lucide-react"

type HeroProps = {
  eyebrow: string
  titulo: string
  subtitulo: string
  descricao: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  nota?: string
}

export function Hero({
  eyebrow,
  titulo,
  subtitulo,
  descricao,
  primaryCta,
  secondaryCta,
  nota,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-foreground/70">
                {eyebrow}
              </span>
            </span>

            <h1 className="mt-6 text-balance text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[clamp(2.5rem,1.2rem+2.4vw,3rem)]">
              {titulo}
            </h1>
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">
              {subtitulo}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{descricao}</p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {primaryCta.label}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            )}

            {nota && (
              <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-success livePulse-success" />
                {nota}
              </p>
            )}
          </div>

          <CoberturaCard />
        </div>
      </div>
    </section>
  )
}

/**
 * Cartão lateral do hero: tabela compacta do que o sistema lê, sem KPIs
 * decorativos, sem hero-metric. É só referência rápida para o contador
 * conferir a própria carteira antes de rolar para o showcase.
 */
function CoberturaCard() {
  const fmt = [
    { rotulo: "NF-e de entrada", valor: "XML completo, eventos, cancelamento e substituição" },
    { rotulo: "NF-e de saída", valor: "Emissão própria, devoluções, cancelamento e substituição" },
    { rotulo: "SPED", valor: "Contribuições, ICMS, ECD e ECF conforme layout vigente" },
    { rotulo: "Cadastros", valor: "Produtos, clientes, fornecedores e NCM com histórico" },
  ] as const

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[0_24px_80px_-32px_oklch(0.205_0.012_25/0.4)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Fontes que o sistema lê
          </p>
          <p className="mt-0.5 text-sm font-semibold text-foreground">Cobertura Inttax · auditoria fiscal</p>
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">Atualizado jun/2026</span>
      </div>

      <dl className="mt-5 space-y-3">
        {fmt.map((f) => (
          <div
            key={f.rotulo}
            className="border-b border-border pb-3 last:border-b-0 last:pb-0"
          >
            <dt className="font-mono text-[11px] uppercase tracking-wider text-foreground/70">{f.rotulo}</dt>
            <dd className="mt-0.5 text-sm leading-relaxed text-foreground/90">{f.valor}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 border-t border-border pt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        Compatível com os principais ERPs do mercado.
      </p>
    </div>
  )
}
