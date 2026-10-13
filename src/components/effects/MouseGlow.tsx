"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function MouseGlow() {
  const [isEnabled, setIsEnabled] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  const xInner = useSpring(useTransform(mouseX, (v) => v + 120), springConfig);
  const yInner = useSpring(useTransform(mouseY, (v) => v + 120), springConfig);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reduced.matches || !finePointer.matches) return;
    setIsEnabled(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-[420px] h-[420px] rounded-full"
        style={{
          x,
          y,
          background:
            "radial-gradient(circle at center, rgba(183,138,78,0.1) 0%, rgba(148,43,43,0.05) 34%, transparent 72%)",
          mixBlendMode: "soft-light",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-[180px] h-[180px] rounded-full"
        style={{
          x: xInner,
          y: yInner,
          background: "radial-gradient(circle at center, rgba(255,255,255,0.24) 0%, transparent 70%)",
          opacity: 0.75,
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />
    </>
  );
}
