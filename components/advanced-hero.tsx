"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Settings, ArrowRight, Play } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export default function AdvancedHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [typedText, setTypedText] = useState("")
  const fullText = "Audittei: Inteligência Fiscal que "

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

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
        "Elimine horas de trabalho manual e repetitivo. A automação da Audittei libera sua equipe para atividades estratégicas.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Segurança Fiscal",
      description:
        "Reduza riscos de autuações e multas. Nossa plataforma identifica inconsistências e garante conformidade fiscal.",
      color: "from-purple-500 to-pink-500",
      delay: 0.4,
    },
    {
      icon: Settings,
      title: "Padronize Processos",
      description: "Garanta consistência e organização. Padronize suas auditorias fiscais com metodologia comprovada.",
      color: "from-green-500 to-emerald-500",
      delay: 0.6,
    },
  ]

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

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
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white leading-tight">
                {typedText}
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Revoluciona
                </motion.span>
                {" seu Escritório Contábil"}
                <motion.span
                  className="inline-block w-1 h-12 bg-purple-400 ml-2"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                Descubra como a Audittei simplifica a complexidade fiscal e impulsiona a eficiência do seu negócio.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg border-0"
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
                  className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg bg-transparent backdrop-blur-sm"
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
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Clock className="w-8 h-8 text-white" />
              </motion.div>

              {/* Main Dashboard */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-muted/90 dark:from-slate-800/90 dark:to-slate-900/90" />
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
                        className="bg-muted/50 dark:bg-slate-700/50 rounded-xl p-4 border border-purple-500/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2 + index * 0.1 }}
                      >
                        <div className="text-2xl font-bold text-foreground dark:text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground dark:text-gray-400 mb-2">{stat.label}</div>
                        <div className="text-green-400 text-xs">{stat.change}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Chart */}
                  <div className="bg-muted/50 dark:bg-slate-700/50 rounded-xl p-4 border border-purple-500/20">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-foreground dark:text-white font-medium">Auditoria em Tempo Real</span>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm">Online</span>
                      </div>
                    </div>
                    <div className="h-24 flex items-end space-x-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                        <motion.div
                          key={index}
                          className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 3 + index * 0.1, duration: 0.5 }}
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
        <motion.div className="mt-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
              Transforme seu Processo Fiscal: Ganhe{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tempo, Segurança e Padronização
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="group relative"
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 4 + benefit.delay, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
              >
                <div className="relative bg-background/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Floating Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-6 relative`}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-10 h-10 text-white" />
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-white/20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-foreground dark:text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-muted-foreground dark:text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {benefit.description}
                  </p>

                  {/* Hover Effect Lines */}
                  <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
