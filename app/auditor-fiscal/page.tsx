"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, BarChart3, Shield, Zap, FileText, Users } from "lucide-react"

export default function AuditorFiscalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Auditor Fiscal
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Sistema completo de auditoria fiscal automatizada com inteligência artificial para escritórios contábeis
                modernos.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
              >
                Solicitar Demonstração
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Recursos Principais</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Processamento Automático",
                  description: "Importação e processamento automático de NF-e e SPED com alta precisão.",
                },
                {
                  icon: Shield,
                  title: "Validação Inteligente",
                  description: "Validação automática de conformidade fiscal e detecção de inconsistências.",
                },
                {
                  icon: BarChart3,
                  title: "Relatórios Avançados",
                  description: "Relatórios detalhados com análises e insights para tomada de decisão.",
                },
                {
                  icon: Zap,
                  title: "Processamento Rápido",
                  description: "Processamento em tempo real com resultados em minutos, não horas.",
                },
                {
                  icon: Users,
                  title: "Gestão de Clientes",
                  description: "Criação automática de cadastros e gestão centralizada de clientes.",
                },
                {
                  icon: CheckCircle,
                  title: "Aprovação de Cenários",
                  description: "Sistema de aprovação para cenários tributários antes da produção.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
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
