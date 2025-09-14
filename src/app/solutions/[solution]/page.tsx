import { notFound } from "next/navigation";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import solutionsData from "@/data/data.json";
import SolutionPageClient from "@/Landing/SolutionPageClient";

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
  ctaText: string;
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans antialiased">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <div
          className="relative h-[30vh] bg-cover bg-center overflow-hidden shadow-xl md:mt-24 mt-34"
          style={{ backgroundImage: `url(${solution.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center p-8">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                {solution.title}
              </h1>
              <p className="text-xl md:text-2xl font-light drop-shadow-md">
                {solution.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 py-16 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-4 items-start">
            {/* Info Section */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="relative p-10">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      {solution.infoTitle}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {typeof solution.infoContent === "string" ? (
                    <p className="text-gray-600 leading-relaxed text-md font-medium">
                      {solution.infoContent}
                    </p>
                  ) : (
                    <>
                      {solution.infoContent.paragraph && (
                        <p className="text-gray-600 leading-relaxed text-md font-medium">
                          {solution.infoContent.paragraph}
                        </p>
                      )}
                      {solution.infoContent.points && (
                        <ul className="list-disc list-inside space-y-2 text-gray-600 text-md font-medium">
                          {solution.infoContent.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}

                  {/* Enhanced CTA */}
                  <div className="relative overflow-hidden">
                    <div className="relative bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-indigo-500/10 rounded-2xl p-6 border border-blue-200/50 backdrop-blur-sm">
                      <div className="flex items-start space-x-4">
                        <div>
                          <p className="font-semibold text-blue-800 text-lg leading-relaxed">
                            {solution.ctaText}
                          </p>
                          <p className="text-blue-600/80 text-sm mt-2 font-sm">
                            Our experts are ready to help you find the perfect
                            solution.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
