import Footer from "@/Landing/Footer";
import Navigation from "@/Landing/Navigation";
import React from "react";
import Link from "next/link";
import CTASection from "@/Landing/Contact";
import solutionsData from "@/data/data.json";

const page = () => {
  const solutions = [
    {
      name: "Prefabricated Containerised Waste water treatment plants",
      path: "/solutions/wastewater-treatment",
      description:
        "Complete containerized wastewater treatment solutions designed for easy installation and efficient operation. Our prefabricated plants offer reliable treatment with minimal maintenance requirements.",
      icon: "🏭",
    },
    {
      name: "Prefabricated Effluent Treatment Plant",
      path: "/solutions/effluent-treatment",
      description:
        "Advanced effluent treatment systems that ensure compliance with environmental regulations. Compact, efficient, and designed for industrial applications.",
      icon: "🌊",
    },
    {
      name: "Packaged Water Treatment Plant",
      path: "/solutions/water-treatment",
      description:
        "Comprehensive water treatment solutions packaged for quick deployment. Suitable for various applications from municipal to industrial water treatment needs.",
      icon: "💧",
    },
    {
      name: "Advanced Filtration and Treatment",
      path: "/solutions/advanced-filtration-and-treatment",
      description:
        "Specialized water treatment components including filtration systems, clarifiers, softeners, and chemical dosing systems for customized treatment solutions.",
      icon: "⚙️",
    },
    {
      name: "Sanitation Solutions",
      path: "/solutions/sanitation",
      description:
        "Eco-friendly sanitation solutions including bio-digesters and bio-toilets that provide sustainable waste management for various applications.",
      icon: "🌱",
    },
    {
      name: "Hydration Monitoring Technology",
      path: "/solutions/hydration-monitoring",
      description:
        "Advanced monitoring systems that track and optimize water usage and hydration levels with real-time data analytics and intelligent controls.",
      icon: "📊",
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Complete Water Treatment Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From prefabricated treatment plants to advanced monitoring
              systems, we provide end-to-end solutions for all your water
              treatment needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
