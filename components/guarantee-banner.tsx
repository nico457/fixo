import { Shield, CheckCircle } from "lucide-react"

export function GuaranteeBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary" />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-2">
                <span className="text-primary">Garantía de 15 días</span> en todos los servicios
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Tu tranquilidad es nuestra prioridad. Si no estás satisfecho con el trabajo realizado, lo corregimos sin
                costo adicional.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Profesionales verificados</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Trabajo garantizado</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
