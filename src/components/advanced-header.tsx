import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Sun, Moon, LogIn } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import NttaxLogo from "@/components/nttax-logo"

const navigationSections = [
  { label: "Início", id: "hero" },
  { label: "Processo", id: "processo" },
  { label: "Comparação", id: "comparacao" },
  { label: "IA", id: "ia" },
  { label: "Contato", id: "contato" },
]

const systemLinks = [
  { name: "AuditorNFSe", to: "/auditor-nfse", description: "Auditoria de NFSe" },
  { name: "Auditor Fiscal", to: "/auditor-fiscal", description: "Auditoria Fiscal Completa" },
]

export default function AdvancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSystemsOpen, setIsSystemsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const closeSystemDropdown = () => {
    setIsSystemsOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NttaxLogo size="md" />

          <nav className="hidden md:flex items-center space-x-8">
            {navigationSections.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}

            <div className="relative">
              <motion.button
                onClick={() => setIsSystemsOpen((previous) => !previous)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <span>Sistemas</span>
                <motion.div animate={{ rotate: isSystemsOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isSystemsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute top-full mt-4 w-64 bg-card/95 backdrop-blur-xl rounded-2xl shadow-lg border border-border overflow-hidden"
                  >
                    <div className="p-2">
                      {systemLinks.map((system, index) => (
                        <motion.div
                          key={system.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={system.to}
                            className="block p-4 rounded-xl hover:bg-muted/60 transition-all duration-300 group"
                            onClick={closeSystemDropdown}
                          >
                            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {system.name}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {system.description}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-muted/40 border border-border"
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-muted"
                onClick={() => (window.location.href = "https://www.inttax.com.br/portal")}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="relative overflow-hidden bg-primary text-primary-foreground border-0 hover:bg-primary/90"
                onClick={() => scrollToSection("contato")}
              >
                Demonstração
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center space-x-2 md:hidden">
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-muted/40 border border-border"
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
              className="text-foreground p-2"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden mt-4 py-4 border-t border-border bg-background/80 backdrop-blur-xl rounded-2xl"
            >
              <div className="flex flex-col space-y-4 px-4">
                {navigationSections.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                  <div className="flex flex-col space-y-2">
                      {systemLinks.map((system) => (
                        <Link
                          key={system.name}
                          to={system.to}
                          className="text-left text-foreground hover:text-primary transition-colors"
                          onClick={closeSystemDropdown}
                        >
                          {system.name}
                        </Link>
                    ))}
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <Button
                    variant="outline"
                    className="w-full border-border text-foreground hover:bg-muted mb-2 bg-transparent"
                    onClick={() => window.open("https://www.inttax.com.br/portal")}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => scrollToSection("contato")}
                  >
                    Demonstração
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
