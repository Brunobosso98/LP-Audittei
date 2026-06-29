"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { BarChart3, ClipboardList, TrendingUp, Building2, ListChecks, Receipt, Users } from "lucide-react"

export default function EcossistemaSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const animateProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      id="ecossistema"
      ref={containerRef}
      className="relative py-20 md:py-28 border-t border-border bg-primary-soft"
      aria-labelledby="ecossistema-title"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div className="max-w-3xl" {...animateProps(0)}>
          <div className="section-strip" aria-hidden="true" />
          <p className="text-eyebrow">A plataforma completa</p>
          <h2 id="ecossistema-title" className="text-display-xl text-foreground mt-3">
            Três módulos que completam o Simulador da Reforma.
          </h2>
          <p className="text-lead mt-4 text-measure">
            Auditoria, analytics e gestão interna. Cada módulo resolve uma dor específica; juntos, entregam a operação que o cliente percebe como premium.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {/* Módulo 01 — Fiscal 360 */}
          <motion.div
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            {...animateProps(0.1)}
          >
            <div className="lg:col-span-5">
              <span className="text-eyebrow font-mono">02 —</span>
              <h3 className="text-display-lg text-foreground mt-2">
                Acabe com a dependência da análise por amostragem.
              </h3>
              <p className="text-body text-muted-foreground mt-3 text-measure">
                O Fiscal 360 automatiza a leitura das operações tributárias e devolve, para cada cliente da carteira, apenas as inconsistências que precisam de revisão humana. Sem planilha, sem sorte.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="feature-card-accent bg-card p-7">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="text-meta">Cobertura automática</span>
                  <span className="text-meta">Operações tributárias</span>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-display-2xl font-mono tabular text-primary leading-none">
                    98%
                  </span>
                  <span className="text-body text-muted-foreground pb-2">
                    das operações analisadas
                  </span>
                </div>
                <hr className="divider my-6" />
                <dl className="grid sm:grid-cols-3 gap-5">
                  <div>
                    <dt className="text-meta">Inconsistências</dt>
                    <dd className="text-display-sm font-mono tabular text-foreground mt-1">
                      por cliente
                    </dd>
                  </div>
                  <div>
                    <dt className="text-meta">Gestão</dt>
                    <dd className="text-display-sm font-mono tabular text-foreground mt-1">
                      por analista
                    </dd>
                  </div>
                  <div>
                    <dt className="text-meta">Relatórios</dt>
                    <dd className="text-display-sm font-mono tabular text-foreground mt-1">
                      consultivos
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>

          {/* Módulo 02 — Analytics */}
          <motion.div
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            {...animateProps(0.2)}
          >
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="feature-card-accent bg-card p-7">
                <div className="flex items-center gap-2 mb-5">
                  <BarChart3 className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="text-meta">Visão geral do cliente</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-meta">Faturamento</p>
                    <p className="text-display-sm font-mono tabular text-foreground mt-1">
                      R$ 87,6 mi
                    </p>
                    <p className="text-meta mt-0.5 text-primary font-semibold">+8%</p>
                  </div>
                  <div>
                    <p className="text-meta">Margem bruta</p>
                    <p className="text-display-sm font-mono tabular text-foreground mt-1">
                      28,4%
                    </p>
                    <p className="text-meta mt-0.5 text-primary font-semibold">+6%</p>
                  </div>
                  <div>
                    <p className="text-meta">Ticket médio</p>
                    <p className="text-display-sm font-mono tabular text-foreground mt-1">
                      R$ 2.450
                    </p>
                    <p className="text-meta mt-0.5 text-primary font-semibold">+5%</p>
                  </div>
                  <div>
                    <p className="text-meta">Pedidos</p>
                    <p className="text-display-sm font-mono tabular text-foreground mt-1">
                      35.792
                    </p>
                    <p className="text-meta mt-0.5 text-primary font-semibold">+9%</p>
                  </div>
                </div>

                <hr className="divider my-6" />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-meta">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                    Por cliente
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary/60" aria-hidden="true" />
                    Por produto
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary/30" aria-hidden="true" />
                    Por estado
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-foreground/30" aria-hidden="true" />
                    Mês a mês
                  </div>
                </div>
                <p className="text-meta mt-4 italic">
                  Dados ilustrativos de um cliente típico. Cada instalação entrega números reais do cliente final.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-eyebrow font-mono">03 —</span>
              <h3 className="text-display-lg text-foreground mt-2">
                Leve conhecimento de gestão para o cliente tomar decisões melhores.
              </h3>
              <p className="text-body text-muted-foreground mt-3 text-measure">
                O cliente do escritório acompanha faturamento, vendas por cliente, produto, estado e município, margem de lucro e variações mensais, sem precisar pedir um relatório.
              </p>
            </div>
          </motion.div>

          {/* Módulo 03 — Smart Contábil */}
          <motion.div
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            {...animateProps(0.3)}
          >
            <div className="lg:col-span-5">
              <span className="text-eyebrow font-mono">04 —</span>
              <h3 className="text-display-lg text-foreground mt-2">
                O controle do escritório em 360 graus.
              </h3>
              <p className="text-body text-muted-foreground mt-3 text-measure">
                DRE, indicadores por departamento, faturamento, tarefas, processos societários, onboarding e comercial em uma única plataforma para o proprietário.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  { icon: TrendingUp, label: "DRE e resultado" },
                  { icon: Users, label: "Departamentos e produtividade" },
                  { icon: Receipt, label: "Faturamento e ticket médio" },
                  { icon: Building2, label: "Societário e onboarding" },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-body py-2 px-3 rounded-lg bg-primary-soft/40"
                  >
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-primary"
                      aria-hidden="true"
                    >
                      <item.icon className="w-3.5 h-3.5 text-primary-foreground" />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="feature-card-accent bg-card p-7">
                <div className="flex items-center gap-2 mb-5">
                  <ListChecks className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="text-meta">Rotina do escritório</span>
                </div>

                <ol className="space-y-3">
                  {[
                    { titulo: "Controle de tarefas", nota: "Rotinas, responsáveis, prazos" },
                    { titulo: "Processos societários", nota: "Aberturas, alterações, baixas" },
                    { titulo: "Onboarding guiado", nota: "Entrada de novos clientes rastreável" },
                    { titulo: "Comercial organizado", nota: "Leads, propostas e contratos" },
                  ].map((item, i) => (
                    <li
                      key={item.titulo}
                      className="flex items-start gap-4 py-3 border-t border-border first:border-t-0 first:pt-0"
                    >
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-primary-soft text-primary font-mono text-sm shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <p className="text-body text-foreground">{item.titulo}</p>
                        <p className="text-meta">{item.nota}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}