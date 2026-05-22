"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "luxury-perfume",
    title: "Luxury Perfume Branding",
    category: "Branding",
    summary: "Identity, packaging, and campaign language for a niche fragrance launch.",
    year: "2025",
    tags: ["Identity", "Packaging", "Campaign"],
    accent: "#c000ff",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "fashion-campaign",
    title: "Fashion Campaign Interface",
    category: "UI / UX",
    summary: "Immersive lookbook commerce experience with editorial pacing and premium transitions.",
    year: "2025",
    tags: ["UI/UX", "Web", "Motion"],
    accent: "#9b00cc",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "festival-id",
    title: "Festival Art Direction",
    category: "Art Direction",
    summary: "Stage, digital, and social visuals built from one expressive visual system.",
    year: "2024",
    tags: ["Direction", "Print", "Social"],
    accent: "#7b2dff",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mobile-ui",
    title: "Wellness Mobile Product",
    category: "Product Design",
    summary: "A calm, tactile mobile interface balancing conversion goals with emotional clarity.",
    year: "2024",
    tags: ["Mobile", "UX", "Prototype"],
    accent: "#a000ee",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "beverage-packaging",
    title: "Craft Beverage Packaging",
    category: "Packaging",
    summary: "Collectible can and bottle architecture with cinematic shelf presence.",
    year: "2024",
    tags: ["Packaging", "Brand", "Print"],
    accent: "#8800bb",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "social-motion",
    title: "Social Motion Suite",
    category: "Motion Design",
    summary: "Performance-first short-form visuals with strong rhythm and visual recall.",
    year: "2025",
    tags: ["Motion", "Campaign", "Reels"],
    accent: "#c000ff",
    image:
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] h-[360px] ambient-orb"
          style={{ background: "radial-gradient(ellipse, rgba(192,0,255,0.08) 0%, transparent 68%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">
          <div>
            <motion.p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: "#c000ff" }}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Selected Work
            </motion.p>
            <motion.h2
              className="font-black leading-[0.95]"
              style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--foreground)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Featured
              <br />
              <span className="text-gradient-magenta">Project Stories</span>
            </motion.h2>
          </div>
          <motion.p
            className="max-w-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Visual-first case studies shaped with editorial hierarchy, premium depth, and controlled motion behavior.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1200px]">
          {projects.map((project, i) => {
            const active = hoveredId === project.id;

            return (
              <motion.article
                key={project.id}
                className="group relative rounded-3xl overflow-hidden cursor-pointer depth-card"
                style={{ aspectRatio: i % 3 === 0 ? "4 / 4.3" : "4 / 5", border: "1px solid rgba(255,255,255,0.35)" }}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: active ? "scale(1.06)" : "scale(1)",
                    transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(12,8,18,0.08) 20%, rgba(12,8,18,0.74) 58%, rgba(12,8,18,0.96) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(140deg, rgba(192,0,255,0.28), rgba(192,0,255,0) 40%, rgba(123,45,255,0.2) 100%)",
                    opacity: active ? 0.95 : 0.68,
                    transition: "opacity 0.45s ease",
                  }}
                />

                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.2em] glass-premium"
                      style={{ color: project.accent }}
                    >
                      {project.category}
                    </span>
                    <motion.div
                      className="w-10 h-10 rounded-xl glass-premium flex items-center justify-center"
                      animate={{ rotate: active ? 45 : 0, y: active ? -1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(255,255,255,0.68)" }}>
                      {project.year}
                    </p>
                    <h3 className="font-bold text-[22px] leading-tight mb-2">{project.title}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.84)" }}>
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] glass-premium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm cursor-pointer glass-premium neuro-soft"
            style={{ color: "#c000ff" }}
            whileHover={{ y: -2, boxShadow: "0 14px 36px rgba(192,0,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ArrowUpRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
