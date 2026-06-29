import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, label: "Facebook da Inttax", href: "#" },
    { icon: Twitter, label: "Twitter da Inttax", href: "#" },
    { icon: Linkedin, label: "LinkedIn da Inttax", href: "#" },
    { icon: Instagram, label: "Instagram da Inttax", href: "#" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-foreground mb-4">inttax</div>
            <p className="text-muted-foreground mb-4">
              Revolucionando a auditoria fiscal com inteligência artificial e automação avançada.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/auditor-fiscal" className="text-muted-foreground hover:text-primary transition-colors">
                  Auditor Fiscal
                </Link>
              </li>
              <li>
                <Link to="/gestao" className="text-muted-foreground hover:text-primary transition-colors">
                  Gestão
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} inttax. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
