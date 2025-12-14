import { notFound } from "next/navigation";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import solutionsData from "@/data/data.json";
import SolutionPageClient from "@/Landing/SolutionPageClient";
import Image from "next/image";
import { Check } from "lucide-react";

interface InfoContentObject {
  paragraph?: string;
  points?: string[];
}

interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  infoTitle: string;
  infoContent: string | InfoContentObject;
  infoImage?: string; // Optional image for the info section
  ctaText: string;
  ctasubText: string;
}

interface PageProps {
  params: {
    solution: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Main Solution Page Component (Server Component)
const SolutionPage = ({ params }: PageProps) => {
  const { solution: solutionSlug } = params;

  // Find the solution data based on the slug
  const solution = solutionsData.find((s: Solution) => s.slug === solutionSlug);

  // If solution not found, show 404
  if (!solution) {
    notFound();
  }

  // Check if solution has an info image
  const hasInfoImage = Boolean(solution.infoImage);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans antialiased">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <div
          className="relative h-[33vh] bg-cover bg-center overflow-hidden shadow-xl md:mt-24 mt-25"
          style={{ backgroundImage: `url(${solution.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-8">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                {solution.title}
              </h1>
              <p className="text-md md:text-lg font-light drop-shadow-md">
                {solution.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* ====== REDESIGNED INFO / CONTENT SECTION (Version B - Check Icons) ====== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div
              className={`grid gap-12 lg:gap-16 items-start ${
                hasInfoImage
                  ? "lg:grid-cols-[1fr_0.67fr]"
                  : "lg:grid-cols-1 max-w-4xl mx-auto"
              }`}
            >
              {/* Left Column - Content */}
              <div className="space-y-8">
                {/* Section Title */}
                <div className="space-y-1">
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                    Solution Overview
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold text-gray-900 leading-tight tracking-tight">
                    {solution.infoTitle}
                  </h2>
                </div>

                {/* Content Body */}
                <div className="space-y-6">
                  {typeof solution.infoContent === "string" ? (
                    <p className="text-gray-600 leading-[1.8] text-base md:text-[17px]">
                      {solution.infoContent}
                    </p>
                  ) : (
                    <>
                      {solution.infoContent.paragraph && (
                        <p className="text-gray-600 leading-[1.8] text-base md:text-[17px]">
                          {solution.infoContent.paragraph}
                        </p>
                      )}
                      {solution.infoContent.points &&
                        solution.infoContent.points.length > 0 && (
                          <ul className="space-y-4 pt-2">
                            {solution.infoContent.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                                  <Check
                                    className="w-3 h-3 text-blue-600"
                                    strokeWidth={2.5}
                                  />
                                </span>
                                <span className="text-gray-600 leading-relaxed text-base">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                    </>
                  )}
                </div>

                {/* CTA Section - Subtle Blue Accent */}
                <div className="pt-4">
                  <div className="bg-slate-50 border-l-4 border-blue-500 rounded-r-lg p-6 md:p-8">
                    <div className="space-y-2">
                      <p className="text-gray-800 font-medium text-base md:text-lg leading-relaxed">
                        {solution.ctaText}
                      </p>
                      {solution.ctasubText && (
                        <p className="text-gray-500 text-sm md:text-base">
                          {solution.ctasubText}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Image (Conditional) */}
              {hasInfoImage && (
                <div className="lg:sticky lg:top-32">
                  <div className="relative w-full">
                    {/* Image Container - Universal aspect ratio handling */}
                    <div className="relative w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                      {/* Wrapper that constrains height but allows natural width */}
                      <div className="relative flex items-center justify-center p-4 md:p-6 min-h-[380px] max-h-[520px]">
                        <img
                          src={solution.infoImage!}
                          alt={solution.infoTitle}
                      
                          className="max-w-full w-auto h-auto object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* ====== END REDESIGNED SECTION ====== */}
      </main>
      <Footer />

      {/* Client Component for Popup */}
      <SolutionPageClient solutionTitle={solution.title} />
    </div>
  );
};

export default SolutionPage;

// Generate static params for all solutions (for static generation)
export async function generateStaticParams() {
  return solutionsData.map((solution: Solution) => ({
    solution: solution.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageProps) {
  const { solution: solutionSlug } = params;
  const solution = solutionsData.find((s: Solution) => s.slug === solutionSlug);

  if (!solution) {
    return {
      title: "Solution Not Found",
      description: "The requested solution could not be found.",
    };
  }

  return {
    title: solution.title,
    description: solution.subtitle,
    openGraph: {
      title: solution.title,
      description: solution.subtitle,
      images: [solution.heroImage],
    },
  };
}
