import AdvancedHeader from "@/components/advanced-header"
import { SiteFooter } from "@/landing/site-footer"
import { Hero } from "@/landing/auditor-fiscal/sections/hero"
import { Cobertura } from "@/landing/auditor-fiscal/sections/cobertura"
import { Capacidades } from "@/landing/auditor-fiscal/sections/capacidades"
import { Showcase } from "@/landing/auditor-fiscal/sections/showcase"
import { Fluxo } from "@/landing/auditor-fiscal/sections/fluxo"
import { Faq } from "@/landing/auditor-fiscal/sections/faq"
import { Cta } from "@/landing/auditor-fiscal/sections/cta"

export default function AuditorFiscalPage() {
  return (
    <>
      <AdvancedHeader />

      <main id="main-content" className="pt-20">
        <Hero
          eyebrow="Auditor Fiscal"
          titulo="Acabe com a auditoria fiscal por amostragem."
          subtitulo="NF-e · SPED · XML · Cadastros · Carteira inteira"
          descricao="O Auditor Fiscal lê todas as operações tributárias da carteira e devolve, por cliente, apenas as exceções que pedem revisão humana. Sem planilha, sem sorte: a leitura sai pronta para abrir a próxima reunião de consultoria e justificar a próxima fatura do contrato."
          primaryCta={{ label: "Solicitar demonstração", href: "#demo" }}
          secondaryCta={{ label: "Falar com vendas no WhatsApp", href: "https://wa.me/5519978180175" }}
          nota="30 minutos com o Auditor Fiscal rodando sobre um cliente real da sua carteira. Você sai com a pauta de exceções e o resumo executivo."
        />

        <Cobertura />

        <Capacidades />

        <Showcase />

        <Fluxo />

        <Faq />

        <Cta />
      </main>

      <SiteFooter />
    </>
  )
}
