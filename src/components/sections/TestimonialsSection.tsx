"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Shawfin transformed our brand language into a premium system with incredible emotional precision.",
    author: "Alexandra Chen",
    role: "Creative Director",
    company: "Nova Studio",
    accent: "#c000ff",
  },
  {
    id: 2,
    quote:
      "Engagement metrics shifted immediately. The visual identity is sharper, cleaner, and deeply memorable.",
    author: "Marcus Webb",
    role: "Marketing Lead",
    company: "Zenith Labs",
    accent: "#9b00cc",
  },
  {
    id: 3,
    quote:
      "An exceptional art direction partner. Every frame looked intentional and elevated the product narrative.",
    author: "Priya Nair",
    role: "Founder",
    company: "Aether Fashion",
    accent: "#7b2dff",
  },
  {
    id: 4,
    quote:
      "Packaging and launch visuals became the centerpiece of our campaign and stood out across every channel.",
    author: "Jordan Okafor",
    role: "Brand Manager",
    company: "Orion Media",
    accent: "#a000ee",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-32 px-6 overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] ambient-orb"
          style={{ background: "radial-gradient(circle, rgba(192,0,255,0.1) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#c000ff" }}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            className="font-black leading-[0.95]"
            style={{ fontSize: "clamp(36px, 5vw, 62px)", color: "var(--foreground)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Voices from
            <br />
            <span className="text-gradient-magenta">Client Partners</span>
          </motion.h2>
        </div>

        <motion.article
          key={active}
          className="relative p-8 sm:p-11 rounded-[34px] glass-premium depth-card mb-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div
            className="absolute top-0 right-0 w-52 h-52 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${testimonials[active].accent}2e 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8 gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${testimonials[active].accent}18`,
                  border: `1px solid ${testimonials[active].accent}48`,
                }}
              >
                <Quote size={20} style={{ color: testimonials[active].accent }} />
              </div>
              <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: "var(--muted)" }}>
                Selected feedback
              </p>
            </div>

            <blockquote
              className="font-light leading-relaxed mb-8"
              style={{ fontSize: "clamp(18px, 2.6vw, 28px)", color: "var(--foreground)", fontStyle: "italic" }}
            >
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-black"
                style={{
                  background: `linear-gradient(135deg, ${testimonials[active].accent}, rgba(123,45,255,0.55))`,
                  color: "white",
                }}
              >
                {testimonials[active].author[0]}
              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                  {testimonials[active].author}
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  {testimonials[active].role}, {testimonials[active].company}
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="flex items-center justify-center gap-3 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300 cursor-pointer rounded-full"
              style={{
                width: active === i ? "34px" : "9px",
                height: "9px",
                background: active === i ? "linear-gradient(90deg, #c000ff, #7b2dff)" : "rgba(192,0,255,0.2)",
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className="text-left p-4 rounded-2xl cursor-pointer transition-all duration-300 glass-premium"
              style={{
                border: `1px solid ${active === i ? `${item.accent}55` : "rgba(255,255,255,0.35)"}`,
                boxShadow: active === i ? `0 10px 30px ${item.accent}22` : "none",
              }}
            >
              <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                {item.author}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                {item.company}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
