import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import MouseGlow from "@/components/effects/MouseGlow";

export const metadata: Metadata = {
  title: "Shawfin | Brand Identity, Digital Design & Art Direction",
  description:
    "Work with Shawfin on memorable brand identities, packaging, digital experiences, and motion design. Creative direction that connects your business with the people who matter.",
  keywords: [
    "Shawfin",
    "Creative Designer",
    "Art Director",
    "Branding",
    "UI/UX",
    "Packaging Design",
    "Motion Graphics",
    "Portfolio",
  ],
  authors: [{ name: "Shawfin" }],
  openGraph: {
    title: "Shawfin | Brand Identity, Digital Design & Art Direction",
    description: "Distinctive brand identities, thoughtful digital experiences, packaging, and art direction designed to communicate with clarity.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawfin | Brand Identity, Digital Design & Art Direction",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Load Google Fonts in the browser, not during next build.
            Vercel's next/font Google CSS parser can fail at build time.
            display=swap and CSS fallback fonts keep content readable. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inter:wght@400..900&family=Space+Grotesk:wght@400..700&display=swap"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <MouseGlow />
            <main>{children}</main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
