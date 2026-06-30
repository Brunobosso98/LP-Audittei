import { Chrome } from "./chrome"

const FORNECEDORES = [
  {
    nome: "Tecidos Maringá Ltda",
    cnpj: "12.345.678/0001-90",
    regime: "Lucro Real",
    participacao: 32,
    pressao: "Alta",
    ticketMedio: "R$ 84,3 mil",
    cor: "bg-warning/15 text-warning",
  },
  {
    nome: "Fiação Aurora S/A",
    cnpj: "23.456.789/0001-12",
    regime: "Lucro Presumido",
    participacao: 24,
    pressao: "Alta",
    ticketMedio: "R$ 67,1 mil",
    cor: "bg-warning/15 text-warning",
  },
  {
    nome: "Malhas Confecções ME",
    cnpj: "34.567.890/0001-23",
    regime: "Simples Nacional",
    participacao: 18,
    pressao: "Média",
    ticketMedio: "R$ 41,8 mil",
    cor: "bg-info/15 text-info",
  },
  {
    nome: "Botões e Aviamentos SP",
    cnpj: "45.678.901/0001-34",
    regime: "Simples Nacional",
    participacao: 9,
    pressao: "Média",
    ticketMedio: "R$ 18,2 mil",
    cor: "bg-info/15 text-info",
  },
  {
    nome: "Etiquetas Silva MEI",
    cnpj: "56.789.012/0001-45",
    regime: "MEI",
    participacao: 4,
    pressao: "Baixa",
    ticketMedio: "R$ 3,9 mil",
    cor: "bg-success/15 text-success",
  },
  {
    nome: "Embalagens Cardoso",
    cnpj: "67.890.123/0001-56",
    regime: "Lucro Real",
    participacao: 13,
    pressao: "Variável",
    ticketMedio: "R$ 29,4 mil",
    cor: "bg-muted text-muted-foreground",
  },
] as const

/**
 * Print "Pressão por fornecedor" — listagem de fornecedores da cadeia com
 * regime tributário, % de participação, ticket médio e classificação de pressão.
 */
export function PrintFornecedores() {
  return (
    <Chrome
      titulo="Simulador da Reforma · Pressão por fornecedor"
      ativo="IBS + CBS"
      hora="14:32"
      abas={["Fornecedores", "Substituir", "Renegociar", "Histórico"]}
    >
      <div className="grid grid-cols-3 gap-px border-b border-border bg-border">
        <div className="bg-card px-4 py-3">
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Fornecedores ativos
          </div>
          <div className="mt-1 font-mono text-lg font-semibold tabular-nums text-foreground">142</div>
        </div>
        <div className="bg-card px-4 py-3">
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Em pressão alta
          </div>
          <div className="mt-1 font-mono text-lg font-semibold tabular-nums text-foreground">31</div>
        </div>
        <div className="bg-card px-4 py-3">
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Volume capturado
          </div>
          <div className="mt-1 font-mono text-lg font-semibold tabular-nums text-foreground">R$ 1,28 mi</div>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-left text-xs">
            <thead className="bg-muted/40 text-[10px] text-muted-foreground">
              <tr>
                <th scope="col" className="px-3 py-2 font-medium">Fornecedor</th>
                <th scope="col" className="px-3 py-2 font-medium">Regime</th>
                <th scope="col" className="px-3 py-2 text-right font-medium">Participação</th>
                <th scope="col" className="px-3 py-2 text-right font-medium">Ticket médio</th>
                <th scope="col" className="px-3 py-2 text-right font-medium">Pressão</th>
              </tr>
            </thead>
            <tbody>
              {FORNECEDORES.map((f) => (
                <tr key={f.cnpj} className="border-t border-border transition-colors hover:bg-muted/30">
                  <td className="px-3 py-2.5">
                    <div className="font-medium text-foreground">{f.nome}</div>
                    <div className="font-mono text-[10px] text-muted-foreground">{f.cnpj}</div>
                  </td>
                  <td className="px-3 py-2.5 text-muted-foreground">{f.regime}</td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center justify-end gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                        <div className="h-full rounded-full bg-primary/60" style={{ width: `${f.participacao * 2}%` }} />
                      </div>
                      <span className="font-mono tabular-nums text-foreground">{f.participacao}%</span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-right font-mono tabular-nums text-foreground">{f.ticketMedio}</td>
                  <td className="px-3 py-2.5 text-right">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${f.cor}`}>
                      {f.pressao}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Chrome>
  )
}
