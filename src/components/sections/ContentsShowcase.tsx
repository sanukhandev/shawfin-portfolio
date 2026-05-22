"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    id: "branding",
    label: "Branding",
    description: "Identity systems crafted for recall, consistency, and premium perception.",
    accent: "#c000ff",
    image:
      "https://images.unsplash.com/photo-1620674156044-52b714665d46?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "packaging",
    label: "Packaging",
    description: "Packaging directions designed like collectible objects with tactile narrative.",
    accent: "#9b00cc",
    image:
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "uiux",
    label: "UI / UX",
    description: "Interfaces with elegant hierarchy, motion rhythm, and measurable conversion focus.",
    accent: "#7b2dff",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "motion",
    label: "Motion",
    description: "Cinematic loops and transition systems that make campaigns feel alive.",
    accent: "#a000ee",
    image:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "art",
    label: "Art Direction",
    description: "Concept-first visual worlds across digital, print, social, and launch moments.",
    accent: "#8800bb",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ContentsShowcase() {
  const [hovered, setHovered] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ background: "var(--background)" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-20 right-0 w-[420px] h-[420px] ambient-orb"
          style={{ background: "radial-gradient(circle, rgba(192,0,255,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto mb-14">
        <motion.p
          className="text-xs tracking-[0.3em] uppercase mb-4 text-center md:text-left"
          style={{ color: "#c000ff" }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          What I Do
        </motion.p>
        <motion.h2
          className="font-black leading-[0.95] text-center md:text-left"
          style={{ fontSize: "clamp(36px, 6vw, 76px)", color: "var(--foreground)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Capsule Showcase
          <br />
          <span className="text-gradient-magenta">for Creative Direction</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="hidden md:flex gap-3 h-[560px]">
          {categories.map((cat, i) => {
            const isActive = hovered === cat.id;
            const hasHovered = hovered !== null;

            return (
              <motion.article
                key={cat.id}
                className="relative overflow-hidden cursor-pointer"
                style={{
                  flexGrow: isActive ? 3.4 : hasHovered ? 0.72 : 1,
                  borderRadius: isActive ? "42px" : "999px",
                  transition: "flex-grow 0.62s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(cat.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: isActive ? "saturate(1.1)" : "saturate(0.78)",
                    transform: isActive ? "scale(1.04)" : "scale(1)",
                    transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(12,8,18,0.22) 0%, rgba(12,8,18,0.84) 70%, rgba(12,8,18,0.94) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(150deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 34%, rgba(192,0,255,0.24) 100%)",
                    opacity: isActive ? 0.95 : 0.55,
                    transition: "opacity 0.5s ease",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    border: "1px solid rgba(255,255,255,0.38)",
                    borderRadius: isActive ? "42px" : "999px",
                    boxShadow: isActive
                      ? `0 18px 50px rgba(17,12,24,0.3), 0 0 55px ${cat.accent}55, inset 0 1px 0 rgba(255,255,255,0.48)`
                      : "0 10px 28px rgba(17,12,24,0.2), inset 0 1px 0 rgba(255,255,255,0.28)",
                    transition: "box-shadow 0.45s ease, border-radius 0.5s ease",
                  }}
                />

                <div
                  className="absolute inset-0 px-8 py-10 flex flex-col justify-between"
                  style={{ color: "white" }}
                >
                  <span
                    className="font-semibold text-xs tracking-[0.25em] uppercase"
                    style={{
                      opacity: isActive ? 1 : 0.7,
                      color: "rgba(255,255,255,0.95)",
                      textShadow: "0 2px 10px rgba(0,0,0,0.45)",
                    }}
                  >
                    {cat.label}
                  </span>

                  <div>
                    <div
                      className="flex items-center justify-center h-[55%]"
                      style={{ opacity: isActive ? 0 : 1, transition: "opacity 0.3s ease" }}
                    >
                      <p
                        className="font-medium text-sm tracking-[0.24em] uppercase"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", color: "rgba(255,255,255,0.74)" }}
                      >
                        {cat.label}
                      </p>
                    </div>

                    <motion.div
                      className="rounded-2xl p-4"
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16 }}
                      transition={{ duration: 0.35 }}
                      style={{
                        background: "linear-gradient(180deg, rgba(10,8,16,0.22), rgba(10,8,16,0.62))",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      <p className="text-[11px] uppercase tracking-[0.26em] mb-3" style={{ color: cat.accent }}>
                        Creative Pillar
                      </p>
                      <p
                        className="text-[15px] leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.96)", textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
                      >
                        {cat.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-3 w-max">
            {categories.map((cat, i) => (
              <motion.article
                key={cat.id}
                className="relative w-[220px] h-[320px] rounded-[44px] overflow-hidden flex-shrink-0"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(12,8,18,0.12) 0%, rgba(12,8,18,0.85) 75%, rgba(12,8,18,0.95) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ border: "1px solid rgba(255,255,255,0.35)", borderRadius: "44px" }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[11px] uppercase tracking-[0.24em] mb-2" style={{ color: cat.accent }}>
                    {cat.label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
                    {cat.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
