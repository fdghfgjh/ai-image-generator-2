import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

type Language = 'en' | 'ru';

const translations = {
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

export default function Index() {
  const [lang, setLang] = useState<Language>('en');
  const [prompt, setPrompt] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedImage, setGeneratedImage] = useState<string>('');
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    grayscale: 0,
    sepia: 0
  });
  const t = translations[lang];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      
      const data = await response.json();
      if (data.imageUrl) {
        setGeneratedImage(data.imageUrl);
      }
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setGeneratedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'ai-generated-image.jpg';
    link.click();
  };

  const resetFilters = () => {
    setFilters({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      blur: 0,
      grayscale: 0,
      sepia: 0
    });
  };

  const getFilterStyle = () => {
    return {
      filter: `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturation}%) blur(${filters.blur}px) grayscale(${filters.grayscale}%) sepia(${filters.sepia}%)`
    };
  };
  const features = [
    { icon: "ImagePlus" },
    { icon: "Box" },
    { icon: "Eye" },
  ];

  const formats = [
    { items: ["STL", "OBJ", "3MF", "STEP"] },
    { items: ["PNG", "JPG", "WEBP"] },
  ];

  const plans = [
    { price: "0", coins: "100", popular: false },
    { price: "29", coins: "1,000", popular: true },
    { price: "99", coins: "5,000", popular: false },
  ];

  const testimonials = [
    { avatar: "S" },
    { avatar: "M" },
    { avatar: "E" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold">{t.hero.title}</span>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#generator" className="hover:text-primary transition-colors">{t.nav.generator}</a>
            <a href="#features" className="hover:text-primary transition-colors">{t.nav.features}</a>
            <a href="#pricing" className="hover:text-primary transition-colors">{t.nav.pricing}</a>
            <a href="#faq" className="hover:text-primary transition-colors">{t.nav.faq}</a>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
              className="ml-2"
            >
              <Icon name="Languages" size={18} className="mr-1" />
              {lang === 'en' ? 'RU' : 'EN'}
            </Button>
          </nav>
          <Button variant="outline">{t.nav.signIn}</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6 gradient-primary hover:opacity-90 transition-opacity">
              <Icon name="Sparkles" className="mr-2" size={20} />
              {t.hero.createNow}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              {t.hero.signIn}
            </Button>
          </div>
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-glow-pulse"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stats.images}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">250K+</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stats.models}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">50K+</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stats.users}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">{t.hero.stats.support}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="generator" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t.generator.title} <span className="text-primary">{t.generator.titleAccent}</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">{t.generator.subtitle}</p>
          
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold mb-2 block">{t.generator.promptLabel}</label>
                  <textarea
                    className="w-full h-32 px-4 py-3 bg-background border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder={t.generator.promptPlaceholder}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <Badge variant="outline" className="text-sm">
                    <Icon name="Coins" size={14} className="mr-1" />
                    {t.generator.cost}
                  </Badge>
                  <div className="flex gap-2">
                    <label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        className="hidden"
                      />
                      <Button
                        size="lg"
                        variant="outline"
                        asChild
                      >
                        <span className="cursor-pointer">
                          <Icon name="Upload" size={20} className="mr-2" />
                          {t.generator.uploadBtn}
                        </span>
                      </Button>
                    </label>
                    <Button
                      size="lg"
                      onClick={handleGenerate}
                      disabled={isGenerating || !prompt.trim()}
                      className="gradient-primary"
                    >
                      {isGenerating ? (
                        <>
                          <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                          {t.generator.generating}
                        </>
                      ) : (
                        <>
                          <Icon name="Sparkles" size={20} className="mr-2" />
                          {t.generator.generateBtn}
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {generatedImage && (
                  <div className="mt-8 animate-fade-in">
                    <div className="relative rounded-xl overflow-hidden border border-border">
                      <img
                        src={generatedImage}
                        alt="Generated"
                        className="w-full h-auto"
                        style={getFilterStyle()}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center p-4 gap-2">
                        <Button
                          variant="secondary"
                          onClick={() => setShowEditor(!showEditor)}
                        >
                          <Icon name="Pencil" size={18} className="mr-2" />
                          {t.generator.editBtn}
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={handleDownload}
                        >
                          <Icon name="Download" size={18} className="mr-2" />
                          {t.generator.downloadBtn}
                        </Button>
                      </div>
                    </div>

                    {showEditor && (
                      <Card className="mt-4 bg-card/80 backdrop-blur border-border animate-fade-in">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center justify-between">
                            <span>
                              <Icon name="Palette" size={20} className="inline mr-2" />
                              {t.generator.editor.title}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setShowEditor(false)}
                            >
                              <Icon name="X" size={18} />
                            </Button>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              {t.generator.editor.brightness}: {filters.brightness}%
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="200"
                              value={filters.brightness}
                              onChange={(e) => setFilters({ ...filters, brightness: Number(e.target.value) })}
                              className="w-full"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              {t.generator.editor.contrast}: {filters.contrast}%
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="200"
                              value={filters.contrast}
                              onChange={(e) => setFilters({ ...filters, contrast: Number(e.target.value) })}
                              className="w-full"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              {t.generator.editor.saturation}: {filters.saturation}%
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="200"
                              value={filters.saturation}
                              onChange={(e) => setFilters({ ...filters, saturation: Number(e.target.value) })}
                              className="w-full"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium mb-2 block">
                              {t.generator.editor.blur}: {filters.blur}px
                            </label>
                            <input
                              type="range"
                              min="0"
                              max="10"
                              value={filters.blur}
                              onChange={(e) => setFilters({ ...filters, blur: Number(e.target.value) })}
                              className="w-full"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">
                                {t.generator.editor.grayscale}: {filters.grayscale}%
                              </label>
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={filters.grayscale}
                                onChange={(e) => setFilters({ ...filters, grayscale: Number(e.target.value) })}
                                className="w-full"
                              />
                            </div>

                            <div>
                              <label className="text-sm font-medium mb-2 block">
                                {t.generator.editor.sepia}: {filters.sepia}%
                              </label>
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={filters.sepia}
                                onChange={(e) => setFilters({ ...filters, sepia: Number(e.target.value) })}
                                className="w-full"
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 pt-4">
                            <Button
                              variant="outline"
                              onClick={resetFilters}
                              className="flex-1"
                            >
                              <Icon name="RotateCcw" size={18} className="mr-2" />
                              {t.generator.editor.reset}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="mb-12 relative h-80 rounded-2xl overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/projects/ecad6187-4d56-41fa-8803-95023968bdc2/files/a568860e-37c6-42af-a768-2b7ac1ca1f23.jpg" 
              alt="AI Generated Art" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t.features.title} <span className="text-primary">{t.features.titleAccent}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{t.features.items[index].title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{t.features.items[index].description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {t.formats.title} <span className="text-secondary">{t.formats.titleAccent}</span>
          </h2>
          <div className="mb-12 flex justify-center gap-4">
            <img 
              src="https://cdn.poehali.dev/projects/ecad6187-4d56-41fa-8803-95023968bdc2/files/055aee43-cf1f-421f-98b8-33d82ec5997d.jpg" 
              alt="3D Printer" 
              className="w-64 h-64 object-cover rounded-xl border border-border"
            />
            <img 
              src="https://cdn.poehali.dev/projects/ecad6187-4d56-41fa-8803-95023968bdc2/files/f9b617f2-e8f5-4fd4-80be-27e7a0dc2811.jpg" 
              alt="3D Wireframe" 
              className="w-64 h-64 object-cover rounded-xl border border-border hidden md:block"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formats.map((format, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name={index === 0 ? "Box" : "Image"} size={24} className="text-primary" />
                    {index === 0 ? t.formats.models : t.formats.images}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {format.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm px-4 py-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-accent">{t.coins.title}</span> {t.coins.titleAccent}
          </h2>
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Coins" className="text-accent" size={28} />
                    {t.coins.howItWorks}
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {t.coins.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t.coins.costTitle}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>{t.coins.costs.simple}</span>
                      <Badge>5 {t.pricing.coins}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>{t.coins.costs.hd}</span>
                      <Badge>15 {t.pricing.coins}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>{t.coins.costs.basic}</span>
                      <Badge>50 {t.pricing.coins}</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>{t.coins.costs.complex}</span>
                      <Badge>100 {t.pricing.coins}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t.pricing.title} <span className="text-primary">{t.pricing.titleAccent}</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`bg-card/50 backdrop-blur border-border relative ${
                  plan.popular ? "border-primary/50 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="gradient-primary px-4 py-1">{t.pricing.mostPopular}</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{t.pricing.plans[index].name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">{t.pricing.perMonth}</span>
                  </div>
                  <CardDescription className="text-lg mt-2">
                    <Icon name="Coins" className="inline mr-1" size={16} />
                    {plan.coins} {t.pricing.coins}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {t.pricing.plans[index].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${plan.popular ? "gradient-primary" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {t.pricing.getStarted}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t.testimonials.title} <span className="text-accent">{t.testimonials.titleAccent}</span> {t.testimonials.titleEnd}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{t.testimonials.items[index].name}</div>
                      <div className="text-sm text-muted-foreground">{t.testimonials.items[index].role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{t.testimonials.items[index].content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-secondary">{t.faq.title}</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
                <span className="text-xl font-bold">{t.hero.title}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.footer.product}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">{t.nav.features}</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">{t.nav.pricing}</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">{t.nav.faq}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.footer.legal}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t.footer.cookies}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  support@aicreator.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Twitter" size={16} />
                  @aicreator
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Github" size={16} />
                  github.com/aicreator
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}