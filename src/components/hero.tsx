"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp, Users, Calculator } from "lucide-react"

const headlineEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: headlineEase },
      }

  const stagger = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: headlineEase },
        }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-tint-soft"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna principal: headline + CTAs */}
          <div className="lg:col-span-7">
            <motion.div className="space-y-6" {...motionProps}>
              <div className="section-strip" aria-hidden="true" />
              <p className="text-eyebrow">Inttax Fiscal 360</p>

              <h1
                id="hero-title"
                className="text-display-2xl text-foreground max-w-2xl"
              >
                Análise fiscal que vira{" "}
                <span className="text-primary">receita consultiva</span>{" "}
                para o seu escritório.
              </h1>

              <p className="text-lead text-measure max-w-xl">
                Quatro módulos para escritórios contábeis anteciparem a Reforma Tributária, auditarem NF-e em escala e entregarem relatórios que o cliente paga para ler.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3"
              {...stagger(0.15)}
            >
              <Button
                size="lg"
                onClick={() => scrollTo("contato")}
                className="group h-12 px-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                Agendar demonstração
                <ArrowRight
                  className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("ecossistema")}
                className="group h-12 px-6 text-base font-medium border-border text-foreground hover:bg-muted transition-colors"
              >
                Conhecer a plataforma
              </Button>
            </motion.div>

            {/* Faixa numérica: 3 números em destaque, não dl cinza */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden"
              {...stagger(0.3)}
              aria-label="Indicadores do produto"
            >
              <div className="bg-card p-5">
                <p className="text-meta">Cobertura</p>
                <p className="text-display-md font-mono tabular text-foreground mt-2">
                  até 98%
                </p>
                <p className="text-meta mt-1">das operações</p>
              </div>
              <div className="bg-primary-soft p-5">
                <p className="text-meta">Janela</p>
                <p className="text-display-md font-mono tabular text-primary mt-2">
                  26 → 33
                </p>
                <p className="text-meta mt-1">Reforma Tributária</p>
              </div>
              <div className="bg-card p-5">
                <p className="text-meta">Soluções</p>
                <p className="text-display-md font-mono tabular text-foreground mt-2">
                  4
                </p>
                <p className="text-meta mt-1">módulos integrados</p>
              </div>
            </motion.div>
          </div>

          {/* Coluna secundária: destaque Reforma Tributária */}
          <motion.aside
            className="lg:col-span-5 lg:sticky lg:top-28"
            {...stagger(0.2)}
            aria-labelledby="reforma-callout-title"
          >
            <div className="relative rounded-2xl bg-primary text-primary-foreground overflow-hidden shadow-sm">
              {/* Padrão sutil no canto (não gradient neon, só opacity) */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary-foreground/10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-16 -left-8 w-40 h-40 rounded-full bg-primary-foreground/10"
                aria-hidden="true"
              />

              <div className="relative p-7">
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary-foreground/15"
                    aria-hidden="true"
                  >
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <span className="text-eyebrow !text-primary-foreground">
                    Em destaque
                  </span>
                </div>

                <h2
                  id="reforma-callout-title"
                  className="text-display-md text-primary-foreground"
                >
                  A janela para virar parceiro premium do seu cliente.
                </h2>

                <p className="text-body text-primary-foreground/85 mt-3">
                  A Reforma Tributária abre uma oportunidade única: o escritório que mostra, em números, como a mudança impacta custo, preço, fornecedores e margem dos clientes deixa de ser um custo operacional e vira um serviço que o cliente paga para ter.
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { icon: Calculator, label: "Custo" },
                    { icon: TrendingUp, label: "Preço" },
                    { icon: Users, label: "Fornecedores" },
                    { icon: Sparkles, label: "Margem" },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-primary-foreground/15"
                    >
                      <item.icon
                        className="w-4 h-4 text-primary-foreground"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-primary-foreground">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => scrollTo("reforma")}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
                >
                  Ver como funciona o Simulador
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}