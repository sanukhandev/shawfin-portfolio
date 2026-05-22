import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Ubuntu, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import MouseGlow from "@/components/effects/MouseGlow";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
  weight: ["400", "500", "700"],
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shawfin — Creative Designer & Art Director",
  description:
    "Designing visuals that help brands scale, connect, and stand out. Multidisciplinary creative designer specializing in branding, UI/UX, packaging, and motion.",
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
    title: "Shawfin — Creative Designer & Art Director",
    description: "Designing visuals that help brands scale, connect, and stand out.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawfin — Creative Designer & Art Director",
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
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ubuntu.variable} ${josefinSans.variable} antialiased`}
        suppressHydrationWarning
      >
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
