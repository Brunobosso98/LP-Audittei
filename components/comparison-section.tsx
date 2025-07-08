"use client"

import { motion } from "framer-motion"
import { Check, X, TrendingUp, Clock, DollarSign } from "lucide-react"

const comparisonData = [
  {
    feature: "Tempo de Processamento",
    manual: "Horas ou dias",
    audittei: "Minutos",
    manualIcon: Clock,
    auditteIcon: Clock,
  },
  {
    feature: "Precisão dos Resultados",
    manual: "Sujeito a erros humanos",
    audittei: "99.9% de precisão",
    manualIcon: X,
    auditteIcon: Check,
  },
  {
    feature: "Custo Operacional",
    manual: "Alto (mão de obra)",
    audittei: "Redução de até 80%",
    manualIcon: DollarSign,
    auditteIcon: DollarSign,
  },
  {
    feature: "Escalabilidade",
    manual: "Limitada",
    audittei: "Ilimitada",
    manualIcon: X,
    auditteIcon: TrendingUp,
  },
  {
    feature: "Detecção de Inconsistências",
    manual: "Parcial",
    audittei: "Completa e automática",
    manualIcon: X,
    auditteIcon: Check,
  },
]

const results = [
  {
    metric: "Redução de Tempo",
    value: "85%",
    description: "Menos tempo gasto em processos manuais",
  },
  {
    metric: "Aumento de Precisão",
    value: "99.9%",
    description: "Precisão na identificação de inconsistências",
  },
  {
    metric: "Economia de Custos",
    value: "70%",
    description: "Redução nos custos operacionais",
  },
  {
    metric: "Produtividade",
    value: "300%",
    description: "Aumento na capacidade de processamento",
  },
]

export default function ComparisonSection() {
  return (
    <section id="comparacao" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Auditoria Manual vs{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Auditoria Digital
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja a diferença entre os métodos tradicionais e nossa solução automatizada
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-0">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 border-b md:border-b-0 md:border-r border-purple-500/20">
              <h3 className="text-xl font-semibold text-white text-center">Aspecto</h3>
            </div>
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 p-6 border-b md:border-b-0 md:border-r border-purple-500/20">
              <h3 className="text-xl font-semibold text-white text-center">Auditoria Manual</h3>
            </div>
            <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 p-6">
              <h3 className="text-xl font-semibold text-white text-center">Audittei Digital</h3>
            </div>
          </div>

          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-3 gap-0 border-t border-purple-500/20"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6 border-b md:border-b-0 md:border-r border-purple-500/20">
                <p className="text-white font-medium">{item.feature}</p>
              </div>
              <div className="p-6 border-b md:border-b-0 md:border-r border-purple-500/20 bg-red-900/10">
                <p className="text-red-300">{item.manual}</p>
              </div>
              <div className="p-6 bg-green-900/10">
                <p className="text-green-300">{item.audittei}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">Comparação de Resultados</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {result.value}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{result.metric}</h4>
                  <p className="text-gray-300">{result.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
