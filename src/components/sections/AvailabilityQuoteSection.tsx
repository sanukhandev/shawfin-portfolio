import { ArrowUpRight } from "lucide-react";

/**
 * A balanced editorial split: current booking availability and
 * a short design principle from Dieter Rams (Vitsœ, Ten Principles).
 */
export default function AvailabilityQuoteSection() {
  return (
    <section
      id="availability"
      className="availability-quote-section"
      aria-labelledby="availability-heading"
    >
      <div className="availability-quote-grid">
        <div className="availability-panel">
          <span className="availability-kicker">01 / Availability</span>
          <div className="availability-body">
            <div className="availability-heading-line">
              <span className="availability-indicator" aria-hidden="true" />
              <h2 id="availability-heading">
                Available for
                <span>Projects 2026</span>
              </h2>
            </div>
            <p>
              Open for freelance commissions, launch collaborations, and long-form
              brand partnerships with ambitious teams.
            </p>
            <a href="#contact" className="availability-link">
              Let&apos;s collaborate <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="philosophy-panel">
          <span className="philosophy-kicker">02 / Design philosophy</span>
          <figure className="philosophy-figure">
            <span className="philosophy-ornament" aria-hidden="true">“</span>
            <blockquote>Good design is as little design as possible.</blockquote>
            <figcaption>— Dieter Rams</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
