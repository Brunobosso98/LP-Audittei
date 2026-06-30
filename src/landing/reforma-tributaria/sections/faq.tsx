import { useState } from "react"
import { Plus } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

const ITENS = [
  {
    q: "O que muda com a Reforma Tributária do consumo?",
    a: "ICMS, ISS, PIS, COFINS e IPI dão lugar a três tributos: IBS (estadual/municipal), CBS (federal) e Imposto Seletivo. A transição começa em 2026 e vai até 2033, com apuração paralela nos primeiros anos e substituição gradual por alíquota e regime do cliente.",
  },
  {
    q: "O Simulador da Reforma roda sobre a carteira inteira?",
    a: "Sim. A Inttax aplica o Simulador sobre a base consolidada de NF-e e SPED do escritório. O recálculo é por cliente, com cenários conservador, base e crítico devolvidos nos quatro eixos: custo, preço, fornecedores e margem.",
  },
  {
    q: "Como o sistema trata regimes específicos e fornecedores do Simples?",
    a: "Cada fornecedor é classificado pelo regime declarado na NF-e. Fornecedores do Simples Nacional têm tratamento próprio na curva de substituição, com regimes imunes e específicos isolados para evitar distorções.",
  },
  {
    q: "De onde vêm as alíquotas de IBS e CBS usadas no cenário?",
    a: "As alíquotas seguem o calendário público do CONFAZ e o PLP 68/2024. A Inttax atualiza os parâmetros automaticamente a cada novo marco federativo, e a fonte é exibida em cada cenário para auditoria.",
  },
  {
    q: "O ranking de risco é estático?",
    a: "Não. O ranking recalibra a cada novo cenário simulado e sempre que uma nova fase do cronograma é ativada. Produtos com risco Crítico entram primeiro na pauta de revisão da reunião.",
  },
  {
    q: "Posso exportar o material para abrir a reunião com o cliente?",
    a: "Sim. O resumo executivo sai em PDF pronto para apresentar, com cenário antes e depois, top NCMs sensíveis, ranking de risco e o plano de ação priorizado com prazos.",
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
          O que escritórios consultivos costumam perguntar sobre a Reforma.
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
