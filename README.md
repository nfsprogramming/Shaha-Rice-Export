# Shaha Rice Exports 🌾

[![Live Demo](https://img.shields.io/badge/Demo-shaha--rice--exports.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://shaha-rice-exports.vercel.app)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

A web platform and digital catalog for **Shaha Rice Exports** — an international exporter of Indian Basmati and Non-Basmati rice. Built with React 19, TypeScript, Vite, and Tailwind CSS v4, featuring grain specification modals, FOB export pricing schedules, RFQ quotation workflows, and farm-to-port quality journey documentation.

🌐 **Live Website**: [https://shaha-rice-exports.vercel.app](https://shaha-rice-exports.vercel.app)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Rice Varieties & Portfolio](#rice-varieties--portfolio)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
- [Available Scripts](#available-scripts)
- [Production Build & Deployment](#production-build--deployment)
  - [Building for Production](#building-for-production)
  - [Previewing Production Build](#previewing-production-build)
  - [Vite & Vercel Configuration](#vite--vercel-configuration)
- [Quality Assurance & Export Standards](#quality-assurance--export-standards)
- [Limitations](#limitations)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

Shaha Rice Exports presents agricultural export offerings to distributors, wholesalers, and food brands across international markets (GCC, Europe, North America, Southeast Asia, and Africa).

The application provides:
- **Product Specifications**: Technical metrics for 28 rice varieties including Average Grain Length (AGL), moisture percentage, broken grain limit, purity, and milling standards.
- **Market Pricing**: Indicative FOB Mundra commodity price schedules across rice varieties and processing methods.
- **RFQ Workflow**: An interactive Request for Quote configuration tool specifying grain forms, volume requirements, packaging types, and destination ports.
- **Process Traceability**: Visual supply chain breakdown from paddy sourcing to container dispatch.

---

## 🚀 Key Features

- **Grain Variety Catalog**: Filterable catalog covering Basmati (1121, 1509, 1401, Traditional, Pusa, Sugandha, Sharbati) and Non-Basmati (PR 11/14, Sona Masoori, IR 64, Swarna, Broken).
- **Grain Specifications Overlay**: Detail modal presenting lab-grade metrics, cooking characteristics, and export packaging specifications per variety.
- **FOB Pricing Index**: Real-time indicative FOB price schedules ($/Metric Ton) categorized by processing method (Raw, Steam, White Sella, Golden Sella).
- **Interactive RFQ Inquiry**: Trade quotation form enabling volume configuration, packaging selection (PP bags, BOPP, non-woven, jute), and destination port entry.
- **Quality Journey Tracker**: Step-by-step supply chain inspection covering procurement, Buhler Sortex milling, laboratory QC, and logistics.
- **Industry Knowledge Hub**: 21 market analysis reports, storage guides, culinary applications, and tariff advisories.
- **Performance & Accessibility**: Route-level code-splitting with `React.lazy` and `Suspense`, smooth scroll reset on navigation, and responsive layouts across mobile and desktop.

---

## 🌾 Rice Varieties & Portfolio

### 1. Basmati Varieties (Extra Long & Long Grain)

| Series | Available Processing Forms | Avg. Grain Length (AGL) | Cooking Character |
| :--- | :--- | :--- | :--- |
| **1121 Series** | Raw, Steam, White Sella, Golden Sella | ~8.35 mm | High elongation ratio, slender profile, separate grains |
| **1509 Series** | Steam, White Sella, Golden Sella | ~8.45 mm | Quick cooking, high yield, cost-effective long grain |
| **1401 Series** | Raw, Steam, Golden Sella | ~8.35 mm | High aromatic profile, strong elongation |
| **Traditional Basmati** | Raw, White Sella, Brown | ~7.35 mm | Authentic natural aroma, delicate mouthfeel |
| **Pusa Basmati** | Raw, Steam, Sella | ~7.40 mm | Classic basmati aroma and firm cooking texture |
| **Sugandha / Sharbati** | Raw, Steam, Sella | ~7.00 - 7.80 mm | Scented economical basmati alternatives |

### 2. Non-Basmati Varieties

| Variety | Processing Forms | Avg. Grain Length | Application |
| :--- | :--- | :--- | :--- |
| **PR 11 / PR 14** | Raw, Steam, Parboiled | ~6.80 mm | Commercial catering, food service packaging |
| **Parmal** | Raw, Steam | ~6.50 mm | Institutional procurement, high-volume contracts |
| **Sona Masoori** | Raw, Steam, Parboiled | ~5.20 mm | Lightweight medium-grain staple for South Asian cooking |
| **IR 64** | Raw, Parboiled | ~6.20 mm | High bulk export staple across Africa and Middle East |
| **Swarna** | Raw, Parboiled | ~6.10 mm | Everyday staple rice with high caloric density |
| **Broken Rice** | Raw, Parboiled | < 5.00 mm | Industrial starch, brewing, and flour manufacturing |

---

## 🛠️ Tech Stack

### Core Frontend
- **Framework**: [React 19](https://react.dev/) (`19.2.0`)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (`~5.9.3`)
- **Build Tool**: [Vite 7](https://vitejs.dev/) (`^7.2.4`)
- **Router**: [React Router DOM](https://reactrouter.com/) (`^7.11.0`)

### Styling & Animation
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss` and `postcss`
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (`^12.23.26`)
- **Icons**: [Lucide React](https://lucide.dev/) (`^0.562.0`)
- **Typography**: Google Fonts (*Playfair Display* & *Inter*)

---

## 📂 Project Structure

```text
Shaha-Rice-Export/
├── public/                     # Static public assets
│   ├── certificates/           # Regulatory certification badges (SVG)
│   ├── images/process/         # Supply chain process photography (JPG)
│   ├── rice/                   # 28 grain variety photography assets (PNG)
│   ├── shaha-logo.jpg          # Brand identity & favicon asset
│   └── site.webmanifest        # Progressive web application manifest
├── src/
│   ├── components/             # Reusable interface components
│   │   ├── ui/                 # Atomic presentation components
│   │   │   ├── AnimatedText.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── ImageReveal.tsx
│   │   │   └── SectionHeader.tsx
│   │   ├── Certifications.tsx  # Compliance & standards showcase
│   │   ├── CustomCursor.tsx    # Interactive cursor component
│   │   ├── Footer.tsx          # Global footer and compliance links
│   │   ├── Loading.tsx         # Suspense route fallback skeleton
│   │   ├── Navbar.tsx          # Responsive navigation header
│   │   ├── QualityJourney.tsx  # Interactive supply chain visualizer
│   │   ├── QuoteRequestForm.tsx# RFQ inquiry configuration form
│   │   └── SpecsOverlay.tsx    # Grain specification detail modal
│   ├── data/
│   │   ├── blogData.ts         # Industry market publications and articles
│   │   └── riceData.ts         # Grain specifications database
│   ├── pages/                  # Lazy-loaded route views
│   │   ├── About.tsx           # Company overview and milling capacity
│   │   ├── Blog.tsx            # Market reports and news archive
│   │   ├── Contact.tsx         # Inquiry form and communication channels
│   │   ├── Home.tsx            # Landing view with hero, specs, and stats
│   │   ├── Prices.tsx          # Indicative FOB export pricing schedule
│   │   ├── Privacy.tsx         # Privacy policy and data handling terms
│   │   ├── Process.tsx         # Processing, sorting, and packaging flow
│   │   ├── Products.tsx        # Filterable rice catalog
│   │   └── Terms.tsx           # International export terms & conditions
│   ├── App.tsx                 # Root application component with route declarations
│   ├── index.css               # Global Tailwind directives and custom scrollbars
│   ├── main.tsx                # React DOM root entry point
│   └── vite-env.d.ts           # Vite client environment type declarations
├── .gitignore                  # Git ignore specification
├── eslint.config.js            # ESLint flat configuration
├── index.html                  # HTML5 entry template
├── LICENSE                     # MIT License
├── package.json                # Project dependencies and script declarations
├── postcss.config.js           # PostCSS Tailwind and Autoprefixer configuration
├── README.md                   # Repository documentation
├── tailwind.config.js          # Tailwind CSS theme extensions
├── tsconfig.app.json           # Application TypeScript configuration
├── tsconfig.json               # Root TypeScript configuration
├── tsconfig.node.json          # Vite node tooling TypeScript configuration
├── vercel.json                 # Vercel SPA rewrite routing rules
└── vite.config.ts              # Vite server and build configuration
```

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version **18.x** or higher, LTS recommended)
- `npm` (bundled with Node.js) or compatible package manager (`pnpm` / `yarn`)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/nfsprogramming/Shaha-Rice-Export.git
cd Shaha-Rice-Export
npm install
```

### Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server on port 5173. |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) and produces an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for verification. |
| `npm run lint` | Executes ESLint across the codebase using the configured rules. |

---

## 🚢 Production Build & Deployment

### Building for Production

Compile TypeScript and bundle optimized static assets:

```bash
npm run build
```

Production artifacts are output to `dist/`, including minified JavaScript bundles, compiled CSS, and compressed assets.

### Previewing Production Build

To preview the built production bundle locally:

```bash
npm run preview
```

### Vite & Vercel Configuration

Single Page Application (SPA) routing is supported via [`vercel.json`](./vercel.json):

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🏆 Quality Assurance & Export Standards

All export varieties documented comply with standards from agricultural export bodies:
- **APEDA**: Agricultural and Processed Food Products Export Development Authority registration.
- **ISO 22000**: Food Safety Management System compliance.
- **HACCP**: Hazard Analysis Critical Control Points certification.
- **FSSAI**: Food Safety and Standards Authority of India compliance.
- **FDA**: US FDA registration compliance for export facilities.
- **Halal & Kosher**: Certified compliance for regional import regulations.

---

## ⚠️ Limitations

- **Indicative Commodity Pricing**: Prices displayed in `Prices.tsx` and `riceData.ts` represent indicative benchmark rates and are subject to daily commodity market fluctuations, currency exchange rates, and freight tariffs.
- **RFQ Submission Endpoint**: The RFQ form currently provides client-side price estimations and form state; backend email or webhook routing should be wired to your organization's CRM or SMTP provider.

---

## 🤝 Contributing

Contributions are welcome. Please ensure that:
1. All changes pass `npm run lint` without errors.
2. Production builds pass `npm run build` cleanly.
3. Code changes preserve existing types and accessibility standards.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for complete details.
