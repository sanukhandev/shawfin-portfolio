"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

const floatingElements = [
  { emoji: "✦", size: 28, x: "15%", y: "25%", delay: 0, duration: 6, xMul: 0.3, yMul: 0.2 },
  { emoji: "◈", size: 20, x: "80%", y: "20%", delay: 0.5, duration: 8, xMul: -0.4, yMul: 0.3 },
  { emoji: "⬡", size: 24, x: "10%", y: "65%", delay: 1, duration: 7, xMul: 0.25, yMul: -0.3 },
  { emoji: "✦", size: 16, x: "85%", y: "70%", delay: 1.5, duration: 5, xMul: -0.35, yMul: -0.2 },
  { emoji: "◉", size: 18, x: "70%", y: "45%", delay: 0.8, duration: 9, xMul: 0.4, yMul: 0.25 },
  { emoji: "⬟", size: 22, x: "25%", y: "80%", delay: 0.3, duration: 6.5, xMul: -0.3, yMul: -0.35 },
];

const roleKeywords = ["Creative Designer", "Art Director", "Visual Storyteller"];

function FloatingEl({
  el,
  parallaxX,
  parallaxY,
}: {
  el: (typeof floatingElements)[number];
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
}) {
  const x = useTransform(parallaxX, (v) => v * el.xMul);
  const y = useTransform(parallaxY, (v) => v * el.yMul);

  return (
    <motion.div
      className="absolute select-none"
      style={{ left: el.x, top: el.y, fontSize: el.size, color: "rgba(192,0,255,0.24)", x, y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.55, 0.25, 0.55], scale: 1, y: ["0px", "-10px", "0px"] }}
      transition={{
        duration: el.duration,
        delay: el.delay,
        repeat: Infinity,
        ease: "easeInOut",
        opacity: { duration: 2, delay: el.delay },
        scale: { duration: 0.6, delay: el.delay },
      }}
    >
      {el.emoji}
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const [keywordIndex, setKeywordIndex] = useState(0);
  const [displayedKeyword, setDisplayedKeyword] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  const springConfig = { damping: 25, stiffness: 60 };
  const parallaxX = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), springConfig);
  const parallaxY = useSpring(useTransform(mouseY, [0, 1], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  useEffect(() => {
    const currentKeyword = roleKeywords[keywordIndex];
    let timeoutMs = phase === "typing" ? 85 : 45;

    if (phase === "typing" && displayedKeyword === currentKeyword) {
      timeoutMs = 950;
    }

    if (phase === "deleting" && displayedKeyword.length === 0) {
      timeoutMs = 240;
    }

    const timeoutId = window.setTimeout(() => {
      if (phase === "typing") {
        if (displayedKeyword === currentKeyword) {
          setPhase("deleting");
          return;
        }
        setDisplayedKeyword(currentKeyword.slice(0, displayedKeyword.length + 1));
        return;
      }

      if (displayedKeyword.length === 0) {
        setKeywordIndex((prev) => (prev + 1) % roleKeywords.length);
        setPhase("typing");
        return;
      }

      setDisplayedKeyword(currentKeyword.slice(0, displayedKeyword.length - 1));
    }, timeoutMs);

    return () => window.clearTimeout(timeoutId);
  }, [displayedKeyword, keywordIndex, phase]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--background)" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute ambient-orb"
          style={{
            width: 620,
            height: 620,
            top: "-12%",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle, rgba(192,0,255,0.14) 0%, rgba(123,0,212,0.06) 40%, transparent 72%)",
            x: parallaxX,
            y: parallaxY,
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {floatingElements.map((el, i) => (
          <FloatingEl key={i} el={el} parallaxX={parallaxX} parallaxY={parallaxY} />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full glass-premium"
            style={{ color: "#c000ff" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c000ff] animate-pulse" />
            Available for Projects 2026
          </span>
        </motion.div>

        <motion.h1
          className="mb-4 font-bold leading-none"
          style={{
            fontSize: "clamp(56px, 12vw, 140px)",
            letterSpacing: "-0.03em",
            fontFamily: "var(--font-josefin-sans), ui-sans-serif, sans-serif",
          }}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gradient-magenta">Shawfin</span>
        </motion.h1>

        <motion.div
          className="mb-6"
          style={{
            fontSize: "clamp(12px, 2vw, 16px)",
            color: "var(--muted)",
            letterSpacing: "0.2em",
            fontFamily: "var(--font-ubuntu), var(--font-space-grotesk), sans-serif",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <div className="h-6 sm:h-7 relative overflow-hidden">
            <p className="font-light uppercase h-6 sm:h-7 flex items-center justify-center">
              {displayedKeyword}
              <motion.span
                className="ml-1 inline-block"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
              >
                |
              </motion.span>
            </p>
          </div>
        </motion.div>

        <motion.p
          className="max-w-2xl text-center font-light leading-relaxed mb-10"
          style={{
            fontSize: "clamp(15px, 2.2vw, 20px)",
            color: "var(--muted)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          Designing visuals that help brands <span style={{ color: "var(--foreground)", fontWeight: 500 }}>scale, connect,</span> and <span style={{ color: "#c000ff", fontWeight: 500 }}>stand out.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <motion.button
            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-sm overflow-hidden cursor-pointer gradient-sweep"
            style={{
              background: "linear-gradient(135deg, #c000ff 0%, #7b2dff 100%)",
              boxShadow: "0 0 30px rgba(192,0,255,0.26)",
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 46px rgba(192,0,255,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>View Projects</span>
            <ExternalLink size={15} />
          </motion.button>

          <motion.button
            className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm cursor-pointer glass-premium"
            style={{ color: "var(--foreground)" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--muted)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "var(--muted)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
