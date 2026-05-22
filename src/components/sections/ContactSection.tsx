"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import BrandLogo from "@/components/ui/BrandLogo";
import { Send, Mail, Instagram, Linkedin, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:hello@shawfin.design", handle: "hello@shawfin.design" },
  { icon: Instagram, label: "Instagram", href: "#", handle: "@shawfin.design" },
  { icon: Linkedin, label: "LinkedIn", href: "#", handle: "Shawfin" },
  { icon: ExternalLink, label: "Behance", href: "#", handle: "behance.net/shawfin" },
  { icon: ExternalLink, label: "Dribbble", href: "#", handle: "dribbble.com/shawfin" },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", project: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden" style={{ background: "var(--background)" }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[820px] h-[420px] ambient-orb"
          style={{ background: "radial-gradient(ellipse, rgba(192,0,255,0.14) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-20 max-w-4xl">
          <motion.p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "#c000ff" }}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Let&apos;s Connect
          </motion.p>
          <motion.h2
            className="font-black leading-[0.9]"
            style={{ fontSize: "clamp(46px, 8vw, 108px)", color: "var(--foreground)" }}
            initial={{ opacity: 0, y: 36 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Let&apos;s create
            <br />
            <span className="text-gradient-magenta">something unforgettable</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -28 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: "var(--muted)" }}>
              Open for freelance commissions, launch collaborations, and long-form brand partnerships with ambitious teams.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-premium neuro-soft transition-all duration-300"
                  style={{ textDecoration: "none" }}
                  initial={{ opacity: 0, x: -14 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.24 + i * 0.08 }}
                  whileHover={{ x: 5, boxShadow: "0 16px 34px rgba(192,0,255,0.14)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(192,0,255,0.12)",
                      border: "1px solid rgba(192,0,255,0.28)",
                    }}
                  >
                    <link.icon size={16} style={{ color: "#c000ff" }} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
                      {link.label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                      {link.handle}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.aside>

          <motion.div
            className="rounded-[34px] p-6 sm:p-8 glass-premium depth-card"
            initial={{ opacity: 0, x: 28 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.22 }}
          >
            {sent ? (
              <motion.div
                className="h-full min-h-[420px] flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #c000ff, #7b2dff)" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                >
                  <Send size={30} className="text-white" />
                </motion.div>
                <h3 className="font-black text-3xl mb-3" style={{ color: "var(--foreground)" }}>
                  Message Sent
                </h3>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Thanks for reaching out. Response turnaround is usually under 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--muted)" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all duration-300 placeholder:text-[var(--muted)]"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--muted)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    placeholder="jane@company.com"
                    className="w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all duration-300 placeholder:text-[var(--muted)]"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--muted)" }}>
                    Project Type
                  </label>
                  <select
                    value={formState.project}
                    onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all duration-300 cursor-pointer"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--card-border)",
                      color: formState.project ? "var(--foreground)" : "var(--muted)",
                    }}
                  >
                    <option value="">Select a service...</option>
                    <option value="branding">Brand Identity</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="packaging">Packaging Design</option>
                    <option value="motion">Motion Graphics</option>
                    <option value="campaign">Campaign Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] mb-2" style={{ color: "var(--muted)" }}>
                    Your Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all duration-300 resize-none placeholder:text-[var(--muted)]"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--card-border)",
                      color: "var(--foreground)",
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold text-sm text-white cursor-pointer disabled:opacity-70 gradient-sweep"
                  style={{
                    background: "linear-gradient(135deg, #c000ff 0%, #7b2dff 100%)",
                    boxShadow: "0 16px 42px rgba(192,0,255,0.3)",
                  }}
                  whileHover={{ y: -1, boxShadow: "0 20px 50px rgba(192,0,255,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sending ? "Sending..." : "Send Message"}
                  {!sending && <Send size={15} />}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          className="mt-24 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--card-border)" }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BrandLogo className="h-8 w-[150px] sm:w-[180px]" />
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © 2026 Shawfin. Designed with cinematic restraint.
          </p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Creative Designer and Art Director
          </p>
        </motion.div>
      </div>
    </section>
  );
}
