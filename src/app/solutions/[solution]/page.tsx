import { notFound } from "next/navigation";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import solutionsData from "@/data/data.json"; // Adjust path as needed

// TypeScript interface for solution data
interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  infoTitle: string;
  infoContent: string;
  ctaText: string;
}

interface PageProps {
  params: {
    solution: string;
  };
}

// Main Solution Page Component
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
          className="relative h-96 bg-cover bg-center rounded-b-3xl overflow-hidden shadow-xl mt-36"
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
          <div className="grid lg:grid-cols-2 gap-4 items-start">
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
                  <p className="text-gray-600 leading-relaxed text-md font-medium">
                    {solution.infoContent}
                  </p>

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

            {/* Contact Form */}
            <div className="group max-w-7xl mx-auto relative overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 w-full md:w-[35rem] h-full md:h-[90vh]">
              <div className="relative p-4 md:p-10">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                    Contact Us
                  </h2>
                  <p className="text-gray-600 font-sm">
                    Let&apos;s discuss your water treatment needs
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 ">
                    <div className="group/input">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within/input:text-blue-600 transition-colors"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          className="w-full py-2 p-2 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="group/input">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within/input:text-blue-600 transition-colors"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john.doe@example.com"
                          className="w-full py-2 p-2 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="group/input">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within/input:text-blue-600 transition-colors"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="(+91) 123-456-7890"
                          className="w-full py-2 p-2 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="group/input">
                      <label
                        htmlFor="webite"
                        className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within/input:text-blue-600 transition-colors"
                      >
                        Website Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="website"
                          name="website"
                          placeholder="www.example.com"
                          className="w-full py-2 p-2 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400 bg-gray-50/50 focus:bg-white"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      name="service"
                      id="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="water-treatment">
                        Water Treatment Systems
                      </option>
                      <option value="consultation">Free Consultation</option>
                      <option value="maintenance">Maintenance Services</option>
                      <option value="site-assessment">Site Assessment</option>
                    </select>
                  </div>
                  <div className="group/input">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within/input:text-blue-600 transition-colors"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400 hover:border-gray-400 resize-none bg-gray-50/50 focus:bg-white"
                      ></textarea>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-focus-within/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group/btn relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                      <span className="relative flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <svg
                          className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
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
