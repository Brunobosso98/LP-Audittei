"use client"

import { useRef, useState, useEffect } from "react"
import { Brain, Zap, Target, Shield, BarChart3, Cpu, Eye, Lightbulb, Network, Sparkles } from "lucide-react"

const aiFeatures = [
  {
    icon: Brain,
    title: "Machine Learning Avançado",
    description: "Algoritmos que aprendem com cada auditoria, melhorando continuamente a precisão e eficiência.",
    details:
      "Redes neurais profundas que analisam padrões complexos em documentos fiscais, identificando anomalias sutis que passariam despercebidas por análises tradicionais.",
    stats: { confiança: "99,9%", velocidade: "10x", aprendizado: "24/7" },
  },
  {
    icon: Zap,
    title: "Processamento Inteligente",
    description: "IA capaz de processar milhares de documentos fiscais em segundos com alta precisão.",
    details:
      "Processamento paralelo distribuído que utiliza GPUs para análise em tempo real de grandes volumes de dados fiscais.",
    stats: { transferência: "10k/min", latência: "<1s", disponibilidade: "99,99%" },
  },
  {
    icon: Target,
    title: "Detecção Automática de Anomalias",
    description: "Identificação inteligente de inconsistências e padrões suspeitos em documentos fiscais.",
    details:
      "Algoritmos de detecção de anomalias baseados em análise estatística avançada e reconhecimento de padrões.",
    stats: { detecção: "99,8%", falsePos: "<0,1%", cobertura: "100%" },
  },
  {
    icon: Shield,
    title: "Validação Inteligente",
    description: "Sistema de validação que garante conformidade com as mais recentes legislações fiscais.",
    details: "Base de conhecimento atualizada automaticamente com mudanças na legislação fiscal brasileira.",
    stats: { confiança: "100%", atualização: "Real-time", cobertura: "Brasil" },
  },
  {
    icon: BarChart3,
    title: "Análise Preditiva",
    description: "Previsão de tendências e identificação de riscos fiscais antes que se tornem problemas.",
    details: "Modelos preditivos que analisam histórico fiscal para antecipar possíveis problemas e oportunidades.",
    stats: { predição: "95%", horizonte: "6 meses", alertas: "Real-time" },
  },
  {
    icon: Cpu,
    title: "Automação Completa",
    description: "Fluxos de trabalho totalmente automatizados que reduzem drasticamente a intervenção manual.",
    details:
      "Orquestração inteligente de processos com decisões autônomas baseadas em regras de negócio configuráveis.",
    stats: { automação: "95%", eficiência: "+300%", erros: "-99%" },
  },
]

const aiStats = [
  { label: "Documentos Processados", value: "1M+", description: "por mês", icon: BarChart3 },
  { label: "Confiança", value: "99,9%", description: "na detecção", icon: Target },
  { label: "Velocidade", value: "10x", description: "mais rápido", icon: Zap },
  { label: "Disponibilidade", value: "24/7", description: "processamento", icon: Cpu },
]

export default function AIShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "-100px" },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="ia"
      ref={containerRef}
      className={`py-32 bg-muted/30 relative overflow-hidden transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Inteligência Artificial{" "}
            <span className="text-primary">no Centro da Inovação</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma utiliza as mais avançadas tecnologias de IA para revolucionar a auditoria fiscal
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {aiFeatures.map((feature) => (
            <article
              key={feature.title}
              className="group relative bg-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer h-full"
              onMouseEnter={() => setActiveFeature(aiFeatures.indexOf(feature))}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>

              <div className="space-y-2">
                {Object.entries(feature.stats).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground capitalize">{key}:</span>
                    <span className="text-primary font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${activeFeature === aiFeatures.indexOf(feature) ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
              >
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.details}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* AI Stats Dashboard */}
        <div className="relative bg-card/80 rounded-2xl p-12 border border-border backdrop-blur-sm overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">IA em Números</h3>
              <p className="text-muted-foreground text-lg">Resultados comprovados da nossa inteligência artificial</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {aiStats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
                      <stat.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>

                  <p className="text-foreground font-medium mb-1">{stat.label}</p>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </div>
              ))}
            </div>

            {/* Interactive AI Demo */}
            <div className="mt-16 text-center">
              <div className="bg-muted/40 rounded-2xl p-8 border border-border">
                <h4 className="text-2xl font-bold text-foreground mb-6">Demonstração Interativa da IA</h4>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card/60 rounded-xl p-6 border border-border transition-all hover:scale-[1.02] hover:border-primary/40">
                    <Eye className="w-8 h-8 text-primary mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-foreground font-semibold mb-2">Visão Computacional</h3>
                    <p className="text-muted-foreground text-sm">Análise automática de documentos com OCR avançado</p>
                  </div>

                  <div className="bg-card/60 rounded-xl p-6 border border-border transition-all hover:scale-[1.02] hover:border-primary/40">
                    <Lightbulb className="w-8 h-8 text-primary mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-foreground font-semibold mb-2">Aprendizado Contínuo</h3>
                    <p className="text-muted-foreground text-sm">Sistema que evolui com cada processamento</p>
                  </div>

                  <div className="bg-card/60 rounded-xl p-6 border border-border transition-all hover:scale-[1.02] hover:border-primary/40">
                    <Network className="w-8 h-8 text-primary mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-foreground font-semibold mb-2">Rede Neural</h3>
                    <p className="text-muted-foreground text-sm">Processamento distribuído em tempo real</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95"
                >
                  Testar IA Gratuitamente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
