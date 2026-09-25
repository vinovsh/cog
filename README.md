# Cochin Oncology Group (COG) — Website

A modern, responsive website for **Cochin Oncology Group (COG)**, a multidisciplinary
academic oncology society based in Kochi, Kerala. Built with **Next.js (App Router) +
TypeScript + Tailwind CSS v4**.

Brand palette: **Blue `#31C5F0` · Green `#B2D055` · Dark Grey `#4C4D50`** on white with
subtle medical-themed motifs.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-check + lint)
npm run start    # serve the production build
```

---

## Delivery in two phases

### ✅ Phase 1 — UI only (this delivery)

All pages built with **dummy data** and reusable components. No backend.

| Route | Page |
|-------|------|
| `/` | Home — hero, stats, leadership messages, upcoming events, why-join CTA, latest news |
| `/about` | About Us — history, vision, mission, values, objectives |
| `/committee` | Executive Committee — office bearers, members, advisory board |
| `/membership` | Membership — benefits, categories & fees, Google Form CTA, certificate preview, FAQ |
| `/scientific-activities` | Meetings, tumour boards, journal clubs, CME, workshops |
| `/events` | Conferences & Events — featured banner, upcoming, past archives, brochures |
| `/research` | Research & Publications — focus areas, publications, collaborations, download centre |
| `/gallery` | Gallery — filterable photo grid + video highlights |
| `/news` | News & Announcements — featured, category filter, sidebar |
| `/contact` | Contact Us — details, map placeholder, contact form |
| `/login` | Member login portal (UI) |
| `/admin` | Admin dashboard (UI) — own shell, no public header/footer |

### 🔜 Phase 2 — Backend & features (next)

- Replace `src/data/index.ts` exports with API/CMS calls (shapes are already defined).
- Membership: embed the real Google Form; wire application storage & certificate generation.
- Auth: real member login + protected member portal.
- Admin CMS: create/update events, news, gallery, publications (content management for non-technical admins).
- Contact & newsletter: form submission, email delivery, subscriber list.
- Search: real site-wide search backend.
- Integrations: embedded Google Map, downloadable files, social feeds.
- Real photography replaces the gradient `PhotoFrame` / `Avatar` placeholders.

---

## Project structure

```
src/
  app/                    # one folder per route (App Router)
    layout.tsx            # root layout: fonts, SEO metadata, header/footer, scroll-reveal
    globals.css           # Tailwind v4 @theme brand tokens, buttons, utilities, animations
    page.tsx              # Home
    <route>/page.tsx      # each page
  components/
    layout/               # Header, Footer, Logo, Chrome (header/footer gate)
    ui/                   # Icon, PageHero, SectionHeading, Avatar, PhotoFrame,
                          # Accordion, ScrollReveal — reusable across pages
  data/index.ts           # all dummy content (typed) — Phase 2 swap point
  lib/site.ts             # site config: nav items, contact, socials
```

## Notes for maintainers

- **Theming** is centralised in `globals.css` via Tailwind v4 `@theme` tokens
  (`brand-blue`, `brand-green`, `brand-navy`, …). Change colours there.
- **Placeholders**: `Avatar` (initials) and `PhotoFrame` (gradient) stand in for real
  images so the app runs with zero external assets. Swap for `next/image` in Phase 2.
- **Animations** are progressive enhancement: content is visible without JS (SEO /
  accessibility friendly); `ScrollReveal` adds subtle fade-ups when JS is available,
  and respects `prefers-reduced-motion`.
- The reference brief and images live in `ref/` (excluded from the app build).
