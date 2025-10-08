import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import courseMockup from "@/assets/course-mockup.webp";

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
            <h3 className="text-3xl md:text-4xl font-bold text-adspension-dark">
              #1 Amazon Cursus van NL
            </h3>
            
            <p className="text-xl text-gray-700">
              Start vandaag nog met je Amazon FBA business en bereik financiële vrijheid. 
              Alles wat je nodig hebt in één complete cursus.
            </p>
            
            <ul className="space-y-3">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-adspension-green flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <div className="mb-4">
                <span className="text-3xl font-bold text-adspension-dark">€497</span>
                <span className="text-gray-500 ml-2">eenmalig</span>
              </div>
              
              <Button 
                variant="hero" 
                size="xl"
                className="w-full md:w-auto"
              >
                PLAN JOUW GRATIS CALL IN!
              </Button>
              
              <p className="text-sm text-gray-500 mt-2">
                🔒 30-dagen geld-terug-garantie • Levenslange toegang
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}