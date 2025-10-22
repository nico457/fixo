export interface CommonProblem {
  id: string
  title: string
  description: string
  averagePrice: string
}

export interface ProblemCategory {
  id: string
  name: string
  icon: string
  problems: CommonProblem[]
}

export const commonProblems: ProblemCategory[] = [
  {
    id: "plomeria",
    name: "Plomería",
    icon: "🔧",
    problems: [
      {
        id: "fuga-agua",
        title: "Reparación de fugas de agua",
        description: "Detección y reparación de fugas en cañerías, canillas o inodoros",
        averagePrice: "$8.000 - $15.000",
      },
      {
        id: "destape-cañerias",
        title: "Destape de cañerías",
        description: "Desobstrucción de desagües, inodoros y cañerías tapadas",
        averagePrice: "$6.000 - $12.000",
      },
      {
        id: "instalacion-griferia",
        title: "Instalación de grifería",
        description: "Instalación o cambio de canillas, duchas y accesorios",
        averagePrice: "$5.000 - $10.000",
      },
      {
        id: "calefon",
        title: "Reparación de calefón",
        description: "Service y reparación de calefones a gas",
        averagePrice: "$10.000 - $20.000",
      },
    ],
  },
  {
    id: "electricidad",
    name: "Electricidad",
    icon: "⚡",
    problems: [
      {
        id: "instalacion-tomas",
        title: "Instalación de tomas y enchufes",
        description: "Instalación de nuevos puntos de electricidad",
        averagePrice: "$4.000 - $8.000",
      },
      {
        id: "cambio-tablero",
        title: "Cambio de tablero eléctrico",
        description: "Actualización o reemplazo de tablero con térmicas",
        averagePrice: "$25.000 - $50.000",
      },
      {
        id: "instalacion-luces",
        title: "Instalación de iluminación",
        description: "Instalación de artefactos de iluminación y lámparas",
        averagePrice: "$3.500 - $7.000",
      },
      {
        id: "emergencia-electrica",
        title: "Emergencia eléctrica",
        description: "Atención de cortocircuitos y problemas urgentes",
        averagePrice: "$8.000 - $15.000",
      },
    ],
  },
  {
    id: "carpinteria",
    name: "Carpintería",
    icon: "🪚",
    problems: [
      {
        id: "muebles-medida",
        title: "Muebles a medida",
        description: "Diseño y fabricación de muebles personalizados",
        averagePrice: "$30.000 - $80.000",
      },
      {
        id: "reparacion-puertas",
        title: "Reparación de puertas",
        description: "Ajuste, reparación o cambio de puertas",
        averagePrice: "$8.000 - $18.000",
      },
      {
        id: "instalacion-placares",
        title: "Instalación de placares",
        description: "Armado e instalación de placares empotrados",
        averagePrice: "$40.000 - $100.000",
      },
      {
        id: "deck-madera",
        title: "Construcción de deck",
        description: "Instalación de deck de madera para exteriores",
        averagePrice: "$50.000 - $120.000",
      },
    ],
  },
  {
    id: "pintura",
    name: "Pintura",
    icon: "🎨",
    problems: [
      {
        id: "pintura-interior",
        title: "Pintura de interiores",
        description: "Pintura completa de ambientes interiores",
        averagePrice: "$15.000 - $30.000",
      },
      {
        id: "pintura-exterior",
        title: "Pintura de fachadas",
        description: "Pintura de frentes y exteriores de la propiedad",
        averagePrice: "$25.000 - $60.000",
      },
      {
        id: "retoques",
        title: "Retoques y reparaciones",
        description: "Reparación de humedad y retoques de pintura",
        averagePrice: "$8.000 - $15.000",
      },
      {
        id: "empapelado",
        title: "Empapelado de paredes",
        description: "Colocación de papel decorativo en paredes",
        averagePrice: "$12.000 - $25.000",
      },
    ],
  },
  {
    id: "limpieza",
    name: "Limpieza",
    icon: "🧹",
    problems: [
      {
        id: "limpieza-profunda",
        title: "Limpieza profunda",
        description: "Limpieza completa y detallada del hogar",
        averagePrice: "$12.000 - $25.000",
      },
      {
        id: "limpieza-mudanza",
        title: "Limpieza post-mudanza",
        description: "Limpieza completa después de mudanza",
        averagePrice: "$15.000 - $30.000",
      },
      {
        id: "limpieza-tapizados",
        title: "Limpieza de tapizados",
        description: "Lavado de alfombras, sillones y cortinas",
        averagePrice: "$8.000 - $18.000",
      },
      {
        id: "desinfeccion",
        title: "Desinfección sanitaria",
        description: "Desinfección profesional de espacios",
        averagePrice: "$10.000 - $20.000",
      },
    ],
  },
  {
    id: "jardineria",
    name: "Jardinería",
    icon: "🌱",
    problems: [
      {
        id: "mantenimiento-jardin",
        title: "Mantenimiento de jardín",
        description: "Corte de césped y mantenimiento general",
        averagePrice: "$6.000 - $12.000",
      },
      {
        id: "poda-arboles",
        title: "Poda de árboles",
        description: "Poda profesional de árboles y arbustos",
        averagePrice: "$10.000 - $25.000",
      },
      {
        id: "diseño-jardin",
        title: "Diseño de jardín",
        description: "Diseño y creación de espacios verdes",
        averagePrice: "$30.000 - $80.000",
      },
      {
        id: "riego-automatico",
        title: "Sistema de riego",
        description: "Instalación de sistema de riego automático",
        averagePrice: "$25.000 - $60.000",
      },
    ],
  },
  {
    id: "seguridad",
    name: "Seguridad",
    icon: "🔒",
    problems: [
      {
        id: "camaras-seguridad",
        title: "Instalación de cámaras",
        description: "Sistema de videovigilancia con cámaras IP",
        averagePrice: "$40.000 - $100.000",
      },
      {
        id: "alarmas",
        title: "Sistema de alarmas",
        description: "Instalación de alarma monitoreada",
        averagePrice: "$35.000 - $80.000",
      },
      {
        id: "cerraduras",
        title: "Cambio de cerraduras",
        description: "Instalación de cerraduras de seguridad",
        averagePrice: "$8.000 - $20.000",
      },
      {
        id: "portero-electrico",
        title: "Portero eléctrico",
        description: "Instalación de portero eléctrico o videoportero",
        averagePrice: "$15.000 - $35.000",
      },
    ],
  },
  {
    id: "mecanica",
    name: "Mecánica",
    icon: "🔩",
    problems: [
      {
        id: "service-auto",
        title: "Service completo",
        description: "Mantenimiento preventivo del vehículo",
        averagePrice: "$20.000 - $40.000",
      },
      {
        id: "frenos",
        title: "Cambio de frenos",
        description: "Reemplazo de pastillas y discos de freno",
        averagePrice: "$15.000 - $35.000",
      },
      {
        id: "diagnostico",
        title: "Diagnóstico computarizado",
        description: "Escaneo y diagnóstico de fallas electrónicas",
        averagePrice: "$5.000 - $10.000",
      },
      {
        id: "aire-acondicionado",
        title: "Carga de aire acondicionado",
        description: "Recarga y service de aire acondicionado",
        averagePrice: "$12.000 - $25.000",
      },
    ],
  },
]
