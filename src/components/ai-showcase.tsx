"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Brain, Zap, Target, Shield, BarChart3, Cpu, Eye, Lightbulb, Network, Sparkles } from "lucide-react"

const aiFeatures = [
  {
    icon: Brain,
    title: "Machine Learning Avançado",
    description: "Algoritmos que aprendem com cada auditoria, melhorando continuamente a precisão e eficiência.",
    details:
      "Redes neurais profundas que analisam padrões complexos em documentos fiscais, identificando anomalias sutis que passariam despercebidas por análises tradicionais.",
    stats: { confiança: 99.9, velocidade: "10x", aprendizado: "24/7" },
  },
  {
    icon: Zap,
    title: "Processamento Inteligente",
    description: "IA capaz de processar milhares de documentos fiscais em segundos com alta precisão.",
    details:
      "Processamento paralelo distribuído que utiliza GPUs para análise em tempo real de grandes volumes de dados fiscais.",
    stats: { transferência: "10k/min", latência: "<1s", disponibilidade: "99.99%" },
  },
  {
    icon: Target,
    title: "Detecção Automática de Anomalias",
    description: "Identificação inteligente de inconsistências e padrões suspeitos em documentos fiscais.",
    details:
      "Algoritmos de detecção de anomalias baseados em análise estatística avançada e reconhecimento de padrões.",
    stats: { detecção: "99.8%", falsePos: "<0.1%", cobertura: "100%" },
  },
  {
    icon: Shield,
    title: "Validação Inteligente",
    description: "Sistema de validação que garante conformidade com as mais recentes legislações fiscais.",
    details: "Base de conhecimento atualizada automaticamente com mudanças na legislação fiscal brasileira.",
    stats: { confiança: "100%", atualização: "Real-time", cobertura: "All states" },
  },
  {
    icon: BarChart3,
    title: "Análise Preditiva",
    description: "Previsão de tendências e identificação de riscos fiscais antes que se tornem problemas.",
    details: "Modelos preditivos que analisam histórico fiscal para antecipar possíveis problemas e oportunidades.",
    stats: { predição: "95%", horizonte: "6 meses", alertas: "Real-time" },
  },
  {
    icon: Cpu,
    title: "Automação Completa",
    description: "Fluxos de trabalho totalmente automatizados que reduzem drasticamente a intervenção manual.",
    details:
      "Orquestração inteligente de processos com decisões autônomas baseadas em regras de negócio configuráveis.",
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

  return (
    <section id="ia" className="py-32 bg-muted/30 relative overflow-hidden">

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
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Inteligência Artificial{" "}
            <span className="text-primary">no Centro da Inovação</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
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
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.8 + index * 0.1,
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <motion.div
                className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden cursor-pointer h-full"
                whileHover={{
                  scale: 1.02,
                }}
              >
                {/* Icon with Animation */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="space-y-2">
                  {Object.entries(feature.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground capitalize">{key}:</span>
                      <span className="text-primary font-medium">{value}</span>
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
                  <div className="pt-4 border-t border-border">
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.details}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* AI Stats Dashboard */}
        <motion.div
          className="relative bg-card/80 rounded-2xl p-12 border border-border backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.7 }}
              >
                IA em Números
              </motion.h3>
              <motion.p
                className="text-muted-foreground text-lg"
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
                  transition={{ delay: 2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative mb-4">
                    <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  <motion.div
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 2.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>

                  <p className="text-foreground font-medium mb-1">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
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
              <div className="bg-muted/40 rounded-2xl p-8 border border-border">
                <h4 className="text-2xl font-bold text-foreground mb-6">Demonstração Interativa da IA</h4>

                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    className="bg-card/60 rounded-xl p-6 border border-border"
                    whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.4)" }}
                  >
                    <Eye className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h5 className="text-foreground font-semibold mb-2">Visão Computacional</h5>
                    <p className="text-muted-foreground text-sm">Análise automática de documentos com OCR avançado</p>
                  </motion.div>

                  <motion.div
                    className="bg-card/60 rounded-xl p-6 border border-border"
                    whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.4)" }}
                  >
                    <Lightbulb className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h5 className="text-foreground font-semibold mb-2">Aprendizado Contínuo</h5>
                    <p className="text-muted-foreground text-sm">Sistema que evolui com cada processamento</p>
                  </motion.div>

                  <motion.div
                    className="bg-card/60 rounded-xl p-6 border border-border"
                    whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary) / 0.4)" }}
                  >
                    <Network className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h5 className="text-foreground font-semibold mb-2">Rede Neural</h5>
                    <p className="text-muted-foreground text-sm">Processamento distribuído em tempo real</p>
                  </motion.div>
                </div>

                <motion.button
                  className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:bg-primary/90"
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
