import { ArrowRight } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

const MODULES = [
  { n: "01", name: "Simulador da Reforma", desc: "Impacto em custo, preço, fornecedores e margem." },
  { n: "02", name: "Fiscal 360", desc: "Leitura das operações e inconsistências por cliente." },
  { n: "03", name: "Gestão", desc: "Faturamento, vendas e margem para o cliente final." },
  { n: "04", name: "Smart Contábil", desc: "Gestão do escritório, do DRE ao comercial." },
]

export function Hero() {
  const { theme } = useTheme()
  return (
    <section id="topo" className="relative overflow-hidden border-b border-border">
      {/* Backdrop: thin vertical grid + soft primary halo, masked */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[40rem] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm">
              <span
                className="relative inline-flex size-1.5 rounded-full bg-primary livePulse"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] uppercase tracking-wider text-foreground/70">
                Reforma Tributária
              </span>
              <span aria-hidden="true" className="h-3 w-px bg-border" />
              <span>Consultoria estratégica para o seu cliente</span>
            </div>

            <h1 className="mt-6 text-balance text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[clamp(2.5rem,1.25rem+2.4vw,3rem)]">
              Faça da Reforma Tributária
              <br className="hidden sm:block" />{" "}
              <span className="relative inline-block">
                a consultoria
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left bg-primary hairline-in sm:h-1"
                />
              </span>{" "}
              que o seu cliente reconhece como valor.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Em vez de tratar a Reforma como mais uma obrigação, monte uma reunião de consultoria para o seu cliente: cenário antes e depois, NCMs mais impactados, ranking de risco e
              a recomendação pronta para apresentar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#demo"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Solicitar demonstração
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/5519978180175"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Falar com vendas no WhatsApp
              </a>
            </div>

            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-success livePulse-success" aria-hidden="true" />
              Conversa de 30 minutos com o Simulador aplicado a um caso real.
            </p>
          </div>

          <div className="relative min-w-0">
            <img
              src={theme === "dark" ? "/hero_dark.png" : "/hero_light.png"}
              alt="Dashboard do Simulador da Reforma Tributária"
              className="h-auto w-full rounded-xl shadow-[0_24px_80px_-32px_oklch(0.586_0.253_17.585/0.45)]"
            />
          </div>
        </div>

        <div className="mt-20 lg:mt-28">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Quatro módulos, uma plataforma coesa
            </p>
            <p className="text-sm text-muted-foreground">
              Cobertura completa do operacional ao estratégico.
            </p>
          </div>

          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <a
                key={m.n}
                href={`#${m.name === "Simulador da Reforma" ? "simulador" : "plataforma"}`}
                className="group relative block bg-card p-5 transition-colors duration-300 hover:bg-muted/40"
              >
                <span
                  aria-hidden="true"
                  className="block font-mono text-[2.5rem] font-semibold leading-none tracking-[-0.05em] text-primary transition-colors duration-300 group-hover:text-primary/30 lg:text-[2rem]"
                >
                  {m.n}
                </span>
                <h3 className="mt-2 flex items-baseline gap-1.5 text-base font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  <span>{m.name}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
