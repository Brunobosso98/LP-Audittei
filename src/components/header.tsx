import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, LogIn } from "lucide-react"
import NttaxLogo from "@/components/nttax-logo"

const navigationSections = [
  { label: "Início", id: "hero" },
  { label: "Processo", id: "processo" },
  { label: "Comparação", id: "comparacao" },
  { label: "IA", id: "ia" },
  { label: "Contato", id: "contato" },
]

const systemLinks = [
  { name: "AuditorNFSe", to: "/auditor-nfse" },
  { name: "Auditor Fiscal", to: "/auditor-fiscal" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSystemsOpen, setIsSystemsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const closeDropdowns = () => {
    setIsSystemsOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-pink-500/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NttaxLogo size="sm" />

          <nav className="hidden md:flex items-center space-x-8">
            {navigationSections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-pink-400 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsSystemsOpen((previous) => !previous)}
                className="flex items-center space-x-1 text-white hover:text-pink-400 transition-colors"
              >
                <span>Sistemas</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSystemsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isSystemsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-pink-500/20"
                  >
                    {systemLinks.map((system, index) => (
                      <Link
                        key={system.name}
                        to={system.to}
                        className={`block px-4 py-3 text-white hover:bg-pink-600/20 transition-colors ${
                          index === 0 ? "rounded-t-lg" : ""
                        } ${index === systemLinks.length - 1 ? "rounded-b-lg" : ""}`}
                        onClick={closeDropdowns}
                      >
                        {system.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white bg-transparent"
              onClick={() => (window.location.href = "https://www.inttax.com.br/portal")}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>

            <Button
              variant="outline"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white bg-transparent"
              onClick={() => scrollToSection("contato")}
            >
              Demonstração
            </Button>
          </div>

          <button onClick={() => setIsMobileMenuOpen((previous) => !previous)} className="md:hidden text-white">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-pink-500/20"
            >
              <div className="flex flex-col space-y-4">
                {navigationSections.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-pink-400 transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}

                <div className="flex flex-col space-y-2 text-left text-white">
                  {systemLinks.map((system) => (
                    <Link key={system.name} to={system.to} onClick={closeDropdowns} className="hover:text-pink-400">
                      {system.name}
                    </Link>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white w-full bg-transparent"
                  onClick={() => (window.location.href = "https://www.inttax.com.br/portal")}
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>

                <Button
                  variant="outline"
                  className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white w-full bg-transparent"
                  onClick={() => scrollToSection("contato")}
                >
                  Demonstra��o
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
