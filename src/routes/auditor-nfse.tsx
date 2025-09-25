import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FileCheck, Database, Search, AlertTriangle, TrendingUp, Clock } from "lucide-react"

export default function AuditorNFSePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <Header />

      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  AuditorNFSe
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Solução especializada em auditoria de Notas Fiscais de Serviços Eletrônicas com tecnologia de ponta.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 text-lg"
              >
                Conhecer Solução
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Funcionalidades Especializadas</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileCheck,
                  title: "Validação de NFSe",
                  description: "Validação automática de notas fiscais de serviços com verificação de autenticidade.",
                },
                {
                  icon: Database,
                  title: "Integração Municipal",
                  description: "Integração com sistemas municipais para consulta e validação em tempo real.",
                },
                {
                  icon: Search,
                  title: "Auditoria Detalhada",
                  description: "Análise minuciosa de impostos, retenções e cálculos tributários.",
                },
                {
                  icon: AlertTriangle,
                  title: "Detecção de Anomalias",
                  description: "Identificação automática de inconsistências e possíveis irregularidades.",
                },
                {
                  icon: TrendingUp,
                  title: "Análise de Tendências",
                  description: "Relatórios com análise de tendências e padrões nos serviços prestados.",
                },
                {
                  icon: Clock,
                  title: "Processamento Ágil",
                  description: "Processamento rápido de grandes volumes de NFSe com alta eficiência.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="w-12 h-12 text-pink-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
