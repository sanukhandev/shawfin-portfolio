"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  "Nova Studio",
  "Zenith Labs",
  "Orion Media",
  "Pixel Theory",
  "Aether Fashion",
  "Lumina Creative",
  "Apex Brands",
  "Solstice Agency",
];

export default function ClientsSection() {
  const { ref, isVisible } = useScrollReveal();

  // Duplicate for seamless marquee
  const marqueeItems = [...clients, ...clients, ...clients];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div ref={ref} className="mb-12 text-center px-6">
        <motion.p
          className="text-xs tracking-[0.3em] uppercase mb-2"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Trusted By
        </motion.p>
        <motion.h2
          className="font-black"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--foreground)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          World-Class <span className="text-gradient-magenta">Clients</span>
        </motion.h2>
      </div>

      {/* Marquee track — forward */}
      <div className="relative overflow-hidden mb-4">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, var(--background) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, var(--background) 0%, transparent 100%)",
          }}
        />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {marqueeItems.map((client, i) => (
            <ClientLogo key={`${client}-${i}`} name={client} />
          ))}
        </motion.div>
      </div>

      {/* Marquee track — reverse */}
      <div className="relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, var(--background) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, var(--background) 0%, transparent 100%)",
          }}
        />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeItems].reverse().map((client, i) => (
            <ClientLogo key={`rev-${client}-${i}`} name={client} reversed />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ClientLogo({ name }: { name: string; reversed?: boolean }) {
  return (
    <motion.div
      className="flex-shrink-0 px-8 py-4 rounded-2xl flex items-center justify-center cursor-default glass-premium neuro-soft"
      style={{
        border: "1px solid var(--card-border)",
        minWidth: "180px",
      }}
      whileHover={{
        borderColor: "rgba(192,0,255,0.4)",
        boxShadow: "0 0 20px rgba(192,0,255,0.12)",
      }}
    >
      <span
        className="font-bold text-sm tracking-wider uppercase transition-colors duration-300"
        style={{ color: "var(--muted)" }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.color = "#c000ff";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.color = "var(--muted)";
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}
