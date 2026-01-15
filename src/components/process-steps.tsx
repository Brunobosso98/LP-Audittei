"use client"

import { motion } from "framer-motion"
import { FileText, Users, Target, CheckCircle, Calculator, BarChart } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Importação de NF-e e SPED",
    description: "Importe automaticamente suas notas fiscais eletrônicas e arquivos SPED para análise completa.",
    color: "from-rose-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Criação Automática de Clientes",
    description: "O sistema identifica e cria automaticamente o cadastro de novos clientes baseado nos documentos.",
    color: "from-pink-500 to-pink-500",
  },
  {
    title: "Cenários Tributários e Produtos",
    description:
      "Geração inteligente de cenários tributários e cadastro automático de produtos com classificação fiscal.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: CheckCircle,
    title: "Aprovação de Cenários",
    description: "Revise e aprove os cenários criados automaticamente antes da implementação em produção.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Calculator,
    title: "Cálculo de Auditoria NF-e Entrada",
    description: "Auditoria automatizada das notas fiscais de entrada com validação de impostos e créditos.",
    color: "from-indigo-500 to-pink-500",
  },
  {
    icon: BarChart,
    title: "Cálculo de Auditoria NF-e Saída",
    description: "Análise completa das notas fiscais de saída com verificação de conformidade tributária.",
    color: "from-teal-500 to-rose-500",
  },
]

export default function ProcessSteps() {
  return (
    <section id="processo" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como Funciona o{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Processo inttax
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra o passo a passo completo do nosso sistema de auditoria fiscal automatizada
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}
                  >
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>

                <p className="text-gray-300 leading-relaxed">{step.description}</p>

                <div className="absolute inset-0 bg-gradient-to-r from-rose-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl p-8 border border-pink-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Processo Completo e Automatizado</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Todo o fluxo é executado de forma inteligente e automatizada, reduzindo drasticamente o tempo de
              processamento e eliminando erros manuais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
