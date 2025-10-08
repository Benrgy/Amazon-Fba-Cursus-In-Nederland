import { Play, BookOpen, Gift } from "lucide-react";
import courseMockup from "@/assets/course-mockup.webp";

export default function CourseContents() {
  const courseItems = [
    {
      icon: Play,
      title: "40+ A-tot-Z Video Tutorials",
      description: "Compleet videocursus die je van absolute beginner naar Amazon FBA expert brengt. Elke stap wordt uitgelegd met schermopnames en praktische voorbeelden.",
      features: [
        "Product research masterclass",
        "Leverancier sourcing strategieën", 
        "Amazon Seller Central setup",
        "PPC advertising geheimen"
      ]
    },
    {
      icon: BookOpen,
      title: "70+ Pagina's eBook",
      description: "Gedetailleerde gids met alle informatie die je nodig hebt. Perfect als naslagwerk tijdens je Amazon FBA reis en om snel specifieke informatie terug te vinden.",
      features: [
        "Stap-voor-stap checklists",
        "Spreadsheet templates",
        "Leverancier contactgegevens",
        "Juridische informatie voor Nederland"
      ]
    },
    {
      icon: Gift,
      title: "BONUS: Bol.com Modules",
      description: "Exclusieve training voor de Nederlandse markt. Leer hoe je ook succesvol wordt op BOL.com en je omzet diversifieert met de grootste Nederlandse webshop.",
      features: [
        "BOL.com account opzetten",
        "Nederlandse markt strategieën",
        "Fulfilment by BOL uitleg",
        "Multi-platform management"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-adspension-dark">
          Dit is Wat Je Krijgt in Onze Cursus
        </h2>
        
        <div className="space-y-12">
          {courseItems.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
              <div className="flex-1">
                <img 
                  src={courseMockup} 
                  alt={`${item.title} - Amazon FBA cursus in Nederland`}
                  className="w-full rounded-lg shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-adspension-orange rounded-full">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-adspension-dark">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
                
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-adspension-green mr-2 font-bold">✅</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}