"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Clock, Shield, Settings } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                inttax: Inteligência Fiscal que{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Revoluciona
                </span>{" "}
                seu Escritório Contábil
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Descubra como a inttax simplifica a complexidade fiscal e impulsiona a eficiência do seu negócio.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
                onClick={scrollToContact}
              >
                Agende uma Demonstração
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                Saiba Mais
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HfAwF1Njsniud6ZefgLkT2COTj8l2g.png"
                alt="Dashboard inttax"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          className="mt-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transforme seu Processo Fiscal: Ganhe{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tempo, Segurança e Padronização
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="text-center space-y-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Ganhe Tempo</h3>
              <p className="text-gray-300">
                Elimine horas de trabalho manual e repetitivo. A automação da inttax libera sua equipe para atividades
                estratégicas.
              </p>
            </motion.div>

            <motion.div className="text-center space-y-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Segurança Fiscal</h3>
              <p className="text-gray-300">
                Reduza riscos de autuações e multas. Nossa plataforma identifica inconsistências e garante conformidade
                fiscal.
              </p>
            </motion.div>

            <motion.div className="text-center space-y-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Padronize Processos</h3>
              <p className="text-gray-300">
                Garanta consistência e organização. Padronize suas auditorias fiscais com metodologia comprovada.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
