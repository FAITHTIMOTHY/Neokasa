# NEO KASA — Architectural Portfolio & Spatial Design Studio

> **"Modern Thinking, Timeless Architecture"**  
> Live Website: [neokasa.netlify.app](https://neokasa.netlify.app)

---

## 🏛️ Overview

**NEO KASA** is the official portfolio and digital monograph for **Nsikakabasi Essien**, an architectural designer and spatial practitioner based in Akwa Ibom State, Nigeria. 

The studio crafts progressive, climate-adaptive spatial works across institutional, commercial, residential, and sustainable mass-timber typologies—seamlessly uniting tactile raw material purity with precision Building Information Modeling (BIM) and technical CAD working drawings.

---

## ✨ Key Features

- **Selected Architectural Works & Visual Concepts**:
  - **UNIUYO Entrepreneurial Skill Hub** *(Institutional / Academic Incubator with wave balconies, central stack-ventilation atrium, and terracotta thermal shading)*
  - **The House of Fashion Atelier** *(Commercial / Flagship Cruciform Haute Couture Complex with perforated pod fascias & EPDM membrane roof)*
  - **The Azure Terrace Residences** *(Multi-unit luxury townhomes with grooved blue-grey stucco & oak timber louvers)*
  - **The Grand Portico Duplex** *(Contemporary 4-bedroom detached duplex with stone portico & detached BQ)*
  - **The Sculpture & Timber Pavilion Villa** *(Minimalist luxury bungalow with integrated bronze humanoid sculpture & teak louvers)*
  - **The Azure Arch Bungalow** *(Neo-classical contemporary bungalow with ashlar stone pillar & arched portico)*
  - **The Masonry & Timber Villa** *(3D sculptural facade study with polygonal slate masonry & CNC wooden screens)*
  - **The Sculptural Monolith Pavilion** *(Single-story contemporary pavilion with GFRC wall relief & ledger stone)*

- **Interactive Architectural Case Study Modal**:
  - **Overview & High-Resolution Perspectives**: Dynamic carousel viewer with architectural concept narrative and design intent.
  - **Technical CAD Working Drawings & Hotspot Pins**: Interactive architectural pins highlighting floor plans, section details, and room programs (dynamically shown for projects with complete working drawings).
  - **Material Breakdown & Specification Analysis**: Assemblies, finishes, and climate properties with color swatches.
  - **BIM & Engineering Specifications**: Detailed structural systems, envelope glazing, sustainability ratings, and EDGE green building metrics.

- **Direct Inquiries & FormSubmit Integration**:
  - Direct email dispatch via **FormSubmit.co** with background transmission, loading indicators, and error resilience.
  - Inquiries route directly to `Nsikakabasiessien101@gmail.com`.
  - Direct WhatsApp quick-connect integration (`+2349013717660`).

- **Design System & Aesthetics**:
  - Dual **Light / Dark Mode** theme toggle.
  - Curated architectural typography (Syne display headings, Inter sans body, Newsreader serif design intent, JetBrains Mono technical metadata).
  - Fully responsive mobile drawer navigation and high-DPI image scaling.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Tailored Design System with CSS variables and glassmorphism)
- **Form Backend**: [FormSubmit.co](https://formsubmit.co/) AJAX API
- **Deployment**: [Netlify](https://www.netlify.com/) (configured with `netlify.toml` SPA redirects)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Installation

1. Clone or open the repository directory:
```bash
cd "Architectural Portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Start the local development server:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the site.

4. Build for production:
```bash
npm run build
```
The compiled production bundle will be generated inside the `dist/` directory.

5. Preview production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
Architectural Portfolio/
├── dist/                       # Compiled production bundle for Netlify deployment
├── public/
│   ├── assets/
│   │   ├── concepts/           # 3D design showcase renders & material sheets
│   │   ├── fashion_house/      # CAD floor plans, elevations & 3D renders
│   │   ├── residences/         # Detached duplex & residential working drawings
│   │   ├── uniuyo/             # UNIUYO incubator working drawings & interior renders
│   │   └── logo.svg            # Studio brand monogram
│   ├── favicon.svg             # Favicon
│   └── _redirects              # Netlify client-side routing fallback
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Studio navigation, theme switch & quick contact
│   │   ├── Hero.jsx            # Hero slideshow, studio vision & featured showcase
│   │   ├── ProjectGrid.jsx     # Filterable project gallery with Grid/List layout
│   │   ├── ProjectModal.jsx    # Interactive case study inspection modal
│   │   ├── FloorPlanHotspots.jsx # Interactive CAD blueprint hotspot pins
│   │   ├── MaterialAnalysisInspector.jsx # Facade material analysis explorer
│   │   ├── StudioPhilosophy.jsx# Architectural manifesto & core values
│   │   ├── ContactSection.jsx  # Main contact section & FormSubmit form
│   │   ├── ContactModal.jsx    # Commission request modal dialog
│   │   ├── Footer.jsx          # Studio footer, social links & copyright
│   │   └── LogoIcon.jsx        # Scalable SVG studio monogram
│   ├── data/
│   │   └── projects.js         # Comprehensive project database & specifications
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global CSS design tokens, themes & animations
├── netlify.toml                # Netlify build configuration & redirect rules
├── package.json                # Project dependencies and npm scripts
└── README.md                   # Project documentation
```

---

## 🌐 Deployment to Netlify

This project is pre-configured for Netlify deployment.

### Option A: Drag & Drop (Fastest)
1. Run `npm run build`.
2. Go to [app.netlify.com](https://app.netlify.com) and open the **neokasa** site.
3. Drag & drop the `dist/` folder into the Netlify **Deploys** drop zone.

### Option B: Continuous Deployment via GitHub
1. Push this repository to GitHub.
2. Link the repository on Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 📬 Studio Contact & Commissions

* **Principal Designer**: Nsikakabasi Essien
* **Studio Headquarters**: Akwa Ibom State, Nigeria
* **Direct Email**: [Nsikakabasiessien101@gmail.com](mailto:Nsikakabasiessien101@gmail.com)
* **WhatsApp / Phone**: [+234 901 371 7660](https://wa.me/2349013717660)
* **LinkedIn**: [Nsikakabasi Essien](https://www.linkedin.com/in/nsikakabasi-essien-34a293288)
* **X (Twitter)**: [@_nkhay_22](https://x.com/_nkhay_22)
* **Project Commissions**: Open to residential, commercial, institutional, and spatial design projects nationwide and globally.

---

© 2025–2026 NEO KASA. All Rights Reserved.
