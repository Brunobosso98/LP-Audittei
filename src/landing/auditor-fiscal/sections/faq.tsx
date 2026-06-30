import { useState } from "react"
import { Plus } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

const ITENS = [
  {
    q: "O sistema substitui o ERP do escritório?",
    a: "Não. O Auditor Fiscal opera como camada de inteligência sobre as informações que o ERP já processa. SPED, NF-e e cadastros continuam sendo geridos pelo ERP; o sistema lê, cruza e devolve as exceções que pedem revisão humana.",
  },
  {
    q: "Quais versões de NF-e e eventos o sistema lê?",
    a: "O sistema lê NF-e a partir da versão 3.10 e segue acompanhando as versões 4.00 e 5.00 conforme publicação da SEFAZ. Os eventos (cancelamento, substituição, carta de correção e CCe) também entram automaticamente.",
  },
  {
    q: "Os relatórios substituem a revisão humana?",
    a: "Não. O Auditor Fiscal transforma o trabalho braçal em revisão de exceções. Ele lê as operações, prioriza as inconsistências que merecem atenção e mantém a decisão final com o profissional fiscal.",
  },
  {
    q: "Como funciona o cruzamento entre XML e SPED?",
    a: "Para cada empresa da carteira, o sistema confronta o XML validado contra o SPED processado, no mesmo período. Diferenças de chave, valor, data ou item são marcadas e devolvidas ao analista responsável.",
  },
  {
    q: "Quais regimes tributários são cobertos?",
    a: "Simples Nacional, Lucro Presumido, Lucro Real, MEI, regimes imunes e isentas, além de regimes específicos. Cada regime tem regra própria para apuração, créditos e NCM.",
  },
  {
    q: "Como é definida a implantação e o suporte?",
    a: "A implantação é conduzida pelo time Inttax junto ao seu escritório, com acompanhamento na entrada dos primeiros clientes. Os formatos de suporte e SLA são detalhados na conversa comercial.",
  },
  {
    q: "Posso exportar o material para a reunião com o cliente?",
    a: "Sim. O resumo executivo sai em PDF pronto para apresentar, com cenário antes e depois, top NCMs sensíveis e o plano de ação priorizado. O material entra na reunião como insumo de consultoria.",
  },
] as const

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="faq" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Perguntas técnicas
        </p>
        <h2 className="mt-4 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl">
          O que escritórios fiscais costumam perguntar.
        </h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
          {ITENS.map((item, i) => {
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
                      initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
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
