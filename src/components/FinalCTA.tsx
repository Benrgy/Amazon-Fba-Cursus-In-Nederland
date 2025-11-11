import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import courseMockup from "@/assets/course-mockup.webp";
import UrgencyTimer from "./UrgencyTimer";

export default function FinalCTA() {
  const includes = [
    "40+ Video Tutorials (A tot Z)",
    "70+ Pagina eBook met alle details", 
    "BONUS: BOL.com Modules",
    "1-op-1 Begeleiding (Telefoon, WhatsApp, Email)",
    "Levenslange toegang + updates",
    "30-dagen geld-terug-garantie",
    "Toegang tot privé community",
    "Templates en spreadsheets"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src={courseMockup} 
              alt="Complete Amazon FBA cursus in Nederland: bundel met video's, eBook en bonus materiaal"
              className="w-full rounded-lg shadow-xl"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block bg-adspension-orange text-white px-4 py-2 rounded-full text-sm font-bold">
              🏆 Meest Complete Amazon FBA Cursus van Nederland
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-adspension-dark">
              Start Vandaag Nog Met Je Amazon Business
            </h3>
            
            <p className="text-xl text-gray-700">
              Alles wat je nodig hebt om succesvol te worden met Amazon FBA in Nederland. 
              Van absolute beginner tot winstgevende ondernemer.
            </p>
            
            <UrgencyTimer />
            
            <ul className="space-y-3">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-adspension-green flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 bg-gradient-to-r from-adspension-light to-white p-6 rounded-lg border-2 border-adspension-orange/20">
              <div className="mb-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-gray-500 line-through">€997</span>
                  <span className="text-4xl font-bold text-adspension-orange">€497</span>
                  <span className="text-sm bg-adspension-green text-white px-3 py-1 rounded-full font-bold">
                    50% KORTING
                  </span>
                </div>
                <span className="text-gray-600 text-sm">Eenmalige investering • Geen abonnementen</span>
              </div>
              
              <Button 
                variant="hero" 
                size="xl"
                className="w-full md:w-auto animate-pulse-glow"
              >
                🚀 PLAN JOUW GRATIS CALL IN!
              </Button>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  🔒 <span className="font-semibold">30-dagen geld-terug-garantie</span> • Zonder gedoe
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  ⚡ <span className="font-semibold">Direct toegang</span> na aanmelding
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  ♾️ <span className="font-semibold">Levenslange toegang</span> + alle updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}