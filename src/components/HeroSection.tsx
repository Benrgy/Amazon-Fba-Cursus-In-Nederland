import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-bg.webp";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white" aria-label="Amazon FBA Cursus Nederland">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
        role="img"
        aria-label="Amazon FBA cursus achtergrond"
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6" data-speakable="true">
          Amazon FBA Cursus in Nederland
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-gray-200 speakable-content" data-speakable="true">
          Dé complete Amazon FBA training voor Nederland en België. 
          Leer stap voor stap een winstgevend e-commerce bedrijf opbouwen met persoonlijke begeleiding.
        </p>
        
        <p className="text-lg mb-8 text-gray-300">
          40+ video tutorials • 70+ pagina eBook • BOL.com training • 1-op-1 coaching door Tijn Strikker
        </p>
        
        <Button 
          variant="hero" 
          size="xl"
          className="animate-pulse"
        >
          PLAN JOUW GRATIS CALL IN!
        </Button>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          <span>✓ 300+ studenten</span>
          <span>✓ 30-dagen garantie</span>
          <span>✓ Levenslange toegang</span>
          <span>✓ 4.9/5 beoordeling</span>
        </div>
      </div>
    </section>
  );
}