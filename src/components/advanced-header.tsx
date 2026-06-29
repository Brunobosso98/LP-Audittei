import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Sun, Moon, LogIn } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import NttaxLogo from "@/components/nttax-logo"

const navigationSections = [
  { label: "Início", id: "topo" },
  { label: "Simulador", id: "simulador" },
  { label: "Plataforma", id: "plataforma" },
  { label: "Como funciona", id: "como-funciona" },
  { label: "Dúvidas", id: "faq" },
]

const systemLinks = [
  { name: "Reforma Tributária", to: "/reforma-tributaria", description: "Consultoria estratégica para a Reforma" },
  { name: "Gestão", to: "/gestao", description: "Gestão de NFSe" },
  { name: "Auditor Fiscal", to: "/auditor-fiscal", description: "Auditoria Fiscal Completa" },
]

export default function AdvancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSystemsOpen, setIsSystemsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, setTheme } = useTheme()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    let ticking = false
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      setScrollProgress(progress)
      setIsScrolled(window.scrollY > 50)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const closeSystemDropdown = () => {
    setIsSystemsOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      initial={prefersReducedMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Reading progress — 1px hairline at the very top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left bg-primary/60"
        style={{ transform: `scaleX(${scrollProgress})`, transition: "transform 120ms linear" }}
      />
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NttaxLogo size="md" />

          <nav className="hidden md:flex items-center space-x-8" aria-label="Navegação principal">
            {navigationSections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative py-1 text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                aria-label={`Ir para a seção ${item.label}`}
              >
                {item.label}
              </button>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsSystemsOpen((previous) => !previous)}
                className="flex items-center space-x-1 py-1 text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                whileTap={undefined}
                aria-expanded={isSystemsOpen}
                aria-haspopup="menu"
                aria-label="Abrir menu de soluções"
              >
                <span>Soluções</span>
                <motion.span
                  animate={{ rotate: isSystemsOpen ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex"
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence>
                {isSystemsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 mt-3 w-64 rounded-xl border border-border bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 backdrop-blur-xl"
                    role="menu"
                  >
                    <div className="p-1">
                      {systemLinks.map((system) => (
                        <Link
                          key={system.name}
                          to={system.to}
                          className="block rounded-lg p-3 transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                          onClick={closeSystemDropdown}
                          role="menuitem"
                        >
                          <div className="text-sm font-medium text-foreground">{system.name}</div>
                          <div className="mt-0.5 text-xs text-muted-foreground">
                            {system.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md border border-border bg-background/60 p-2 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4" aria-hidden="true" />
              )}
            </button>

            <Button
              variant="outline"
              className="border-border text-foreground transition-colors hover:bg-muted"
              onClick={() => (window.location.href = "https://www.inttax.com.br/portal")}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>

            <Button
              className="relative overflow-hidden bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              onClick={() => scrollToSection("demo")}
            >
              Demonstração
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md border border-border bg-background/60 p-2 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4" aria-hidden="true" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
              className="rounded-md p-2 text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex"
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
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              id="mobile-menu"
              role="navigation"
              aria-label="Menu mobile"
              className="md:hidden mt-4 overflow-hidden rounded-2xl border border-border bg-background/90 py-2 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-1 px-2 py-2">
                {navigationSections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="rounded-md px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    aria-label={`Ir para a seção ${item.label}`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="my-1 h-px bg-border" aria-hidden="true" />

                <div className="flex flex-col gap-1">
                  {systemLinks.map((system) => (
                    <Link
                      key={system.name}
                      to={system.to}
                      className="rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted focus-visible:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      onClick={closeSystemDropdown}
                    >
                      {system.name}
                    </Link>
                  ))}
                </div>

                <div className="my-2 flex flex-col gap-2 px-1">
                  <Button
                    variant="outline"
                    className="w-full border-border text-foreground transition-colors hover:bg-muted"
                    onClick={() => window.open("https://www.inttax.com.br/portal")}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>

                  <Button
                    className="w-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
                    onClick={() => scrollToSection("demo")}
                  >
                    Demonstração
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
