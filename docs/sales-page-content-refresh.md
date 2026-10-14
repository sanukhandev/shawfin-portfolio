# Sales-focused homepage content refresh — October 2026

## Positioning and voice

- Audience: businesses commissioning branding, packaging, UI/UX, art direction, or motion.
- Voice: confident, precise, human and design-led; avoid superlatives and unverified numerical outcomes.
- Core promise: distinctive design that clarifies brand value, creates coherent touchpoints, and improves the experience of engaging with the brand.
- Primary action: **Start a Project** / **Discuss your project** / **Let's talk about your goals**.

## Copy changes

1. **Hero** — Extended the original line with a stronger audience benefit, explicit disciplines and the value of coherent creative.
2. **Availability** — Converted the simple booking announcement into a brief, project-oriented invitation while keeping the existing 2026 availability context.
3. **Services showcase** — Clarified deliverables and their audience/business purpose across branding, packaging, UI/UX, motion and art direction.
4. **About and process** — Replaced abstract language with client-focused positioning and discover/define/design/refine stages.
5. **Projects** — Tightened all six summaries, treating portfolio material as *work and concepts* instead of claiming measured commercial results.
6. **Expertise** — Replaced jargon-heavy section heading and added accessible selected-state labels.
7. **Benefits** — Replaced unverified named testimonials with four transparent benefit principles (clarity, consistency, experience, adaptability).
8. **Brand moments** — Replaced unverified client names/logos with contexts in which the creative services can be used; no unsupported client affiliations.
9. **Contact** — Rewrote the invitation, connected pre-existing social icons to configured URLs, and replaced the simulated "Message Sent" screen with a truthful mailto draft handoff.
10. **Footer and SEO** — Refreshed the business-facing tagline and metadata to communicate the service offering consistently.

## Contact form behaviour

The site does not have a backend email service. Submitting the form prepares an email draft for the visitor's own email application. The confirmation explicitly says that the website has **not** sent a message. Production-grade in-site delivery would require a validated API and notification service.

## Verification checklist

- Run lint, typecheck and production build.
- Review body copy at narrow/mobile widths, especially the extended hero paragraph.
- Check section anchor CTAs and keyboard navigation.
- Verify configured external social destinations before release.
- Check that a `mailto:` handler is available on the visitor's device; otherwise use the direct email link.
- Test the colour contrast and reduced-motion experience.
