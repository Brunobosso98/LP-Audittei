"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Carlos Silva",
    position: "Contador Sênior",
    company: "Contabilidade Silva & Associados",
    content:
      "A inttax revolucionou nosso escritório. Reduzimos 80% do tempo gasto em auditorias fiscais e aumentamos significativamente nossa precisão.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Maria Santos",
    position: "Diretora Fiscal",
    company: "Grupo Empresarial Santos",
    content:
      "Implementamos a inttax há 6 meses e os resultados são impressionantes. A IA detecta inconsistências que passariam despercebidas manualmente.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "João Oliveira",
    position: "Sócio-Diretor",
    company: "Oliveira Contabilidade",
    content:
      "Excelente investimento! Nossa equipe agora foca em atividades estratégicas enquanto a inttax cuida da parte operacional com perfeição.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ana Costa",
    position: "Gerente Contábil",
    company: "Costa & Partners",
    content:
      "A automação da inttax nos permitiu expandir nossa carteira de clientes sem aumentar proporcionalmente nossa equipe. Fantástico!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que Nossos{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Depoimentos reais de profissionais que transformaram seus escritórios com a inttax
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-x-6">
              <Quote className="w-12 h-12 text-purple-400 flex-shrink-0 mt-2" />

              <div className="flex-1">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">"{testimonials[currentIndex].content}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{testimonials[currentIndex].name.charAt(0)}</span>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].position}</p>
                      <p className="text-purple-400 text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-slate-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-white">←</span>
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-purple-400" : "bg-slate-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-slate-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-white">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
