export type Language = 'en' | 'ru' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'pt' | 'ar';

export const languages = [
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
  { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
  { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  { code: 'fr' as Language, name: 'Français', flag: '🇫🇷' },
  { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh' as Language, name: '中文', flag: '🇨🇳' },
  { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
  { code: 'pt' as Language, name: 'Português', flag: '🇵🇹' },
  { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' },
];

export const translations = {
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      generator: "Generator",
      signIn: "Sign In"
    },
    generator: {
      title: "AI Image",
      titleAccent: "Generator",
      subtitle: "Create stunning images from text prompts",
      promptLabel: "Describe your image",
      promptPlaceholder: "A futuristic city at sunset with flying cars...",
      generateBtn: "Generate Image",
      generating: "Generating...",
      downloadBtn: "Download Image",
      uploadBtn: "Upload Image",
      editBtn: "Edit Image",
      cost: "Cost: 5 coins",
      editor: {
        title: "Image Editor",
        brightness: "Brightness",
        contrast: "Contrast",
        saturation: "Saturation",
        blur: "Blur",
        grayscale: "Grayscale",
        sepia: "Sepia",
        reset: "Reset",
        apply: "Apply",
        close: "Close"
      }
    },
    hero: {
      title: "AI Creator",
      subtitle: "AI-powered Image & 3D Model Generation for 3D Printing",
      createNow: "Create Now",
      signIn: "Sign In",
      stats: {
        images: "Images Created",
        models: "3D Models",
        users: "Active Users",
        support: "Support"
      }
    },
    features: {
      title: "Powerful",
      titleAccent: "Features",
      items: [
        {
          title: "AI Image Generation",
          description: "Create stunning images from text prompts using advanced AI models"
        },
        {
          title: "3D Model Generation",
          description: "Generate 3D-printable models ready for manufacturing"
        },
        {
          title: "Browser Preview",
          description: "View and rotate your 3D models directly in the browser"
        }
      ]
    },
    formats: {
      title: "Export",
      titleAccent: "Formats",
      models: "3D Models",
      images: "Images"
    },
    coins: {
      title: "Coin",
      titleAccent: "System",
      howItWorks: "How it works",
      points: [
        "Purchase coins via credit card or cryptocurrency",
        "Each generation costs coins based on complexity",
        "Download generated content anytime",
        "Unused coins never expire"
      ],
      costTitle: "Cost per generation",
      costs: {
        simple: "Simple Image",
        hd: "HD Image",
        basic: "Basic 3D Model",
        complex: "Complex 3D Model"
      }
    },
    pricing: {
      title: "Choose Your",
      titleAccent: "Plan",
      mostPopular: "Most Popular",
      perMonth: "/month",
      coins: "coins",
      getStarted: "Get Started",
      plans: [
        {
          name: "Free Trial",
          features: ["Basic image generation", "Standard quality", "5 generations/day"]
        },
        {
          name: "Basic",
          features: ["HD image generation", "3D model generation", "Unlimited generations", "Priority support"]
        },
        {
          name: "Professional",
          features: ["4K image generation", "Advanced 3D models", "Commercial license", "API access", "24/7 support"]
        }
      ]
    },
    testimonials: {
      title: "What",
      titleAccent: "Users",
      titleEnd: "Say",
      items: [
        {
          name: "Sarah Johnson",
          role: "Product Designer",
          content: "This platform revolutionized my workflow. Creating prototypes is now 10x faster!"
        },
        {
          name: "Michael Chen",
          role: "3D Artist",
          content: "The quality of 3D models is exceptional. Perfect for rapid prototyping."
        },
        {
          name: "Emma Davis",
          role: "Marketing Director",
          content: "We generate hundreds of unique visuals monthly. Game-changer for our campaigns."
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "How does the coin system work?",
          answer: "Each generation costs coins based on complexity. Images cost 5-20 coins, 3D models cost 50-100 coins. You can purchase coins via card or cryptocurrency."
        },
        {
          question: "Can I use generated content commercially?",
          answer: "Yes! Professional plan includes full commercial license for all generated content."
        },
        {
          question: "What AI models do you use?",
          answer: "We use cutting-edge models including Stable Diffusion, DALL-E, and custom 3D generation algorithms."
        },
        {
          question: "How long does generation take?",
          answer: "Images: 10-30 seconds. 3D models: 2-5 minutes depending on complexity."
        }
      ]
    },
    footer: {
      description: "Next-generation AI platform for image and 3D model generation.",
      product: "Product",
      legal: "Legal",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      copyright: "© 2024 AI Creator. All rights reserved."
    }
  },
  es: {
    nav: {
      features: "Características",
      pricing: "Precios",
      faq: "FAQ",
      generator: "Generador",
      signIn: "Iniciar sesión"
    },
    generator: {
      title: "Generador de",
      titleAccent: "Imágenes AI",
      subtitle: "Crea imágenes impresionantes desde descripciones de texto",
      promptLabel: "Describe tu imagen",
      promptPlaceholder: "Una ciudad futurista al atardecer con autos voladores...",
      generateBtn: "Generar Imagen",
      generating: "Generando...",
      downloadBtn: "Descargar Imagen",
      uploadBtn: "Subir Imagen",
      editBtn: "Editar Imagen",
      cost: "Costo: 5 monedas",
      editor: {
        title: "Editor de Imágenes",
        brightness: "Brillo",
        contrast: "Contraste",
        saturation: "Saturación",
        blur: "Desenfoque",
        grayscale: "Escala de grises",
        sepia: "Sepia",
        reset: "Restablecer",
        apply: "Aplicar",
        close: "Cerrar"
      }
    },
    hero: {
      title: "AI Creator",
      subtitle: "Generación de Imágenes y Modelos 3D con IA para Impresión 3D",
      createNow: "Crear Ahora",
      signIn: "Iniciar sesión",
      stats: {
        images: "Imágenes Creadas",
        models: "Modelos 3D",
        users: "Usuarios Activos",
        support: "Soporte"
      }
    },
    features: {
      title: "Características",
      titleAccent: "Poderosas",
      items: [
        {
          title: "Generación de Imágenes AI",
          description: "Crea imágenes impresionantes desde descripciones usando modelos avanzados de IA"
        },
        {
          title: "Generación de Modelos 3D",
          description: "Genera modelos 3D listos para imprimir y fabricar"
        },
        {
          title: "Vista Previa en Navegador",
          description: "Visualiza y rota tus modelos 3D directamente en el navegador"
        }
      ]
    },
    formats: {
      title: "Formatos de",
      titleAccent: "Exportación",
      models: "Modelos 3D",
      images: "Imágenes"
    },
    coins: {
      title: "Sistema de",
      titleAccent: "Monedas",
      howItWorks: "Cómo funciona",
      points: [
        "Compra monedas con tarjeta de crédito o criptomonedas",
        "Cada generación cuesta monedas según la complejidad",
        "Descarga el contenido generado en cualquier momento",
        "Las monedas no utilizadas nunca expiran"
      ],
      costTitle: "Costo por generación",
      costs: {
        simple: "Imagen Simple",
        hd: "Imagen HD",
        basic: "Modelo 3D Básico",
        complex: "Modelo 3D Complejo"
      }
    },
    pricing: {
      title: "Elige tu",
      titleAccent: "Plan",
      mostPopular: "Más Popular",
      perMonth: "/mes",
      coins: "monedas",
      getStarted: "Comenzar",
      plans: [
        {
          name: "Prueba Gratuita",
          features: ["Generación básica de imágenes", "Calidad estándar", "5 generaciones/día"]
        },
        {
          name: "Básico",
          features: ["Generación de imágenes HD", "Generación de modelos 3D", "Generaciones ilimitadas", "Soporte prioritario"]
        },
        {
          name: "Profesional",
          features: ["Generación de imágenes 4K", "Modelos 3D avanzados", "Licencia comercial", "Acceso API", "Soporte 24/7"]
        }
      ]
    },
    testimonials: {
      title: "Lo que dicen",
      titleAccent: "los usuarios",
      titleEnd: "",
      items: [
        {
          name: "Sarah Johnson",
          role: "Diseñadora de Productos",
          content: "Esta plataforma revolucionó mi flujo de trabajo. ¡Crear prototipos ahora es 10 veces más rápido!"
        },
        {
          name: "Michael Chen",
          role: "Artista 3D",
          content: "La calidad de los modelos 3D es excepcional. Perfecto para prototipado rápido."
        },
        {
          name: "Emma Davis",
          role: "Directora de Marketing",
          content: "Generamos cientos de visuales únicos mensualmente. Un cambio radical para nuestras campañas."
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "¿Cómo funciona el sistema de monedas?",
          answer: "Cada generación cuesta monedas según la complejidad. Las imágenes cuestan 5-20 monedas, los modelos 3D cuestan 50-100 monedas. Puedes comprar monedas con tarjeta o criptomonedas."
        },
        {
          question: "¿Puedo usar el contenido generado comercialmente?",
          answer: "¡Sí! El plan Profesional incluye licencia comercial completa para todo el contenido generado."
        },
        {
          question: "¿Qué modelos de IA utilizan?",
          answer: "Utilizamos modelos de vanguardia incluyendo Stable Diffusion, DALL-E y algoritmos personalizados de generación 3D."
        },
        {
          question: "¿Cuánto tiempo tarda la generación?",
          answer: "Imágenes: 10-30 segundos. Modelos 3D: 2-5 minutos dependiendo de la complejidad."
        }
      ]
    },
    footer: {
      description: "Plataforma AI de próxima generación para generación de imágenes y modelos 3D.",
      product: "Producto",
      legal: "Legal",
      contact: "Contacto",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      cookies: "Política de Cookies",
      copyright: "© 2024 AI Creator. Todos los derechos reservados."
    }
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      pricing: "Tarifs",
      faq: "FAQ",
      generator: "Générateur",
      signIn: "Se connecter"
    },
    generator: {
      title: "Générateur d'",
      titleAccent: "Images IA",
      subtitle: "Créez des images époustouflantes à partir de descriptions textuelles",
      promptLabel: "Décrivez votre image",
      promptPlaceholder: "Une ville futuriste au coucher du soleil avec des voitures volantes...",
      generateBtn: "Générer l'Image",
      generating: "Génération...",
      downloadBtn: "Télécharger l'Image",
      uploadBtn: "Télécharger l'Image",
      editBtn: "Modifier l'Image",
      cost: "Coût: 5 pièces",
      editor: {
        title: "Éditeur d'Images",
        brightness: "Luminosité",
        contrast: "Contraste",
        saturation: "Saturation",
        blur: "Flou",
        grayscale: "Niveaux de gris",
        sepia: "Sépia",
        reset: "Réinitialiser",
        apply: "Appliquer",
        close: "Fermer"
      }
    },
    hero: {
      title: "AI Creator",
      subtitle: "Génération d'Images et de Modèles 3D par IA pour l'Impression 3D",
      createNow: "Créer Maintenant",
      signIn: "Se connecter",
      stats: {
        images: "Images Créées",
        models: "Modèles 3D",
        users: "Utilisateurs Actifs",
        support: "Support"
      }
    },
    features: {
      title: "Fonctionnalités",
      titleAccent: "Puissantes",
      items: [
        {
          title: "Génération d'Images IA",
          description: "Créez des images époustouflantes à partir de descriptions en utilisant des modèles IA avancés"
        },
        {
          title: "Génération de Modèles 3D",
          description: "Générez des modèles 3D prêts pour l'impression et la fabrication"
        },
        {
          title: "Aperçu dans le Navigateur",
          description: "Visualisez et faites pivoter vos modèles 3D directement dans le navigateur"
        }
      ]
    },
    formats: {
      title: "Formats d'",
      titleAccent: "Exportation",
      models: "Modèles 3D",
      images: "Images"
    },
    coins: {
      title: "Système de",
      titleAccent: "Pièces",
      howItWorks: "Comment ça marche",
      points: [
        "Achetez des pièces par carte de crédit ou cryptomonnaie",
        "Chaque génération coûte des pièces selon la complexité",
        "Téléchargez le contenu généré à tout moment",
        "Les pièces non utilisées n'expirent jamais"
      ],
      costTitle: "Coût par génération",
      costs: {
        simple: "Image Simple",
        hd: "Image HD",
        basic: "Modèle 3D Basique",
        complex: "Modèle 3D Complexe"
      }
    },
    pricing: {
      title: "Choisissez votre",
      titleAccent: "Plan",
      mostPopular: "Le Plus Populaire",
      perMonth: "/mois",
      coins: "pièces",
      getStarted: "Commencer",
      plans: [
        {
          name: "Essai Gratuit",
          features: ["Génération d'images basique", "Qualité standard", "5 générations/jour"]
        },
        {
          name: "Basique",
          features: ["Génération d'images HD", "Génération de modèles 3D", "Générations illimitées", "Support prioritaire"]
        },
        {
          name: "Professionnel",
          features: ["Génération d'images 4K", "Modèles 3D avancés", "Licence commerciale", "Accès API", "Support 24/7"]
        }
      ]
    },
    testimonials: {
      title: "Ce que disent",
      titleAccent: "les utilisateurs",
      titleEnd: "",
      items: [
        {
          name: "Sarah Johnson",
          role: "Designer Produit",
          content: "Cette plateforme a révolutionné mon flux de travail. Créer des prototypes est maintenant 10 fois plus rapide!"
        },
        {
          name: "Michael Chen",
          role: "Artiste 3D",
          content: "La qualité des modèles 3D est exceptionnelle. Parfait pour le prototypage rapide."
        },
        {
          name: "Emma Davis",
          role: "Directrice Marketing",
          content: "Nous générons des centaines de visuels uniques mensuellement. Un changement radical pour nos campagnes."
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Comment fonctionne le système de pièces?",
          answer: "Chaque génération coûte des pièces selon la complexité. Les images coûtent 5-20 pièces, les modèles 3D coûtent 50-100 pièces. Vous pouvez acheter des pièces par carte ou cryptomonnaie."
        },
        {
          question: "Puis-je utiliser le contenu généré commercialement?",
          answer: "Oui! Le plan Professionnel inclut une licence commerciale complète pour tout le contenu généré."
        },
        {
          question: "Quels modèles IA utilisez-vous?",
          answer: "Nous utilisons des modèles de pointe incluant Stable Diffusion, DALL-E et des algorithmes personnalisés de génération 3D."
        },
        {
          question: "Combien de temps prend la génération?",
          answer: "Images: 10-30 secondes. Modèles 3D: 2-5 minutes selon la complexité."
        }
      ]
    },
    footer: {
      description: "Plateforme IA de nouvelle génération pour la génération d'images et de modèles 3D.",
      product: "Produit",
      legal: "Légal",
      contact: "Contact",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      cookies: "Politique des Cookies",
      copyright: "© 2024 AI Creator. Tous droits réservés."
    }
  },
  de: {
    nav: {
      features: "Funktionen",
      pricing: "Preise",
      faq: "FAQ",
      generator: "Generator",
      signIn: "Anmelden"
    },
    generator: {
      title: "KI-Bild",
      titleAccent: "Generator",
      subtitle: "Erstellen Sie atemberaubende Bilder aus Textbeschreibungen",
      promptLabel: "Beschreiben Sie Ihr Bild",
      promptPlaceholder: "Eine futuristische Stadt bei Sonnenuntergang mit fliegenden Autos...",
      generateBtn: "Bild Generieren",
      generating: "Generierung...",
      downloadBtn: "Bild Herunterladen",
      uploadBtn: "Bild Hochladen",
      editBtn: "Bild Bearbeiten",
      cost: "Kosten: 5 Münzen",
      editor: {
        title: "Bild-Editor",
        brightness: "Helligkeit",
        contrast: "Kontrast",
        saturation: "Sättigung",
        blur: "Unschärfe",
        grayscale: "Graustufen",
        sepia: "Sepia",
        reset: "Zurücksetzen",
        apply: "Anwenden",
        close: "Schließen"
      }
    },
    hero: {
      title: "AI Creator",
      subtitle: "KI-gesteuerte Bild- und 3D-Modellgenerierung für 3D-Druck",
      createNow: "Jetzt Erstellen",
      signIn: "Anmelden",
      stats: {
        images: "Erstellte Bilder",
        models: "3D-Modelle",
        users: "Aktive Benutzer",
        support: "Support"
      }
    },
    features: {
      title: "Leistungsstarke",
      titleAccent: "Funktionen",
      items: [
        {
          title: "KI-Bildgenerierung",
          description: "Erstellen Sie atemberaubende Bilder aus Textbeschreibungen mit fortschrittlichen KI-Modellen"
        },
        {
          title: "3D-Modellgenerierung",
          description: "Generieren Sie druckfertige 3D-Modelle für die Fertigung"
        },
        {
          title: "Browser-Vorschau",
          description: "Betrachten und drehen Sie Ihre 3D-Modelle direkt im Browser"
        }
      ]
    },
    formats: {
      title: "Export",
      titleAccent: "Formate",
      models: "3D-Modelle",
      images: "Bilder"
    },
    coins: {
      title: "Münz",
      titleAccent: "System",
      howItWorks: "Wie es funktioniert",
      points: [
        "Münzen per Kreditkarte oder Kryptowährung kaufen",
        "Jede Generierung kostet Münzen je nach Komplexität",
        "Generierte Inhalte jederzeit herunterladen",
        "Nicht verwendete Münzen verfallen nie"
      ],
      costTitle: "Kosten pro Generierung",
      costs: {
        simple: "Einfaches Bild",
        hd: "HD-Bild",
        basic: "Basis 3D-Modell",
        complex: "Komplexes 3D-Modell"
      }
    },
    pricing: {
      title: "Wählen Sie Ihren",
      titleAccent: "Plan",
      mostPopular: "Am Beliebtesten",
      perMonth: "/Monat",
      coins: "Münzen",
      getStarted: "Loslegen",
      plans: [
        {
          name: "Kostenlose Testversion",
          features: ["Basis-Bildgenerierung", "Standardqualität", "5 Generierungen/Tag"]
        },
        {
          name: "Basis",
          features: ["HD-Bildgenerierung", "3D-Modellgenerierung", "Unbegrenzte Generierungen", "Prioritäts-Support"]
        },
        {
          name: "Professionell",
          features: ["4K-Bildgenerierung", "Erweiterte 3D-Modelle", "Kommerzielle Lizenz", "API-Zugriff", "24/7-Support"]
        }
      ]
    },
    testimonials: {
      title: "Was",
      titleAccent: "Benutzer",
      titleEnd: "sagen",
      items: [
        {
          name: "Sarah Johnson",
          role: "Produktdesignerin",
          content: "Diese Plattform hat meinen Workflow revolutioniert. Prototypen erstellen ist jetzt 10x schneller!"
        },
        {
          name: "Michael Chen",
          role: "3D-Künstler",
          content: "Die Qualität der 3D-Modelle ist außergewöhnlich. Perfekt für schnelles Prototyping."
        },
        {
          name: "Emma Davis",
          role: "Marketing-Direktorin",
          content: "Wir generieren monatlich Hunderte einzigartiger Visuals. Ein Game-Changer für unsere Kampagnen."
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Wie funktioniert das Münzsystem?",
          answer: "Jede Generierung kostet Münzen je nach Komplexität. Bilder kosten 5-20 Münzen, 3D-Modelle kosten 50-100 Münzen. Sie können Münzen per Karte oder Kryptowährung kaufen."
        },
        {
          question: "Kann ich generierten Inhalt kommerziell nutzen?",
          answer: "Ja! Der Professionell-Plan beinhaltet eine vollständige kommerzielle Lizenz für alle generierten Inhalte."
        },
        {
          question: "Welche KI-Modelle verwenden Sie?",
          answer: "Wir verwenden modernste Modelle einschließlich Stable Diffusion, DALL-E und benutzerdefinierte 3D-Generierungsalgorithmen."
        },
        {
          question: "Wie lange dauert die Generierung?",
          answer: "Bilder: 10-30 Sekunden. 3D-Modelle: 2-5 Minuten je nach Komplexität."
        }
      ]
    },
    footer: {
      description: "KI-Plattform der nächsten Generation für Bild- und 3D-Modellgenerierung.",
      product: "Produkt",
      legal: "Rechtliches",
      contact: "Kontakt",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      cookies: "Cookie-Richtlinie",
      copyright: "© 2024 AI Creator. Alle Rechte vorbehalten."
    }
  },
  zh: {
    nav: {
      features: "功能",
      pricing: "价格",
      faq: "常见问题",
      generator: "生成器",
      signIn: "登录"
    },
    generator: {
      title: "AI图像",
      titleAccent: "生成器",
      subtitle: "从文本描述创建令人惊叹的图像",
      promptLabel: "描述您的图像",
      promptPlaceholder: "日落时分的未来城市与飞行汽车...",
      generateBtn: "生成图像",
      generating: "生成中...",
      downloadBtn: "下载图像",
      uploadBtn: "上传图像",
      editBtn: "编辑图像",
      cost: "费用：5个代币",
      editor: {
        title: "图像编辑器",
        brightness: "亮度",
        contrast: "对比度",
        saturation: "饱和度",
        blur: "模糊",
        grayscale: "灰度",
        sepia: "复古",
        reset: "重置",
        apply: "应用",
        close: "关闭"
      }
    },
    hero: {
      title: "AI Creator",
      subtitle: "AI驱动的图像和3D模型生成用于3D打印",
      createNow: "立即创建",
      signIn: "登录",
      stats: {
        images: "创建的图像",
        models: "3D模型",
        users: "活跃用户",
        support: "支持"
      }
    },
    features: {
      title: "强大的",
      titleAccent: "功能",
      items: [
        {
          title: "AI图像生成",
          description: "使用先进的AI模型从文本提示创建令人惊叹的图像"
        },
        {
          title: "3D模型生成",
          description: "生成可用于制造的3D打印模型"
        },
        {
          title: "浏览器预览",
          description: "直接在浏览器中查看和旋转您的3D模型"
        }
      ]
    },
    formats: {
      title: "导出",
      titleAccent: "格式",
      models: "3D模型",
      images: "图像"
    },
    coins: {
      title: "代币",
      titleAccent: "系统",
      howItWorks: "工作原理",
      points: [
        "通过信用卡或加密货币购买代币",
        "每次生成根据复杂度消耗代币",
        "随时下载生成的内容",
        "未使用的代币永不过期"
      ],
      costTitle: "每次生成成本",
      costs: {
        simple: "简单图像",
        hd: "高清图像",
        basic: "基础3D模型",
        complex: "复杂3D模型"
      }
    },
    pricing: {
      title: "选择您的",
      titleAccent: "计划",
      mostPopular: "最受欢迎",
      perMonth: "/月",
      coins: "代币",
      getStarted: "开始使用",
      plans: [
        {
          name: "免费试用",
          features: ["基础图像生成", "标准质量", "每天5次生成"]
        },
        {
          name: "基础版",
          features: ["高清图像生成", "3D模型生成", "无限次生成", "优先支持"]
        },
        {
          name: "专业版",
          features: ["4K图像生成", "高级3D模型", "商业许可", "API访问", "24/7支持"]
        }
      ]
    },
    testimonials: {
      title: "用户",
      titleAccent: "评价",
      titleEnd: "",
      items: [
        {
          name: "Sarah Johnson",
          role: "产品设计师",
          content: "这个平台彻底改变了我的工作流程。创建原型现在快了10倍！"
        },
        {
          name: "Michael Chen",
          role: "3D艺术家",
          content: "3D模型的质量非常出色。非常适合快速原型制作。"
        },
        {
          name: "Emma Davis",
          role: "营销总监",
          content: "我们每月生成数百个独特的视觉效果。这改变了我们活动的游戏规则。"
        }
      ]
    },
    faq: {
      title: "常见问题",
      items: [
        {
          question: "代币系统如何工作？",
          answer: "每次生成根据复杂度消耗代币。图像消耗5-20个代币，3D模型消耗50-100个代币。您可以通过卡或加密货币购买代币。"
        },
        {
          question: "我可以商业使用生成的内容吗？",
          answer: "可以！专业计划包括所有生成内容的完整商业许可。"
        },
        {
          question: "你们使用什么AI模型？",
          answer: "我们使用包括Stable Diffusion、DALL-E和自定义3D生成算法在内的尖端模型。"
        },
        {
          question: "生成需要多长时间？",
          answer: "图像：10-30秒。3D模型：根据复杂度需要2-5分钟。"
        }
      ]
    },
    footer: {
      description: "用于图像和3D模型生成的下一代AI平台。",
      product: "产品",
      legal: "法律",
      contact: "联系",
      privacy: "隐私政策",
      terms: "服务条款",
      cookies: "Cookie政策",
      copyright: "© 2024 AI Creator. 保留所有权利。"
    }
  },
  ja: {
    nav: {
      features: "機能",
      pricing: "料金",
      faq: "よくある質問",
      generator: "ジェネレーター",
      signIn: "ログイン"
    },
    generator: {
      title: "AI画像",
      titleAccent: "ジェネレーター",
      subtitle: "テキストから素晴らしい画像を作成",
      promptLabel: "画像を説明してください",
      promptPlaceholder: "夕暮れの未来都市と空飛ぶ車...",
      generateBtn: "画像を生成",
      generating: "生成中...",
      downloadBtn: "画像をダウンロード",
      uploadBtn: "画像をアップロード",
      editBtn: "画像を編集",
      cost: "コスト: 5コイン",
      editor: {
        title: "画像エディター",
        brightness: "明るさ",
        contrast: "コントラスト",
        saturation: "彩度",
        blur: "ぼかし",
        grayscale: "グレースケール",
        sepia: "セピア",
        reset: "リセット",
        apply: "適用",
        close: "閉じる"
      }
    },
    hero: {
      title: "AI Creator",
      subtitle: "3Dプリント用のAI駆動画像と3Dモデル生成",
      createNow: "今すぐ作成",
      signIn: "ログイン",
      stats: {
        images: "作成された画像",
        models: "3Dモデル",
        users: "アクティブユーザー",
        support: "サポート"
      }
    },
    features: {
      title: "強力な",
      titleAccent: "機能",
      items: [
        {
          title: "AI画像生成",
          description: "高度なAIモデルを使用してテキストプロンプトから素晴らしい画像を作成"
        },
        {
          title: "3Dモデル生成",
          description: "製造可能な3Dプリント用モデルを生成"
        },
        {
          title: "ブラウザプレビュー",
          description: "ブラウザで直接3Dモデルを表示・回転"
        }
      ]
    },
    formats: {
      title: "エクスポート",
      titleAccent: "フォーマット",
      models: "3Dモデル",
      images: "画像"
    },
    coins: {
      title: "コイン",
      titleAccent: "システム",
      howItWorks: "仕組み",
      points: [
        "クレジットカードまたは暗号通貨でコインを購入",
        "各生成は複雑さに応じてコインを消費",
        "生成されたコンテンツをいつでもダウンロード",
        "未使用のコインは期限切れなし"
      ],
      costTitle: "生成あたりのコスト",
      costs: {
        simple: "シンプル画像",
        hd: "HD画像",
        basic: "基本3Dモデル",
        complex: "複雑な3Dモデル"
      }
    },
    pricing: {
      title: "プランを",
      titleAccent: "選択",
      mostPopular: "最も人気",
      perMonth: "/月",
      coins: "コイン",
      getStarted: "始める",
      plans: [
        {
          name: "無料トライアル",
          features: ["基本画像生成", "標準品質", "1日5回の生成"]
        },
        {
          name: "ベーシック",
          features: ["HD画像生成", "3Dモデル生成", "無制限生成", "優先サポート"]
        },
        {
          name: "プロフェッショナル",
          features: ["4K画像生成", "高度な3Dモデル", "商用ライセンス", "APIアクセス", "24/7サポート"]
        }
      ]
    },
    testimonials: {
      title: "ユーザーの",
      titleAccent: "声",
      titleEnd: "",
      items: [
        {
          name: "Sarah Johnson",
          role: "プロダクトデザイナー",
          content: "このプラットフォームは私のワークフローを革命的に変えました。プロトタイプ作成が10倍速くなりました！"
        },
        {
          name: "Michael Chen",
          role: "3Dアーティスト",
          content: "3Dモデルの品質は素晴らしいです。迅速なプロトタイピングに最適です。"
        },
        {
          name: "Emma Davis",
          role: "マーケティングディレクター",
          content: "毎月何百もの独自のビジュアルを生成しています。キャンペーンのゲームチェンジャーです。"
        }
      ]
    },
    faq: {
      title: "よくある質問",
      items: [
        {
          question: "コインシステムはどのように機能しますか？",
          answer: "各生成は複雑さに応じてコインを消費します。画像は5-20コイン、3Dモデルは50-100コインです。カードまたは暗号通貨でコインを購入できます。"
        },
        {
          question: "生成されたコンテンツを商用利用できますか？",
          answer: "はい！プロフェッショナルプランには、すべての生成コンテンツの完全な商用ライセンスが含まれています。"
        },
        {
          question: "どのAIモデルを使用していますか？",
          answer: "Stable Diffusion、DALL-E、カスタム3D生成アルゴリズムを含む最先端のモデルを使用しています。"
        },
        {
          question: "生成にはどのくらい時間がかかりますか？",
          answer: "画像：10-30秒。3Dモデル：複雑さに応じて2-5分。"
        }
      ]
    },
    footer: {
      description: "画像および3Dモデル生成用の次世代AIプラットフォーム。",
      product: "製品",
      legal: "法的",
      contact: "お問い合わせ",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      cookies: "Cookieポリシー",
      copyright: "© 2024 AI Creator. All rights reserved."
    }
  },
  pt: {
    nav: {
      features: "Recursos",
      pricing: "Preços",
      faq: "FAQ",
      generator: "Gerador",
      signIn: "Entrar"
    },
    generator: {
      title: "Gerador de",
      titleAccent: "Imagens IA",
      subtitle: "Crie imagens impressionantes a partir de descrições de texto",
      promptLabel: "Descreva sua imagem",
      promptPlaceholder: "Uma cidade futurista ao pôr do sol com carros voadores...",
      generateBtn: "Gerar Imagem",
      generating: "Gerando...",
      downloadBtn: "Baixar Imagem",
      uploadBtn: "Enviar Imagem",
      editBtn: "Editar Imagem",
      cost: "Custo: 5 moedas",
      editor: {
        title: "Editor de Imagens",
        brightness: "Brilho",
        contrast: "Contraste",
        saturation: "Saturação",
        blur: "Desfoque",
        grayscale: "Escala de cinza",
        sepia: "Sépia",
        reset: "Redefinir",
        apply: "Aplicar",
        close: "Fechar"
      }
    },
    hero: {
      title: "AI Creator",
      subtitle: "Geração de Imagens e Modelos 3D com IA para Impressão 3D",
      createNow: "Criar Agora",
      signIn: "Entrar",
      stats: {
        images: "Imagens Criadas",
        models: "Modelos 3D",
        users: "Usuários Ativos",
        support: "Suporte"
      }
    },
    features: {
      title: "Recursos",
      titleAccent: "Poderosos",
      items: [
        {
          title: "Geração de Imagens IA",
          description: "Crie imagens impressionantes a partir de textos usando modelos avançados de IA"
        },
        {
          title: "Geração de Modelos 3D",
          description: "Gere modelos 3D prontos para impressão e fabricação"
        },
        {
          title: "Visualização no Navegador",
          description: "Visualize e gire seus modelos 3D diretamente no navegador"
        }
      ]
    },
    formats: {
      title: "Formatos de",
      titleAccent: "Exportação",
      models: "Modelos 3D",
      images: "Imagens"
    },
    coins: {
      title: "Sistema de",
      titleAccent: "Moedas",
      howItWorks: "Como funciona",
      points: [
        "Compre moedas via cartão de crédito ou criptomoeda",
        "Cada geração custa moedas com base na complexidade",
        "Baixe o conteúdo gerado a qualquer momento",
        "Moedas não utilizadas nunca expiram"
      ],
      costTitle: "Custo por geração",
      costs: {
        simple: "Imagem Simples",
        hd: "Imagem HD",
        basic: "Modelo 3D Básico",
        complex: "Modelo 3D Complexo"
      }
    },
    pricing: {
      title: "Escolha seu",
      titleAccent: "Plano",
      mostPopular: "Mais Popular",
      perMonth: "/mês",
      coins: "moedas",
      getStarted: "Começar",
      plans: [
        {
          name: "Teste Gratuito",
          features: ["Geração básica de imagens", "Qualidade padrão", "5 gerações/dia"]
        },
        {
          name: "Básico",
          features: ["Geração de imagens HD", "Geração de modelos 3D", "Gerações ilimitadas", "Suporte prioritário"]
        },
        {
          name: "Profissional",
          features: ["Geração de imagens 4K", "Modelos 3D avançados", "Licença comercial", "Acesso à API", "Suporte 24/7"]
        }
      ]
    },
    testimonials: {
      title: "O que",
      titleAccent: "os usuários",
      titleEnd: "dizem",
      items: [
        {
          name: "Sarah Johnson",
          role: "Designer de Produtos",
          content: "Esta plataforma revolucionou meu fluxo de trabalho. Criar protótipos agora é 10x mais rápido!"
        },
        {
          name: "Michael Chen",
          role: "Artista 3D",
          content: "A qualidade dos modelos 3D é excepcional. Perfeito para prototipagem rápida."
        },
        {
          name: "Emma Davis",
          role: "Diretora de Marketing",
          content: "Geramos centenas de visuais únicos mensalmente. Mudou o jogo para nossas campanhas."
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Como funciona o sistema de moedas?",
          answer: "Cada geração custa moedas com base na complexidade. Imagens custam 5-20 moedas, modelos 3D custam 50-100 moedas. Você pode comprar moedas via cartão ou criptomoeda."
        },
        {
          question: "Posso usar o conteúdo gerado comercialmente?",
          answer: "Sim! O plano Profissional inclui licença comercial completa para todo o conteúdo gerado."
        },
        {
          question: "Quais modelos de IA vocês usam?",
          answer: "Usamos modelos de ponta incluindo Stable Diffusion, DALL-E e algoritmos personalizados de geração 3D."
        },
        {
          question: "Quanto tempo leva a geração?",
          answer: "Imagens: 10-30 segundos. Modelos 3D: 2-5 minutos dependendo da complexidade."
        }
      ]
    },
    footer: {
      description: "Plataforma IA de próxima geração para geração de imagens e modelos 3D.",
      product: "Produto",
      legal: "Legal",
      contact: "Contato",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      cookies: "Política de Cookies",
      copyright: "© 2024 AI Creator. Todos os direitos reservados."
    }
  },
  ar: {
    nav: {
      features: "المميزات",
      pricing: "الأسعار",
      faq: "الأسئلة الشائعة",
      generator: "المولد",
      signIn: "تسجيل الدخول"
    },
    generator: {
      title: "مولد الصور",
      titleAccent: "بالذكاء الاصطناعي",
      subtitle: "أنشئ صورًا مذهلة من الأوصاف النصية",
      promptLabel: "صف صورتك",
      promptPlaceholder: "مدينة مستقبلية عند الغروب مع سيارات طائرة...",
      generateBtn: "إنشاء الصورة",
      generating: "جارٍ الإنشاء...",
      downloadBtn: "تحميل الصورة",
      uploadBtn: "رفع الصورة",
      editBtn: "تحرير الصورة",
      cost: "التكلفة: 5 عملات",
      editor: {
        title: "محرر الصور",
        brightness: "السطوع",
        contrast: "التباين",
        saturation: "التشبع",
        blur: "التمويه",
        grayscale: "تدرج الرمادي",
        sepia: "بني داكن",
        reset: "إعادة تعيين",
        apply: "تطبيق",
        close: "إغلاق"
      }
    },
    hero: {
      title: "AI Creator",
      subtitle: "إنشاء الصور ونماذج ثلاثية الأبعاد بالذكاء الاصطناعي للطباعة ثلاثية الأبعاد",
      createNow: "ابدأ الآن",
      signIn: "تسجيل الدخول",
      stats: {
        images: "الصور المنشأة",
        models: "النماذج ثلاثية الأبعاد",
        users: "المستخدمون النشطون",
        support: "الدعم"
      }
    },
    features: {
      title: "مميزات",
      titleAccent: "قوية",
      items: [
        {
          title: "إنشاء الصور بالذكاء الاصطناعي",
          description: "أنشئ صورًا مذهلة من الأوصاف النصية باستخدام نماذج ذكاء اصطناعي متقدمة"
        },
        {
          title: "إنشاء نماذج ثلاثية الأبعاد",
          description: "أنشئ نماذج ثلاثية الأبعاد جاهزة للطباعة والتصنيع"
        },
        {
          title: "المعاينة في المتصفح",
          description: "اعرض ودور نماذجك ثلاثية الأبعاد مباشرة في المتصفح"
        }
      ]
    },
    formats: {
      title: "صيغ",
      titleAccent: "التصدير",
      models: "النماذج ثلاثية الأبعاد",
      images: "الصور"
    },
    coins: {
      title: "نظام",
      titleAccent: "العملات",
      howItWorks: "كيف يعمل",
      points: [
        "اشترِ العملات ببطاقة الائتمان أو العملات المشفرة",
        "كل عملية إنشاء تكلف عملات بناءً على التعقيد",
        "قم بتنزيل المحتوى المنشأ في أي وقت",
        "العملات غير المستخدمة لا تنتهي صلاحيتها أبدًا"
      ],
      costTitle: "التكلفة لكل عملية إنشاء",
      costs: {
        simple: "صورة بسيطة",
        hd: "صورة عالية الدقة",
        basic: "نموذج ثلاثي الأبعاد أساسي",
        complex: "نموذج ثلاثي الأبعاد معقد"
      }
    },
    pricing: {
      title: "اختر",
      titleAccent: "خطتك",
      mostPopular: "الأكثر شعبية",
      perMonth: "/شهر",
      coins: "عملات",
      getStarted: "ابدأ",
      plans: [
        {
          name: "تجربة مجانية",
          features: ["إنشاء صور أساسي", "جودة قياسية", "5 عمليات إنشاء/يوم"]
        },
        {
          name: "أساسي",
          features: ["إنشاء صور عالية الدقة", "إنشاء نماذج ثلاثية الأبعاد", "عمليات إنشاء غير محدودة", "دعم ذو أولوية"]
        },
        {
          name: "احترافي",
          features: ["إنشاء صور 4K", "نماذج ثلاثية الأبعاد متقدمة", "رخصة تجارية", "وصول إلى API", "دعم على مدار الساعة"]
        }
      ]
    },
    testimonials: {
      title: "ماذا يقول",
      titleAccent: "المستخدمون",
      titleEnd: "",
      items: [
        {
          name: "سارة جونسون",
          role: "مصممة منتجات",
          content: "هذه المنصة غيرت سير عملي بشكل جذري. إنشاء النماذج الأولية الآن أسرع 10 مرات!"
        },
        {
          name: "مايكل تشين",
          role: "فنان ثلاثي الأبعاد",
          content: "جودة النماذج ثلاثية الأبعاد استثنائية. مثالي للنماذج الأولية السريعة."
        },
        {
          name: "إيما ديفيس",
          role: "مديرة التسويق",
          content: "نقوم بإنشاء مئات العناصر المرئية الفريدة شهريًا. غير قواعد اللعبة لحملاتنا."
        }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          question: "كيف يعمل نظام العملات؟",
          answer: "كل عملية إنشاء تكلف عملات بناءً على التعقيد. الصور تكلف 5-20 عملة، النماذج ثلاثية الأبعاد تكلف 50-100 عملة. يمكنك شراء العملات ببطاقة أو عملة مشفرة."
        },
        {
          question: "هل يمكنني استخدام المحتوى المنشأ تجاريًا؟",
          answer: "نعم! تتضمن الخطة الاحترافية رخصة تجارية كاملة لجميع المحتوى المنشأ."
        },
        {
          question: "ما نماذج الذكاء الاصطناعي التي تستخدمونها؟",
          answer: "نستخدم نماذج متقدمة بما في ذلك Stable Diffusion و DALL-E وخوارزميات مخصصة لإنشاء النماذج ثلاثية الأبعاد."
        },
        {
          question: "كم من الوقت يستغرق الإنشاء؟",
          answer: "الصور: 10-30 ثانية. النماذج ثلاثية الأبعاد: 2-5 دقائق حسب التعقيد."
        }
      ]
    },
    footer: {
      description: "منصة ذكاء اصطناعي من الجيل التالي لإنشاء الصور والنماذج ثلاثية الأبعاد.",
      product: "المنتج",
      legal: "قانوني",
      contact: "اتصل بنا",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      cookies: "سياسة ملفات تعريف الارتباط",
      copyright: "© 2024 AI Creator. جميع الحقوق محفوظة."
    }
  },
  ru: {
    nav: {
      features: "Возможности",
      pricing: "Тарифы",
      faq: "FAQ",
      generator: "Генератор",
      signIn: "Войти"
    },
    generator: {
      title: "AI генератор",
      titleAccent: "изображений",
      subtitle: "Создавайте потрясающие изображения из текстовых описаний",
      promptLabel: "Опишите ваше изображение",
      promptPlaceholder: "Футуристический город на закате с летающими машинами...",
      generateBtn: "Сгенерировать",
      generating: "Генерирую...",
      downloadBtn: "Скачать изображение",
      uploadBtn: "Загрузить фото",
      editBtn: "Редактировать",
      cost: "Стоимость: 5 коинов",
      editor: {
        title: "Редактор изображений",
        brightness: "Яркость",
        contrast: "Контраст",
        saturation: "Насыщенность",
        blur: "Размытие",
        grayscale: "Ч/Б фильтр",
        sepia: "Сепия",
        reset: "Сбросить",
        apply: "Применить",
        close: "Закрыть"
      }
    },
    hero: {
      title: "AI Creator",
      subtitle: "AI-генерация картинок и 3D-моделей для 3D-печати",
      createNow: "Создать",
      signIn: "Войти",
      stats: {
        images: "Изображений создано",
        models: "3D-моделей",
        users: "Активных пользователей",
        support: "Поддержка"
      }
    },
    features: {
      title: "Мощные",
      titleAccent: "возможности",
      items: [
        {
          title: "Генерация изображений",
          description: "Создавайте потрясающие изображения из текстовых запросов с помощью продвинутых AI-моделей"
        },
        {
          title: "Генерация 3D-моделей",
          description: "Генерируйте 3D-модели готовые для печати и производства"
        },
        {
          title: "Предпросмотр в браузере",
          description: "Просматривайте и вращайте ваши 3D-модели прямо в браузере"
        }
      ]
    },
    formats: {
      title: "Форматы",
      titleAccent: "экспорта",
      models: "3D-модели",
      images: "Изображения"
    },
    coins: {
      title: "Система",
      titleAccent: "коинов",
      howItWorks: "Как это работает",
      points: [
        "Покупайте коины картой или криптовалютой",
        "Каждая генерация стоит коины в зависимости от сложности",
        "Скачивайте созданный контент в любое время",
        "Неиспользованные коины не сгорают"
      ],
      costTitle: "Стоимость генерации",
      costs: {
        simple: "Простое изображение",
        hd: "HD изображение",
        basic: "Базовая 3D-модель",
        complex: "Сложная 3D-модель"
      }
    },
    pricing: {
      title: "Выберите",
      titleAccent: "тариф",
      mostPopular: "Популярный",
      perMonth: "/месяц",
      coins: "коинов",
      getStarted: "Начать",
      plans: [
        {
          name: "Бесплатный тест",
          features: ["Базовая генерация изображений", "Стандартное качество", "5 генераций в день"]
        },
        {
          name: "Базовый",
          features: ["HD генерация изображений", "Генерация 3D-моделей", "Безлимитные генерации", "Приоритетная поддержка"]
        },
        {
          name: "Профессиональный",
          features: ["4K генерация изображений", "Продвинутые 3D-модели", "Коммерческая лицензия", "Доступ к API", "Поддержка 24/7"]
        }
      ]
    },
    testimonials: {
      title: "Что говорят",
      titleAccent: "пользователи",
      titleEnd: "",
      items: [
        {
          name: "Сара Джонсон",
          role: "Продуктовый дизайнер",
          content: "Эта платформа революционизировала мой рабочий процесс. Создание прототипов теперь в 10 раз быстрее!"
        },
        {
          name: "Майкл Чен",
          role: "3D-художник",
          content: "Качество 3D-моделей исключительное. Идеально для быстрого прототипирования."
        },
        {
          name: "Эмма Дэвис",
          role: "Директор по маркетингу",
          content: "Мы создаём сотни уникальных визуалов ежемесячно. Это меняет правила игры для наших кампаний."
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          question: "Как работает система коинов?",
          answer: "Каждая генерация стоит коины в зависимости от сложности. Изображения стоят 5-20 коинов, 3D-модели 50-100 коинов. Вы можете купить коины картой или криптовалютой."
        },
        {
          question: "Могу ли я использовать созданный контент коммерчески?",
          answer: "Да! Профессиональный тариф включает полную коммерческую лицензию на весь созданный контент."
        },
        {
          question: "Какие AI-модели вы используете?",
          answer: "Мы используем передовые модели, включая Stable Diffusion, DALL-E и кастомные алгоритмы для генерации 3D."
        },
        {
          question: "Сколько времени занимает генерация?",
          answer: "Изображения: 10-30 секунд. 3D-модели: 2-5 минут в зависимости от сложности."
        }
      ]
    },
    footer: {
      description: "AI-платформа нового поколения для генерации изображений и 3D-моделей.",
      product: "Продукт",
      legal: "Правовая информация",
      contact: "Контакты",
      privacy: "Политика конфиденциальности",
      terms: "Пользовательское соглашение",
      cookies: "Политика cookies",
      copyright: "© 2024 AI Creator. Все права защищены."
    }
  }
};