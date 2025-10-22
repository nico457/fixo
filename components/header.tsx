import { Button } from "@/components/ui/button"
import { Search, Menu, User } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-xl text-foreground">Fixo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/#servicios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </a>
            <Link
              href="/profesionales"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Profesionales
            </Link>
            <a
              href="/#como-funciona"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo Funciona
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/profesionales">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4 mr-2" />
              Buscar Servicio
            </Button>
          </Link>

          <Link href="/registro-profesional">
            <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
              <User className="h-4 w-4 mr-2" />
              Soy Profesional
            </Button>
          </Link>

          <Button size="sm">Iniciar Sesión</Button>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
