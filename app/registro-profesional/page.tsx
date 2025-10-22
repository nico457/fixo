"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, CheckCircle2, Shield, FileText, Award } from "lucide-react"
import { categories } from "@/lib/professionals-data"

export default function RegistroProfesionalPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "",
    categoria: "",
    experiencia: "",
    ciudad: "",
    descripcion: "",
  })

  const [documentos, setDocumentos] = useState({
    dni: null as File | null,
    certificados: null as File | null,
    antecedentes: null as File | null,
    seguro: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, tipo: keyof typeof documentos) => {
    if (e.target.files && e.target.files[0]) {
      setDocumentos({
        ...documentos,
        [tipo]: e.target.files[0],
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData, documentos)
    // Aquí iría la lógica para enviar los datos al servidor
    alert("Solicitud enviada. Te contactaremos pronto para validar tu documentación.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-balance">Únete a Fixo como Profesional</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Completa tu registro y valida tus antecedentes para comenzar a recibir solicitudes de clientes
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Verificación Completa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Validamos tu identidad y antecedentes para generar confianza con los clientes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Perfil Destacado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Los profesionales verificados aparecen primero en las búsquedas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-lg">Garantía de Calidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Todos los trabajos cuentan con garantía de 15 días</p>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Formulario de Registro</CardTitle>
            <CardDescription>Completa todos los campos y adjunta la documentación requerida</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Información Personal */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    1
                  </div>
                  Información Personal
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      placeholder="Juan"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido">Apellido *</Label>
                    <Input
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleInputChange}
                      required
                      placeholder="Pérez"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="juan@ejemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      placeholder="+54 11 1234-5678"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dni">DNI *</Label>
                    <Input
                      id="dni"
                      name="dni"
                      value={formData.dni}
                      onChange={handleInputChange}
                      required
                      placeholder="12345678"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ciudad">Ciudad *</Label>
                    <Input
                      id="ciudad"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleInputChange}
                      required
                      placeholder="Buenos Aires"
                    />
                  </div>
                </div>
              </div>

              {/* Información Profesional */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    2
                  </div>
                  Información Profesional
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="categoria">Especialidad *</Label>
                    <Select
                      name="categoria"
                      value={formData.categoria}
                      onValueChange={(value) => setFormData({ ...formData, categoria: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu especialidad" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experiencia">Años de Experiencia *</Label>
                    <Input
                      id="experiencia"
                      name="experiencia"
                      type="number"
                      min="0"
                      value={formData.experiencia}
                      onChange={handleInputChange}
                      required
                      placeholder="5"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="descripcion">Descripción de Servicios *</Label>
                  <Textarea
                    id="descripcion"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe los servicios que ofreces, tu experiencia y cualquier especialización..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Documentación */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    3
                  </div>
                  Documentación Requerida
                </h3>
                <p className="text-sm text-muted-foreground">
                  Todos los documentos deben estar vigentes y ser legibles
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="doc-dni">DNI (frente y dorso) *</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="doc-dni"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(e, "dni")}
                        required
                        className="cursor-pointer"
                      />
                      {documentos.dni && <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doc-certificados">Certificados Profesionales</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="doc-certificados"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(e, "certificados")}
                        className="cursor-pointer"
                      />
                      {documentos.certificados && <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doc-antecedentes">Certificado de Antecedentes Penales *</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="doc-antecedentes"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(e, "antecedentes")}
                        required
                        className="cursor-pointer"
                      />
                      {documentos.antecedentes && <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="doc-seguro">Seguro de Responsabilidad Civil</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="doc-seguro"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(e, "seguro")}
                        className="cursor-pointer"
                      />
                      {documentos.seguro && <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />}
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Nota:</strong> Los campos marcados con * son obligatorios. El proceso de verificación puede
                    tomar entre 24 y 48 horas. Te contactaremos por email una vez que tu perfil sea aprobado.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
                <Button type="submit" size="lg" className="min-w-[200px]">
                  <Upload className="h-4 w-4 mr-2" />
                  Enviar Solicitud
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Proceso de Verificación</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Validación de identidad mediante DNI</li>
                    <li>• Verificación de antecedentes penales</li>
                    <li>• Revisión de certificaciones profesionales</li>
                    <li>• Confirmación de datos de contacto</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
