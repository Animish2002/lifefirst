"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Leaf, Shield, Zap, ArrowRight } from "lucide-react";

const SolutionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    {
      id: "wastewater",
      title: "Wastewater Treatment Plants",
      icon: <Droplets className="w-8 h-8" />,
      description:
        "Advanced wastewater treatment solutions for industrial and municipal applications",

      imageurl:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755164884/wastewater_treatment_plant_yvyzlo.jpg",
      features: ["Eco-friendly", "Energy Efficient", "Low Maintenance"],
    },
    {
      id: "water",
      title: "Water Treatment Plants",
      icon: <Shield className="w-8 h-8" />,
      description:
        "Comprehensive water purification systems for clean and safe drinking water",

      imageurl:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755164884/wastewater_treatment_plant_yvyzlo.jpg",
      features: ["High Quality", "Reliable", "Cost Effective"],
    },
    {
      id: "sanitation",
      title: "Sanitation Solutions",
      icon: <Leaf className="w-8 h-8" />,
      description:
        "Sustainable sanitation systems for environmental protection",

      imageurl:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755164884/wastewater_treatment_plant_yvyzlo.jpg",
      features: ["Sustainable", "Eco-friendly", "Zero Waste"],
    },
    {
      id: "hydration",
      title: "Hydration Monitoring",
      icon: <Zap className="w-8 h-8" />,
      description:
        "Smart monitoring systems for real-time water quality control",

      imageurl:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755164884/wastewater_treatment_plant_yvyzlo.jpg",
      features: ["Smart Technology", "Real-time", "Automated"],
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-900">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive water treatment technologies designed for maximum
            efficiency and environmental sustainability. From industrial
            wastewater to drinking water purification.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 px-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className={`group relative bg-gray-100 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
              style={{
                backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${solution.imageurl})
  `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Dark overlay for better text readability */}

              <div className="relative p-4 h-[45vh] flex flex-col z-10">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors drop-shadow-lg">
                  {solution.title}
                </h3>
                <p className="text-white text-xs mb-4 leading-relaxed drop-shadow-md opacity-90">
                  {solution.description}
                </p>

                {/* Learn More Button */}
                <motion.button
                  className={`mx-auto absolute bottom-4 left-1/2 right-1/2 px-6 bg-zinc-100 bg-opacity-90 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:bg-opacity-400 backdrop-blur-sm`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm">
              Our engineering team can design and implement tailored water
              treatment solutions to meet your specific requirements and
              challenges.
            </p>
            <motion.button
              className="bg-white text-blue-600 text-sm px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Engineers
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
