import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
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
import type { ComponentType, SVGProps } from "react"

type ModuleMeta = {
  id: string
  title: string
  summary: string
  highlights: string[]
  imageSrc: string
  imageAlt: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const MODULES: ModuleMeta[] = [
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
    summary: "Enquadramento de produtos às novas normas da Reforma Tributária.",
    highlights: ["Enquadramento padrão", "Benefícios fiscais", "Regras por produto"],
    imageSrc: "/auditor-fiscal/enquadramento.png",
    imageAlt: "Tela de enquadramento de produtos",
    icon: Layers3,
  },
]

const DEFAULT_MODULE = MODULES[0]

export function Showcase() {
  const [activeId, setActiveId] = useState<string>(DEFAULT_MODULE.id)
  const { theme } = useTheme()
  const rawReducedMotion = useReducedMotion()
  const prefersReducedMotion = rawReducedMotion === true
  const active = MODULES.find((m) => m.id === activeId) ?? DEFAULT_MODULE
  const ActiveIcon = active.icon

  const imageSrc =
    theme === "dark" ? active.imageSrc.replace(/\.png$/, "-dark.png") : active.imageSrc

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-titulo"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Showcase do Auditor Fiscal
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
          </div>
          <h2
            id="showcase-titulo"
            className="mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]"
          >
            Oito telas que o escritório leva para a próxima reunião.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Cada tela abaixo é uma leitura concreta que sustenta a próxima reunião de consultoria e
            justifica a próxima fatura do contrato. Clique em uma tela para ver como ela vira insumo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <ModulePicker
            activeId={activeId}
            onSelect={setActiveId}
            activeTitle={active.title}
          />
          <PrintStage prefersReducedMotion={prefersReducedMotion} active={active} imageSrc={imageSrc} ActiveIcon={ActiveIcon} />
        </div>
      </div>
    </section>
  )
}

function ModulePicker({
  activeId,
  onSelect,
  activeTitle,
}: {
  activeId: string
  onSelect: (id: string) => void
  activeTitle: string
}) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start" aria-label="Módulos do Auditor Fiscal">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        Selecione um módulo
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
        {MODULES.map((m) => {
          const isActive = m.id === activeId
          const Icon = m.icon
          return (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => onSelect(m.id)}
                aria-pressed={isActive}
                className={`group relative flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  isActive
                    ? "border-primary/40 bg-primary/[0.06]"
                    : "border-border bg-card hover:border-primary/25 hover:bg-muted/40"
                }`}
              >
                <span
                  className={`mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-md border ${
                    isActive ? "border-primary/30 bg-primary/10" : "border-border bg-background"
                  }`}
                  aria-hidden="true"
                >
                  <Icon className="size-3.5 text-foreground" />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block text-sm font-semibold leading-snug ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {m.title}
                  </span>
                  <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
                    {m.highlights[0]}
                  </span>
                </span>
                {isActive && (
                  <Check aria-hidden="true" className="absolute right-3 top-3 size-3.5 text-primary" />
                )}
              </button>
            </li>
          )
        })}
      </ul>
      <p className="mt-4 hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground lg:block">
        Tela ativa · {activeTitle}
      </p>
    </div>
  )
}

function PrintStage({
  prefersReducedMotion,
  active,
  imageSrc,
  ActiveIcon,
}: {
  prefersReducedMotion: boolean
  active: ModuleMeta
  imageSrc: string
  ActiveIcon: ComponentType<SVGProps<SVGSVGElement>>
}) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(false)
  }, [imageSrc])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-border bg-muted/20 p-3 shadow-[0_24px_80px_-32px_oklch(0.205_0.012_25/0.35)] sm:p-5">
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={imageSrc}
                alt={active.imageAlt}
                onLoad={() => setLoaded(true)}
                loading="lazy"
                className={`block aspect-[1646/949] w-full object-cover transition-opacity duration-300 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
              <ActiveIcon className="size-3.5" aria-hidden="true" />
              <span className="font-mono">Módulo</span>
            </div>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              {active.title}
            </h3>
            <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {active.summary}
            </p>
          </div>
          <ul className="grid gap-2 sm:grid-cols-3 sm:gap-3">
            {active.highlights.map((h) => (
              <li
                key={h}
                className="rounded-lg border border-border bg-background px-3 py-2 text-xs"
              >
                <p className="font-medium text-foreground">{h}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">Detalhe do módulo</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-3 flex items-center justify-between gap-3 font-mono text-[10px] text-muted-foreground">
        <span>Print real do sistema Inttax · Auditor Fiscal.</span>
        <span className="tabular-nums">v2026.06</span>
      </p>
    </div>
  )
}
