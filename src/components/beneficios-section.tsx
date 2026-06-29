"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Users, Calculator, Building2 } from "lucide-react"

const beneficios = [
  {
    icone: Users,
    titulo: "Para o cliente do escritório",
    corpo: "Mais clareza sobre faturamento, margem, preço, custo e impactos tributários. Relatórios que ele abre sem precisar pedir.",
  },
  {
    icone: Calculator,
    titulo: "Para a equipe fiscal",
    corpo: "Menos planilha, mais análise. Cobertura ampla das operações e redução drástica da dependência de amostragem.",
  },
  {
    icone: Building2,
    titulo: "Para o gestor do escritório",
    corpo: "Visão estratégica dos departamentos, indicadores, comercial e societário. Decisões com dado, não com palpite.",
  },
]

export default function BeneficiosSection() {
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
      id="beneficios"
      ref={containerRef}
      className="relative py-20 md:py-28 border-t border-border bg-primary-soft"
      aria-labelledby="beneficios-title"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div className="max-w-3xl" {...animateProps(0)}>
          <div className="section-strip" aria-hidden="true" />
          <p className="text-eyebrow">Por que Inttax</p>
          <h2 id="beneficios-title" className="text-display-xl text-foreground mt-3">
            Três pontos de vista, um único ganho.
          </h2>
          <p className="text-lead mt-4 text-measure">
            O que muda para quem assina, para quem opera e para quem decide. Cada papel do escritório se beneficia, sem retrabalho.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {beneficios.map((beneficio, i) => (
            <motion.article
              key={beneficio.titulo}
              className="relative bg-card rounded-2xl border border-border p-7 overflow-hidden"
              {...animateProps(0.1 + i * 0.08)}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-primary"
                aria-hidden="true"
              />
              <span
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary mt-1"
                aria-hidden="true"
              >
                <beneficio.icone className="w-6 h-6 text-primary-foreground" />
              </span>
              <h3 className="text-display-sm text-foreground mt-5">
                {beneficio.titulo}
              </h3>
              <p className="text-body text-muted-foreground mt-2 text-measure">
                {beneficio.corpo}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}