import { lazy, Suspense, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AdvancedHeader from "@/components/advanced-header"
import HeroSection from "@/components/advanced-hero"

// Below-the-fold sections: carregadas sob demanda para reduzir TBT/JS inicial
const ProcessCarousel = lazy(() => import("@/components/process-carousel"))
const ComparisonVisualization = lazy(() => import("@/components/comparison-visualization"))
const AIShowcase = lazy(() => import("@/components/ai-showcase"))
const TestimonialsCarousel = lazy(() => import("@/components/testimonials-carousel"))
const ContactSection = lazy(() => import("@/components/advanced-contact"))
const Footer = lazy(() => import("@/components/footer"))
const ParticleBackground = lazy(() => import("@/components/particle-background"))

// Registrar plugin só no cliente e após o componente montar (evita custo de boot no SSR/build)
function useGsapScrollAnimations(scope: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (typeof window === "undefined") return
    gsap.registerPlugin(ScrollTrigger)

    // Respeita usuários que pedem menos animação
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    if (!scope.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".animate-on-scroll").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }, scope)

    return () => ctx.revert()
  }, [scope])
}

function SectionFallback({ height = "60vh" }: { height?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ minHeight: height }}
      className="w-full"
    />
  )
}

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null)
  useGsapScrollAnimations(mainRef)

  return (
    <div ref={mainRef} className="relative min-h-screen overflow-hidden">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <div className="relative z-10">
        <AdvancedHeader />
        <main id="main-content" tabIndex={-1}>
          <HeroSection />
          <Suspense fallback={<SectionFallback height="80vh" />}>
            <ProcessCarousel />
          </Suspense>
          <Suspense fallback={<SectionFallback height="100vh" />}>
            <ComparisonVisualization />
          </Suspense>
          <Suspense fallback={<SectionFallback height="80vh" />}>
            <AIShowcase />
          </Suspense>
          <Suspense fallback={<SectionFallback height="60vh" />}>
            <TestimonialsCarousel />
          </Suspense>
          <Suspense fallback={<SectionFallback height="80vh" />}>
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}
