"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ThreadBounds = { top: number; height: number };

/**
 * A delicate gold flourish that visually links the hero to the last content
 * above the footer. The dimensions are measured rather than hard-coded,
 * so the same ornament works on desktop and mobile.
 */
export default function GoldenThread() {
  const [bounds, setBounds] = useState<ThreadBounds>({ top: 0, height: 0 });
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // The line is progressively revealed, while its horizontal sweep and
  // stroke thickness contract slightly to give a scroll-linked zoom-out.
  const drawn = useTransform(scrollYProgress, [0, 0.98], [0.025, 1]);
  const zoomX = useTransform(scrollYProgress, [0, 1], [1.27, 0.82]);
  const strokeWeight = useTransform(scrollYProgress, [0, 1], [2.5, 1.55]);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ornament = overlayRef.current;
    const page = ornament?.closest(".portfolio-page");
    const hero = document.getElementById("top");
    const footer = document.getElementById("site-footer");

    if (!page || !hero || !footer) return;

    const measure = () => {
      const pageTop = page.getBoundingClientRect().top;
      // Start just inside the hero; stop above the footer divider.
      const top = Math.max(0, hero.getBoundingClientRect().bottom - pageTop - 65);
      const end = footer.getBoundingClientRect().top - pageTop - 12;
      const height = Math.max(0, end - top);

      setBounds((current) =>
        Math.abs(current.top - top) < 1 && Math.abs(current.height - height) < 1
          ? current
          : { top, height }
      );
    };

    const observer = new ResizeObserver(measure);
    observer.observe(page);
    observer.observe(hero);
    observer.observe(footer);
    window.addEventListener("resize", measure, { passive: true });
    const frameId = requestAnimationFrame(measure);

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const path = [
    "M 35 0",
    "C 84 46, 110 109, 44 166",
    "S 14 240, 78 290",
    "C 126 341, 7 388, 48 455",
    "S 110 552, 54 615",
    "C 10 674, 91 716, 74 772",
    "C 48 830, 9 874, 69 922",
    "S 102 977, 54 1000",
  ].join(" ");

  return (
    <div
      ref={overlayRef}
      className="golden-thread"
      aria-hidden="true"
      style={{
        top: bounds.top,
        height: bounds.height,
        visibility: bounds.height > 100 ? "visible" : "hidden",
      }}
    >
      <motion.svg
        viewBox="0 0 120 1000"
        preserveAspectRatio="none"
        style={{ scaleX: reducedMotion ? 1 : zoomX }}
        focusable="false"
      >
        <defs>
          <linearGradient id="shawfin-golden-thread" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CBB291" />
            <stop offset="54%" stopColor="#B78A4E" />
            <stop offset="100%" stopColor="#E0C69D" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          fill="none"
          stroke="#B78A4E"
          strokeOpacity="0.14"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{
            pathLength: reducedMotion ? 1 : drawn,
            strokeWidth: reducedMotion ? 6 : 6,
          }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="url(#shawfin-golden-thread)"
          strokeOpacity="0.91"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          style={{
            pathLength: reducedMotion ? 1 : drawn,
            strokeWidth: reducedMotion ? 1.8 : strokeWeight,
          }}
        />
      </motion.svg>
    </div>
  );
}
