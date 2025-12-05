import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Language, translations, languages } from "@/components/translations";
import { useState } from "react";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const t = translations[lang];
  const [showLanguages, setShowLanguages] = useState(false);
  const currentLanguage = languages.find(l => l.code === lang);

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
          <div className="relative ml-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <Icon name="Languages" size={18} className="mr-1" />
              <span className="mr-1">{currentLanguage?.flag}</span>
              {currentLanguage?.name}
            </Button>
            {showLanguages && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden min-w-[200px] z-50">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setLang(language.code);
                      setShowLanguages(false);
                    }}
                    className={`w-full px-4 py-2 flex items-center gap-2 hover:bg-muted transition-colors text-left ${
                      lang === language.code ? 'bg-primary/10 text-primary' : ''
                    }`}
                  >
                    <span className="text-xl">{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
        <Button variant="outline">{t.nav.signIn}</Button>
      </div>
    </header>
  );
}