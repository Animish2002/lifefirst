import CaseStudies from "@/Landing/CaseStudies";
import CTASection from "@/Landing/Contact";
import Footer from "@/Landing/Footer";
import Gallery from "@/Landing/Gallery";

import HeroSection from "@/Landing/HeroSection";
import Navigation from "@/Landing/Navigation";
import ProjectsMarquee from "@/Landing/ProjectsMarquee";
import SolutionsSection from "@/Landing/SolutionsSection";
import StatsSection from "@/Landing/StatsSection";

import { WhyChooseUs } from "@/Landing/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <WhyChooseUs />
      <ProjectsMarquee />
      <CaseStudies />
      <Gallery />
      <CTASection />
      <Footer />
    </div>
  );
}
