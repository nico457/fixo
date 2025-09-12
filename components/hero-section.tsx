import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background to-muted">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
            Conecta con los mejores
            <span className="text-primary"> profesionales</span>
            <br />
            para tu hogar
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Encuentra plomeros, electricistas, carpinteros y más profesionales verificados cerca de ti. Rápido,
            confiable y al mejor precio.
          </p>

          <div className="bg-card rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="¿Qué servicio necesitas?" className="pl-10" />
              </div>

              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="¿Dónde lo necesitas?" className="pl-10" />
              </div>

              <Button size="lg" className="md:w-auto w-full">
                Buscar
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>Servicios populares:</span>
            <button className="text-primary hover:underline">Plomería</button>
            <button className="text-primary hover:underline">Electricidad</button>
            <button className="text-primary hover:underline">Carpintería</button>
            <button className="text-primary hover:underline">Limpieza</button>
          </div>
        </div>
      </div>
    </section>
  )
}
