import { ArrowRight } from "lucide-react"
import { ReformaPanel } from "@/landing/hero-panel"

const MODULES = [
  { n: "01", name: "Simulador da Reforma", desc: "Impacto em custo, preço, fornecedores e margem." },
  { n: "02", name: "Fiscal 360", desc: "Leitura das operações e inconsistências por cliente." },
  { n: "03", name: "Analytics", desc: "Faturamento, vendas e margem para o cliente final." },
  { n: "04", name: "Smart Contábil", desc: "Gestão do escritório, do DRE ao comercial." },
]

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              Consultoria estratégica para a Reforma Tributária
            </div>

            <h1 className="mt-5 text-pretty text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Transforme seu escritório em um parceiro estratégico do cliente
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A Inttax tira o seu time do trabalho operacional e o coloca na mesa de decisão do
              cliente. Comece pela Reforma Tributária: mostre, em números, o impacto que vem aí —
              e cobre por essa consultoria.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#demo"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Solicitar demonstração
                <ArrowRight className="size-4" />
              </a>
              <a
                href="https://wa.me/5519978180175"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Falar com vendas no WhatsApp
              </a>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Conversa de 30 minutos com o Simulador da Reforma aplicado a um caso real do seu cliente.
            </p>
          </div>

          <ReformaPanel />
        </div>

        <div className="mt-14 lg:mt-20">
          <p className="text-sm text-muted-foreground">
            Quatro módulos, uma plataforma coesa
          </p>
          <div className="mt-4 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div key={m.n} className="bg-card p-5">
                <span className="font-mono text-xs text-primary">{m.n}</span>
                <h3 className="mt-2 text-sm font-semibold text-foreground">{m.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
