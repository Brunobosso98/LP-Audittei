import { BarChart3, Layers3, LineChart, PackageSearch, Presentation } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

import { PrintCenario } from "./cenario"
import { PrintFornecedores } from "./fornecedores"
import { PrintMargem } from "./margem"
import { PrintNcms } from "./ncms"
import { PrintRecomendacao } from "./recomendacao"

export type PrintMeta = {
  id: string
  titulo: string
  resumo: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  Component: () => JSX.Element
}

export const PRINTS: PrintMeta[] = [
  {
    id: "cenario",
    titulo: "Cenário por cliente",
    resumo: "Lista priorizada por impacto anual e nível de risco.",
    icon: BarChart3,
    Component: PrintCenario,
  },
  {
    id: "ncms",
    titulo: "NCMs sensíveis",
    resumo: "Ranking por variação projetada e participação na receita.",
    icon: PackageSearch,
    Component: PrintNcms,
  },
  {
    id: "margem",
    titulo: "Margem por produto",
    resumo: "Comparação hoje × pós-reforma nos top SKUs do cliente.",
    icon: LineChart,
    Component: PrintMargem,
  },
  {
    id: "fornecedores",
    titulo: "Pressão por fornecedor",
    resumo: "Cadeia por regime tributário e classificação de pressão.",
    icon: Layers3,
    Component: PrintFornecedores,
  },
  {
    id: "recomendacao",
    titulo: "Recomendação fechada",
    resumo: "Resumo executivo com plano de ação priorizado.",
    icon: Presentation,
    Component: PrintRecomendacao,
  },
]

export const DEFAULT_PRINT = PRINTS[0]
