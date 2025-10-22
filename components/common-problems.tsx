"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { commonProblems, type ProblemCategory } from "@/lib/common-problems-data"

export function CommonProblems() {
  const [selectedCategory, setSelectedCategory] = useState<string>(commonProblems[0].id)

  const currentCategory = commonProblems.find((cat) => cat.id === selectedCategory) as ProblemCategory

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Problemas Comunes y Precios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conocé los precios promedio de los servicios más solicitados en cada categoría
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {commonProblems.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="gap-2"
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCategory.problems.map((problem) => (
            <Card key={problem.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{problem.title}</CardTitle>
                <CardDescription className="text-sm">{problem.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="text-base font-semibold">
                  {problem.averagePrice}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            * Los precios son aproximados y pueden variar según la complejidad del trabajo y la ubicación
          </p>
        </div>
      </div>
    </section>
  )
}
