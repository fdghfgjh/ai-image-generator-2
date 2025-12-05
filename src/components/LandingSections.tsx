import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Language, translations } from "@/components/translations";

interface LandingSectionsProps {
  lang: Language;
}

export default function LandingSections({ lang }: LandingSectionsProps) {
  const t = translations[lang];

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
    <>
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
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </>
  );
}
