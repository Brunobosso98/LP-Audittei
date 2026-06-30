const FONTES = [
  {
    categoria: "Documentos fiscais",
    itens: [
      "NF-e de entrada",
      "NF-e de saída",
      "NF-e de devolução",
      "Cancelamento e substituição",
      "Eventos da NF-e",
      "Carta de correção",
    ],
  },
  {
    categoria: "SPED",
    itens: [
      "SPED Contribuições",
      "SPED ICMS/IPI",
      "SPED Fiscal",
      "ECD e ECF",
      "Bloco K",
      "Bloco H",
    ],
  },
  {
    categoria: "Cadastros",
    itens: [
      "Produtos com NCM",
      "Fornecedores com regime",
      "Clientes com indicador",
      "Tabela de CFOP",
      "CEST atualizado",
      "Regras por benefício fiscal",
    ],
  },
  {
    categoria: "Regimes e portes",
    itens: [
      "Simples Nacional",
      "Lucro Presumido",
      "Lucro Real",
      "MEI",
      "Imunes e isentas",
      "Régimes específicos",
    ],
  },
] as const

/**
 * Tabela editorial do que o sistema lê. Cada linha é uma fonte real que o
 * contador reconhece da própria carteira. Sem KPIs decorativos, sem hero
 * metric — só referência técnica honesta, no idioma do escritório fiscal.
 */
export function Cobertura() {
  return (
    <section id="cobertura" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            Cobertura técnica
          </p>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            O que o sistema lê, sem segredo e sem enrolação.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Lista honesta das fontes, dos formatos e dos regimes cobertos. Se faltar alguma coisa
            para a sua carteira, o time comercial confirma na conversa de 30 minutos.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {FONTES.map((f) => (
            <div key={f.categoria} className="flex flex-col bg-card p-6 transition-colors hover:bg-muted/40 lg:p-7">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                {f.categoria}
              </h3>
              <ul className="mt-4 grid gap-2.5">
                {f.itens.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground/85 transition-colors duration-200 hover:text-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block size-1 shrink-0 rounded-full bg-primary"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Atualizado conforme ajustes do CONFAZ e da Receita Federal. Suporte a múltiplos CNPJs por cliente.
        </p>
      </div>
    </section>
  )
}
