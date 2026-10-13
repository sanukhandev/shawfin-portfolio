"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const roleKeywords = ["Creative Designer", "Art Director", "Visual Storyteller"];

export default function HeroSection() {
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [displayedKeyword, setDisplayedKeyword] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const currentKeyword = roleKeywords[keywordIndex];
    const delay =
      phase === "typing" && displayedKeyword === currentKeyword
        ? 1100
        : phase === "deleting" && displayedKeyword.length === 0
          ? 270
          : phase === "typing" ? 85 : 45;

    const timeoutId = window.setTimeout(() => {
      if (phase === "typing") {
        if (displayedKeyword === currentKeyword) {
          setPhase("deleting");
        } else {
          setDisplayedKeyword(currentKeyword.slice(0, displayedKeyword.length + 1));
        }
        return;
      }
      if (displayedKeyword.length === 0) {
        setKeywordIndex((current) => (current + 1) % roleKeywords.length);
        setPhase("typing");
      } else {
        setDisplayedKeyword(currentKeyword.slice(0, displayedKeyword.length - 1));
      }
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [displayedKeyword, keywordIndex, phase]);

  return (
    <section id="top" className="editorial-hero">
      <div className="editorial-hero-noise" aria-hidden="true" />
      <div className="editorial-hero-rule" aria-hidden="true" />

      <div className="editorial-hero-layout">
        <div className="editorial-hero-content">
          <motion.div
            className="editorial-hero-status"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="editorial-status-dot" aria-hidden="true" />
            Available for Projects 2026
          </motion.div>

          <motion.h1
            className="editorial-hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Shawfin<span className="editorial-hero-period">.</span>
          </motion.h1>

          <motion.div
            className="editorial-role-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <span className="editorial-role-dash" aria-hidden="true" />
            <span className="editorial-role-type">{displayedKeyword}</span>
            <motion.span
              aria-hidden="true"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >|</motion.span>
          </motion.div>

          <motion.p
            className="editorial-hero-description"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
          >
            Designing visuals that help brands <strong>scale, connect,</strong> and <em>stand out.</em>
          </motion.p>

          <motion.div
            className="editorial-hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a className="editorial-button editorial-button-primary" href="#projects">
              View Projects <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="editorial-button editorial-button-secondary" href="#about">
              About Me <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="editorial-hero-visual"
          aria-hidden="true"
          initial={{ opacity: 0, x: 45, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="editorial-visual-backdrop" />
          <div className="editorial-visual-image" />
          <div className="editorial-visual-tint" />
          <div className="editorial-visual-border" />
          <span className="editorial-visual-index">SHAWFIN / 2026</span>
          <span className="editorial-visual-label">Creative Designer &amp; Art Director</span>
        </motion.div>
      </div>

      <div className="editorial-hero-bottom">
        <span className="editorial-bottom-label">Creative Designer &amp; Art Director</span>
        <a href="#showcase" className="editorial-scroll-cue">
          Scroll <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
