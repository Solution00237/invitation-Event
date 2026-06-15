# 🥂 Grand Gala — Invitation Website

A modern, luxury invitation website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features 3D animations, a vertical marquee guest list, hero background, and Google Maps integration.

---

## ✨ Features

- **Hero Section** — Full-screen background image with 3D perspective tilt on mouse move, animated gold rings, and a prominent "Call Us" CTA
- **Event Details** — Animated 3D hover cards revealing event information
- **Guest List Marquee** — Three-column vertical infinite scroll marquee with highlighted names
- **Google Maps** — Embedded map with venue location, address, and a large "Call Us" button
- **Ambient Particles** — Canvas-based golden particle system
- **Scroll Reveal** — IntersectionObserver-driven fade-in animations
- **Glassmorphism Navbar** — Transparent on top, frosted glass on scroll

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- npm / yarn / pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15.x |
| React | 19.x |
| TypeScript | 5.x |
| Tailwind CSS | 3.x |
| Framer Motion | 12.x |
| Lucide React | 0.5x |

---

## 📁 Project Structure

```
invitation-site/
├── app/
│   ├── globals.css       # Global styles, custom animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page composition
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphism nav
│   ├── FloatingParticles.tsx  # Canvas gold particles
│   ├── HeroSection.tsx    # Full-screen hero with 3D tilt
│   ├── EventDetails.tsx   # 3D hover detail cards
│   ├── InvitedSection.tsx # Vertical marquee guest list
│   ├── MapSection.tsx     # Google Maps + Call Us CTA
│   └── Footer.tsx         # Elegant footer
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Gold 400 | `#ebbe3a` |
| Gold 500 | `#c9942a` |
| Ivory | `#FAF6EE` |
| Charcoal | `#1a1a1a` |
| Display Font | Playfair Display |
| Body Font | Inter |
| Accent Font | Cormorant Garamond |

---

## 🗺 Customizing

### Change the phone number
In `components/Navbar.tsx` and `components/MapSection.tsx`, update the `href="tel:+..."` attribute.

### Change the guest list
In `components/InvitedSection.tsx`, edit the `GUESTS` array.

### Change the venue/map
In `components/MapSection.tsx`, update the Google Maps `src` iframe URL with your venue coordinates.

### Change the hero image
In `components/HeroSection.tsx`, update the `src` attribute of the `<img>` tag with your image URL.

---

## 📦 Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

Or deploy instantly to [Vercel](https://vercel.com):

```bash
npx vercel
```

---

## 📄 License

MIT — use freely for personal and commercial projects.
