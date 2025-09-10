"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Building, Users, TrendingUp } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    position: "Contador Sênior",
    company: "Contabilidade Silva & Associados",
    content:
      "A inttax revolucionou nosso escritório. Reduzimos 80% do tempo gasto em auditorias fiscais e aumentamos significativamente nossa precisão. É impressionante como a IA consegue detectar inconsistências que passariam despercebidas.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    metrics: {
      reduçãoTempo: "80%",
      aumentoPrecisão: "25%",
      satisfaçãoCliente: "95%",
    },
    videoUrl: "#",
  },
  {
    id: 2,
    name: "Maria Santos",
    position: "Diretora Fiscal",
    company: "Grupo Empresarial Santos",
    content:
      "Implementamos a inttax há 6 meses e os resultados são impressionantes. A IA detecta inconsistências que passariam despercebidas manualmente. Nossa equipe agora foca em atividades estratégicas.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    metrics: {
      reduçãoTempo: "75%",
      aumentoPrecisão: "30%",
      satisfaçãoCliente: "98%",
    },
    videoUrl: "#",
  },
  {
    id: 3,
    name: "João Oliveira",
    position: "Sócio-Diretor",
    company: "Oliveira Contabilidade",
    content:
      "Excelente investimento! Nossa equipe agora foca em atividades estratégicas enquanto a inttax cuida da parte operacional com perfeição. O ROI foi alcançado em apenas 3 meses.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    metrics: {
      reduçãoTempo: "85%",
      aumentoPrecisão: "35%",
      satisfaçãoCliente: "97%",
    },
    videoUrl: "#",
  },
  {
    id: 4,
    name: "Ana Costa",
    position: "Gerente Contábil",
    company: "Costa & Partners",
    content:
      "A automação da inttax nos permitiu expandir nossa carteira de clientes sem aumentar proporcionalmente nossa equipe. Fantástico! A qualidade do trabalho melhorou drasticamente.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    metrics: {
      reduçãoTempo: "70%",
      aumentoPrecisão: "28%",
      satisfaçãoCliente: "96%",
    },
    videoUrl: "#",
  },
  {
    id: 5,
    name: "Roberto Lima",
    position: "CEO",
    company: "Lima Consultoria Fiscal",
    content:
      "A inttax transformou completamente nossos processos. Conseguimos atender 3x mais clientes com a mesma equipe. A precisão da IA é surpreendente e nossos clientes estão muito satisfeitos.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    metrics: {
      reduçãoTempo: "90%",
      aumentoPrecisão: "40%",
      satisfaçãoCliente: "99%",
    },
    videoUrl: "#",
  },
]

export default function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-green-500/10 to-rose-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 0],
          }}
          transition={{
            duration: 30,
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
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            O que Nossos{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Depoimentos reais de profissionais que transformaram seus escritórios com a inttax
          </motion.p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: -45 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-slate-900/90 backdrop-blur-xl border border-pink-500/20 rounded-3xl p-12 relative overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-pink-500/5"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Quote and Content */}
                    <div className="lg:col-span-2">
                      <motion.div
                        className="flex items-start space-x-6 mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Quote className="w-16 h-16 text-pink-400 flex-shrink-0 mt-2" />
                        <div className="flex-1">
                          <motion.p
                            className="text-gray-300 text-lg leading-relaxed mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            "{testimonials[currentIndex].content}"
                          </motion.p>

                          {/* Rating */}
                          <motion.div
                            className="flex items-center space-x-1 mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, rotate: -180 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ delay: 0.8 + i * 0.1 }}
                              >
                                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                              </motion.div>
                            ))}
                          </motion.div>

                          {/* Author Info */}
                          <motion.div
                            className="flex items-center space-x-4"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                          >
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-xl">
                                {testimonials[currentIndex].name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                              <p className="text-gray-400">{testimonials[currentIndex].position}</p>
                              <p className="text-pink-400 font-medium">{testimonials[currentIndex].company}</p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Video Testimonial Button */}
                      <motion.button
                        className="flex items-center space-x-3 text-rose-400 hover:text-rose-300 transition-colors group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center group-hover:bg-rose-500/30 transition-colors">
                          <Play className="w-6 h-6 ml-1" />
                        </div>
                        <span className="font-medium">Assistir depoimento em vídeo</span>
                      </motion.button>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-6">
                      <motion.h4
                        className="text-xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        Resultados Alcançados
                      </motion.h4>

                      {Object.entries(testimonials[currentIndex].metrics).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          className="bg-slate-800/50 rounded-2xl p-6 border border-pink-500/20"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          whileHover={{ scale: 1.02, borderColor: "rgba(168, 85, 247, 0.4)" }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                                {value}
                              </div>
                              <div className="text-gray-400 text-sm capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </div>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                              {key === "reduçãoTempo" && <TrendingUp className="w-6 h-6 text-white" />}
                              {key === "aumentoPrecisão" && <Building className="w-6 h-6 text-white" />}
                              {key === "satisfaçãoCliente" && <Users className="w-6 h-6 text-white" />}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="w-14 h-14 bg-slate-800/80 hover:bg-pink-600/80 rounded-full flex items-center justify-center transition-all duration-300 border border-pink-500/20 hover:border-pink-500/40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-pink-400" : "bg-slate-600"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-pink-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-14 h-14 bg-slate-800/80 hover:bg-pink-600/80 rounded-full flex items-center justify-center transition-all duration-300 border border-pink-500/20 hover:border-pink-500/40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>

          {/* Auto-play Indicator */}
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-sm px-4 py-2 rounded-full transition-colors ${
                isAutoPlaying
                  ? "text-green-400 bg-green-400/10 border border-green-400/20"
                  : "text-gray-400 bg-slate-800/50 border border-slate-600/20"
              }`}
            >
              {isAutoPlaying ? "Auto-play ativo" : "Auto-play pausado"}
            </button>
          </motion.div>
        </div>

        {/* Testimonials Preview */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="grid md:grid-cols-5 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => goToTestimonial(index)}
                className={`relative p-4 rounded-2xl border transition-all duration-300 ${
                  index === currentIndex
                    ? "border-pink-500/50 bg-pink-500/10"
                    : "border-slate-600/20 bg-slate-800/30 hover:border-pink-500/30"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-1">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.company}</div>
                </div>

                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 border-2 border-pink-400 rounded-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
