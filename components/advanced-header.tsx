"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Sun, Moon, LogIn } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import AuditteiLogo from "@/components/audittei-logo"
import Link from "next/link"

export default function AdvancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSystemsOpen, setIsSystemsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

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

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-purple-500/30 shadow-2xl"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "power3.out" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <AuditteiLogo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: "Início", id: "hero" },
              { label: "Processo", id: "processo" },
              { label: "Comparação", id: "comparacao" },
              { label: "IA", id: "ia" },
              { label: "Contato", id: "contato" },
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-foreground dark:text-white hover:text-purple-400 transition-colors group"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}

            {/* Systems Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsSystemsOpen(!isSystemsOpen)}
                className="flex items-center space-x-1 text-foreground dark:text-white hover:text-purple-400 transition-colors group"
                whileHover={{ scale: 1.1 }}
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
                    transition={{ duration: 0.3, ease: "power2.out" }}
                    className="absolute top-full mt-4 w-64 bg-background dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden"
                  >
                    <div className="p-2">
                      {[
                        { name: "AuditorNFSe", href: "/auditor-nfse", desc: "Auditoria de NFSe" },
                        { name: "Auditor Fiscal", href: "/auditor-fiscal", desc: "Auditoria Fiscal Completa" },
                      ].map((system, index) => (
                        <motion.div
                          key={system.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={system.href}
                            className="block p-4 rounded-xl hover:bg-purple-600/20 transition-all duration-300 group"
                          >
                            <div className="font-medium text-foreground dark:text-white group-hover:text-purple-400 transition-colors">
                              {system.name}
                            </div>
                            <div className="text-sm text-muted-foreground dark:text-gray-400 mt-1">{system.desc}</div>
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
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-background dark:bg-slate-800 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5 text-blue-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Login Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
                onClick={() => window.open("https://www.audittei.com.br/portal", "_blank")}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </motion.div>

            {/* Demo Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                onClick={() => scrollToSection("contato")}
              >
                Demonstração
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-background dark:bg-slate-800 border border-purple-500/20"
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground dark:text-white p-2"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "power2.out" }}
              className="md:hidden mt-4 py-4 border-t border-purple-500/20 bg-background/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl"
            >
              <div className="flex flex-col space-y-4 px-4">
                {[
                  { label: "Início", id: "hero" },
                  { label: "Processo", id: "processo" },
                  { label: "Comparação", id: "comparacao" },
                  { label: "IA", id: "ia" },
                  { label: "Contato", id: "contato" },
                ].map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground dark:text-white hover:text-purple-400 transition-colors py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <Button
                    variant="outline"
                    className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white mb-2 bg-transparent"
                    onClick={() => window.open("https://www.audittei.com.br/portal", "_blank")}
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
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
