"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FileText, Users, Target, CheckCircle, Calculator, BarChart, ArrowRight, Play } from "lucide-react"

const processSteps = [
  {
    id: 1,
    icon: FileText,
    title: "Importação de NF-e e SPED",
    description: "Importe automaticamente suas notas fiscais eletrônicas e arquivos SPED para análise completa.",
    details:
      "Sistema inteligente que processa milhares de documentos em segundos, validando estrutura e integridade dos dados.",
    color: "from-blue-500 to-cyan-500",
    position: { x: 0, y: 0 },
  },
  {
    id: 2,
    icon: Users,
    title: "Criação Automática de Clientes",
    description: "O sistema identifica e cria automaticamente o cadastro de novos clientes baseado nos documentos.",
    details: "IA avançada que reconhece padrões e cria perfis completos de clientes com dados fiscais atualizados.",
    color: "from-purple-500 to-pink-500",
    position: { x: 1, y: 0 },
  },
  {
    id: 3,
    icon: Target,
    title: "Cenários Tributários e Produtos",
    description:
      "Geração inteligente de cenários tributários e cadastro automático de produtos com classificação fiscal.",
    details: "Algoritmos que analisam histórico fiscal e sugerem os melhores cenários tributários para cada situação.",
    color: "from-green-500 to-emerald-500",
    position: { x: 2, y: 0 },
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Aprovação de Cenários",
    description: "Revise e aprove os cenários criados automaticamente antes da implementação em produção.",
    details: "Interface intuitiva para revisão e aprovação com simulações em tempo real dos impactos fiscais.",
    color: "from-orange-500 to-red-500",
    position: { x: 0, y: 1 },
  },
  {
    id: 5,
    icon: Calculator,
    title: "Cálculo de Auditoria NF-e Entrada",
    description: "Auditoria automatizada das notas fiscais de entrada com validação de impostos e créditos.",
    details: "Validação completa de ICMS, IPI, PIS/COFINS com detecção automática de inconsistências.",
    color: "from-indigo-500 to-purple-500",
    position: { x: 1, y: 1 },
  },
  {
    id: 6,
    icon: BarChart,
    title: "Cálculo de Auditoria NF-e Saída",
    description: "Análise completa das notas fiscais de saída com verificação de conformidade tributária.",
    details: "Auditoria completa com geração de relatórios detalhados e sugestões de otimização fiscal.",
    color: "from-teal-500 to-blue-500",
    position: { x: 2, y: 1 },
  },
]

export default function InteractiveProcessFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section id="processo" className="py-32 bg-muted/30 dark:bg-slate-800/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-foreground dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Como Funciona o{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Processo Audittei
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Descubra o fluxo completo do nosso sistema de auditoria fiscal automatizada
          </motion.p>
        </motion.div>

        {/* Interactive Process Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Horizontal connections */}
            {[0, 1].map((row) => (
              <g key={`row-${row}`}>
                <motion.line
                  x1="16.66%"
                  y1={`${25 + row * 50}%`}
                  x2="50%"
                  y2={`${25 + row * 50}%`}
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1 + row * 0.3 }}
                />
                <motion.line
                  x1="50%"
                  y1={`${25 + row * 50}%`}
                  x2="83.33%"
                  y2={`${25 + row * 50}%`}
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1.3 + row * 0.3 }}
                />
              </g>
            ))}

            {/* Vertical connections */}
            {[0, 1, 2].map((col) => (
              <motion.line
                key={`col-${col}`}
                x1={`${16.66 + col * 33.33}%`}
                y1="25%"
                x2={`${16.66 + col * 33.33}%`}
                y2="75%"
                stroke="url(#gradient2)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.6 + col * 0.2 }}
              />
            ))}

            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Steps */}
          <div className="grid grid-cols-3 gap-8 relative" style={{ zIndex: 2 }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative ${step.position.y === 0 ? "mb-16" : "mt-16"}`}
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <div className="group cursor-pointer">
                  {/* Step Card */}
                  <motion.div
                    className="relative bg-background/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
                    whileHover={{
                      scale: 1.05,
                      rotateX: 5,
                      rotateY: 5,
                      z: 50,
                    }}
                    animate={{
                      borderColor: hoveredStep === step.id ? "rgba(168, 85, 247, 0.5)" : "rgba(168, 85, 247, 0.2)",
                    }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Step Number - Fixed positioning and visibility */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl z-10"
                      animate={{
                        scale: hoveredStep === step.id ? 1.2 : 1,
                        rotate: hoveredStep === step.id ? 360 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.id}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 relative`}
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-white/20"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground dark:text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                      {step.description}
                    </p>

                    {/* Expand Button */}
                    <motion.button
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group/btn"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-medium">Ver detalhes</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>

                    {/* Hover Effect */}
                    <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>

                  {/* Expanded Details */}
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{
                      opacity: activeStep === step.id ? 1 : 0,
                      height: activeStep === step.id ? "auto" : 0,
                      y: activeStep === step.id ? 0 : -20,
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="bg-muted/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
                      <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">{step.details}</p>
                      <motion.button
                        className="mt-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="mr-2 w-4 h-4" />
                        Ver demonstração
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="relative bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground dark:text-white mb-6">
                Processo Completo e Automatizado
              </h3>
              <p className="text-muted-foreground dark:text-gray-300 text-lg max-w-3xl mx-auto mb-8">
                Todo o fluxo é executado de forma inteligente e automatizada, reduzindo drasticamente o tempo de
                processamento e eliminando erros manuais.
              </p>
              <motion.div
                className="flex justify-center space-x-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.5 }}
              >
                {[
                  { label: "Tempo Reduzido", value: "85%" },
                  { label: "Precisão", value: "99.9%" },
                  { label: "Automação", value: "100%" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 2.7 + index * 0.1, type: "spring" }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground dark:text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
