import AdvancedHeader from "@/components/advanced-header"
import { SiteFooter } from "@/landing/site-footer"
import { Hero } from "@/landing/reforma-tributaria/sections/hero"
import { Cronograma } from "@/landing/reforma-tributaria/sections/cronograma"
import { Showcase } from "@/landing/reforma-tributaria/sections/showcase"
import { Capacidades } from "@/landing/reforma-tributaria/sections/capacidades"
import { Fluxo } from "@/landing/reforma-tributaria/sections/fluxo"
import { Faq } from "@/landing/reforma-tributaria/sections/faq"
import { Cta } from "@/landing/reforma-tributaria/sections/cta"

export default function ReformaTributariaPage() {
  return (
    <>
      <AdvancedHeader />

      <main id="main-content" className="pt-20">
        <Hero
          eyebrow="Reforma Tributária"
          titulo="A próxima reunião de consultoria começa aqui."
          subtitulo="IBS + CBS · Cronograma CONFAZ · 2026 → 2033"
          descricao="A Reforma Tributária vira insumo da consultoria paga pelo seu cliente. Cenário antes e depois, NCMs mais sensíveis, ranking de risco e a recomendação fechada já saem prontos para abrir a próxima reunião e justificar a próxima fatura do contrato."
          primaryCta={{ label: "Solicitar demonstração", href: "#demo" }}
          secondaryCta={{ label: "Falar com vendas no WhatsApp", href: "https://wa.me/5519978180175" }}
          nota="30 minutos com o Simulador aplicado a um cliente real da sua carteira. Você sai com o material que leva impresso para a reunião."
        />

        <Cronograma />

        <Showcase
          titulo="Cinco telas que o escritório leva para a próxima reunião."
          descricao="O material sai pronto para apresentar e ser cobrado como consultoria. Cenário antes e depois, NCMs mais sensíveis, ranking de risco, pressão por fornecedor e a recomendação fechada. Clique em uma tela para ver como ela vira insumo da fatura seguinte."
        />

        <Capacidades />

        <Fluxo />

        <Faq />

        <Cta />
      </main>

      <SiteFooter />
    </>
  )
}
