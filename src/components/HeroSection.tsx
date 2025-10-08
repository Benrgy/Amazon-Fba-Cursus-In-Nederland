import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-bg.webp";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Amazon FBA Cursus in Nederland – Start jouw succesvolle Amazon-bedrijf
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-gray-200">
          Stap voor stap uitleg hoe jij met Amazon FBA vrijheid kan bereiken en een winstgevend e-commerce bedrijf opbouwt.
        </p>
        
        <p className="text-lg mb-8 text-gray-300">
          Onze #1 Amazon FBA Cursus is dé gids voor beginners in Nederland en België.
        </p>
        
        <Button 
          variant="hero" 
          size="xl"
          className="animate-pulse"
        >
          PLAN JOUW GRATIS CALL IN!
        </Button>
      </div>
    </section>
  );
}