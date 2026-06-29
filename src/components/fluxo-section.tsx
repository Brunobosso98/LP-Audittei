"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { ScanLine, Calculator, BarChart3, Building2 } from "lucide-react"

const passos = [
  {
    numero: "1º",
    icone: ScanLine,
    titulo: "Auditar operações",
    descricao:
      "Importe NF-e e SPED. O Fiscal 360 lê até 98% das operações e devolve as inconsistências por cliente, não uma amostra.",
  },
  {
    numero: "2º",
    icone: Calculator,
    titulo: "Simular impactos",
    descricao:
      "Rode o Simulador da Reforma Tributária sobre a carteira. Veja custo, preço, fornecedores e margem projetados por cenário.",
  },
  {
    numero: "3º",
    icone: BarChart3,
    titulo: "Entregar analytics",
    descricao:
      "Abra o dashboard de Analytics para o cliente. Faturamento, vendas, margem e variações mensais em uma visão que ele entende.",
  },
  {
    numero: "4º",
    icone: Building2,
    titulo: "Gerir o escritório",
    descricao:
      "Use o Smart Contábil para acompanhar tarefas, processos societários, onboarding, comercial e o DRE em tempo real.",
  },
]

export default function FluxoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const animateProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      id="fluxo"
      ref={containerRef}
      className="relative py-20 md:py-28 border-t border-border"
      aria-labelledby="fluxo-title"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div className="max-w-3xl" {...animateProps(0)}>
          <div className="section-strip" aria-hidden="true" />
          <p className="text-eyebrow">Como funciona</p>
          <h2 id="fluxo-title" className="text-display-xl text-foreground mt-3">
            Quatro passos encadeados, do operacional ao estratégico.
          </h2>
          <p className="text-lead mt-4 text-measure">
            A Inttax não é uma ferramenta isolada: cada módulo alimenta o seguinte. O resultado é uma operação que opera em escala e entrega valor perceptível ao cliente final.
          </p>
        </motion.div>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {passos.map((passo, i) => (
            <motion.li
              key={passo.numero}
              className="relative bg-card rounded-2xl border border-border p-6 flex flex-col h-full overflow-hidden"
              {...animateProps(0.1 + i * 0.08)}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-primary"
                aria-hidden="true"
              />
              <div className="flex items-center gap-3 mb-4 mt-1">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                  <passo.icone
                    className="w-5 h-5 text-primary-foreground"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-eyebrow font-mono">{passo.numero} passo</span>
              </div>
              <h3 className="text-display-sm text-foreground">{passo.titulo}</h3>
              <p className="text-body text-muted-foreground mt-2 text-measure">
                {passo.descricao}
              </p>
              {i < passos.length - 1 && (
                <span
                  className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-primary/40 font-mono text-lg z-10"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}