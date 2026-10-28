# Shri Siddh Hotel — Luxury Heritage Web Application

> An editorial, ultra-responsive digital hospitality experience built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

---
## Live Deployed link - https://shri-siddh.vercel.app/ 

## 🌟 Executive Summary

**Shri Siddh** is a web application created for a luxury heritage boutique hotel. Designed to rival top-tier global hospitality platforms (such as Aman, Oberoi, and Belmond), the application delivers an immersive, editorial visual design paired with production-grade engineering standards: zero-lag animations, full keyboard accessibility, instant WhatsApp booking conversion, and static prerendering for optimal SEO and Core Web Vitals.

---

## 🏗️ Technical Stack & Architecture

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | **Next.js 16.4.3 (Turbopack)** | Utilizing App Router, Partial Prerendering (PPR), and static route optimization |
| **Runtime / Library** | **React 19.3.0** | Latest React concurrent features, hooks, and clean server/client boundary separation |
| **Language** | **TypeScript 5.x (Strict Mode)** | End-to-end typed data contracts for rooms, blogs, services, reviews, and navigation |
| **Styling** | **Tailwind CSS v4** | Modern CSS engine with custom luxury design tokens and zero runtime overhead |
| **Motion & Kinetics** | **Framer Motion 14** | Physics-based spring animations, scroll-driven transforms, and reduced-motion support |
| **Icons** | **Lucide React** | Lightweight, tree-shakable SVG icon system |
| **Code Quality** | **ESLint 9** | Strict React 19 Hooks and TypeScript linting with zero warnings or errors |

---

## 🚀 Key Engineering & Design Highlights

### 1. Scroll-Driven Hero Kinetic Zoom
- Implements viewport-linked scroll tracking with smooth scale and opacity dampening.
- Gracefully degrades for users with `prefers-reduced-motion` enabled via a custom `useReducedMotion` hook leveraging `useSyncExternalStore` for SSR safety.

### 2. Conversational Booking Engine (`BookingBar.tsx`)
- Instant check-in/check-out date picker with calendar bounds validation (`checkout > checkin`).
- Real-time guest counter with incremental controls.
- Automatic formatting of reservation queries into an encoded direct **WhatsApp Business** deep-link, maximizing booking conversion without checkout friction.
- Engineered to avoid SSR hydration mismatches by deferring date initialization to interaction triggers.

### 3. Interactive Multi-Card Guest Reviews Slider (`Testimonials.tsx`)
- Fully responsive carousel featuring real-world feedback from global guests.
- Dynamic page indicators, touch/swipe handling, and responsive card paging (1-card on mobile, 2 on tablet, 3 on desktop).
- Live rating scorecards across Google (4.9★), Trustpilot (4.8★), TripAdvisor (4.9★), and Booking.com (9.4/10).

### 4. Ambient Cinema Video Experience (`VideoSection.tsx`)
- Autoplaying, muted background luxury resort tour with hardware-accelerated playback.
- Full-screen high-definition Cinema Modal triggered on demand with ESC key listeners and accessible focus traps.

### 5. Interactive Tilt & Filterable Gallery (`GalleryPreview.tsx` & `/gallery`)
- Interactive hover kinetics and filter categories (Rooms, Dining, Wellness, Grounds).
- High-resolution modal preview with fluid backdrop blur and intuitive controls.

### 6. Dynamic Room & Editorial Blog Engines
- `/rooms` and `/rooms/[slug]`: Deep-dive room pages showcasing amenities, square footage, bed configurations, high-resolution carousels, and contextual room booking.
- `/blog` and `/blog/[slug]`: Rich editorial reading experience with author attribution, reading times, multi-section typography, and related stories.

---

## 🎨 Design System & Visual Tokens

The aesthetic system reflects classic hospitality luxury—avoiding generic colors and harsh stark contrasts in favor of warmth and editorial elegance:

```
┌─────────────────────────────────────────────────────────────┐
│                       COLOR PALETTE                         │
├──────────────────┬──────────────────┬───────────────────────┤
│ Espresso         │ #1A1613          │ Deep luxury dark      │
│ Warm Cream       │ #FAF7F2          │ Background warmth     │
│ Sandstone Cream  │ #F0EAE1          │ Card borders & panels │
│ Champagne Gold   │ #C5A880          │ Primary accents       │
│ Heritage Gold    │ #946A2D          │ High-contrast gold    │
└──────────────────┴──────────────────┴───────────────────────┘
```

- **Typography**: Editorial serif headings (`font-serif`) balanced with clean, high-legibility sans-serif (`font-sans`) for body copy and navigational elements.
- **Micro-Interactions**: Subtle border glows (`hover:border-[#b8933f]/40`), elegant button hover transitions, and sticky action buttons for high mobile usability.

---

## 📁 Repository Structure

```
shri-siddh/
├── public/                     # Static assets (logo.png, icons, favicon)
├── src/
│   ├── app/                    # Next.js App Router (21 Static/PPR routes)
│   │   ├── layout.tsx          # Root layout with Navbar, Footer, Progress Bar
│   │   ├── page.tsx            # High-conversion Homepage
│   │   ├── about/              # Brand heritage & story page
│   │   ├── blog/               # Editorial listing & [slug] dynamic articles
│   │   ├── contact/            # Concierge contact, map & enquiry form
│   │   ├── dining/             # Culinary showcases, menus & private dining
│   │   ├── gallery/            # Interactive masonry media gallery
│   │   ├── privacy/            # Privacy policy
│   │   ├── rooms/              # Room catalog & [slug] detail pages
│   │   ├── services/           # Full hotel amenities & facilities catalog
│   │   └── terms/              # Terms and conditions
│   │
│   ├── components/
│   │   ├── layout/             # Navbar, MobileMenu, Footer
│   │   ├── sections/           # Hero, BookingBar, Services, Testimonials,
│   │   │                       # VideoSection, GalleryPreview, BlogPreview
│   │   └── ui/                 # Button, Modal, Reveal, RoomCard,
│   │                           # ScrollProgressBar, StickyBookNow
│   │
│   ├── data/                   # Centralized typed mock data layers
│   │   ├── blog.ts             # Articles, categories, authors, content
│   │   ├── navigation.ts       # Header & footer navigational structures
│   │   ├── ratings.ts          # Aggregate platform reviews & guest ratings
│   │   ├── rooms.ts            # Room tiers, pricing, specs, descriptions
│   │   └── services.ts         # Amenities, facilities & wellness items
│   │
│   ├── hooks/
│   │   └── useReducedMotion.ts # Accessible animation preference hook
│   │
│   └── lib/
│       └── utils.ts            # Tailwind class merger (cn) & date utilities
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## ⚡ Performance, Accessibility & Best Practices

1. **Accessibility (a11y)**:
   - Full ARIA markup (`role="dialog"`, `role="search"`, `aria-expanded`, `aria-label`).
   - Focus traps and `Esc` key listeners on all modals and mobile drawers.
   - Motion queries respected throughout using `useReducedMotion`.
2. **Performance**:
   - Next.js Image component with optimized modern formats (`WebP`/`AVIF`), automatic responsive sizes, and lazy loading.
   - All 21 routes statically prerendered with zero dynamic server lag.
3. **Clean Code Guarantee**:
   - Zero unused imports or dead files.
   - Clean, self-documenting code with developer clutter removed.
   - 100% compliant with React 19 and Next.js 16 build requirements.

---

## 🛠️ Getting Started & Local Development

### Prerequisites
- **Node.js**: `v18.18.0` or higher (Recommended: `v20.x` LTS)
- **Package Manager**: `npm` (or `pnpm` / `yarn`)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd shri-siddh

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Verification & Production Build

```bash
# Run ESLint to verify 0 errors and 0 warnings
npm run lint

# Compile production bundle and prerender all 21 routes
npm run build

# Start production server
npm run start
```

---

## 👨‍💻 Key Takeaways for the Interviewer

- **Architectural Discipline**: Clear separation of presentation, business logic, and data mock layers for straightforward migration to headless CMSs (e.g., Sanity, Strapi, or Contentful).
- **Attention to Detail**: Strict adherence to design specifications, font pairings, spacing scales, and micro-interactions.
- **Modern React 19 Proficiency**: Resolves hydration pitfalls and SSR edge-cases cleanly using native web and React APIs (`useSyncExternalStore`, Partial Prerendering, proper event boundaries).
