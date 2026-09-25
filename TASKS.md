# COG Website — Task Tracker

Project: **Cochin Oncology Group (COG)** website
Stack: Next.js (App Router) · TypeScript · Tailwind CSS v4
Approach: **Phase 1 = UI only (dummy data)** → **Phase 2 = backend & features**

Legend: ✅ Done · 🔜 Pending · 🔄 Partial

---

## Phase 1 — UI (Dummy Data)  →  ✅ COMPLETE

### Foundation
- [x] ✅ Scaffold Next.js + TypeScript + Tailwind v4
- [x] ✅ Brand theme tokens (Blue `#31C5F0`, Green `#B2D055`, Grey `#4C4D50`, navy) in `globals.css`
- [x] ✅ Poppins font, global styles, reusable button/card/section utilities
- [x] ✅ Folder structure (`app` / `components` / `data` / `lib`)
- [x] ✅ SEO metadata (title template, description, keywords, OpenGraph)
- [x] ✅ Subtle animations (scroll-reveal) — works without JS, respects reduced-motion

### Shared components
- [x] ✅ Header — top contact bar, logo, full nav, search toggle, Member Login, mobile menu
- [x] ✅ Footer — newsletter strip, quick links, resources, contact, socials
- [x] ✅ Logo (typographic COG mark, light/dark variants)
- [x] ✅ Reusable UI: `PageHero`, `SectionHeading`, `Icon` (28 SVGs), `Avatar`, `PhotoFrame`, `Accordion`, `ScrollReveal`
- [x] ✅ Dummy data modules (`src/data/index.ts`) — typed, single Phase-2 swap point

### Pages (12 routes — all build & render, HTTP 200)
- [x] ✅ `/` Home — hero, stats bar, President/Secretary messages, upcoming events, Why Join CTA, latest news
- [x] ✅ `/about` About Us — history, vision, mission, values, objectives
- [x] ✅ `/committee` Executive Committee — office bearers, members, advisory board
- [x] ✅ `/membership` — benefits, categories & fees, Google Form CTA, certificate preview, FAQ accordion
- [x] ✅ `/scientific-activities` — meetings, tumour boards, journal clubs, CME, workshops, collaborations
- [x] ✅ `/events` Conferences & Events — featured banner, upcoming, past archives, downloadable brochures
- [x] ✅ `/research` Research & Publications — focus areas, publications, collaborations, download centre
- [x] ✅ `/gallery` — filterable photo grid (category + year), video highlights
- [x] ✅ `/news` News & Announcements — featured, category filter, sidebar, newsletter box
- [x] ✅ `/contact` — details, map placeholder, contact form, socials
- [x] ✅ `/login` Member Login portal (UI)
- [x] ✅ `/admin` Admin Dashboard (UI) — sidebar, stat cards, events, members, activities

### Verification
- [x] ✅ Production build passes (TypeScript + ESLint clean)
- [x] ✅ All 12 routes return HTTP 200, statically prerendered
- [x] ✅ Responsive (desktop / tablet / mobile nav collapse)
- [x] ✅ Visual QA via browser screenshots; fixed stats-bar clipping + hydration warning
- [x] ✅ README + this task tracker

---

## Phase 2 — Backend & Features  →  🔜 PENDING

> All UI is wired to `src/data/index.ts`; Phase 2 mostly swaps these for real data sources.

### Data & CMS
- [ ] 🔜 Choose backend/CMS (headless CMS vs. custom API + database) — **decision needed**
- [ ] 🔜 Replace dummy data exports with API/CMS calls (shapes already defined)
- [ ] 🔜 Admin CMS: create/edit events, news, gallery, publications, committee (non-technical friendly)

### Membership
- [ ] 🔜 Embed real Google Form (or native form) — **inline vs. new tab decision needed**
- [ ] 🔜 Store & review membership applications
- [ ] 🔜 Generate & email membership certificates

### Auth & member portal
- [ ] 🔜 Real member login (replace UI-only `/login`)
- [ ] 🔜 Protected member area; role-based admin access
- [ ] 🔜 Member profile & downloads

### Forms & communication
- [ ] 🔜 Contact form submission + email delivery
- [ ] 🔜 Newsletter subscription + subscriber list
- [ ] 🔜 Event registration handling

### Integrations & polish
- [ ] 🔜 Site-wide search backend (search UI exists in header)
- [ ] 🔜 Embedded Google Map on Contact page (placeholder in place)
- [ ] 🔜 Real photography → replace `Avatar` / `PhotoFrame` placeholders with `next/image`
- [ ] 🔜 Downloadable files (brochures, guidelines, newsletters)
- [ ] 🔜 Social media feed integration
- [ ] 🔜 Analytics + secure hosting/deployment

---

_Last updated: 2026-08-01 · Phase 1 complete, Phase 2 not started._
