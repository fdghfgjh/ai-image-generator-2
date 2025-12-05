import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Language, translations } from "@/components/translations";

interface ImageGeneratorProps {
  lang: Language;
}

export default function ImageGenerator({ lang }: ImageGeneratorProps) {
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

  return (
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
  );
}
