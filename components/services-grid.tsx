import { Card, CardContent } from "@/components/ui/card"
import { Wrench, Zap, Hammer, Paintbrush, Droplets, Shield, Scissors, Car } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "Plomería",
    description: "Reparaciones, instalaciones y mantenimiento",
    count: "150+ profesionales",
  },
  {
    icon: Zap,
    title: "Electricidad",
    description: "Instalaciones eléctricas y reparaciones",
    count: "120+ profesionales",
  },
  {
    icon: Hammer,
    title: "Carpintería",
    description: "Muebles, reparaciones y construcción",
    count: "90+ profesionales",
  },
  {
    icon: Paintbrush,
    title: "Pintura",
    description: "Pintura interior y exterior",
    count: "80+ profesionales",
  },
  {
    icon: Droplets,
    title: "Limpieza",
    description: "Limpieza profunda y mantenimiento",
    count: "200+ profesionales",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Cerrajería y sistemas de seguridad",
    count: "60+ profesionales",
  },
  {
    icon: Scissors,
    title: "Jardinería",
    description: "Mantenimiento de jardines y paisajismo",
    count: "70+ profesionales",
  },
  {
    icon: Car,
    title: "Mecánica",
    description: "Reparación y mantenimiento automotriz",
    count: "45+ profesionales",
  },
]

export function ServicesGrid() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Todos los servicios que necesitas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra profesionales verificados para cualquier trabajo en tu hogar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={`/profesionales?categoria=${encodeURIComponent(service.title)}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                  <p className="text-xs text-primary font-medium">{service.count}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
