import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Busca el servicio",
    description:
      "Describe qué necesitas y dónde lo necesitas. Nuestro sistema te mostrará los mejores profesionales disponibles.",
    step: "01",
  },
  {
    icon: Users,
    title: "Elige tu profesional",
    description:
      "Compara perfiles, lee reseñas y elige el profesional que mejor se adapte a tus necesidades y presupuesto.",
    step: "02",
  },
  {
    icon: CheckCircle,
    title: "Recibe el servicio",
    description: "Coordina directamente con el profesional. Paga de forma segura y deja tu reseña al finalizar.",
    step: "03",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Cómo funciona?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Obtén el servicio que necesitas en solo 3 simples pasos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-border -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <Card key={index} className="relative z-10 text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
