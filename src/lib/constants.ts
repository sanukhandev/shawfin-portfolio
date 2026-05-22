// Site-wide constants
export const SITE_NAME = "Shawfin";
export const SITE_TAGLINE = "Creative Designer & Art Director";
export const SITE_DESCRIPTION =
  "Designing visuals that help brands scale, connect, and stand out.";
export const SITE_EMAIL = "hello@shawfin.design";

export const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = {
  behance: "https://behance.net/shawfin",
  dribbble: "https://dribbble.com/shawfin",
  instagram: "https://instagram.com/shawfin.design",
  linkedin: "https://linkedin.com/in/shawfin",
} as const;

export const THEME_COLORS = {
  magenta: "#c000ff",
  violet: "#7b00d4",
  deepViolet: "#8a00e6",
  magentaGlow: "rgba(192, 0, 255, 0.35)",
} as const;
