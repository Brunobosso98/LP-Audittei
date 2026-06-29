import AdvancedHeader from "@/components/advanced-header"
import { Hero } from "@/landing/hero"
import { Simulador } from "@/landing/simulador"
import { Plataforma } from "@/landing/plataforma"
import { ComoFunciona } from "@/landing/como-funciona"
import { PorQue } from "@/landing/por-que"
import { Faq } from "@/landing/faq"
import { CtaDemo } from "@/landing/cta-demo"
import { SiteFooter } from "@/landing/site-footer"

export default function HomePage() {
  return (
    <>
      <AdvancedHeader />
      <main className="pt-20">
        <Hero />
        <Simulador />
        <Plataforma />
        <ComoFunciona />
        <PorQue />
        <Faq />
        <CtaDemo />
      </main>
      <SiteFooter />
    </>
  )
}
