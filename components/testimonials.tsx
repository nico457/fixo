import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    location: "Ciudad de México",
    rating: 5,
    comment:
      "Excelente servicio. El plomero llegó puntual y resolvió mi problema de tubería en menos de una hora. Muy profesional y precio justo.",
    service: "Plomería",
    image: "/happy-customer-woman.jpg",
  },
  {
    name: "Roberto Silva",
    location: "Guadalajara",
    rating: 5,
    comment:
      "Contraté un electricista para instalar nuevas luces en mi casa. El trabajo fue impecable y me explicó todo el proceso. Lo recomiendo 100%.",
    service: "Electricidad",
    image: "/satisfied-customer-man.jpg",
  },
  {
    name: "Carmen López",
    location: "Monterrey",
    rating: 5,
    comment:
      "Necesitaba reparar unos muebles y el carpintero hizo un trabajo fantástico. Quedaron como nuevos y a un precio muy razonable.",
    service: "Carpintería",
    image: "/happy-customer-woman-middle-aged.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Miles de clientes satisfechos confían en nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.comment}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
