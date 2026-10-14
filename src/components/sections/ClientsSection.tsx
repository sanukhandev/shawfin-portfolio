"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const brandMoments = [
  "New Brand Launches",
  "Identity Refreshes",
  "Digital Products",
  "Packaging Systems",
  "Campaign Rollouts",
  "Editorial Visuals",
  "Social Storytelling",
  "Motion & Content",
];

export default function ClientsSection() {
  const { ref, isVisible } = useScrollReveal();
  const reduceMotion = useReducedMotion();
  const marqueeItems = [...brandMoments, ...brandMoments, ...brandMoments];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "var(--background)" }}>
      <div ref={ref} className="mb-12 text-center px-6">
        <motion.p
          className="text-xs tracking-[0.3em] uppercase mb-3"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          From Idea to Every Touchpoint
        </motion.p>
        <motion.h2
          className="font-black leading-tight"
          style={{ fontSize: "clamp(30px, 4vw, 50px)", color: "var(--foreground)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Whatever the moment,
          <br />
          <span className="text-gradient-magenta">make it feel like your brand.</span>
        </motion.h2>
        <p className="mx-auto max-w-2xl mt-6 leading-relaxed text-sm sm:text-base" style={{ color: "var(--muted)" }}>
          From the first identity to the next big launch, coherent design helps
          your business show up with clarity across every channel.
        </p>
      </div>

      <div className="relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, var(--background), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, var(--background), transparent)" }} />
        <motion.div
          className="flex gap-6 w-max"
          animate={reduceMotion ? undefined : { x: ["0%", "-33.33%"] }}
          transition={reduceMotion ? undefined : { duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {marqueeItems.map((moment, i) => (
            <BrandMomentLabel key={`${moment}-${i}`} name={moment} />
          ))}
        </motion.div>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, var(--background), transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, var(--background), transparent)" }} />
        <motion.div
          className="flex gap-6 w-max"
          animate={reduceMotion ? undefined : { x: ["-33.33%", "0%"] }}
          transition={reduceMotion ? undefined : { duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeItems].reverse().map((moment, i) => (
            <BrandMomentLabel key={`reverse-${moment}-${i}`} name={moment} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function BrandMomentLabel({ name }: { name: string }) {
  return (
    <div
      className="flex-shrink-0 px-8 py-4 rounded-2xl flex items-center justify-center glass-premium neuro-soft"
      style={{ border: "1px solid var(--card-border)", minWidth: "185px" }}
    >
      <span className="font-bold text-sm tracking-wide" style={{ color: "var(--muted)" }}>
        {name}
      </span>
    </div>
  );
}
