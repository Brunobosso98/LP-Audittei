import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Clock } from "lucide-react"
import AdvancedHeader from "@/components/advanced-header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ReformaTributariaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AdvancedHeader />

      <main id="main-content" className="pt-32 pb-24">
        <section className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
              <Clock className="size-3.5" aria-hidden="true" />
              Página em construção
            </span>

            <h1 className="mt-6 text-pretty text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Reforma Tributária
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Estamos preparando uma página dedicada à consultoria estratégica para IBS/CBS.
              Enquanto ela não fica pronta, o conteúdo completo já está disponível no Simulador
              da Reforma dentro da landing principal.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/#simulador">
                  <ArrowLeft className="size-4" />
                  Ver Simulador da Reforma
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
              >
                <Link to="/#demo">Solicitar demonstração</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
