"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  FileText,
  Users,
  Target,
  CheckCircle,
  Calculator,
  BarChart,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react"

const processSteps = [
  {
    id: 1,
    icon: FileText,
    title: "Importação de NF-e e SPED",
    description: "Importe automaticamente suas notas fiscais eletrônicas e arquivos SPED para análise completa.",
    details:
      "Sistema inteligente que processa milhares de documentos em segundos, validando estrutura e integridade dos dados.",
    color: "from-primary to-primary",
    stats: { documentos: "10k+", tempo: "< 30s", precisão: "99.9%" },
    features: ["Validação automática", "Processamento em lote", "Detecção de erros", "Backup seguro"],
  },
  {
    id: 2,
    icon: Users,
    title: "Criação Automática de Clientes",
    description: "O sistema identifica e cria automaticamente o cadastro de novos clientes baseado nos documentos.",
    details: "IA avançada que reconhece padrões e cria perfis completos de clientes com dados fiscais atualizados.",
    color: "from-primary to-primary",
    stats: { clientes: "500+", automação: "95%", precisão: "98%" },
    features: ["Reconhecimento de padrões", "Perfis automáticos", "Dados atualizados", "Integração CRM"],
  },
  {
    id: 3,
    icon: Target,
    title: "Cenários Tributários e Produtos",
    description:
      "Geração inteligente de cenários tributários e cadastro automático de produtos com classificação fiscal.",
    details: "Algoritmos que analisam histórico fiscal e sugerem os melhores cenários tributários para cada situação.",
    color: "from-primary to-primary",
    stats: { cenários: "1000+", otimização: "40%", conformidade: "100%" },
    features: ["Análise preditiva", "Otimização fiscal", "Classificação NCM", "Simulações"],
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Aprovação de Cenários",
    description: "Revise e aprove os cenários criados automaticamente antes da implementação em produção.",
    details: "Interface intuitiva para revisão e aprovação com simulações em tempo real dos impactos fiscais.",
    color: "from-primary to-primary",
    stats: { aprovação: "< 5min", simulações: "Real-time", precisão: "99%" },
    features: ["Interface intuitiva", "Simulações em tempo real", "Aprovação em lote", "Histórico completo"],
  },
  {
    id: 5,
    icon: Calculator,
    title: "Cálculo de Auditoria NF-e Entrada",
    description: "Auditoria automatizada das notas fiscais de entrada com validação de impostos e créditos.",
    details: "Validação completa de ICMS, IPI, PIS/COFINS com detecção automática de inconsistências.",
    color: "from-primary to-primary",
    stats: { validação: "100%", erros: "< 0.1%", velocidade: "10x" },
    features: ["Validação ICMS/IPI", "Créditos automáticos", "Detecção de erros", "Relatórios detalhados"],
  },
  {
    id: 6,
    icon: BarChart,
    title: "Cálculo de Auditoria NF-e Saída",
    description: "Análise completa das notas fiscais de saída com verificação de conformidade tributária.",
    details: "Auditoria completa com geração de relatórios detalhados e sugestões de otimização fiscal.",
    color: "from-primary to-primary",
    stats: { conformidade: "100%", relatórios: "Auto", otimização: "30%" },
    features: ["Conformidade total", "Relatórios automáticos", "Otimização fiscal", "Alertas inteligentes"],
  },
]

export default function ProcessCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Helper to safely get current icon
  const CurrentIcon = processSteps[currentSlide].icon

  useEffect(() => {
    if (!isAutoPlaying) return

    // Reduced from 5000ms to 3500ms for faster transitions
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % processSteps.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % processSteps.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + processSteps.length) % processSteps.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="processo" className="py-32 bg-muted/30 relative overflow-hidden">

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Como Funciona o{" "}
            <span className="text-primary">Processo inttax</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Descubra o fluxo completo do nosso sistema de auditoria fiscal automatizada
          </motion.p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: -45 }}
                // Reduced transition duration from 0.6s to 0.4s for faster animations
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="bg-card/90 backdrop-blur-xl border border-border rounded-2xl overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${processSteps[currentSlide].color} opacity-5`}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10 p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                      {/* Step Number and Icon */}
                      <motion.div
                        className="flex items-center mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        // Reduced delay for faster content appearance
                        transition={{ delay: 0.1 }}
                      >
                        <div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${processSteps[currentSlide].color} flex items-center justify-center mr-6`}
                        >
                          {CurrentIcon && <CurrentIcon className="w-10 h-10 text-white" />}
                        </div>
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                          {processSteps[currentSlide].id}
                        </div>
                      </motion.div>

                      {/* Title and Description */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        // Reduced delay for faster content appearance
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-3xl font-bold text-foreground mb-4">
                          {processSteps[currentSlide].title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {processSteps[currentSlide].description}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {processSteps[currentSlide].details}
                        </p>
                      </motion.div>

                      {/* Features List */}
                      <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        // Reduced delay for faster content appearance
                        transition={{ delay: 0.3 }}
                      >
                        <h4 className="text-lg font-semibold text-foreground mb-4">
                          Principais Recursos:
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {processSteps[currentSlide].features.map((feature, index) => (
                            <motion.div
                              key={feature}
                              className="flex items-center space-x-2"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              // Reduced delay for faster feature appearance
                              transition={{ delay: 0.4 + index * 0.05 }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Content - Stats and Visualization */}
                    <div className="space-y-8">
                      {/* Stats Cards */}
                      <motion.div
                        className="grid grid-cols-3 gap-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        // Reduced delay for faster stats appearance
                        transition={{ delay: 0.2 }}
                      >
                        {Object.entries(processSteps[currentSlide].stats).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            className="bg-muted/60 rounded-xl p-4 text-center border border-border"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            // Reduced delay for faster stats appearance
                            transition={{ delay: 0.3 + index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="text-2xl font-bold text-primary mb-1">
                              {value}
                            </div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Visual Representation */}
                      <motion.div
                        className="bg-muted/30 rounded-2xl p-8 border border-border"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        // Reduced delay for faster visualization appearance
                        transition={{ delay: 0.4 }}
                      >
                        <div className="text-center mb-6">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            Fluxo do Processo
                          </h4>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full bg-gradient-to-r ${processSteps[currentSlide].color}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${((currentSlide + 1) / processSteps.length) * 100}%` }}
                              // Reduced duration for faster progress bar animation
                              transition={{ duration: 0.6, delay: 0.5 }}
                            />
                          </div>
                          <div className="text-sm text-muted-foreground mt-2">
                            Etapa {currentSlide + 1} de {processSteps.length}
                          </div>
                        </div>

                        {/* Interactive Demo Button */}
                        <motion.div
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          // Reduced delay for faster button appearance
                          transition={{ delay: 0.6 }}
                        >
                          <motion.button
                            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:bg-primary/90"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="w-5 h-5 mr-2" />
                            Ver Demonstração
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 bg-card/80 hover:bg-muted/80 rounded-full flex items-center justify-center transition-all duration-300 border border-border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {processSteps.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-primary" : "bg-muted"
                    }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {index === currentSlide && (
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 bg-card/80 hover:bg-muted/80 rounded-full flex items-center justify-center transition-all duration-300 border border-border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>

          {/* Auto-play Control */}
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`flex items-center space-x-2 text-sm px-4 py-2 rounded-full transition-colors ${isAutoPlaying
                  ? "text-primary bg-primary/10 border border-primary/20"
                  : "text-muted-foreground bg-muted/50 border border-border"
                }`}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isAutoPlaying ? "Pausar" : "Reproduzir"} apresentação</span>
            </button>
          </motion.div>
        </div>

        {/* Process Overview */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid md:grid-cols-6 gap-4">
            {processSteps.map((step, index) => (
              <motion.button
                key={step.id}
                onClick={() => goToSlide(index)}
                className={`relative p-4 rounded-2xl border transition-all duration-300 ${index === currentSlide
                    ? "border-primary/50 bg-primary/10"
                    : "border-border bg-card/50 hover:border-primary/30"
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-3`}
                  >
                    {step.icon && <step.icon className="w-6 h-6 text-white" />}
                  </div>
                  <div className="text-foreground font-medium text-sm mb-1">{step.id}</div>
                  <div className="text-muted-foreground text-xs leading-tight">{step.title}</div>
                </div>

                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/60 rounded-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
