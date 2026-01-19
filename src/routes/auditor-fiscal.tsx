import { motion } from "framer-motion"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Layers3,
  PackageSearch,
  PieChart,
  Users,
} from "lucide-react"

const modules = [
  {
    id: "dashboard",
    title: "Dashboard",
    summary: "Painel de controle com movimentação fiscal, impostos e operações por empresa.",
    highlights: ["Movimentação fiscal", "Total de impostos", "Notas e operações"],
    imageSrc: "/auditor-fiscal/dashboard.png",
    imageAlt: "Dashboard com indicadores fiscais",
    icon: BarChart3,
  },
  {
    id: "gestao-xml",
    title: "Gestão de XMLs",
    summary: "Gestão de documentos fiscais com verificação de notas e controle de canceladas.",
    highlights: ["Verificar notas", "Canceladas e complementares", "Busca inteligente"],
    imageSrc: "/auditor-fiscal/gestao-xml.png",
    imageAlt: "Tela de gestão de XMLs",
    icon: FileSearch,
  },
  {
    id: "compliance",
    title: "Compliance",
    summary: "Entrada e saída de impostos por empresa com foco em conformidade.",
    highlights: ["Imposto a pagar", "Conciliação fiscal", "Conformidade contínua"],
    imageSrc: "/auditor-fiscal/compliance.png",
    imageAlt: "Tela de compliance fiscal",
    icon: CheckCircle2,
  },
  {
    id: "auditoria",
    title: "Auditoria",
    summary: "Visão consolidada do valor auditado e inconsistências por tributo.",
    highlights: ["Valor auditado", "Inconsistências", "Operações por tributo"],
    imageSrc: "/auditor-fiscal/auditoria.png",
    imageAlt: "Tela de auditoria fiscal",
    icon: ClipboardCheck,
  },
  {
    id: "apuracao",
    title: "Apuração",
    summary: "Apuração de tributos por CFOP com detalhamento por empresa.",
    highlights: ["Apuração por CFOP", "Memória de cálculo", "Análises por período"],
    imageSrc: "/auditor-fiscal/apuracao.png",
    imageAlt: "Tela de apuração de tributos",
    icon: PieChart,
  },
  {
    id: "analistas",
    title: "Analistas",
    summary: "Controle de auditorias por analista com visão de progresso e pendências.",
    highlights: ["Movimento por analista", "Empresas sem auditoria", "Acompanhamento de metas"],
    imageSrc: "/auditor-fiscal/analistas.png",
    imageAlt: "Tela de controle por analista",
    icon: Users,
  },
  {
    id: "faltantes",
    title: "Notas Faltantes",
    summary: "Detecção de notas ausentes no XML ou SPED, inclusive pulo de numeração.",
    highlights: ["Notas de saída", "Pulo de numeração", "Conferência XML/SPED"],
    imageSrc: "/auditor-fiscal/faltantes.png",
    imageAlt: "Tela de notas faltantes",
    icon: PackageSearch,
  },
  {
    id: "enquadramento",
    title: "Enquadramento",
    summary: "Enquadramento de produtos às novas normas da reforma tributária.",
    highlights: ["Enquadramento padrão", "Benefícios fiscais", "Regras por produto"],
    imageSrc: "/auditor-fiscal/enquadramento.png",
    imageAlt: "Tela de enquadramento de produtos",
    icon: Layers3,
  },
]

export default function AuditorFiscalPage() {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id)
  const activeModule = modules.find((module) => module.id === activeModuleId) ?? modules[0]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Auditor Fiscal</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Sistema completo de auditoria fiscal automatizada com inteligência artificial para escritórios contábeis
                modernos.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
                Solicitar Demonstração
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Como os módulos trabalham juntos
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Clique em um módulo para visualizar a funcionalidade e o fluxo que ele habilita dentro do Auditor Fiscal.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[360px_1fr] lg:items-center">
              <div className="rounded-2xl border border-border bg-background p-4 shadow-sm lg:self-center">
                <div className="text-sm font-semibold text-foreground">Selecione um módulo</div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {modules.map((module) => {
                    const isActive = module.id === activeModuleId
                    const Icon = module.icon
                    return (
                      <button
                        key={module.id}
                        type="button"
                        onClick={() => setActiveModuleId(module.id)}
                        className={`flex aspect-square flex-col items-center justify-center rounded-xl border px-3 py-3 text-center transition-all ${isActive
                          ? "border-primary/50 bg-card shadow-sm"
                          : "border-border bg-muted/20 hover:border-primary/30 hover:bg-card/60"
                          }`}
                      >
                        <span
                          className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg border ${isActive ? "border-primary/30 bg-primary/10" : "border-border bg-background"
                            }`}
                        >
                          <Icon className="h-4 w-4 text-foreground" aria-hidden="true" />
                        </span>
                        <div className="text-xs font-semibold text-foreground leading-snug">{module.title}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              <motion.div
                key={activeModule.id}
                className="relative z-10 w-full rounded-2xl border border-border bg-card/80 p-6 shadow-sm lg:justify-self-start lg:max-w-[980px]"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              >
                <div className="relative aspect-[1646/949] rounded-xl border border-border bg-muted/40 overflow-hidden shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                  {activeModule.imageSrc ? (
                    <img
                      src={activeModule.imageSrc}
                      alt={activeModule.imageAlt ?? `Print do módulo ${activeModule.title}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                      Print do módulo: {activeModule.title}
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 max-w-[70%] rounded-lg border border-border bg-muted px-4 py-3 shadow-sm">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">Módulo</div>
                    <div className="text-base font-semibold text-foreground">{activeModule.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{activeModule.summary}</div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
                  {activeModule.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-lg border border-border bg-background px-3 py-3 text-sm">
                      <p className="text-foreground font-medium">{highlight}</p>
                      <p className="text-muted-foreground text-xs mt-1">Detalhe do recurso</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
