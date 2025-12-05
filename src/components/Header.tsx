import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Language, translations } from "@/components/translations";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const t = translations[lang];

  return (
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
  );
}
