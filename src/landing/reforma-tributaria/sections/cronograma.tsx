const FASES = [
  {
    ano: "2026",
    titulo: "Início da transição",
    tag: "Conviver",
    descricao:
      "Cria-se o IBS/CBS em paralelo aos tributos atuais. Empresas passam a apurar valor Zero nos novos tributos, apenas para alimentar a calibração do sistema.",
    pontos: ["Apuração paralela sem cobrança", "Cadastro IBS começa", "CEST passou a ser parâmetro"],
  },
  {
    ano: "2027",
    titulo: "Período de teste",
    tag: "Apuração paralela",
    descricao:
      "Inttax já entrega leitura completa do impacto projetado. As alíquotas de referência para IBS e CBS são divulgadas, ainda em caráter de teste.",
    pontos: ["Alíquotas de referência", "Operações interestaduais em transição", "Início das audiências do regulamento"],
  },
  {
    ano: "2028",
    titulo: "Início parcial",
    tag: "Redução ICMS",
    descricao:
      "ICMS e ISS começam a ser reduzidos gradativamente para abrir espaço ao IBS. CBS passa a existir com alíquota baixa. A composição da carga muda em cada estado.",
    pontos: ["ICMS caindo 1 p.p./ano", "CBS a 0,9%", "ISS inicia redução em 2029"],
  },
  {
    ano: "2030",
    titulo: "Aumento da CBS",
    tag: "Curva 10% → 100%",
    descricao:
      "CBS entra na curva de substituição em sua fase mais aguda. É o período onde mais escritórios precisam revisar cenários já parametrizados.",
    pontos: ["CBS em 7,4%", "IBS ainda em testes", "IBSEC sinaliza divergências regionais"],
  },
  {
    ano: "2032",
    titulo: "Reta final",
    tag: "IBS substitui ICMS",
    descricao:
      "IBS passa a substituir ICMS e ISS em definitivo.Estados administram alíquotas próprias com base em um comitê federativo. Operações interestaduais são as mais sensíveis.",
    pontos: ["IBS em 12,5%", "Imunidade + regimes específicos", "Operações interestaduais reescritas"],
  },
  {
    ano: "2033",
    titulo: "Pleno vigor",
    tag: "IBS + CBS integral",
    descricao:
      "IBS e CBS operam em conjunto no lugar de PIS, COFINS, ICMS, ISS e IPI. A Inttax continua recalibrando cenários por regime, fornecedor e NCM.",
    pontos: ["IBS em 17,7%", "CBS em 9,5%", "PIS/COFINS extintos", "ISS extinto"],
  },
] as const

export function Cronograma() {
  return (
    <section id="cronograma" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Cronograma</p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Oito anos não-lineares. A leitura por fase evita que a sua próxima reunião
            pareça em 2026 ou em 2033.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Cada fase do cronograma traz uma alavanca fiscal diferente. A Inttax acompanha o calendário
            público do CONFAZ e atualiza os cenários por cliente conforme cada marco é publicado.
          </p>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FASES.map((f, i) => (
            <li key={f.ano} className="group relative flex flex-col bg-card p-6 transition-colors hover:bg-muted/40 lg:p-7">
              <span aria-hidden="true" className="flex items-center justify-between">
                <span className="font-mono text-[2.5rem] font-semibold leading-none tracking-[-0.05em] text-foreground lg:text-[2rem]">
                  {f.ano}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {String(i + 1).padStart(2, "0")} / {String(FASES.length).padStart(2, "0")}
                </span>
              </span>
              <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <span aria-hidden="true" className="size-1 rounded-full bg-primary" />
                {f.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                {f.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.descricao}</p>
              <ul className="mt-4 space-y-1.5">
                {f.pontos.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-xs text-foreground/80 transition-colors duration-200 hover:text-primary"
                  >
                    <span aria-hidden="true" className="mt-1 inline-block size-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-card p-6 sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              Por que esse material se cobra
            </p>
            <h3 className="mt-3 text-balance text-xl font-semibold leading-snug tracking-tight text-foreground">
              Cada fase do cronograma é uma pauta de reunião.
            </h3>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground lg:text-base">
            <p>
              O cliente final não tem acesso à leitura técnica por fase. Em cada marco do CONFAZ você
              abre a próxima reunião com a comparação atual versus cenário, e a recomendação de ajuste
              de preço, fornecedor ou NCM que precisa entrar antes da próxima virada.
            </p>
            <p className="mt-3">
              É exatamente o tipo de leitura que o cliente reconhece como estratégico, e que o
              escritório inclui no contrato como consultoria mensal, trimestral ou por entrega. O
              Simulador é o que tira a consultoria do "achismo" e devolve o número validado que
              sustenta a fatura.
            </p>
          </div>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Cronograma construído a partir do calendário do CONFAZ e do PLP 68/2024. Datas e alíquotas
          podem ser atualizadas pelo Comitê Federativo.
        </p>
      </div>
    </section>
  )
}
