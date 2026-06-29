"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    pergunta: "A Inttax substitui o ERP contábil do escritório?",
    resposta:
      "Não. A Inttax opera como camada de inteligência sobre as informações que o ERP já processa. SPED, NF-e e cadastros continuam sendo geridos pelas ferramentas que você já usa; nós lemos, analisamos e devolvemos as exceções que importam.",
  },
  {
    pergunta: "Como funciona o Simulador da Reforma Tributária na prática?",
    resposta:
      "Você importa a base de NF-e e cadastros de produtos do cliente. O simulador aplica os parâmetros da Reforma (CBS, IBS, regimes) sobre custo, preço, fornecedores e margem. O resultado sai em relatórios comparativos por cenário, prontos para você apresentar ao cliente.",
  },
  {
    pergunta: "Os relatórios do Fiscal 360 substituem a revisão humana?",
    resposta:
      "Não, e não é essa a proposta. O Fiscal 360 lê até 98% das operações e devolve apenas as exceções para o analista revisar. A cobertura ampla elimina a dependência de amostragem; a curadoria final continua sendo do time fiscal.",
  },
  {
    pergunta: "Onde os dados dos clientes ficam armazenados?",
    resposta:
      "Em infraestrutura cloud no Brasil, com criptografia em trânsito e em repouso, controle de acesso por papel e logs de auditoria. A Inttax não comercializa nem compartilha os dados dos clientes do escritório.",
  },
  {
    pergunta: "Quais ERPs e sistemas a Inttax integra?",
    resposta:
      "SPED, NF-e (entrada e saída), XML de NFS-e e os principais formatos de layout contábil do mercado. Para integrações específicas com o ERP do escritório, nosso time avalia caso a caso durante a implantação.",
  },
  {
    pergunta: "Como funciona a implantação e o suporte?",
    resposta:
      "Implantação assistida pelo time da Inttax, com cronograma definido por porte do escritório. Suporte técnico em horário comercial e suporte fiscal com profissionais contábeis para dúvidas de interpretação e legislação.",
  },
  {
    pergunta: "Preciso treinar a equipe?",
    resposta:
      "Sim, e está incluído. O treinamento cobre operação dos módulos, leitura dos relatórios e uso dos relatórios como ferramenta de conversa com o cliente. Material fica disponível para consulta posterior.",
  },
  {
    pergunta: "Como é a precificação?",
    resposta:
      "Por porte do escritório e módulos contratados. O detalhamento é apresentado na demonstração, depois que entendemos o volume da sua carteira e os módulos que fazem sentido para o seu momento.",
  },
]

export default function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const animateProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative py-20 md:py-28 border-t border-border"
      aria-labelledby="faq-title"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div className="max-w-3xl" {...animateProps(0)}>
          <div className="section-strip" aria-hidden="true" />
          <p className="text-eyebrow">Perguntas frequentes</p>
          <h2 id="faq-title" className="text-display-xl text-foreground mt-3">
            O que escritórios como o seu costumam perguntar.
          </h2>
        </motion.div>

        <div className="mt-12 max-w-3xl">
          <ul className="divide-y divide-border border-t border-b border-border">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <motion.li key={faq.pergunta} {...animateProps(0.05 + i * 0.04)}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                  >
                    <span className="text-display-sm text-foreground group-hover:text-primary transition-colors">
                      {faq.pergunta}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 mt-1 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <motion.div
                    id={`faq-panel-${i}`}
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-body text-muted-foreground pb-5 pr-12 text-measure">
                      {faq.resposta}
                    </p>
                  </motion.div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}