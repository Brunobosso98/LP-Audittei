"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { TrendingDown, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

type Pilar = {
  numero: string
  titulo: string
  descricao: string
}

const pilares: Pilar[] = [
  {
    numero: "01",
    titulo: "Impacto em custo",
    descricao:
      "Veja como a nova tributação altera o custo total da operação e identifique onde a margem do seu cliente começa a apertar.",
  },
  {
    numero: "02",
    titulo: "Impacto em preço",
    descricao:
      "Projete o efeito no preço de venda, simule ajustes e antecipe quais SKUs precisam de revisão antes da virada.",
  },
  {
    numero: "03",
    titulo: "Regime dos fornecedores",
    descricao:
      "Compare regimes tributários nas compras, descubra quais fornecedores geram maior pressão e onde renegociar.",
  },
  {
    numero: "04",
    titulo: "Análise por produto",
    descricao:
      "Mapeie quais produtos perdem margem, quais ganham competitividade e onde o portfólio precisa ser rebalanceado.",
  },
]

const regimes = [
  { nome: "Simples Nacional", impacto: "médio", seta: "down" as const },
  { nome: "Lucro Presumido", impacto: "alto", seta: "down" as const },
  { nome: "Lucro Real", impacto: "variável", seta: "neutral" as const },
  { nome: "MEI", impacto: "baixo", seta: "down" as const },
]

const produtos = [
  { nome: "Produto A", margemAntes: "32%", margemDepois: "21%", queda: true },
  { nome: "Produto B", margemAntes: "28%", margemDepois: "26%", queda: false },
  { nome: "Produto C", margemAntes: "41%", margemDepois: "27%", queda: true },
  { nome: "Produto D", margemAntes: "19%", margemDepois: "18%", queda: false },
]

export default function ReformaSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const animateProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      id="reforma"
      ref={containerRef}
      className="relative py-20 md:py-28 border-t border-border"
      aria-labelledby="reforma-title"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div className="max-w-3xl" {...animateProps(0)}>
          <div className="section-strip" aria-hidden="true" />
          <p className="text-eyebrow">Reforma Tributária</p>
          <h2 id="reforma-title" className="text-display-xl text-foreground mt-3">
            Transforme a maior mudança tributária da década em uma consultoria que o cliente paga.
          </h2>
          <p className="text-lead mt-4 text-measure">
            O Simulador da Reforma Tributária entrega, em números, como a transição afeta custo, preço, fornecedores e margem dos seus clientes. É a base de uma oferta premium que o escritório oferece a partir de 2026.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Pilar 01 — Impacto em custo */}
          <motion.article
            className="lg:col-span-6 feature-card-accent bg-card p-7"
            {...animateProps(0.1)}
            aria-labelledby="pilar-1-title"
          >
            <div className="flex items-baseline justify-between mb-5">
              <span className="text-eyebrow font-mono">{pilares[0].numero}</span>
              <span className="text-meta">Cenário base</span>
            </div>
            <h3 id="pilar-1-title" className="text-display-sm text-foreground">
              {pilares[0].titulo}
            </h3>
            <p className="text-body text-muted-foreground mt-3">
              {pilares[0].descricao}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-muted p-4">
                <p className="text-meta">Hoje</p>
                <p className="text-display-md font-mono tabular text-foreground mt-1">
                  R$ 8,40
                </p>
                <p className="text-meta mt-1">custo unitário médio</p>
              </div>
              <div className="rounded-xl bg-primary p-4">
                <p className="text-meta text-primary-foreground/80">2026 em diante</p>
                <p className="text-display-md font-mono tabular text-primary-foreground mt-1">
                  R$ 9,75
                </p>
                <p className="text-meta text-primary-foreground/80 mt-1">+16% projetado</p>
              </div>
            </div>
            <p className="text-meta mt-4 italic">
              Exemplo ilustrativo. Os números reais dependem do mix de cada cliente.
            </p>
          </motion.article>

          {/* Pilar 02 — Impacto em preço */}
          <motion.article
            className="lg:col-span-6 feature-card-accent bg-card p-7"
            {...animateProps(0.15)}
            aria-labelledby="pilar-2-title"
          >
            <div className="flex items-baseline justify-between mb-5">
              <span className="text-eyebrow font-mono">{pilares[1].numero}</span>
              <span className="text-meta">Faixa de impacto</span>
            </div>
            <h3 id="pilar-2-title" className="text-display-sm text-foreground">
              {pilares[1].titulo}
            </h3>
            <p className="text-body text-muted-foreground mt-3">
              {pilares[1].descricao}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-meta mb-2">
                  <span>Cenário conservador</span>
                  <span className="font-mono tabular text-foreground">+4%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary/40 rounded-full" style={{ width: "40%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-meta mb-2">
                  <span>Cenário base</span>
                  <span className="font-mono tabular text-primary font-semibold">+9%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "65%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-meta mb-2">
                  <span>Cenário crítico</span>
                  <span className="font-mono tabular text-foreground">+18%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-foreground/80 rounded-full" style={{ width: "90%" }} />
                </div>
              </div>
            </div>
          </motion.article>

          {/* Pilar 03 — Regime dos fornecedores */}
          <motion.article
            className="lg:col-span-7 feature-card-accent bg-card p-7"
            {...animateProps(0.2)}
            aria-labelledby="pilar-3-title"
          >
            <div className="flex items-baseline justify-between mb-5">
              <span className="text-eyebrow font-mono">{pilares[2].numero}</span>
              <span className="text-meta">Impacto por regime</span>
            </div>
            <h3 id="pilar-3-title" className="text-display-sm text-foreground">
              {pilares[2].titulo}
            </h3>
            <p className="text-body text-muted-foreground mt-3">
              {pilares[2].descricao}
            </p>

            <ul className="mt-5 divide-y divide-border">
              {regimes.map((regime) => (
                <li key={regime.nome} className="flex items-center justify-between py-3.5">
                  <span className="text-body text-foreground">{regime.nome}</span>
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        regime.impacto === "alto"
                          ? "bg-primary"
                          : regime.impacto === "médio"
                          ? "bg-primary/60"
                          : regime.impacto === "variável"
                          ? "bg-foreground/60"
                          : "bg-foreground/30"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-meta text-foreground capitalize">
                      {regime.impacto}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Pilar 04 — Análise por produto */}
          <motion.article
            className="lg:col-span-5 feature-card-accent bg-card p-7"
            {...animateProps(0.25)}
            aria-labelledby="pilar-4-title"
          >
            <div className="flex items-baseline justify-between mb-5">
              <span className="text-eyebrow font-mono">{pilares[3].numero}</span>
              <span className="text-meta">Top SKUs</span>
            </div>
            <h3 id="pilar-4-title" className="text-display-sm text-foreground">
              {pilares[3].titulo}
            </h3>
            <p className="text-body text-muted-foreground mt-3">
              {pilares[3].descricao}
            </p>

            <table className="mt-5 w-full text-sm">
              <thead>
                <tr className="text-meta text-left border-b border-border">
                  <th className="font-medium pb-2">Produto</th>
                  <th className="font-medium pb-2 text-right">Hoje</th>
                  <th className="font-medium pb-2 text-right">2026</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {produtos.map((p) => (
                  <tr key={p.nome}>
                    <td className="py-2.5 text-foreground">{p.nome}</td>
                    <td className="py-2.5 text-right font-mono tabular text-muted-foreground">
                      {p.margemAntes}
                    </td>
                    <td
                      className={`py-2.5 text-right font-mono tabular ${
                        p.queda ? "text-primary font-semibold" : "text-foreground"
                      }`}
                    >
                      {p.margemDepois}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.article>
        </div>
      </div>
    </section>
  )
}