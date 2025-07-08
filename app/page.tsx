"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import Header from "@/components/advanced-header"
import HeroSection from "@/components/advanced-hero"
import ProcessCarousel from "@/components/process-carousel"
import ComparisonVisualization from "@/components/comparison-visualization"
import AIShowcase from "@/components/ai-showcase"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import ContactSection from "@/components/advanced-contact"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Advanced GSAP animations
      const tl = gsap.timeline()

      // Staggered fade-in animations
      gsap.fromTo(
        ".animate-on-scroll",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationX: 45,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".animate-on-scroll",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Parallax effects
      gsap.utils.toArray(".parallax").forEach((element: any) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    }
  }, [])

  return (
    <div ref={mainRef} className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ProcessCarousel />
          <ComparisonVisualization />
          <AIShowcase />
          <TestimonialsCarousel />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
