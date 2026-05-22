# Shawfin Portfolio

A premium portfolio website built with Next.js, TypeScript, Tailwind CSS v4, and Framer Motion.

This project focuses on a cinematic but restrained UI language with:

- layered backgrounds and soft depth
- glass surfaces and subtle motion
- custom brand logo system
- dark and light theme support

## Stack

- Next.js 15 (App Router + Turbopack)
- React 19
- TypeScript 5
- Tailwind CSS v4
- Framer Motion 12
- Lenis smooth scrolling
- Lucide React icons

## Fonts and Branding

Configured in src/app/layout.tsx:

- Space Grotesk
- Inter
- Ubuntu
- Josefin Sans

Brand logo component:

- src/components/ui/BrandLogo.tsx

Usage pattern:

- Header and footer use full logo (Shawfin.brand)
- Hero uses plain text Shawfin

## Run Locally

1. Install dependencies

npm install

2. Start development server

npm run dev

3. Build production bundle

npm run build

4. Start production server

npm start

Local URL:

http://localhost:3000

## Available Scripts

- npm run dev
- npm run build
- npm run start
- npm run lint

## Project Structure

src/
    app/
        globals.css
        layout.tsx
        page.tsx
    components/
        effects/
            MouseGlow.tsx
        layout/
            Navbar.tsx
        providers/
            SmoothScrollProvider.tsx
            ThemeProvider.tsx
        sections/
            AboutSection.tsx
            ClientsSection.tsx
            ContactSection.tsx
            ContentsShowcase.tsx
            HeroSection.tsx
            ProjectsSection.tsx
            SkillsSection.tsx
            TestimonialsSection.tsx
        ui/
            BrandLogo.tsx
    hooks/
        useScrollReveal.ts
    lib/
        constants.ts
        motion.ts
        utils.ts

## Theming

Theme variables are defined in src/app/globals.css.

Dark and light modes are managed through the ThemeProvider in src/components/providers/ThemeProvider.tsx.

## Deploy

Recommended deployment: Vercel

npx vercel
