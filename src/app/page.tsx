import CTASection from "@/Landing/Contact";
import Footer from "@/Landing/Footer";
import HeroSection from "@/Landing/HeroSection";
import Navigation from "@/Landing/Navigation";
import ProjectsMarquee from "@/Landing/ProjectsMarquee";
import SolutionsSection from "@/Landing/SolutionsSection";
import StatsSection from "@/Landing/StatsSection";
import { WhyChooseUs } from "@/Landing/WhyChooseUs";
import AboutSection from "@/Landing/AboutUs";
import MeetTheTeam from "@/Landing/MeetTheTeam";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LifeFirst Concepts & Technologies Pvt. Ltd. | Water, Wastewater and Sanitation Solution Company",
  description:
    "LifeFirst Concepts & Technologies Pvt. Ltd. is a leading provider of sustainable water and wastewater treatment solutions. Offering STP, ETP, water filtration systems, and turnkey environmental technologies for industries, communities, and global clients",
  path: "/",
});

export default function Home() {
  const baseUrl = "https://www.life-first.in";

  // BreadcrumbList Schema for Home
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ],
  };

  return (
    <div>
      <JsonLd data={breadcrumbSchema} />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SolutionsSection />
      <WhyChooseUs />
      <ProjectsMarquee />
      <MeetTheTeam />
      <CTASection />
      <Footer />
    </div>
  );
}
