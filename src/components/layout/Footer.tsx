import BrandLogo from "@/components/ui/BrandLogo";
import { ArrowUpRight, Heart } from "lucide-react";
import { NAV_LINKS, SITE_DESCRIPTION, SITE_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

const footerSocialLinks = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
  { label: "Behance", href: SOCIAL_LINKS.behance },
  { label: "Dribbble", href: SOCIAL_LINKS.dribbble },
] as const;

/**
 * A full-bleed, editorial red footer with a warm tan signature strip.
 * The black handwritten wordmark retains contrast without an individual box.
 */
export default function Footer() {
  return (
    <footer id="site-footer" className="shawfin-footer">
      <div className="shawfin-footer-signature">
        <div className="shawfin-footer-container shawfin-footer-signature-inner">
          <a href="#top" className="shawfin-footer-brand" aria-label="Shawfin.design — back to top">
            <BrandLogo tone="black" className="h-12 w-[220px] sm:h-14 sm:w-[265px]" />
          </a>
          <span className="shawfin-footer-signature-label">Creative Designer and Art Director</span>
        </div>
      </div>

      <div className="shawfin-footer-red">
        <div className="shawfin-footer-pattern" aria-hidden="true" />
        <div className="shawfin-footer-container shawfin-footer-body">
          <div className="shawfin-footer-intro">
            <span className="shawfin-footer-eyebrow">Shawfin.design / 2026</span>
            <p className="shawfin-footer-message">{SITE_DESCRIPTION}</p>
            <a className="shawfin-footer-email" href={`mailto:${SITE_EMAIL}`}>
              {SITE_EMAIL} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Footer navigation" className="shawfin-footer-column">
            <h2 className="shawfin-footer-heading">Explore</h2>
            <ul className="shawfin-footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social links" className="shawfin-footer-column">
            <h2 className="shawfin-footer-heading">Connect</h2>
            <ul className="shawfin-footer-links">
              {footerSocialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}<ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="shawfin-footer-container shawfin-footer-bottom">
          <p className="shawfin-footer-credit">
            <span>Made with</span>
            <Heart size={14} fill="currentColor" aria-label="love" />
            <span>by Sanu Khan © 2026</span>
          </p>
          <a className="shawfin-footer-top" href="#top">
            Back to top <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
