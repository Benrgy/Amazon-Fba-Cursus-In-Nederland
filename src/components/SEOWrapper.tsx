import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfigs, getDefaultSEO } from "@/utils/seoConfig";
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
    "@id": "https://adspension.nl/#course",
    "name": "Amazon FBA Cursus in Nederland",
    "alternateName": ["Amazon FBA Training Nederland", "Amazon FBA Cursus NL", "Amazon FBA Opleiding"],
    "description": "De meest complete Amazon FBA cursus in Nederland en België. 40+ video tutorials, 70+ pagina eBook, BOL.com training en persoonlijke 1-op-1 begeleiding door Tijn Strikker. Van beginner tot winstgevende Amazon verkoper.",
    "url": "https://adspension.nl",
    "image": "https://adspension.nl/og-image.jpg",
    "provider": {
      "@type": "Organization",
      "@id": "https://adspension.nl/#organization",
      "name": "Adspension",
      "url": "https://adspension.nl",
      "logo": "https://adspension.nl/favicon.ico",
      "sameAs": [],
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
      "@id": "https://adspension.nl/#instructor",
      "name": "Tijn Strikker",
      "jobTitle": "Amazon FBA Expert & Coach",
      "description": "Master in Digital Business (Universiteit van Amsterdam). Heeft meer dan 300 studenten begeleid naar een winstgevend Amazon FBA bedrijf in Nederland.",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Universiteit van Amsterdam"
      },
      "knowsAbout": ["Amazon FBA", "E-commerce", "Amazon PPC Advertising", "Brand Registry", "BOL.com", "Product Research", "Private Label"],
      "nationality": { "@type": "Country", "name": "Nederland" }
    },
    "courseMode": "online",
    "isAccessibleForFree": false,
    "inLanguage": "nl",
    "availableLanguage": "nl",
    "numberOfCredits": "40",
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
      "instructor": { "@id": "https://adspension.nl/#instructor" }
    },
    "offers": {
      "@type": "Offer",
      "price": "497.00",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": "https://adspension.nl",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2026-12-31",
      "seller": { "@id": "https://adspension.nl/#organization" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "312",
      "reviewCount": "287"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Jan D." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Dankzij Tijn's cursus en persoonlijke begeleiding maakte ik €5.000 omzet in mijn tweede maand. De stap-voor-stap aanpak werkt echt!",
        "datePublished": "2024-09-15"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Lisa M." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Binnen 8 maanden ging ik van nul naar €12.000 winst per maand. Tijn's begeleiding was onmisbaar.",
        "datePublished": "2024-11-20"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Marco V." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Na het volgen van de cursus heb ik mijn baan kunnen opzeggen. Nu verdien ik €3.200 per maand passief met Amazon FBA.",
        "datePublished": "2025-01-10"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Beginners en ondernemers",
      "geographicArea": [
        { "@type": "Country", "name": "Nederland" },
        { "@type": "Country", "name": "België" }
      ]
    },
    "about": [
      { "@type": "Thing", "name": "Amazon FBA", "description": "Fulfillment by Amazon - een service waarbij Amazon opslag, verpakking en verzending regelt" },
      { "@type": "Thing", "name": "E-commerce", "description": "Online handel en verkoop via digitale platformen" },
      { "@type": "Thing", "name": "BOL.com", "description": "Het grootste online verkoopplatform van Nederland en België" },
      { "@type": "Thing", "name": "Private Label", "description": "Eigen merk producten verkopen via Amazon" },
      { "@type": "Thing", "name": "Amazon PPC", "description": "Pay-per-click advertising op het Amazon platform" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Hoeveel startkapitaal heb ik nodig voor Amazon FBA in Nederland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor een succesvolle start met Amazon FBA in Nederland raden we minimaal €2.000-€3.000 aan. Dit dekt je eerste productorder, Amazon fees en een buffer. Je kunt ook kleiner beginnen met €1.000, maar dit beperkt je productkeuzes."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten van verkopen op Amazon vanuit Nederland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Amazon rekent verkoop commissie (8-15% afhankelijk van categorie), FBA fees voor opslag en verzending (€2-5 per product), en een maandelijks Professional Seller account (€35). Deze kosten worden automatisch van je verkopen afgetrokken."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik een KVK-nummer hebben om met Amazon FBA te starten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, voor verkopen op Amazon en BOL.com in Nederland heb je een KVK-inschrijving nodig. Dit is eenvoudig te regelen via kvk.nl en kost ongeveer €50."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe lang duurt het voordat ik winst maak met Amazon FBA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gemiddeld maken studenten binnen 3-6 maanden hun eerste winst. De eerste 1-2 maanden worden gebruikt voor product research, sourcing en setup. Vanaf maand 3-4 start je met verkopen en vanaf maand 5-6 zie je regelmatige winsten."
        }
      },
      {
        "@type": "Question",
        "name": "Is deze Amazon FBA cursus geschikt voor beginners zonder ervaring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, deze cursus is speciaal ontworpen voor beginners. Alles wordt stap-voor-stap uitgelegd zonder voorkennis van e-commerce of Amazon. De 1-op-1 begeleiding door Tijn Strikker zorgt ervoor dat je nooit vastloopt."
        }
      },
      {
        "@type": "Question",
        "name": "Wat maakt de Adspension cursus anders dan andere Amazon FBA cursussen in Nederland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adspension is de enige Amazon FBA cursus die zich specifiek richt op de Nederlandse en Belgische markt én BOL.com training geeft. Daarnaast krijg je persoonlijke 1-op-1 begeleiding van Tijn Strikker via telefoon, WhatsApp en email."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik Amazon FBA combineren met BOL.com verkopen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, in de Adspension cursus leer je hoe je zowel Amazon FBA als BOL.com kunt gebruiken om je omzet te diversifiëren. De bonus BOL.com modules behandelen alles van account opzetten tot Fulfilment by BOL."
        }
      },
      {
        "@type": "Question",
        "name": "Is er een geld-terug-garantie op de Amazon FBA cursus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Adspension biedt een 30-dagen geld-terug-garantie. Als je niet 100% tevreden bent met de cursus, krijg je je geld volledig terugbetaald."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://adspension.nl/#organization",
    "name": "Adspension",
    "alternateName": "Adspension Amazon FBA Training",
    "url": "https://adspension.nl",
    "description": "Adspension biedt de meest complete Amazon FBA cursus aan in Nederland en België, met persoonlijke begeleiding door Tijn Strikker.",
    "foundingDate": "2022",
    "founder": { "@id": "https://adspension.nl/#instructor" },
    "areaServed": [
      { "@type": "Country", "name": "Nederland" },
      { "@type": "Country", "name": "België" }
    ],
    "knowsAbout": ["Amazon FBA", "E-commerce onderwijs", "BOL.com", "Online verkopen"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Amazon FBA Cursussen",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Amazon FBA Cursus in Nederland",
          "url": "https://adspension.nl"
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://adspension.nl"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoConfig.title,
    "description": seoConfig.description,
    "url": `https://adspension.nl${location.pathname}`,
    "inLanguage": "nl",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Adspension",
      "url": "https://adspension.nl"
    },
    "about": { "@id": "https://adspension.nl/#course" },
    "mainEntity": { "@id": "https://adspension.nl/#course" },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".speakable-content", "[data-speakable]"]
    },
    "significantLink": "https://adspension.nl",
    "lastReviewed": "2025-06-01",
    "audience": {
      "@type": "Audience",
      "audienceType": "Nederlandse en Belgische ondernemers die willen starten met Amazon FBA"
    }
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
        <link rel="canonical" href={`https://adspension.nl${location.pathname}`} />
        
        {/* Hreflang for NL/BE targeting */}
        <link rel="alternate" hrefLang="nl-NL" href={`https://adspension.nl${location.pathname}`} />
        <link rel="alternate" hrefLang="nl-BE" href={`https://adspension.nl${location.pathname}`} />
        <link rel="alternate" hrefLang="nl" href={`https://adspension.nl${location.pathname}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://adspension.nl${location.pathname}`} />
        
        {/* Geo targeting */}
        <meta name="geo.region" content="NL" />
        <meta name="geo.placename" content="Nederland" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />
        <meta httpEquiv="content-language" content="nl" />
        <meta name="language" content="Dutch" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:url" content={`https://adspension.nl${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:locale:alternate" content="nl_BE" />
        <meta property="og:site_name" content="Adspension" />
        
        {/* Twitter */}
        <meta name="twitter:title" content={seoConfig.twitterTitle} />
        <meta name="twitter:description" content={seoConfig.twitterDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Structured Data */}
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