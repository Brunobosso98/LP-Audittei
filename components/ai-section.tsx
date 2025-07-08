"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Target, Shield, BarChart3, Cpu } from "lucide-react"

const aiFeatures = [
  {
    icon: Brain,
    title: "Machine Learning Avançado",
    description: "Algoritmos que aprendem com cada auditoria, melhorando continuamente a precisão e eficiência.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Processamento Inteligente",
    description: "IA capaz de processar milhares de documentos fiscais em segundos com alta precisão.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Detecção Automática de Anomalias",
    description: "Identificação inteligente de inconsistências e padrões suspeitos em documentos fiscais.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Validação Inteligente",
    description: "Sistema de validação que garante conformidade com as mais recentes legislações fiscais.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Análise Preditiva",
    description: "Previsão de tendências e identificação de riscos fiscais antes que se tornem problemas.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cpu,
    title: "Automação Completa",
    description: "Fluxos de trabalho totalmente automatizados que reduzem drasticamente a intervenção manual.",
    color: "from-teal-500 to-blue-500",
  },
]

export default function AISection() {
  return (
    <section id="ia" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inteligência Artificial{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              no Centro da Inovação
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma utiliza as mais avançadas tecnologias de IA para revolucionar a auditoria fiscal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>

                <p className="text-gray-300 leading-relaxed">{feature.description}</p>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Stats */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">IA em Números</h3>
            <p className="text-gray-300 text-lg">Resultados comprovados da nossa inteligência artificial</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <p className="text-white font-medium">Precisão</p>
              <p className="text-gray-400 text-sm">na detecção de anomalias</p>
            </motion.div>

            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                10x
              </div>
              <p className="text-white font-medium">Mais Rápido</p>
              <p className="text-gray-400 text-sm">que processos manuais</p>
            </motion.div>

            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-white font-medium">Disponibilidade</p>
              <p className="text-gray-400 text-sm">processamento contínuo</p>
            </motion.div>

            <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <p className="text-white font-medium">Documentos</p>
              <p className="text-gray-400 text-sm">processados mensalmente</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
