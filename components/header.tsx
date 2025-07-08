"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSystemsOpen, setIsSystemsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Audittei
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("processo")}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Processo
            </button>
            <button
              onClick={() => scrollToSection("comparacao")}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Comparação
            </button>
            <button
              onClick={() => scrollToSection("ia")}
              className="text-white hover:text-purple-400 transition-colors"
            >
              IA
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Contato
            </button>

            {/* Systems Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSystemsOpen(!isSystemsOpen)}
                className="flex items-center space-x-1 text-white hover:text-purple-400 transition-colors"
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
                    className="absolute top-full mt-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-purple-500/20"
                  >
                    <Link
                      href="/auditor-nfse"
                      className="block px-4 py-3 text-white hover:bg-purple-600/20 transition-colors rounded-t-lg"
                    >
                      AuditorNFSe
                    </Link>
                    <Link
                      href="/auditor-fiscal"
                      className="block px-4 py-3 text-white hover:bg-purple-600/20 transition-colors rounded-b-lg"
                    >
                      Auditor Fiscal
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white bg-transparent"
              onClick={() => scrollToSection("contato")}
            >
              Demonstração
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-purple-500/20"
            >
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-white hover:text-purple-400 transition-colors text-left"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection("processo")}
                  className="text-white hover:text-purple-400 transition-colors text-left"
                >
                  Processo
                </button>
                <button
                  onClick={() => scrollToSection("comparacao")}
                  className="text-white hover:text-purple-400 transition-colors text-left"
                >
                  Comparação
                </button>
                <button
                  onClick={() => scrollToSection("ia")}
                  className="text-white hover:text-purple-400 transition-colors text-left"
                >
                  IA
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-white hover:text-purple-400 transition-colors text-left"
                >
                  Contato
                </button>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full bg-transparent"
                  onClick={() => scrollToSection("contato")}
                >
                  Demonstração
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
