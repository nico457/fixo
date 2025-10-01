import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-xl">Fixo</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Conectamos personas con los mejores profesionales para resolver cualquier problema doméstico.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Plomería
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Electricidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Carpintería
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Pintura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Limpieza
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Únete como Profesional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Mantente informado</h3>
            <p className="text-sm text-muted-foreground">Recibe ofertas especiales y consejos para el hogar.</p>
            <div className="flex gap-2">
              <Input placeholder="Tu email" className="flex-1" />
              <Button size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Fixo. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
