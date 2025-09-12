import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock } from "lucide-react"

const professionals = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    profession: "Plomero Certificado",
    rating: 4.9,
    reviews: 127,
    location: "Ciudad de México",
    experience: "8 años",
    price: "Desde $300/hora",
    image: "/professional-plumber-headshot.jpg",
    specialties: ["Reparaciones", "Instalaciones", "Emergencias"],
    verified: true,
  },
  {
    id: 2,
    name: "Ana Martínez",
    profession: "Electricista",
    rating: 4.8,
    reviews: 89,
    location: "Guadalajara",
    experience: "6 años",
    price: "Desde $350/hora",
    image: "/professional-electrician-woman-headshot.jpg",
    specialties: ["Instalaciones", "Mantenimiento", "Iluminación"],
    verified: true,
  },
  {
    id: 3,
    name: "Miguel Torres",
    profession: "Carpintero",
    rating: 5.0,
    reviews: 156,
    location: "Monterrey",
    experience: "12 años",
    price: "Desde $280/hora",
    image: "/professional-carpenter-headshot.jpg",
    specialties: ["Muebles", "Reparaciones", "Construcción"],
    verified: true,
  },
]

export function FeaturedProfessionals() {
  return (
    <section id="profesionales" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Profesionales destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a algunos de nuestros profesionales mejor calificados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional) => (
            <Card key={professional.id} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={professional.image || "/placeholder.svg"}
                      alt={professional.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {professional.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{professional.name}</h3>
                    <p className="text-muted-foreground text-sm">{professional.profession}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-sm">{professional.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">({professional.reviews} reseñas)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {professional.location}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {professional.experience} de experiencia
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {professional.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="font-semibold text-primary">{professional.price}</span>
                  <Button size="sm">Ver Perfil</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos los Profesionales
          </Button>
        </div>
      </div>
    </section>
  )
}
