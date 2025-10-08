import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { seoConfigs, getDefaultSEO } from "@/utils/seoConfig";
import { useEffect } from "react";

export const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const seoConfig = seoConfigs[location.pathname] || getDefaultSEO();

  // Update document title immediately for better UX
  useEffect(() => {
    document.title = seoConfig.title;
  }, [seoConfig.title]);

  return (
    <>
      <Helmet>
        <title>{seoConfig.title}</title>
        <meta name="description" content={seoConfig.description} />
        <meta name="keywords" content={seoConfig.keywords} />
        <meta name="author" content="Tijn Strikker - Adspension" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://adspension.nl${location.pathname}`} />
        
        <meta name="geo.region" content="NL" />
        <meta name="geo.placename" content="Nederland" />
        <meta httpEquiv="content-language" content="nl-NL" />
        <meta name="language" content="Dutch" />
        
        <meta property="og:title" content={seoConfig.ogTitle} />
        <meta property="og:description" content={seoConfig.ogDescription} />
        <meta property="og:url" content={`https://adspension.nl${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta property="og:site_name" content="Adspension" />
        
        <meta name="twitter:title" content={seoConfig.twitterTitle} />
        <meta name="twitter:description" content={seoConfig.twitterDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Amazon FBA Cursus in Nederland | Adspension",
            "description": "Complete Amazon FBA cursus voor Nederland en België met 40+ video's, eBook en persoonlijke begeleiding.",
            "provider": {
              "@type": "Organization",
              "name": "Adspension",
              "url": "https://adspension.nl"
            },
            "instructor": {
              "@type": "Person",
              "name": "Tijn Strikker",
              "jobTitle": "Amazon FBA Expert"
            },
            "courseMode": "online",
            "inLanguage": "nl-NL",
            "areaServed": "NL",
            "spatialCoverage": "Netherlands",
            "offers": {
              "@type": "Offer",
              "category": "Online Course",
              "price": "497.00",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "url": "https://adspension.nl"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Beginners en ondernemers in Nederland"
            }
          })}
        </script>
      </Helmet>
      {children}
    </>
  );
};