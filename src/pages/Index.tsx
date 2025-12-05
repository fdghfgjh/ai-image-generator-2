import { useState } from "react";
import { Language } from "@/components/translations";
import Header from "@/components/Header";
import ImageGenerator from "@/components/ImageGenerator";
import LandingSections from "@/components/LandingSections";

export default function Index() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} setLang={setLang} />
      <LandingSections lang={lang} />
      <ImageGenerator lang={lang} />
    </div>
  );
}
