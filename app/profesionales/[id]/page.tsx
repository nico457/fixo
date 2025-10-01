import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, MapPin, CheckCircle, Clock, Briefcase, Award, MessageCircle, Calendar } from "lucide-react"
import { professionals } from "@/lib/professionals-data"

export default function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  const professional = professionals.find((p) => p.id === params.id)

  if (!professional) {
    notFound()
  }

  const reviews = [
    {
      id: 1,
      author: "María Pérez",
      rating: 5,
      date: "Hace 2 días",
      comment: "Excelente trabajo, muy profesional y puntual. Resolvió el problema rápidamente.",
    },
    {
      id: 2,
      author: "Juan García",
      rating: 5,
      date: "Hace 1 semana",
      comment: "Muy recomendable. Trabajo de calidad y buen precio.",
    },
    {
      id: 3,
      author: "Laura Martínez",
      rating: 4,
      date: "Hace 2 semanas",
      comment: "Buen servicio, llegó a tiempo y dejó todo limpio.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary/5 border-b">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={professional.image || "/placeholder.svg"}
              alt={professional.name}
              className="w-32 h-32 rounded-xl object-cover"
            />

            <div className="flex-1">
              <div className="flex items-start gap-3 mb-2">
                <h1 className="text-3xl font-bold">{professional.name}</h1>
                {professional.verified && <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />}
              </div>

              <p className="text-xl text-muted-foreground mb-4">{professional.category}</p>

              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{professional.rating}</span>
                  <span className="text-muted-foreground">({professional.reviewCount} reseñas)</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  {professional.location}
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-5 w-5" />
                  {professional.experience} años de experiencia
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Contactar
                </Button>
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  <Calendar className="h-5 w-5" />
                  Agendar cita
                </Button>
              </div>
            </div>

            <Card className="md:w-64">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Tarifa por hora</p>
                  <p className="text-3xl font-bold text-primary">${professional.hourlyRate}</p>
                </div>
                <Badge
                  variant={professional.availability === "Disponible hoy" ? "default" : "secondary"}
                  className="w-full justify-center py-2"
                >
                  {professional.availability}
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Acerca de</h2>
                <p className="text-muted-foreground leading-relaxed">{professional.bio}</p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Habilidades</h2>
                <div className="flex flex-wrap gap-2">
                  {professional.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Reseñas</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b last:border-0 pb-4 last:pb-0">
                      <div className="flex items-start gap-3 mb-2">
                        <Avatar>
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-semibold">{review.author}</p>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{professional.completedJobs}</p>
                      <p className="text-sm text-muted-foreground">Trabajos completados</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{professional.experience} años</p>
                      <p className="text-sm text-muted-foreground">Experiencia</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{professional.rating}/5.0</p>
                      <p className="text-sm text-muted-foreground">Calificación promedio</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{professional.reviewCount}</p>
                      <p className="text-sm text-muted-foreground">Reseñas totales</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {professional.verified && (
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Profesional Verificado</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Este profesional ha sido verificado por Fixo y cumple con nuestros estándares de calidad.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
