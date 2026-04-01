import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      question: "Hoeveel startkapitaal heb ik nodig voor Amazon FBA in Nederland?",
      answer: "Voor een succesvolle start met Amazon FBA in Nederland raden we minimaal €2.000-€3.000 aan. Dit dekt je eerste productorder, Amazon fees en wat buffer. Je kunt ook kleiner beginnen met €1.000, maar dit beperkt je productkeuzes. De Adspension cursus leert je precies hoe je je budget optimaal inzet."
    },
    {
      question: "Wat zijn de kosten van verkopen op Amazon vanuit Nederland?",
      answer: "Amazon rekent verschillende fees: verkoop commissie (8-15% afhankelijk van categorie), FBA fees voor opslag en verzending (€2-5 per product), en maandelijks Professional Seller account (€35). Deze kosten worden automatisch van je verkopen afgetrokken. In onze cursus leer je exact hoe je deze kosten berekent en winstgevend blijft."
    },
    {
      question: "Moet ik een KVK-nummer hebben om met Amazon FBA te starten in Nederland?",
      answer: "Ja, voor verkopen op Amazon en BOL.com in Nederland heb je een KVK-inschrijving nodig. Dit is eenvoudig te regelen via kvk.nl en kost ongeveer €50. Een eenmanszaak of VOF is voldoende. In de Adspension cursus laten we stap voor stap zien hoe je dit regelt, inclusief BTW-nummer aanvragen."
    },
    {
      question: "Hoe lang duurt het voordat ik winst maak met Amazon FBA?",
      answer: "Gemiddeld maken onze studenten binnen 3-6 maanden hun eerste winst. De eerste 1-2 maanden gebruik je voor product research, sourcing en setup. Maand 3-4 start je met verkopen en vanaf maand 5-6 zie je regelmatige winsten. Met de 1-op-1 begeleiding van Tijn Strikker verkort je dit traject aanzienlijk."
    },
    {
      question: "Is deze Amazon FBA cursus geschikt voor complete beginners?",
      answer: "Absoluut! De Adspension Amazon FBA cursus is speciaal ontworpen voor beginners zonder ervaring. We starten vanaf het absolute begin en leggen alles stap-voor-stap uit met 40+ video tutorials. Je hebt geen voorkennis nodig van e-commerce of Amazon. De persoonlijke 1-op-1 begeleiding zorgt ervoor dat je nooit vastloopt."
    },
    {
      question: "Kan ik Amazon FBA combineren met verkopen op BOL.com?",
      answer: "Ja, en dat is precies wat de Adspension cursus uniek maakt. Je krijgt exclusieve BOL.com bonus modules waarin je leert hoe je ook succesvol wordt op het grootste Nederlandse verkoopplatform. Multi-platform verkopen diversifieert je inkomsten en vergroot je bereik in Nederland en België."
    },
    {
      question: "Wat maakt de Adspension cursus anders dan andere Amazon FBA cursussen?",
      answer: "Adspension is de enige Amazon FBA cursus die zich specifiek richt op de Nederlandse en Belgische markt. Je krijgt 40+ video tutorials, een 70+ pagina eBook, BOL.com training én persoonlijke 1-op-1 begeleiding van Tijn Strikker via telefoon, WhatsApp en email. Geen chatbots of call centers — direct contact met een expert."
    },
    {
      question: "Is er een geld-terug-garantie op de cursus?",
      answer: "Ja, Adspension biedt een volledige 30-dagen geld-terug-garantie. Als je niet 100% tevreden bent met de Amazon FBA cursus, krijg je je volledige investering van €497 terugbetaald. Zonder gedoe, zonder vragen."
    },
    {
      question: "Krijg ik levenslange toegang tot de Amazon FBA cursus?",
      answer: "Ja, eenmaal aangemeld heb je levenslange toegang tot alle cursusmateriaal, inclusief toekomstige updates. Wanneer Amazon zijn beleid wijzigt of wij nieuwe strategieën ontdekken, wordt de cursus bijgewerkt en krijg je automatisch toegang tot de nieuwe content."
    },
    {
      question: "In welke steden in Nederland en België kan ik starten met Amazon FBA?",
      answer: "Amazon FBA is volledig online en locatie-onafhankelijk. Of je nu woont in Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Groningen, Tilburg, Breda, Nijmegen, Almere, Arnhem, Haarlem, Antwerpen, Brussel, Gent of elders — je kunt overal in Nederland en België starten. De cursus en begeleiding zijn volledig digitaal."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="faq" aria-label="Veelgestelde vragen over Amazon FBA cursus">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-adspension-dark">
          Veelgestelde Vragen over Amazon FBA in Nederland
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Antwoorden op de meest gestelde vragen over starten met Amazon FBA vanuit Nederland en België
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-adspension-dark">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}