"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Settings, ArrowRight, Play } from "lucide-react"
import { useRef } from "react"

export default function AdvancedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  const benefits = [
    {
      icon: Clock,
      title: "Ganhe Tempo",
      description:
        "Elimine horas de trabalho manual e repetitivo. A automação da inttax libera sua equipe para atividades estratégicas.",
    },
    {
      icon: Shield,
      title: "Segurança Fiscal",
      description:
        "Reduza riscos de autuações e multas. Nossa plataforma identifica inconsistências e garante conformidade fiscal.",
    },
    {
      icon: Settings,
      title: "Padronize Processos",
      description: "Garanta consistência e organização. Padronize suas auditorias fiscais com metodologia comprovada.",
    },
  ]

  const stats = [
    { label: "Documentos Processados", value: "1.247", change: "+12%" },
    { label: "Economia de Tempo", value: "85%", change: "+5%" },
    { label: "Precisão", value: "99,9%", change: "+0,1%" },
    { label: "Clientes Ativos", value: "156", change: "+8%" },
  ]

  const chartHeights = [40, 65, 45, 80, 55, 90, 70, 85]

  // Animações condicionais: usuários com prefers-reduced-motion recebem estado final instantâneo
  const heroAnimProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
      }

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-transparent"
        aria-hidden="true"
      />

      <motion.div
        style={prefersReducedMotion ? undefined : { y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div className="space-y-6" {...heroAnimProps}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Inttax: Inteligência Fiscal que <span className="text-primary">revoluciona</span> seu Escritório
                Contábil
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Descubra como a inttax simplifica a complexidade fiscal e impulsiona a eficiência do seu negócio.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-4 text-lg border-0 hover:bg-primary/90 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                onClick={scrollToContact}
              >
                <span className="relative flex items-center">
                  Agende uma Demonstração
                  <ArrowRight
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-border text-foreground hover:bg-muted px-8 py-4 text-lg bg-transparent transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Play
                  className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                Ver Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Interactive Dashboard */}
          <div className="relative">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card/80 backdrop-blur-sm">
                <div className="relative p-8">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-muted/60 rounded-xl p-4 border border-border"
                      >
                        <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                        <div className="text-primary text-xs font-medium">{stat.change}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart - anima com CSS puro para ser composto pela GPU */}
                  <div className="bg-muted/60 rounded-xl p-4 border border-border">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-foreground font-medium">Auditoria em Tempo Real</span>
                      <div className="flex items-center space-x-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                        </span>
                        <span className="text-primary text-sm">Online</span>
                      </div>
                    </div>
                    <div className="h-24 flex items-end space-x-2">
                      {chartHeights.map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 bg-primary/80 rounded-t origin-bottom"
                          style={{
                            height: `${height}%`,
                            animation: prefersReducedMotion
                              ? undefined
                              : `barGrow 0.6s ease-out ${index * 0.08}s both`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transforme seu Processo Fiscal: Ganhe <span className="text-primary">Tempo e Segurança</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
