export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  tag?: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  type?: 'degree' | 'course' | 'bootcamp';
}

export interface ProjectItem {
  title: string;
  category: string;
  tech: string[];
  description: string;
  github: string;
  live?: string;
  featured?: boolean;
}

export interface CVData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  linkedin: string;
  github: string;
  githubUsername: string;
  location: string;
  photo: string;
  summary: string;
  softSkills: string[];
  technologies: {
    languagesAndFrameworks: string[];
    tools: string[];
    other: string[];
  };
  volunteering: {
    organization: string;
    role: string;
    period: string;
    description: string;
  }[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

export const cvData: CVData = {
  name: "Laura Belen Yachelini",
  title: "DESARROLLO DE SOFTWARE | ANALISTA DE SISTEMAS",
  subtitle: "Desarrolladora C#/.NET & iOS (Swift/SwiftUI) • Analista de Sistemas • Abogada (UCA)",
  email: "lbyachelini@gmail.com",
  linkedin: "https://linkedin.com/in/laurayachelini",
  github: "https://github.com/lbyache",
  githubUsername: "lbyache",
  location: "Ciudad Autónoma de Buenos Aires, Argentina",
  photo: "/laura_yachelini.png",
  summary: "Analista de Sistemas y desarrolladora de software con experiencia en desarrollo .NET, docencia en programación web, automatización de procesos y análisis funcional. Actualmente trabajo desarrollando aplicaciones empresariales en C# y .NET, combinando habilidades técnicas con análisis de negocio, comunicación y mejora de procesos. Me interesa continuar creciendo en roles vinculados al análisis funcional, implementación de soluciones, desarrollo de software y docencia en tecnología.",
  
  softSkills: [
    "Gestión de proyectos",
    "Metodologías ágiles",
    "Comunicación",
    "Negociación",
    "Liderazgo",
    "Pensamiento crítico"
  ],

  technologies: {
    languagesAndFrameworks: [
      "C#",
      ".NET",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "Swift",
      "SwiftUI"
    ],
    tools: [
      "Git",
      "GitHub",
      "Power Automate",
      "Jira",
      "Azure DevOps",
      "Xcode",
      "n8n"
    ],
    other: [
      "Prompt Engineering",
      "Arquitectura en Capas",
      "Patrones de Diseño (SOLID)",
      "APIs REST"
    ]
  },

  volunteering: [
    {
      organization: "MeT (Mujeres en Tecnología)",
      role: "Voluntaria & Colaboradora Activa",
      period: "2024 - Actualidad",
      description: "Organización comprometida con impulsar la inclusión y diversidad de género en el ecosistema tecnológico."
    }
  ],

  education: [
    {
      institution: "Escuela de Arte Multimedial Da Vinci",
      degree: "ANALISTA DE SISTEMAS",
      period: "2023 - 2026",
      type: "degree"
    },
    {
      institution: "Codo a codo",
      degree: "CURSO FULLSTACK NODE.JS",
      period: "Febrero 2024",
      type: "course"
    },
    {
      institution: "CILSA",
      degree: "BOOTCAMP FULLSTACK",
      period: "Agosto 2024",
      type: "bootcamp"
    },
    {
      institution: "Universidad Católica Argentina (UCA)",
      degree: "ABOGACÍA",
      period: "2012 - 2017",
      type: "degree"
    }
  ],

  experience: [
    {
      company: "Axoft Argentina",
      role: "Desarrolladora C# .NET",
      period: "2025 - Actualidad",
      location: "Buenos Aires",
      tag: "Desarrollo .NET",
      bullets: [
        "Desarrollar y mantener aplicaciones empresariales utilizando C# y .NET.",
        "Participar en implementación de nuevas funcionalidades, corrección de bugs y trabajo en equipo.",
        "Optimización de consultas SQL y refactorización orientada a buenas prácticas y mantenibilidad."
      ]
    },
    {
      company: "Escuela de Arte Multimedial Da Vinci",
      role: "Docente Desarrollo Web",
      period: "2024 - Actualidad",
      location: "Buenos Aires",
      tag: "Docencia Tech",
      bullets: [
        "Instruir en programación de desarrollo web (HTML-CSS-Javascript-Bootstrap).",
        "Diseñar proyectos integradores, fomentar el control de versiones con Git/GitHub y guiar a los alumnos en buenas prácticas."
      ]
    },
    {
      company: "Freelance",
      role: "Web Developer",
      period: "2024 - 2025",
      location: "Remoto",
      tag: "Web / Frontend",
      bullets: [
        "Desarrollo de sitios web adaptables y optimizados para múltiples dispositivos.",
        "Entender necesidades del cliente y del público objetivo para estructurar interfaces intuitivas.",
        "Analizar requerimientos de los clientes y proveer informes y entregables técnicos."
      ]
    },
    {
      company: "DHL Express",
      role: "Legal Tech Counsel",
      period: "2018 - 2023",
      location: "Buenos Aires",
      tag: "LegalTech & Automatización",
      bullets: [
        "Asesorar legalmente de manera completa y colaborativa entre departamentos. Elaborar y revisar contratos comerciales.",
        "Desarrollar automatizaciones de procesos internos utilizando Power Platform, actuando como nexo técnico entre las necesidades del área legal y la implementación de software."
      ]
    },
    {
      company: "Estudio Jurídico Tróccoli",
      role: "Legal Counsel Junior",
      period: "2016 - 2017",
      location: "Buenos Aires",
      tag: "Área Legal",
      bullets: [
        "Analizar jurídicamente consultas a clientes.",
        "Supervisar, controlar y realizar el seguimiento riguroso de expedientes y procesos."
      ]
    },
    {
      company: "Centro de Bioética, Persona y Familia",
      role: "Auxiliar de Investigación",
      period: "2015 - 2017",
      location: "Buenos Aires",
      tag: "Investigación & Ética",
      bullets: [
        "Investigar la normativa jurídica aplicada en bioética.",
        "Analizar las consecuencias ético-jurídicas del desarrollo de nuevas biotecnologías."
      ]
    }
  ],

  projects: [
    {
      title: "Claude for Legal AR",
      category: "LegalTech & IA",
      tech: ["Python", "Claude API", "Prompt Eng", "LegalTech"],
      description: "Adaptación y herramientas basadas en Claude para profesionales del derecho en Argentina, optimizando el análisis normativo y la gestión documental legal.",
      github: "https://github.com/lbyache/claude-for-legal-ar",
      featured: true
    },
    {
      title: "Agent Architecture & Security",
      category: "AI Security",
      tech: ["Shell", "OWASP", "AI Agents", "Security Skills"],
      description: "Arquitectura para agentes de IA autónomos y conjunto de habilidades de seguridad alineadas a estándares OWASP para despliegues confiables.",
      github: "https://github.com/lbyache/agent-architecture-security",
      featured: true
    },
    {
      title: "Deon Ethics Skill",
      category: "Ética en IA & Data",
      tech: ["Ethics", "Python", "Data Science", "Guidelines"],
      description: "Checklist y framework de responsabilidad ética integrado para desarrollo de software, machine learning y proyectos de ciencia de datos.",
      github: "https://github.com/lbyache/deon-skill",
      featured: true
    },
    {
      title: "FarmGuard",
      category: "Backend & Gestión",
      tech: ["C#", ".NET", "SQL Server", "Architecture"],
      description: "Software empresarial para gestión veterinaria y agropecuaria, implementando arquitectura en capas, consultas optimizadas y principios SOLID.",
      github: "https://github.com/lbyache/farmGuard",
      featured: true
    },
    {
      title: "Cookcademy iOS App",
      category: "Mobile iOS",
      tech: ["Swift", "SwiftUI", "Xcode", "MVVM"],
      description: "Aplicación mobile nativa para iOS construida con SwiftUI, implementando navegación fluida, diseño declarativo y persistencia de recetas.",
      github: "https://github.com/lbyache/Cookcademy",
      featured: true
    },
    {
      title: "Landmarks SwiftUI",
      category: "Mobile iOS",
      tech: ["Swift", "SwiftUI", "MapKit", "State"],
      description: "Explorador interactivo de puntos de interés y landmarks con renderizado nativo en SwiftUI, integración de mapas y filtrado reactivo.",
      github: "https://github.com/lbyache/landmarks",
      featured: false
    }
  ]
};
