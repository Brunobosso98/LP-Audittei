import { useState } from "react"
import { Plus } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

const ITEMS = [
  {
    q: "A Inttax substitui o ERP contábil do escritório?",
    a: "Não. A Inttax opera como camada de inteligência sobre as informações que o ERP já processa. SPED, NF-e e cadastros continuam sendo geridos pelas ferramentas que você já usa; a Inttax lê, analisa e devolve as exceções que importam.",
  },
  {
    q: "Como funciona o Simulador da Reforma Tributária na prática?",
    a: "Você aplica o Simulador sobre a carteira a partir das notas e do SPED já processados. Ele projeta, por cenário, o impacto da transição em custo, preço, fornecedores e margem de cada cliente. A base de cálculo e os cenários são parametrizados na implantação.",
  },
  {
    q: "Os relatórios do Fiscal 360 substituem a revisão humana?",
    a: "Não. O Fiscal 360 transforma o trabalho braçal em revisão de exceções: ele lê as operações, prioriza as inconsistências que merecem atenção e mantém a decisão final com o profissional fiscal.",
  },
  {
    q: "O material sai pronto para a reunião com o cliente final?",
    a: "Sim. O Simulador entrega a leitura por cliente no formato da reunião de consultoria: cenário antes e depois, NCMs mais sensíveis, ranking de risco e a recomendação fechada. O escritório conduz a conversa a partir desse material.",
  },
  {
    q: "Onde os dados dos clientes ficam armazenados?",
    a: "A política de armazenamento e o tratamento dos dados são detalhados na demonstração, de acordo com os requisitos do seu escritório. Fale com o time comercial para os detalhes técnicos.",
  },
  {
    q: "Quais ERPs e sistemas a Inttax integra?",
    a: "A integração depende dos sistemas que o seu escritório já utiliza. Na demonstração mapeamos as fontes de NF-e e SPED da sua operação e validamos a compatibilidade antes de qualquer migração.",
  },
  {
    q: "Como funciona a implantação e o suporte?",
    a: "A implantação é conduzida pelo time da Inttax junto ao seu escritório, com acompanhamento durante a entrada dos primeiros clientes. Os formatos de suporte são apresentados na conversa comercial.",
  },
  {
    q: "Preciso treinar a equipe?",
    a: "A operação parte de fluxos que a equipe fiscal já conhece — leitura de NF-e, SPED e cenários tributários. O onboarding guiado acompanha os primeiros usos; a profundidade do treinamento é dimensionada por porte de carteira.",
  },
  {
    q: "Como é a precificação?",
    a: "A precificação é definida conforme o porte da carteira e os módulos contratados. Na demonstração você recebe uma proposta com base no seu volume real de operações.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="faq" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
        <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl">
          O que escritórios como o seu costumam perguntar.
        </h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={cn(
                  "border-b border-border last:border-b-0 transition-colors duration-300",
                  isOpen ? "bg-muted/30" : "hover:bg-muted/20",
                )}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors focus-visible:bg-muted/40 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
                  >
                    <span
                      className={cn(
                        "text-base font-medium transition-colors duration-300",
                        isOpen ? "text-primary" : "text-foreground",
                      )}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
                      }
                      className={cn(
                        "inline-flex size-5 shrink-0 items-center justify-center transition-colors duration-300",
                        isOpen ? "text-primary" : "text-muted-foreground",
                      )}
                      aria-hidden="true"
                    >
                      <Plus className="size-5" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : {
                              height: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                              opacity: { duration: 0.2 },
                            }
                      }
                      className="overflow-hidden"
                    >
                      <p className="max-w-prose px-5 pb-5 leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
