export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

const DOMAIN = 'https://amazonfbacursusnederland.online';

export const seoConfigs: Record<string, SEOConfig> = {
  '/': {
    title: 'Amazon FBA Cursus Nederland | Adspension',
    description: 'De #1 Amazon FBA cursus in Nederland. 40+ video tutorials, eBook, BOL.com training en 1-op-1 begeleiding door Tijn Strikker. Start jouw Amazon bedrijf vanuit Nederland of België.',
    keywords: 'amazon fba cursus, amazon fba cursus nederland, amazon fba training, amazon verkopen nederland, fba cursus, amazon cursus, bol.com cursus, e-commerce cursus nederland, amazon fba beginners, online verkopen, amazon fba starten, amazon seller nederland, private label nederland, amazon fba belgie',
    ogTitle: 'Amazon FBA Cursus Nederland — #1 Training | Adspension',
    ogDescription: 'De meest complete Amazon FBA cursus voor Nederland en België. 40+ video tutorials, eBook, BOL.com training en persoonlijke 1-op-1 begeleiding. Start vandaag nog.',
    twitterTitle: 'Amazon FBA Cursus Nederland | Adspension',
    twitterDescription: 'De #1 Amazon FBA cursus in Nederland. 40+ video tutorials, eBook en 1-op-1 begeleiding door Tijn Strikker.'
  },
  '/contact': {
    title: 'Contact — Amazon FBA Cursus | Adspension',
    description: 'Neem contact op met Adspension voor vragen over onze Amazon FBA cursus. Gratis adviesgesprek boeken met Tijn Strikker.',
    keywords: 'adspension contact, amazon fba vragen, tijn strikker contact, fba advies',
    ogTitle: 'Contact Adspension — Amazon FBA Cursus',
    ogDescription: 'Neem contact op voor vragen over onze Amazon FBA cursus. Gratis adviesgesprek beschikbaar.',
    twitterTitle: 'Contact Adspension — Amazon FBA',
    twitterDescription: 'Vragen over Amazon FBA? Neem contact op voor persoonlijk advies.'
  },
  '/privacy': {
    title: 'Privacy Beleid — Adspension',
    description: 'Privacy beleid van Adspension. Hoe wij jouw gegevens beschermen. GDPR compliant.',
    keywords: 'adspension privacy, gegevensbescherming, GDPR',
    ogTitle: 'Privacy Beleid — Adspension',
    ogDescription: 'Ons privacy beleid. GDPR compliant gegevensbescherming.',
    twitterTitle: 'Privacy Beleid — Adspension',
    twitterDescription: 'Privacy beleid van Adspension.'
  },
  '/algemene-voorwaarden': {
    title: 'Algemene Voorwaarden — Adspension',
    description: 'Algemene voorwaarden van Adspension Amazon FBA cursus.',
    keywords: 'adspension voorwaarden, amazon fba cursus terms',
    ogTitle: 'Algemene Voorwaarden — Adspension',
    ogDescription: 'Algemene voorwaarden voor de Adspension Amazon FBA cursus.',
    twitterTitle: 'Algemene Voorwaarden — Adspension',
    twitterDescription: 'Voorwaarden voor de Adspension cursus.'
  }
};

export const SITE_DOMAIN = DOMAIN;

export const getDefaultSEO = (): SEOConfig => seoConfigs['/'];