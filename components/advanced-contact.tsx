"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"

export default function AdvancedContact() {
  /* ----------------------------- Hooks / State ---------------------------- */
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  /* -------------------------------- Events ------------------------------- */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Fake latency for UX purposes
    await new Promise((r) => setTimeout(r, 1200))

    const whatsappMessage = `
🚀 *Nova Solicitação de Demonstração - inttax*

👤 *Dados do Interessado:*
• Nome: ${formData.name}
• Email: ${formData.email}
• Empresa: ${formData.company}
• Telefone: ${formData.phone}
• Funcionários: ${formData.employees}

💬 *Mensagem:*
${formData.message}

Enviado automaticamente pelo site da inttax
`.trim()

    const whatsappURL = `https://wa.me/5519981483536?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappURL, "_blank")

    setIsSubmitting(false)
  }

  /* ------------------------------ Constants ------------------------------ */
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(19) 98148-3536",
      color: "from-blue-500 to-cyan-500",
      note: "Seg-Sex, 08h-18h",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@inttax.com.br",
      color: "from-purple-500 to-pink-500",
      note: "Resposta em até 2h",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "São Paulo – SP",
      color: "from-green-500 to-emerald-500",
      note: "Atendimento nacional",
    },
  ]

  const benefits = [
    "Suporte técnico especializado 24/7",
    "Implementação rápida e eficiente",
    "Treinamento completo da equipe",
    "Atualizações automáticas gratuitas",
    "Consultoria fiscal personalizada",
    "Migração de dados sem custos",
  ]

  /* -------------------------------- Render -------------------------------- */
  return (
    <section id="contato" className="py-32 bg-slate-800/30 relative overflow-hidden">
      {/* Decorative blob */}
      <motion.div
        className="absolute -top-20 -left-32 w-[28rem] h-[28rem] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 120, 0] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div ref={containerRef} className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Fale&nbsp;
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Conosco</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entre em contato e descubra como a inttax pode transformar seu escritório contábil
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* ---------------------------- Contact Form ---------------------------- */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/20 overflow-hidden">
              {/* Subtle background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">Solicite uma Demonstração</h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* --- Row 1 --- */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-white mb-1 block">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-800/80 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white mb-1 block">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="voce@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-800/80 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 outline-none"
                      />
                    </div>
                  </div>

                  {/* --- Row 2 --- */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-white mb-1 block">Empresa</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-800/80 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white mb-1 block">WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(19) 98148-3536"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-800/80 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 outline-none"
                      />
                    </div>
                  </div>

                  {/* --- Row 3 --- */}
                  <div>
                    <label className="text-sm font-medium text-white mb-1 block">Número de funcionários</label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleChange}
                      className="w-full bg-slate-800/80 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:border-purple-400 outline-none"
                    >
                      <option value="">Selecione…</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>

                  {/* --- Message --- */}
                  <div>
                    <label className="text-sm font-medium text-white mb-1 block">Mensagem</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Conte-nos mais sobre suas necessidades…"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-800/80 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4A8 8 0 104 12z"
                        ></path>
                      </svg>
                    ) : null}
                    {isSubmitting ? "Enviando…" : "Enviar via WhatsApp"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* ----------------------------- Side Info ----------------------------- */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Contact Cards */}
            {contactInfo.map(({ icon: Icon, ...item }, idx) => (
              <motion.div
                key={item.title}
                className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: "rgba(168,85,247,0.4)" }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 hover:opacity-10 transition-opacity`}
                />
                <div className="relative z-10 flex items-center space-x-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="text-purple-400 font-medium">{item.value}</p>
                    <p className="text-gray-400 text-sm">{item.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Benefits List */}
            <motion.div
              className="relative bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-6">Por que escolher a inttax?</h4>
                <ul className="space-y-3 text-gray-300">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start space-x-2">
                      <span className="mt-1 w-2 h-2 bg-purple-400 rounded-full shrink-0"></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
