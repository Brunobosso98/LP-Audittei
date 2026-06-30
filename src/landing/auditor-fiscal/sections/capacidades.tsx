import { ArrowRight } from "lucide-react"
import type { ComponentType, SVGProps } from "react"
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

type Modulo = {
  n: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  titulo: string
  leitura: string
  comoLe: string
  saida: string
}

const MODULOS: Modulo[] = [
  {
    n: "01",
    icon: BarChart3,
    titulo: "Dashboard",
    leitura:
      "Painel único com movimentação fiscal, total de impostos e operações por empresa da carteira.",
    comoLe:
      "Consolida NF-e de entrada, saída e SPED já processado no ERP. Sem relatório mensal, sem screenshot: o painel é alimentado em tempo real conforme a operação ocorre.",
    saida: "Visão macro da carteira para a reunião de fechamento.",
  },
  {
    n: "02",
    icon: FileSearch,
    titulo: "Gestão de XMLs",
    leitura:
      "Conferência dos documentos fiscais: notas válidas, canceladas, complementares e substituições por cliente.",
    comoLe:
      "Valida cada XML contra a chave de acesso, vincula ao cadastro de fornecedor e marca desvios de numeração ou sequência. A busca inteligente cruza por item, NCM e período.",
    saida: "Base XML limpa, sem canceladas devolvidas como válidas.",
  },
  {
    n: "03",
    icon: CheckCircle2,
    titulo: "Compliance",
    leitura:
      "Entrada e saída de impostos por empresa, com foco em conformidade contínua.",
    comoLe:
      "Cruza a apuração do SPED com o XML conferido. Aponta onde a apuração diverge do documento: alíquota, base de cálculo, CST, CFOP, NCM.",
    saida: "Status de conformidade por empresa e por tributo.",
  },
  {
    n: "04",
    icon: ClipboardCheck,
    titulo: "Auditoria",
    leitura:
      "Visão consolidada do valor auditado, com inconsistências organizadas por tributo.",
    comoLe:
      "Cada operação é classificada como conforme ou como exceção. As exceções vão para revisão humana com o contexto da operação já carregado.",
    saida: "Pauta de revisão por analista, não por amostragem.",
  },
  {
    n: "05",
    icon: PieChart,
    titulo: "Apuração",
    leitura:
      "Apuração de tributos por CFOP, com memória de cálculo e detalhamento por empresa.",
    comoLe:
      "Cruza o SPED Contribuições e ICMS com a base XML para validar a apuração antes do envio. Mostra a composição da base, do imposto e dos créditos aproveitados.",
    saida: "Apuração revisada, com rastro até a NF-e de origem.",
  },
  {
    n: "06",
    icon: Users,
    titulo: "Analistas",
    leitura:
      "Controle de auditorias por analista, com progresso, pendências e metas individuais.",
    comoLe:
      "Distribui automaticamente as exceções entre os analistas conforme o peso fiscal e a especialidade. Acompanha SLA por cliente e por tributo.",
    saida: "Operação do escritório em escala, sem depender de cabeça do sócio.",
  },
  {
    n: "07",
    icon: PackageSearch,
    titulo: "Notas faltantes",
    leitura:
      "Detecção de notas ausentes no XML ou SPED, com pulo de numeração incluído.",
    comoLe:
      "Compara sequência sequencial por CNPJ no intervalo declarado. Marca pulos, notas sem XML e XML sem nota. Aplicado em entrada e saída.",
    saida: "Carteira inteira conferida, sem amostragem.",
  },
  {
    n: "08",
    icon: Layers3,
    titulo: "Enquadramento",
    leitura:
      "Enquadramento de produtos às novas regras da Reforma Tributária, com benefícios fiscais mapeados.",
    comoLe:
      "Aplica o CEST, NCM e a regra do PLP 68/2024 sobre a base cadastrada. Sugere reenquadramento por SKU e destaca itens com benefício fiscal elegível.",
    saida: "Pré-enquadramento para a próxima reunião de consultoria.",
  },
]

export function Capacidades() {
  return (
    <section id="capacidades" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Capacidades do Auditor Fiscal
          </p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Oito módulos que respondem as perguntas que o cliente já traz pronto.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Cada módulo responde uma objeção típica do escritório fiscal. A leitura sai pronta para apresentar, e o
            escritório inclui o material no contrato como consultoria mensal, trimestral ou por entrega.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {MODULOS.map((m) => {
            const Icon = m.icon
            return (
              <li
                key={m.n}
                className="group relative flex flex-col bg-card p-6 transition-colors duration-300 hover:bg-muted/40 lg:p-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="font-mono text-[2.75rem] font-semibold leading-none tracking-[-0.06em] text-primary transition-colors duration-300 group-hover:text-primary/30"
                  >
                    {m.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors duration-300 group-hover:border-primary/40 group-hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </span>
                </div>
                <h3 className="mt-4 inline-flex items-baseline gap-2 text-balance text-xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                  <span>{m.titulo}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{m.leitura}</p>

                <dl className="mt-5 grid gap-3 border-t border-border pt-4 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      Como é calculado
                    </dt>
                    <dd className="mt-1 leading-relaxed text-foreground/85">{m.comoLe}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      Saída no sistema
                    </dt>
                    <dd className="mt-1 leading-relaxed text-foreground/85">{m.saida}</dd>
                  </div>
                </dl>
              </li>
            )
          })}
        </ol>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Cobertura completa sobre NF-e, SPED e cadastros. Suporte a regimes Simples, Presumido, Real e MEI na mesma carteira.
        </p>
      </div>
    </section>
  )
}
