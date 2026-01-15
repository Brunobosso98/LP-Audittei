"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Settings, ArrowRight, Play } from "lucide-react"
import { useRef } from "react"

export default function AdvancedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const benefits = [
    {
      icon: Clock,
      title: "Ganhe Tempo",
      description:
        "Elimine horas de trabalho manual e repetitivo. A automação da inttax libera sua equipe para atividades estratégicas.",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Segurança Fiscal",
      description:
        "Reduza riscos de autuações e multas. Nossa plataforma identifica inconsistências e garante conformidade fiscal.",
      delay: 0.4,
    },
    {
      icon: Settings,
      title: "Padronize Processos",
      description: "Garanta consistência e organização. Padronize suas auditorias fiscais com metodologia comprovada.",
      delay: 0.6,
    },
  ]

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-transparent" />

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Inttax: Inteligência Fiscal que <span className="text-primary">revoluciona</span> seu Escritório
                Contábil
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Descubra como a inttax simplifica a complexidade fiscal e impulsiona a eficiência do seu negócio.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-4 text-lg border-0 hover:bg-primary/90"
                  onClick={scrollToContact}
                >
                  <span className="relative flex items-center">
                    Agende uma Demonstração
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-border text-foreground hover:bg-muted px-8 py-4 text-lg bg-transparent"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Ver Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Interactive Dashboard */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative">
              {/* Main Dashboard */}
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card/80 backdrop-blur-sm">
                <div className="relative p-8">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {[
                      { label: "Documentos Processados", value: "1,247", change: "+12%" },
                      { label: "Economia de Tempo", value: "85%", change: "+5%" },
                      { label: "Precisão", value: "99.9%", change: "+0.1%" },
                      { label: "Clientes Ativos", value: "156", change: "+8%" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="bg-muted/60 rounded-xl p-4 border border-border"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                        <div className="text-primary text-xs">{stat.change}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Chart */}
                  <div className="bg-muted/60 rounded-xl p-4 border border-border">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-foreground font-medium">Auditoria em Tempo Real</span>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                        <span className="text-primary text-sm">Online</span>
                      </div>
                    </div>
                    <div className="h-24 flex items-end space-x-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                        <motion.div
                          key={index}
                          className="flex-1 bg-primary/80 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section with Advanced Animations */}
        <motion.div className="mt-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transforme seu Processo Fiscal: Ganhe <span className="text-primary">Tempo e Segurança</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group relative"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + benefit.delay, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{
                  scale: 1.02,
                }}
              >
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">

                  {/* Floating Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
