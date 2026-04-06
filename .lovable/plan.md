

## Probleem

De site bevat meerdere oneerlijke elementen:

1. **VideoTestimonials** — Gebruikt Unsplash stockfoto's als "cursisten" met neppe namen, resultaten en videoduur. Er zijn geen echte video's.
2. **SocialProof popup** — Toont neppe "heeft zojuist gekocht" meldingen met verzonnen namen. Dit is misleidend.
3. **FounderBio foto** — Het bestand `tijn-strikker.webp` is niet de echte persoon.
4. **TestimonialsSection** — Tekst-reviews met verzonnen namen en cijfers (geen foto's, maar wel nep content).

## Plan

### 1. Verwijder VideoTestimonials component
- Verwijder het hele `VideoTestimonials.tsx` component (neppe stockfoto's als video thumbnails)
- Verwijder de import en het gebruik uit `Index.tsx`

### 2. Verwijder SocialProof popup
- Verwijder `SocialProof.tsx` (neppe "zojuist gekocht" meldingen)
- Verwijder uit `Index.tsx`

### 3. Vervang FounderBio foto door placeholder
- Verwijder de neppe foto-import
- Gebruik een professionele icon/avatar placeholder (Lucide `User` icon in een gestylde cirkel)
- Voeg een opmerking toe: "Foto binnenkort beschikbaar" of laat het subtiel zonder foto

### 4. Maak TestimonialsSection eerlijk
- Herformuleer als "Wat cursisten zeggen" met een disclaimer dat namen geanonimiseerd zijn
- Of vervang door een eerlijke sectie die verwijst naar echte reviews (bijv. link naar Trustpilot/Google Reviews)
- Verwijder de specifieke neppe omzetcijfers, of maak duidelijk dat het voorbeelden/illustraties zijn

### Bestanden die gewijzigd worden
- `src/pages/Index.tsx` — VideoTestimonials en SocialProof verwijderen
- `src/components/VideoTestimonials.tsx` — verwijderen
- `src/components/SocialProof.tsx` — verwijderen  
- `src/components/FounderBio.tsx` — foto vervangen door avatar placeholder
- `src/components/TestimonialsSection.tsx` — eerlijk maken met disclaimer
- `src/components/SEOWrapper.tsx` — neppe Review schema verwijderen als dat er in zit

