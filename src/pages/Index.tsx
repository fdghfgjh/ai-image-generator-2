import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const features = [
    {
      icon: "ImagePlus",
      title: "AI Image Generation",
      description: "Create stunning images from text prompts using advanced AI models",
    },
    {
      icon: "Box",
      title: "3D Model Generation",
      description: "Generate 3D-printable models ready for manufacturing",
    },
    {
      icon: "Eye",
      title: "Browser Preview",
      description: "View and rotate your 3D models directly in the browser",
    },
  ];

  const formats = [
    { type: "3D Models", items: ["STL", "OBJ", "3MF", "STEP"] },
    { type: "Images", items: ["PNG", "JPG", "WEBP"] },
  ];

  const plans = [
    {
      name: "Free Trial",
      price: "0",
      coins: "100",
      features: ["Basic image generation", "Standard quality", "5 generations/day"],
    },
    {
      name: "Basic",
      price: "29",
      coins: "1,000",
      features: ["HD image generation", "3D model generation", "Unlimited generations", "Priority support"],
      popular: true,
    },
    {
      name: "Professional",
      price: "99",
      coins: "5,000",
      features: ["4K image generation", "Advanced 3D models", "Commercial license", "API access", "24/7 support"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      content: "This platform revolutionized my workflow. Creating prototypes is now 10x faster!",
      avatar: "S",
    },
    {
      name: "Michael Chen",
      role: "3D Artist",
      content: "The quality of 3D models is exceptional. Perfect for rapid prototyping.",
      avatar: "M",
    },
    {
      name: "Emma Davis",
      role: "Marketing Director",
      content: "We generate hundreds of unique visuals monthly. Game-changer for our campaigns.",
      avatar: "E",
    },
  ];

  const faqs = [
    {
      question: "How does the coin system work?",
      answer: "Each generation costs coins based on complexity. Images cost 5-20 coins, 3D models cost 50-100 coins. You can purchase coins via card or cryptocurrency.",
    },
    {
      question: "Can I use generated content commercially?",
      answer: "Yes! Professional plan includes full commercial license for all generated content.",
    },
    {
      question: "What AI models do you use?",
      answer: "We use cutting-edge models including Stable Diffusion, DALL-E, and custom 3D generation algorithms.",
    },
    {
      question: "How long does generation take?",
      answer: "Images: 10-30 seconds. 3D models: 2-5 minutes depending on complexity.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold">AI Creator</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Button variant="outline">Sign In</Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI Creator
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            AI-powered Image & 3D Model Generation for 3D Printing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6 gradient-primary hover:opacity-90 transition-opacity">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Create Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Sign In
            </Button>
          </div>
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-glow-pulse"></div>
            <div className="relative bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">Images Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">250K+</div>
                  <div className="text-sm text-muted-foreground">3D Models</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
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
            Powerful <span className="text-primary">Features</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Export <span className="text-secondary">Formats</span>
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
                    <Icon name={format.type === "3D Models" ? "Box" : "Image"} size={24} className="text-primary" />
                    {format.type}
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
            <span className="text-accent">Coin</span> System
          </h2>
          <Card className="bg-card/50 backdrop-blur border-border">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Coins" className="text-accent" size={28} />
                    How it works
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span>Purchase coins via credit card or cryptocurrency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span>Each generation costs coins based on complexity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span>Download generated content anytime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1" size={16} />
                      <span>Unused coins never expire</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Cost per generation</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>Simple Image</span>
                      <Badge>5 coins</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>HD Image</span>
                      <Badge>15 coins</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>Basic 3D Model</span>
                      <Badge>50 coins</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span>Complex 3D Model</span>
                      <Badge>100 coins</Badge>
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
            Choose Your <span className="text-primary">Plan</span>
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
                    <Badge className="gradient-primary px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="text-lg mt-2">
                    <Icon name="Coins" className="inline mr-1" size={16} />
                    {plan.coins} coins
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
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
                    Get Started
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
            What <span className="text-accent">Users</span> Say
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
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-secondary">FAQ</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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
                <span className="text-xl font-bold">AI Creator</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Next-generation AI platform for image and 3D model generation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
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
            © 2024 AI Creator. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}