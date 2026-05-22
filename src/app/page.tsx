import HeroSection from "@/components/sections/HeroSection";
import ContentsShowcase from "@/components/sections/ContentsShowcase";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="mesh-bg" />
        <div className="grain-overlay" />
        <div className="soft-vignette" />
      </div>

      <HeroSection />
      <ContentsShowcase />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}
