import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

const FOOTER_TS = "Atualizado em jun/2026"

export function Plataforma() {
  return (
    <section id="plataforma" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Três módulos que completam o Simulador da Reforma.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Auditoria, analytics e gestão interna. Cada módulo resolve uma dor específica;
            juntos, entregam a operação que o cliente percebe como premium.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-14 lg:gap-20">
          <Module
            n="02"
            name="Fiscal 360"
            title="Acabe com a dependência da análise por amostragem"
            summary="O Fiscal 360 lê todas as operações tributárias e devolve, por cliente da carteira, apenas as inconsistências que pedem revisão humana. Sem planilha, sem sorte — e sobra tempo da equipe para a consultoria que o cliente reconhece como valor."
            points={[
              "Leitura ampla das operações, não por amostragem",
              "Inconsistências priorizadas por cliente",
              "Distribuição e acompanhamento por analista",
              "Pauta de revisão pronta para a reunião de consultoria",
            ]}
          >
            <VisualFiscal />
          </Module>

          <Module
            reverse
            n="03"
            name="Gestão"
            title="Leve conhecimento de gestão para o cliente decidir melhor"
            summary="O cliente do escritório acompanha faturamento, vendas e margem por cliente, produto, estado e município — sem precisar pedir um relatório. É a leitura que sustenta a sua próxima conversa de consultoria."
            points={[
              "Painéis prontos para o cliente final",
              "Recortes por produto, cliente e região",
              "Margem de lucro e variações mês a mês",
              "Posiciona o escritório como consultor de dados",
            ]}
          >
            <VisualAnalytics />
          </Module>

          <Module
            n="04"
            name="Smart Contábil"
            title="O controle do escritório em 360 graus"
            summary="DRE, indicadores por departamento, tarefas, processos societários, onboarding e comercial em uma única plataforma. Ganha-se tempo de gestão interna para investir na leitura consultiva da carteira."
            points={[
              "DRE e resultado sempre atualizados",
              "Produtividade por departamento",
              "Societário e onboarding rastreáveis",
              "Comercial: leads, propostas e contratos",
            ]}
          >
            <VisualSmart />
          </Module>
        </div>
      </div>
    </section>
  )
}

function Module({
  n,
  name,
  title,
  summary,
  points,
  reverse = false,
  children,
}: {
  n: string
  name: string
  title: string
  summary: string
  points: string[]
  reverse?: boolean
  children: ReactNode
}) {
  return (
    <article className="group relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="font-mono text-[4rem] font-semibold leading-[0.85] tracking-[-0.06em] text-primary transition-colors duration-300 group-hover:text-primary/30 sm:text-[5rem] lg:text-[3rem]"
          >
            {n}.
          </span>
          <span className="rounded-md border border-border bg-card px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/80">
            {name}
          </span>
        </div>
        <h3 className="mt-6 inline-flex items-baseline gap-2 text-balance text-2xl font-medium leading-[1.15] tracking-[-0.025em] text-foreground transition-colors duration-300 group-hover:text-primary sm:text-3xl lg:text-[2.5rem]">
          <span>{title}</span>
          <ArrowRight
            aria-hidden="true"
            className="size-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:size-5"
          />
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{summary}</p>
        <ul className="mt-6 grid gap-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 text-sm text-foreground transition-colors duration-200 hover:text-primary"
            >
              <span
                className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className={reverse ? "lg:order-1" : "lg:order-2"}>{children}</div>
    </article>
  )
}

function VisualCard({ title, footer, children }: { title: string; footer: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
      <div className="p-4">{children}</div>
      <p className="flex items-center justify-between border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
        <span>{footer}</span>
        <span className="font-mono text-[10px] tabular-nums text-foreground/60">{FOOTER_TS}</span>
      </p>
    </div>
  )
}

function VisualFiscal() {
  return (
    <VisualCard title="Auditoria do lote 2026-06" footer="Dados ilustrativos de um cliente típico.">
      <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
        {([
          ["Operações lidas", "12.480"],
          ["Sem inconsistência", "98%"],
          ["Para revisar", "214"],
        ] as const).map(([label, value]) => (
          <div key={label} className="bg-card px-4 py-3">
            <div className="font-mono text-lg font-semibold tabular-nums text-foreground">{value}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
      <ul className="mt-3 divide-y divide-border overflow-hidden rounded-lg border border-border">
        {([
          ["NF-e 48.215", "NCM divergente do histórico"],
          ["NF-e 48.217", "CST x alíquota ICMS"],
          ["NF-e 48.231", "CFOP incompatível com a operação"],
        ] as const).map(([nf, motivo]) => (
          <li
            key={nf}
            className="flex items-center justify-between gap-3 bg-card px-4 py-2.5 transition-colors hover:bg-muted/40"
          >
            <span className="font-mono text-[0.8rem] text-foreground">{nf}</span>
            <span className="truncate text-xs text-muted-foreground">{motivo}</span>
            <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
              Revisar
            </span>
          </li>
        ))}
      </ul>
    </VisualCard>
  )
}

function VisualAnalytics() {
  return (
    <VisualCard
      title="Visão do cliente final"
      footer="Cada instalação entrega números reais do cliente."
    >
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
        {([
          ["Faturamento", "R$ 87,6 mi", "+8%"],
          ["Margem bruta", "28,4%", "+6%"],
          ["Ticket médio", "R$ 2.450", "+5%"],
          ["Pedidos", "35.792", "+9%"],
        ] as const).map(([label, value, delta]) => (
          <div key={label} className="bg-card px-4 py-3">
            <div className="text-xs text-muted-foreground">{label}</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-lg font-semibold tabular-nums text-foreground">
                {value}
              </span>
              <span className="text-xs font-medium tabular-nums text-primary">{delta}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <p className="text-xs text-muted-foreground">Recortes disponíveis</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Por cliente", "Por produto", "Por estado", "Por município", "Mês a mês"].map((v) => (
            <span
              key={v}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              {v}
            </span>
          ))}
        </div>
      </div>
    </VisualCard>
  )
}

function VisualSmart() {
  return (
    <VisualCard
      title="Gestão do escritório"
      footer="Indicadores ilustrativos de um escritório típico."
    >
      <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
        {([
          ["Receita/mês", "R$ 312 mil"],
          ["Margem líquida", "22,7%"],
          ["Tarefas no prazo", "94%"],
        ] as const).map(([label, value]) => (
          <div key={label} className="bg-card px-4 py-3">
            <div className="font-mono text-lg font-semibold tabular-nums text-foreground">{value}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {([
          ["01", "Controle de tarefas", "Rotinas, responsáveis e prazos."],
          ["02", "Processos societários", "Aberturas, alterações e baixas."],
          ["03", "Onboarding guiado", "Entrada de clientes rastreável."],
          ["04", "Comercial organizado", "Leads, propostas e contratos."],
        ] as const).map(([n, t, d]) => (
          <div
            key={n}
            className="bg-card p-4 transition-colors hover:bg-muted/30"
          >
            <span className="font-mono text-xs text-primary">{n}</span>
            <h4 className="mt-1.5 text-sm font-semibold text-foreground">{t}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </VisualCard>
  )
}
