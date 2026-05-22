"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  {
    id: "design",
    label: "Design",
    skills: [
      { name: "Branding", icon: "◈", level: "Expert" },
      { name: "UI/UX Design", icon: "◉", level: "Expert" },
      { name: "Typography", icon: "Aa", level: "Expert" },
      { name: "Packaging", icon: "⬡", level: "Expert" },
    ],
  },
  {
    id: "motion",
    label: "Motion + Strategy",
    skills: [
      { name: "Motion Graphics", icon: "✦", level: "Advanced" },
      { name: "Visual Storytelling", icon: "◌", level: "Expert" },
      { name: "Creative Direction", icon: "⬟", level: "Expert" },
      { name: "Brand Strategy", icon: "◎", level: "Advanced" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      { name: "Figma", icon: "F", level: "Expert" },
      { name: "Photoshop", icon: "Ps", level: "Expert" },
      { name: "Illustrator", icon: "Ai", level: "Expert" },
      { name: "After Effects", icon: "Ae", level: "Advanced" },
      { name: "Blender", icon: "B", level: "Intermediate" },
      { name: "Framer", icon: "Fr", level: "Advanced" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Expert: "#c000ff",
  Advanced: "#9b00cc",
  Intermediate: "#7b2dff",
};

export default function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState("design");
  const { ref, isVisible } = useScrollReveal();

  const selected = skillGroups.find((group) => group.id === activeGroup) ?? skillGroups[0];

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden" style={{ background: "var(--background)" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-0 top-1/3 w-[420px] h-[420px] ambient-orb"
          style={{ background: "radial-gradient(circle, rgba(192,0,255,0.1) 0%, transparent 68%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-14 text-center">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "#c000ff" }}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Expertise
          </motion.p>
          <motion.h2
            className="font-black leading-[0.95]"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", color: "var(--foreground)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Capability
            <br />
            <span className="text-gradient-magenta">Cloud</span>
          </motion.h2>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] cursor-pointer transition-all duration-300"
              style={{
                color: activeGroup === group.id ? "white" : "var(--muted)",
                background:
                  activeGroup === group.id
                    ? "linear-gradient(135deg, #c000ff, #7b2dff)"
                    : "var(--glass-surface)",
                border:
                  activeGroup === group.id
                    ? "1px solid transparent"
                    : "1px solid var(--card-border)",
                boxShadow: activeGroup === group.id ? "0 12px 34px rgba(192,0,255,0.22)" : "none",
              }}
            >
              {group.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto rounded-[38px] p-6 sm:p-10 glass-premium depth-card"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {selected.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="group flex items-center gap-3 px-4 sm:px-5 py-3 rounded-2xl cursor-default"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  border: "1px solid rgba(255,255,255,0.55)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.03, boxShadow: `0 14px 30px ${levelColors[skill.level]}25` }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold"
                  style={{
                    background: `${levelColors[skill.level]}1f`,
                    color: levelColors[skill.level],
                    border: `1px solid ${levelColors[skill.level]}44`,
                  }}
                >
                  {skill.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>
                    {skill.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em]" style={{ color: levelColors[skill.level] }}>
                    {skill.level}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
