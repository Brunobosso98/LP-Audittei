"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Sun, Moon, LogIn } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import NttaxLogo from "@/components/nttax-logo"

const navigationSections = [
  { label: "Início", id: "hero" },
  { label: "Reforma", id: "reforma" },
  { label: "Plataforma", id: "ecossistema" },
  { label: "Como funciona", id: "fluxo" },
  { label: "FAQ", id: "faq" },
  { label: "Contato", id: "contato" },
]

const systemLinks = [
  {
    name: "Simulador da Reforma Tributária",
    id: "reforma",
    description: "Impacto em custo, preço, fornecedores e margem",
  },
  {
    name: "Fiscal 360",
    id: "ecossistema",
    description: "Auditoria fiscal ampla com gestão por analista",
  },
  {
    name: "Analytics",
    id: "ecossistema",
    description: "Visão de gestão para o cliente do escritório",
  },
  {
    name: "Smart Contábil",
    id: "ecossistema",
    description: "Operação 360º do escritório",
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsProductsOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NttaxLogo size="md" />

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegação principal"
          >
            {navigationSections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-foreground hover:text-primary transition-colors"
                aria-label={`Ir para a seção ${item.label}`}
              >
                {item.label}
              </button>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsProductsOpen((v) => !v)}
                className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
                aria-expanded={isProductsOpen}
                aria-haspopup="menu"
                aria-label="Abrir menu de soluções"
              >
                Soluções
                <motion.span
                  animate={{ rotate: isProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    role="menu"
                    className="absolute right-0 top-full mt-3 w-80 rounded-2xl border border-border bg-card shadow-sm p-2"
                  >
                    {systemLinks.map((system) => (
                      <button
                        key={system.name}
                        onClick={() => scrollToSection(system.id)}
                        role="menuitem"
                        className="block w-full text-left p-3 rounded-xl hover:bg-muted transition-colors"
                      >
                        <div className="text-sm font-medium text-foreground">
                          {system.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {system.description}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label={
                theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
              }
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-foreground" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" aria-hidden="true" />
              )}
            </button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                (window.location.href = "https://www.inttax.com.br/portal")
              }
              className="text-foreground hover:bg-muted"
            >
              <LogIn className="w-4 h-4 mr-1.5" />
              Entrar
            </Button>

            <Button
              size="sm"
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary-hover"
            >
              Agendar demo
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-muted"
              aria-label={
                theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"
              }
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4" aria-hidden="true" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="p-2"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              id="mobile-menu"
              className="md:hidden overflow-hidden border-t border-border"
            >
              <nav className="flex flex-col py-4 gap-1" aria-label="Menu mobile">
                {navigationSections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-2 py-2.5 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}

                <div className="mt-2 pt-3 border-t border-border">
                  <p className="text-meta px-2 mb-2">Soluções</p>
                  {systemLinks.map((system) => (
                    <button
                      key={system.name}
                      onClick={() => scrollToSection(system.id)}
                      className="block w-full text-left px-2 py-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {system.name}
                    </button>
                  ))}
                </div>

                <Button
                  onClick={() =>
                    (window.location.href = "https://www.inttax.com.br/portal")
                  }
                  variant="ghost"
                  className="mt-3 justify-start text-foreground"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </Button>

                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-primary text-primary-foreground hover:bg-primary-hover"
                >
                  Agendar demo
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}