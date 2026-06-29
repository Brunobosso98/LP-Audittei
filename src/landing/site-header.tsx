import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/landing/logo"

const NAV = [
  { label: "Reforma Tributária", href: "#simulador" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#faq" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 lg:px-8">
        <a href="#topo" className="flex items-center gap-2.5" aria-label="Inttax — início">
          <Logo className="h-6 w-auto" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://wa.me/5519978180175"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Falar com vendas
          </a>
          <a
            href="#demo"
            className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Solicitar demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background md:hidden">
          <nav aria-label="Navegação principal" className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-foreground hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <a
                href="https://wa.me/5519978180175"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                Falar com vendas
              </a>
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
              >
                Solicitar demo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
