import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfigs, getDefaultSEO, SITE_DOMAIN } from "@/utils/seoConfig";
import { useEffect } from "react";

export const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const seoConfig = seoConfigs[location.pathname] || getDefaultSEO();

  useEffect(() => {
    document.title = seoConfig.title;
  }, [seoConfig.title]);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE_DOMAIN}/#course`,
    "name": "Amazon FBA Cursus in Nederland",
    "alternateName": ["Amazon FBA Training Nederland", "Amazon FBA Cursus NL", "Amazon FBA Opleiding"],
    "description": "De meest complete Amazon FBA cursus in Nederland en België. 40+ video tutorials, 70+ pagina eBook, BOL.com training en persoonlijke 1-op-1 begeleiding door Tijn Strikker.",
    "url": SITE_DOMAIN,
    "provider": {
      "@type": "Organization",
      "@id": `${SITE_DOMAIN}/#organization`,
      "name": "Adspension",
      "url": SITE_DOMAIN,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "NL",
        "addressRegion": "Nederland"
      },
      "areaServed": [
        { "@type": "Country", "name": "Nederland" },
        { "@type": "Country", "name": "België" }
      ]
    },
    "instructor": {
      "@type": "Person",
      "@id": `${SITE_DOMAIN}/#instructor`,
      "name": "Tijn Strikker",
      "jobTitle": "Amazon FBA Expert & Coach",
      "description": "Master in Digital Business (Universiteit van Amsterdam). Heeft meer dan 300 studenten begeleid naar een winstgevend Amazon FBA bedrijf in Nederland.",
      "alumniOf": { "@type": "CollegeOrUniversity", "name": "Universiteit van Amsterdam" },
      "knowsAbout": ["Amazon FBA", "E-commerce", "Amazon PPC Advertising", "Brand Registry", "BOL.com", "Product Research", "Private Label"],
      "nationality": { "@type": "Country", "name": "Nederland" }
    },
    "courseMode": "online",
    "isAccessibleForFree": false,
    "inLanguage": "nl",
    "educationalLevel": "Beginner",
    "teaches": [
      "Amazon FBA product research en selectie",
      "Leveranciers vinden en onderhandelen in China",
      "Amazon Seller Central account opzetten",
      "Amazon PPC advertising en keyword research",
      "Brand Registry aanvragen",
      "FBA shipment planning en inventory management",
      "BOL.com verkopen en multi-platform strategie",
      "Winstgevende productlistings schrijven"
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT40H",
      "inLanguage": "nl",
      "instructor": { "@id": `${SITE_DOMAIN}/#instructor` }
    },
    "offers": {
      "@type": "Offer",
      "price": "497.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": SITE_DOMAIN,
      "validFrom": "2024-01-01",
      "priceValidUntil": "2026-12-31",
      "seller": { "@id": `${SITE_DOMAIN}/#organization` }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "312",
      "reviewCount": "287"
    },
    "review": [],
    "audience": {
      "@type": "Audience",
      "audienceType": "Beginners en ondernemers",
      "geographicArea": [
        { "@type": "Country", "name": "Nederland" },
        { "@type": "Country", "name": "België" }
      ]
    },
    "about": [
      { "@type": "Thing", "name": "Amazon FBA" },
      { "@type": "Thing", "name": "E-commerce" },
      { "@type": "Thing", "name": "BOL.com" },
      { "@type": "Thing", "name": "Private Label" },
      { "@type": "Thing", "name": "Amazon PPC" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Hoeveel startkapitaal heb ik nodig voor Amazon FBA in Nederland?", "acceptedAnswer": { "@type": "Answer", "text": "Voor een succesvolle start met Amazon FBA in Nederland raden we minimaal €2.000-€3.000 aan. Dit dekt je eerste productorder, Amazon fees en een buffer." } },
      { "@type": "Question", "name": "Wat zijn de kosten van verkopen op Amazon vanuit Nederland?", "acceptedAnswer": { "@type": "Answer", "text": "Amazon rekent verkoop commissie (8-15%), FBA fees (€2-5 per product) en een Professional Seller account (€35/maand)." } },
      { "@type": "Question", "name": "Moet ik een KVK-nummer hebben om met Amazon FBA te starten?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, voor verkopen op Amazon en BOL.com in Nederland heb je een KVK-inschrijving nodig. Dit kost ongeveer €50 via kvk.nl." } },
      { "@type": "Question", "name": "Hoe lang duurt het voordat ik winst maak met Amazon FBA?", "acceptedAnswer": { "@type": "Answer", "text": "Gemiddeld maken studenten binnen 3-6 maanden hun eerste winst met Amazon FBA." } },
      { "@type": "Question", "name": "Is deze Amazon FBA cursus geschikt voor complete beginners?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, de cursus is speciaal ontworpen voor beginners. 40+ video tutorials leggen alles stap-voor-stap uit met 1-op-1 begeleiding." } },
      { "@type": "Question", "name": "Kan ik Amazon FBA combineren met BOL.com?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, de Adspension cursus bevat exclusieve BOL.com bonus modules voor multi-platform verkopen in Nederland en België." } },
      { "@type": "Question", "name": "Wat maakt de Adspension cursus anders?", "acceptedAnswer": { "@type": "Answer", "text": "Adspension is de enige Amazon FBA cursus specifiek voor de Nederlandse en Belgische markt met persoonlijke 1-op-1 begeleiding van Tijn Strikker." } },
      { "@type": "Question", "name": "Is er een geld-terug-garantie?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, 30-dagen volledige geld-terug-garantie. Niet tevreden? Volledige terugbetaling zonder vragen." } },
      { "@type": "Question", "name": "Krijg ik levenslange toegang?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, levenslange toegang inclusief alle toekomstige updates en nieuwe content." } },
      { "@type": "Question", "name": "In welke steden kan ik starten met Amazon FBA?", "acceptedAnswer": { "@type": "Answer", "text": "Amazon FBA is locatie-onafhankelijk. Je kunt starten vanuit Amsterdam, Rotterdam, Den Haag, Utrecht, Eindhoven, Groningen, of elke andere plaats in Nederland en België." } }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_DOMAIN}/#organization`,
    "name": "Adspension",
    "url": SITE_DOMAIN,
    "description": "De meest complete Amazon FBA cursus in Nederland en België met persoonlijke begeleiding.",
    "founder": { "@id": `${SITE_DOMAIN}/#instructor` },
    "areaServed": [
      { "@type": "Country", "name": "Nederland" },
      { "@type": "Country", "name": "België" }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_DOMAIN }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoConfig.title,
    "description": seoConfig.description,
    "url": `${SITE_DOMAIN}${location.pathname}`,
    "inLanguage": "nl",
    "isPartOf": { "@type": "WebSite", "name": "Adspension", "url": SITE_DOMAIN },
    "about": { "@id": `${SITE_DOMAIN}/#course` },
    "mainEntity": { "@id": `${SITE_DOMAIN}/#course` },
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".speakable-content", "[data-speakable]"] },
    "lastReviewed": "2025-06-01"
  };

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="author" content="Tijn Strikker - Adspension" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${SITE_DOMAIN}${location.pathname}`} />
        
        <link rel="alternate" hrefLang="nl-NL" href={`${SITE_DOMAIN}${location.pathname}`} />
        <link rel="alternate" hrefLang="nl-BE" href={`${SITE_DOMAIN}${location.pathname}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_DOMAIN}${location.pathname}`} />
        
        <meta name="geo.region" content="NL" />
        <meta name="geo.placename" content="Nederland" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />
        <meta httpEquiv="content-language" content="nl" />
        <meta name="language" content="Dutch" />
        
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:url" content={`${SITE_DOMAIN}${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:locale:alternate" content="nl_BE" />
        <meta property="og:site_name" content="Adspension" />
        
        <meta name="twitter:title" content={seoConfig.twitterTitle} />
        <meta name="twitter:description" content={seoConfig.twitterDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        
        <script type="application/ld+json">{JSON.stringify(courseSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>
      {children}
    </>
  );
};