"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  Clock,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  X,
  Zap,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react"

const comparisonData = [
  {
    category: "Tempo de Processamento",
    manual: { value: "8-12 horas", score: 2, icon: Clock },
    audittei: { value: "5-10 minutos", score: 10, icon: Zap },
    improvement: "95% mais rápido",
  },
  {
    category: "Precisão dos Resultados",
    manual: { value: "70-85%", score: 3, icon: AlertTriangle },
    audittei: { value: "99.9%", score: 10, icon: CheckCircle },
    improvement: "25% mais preciso",
  },
  {
    category: "Custo Operacional",
    manual: { value: "R$ 5.000/mês", score: 2, icon: DollarSign },
    audittei: { value: "R$ 1.200/mês", score: 9, icon: DollarSign },
    improvement: "76% economia",
  },
  {
    category: "Escalabilidade",
    manual: { value: "Limitada", score: 2, icon: X },
    audittei: { value: "Ilimitada", score: 10, icon: TrendingUp },
    improvement: "Crescimento sem limites",
  },
  {
    category: "Detecção de Inconsistências",
    manual: { value: "Parcial", score: 3, icon: AlertTriangle },
    audittei: { value: "Completa", score: 10, icon: CheckCircle },
    improvement: "100% cobertura",
  },
]

const results = [
  {
    metric: "Redução de Tempo",
    value: 85,
    displayValue: "85%",
    description: "Menos tempo gasto em processos manuais",
    color: "from-blue-500 to-cyan-500",
  },
  {
    metric: "Aumento de Precisão",
    value: 99.9,
    displayValue: "99.9%",
    description: "Precisão na identificação de inconsistências",
    color: "from-green-500 to-emerald-500",
  },
  {
    metric: "Economia de Custos",
    value: 70,
    displayValue: "70%",
    description: "Redução nos custos operacionais",
    color: "from-purple-500 to-pink-500",
  },
  {
    metric: "Produtividade",
    value: 300,
    displayValue: "300%",
    description: "Aumento na capacidade de processamento",
    color: "from-orange-500 to-red-500",
  },
]

// Fixed chart data for evolution visualization
const evolutionData = [
  { month: "Jan", manual: 25, audittei: 85 },
  { month: "Fev", manual: 22, audittei: 88 },
  { month: "Mar", manual: 28, audittei: 92 },
  { month: "Abr", manual: 20, audittei: 94 },
  { month: "Mai", manual: 23, audittei: 96 },
  { month: "Jun", manual: 21, audittei: 98 },
]

export default function ComparisonVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeComparison, setActiveComparison] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"comparison" | "charts">("comparison")
  const [animatedValues, setAnimatedValues] = useState<number[]>(results.map(() => 0))

  useEffect(() => {
    if (isInView) {
      results.forEach((result, index) => {
        const timer = setTimeout(
          () => {
            let current = 0
            const increment = result.value / 60
            const interval = setInterval(() => {
              current += increment
              if (current >= result.value) {
                current = result.value
                clearInterval(interval)
              }
              setAnimatedValues((prev) => {
                const newValues = [...prev]
                newValues[index] = current
                return newValues
              })
            }, 16)
          },
          1000 + index * 200,
        )

        return () => clearTimeout(timer)
      })
    }
  }, [isInView])

  return (
    <section id="comparacao" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
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
            Auditoria Manual vs{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Auditoria Digital
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Veja a diferença transformadora entre os métodos tradicionais e nossa solução automatizada
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-background/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-2 border border-purple-500/20">
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "comparison"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white"
              }`}
            >
              <BarChart3 className="w-5 h-5 inline-block mr-2" />
              Comparação Detalhada
            </button>
            <button
              onClick={() => setActiveTab("charts")}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "charts"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white"
              }`}
            >
              <Activity className="w-5 h-5 inline-block mr-2" />
              Gráficos Evolutivos
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        {activeTab === "comparison" ? (
          <>
            {/* Interactive Comparison */}
            <div className="max-w-6xl mx-auto mb-20">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={item.category}
                  className="mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div
                    className="group cursor-pointer"
                    onClick={() => setActiveComparison(activeComparison === index ? null : index)}
                  >
                    <div className="bg-background/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 overflow-hidden">
                      <div className="grid md:grid-cols-4 gap-0">
                        {/* Category */}
                        <div className="bg-gradient-to-r from-muted/80 to-muted/60 dark:from-slate-800/80 dark:to-slate-700/80 p-8 border-b md:border-b-0 md:border-r border-purple-500/20">
                          <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">{item.category}</h3>
                          <motion.div
                            className="text-purple-400 text-sm"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            Clique para detalhes
                          </motion.div>
                        </div>

                        {/* Manual */}
                        <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 p-8 border-b md:border-b-0 md:border-r border-purple-500/20 relative">
                          <div className="flex items-center mb-4">
                            <item.manual.icon className="w-6 h-6 text-red-400 mr-3" />
                            <span className="text-red-300 font-medium">Auditoria Manual</span>
                          </div>
                          <div className="text-2xl font-bold text-foreground dark:text-white mb-2">
                            {item.manual.value}
                          </div>

                          {/* Score Visualization */}
                          <div className="flex space-x-1">
                            {[...Array(10)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`w-3 h-3 rounded-full ${i < item.manual.score ? "bg-red-500" : "bg-gray-600"}`}
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Audittei */}
                        <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 p-8 border-b md:border-b-0 md:border-r border-purple-500/20 relative">
                          <div className="flex items-center mb-4">
                            <item.audittei.icon className="w-6 h-6 text-green-400 mr-3" />
                            <span className="text-green-300 font-medium">inttax Digital</span>
                          </div>
                          <div className="text-2xl font-bold text-foreground dark:text-white mb-2">
                            {item.audittei.value}
                          </div>

                          {/* Score Visualization */}
                          <div className="flex space-x-1">
                            {[...Array(10)].map((_, i) => (
                              <motion.div
                                key={i}
                                className={`w-3 h-3 rounded-full ${
                                  i < item.audittei.score ? "bg-green-500" : "bg-gray-600"
                                }`}
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ delay: 0.7 + index * 0.1 + i * 0.05 }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Improvement */}
                        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 relative">
                          <div className="flex items-center mb-4">
                            <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
                            <span className="text-blue-300 font-medium">Melhoria</span>
                          </div>
                          <motion.div
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1 + index * 0.1 }}
                          >
                            {item.improvement}
                          </motion.div>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: activeComparison === index ? "auto" : 0,
                          opacity: activeComparison === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden border-t border-purple-500/20"
                      >
                        <div className="p-8 bg-muted/50 dark:bg-slate-800/50">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-lg font-semibold text-red-300 mb-3">Limitações do Método Manual</h4>
                              <ul className="space-y-2 text-muted-foreground dark:text-gray-300">
                                <li className="flex items-center">
                                  <X className="w-4 h-4 text-red-400 mr-2" />
                                  Alto tempo de processamento
                                </li>
                                <li className="flex items-center">
                                  <X className="w-4 h-4 text-red-400 mr-2" />
                                  Sujeito a erros humanos
                                </li>
                                <li className="flex items-center">
                                  <X className="w-4 h-4 text-red-400 mr-2" />
                                  Dificuldade de escalabilidade
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-green-300 mb-3">Vantagens da inttax</h4>
                              <ul className="space-y-2 text-muted-foreground dark:text-gray-300">
                                <li className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                                  Processamento em tempo real
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                                  Precisão de 99.9%
                                </li>
                                <li className="flex items-center">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                                  Escalabilidade ilimitada
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          /* Charts Tab - Fixed with larger performance chart */
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Evolution Chart - Fixed */}
              <div className="bg-background/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6 flex items-center">
                  <Activity className="w-6 h-6 mr-3 text-blue-400" />
                  Evolução da Eficiência
                </h3>
                <div className="h-80 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 240">
                    {/* Grid lines - adjust for new height */}
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <line
                        key={i}
                        x1="50"
                        y1={40 + i * 30}
                        x2="350"
                        y2={40 + i * 30}
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-muted-foreground/20"
                      />
                    ))}

                    {/* Y-axis labels - adjust for new height */}
                    {[100, 80, 60, 40, 20, 0].map((value, i) => (
                      <text
                        key={value}
                        x="35"
                        y={45 + i * 30}
                        className="text-xs fill-current text-muted-foreground"
                        textAnchor="end"
                      >
                        {value}%
                      </text>
                    ))}

                    {/* Manual line - adjust for new height */}
                    <motion.path
                      d={`M 50 ${220 - evolutionData[0].manual * 1.8} ${evolutionData
                        .map((data, index) => `L ${50 + index * 50} ${220 - data.manual * 1.8}`)
                        .join(" ")}`}
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />

                    {/* Audittei line - adjust for new height */}
                    <motion.path
                      d={`M 50 ${220 - evolutionData[0].audittei * 1.8} ${evolutionData
                        .map((data, index) => `L ${50 + index * 50} ${220 - data.audittei * 1.8}`)
                        .join(" ")}`}
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />

                    {/* Data points - adjust for new height */}
                    {evolutionData.map((data, index) => (
                      <g key={data.month}>
                        {/* Manual points */}
                        <motion.circle
                          cx={50 + index * 50}
                          cy={220 - data.manual * 1.8}
                          r="4"
                          fill="#EF4444"
                          stroke="#fff"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        />
                        {/* Audittei points */}
                        <motion.circle
                          cx={50 + index * 50}
                          cy={220 - data.audittei * 1.8}
                          r="4"
                          fill="#10B981"
                          stroke="#fff"
                          strokeWidth="2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1 + index * 0.1 }}
                        />
                        {/* Month labels */}
                        <text
                          x={50 + index * 50}
                          y="235"
                          className="text-xs fill-current text-muted-foreground"
                          textAnchor="middle"
                        >
                          {data.month}
                        </text>
                      </g>
                    ))}

                    {/* Legend - adjust position for new height */}
                    <g transform="translate(60, 20)">
                      <rect x="-5" y="-10" width="120" height="25" fill="rgba(0,0,0,0.1)" rx="5" />
                      <circle cx="5" cy="0" r="4" fill="#EF4444" />
                      <text x="15" y="4" className="text-sm fill-current text-muted-foreground">
                        Manual
                      </text>
                      <circle cx="70" cy="0" r="4" fill="#10B981" />
                      <text x="80" y="4" className="text-sm fill-current text-muted-foreground">
                        inttax
                      </text>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Performance Comparison - Increased size to prevent text overlap */}
              <div className="bg-background/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6 flex items-center">
                  <PieChart className="w-6 h-6 mr-3 text-purple-400" />
                  Comparação de Performance
                </h3>
                {/* Increased height from h-64 to h-80 and container size */}
                <div className="h-96 flex flex-col items-center justify-center">
                  <div className="relative w-72 h-72 mb-6">
                    {/* Background circles */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="5"
                        fill="none"
                        className="text-muted/20"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="5"
                        fill="none"
                        className="text-muted/20"
                      />
                    </svg>

                    {/* Manual performance (outer circle) */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#EF4444"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{ strokeDashoffset: 251.2 * (1 - 0.25) }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </svg>

                    {/* Audittei performance (inner circle) */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="28"
                        stroke="#10B981"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="175.8"
                        initial={{ strokeDashoffset: 175.8 }}
                        animate={{ strokeDashoffset: 175.8 * (1 - 0.95) }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </svg>

                    {/* Center content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        className="text-5xl font-bold text-green-400 mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        95%
                      </motion.div>
                      <div className="text-base text-muted-foreground mb-1">inttax</div>
                    </div>
                  </div>

                  {/* Separate comparison text and labels */}
                  <div className="text-center mb-4">
                    <div className="text-lg font-semibold text-foreground dark:text-white mb-2">inttax vs Manual</div>
                    <div className="text-red-400 text-base">95% vs 25%</div>
                  </div>

                  {/* Labels - now separate from chart */}
                  <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                      Auditoria Manual (25%)
                    </span>
                    <span className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                      inttax Digital (95%)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Velocidade de Processamento", value: "10x", color: "text-blue-400", icon: Zap },
                { label: "Redução de Erros", value: "99%", color: "text-green-400", icon: CheckCircle },
                { label: "ROI em 12 meses", value: "380%", color: "text-purple-400", icon: TrendingUp },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="bg-background/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 text-center group hover:border-purple-500/40 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <motion.div
                    className={`text-4xl font-bold ${metric.color} mb-2`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-muted-foreground dark:text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Results Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground dark:text-white mb-6">Comparação de Resultados</h3>
            <p className="text-xl text-muted-foreground dark:text-gray-300">Impacto real da transformação digital</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <div className="relative bg-background/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${result.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Circular Progress */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted/20 dark:text-slate-700"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#gradient-${index})"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={{
                          strokeDashoffset: isInView ? 251.2 * (1 - Math.min(animatedValues[index] / 100, 1)) : 251.2,
                        }}
                        transition={{ duration: 2, delay: 1.2 + index * 0.2 }}
                      />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>

                    {/* Value Display */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.span
                        className={`text-2xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        transition={{ delay: 1.5 + index * 0.2 }}
                      >
                        {result.value > 100
                          ? `${Math.round(animatedValues[index])}%`
                          : `${animatedValues[index].toFixed(1)}%`}
                      </motion.span>
                    </div>

                  </div>

                  <h4 className="text-xl font-bold text-foreground dark:text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {result.metric}
                  </h4>
                  <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                    {result.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
