import { CheckCircle2, AlertTriangle, ArrowUpRight } from "lucide-react"
import { Chrome } from "./chrome"

const ACOES = [
  {
    titulo: "Renegociar contrato com 3 fornecedores de Lucro Real",
    prazo: "até 30/08",
    impacto: "Economia estimada R$ 86 mil/ano",
  },
  {
    titulo: "Reenquadrar NCM 2202.10.00 na classificação de saída",
    prazo: "até 15/09",
    impacto: "Reduz 5,2% da carga projetada",
  },
  {
    titulo: "Revisar margem dos 8 SKUs acima de 30%",
    prazo: "até 30/09",
    impacto: "Recupera ~1,8 p.p. de margem média",
  },
  {
    titulo: "Apresentar cenário base na reunião de Setembro",
    prazo: "reunião marcada",
    impacto: "Material pronto, falta agendar",
  },
] as const

/**
 * Print "Recomendação fechada" — slide executivo de saída, com 4 ações
 * priorizadas, alerta principal e botão "marcar consultoria".
 */
export function PrintRecomendacao() {
  return (
    <Chrome
      titulo="Simulador da Reforma · Recomendação fechada"
      ativo="Pronto para apresentar"
      hora="14:32"
      abas={["Resumo executivo", "Ações", "Cenário comparado", "Exportar PDF"]}
    >
      <div className="border-b border-border bg-muted/20 px-5 py-4">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
          <span>Cliente</span>
          <span className="text-foreground/40">·</span>
          <span>Confecções Aurora · CLI-014</span>
          <span className="text-foreground/40">·</span>
          <span>Gerado em 30/06/2026</span>
        </div>
        <h4 className="mt-1.5 text-base font-semibold tracking-tight text-foreground">
          Reduzir carga anual em <span className="text-primary">R$ 142 mil</span> com renegociação de
          fornecedores e reenquadramento de NCMs sensíveis.
        </h4>
      </div>

      <div className="px-5 py-4">
        <div className="mb-2 flex items-center justify-between">
          <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Plano de ação · 4 entregas
          </h5>
          <span className="font-mono text-[10px] text-muted-foreground">Responsável: escrituração externa</span>
        </div>
        <ol className="space-y-2">
          {ACOES.map((a, i) => (
            <li
              key={a.titulo}
              className="flex items-start gap-3 rounded-lg border border-border bg-card px-3 py-2.5"
            >
              <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-primary/10 font-mono text-[10px] font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-medium text-foreground">{a.titulo}</div>
                <div className="mt-0.5 flex flex-wrap items-center gap-x-3 font-mono text-[10px] text-muted-foreground">
                  <span>{a.prazo}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-primary">{a.impacto}</span>
                </div>
              </div>
              <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-border bg-success-tint px-5 py-3">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
          <div>
            <p className="text-xs font-semibold text-foreground">Cenário base validado com a carteira</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              87 clientes processados em 1h 42min · base SPED e NF-e já cruzadas
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-md bg-primary px-3 py-1.5 text-[11px] font-medium text-primary-foreground">
          Marcar consultoria
        </span>
      </div>
    </Chrome>
  )
}
