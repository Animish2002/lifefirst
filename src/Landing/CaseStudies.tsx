"use client";
import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Mumbai Metropolitan Water Treatment Overhaul",
      subtitle: "Transforming Municipal Water Infrastructure",
      category: "Municipal",
      location: "Mumbai, Maharashtra",
      duration: "18 months",
      client: "Mumbai Municipal Corporation",
      year: "2023-2024",
      heroImage:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=600&fit=crop",
      challenge:
        "The aging water treatment facility serving 2.5 million residents was facing severe capacity constraints and outdated technology, resulting in inconsistent water quality and frequent supply disruptions.",
      solution:
        "Implemented a state-of-the-art membrane bioreactor (MBR) system with advanced automation, upgraded chemical dosing systems, and installed real-time monitoring infrastructure.",
      results: [
        { metric: "Water Quality Improvement", value: "99.8%" },
        { metric: "Processing Capacity Increase", value: "150%" },
        { metric: "Energy Efficiency Gain", value: "35%" },
        { metric: "Population Served", value: "2.5M" },
      ],
      technologies: [
        "Membrane Bioreactor",
        "SCADA Systems",
        "UV Disinfection",
        "Automated Controls",
      ],
    },
    {
      id: 2,
      title: "Textile Industry Zero Liquid Discharge",
      subtitle: "Pioneering Sustainable Manufacturing",
      category: "Industrial",
      location: "Pune, Maharashtra",
      duration: "12 months",
      client: "Textile Manufacturing Group",
      year: "2023",
      heroImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
      challenge:
        "Major textile manufacturer needed to achieve zero liquid discharge while maintaining production efficiency and controlling costs in compliance with new environmental regulations.",
      solution:
        "Designed and implemented a multi-stage treatment system combining biological treatment, advanced oxidation, reverse osmosis, and evaporation technology.",
      results: [
        { metric: "Zero Discharge Achievement", value: "100%" },
        { metric: "Chemical Usage Reduction", value: "60%" },
        { metric: "Production Efficiency", value: "95%" },
        { metric: "Environmental Rating", value: "A+" },
      ],
      technologies: [
        "Biological Treatment",
        "Reverse Osmosis",
        "Evaporation Systems",
        "Advanced Oxidation",
      ],
    },
    {
      id: 3,
      title: "Pharmaceutical Wastewater Treatment Excellence",
      subtitle: "Advanced Treatment for Complex Waste Streams",
      category: "Pharmaceutical",
      location: "Aurangabad, Maharashtra",
      duration: "15 months",
      client: "Leading Pharma Company",
      year: "2022-2023",
      heroImage:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=600&fit=crop",
      challenge:
        "Pharmaceutical facility required specialized treatment for complex chemical waste streams containing antibiotics, solvents, and high-strength organic compounds.",
      solution:
        "Implemented advanced treatment combining physicochemical treatment, specialized biological systems, and tertiary polishing for pharmaceutical-grade effluent treatment.",
      results: [
        { metric: "Contaminant Removal", value: "99.9%" },
        { metric: "Regulatory Compliance", value: "100%" },
        { metric: "Treatment Efficiency", value: "98%" },
        { metric: "Operational Savings", value: "45%" },
      ],
      technologies: [
        "Advanced Oxidation",
        "Specialized Bioreactors",
        "Activated Carbon",
        "Membrane Filtration",
      ],
    },
  ];

  const currentCase = caseStudies[activeCase];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setActiveCase(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length
    );
  };

  return (
    <section className="px-6 bg-white py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we transform wastewater challenges into sustainable
            solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Case Study Card */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 max-w-6xl mx-auto">
            {/* Hero Image */}
            <div className="relative h-[20rem]">
              <img
                src={currentCase.heroImage}
                alt={currentCase.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-4">
                  {currentCase.category} • {currentCase.year}
                </div>
                <h3 className="text-3xl font-bold mb-2">{currentCase.title}</h3>
                <p className="text-lg text-white/90">{currentCase.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-8">
              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">
                    Challenge
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentCase.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">
                    Solution
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentCase.solution}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Positioned on sides */}
          <button
            onClick={prevCase}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 shadow-lg border border-gray-200 rounded-full md:p-4 p-1.5 transition-all duration-300 hover:shadow-xl z-10 group"
            aria-label="Previous case study"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
          </button>

          <button
            onClick={nextCase}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 shadow-lg border border-gray-200 rounded-full md:p-4 p-1.5 transition-all duration-300 hover:shadow-xl z-10 group"
            aria-label="Next case study"
          >
            <ArrowRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeCase
                  ? "bg-gray-900 w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>

        {/* Case Study Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">
            {activeCase + 1} of {caseStudies.length}
          </span>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let&apos;s discuss how we can deliver measurable results for your
              wastewater challenges
            </p>
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
