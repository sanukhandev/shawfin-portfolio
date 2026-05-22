# Shawfin — Creative Designer Portfolio

A premium, cinematic creative portfolio website built with Next.js 15, Framer Motion, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 12
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Theme**: Dark/Light with CSS variables

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + CSS variables
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Homepage (assembles all sections)
├── components/
│   ├── effects/
│   │   └── MouseGlow.tsx    # Cursor glow effect
│   ├── layout/
│   │   └── Navbar.tsx       # Navigation with theme toggle
│   ├── providers/
│   │   ├── ThemeProvider.tsx       # Dark/light theme
│   │   └── SmoothScrollProvider.tsx # Lenis smooth scroll
│   └── sections/
│       ├── HeroSection.tsx         # Cinematic hero with parallax
│       ├── ContentsShowcase.tsx    # Expanding category pillars
│       ├── AboutSection.tsx        # Editorial about layout
│       ├── ProjectsSection.tsx     # Case study cards
│       ├── SkillsSection.tsx       # Filterable skill pills
│       ├── TestimonialsSection.tsx # Glass testimonial cards
│       ├── ClientsSection.tsx      # Animated marquee
│       └── ContactSection.tsx      # Contact form + socials
├── hooks/
│   └── useScrollReveal.ts   # Intersection Observer hook
└── lib/
    ├── constants.ts         # Site-wide constants
    ├── motion.ts            # Reusable Framer Motion variants
    └── utils.ts             # Utility functions (cn)
```

## Customization

- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Content**: Update text/data directly in each section component
- **Fonts**: Change in `src/app/layout.tsx`
- **Projects**: Add/edit project data in `src/components/sections/ProjectsSection.tsx`

## Deploy

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```
