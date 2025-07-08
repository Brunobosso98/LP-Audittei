"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Brain, Zap, Target, Shield, BarChart3, Cpu, Eye, Lightbulb, Network, Sparkles } from "lucide-react"

const aiFeatures = [
  {
    icon: Brain,
    title: "Machine Learning Avançado",
    description: "Algoritmos que aprendem com cada auditoria, melhorando continuamente a precisão e eficiência.",
    details:
      "Redes neurais profundas que analisam padrões complexos em documentos fiscais, identificando anomalias sutis que passariam despercebidas por análises tradicionais.",
    color: "from-purple-500 to-pink-500",
    stats: { confiança: 99.9, velocidade: "10x", aprendizado: "24/7" },
  },
  {
    icon: Zap,
    title: "Processamento Inteligente",
    description: "IA capaz de processar milhares de documentos fiscais em segundos com alta precisão.",
    details:
      "Processamento paralelo distribuído que utiliza GPUs para análise em tempo real de grandes volumes de dados fiscais.",
    color: "from-blue-500 to-cyan-500",
    stats: { transferência: "10k/min", latência: "<1s", disponibilidade: "99.99%" },
  },
  {
    icon: Target,
    title: "Detecção Automática de Anomalias",
    description: "Identificação inteligente de inconsistências e padrões suspeitos em documentos fiscais.",
    details:
      "Algoritmos de detecção de anomalias baseados em análise estatística avançada e reconhecimento de padrões.",
    color: "from-green-500 to-emerald-500",
    stats: { detecção: "99.8%", falsePos: "<0.1%", cobertura: "100%" },
  },
  {
    icon: Shield,
    title: "Validação Inteligente",
    description: "Sistema de validação que garante conformidade com as mais recentes legislações fiscais.",
    details: "Base de conhecimento atualizada automaticamente com mudanças na legislação fiscal brasileira.",
    color: "from-orange-500 to-red-500",
    stats: { confiança: "100%", atualização: "Real-time", cobertura: "All states" },
  },
  {
    icon: BarChart3,
    title: "Análise Preditiva",
    description: "Previsão de tendências e identificação de riscos fiscais antes que se tornem problemas.",
    details: "Modelos preditivos que analisam histórico fiscal para antecipar possíveis problemas e oportunidades.",
    color: "from-indigo-500 to-purple-500",
    stats: { predição: "95%", horizonte: "6 meses", alertas: "Real-time" },
  },
  {
    icon: Cpu,
    title: "Automação Completa",
    description: "Fluxos de trabalho totalmente automatizados que reduzem drasticamente a intervenção manual.",
    details:
      "Orquestração inteligente de processos com decisões autônomas baseadas em regras de negócio configuráveis.",
    color: "from-teal-500 to-blue-500",
    stats: { automação: "95%", eficiência: "+300%", erros: "-99%" },
  },
]

const aiStats = [
  { label: "Documentos Processados", value: "1M+", description: "por mês", icon: BarChart3 },
  { label: "Confiança", value: "99.9%", description: "na detecção", icon: Target },
  { label: "Velocidade", value: "10x", description: "mais rápido", icon: Zap },
  { label: "Disponibilidade", value: "24/7", description: "processamento", icon: Cpu },
]

export default function AIShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [neuralAnimation, setNeuralAnimation] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setNeuralAnimation(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section id="ia" className="py-32 bg-slate-800/30 relative overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {/* Neural network nodes */}
          {[...Array(20)].map((_, i) => (
            <motion.circle
              key={i}
              cx={50 + (i % 5) * 200}
              cy={100 + Math.floor(i / 5) * 200}
              r="4"
              fill="#8B5CF6"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                neuralAnimation
                  ? {
                      opacity: [0, 1, 0.5, 1],
                      scale: [0, 1, 1.2, 1],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
              }}
            />
          ))}

          {/* Neural network connections */}
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={i}
              x1={50 + (i % 4) * 200}
              y1={100 + Math.floor(i / 4) * 200}
              x2={250 + (i % 4) * 200}
              y2={100 + Math.floor(i / 4) * 200}
              stroke="#3B82F6"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                neuralAnimation
                  ? {
                      pathLength: 1,
                      opacity: [0, 0.6, 0.3, 0.6],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                delay: 1 + i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 4,
              }}
            />
          ))}
        </svg>
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Sparkles className="w-16 h-16 text-purple-400" />
              <motion.div
                className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Inteligência Artificial{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              no Centro da Inovação
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Nossa plataforma utiliza as mais avançadas tecnologias de IA para revolucionar a auditoria fiscal
          </motion.p>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <motion.div
                className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 overflow-hidden cursor-pointer h-full"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                animate={{
                  borderColor: activeFeature === index ? "rgba(168, 85, 247, 0.5)" : "rgba(168, 85, 247, 0.2)",
                }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Icon with Animation */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 relative`}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
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
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  {Object.entries(feature.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400 capitalize">{key}:</span>
                      <span className="text-purple-400 font-medium">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Expanded Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeFeature === index ? "auto" : 0,
                    opacity: activeFeature === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4"
                >
                  <div className="pt-4 border-t border-purple-500/20">
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.details}</p>
                  </div>
                </motion.div>

                {/* Hover Effect Lines */}
                <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* AI Stats Dashboard */}
        <motion.div
          className="relative bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundImage: [
                "radial-gradient(circle at 20% 50%, #3B82F6 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, #8B5CF6 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, #06B6D4 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, #3B82F6 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.h3
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.7 }}
              >
                IA em Números
              </motion.h3>
              <motion.p
                className="text-gray-300 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.9 }}
              >
                Resultados comprovados da nossa inteligência artificial
              </motion.p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {aiStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 2 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div className="relative mb-4" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <motion.div className="absolute inset-0 bg-blue-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                  </motion.div>

                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 2.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>

                  <p className="text-white font-medium mb-1">{stat.label}</p>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Interactive AI Demo */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.5 }}
            >
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-purple-500/30">
                <h4 className="text-2xl font-bold text-white mb-6">Demonstração Interativa da IA</h4>

                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    className="bg-slate-700/50 rounded-xl p-6 border border-blue-500/30"
                    whileHover={{ scale: 1.02, borderColor: "rgba(59, 130, 246, 0.5)" }}
                  >
                    <Eye className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h5 className="text-white font-semibold mb-2">Visão Computacional</h5>
                    <p className="text-gray-300 text-sm">Análise automática de documentos com OCR avançado</p>
                  </motion.div>

                  <motion.div
                    className="bg-slate-700/50 rounded-xl p-6 border border-purple-500/30"
                    whileHover={{ scale: 1.02, borderColor: "rgba(139, 92, 246, 0.5)" }}
                  >
                    <Lightbulb className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <h5 className="text-white font-semibold mb-2">Aprendizado Contínuo</h5>
                    <p className="text-gray-300 text-sm">Sistema que evolui com cada processamento</p>
                  </motion.div>

                  <motion.div
                    className="bg-slate-700/50 rounded-xl p-6 border border-green-500/30"
                    whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 94, 0.5)" }}
                  >
                    <Network className="w-8 h-8 text-green-400 mx-auto mb-4" />
                    <h5 className="text-white font-semibold mb-2">Rede Neural</h5>
                    <p className="text-gray-300 text-sm">Processamento distribuído em tempo real</p>
                  </motion.div>
                </div>

                <motion.button
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Testar IA Gratuitamente
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
