"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const processSteps = [
  { number: "01", title: "Discover", desc: "Deep research into brand, audience, and market landscape." },
  { number: "02", title: "Conceptualize", desc: "Craft unique concepts grounded in strategic thinking." },
  { number: "03", title: "Design", desc: "Build immersive visual systems with intentional craft." },
  { number: "04", title: "Refine", desc: "Iterate until every detail is precisely right." },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-black leading-none tracking-tighter"
          style={{
            fontSize: "clamp(90px, 16vw, 220px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(192,0,255,0.08)",
          }}
        >
          CREATIVE
        </span>
      </div>

      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(192,0,255,0.06) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — portrait placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Portrait frame */}
            <div className="relative aspect-[3/4] max-w-[420px] mx-auto">
              {/* Decorative border */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-30"
                style={{
                  background: "linear-gradient(135deg, #c000ff, transparent, #7b00d4)",
                  padding: "1px",
                }}
              />
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0d0d0d 0%, #1a0020 50%, #0d0d0d 100%)",
                  border: "1px solid rgba(192,0,255,0.15)",
                  boxShadow: "0 18px 55px rgba(15, 10, 24, 0.28)",
                }}
              >
                {/* Placeholder portrait visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                  {/* Silhouette shape */}
                  <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, rgba(192,0,255,0.3), rgba(123,0,212,0.2))",
                      boxShadow: "0 0 60px rgba(192,0,255,0.3)",
                    }}
                  />
                  <div
                    className="absolute top-[45%] left-1/2 -translate-x-1/2 w-36 h-44 rounded-t-full"
                    style={{
                      background: "linear-gradient(180deg, rgba(192,0,255,0.2), rgba(123,0,212,0.1))",
                    }}
                  />
                  {/* Name overlay */}
                  <div className="relative z-10 text-center">
                    <p
                      className="font-black text-4xl text-gradient-magenta"
                    >
                      Shawfin
                    </p>
                    <p className="text-xs tracking-widest uppercase mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                      Creative Designer
                    </p>
                  </div>
                </div>

                {/* Ambient glow inside */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 30%, rgba(192,0,255,0.1) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating accent badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-5 py-3 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #c000ff, #7b00d4)",
                  boxShadow: "0 10px 40px rgba(192,0,255,0.4)",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-white font-black text-xl">5+</p>
                <p className="text-white/80 text-xs">Years Crafting</p>
              </motion.div>

              {/* Corner decoration */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 rounded-full"
                style={{
                  background: "rgba(192,0,255,0.4)",
                  boxShadow: "0 0 20px rgba(192,0,255,0.6)",
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "#c000ff" }}
            >
              About Me
            </p>

            <h2
              className="font-black leading-tight mb-8"
              style={{
                fontSize: "clamp(32px, 4vw, 54px)",
                color: "var(--foreground)",
              }}
            >
              Crafting Visual
              <br />
              <span className="text-gradient-magenta">Experiences</span>
              <br />
              That Resonate
            </h2>

            <p
              className="font-light leading-relaxed mb-8 text-lg"
              style={{ color: "var(--muted)" }}
            >
              Shawfin is a multidisciplinary creative designer focused on crafting
              visually immersive digital experiences, branding systems, packaging
              concepts, and motion-driven storytelling for modern brands.
            </p>

            <p
              className="font-light leading-relaxed mb-10"
              style={{ color: "var(--muted)" }}
            >
              My philosophy: every pixel has purpose, every design tells a story.
              I bridge the gap between strategy and aesthetics — ensuring that
              beauty serves function and function serves business.
            </p>

            {/* Process steps */}
            <div className="grid grid-cols-2 gap-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="p-4 rounded-2xl glass-premium neuro-soft"
                  style={{
                    border: "1px solid var(--card-border)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  whileHover={{
                    borderColor: "rgba(192,0,255,0.3)",
                    boxShadow: "0 0 20px rgba(192,0,255,0.1)",
                  }}
                >
                  <p
                    className="font-black text-2xl mb-1"
                    style={{ color: "#c000ff" }}
                  >
                    {step.number}
                  </p>
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>
                    {step.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
