import AboutSection from "@/Landing/AboutUs";
import CTASection from "@/Landing/Contact";
import Footer from "@/Landing/Footer";

import HeroSection from "@/Landing/HeroSection";
import Navigation from "@/Landing/Navigation";
import SolutionsSection from "@/Landing/SolutionsSection";
import { StatsSection } from "@/Landing/StatsSection";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SolutionsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
