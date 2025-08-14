import AboutSection from "@/Landing/AboutUs";
import CTASection from "@/Landing/Contact";
import Footer from "@/Landing/Footer";

import HeroSection from "@/Landing/HeroSection";
import Navigation from "@/Landing/Navigation";
import ProjectsMarquee from "@/Landing/ProjectsMarquee";
import SolutionsSection from "@/Landing/SolutionsSection";
import { StatsSection } from "@/Landing/StatsSection";
import { ServicesSection } from "@/Landing/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <ServicesSection />
      <ProjectsMarquee />
      <CTASection />
      <Footer />
    </div>
  );
}
