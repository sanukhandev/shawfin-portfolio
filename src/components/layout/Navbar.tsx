"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import BrandLogo from "@/components/ui/BrandLogo";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`
            max-w-7xl mx-auto flex items-center justify-between
            rounded-2xl px-6 py-3 transition-all duration-500
            ${
              scrolled
                ? "glass-premium border border-white/20 depth-card"
                : "bg-transparent"
            }
          `}
        >
          {/* Logo */}
          <motion.a
            href="#"
            className="inline-flex items-center"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <BrandLogo className="h-8 w-[150px] sm:w-[180px]" />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200 cursor-pointer"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--muted)")
                }
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200 cursor-pointer neuro-soft"
              style={{
                background: "var(--glass-surface)",
                border: "1px solid var(--card-border)",
                color: "var(--foreground)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>

            <motion.a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white cursor-pointer gradient-sweep"
              style={{
                background: "linear-gradient(135deg, #c000ff, #7b00d4)",
                boxShadow: "0 10px 35px rgba(192, 0, 255, 0.28)",
              }}
              whileHover={{ scale: 1.03, y: -1, boxShadow: "0 14px 44px rgba(192,0,255,0.36)" }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
            >
              Hire Me
            </motion.a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer"
              style={{
                background: "var(--glass-surface)",
                border: "1px solid var(--card-border)",
                color: "var(--foreground)",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(20px)" }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 rounded-2xl p-8 glass-premium"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-2xl font-semibold text-left cursor-pointer"
                    style={{ color: "var(--foreground)" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => handleNavClick("#contact")}
                  className="mt-4 py-4 rounded-xl text-white font-semibold cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #c000ff, #7b00d4)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Hire Me
                </motion.button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
