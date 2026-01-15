"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
      value: "(19) 97818-0175",
      note: "Seg-Sex, 08h-18h",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@inttax.com.br",
      note: "Resposta em até 2h",
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "São Paulo – SP",
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
    <section id="contato" className="py-32 bg-muted/30 relative overflow-hidden">

      <div ref={containerRef} className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fale&nbsp;<span className="text-primary">Conosco</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-10 border border-border overflow-hidden">

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-8">Solicite uma Demonstração</h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* --- Row 1 --- */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Nome *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="voce@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary outline-none"
                      />
                    </div>
                  </div>

                  {/* --- Row 2 --- */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Empresa</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(19) 97818-0175"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary outline-none"
                      />
                    </div>
                  </div>

                  {/* --- Row 3 --- */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Número de funcionários</label>
                    <Select
                      value={formData.employees}
                      onValueChange={(value) => setFormData({ ...formData, employees: value })}
                    >
                      <SelectTrigger className="w-full bg-background border border-border text-foreground focus:ring-primary">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10</SelectItem>
                        <SelectItem value="11-50">11-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="200+">200+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* --- Message --- */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Mensagem</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Conte-nos mais sobre suas necessidades…"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:border-primary outline-none resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 w-full py-3 rounded-lg font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center"
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
                className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: "hsl(var(--primary) / 0.4)" }}
              >
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">{item.title}</p>
                    <p className="text-primary font-medium">{item.value}</p>
                    <p className="text-muted-foreground text-sm">{item.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Benefits List */}
            <motion.div
              className="relative bg-card/80 rounded-2xl p-8 border border-border backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-foreground mb-6">Por que escolher a inttax?</h4>
                <ul className="space-y-3 text-muted-foreground">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start space-x-2">
                      <span className="mt-1 w-2 h-2 bg-primary rounded-full shrink-0"></span>
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
