"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, CheckCircle } from "lucide-react"
import { professionals, categories, cities } from "@/lib/professionals-data"
import Link from "next/link"

export default function ProfessionalsPage() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedCity, setSelectedCity] = useState("Todas")

  useEffect(() => {
    const categoria = searchParams.get("categoria")
    if (categoria && categories.includes(categoria)) {
      setSelectedCategory(categoria)
    }
  }, [searchParams])

  const filteredProfessionals = professionals.filter((pro) => {
    const matchesSearch =
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "Todos" || pro.category === selectedCategory

    const matchesCity = selectedCity === "Todas" || pro.location.includes(selectedCity)

    return matchesSearch && matchesCategory && matchesCity
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b">
        <div className="container px-4 py-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Encuentra tu profesional</h1>
          <p className="text-muted-foreground mb-6">
            {professionals.length} profesionales verificados listos para ayudarte
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por nombre, servicio o habilidad..."
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-4 space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Categorías</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Ciudad</h3>
                <div className="space-y-2">
                  {cities.map((city) => (
                    <Button
                      key={city}
                      variant={selectedCity === city ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCity(city)}
                    >
                      {city}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="mb-4 text-sm text-muted-foreground">
              {filteredProfessionals.length} profesionales encontrados
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProfessionals.map((professional) => (
                <Link key={professional.id} href={`/profesionales/${professional.id}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={professional.image || "/placeholder.svg"}
                          alt={professional.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {professional.name}
                            </h3>
                            {professional.verified && <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{professional.category}</p>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold text-sm">{professional.rating}</span>
                            <span className="text-sm text-muted-foreground">({professional.reviewCount} reseñas)</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {professional.location}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {professional.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t">
                          <div>
                            <p className="text-xs text-muted-foreground">Desde</p>
                            <p className="font-semibold">${professional.hourlyRate}/hora</p>
                          </div>
                          <Badge variant={professional.availability === "Disponible hoy" ? "default" : "secondary"}>
                            {professional.availability}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredProfessionals.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No se encontraron profesionales que coincidan con tu búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
