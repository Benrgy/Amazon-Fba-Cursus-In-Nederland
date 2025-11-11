import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800 && !isClosed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed]);

  if (isClosed) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-adspension-orange to-adspension-orange/90 text-white shadow-2xl transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-bold text-lg">
            Klaar om te starten met Amazon FBA?
          </p>
          <p className="text-sm text-white/90">
            Plan nu je gratis adviesgesprek - Beperkte plekken beschikbaar
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:block text-right">
            <p className="text-2xl font-bold">€497</p>
            <p className="text-xs text-white/80">Eenmalige investering</p>
          </div>
          
          <Button 
            variant="secondary"
            size="lg"
            className="bg-white text-adspension-orange hover:bg-white/90 font-bold animate-pulse-glow"
          >
            PLAN GRATIS CALL
          </Button>
        </div>
        
        <button 
          onClick={() => setIsClosed(true)}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Sluit sticky bar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
