export type Language = 'en' | 'ru';

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
