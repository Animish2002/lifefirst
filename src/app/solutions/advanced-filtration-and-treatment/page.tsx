import Footer from "@/Landing/Footer";
import Navigation from "@/Landing/Navigation";
import React from "react";
import Link from "next/link";
import CTASection from "@/Landing/Contact";


const page = () => {
  const solutions = [
    {
      name: "Ultrafiltration Systems (UF)",
      path: "/solutions/ultrafiltration",
      description:
        "Advanced membrane filtration technology that removes suspended solids, bacteria, and viruses from water. Ideal for pre-treatment in RO systems and producing high-quality filtered water.",
      icon: "🔬",
    },
    {
      name: "Reverse Osmosis Systems (RO)",
      path: "/solutions/reverse-osmosis",
      description:
        "High-efficiency water purification systems that remove dissolved salts, chemicals, and contaminants. Perfect for producing pure water for industrial and drinking applications.",
      icon: "💎",
    },
    {
      name: "Pressure Sand Filters (PSF)",
      path: "/solutions/pressure-sand-filters",
      description:
        "Robust filtration systems using graded sand media to remove turbidity, suspended particles, and sediments from water. Essential first-stage treatment for clear water production.",
      icon: "🏔️",
    },
    {
      name: "Activated Carbon Filters (ACF)",
      path: "/solutions/activated-carbon-filters",
      description:
        "Highly effective filtration systems that remove chlorine, organic compounds, odors, and taste from water using activated carbon media for superior water quality.",
      icon: "⚫",
    },
    {
      name: "Lamella Clarifier",
      path: "/solutions/lamella-clarifier",
      description:
        "High-rate sedimentation systems using inclined plates to maximize settling area. Efficiently removes suspended solids and turbidity in a compact footprint.",
      icon: "📐",
    },
    {
      name: "Clarifier Mechanism",
      path: "/solutions/clarifier-mechanism",
      description:
        "Automated mechanical systems for sludge removal and water clarification. Features rotating scrapers and skimmers for continuous operation and optimal performance.",
      icon: "⚙️",
    },
    {
      name: "Tube Settlers",
      path: "/solutions/tube-settlers",
      description:
        "Modular settling media that increases the effective settling area of clarifiers. Improves sedimentation efficiency and reduces the required tank size significantly.",
      icon: "🔧",
    },
    {
      name: "Water Softeners",
      path: "/solutions/water-softeners",
      description:
        "Ion exchange systems that remove calcium and magnesium ions from hard water. Prevents scale formation and extends equipment life while improving water quality.",
      icon: "💧",
    },
    {
      name: "Demineralization Systems (DM)",
      path: "/solutions/demineralization",
      description:
        "Complete ion removal systems producing ultra-pure water for industrial processes. Uses mixed bed or separate bed ion exchange technology for maximum purity.",
      icon: "🧪",
    },
    {
      name: "Chemical Dosing Systems",
      path: "/solutions/chemical-dosing",
      description:
        "Precision chemical injection systems for water treatment processes. Automated dosing pumps and controllers ensure accurate chemical addition for optimal treatment results.",
      icon: "💉",
    },
  ];

  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <section className="relative text-white py-20 px-4 overflow-hidden mt-34 md:mt-32 h-[50vh]">
        {/* Background Image */}

        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1755351636/water-treatment_yagiov.jpg"
            alt="Water treatment facility"
            className="w-full h-[50vh] "
            style={{
              objectFit: "cover",
              background:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our Solutions
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Advanced Filtration and Treatment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From prefabricated treatment plants to advanced monitoring
              systems, we provide end-to-end solutions for all your water
              treatment needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-full flex flex-col"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight min-h-[3.5rem] flex items-center">
                    {solution.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.path}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group-hover:translate-x-1 transform mt-auto"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default page;
