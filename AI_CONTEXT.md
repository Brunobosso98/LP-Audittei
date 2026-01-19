# AI Context - Audittei Fiscal

## Directory Structure Map
- src/
  - routes/
    - home.tsx (landing page)
    - auditor-fiscal.tsx (Auditor Fiscal route)
    - auditor-nfse.tsx (Auditor NFSe route)
  - components/
    - advanced-header.tsx
    - advanced-hero.tsx
    - process-carousel.tsx
    - comparison-visualization.tsx
    - ai-showcase.tsx
    - testimonials-carousel.tsx
    - advanced-contact.tsx
    - footer.tsx
    - particle-background.tsx
    - ui/ (shared UI primitives)
  - App.tsx (routing)
  - index.css (design tokens)
- public/
  - auditor-fiscal/ (route screenshots)

## Business Logic & Feature Map
- Landing Page (home.tsx)
  - Hero, process, comparison, AI, testimonials, contact, footer.
  - Design system uses neutral backgrounds with a single accent color.
- Auditor Fiscal (auditor-fiscal.tsx)
  - Interactive Feature Showcase with clickable modules and preview image panel.
  - Images stored under public/auditor-fiscal.
