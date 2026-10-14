"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Layers3, MousePointer2, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const designBenefits = [
  {
    title: "A clearer story",
    eyebrow: "Clarity",
    description: "Help people understand what you offer, why it matters, and what makes you different.",
    detail: "A strong visual hierarchy makes complex ideas easier to navigate, from the first impression to the smallest detail.",
    icon: Compass,
  },
  {
    title: "A more recognisable brand",
    eyebrow: "Consistency",
    description: "Create one coherent visual language across packaging, digital experiences, and campaigns.",
    detail: "Consistent typography, colour, imagery, and motion give each touchpoint a familiar character without making everything look the same.",
    icon: Layers3,
  },
  {
    title: "An easier next step",
    eyebrow: "Experience",
    description: "Make interactions feel intuitive, so your audience can focus on what matters.",
    detail: "Thoughtful layouts, clear calls to action, and purposeful movement help people explore with confidence.",
    icon: MousePointer2,
  },
  {
    title: "Design with room to grow",
    eyebrow: "Adaptability",
    description: "Build flexible creative foundations that support new products, channels, and ideas.",
    detail: "A useful design system makes it easier to create new work while maintaining the character of your brand.",
    icon: Sparkles,
  },
] as const;

/**
 * Service benefits are used instead of unverifiable testimonial quotes.
 * Genuine, permissioned client reviews can be added once available.
 */
export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollReveal();
  const chosen = designBenefits[active];

  return (
    <section
      id="why-design"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "var(--surface)" }}
      aria-labelledby="design-benefits-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] ambient-orb"
          style={{ background: "radial-gradient(circle, rgba(183,138,78,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#B78A4E" }}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Why Thoughtful Design Matters
          </motion.p>
          <motion.h2
            id="design-benefits-heading"
            className="font-black leading-[0.98]"
            style={{ fontSize: "clamp(36px, 5vw, 62px)", color: "var(--foreground)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Good-looking is
            <br />
            <span className="text-gradient-magenta">only the beginning.</span>
          </motion.h2>
          <p className="mt-7 mx-auto max-w-2xl text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            Great creative should do more than catch the eye. It should tell a clearer
            story, make experiences easier, and give your brand a personality people recognise.
          </p>
        </div>

        <motion.article
          key={active}
          className="relative p-8 sm:p-11 rounded-[34px] glass-premium depth-card mb-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(183,138,78,0.12)", border: "1px solid rgba(183,138,78,0.35)" }}
              >
                <chosen.icon size={22} style={{ color: "#B78A4E" }} aria-hidden="true" />
              </div>
              <span className="text-xs tracking-[0.24em] uppercase" style={{ color: "var(--muted)" }}>
                {chosen.eyebrow} / 0{active + 1}
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold mb-5" style={{ color: "var(--foreground)" }}>
              {chosen.title}
            </h3>
            <p className="text-lg sm:text-2xl leading-relaxed mb-5" style={{ color: "var(--foreground)" }}>
              {chosen.description}
            </p>
            <p className="text-sm sm:text-base leading-relaxed max-w-3xl" style={{ color: "var(--muted)" }}>
              {chosen.detail}
            </p>
          </div>
        </motion.article>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4" aria-label="Explore design benefits">
          {designBenefits.map((item, i) => (
            <button
              key={item.eyebrow}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className="text-left p-4 rounded-2xl cursor-pointer transition-all duration-300 glass-premium"
              style={{
                border: `1px solid ${active === i ? "rgba(183,138,78,0.65)" : "var(--card-border)"}`,
                boxShadow: active === i ? "0 10px 30px rgba(183,138,78,0.14)" : "none",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                {item.eyebrow}
              </p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--muted)" }}>
                {item.title}
              </p>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-sm underline underline-offset-8"
            style={{ color: "var(--accent)" }}
          >
            Let&apos;s talk about your goals <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
