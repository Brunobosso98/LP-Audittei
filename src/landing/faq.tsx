import { useState } from "react"
import { Plus } from "lucide-react"
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

  return (
    <section id="faq" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-sm font-medium text-primary">Perguntas frequentes</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          O que escritórios como o seu costumam perguntar
        </h2>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
                  >
                    <span className="text-base font-medium text-foreground">{item.q}</span>
                    <Plus
                      className={cn(
                        "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-45 text-primary",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!isOpen}
                  className="px-5 pb-5"
                >
                  <p className="max-w-prose leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
