"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Leaf,
  Shield,
  Zap,
  ChevronRight,
  Filter,
  Recycle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const SolutionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    {
      id: "wastewater",
      title: "Wastewater Treatment Plants",
      icon: <Droplets className="w-8 h-8" />,
      description:
        "Advanced wastewater treatment solutions for industrial and municipal applications",
      items: [
        "Prefabricated Containerized WWTP",
        "Membrane Bio-Reactor (MBR)",
        "Prefabricated Effluent Treatment Plant (ETP)",
        "Ultrafiltration Systems (UF)",
        "Reverse Osmosis (RO) Systems",
      ],
      features: ["Eco-friendly", "Energy Efficient", "Low Maintenance"],
    },
    {
      id: "water",
      title: "Water Treatment Plants",
      icon: <Shield className="w-8 h-8" />,
      description:
        "Comprehensive water purification systems for clean and safe drinking water",
      items: [
        "Pressure Sand Filters (PSF)",
        "Activated Carbon Filters (ACF)",
        "Lamella Clarifier",
        "Dissolved Air Flotation",
        "Water Softeners",
        "Demineralization Systems (DM)",
      ],
      features: ["High Quality", "Reliable", "Cost Effective"],
    },
    {
      id: "sanitation",
      title: "Sanitation Solutions",
      icon: <Leaf className="w-8 h-8" />,
      description:
        "Sustainable sanitation systems for environmental protection",
      items: [
        "Bio-Digesters",
        "Bio-Toilets",
        "Waste Management Systems",
        "Composting Solutions",
      ],
      features: ["Sustainable", "Eco-friendly", "Zero Waste"],
    },
    {
      id: "hydration",
      title: "Hydration Monitoring",
      icon: <Zap className="w-8 h-8" />,
      description:
        "Smart monitoring systems for real-time water quality control",
      items: [
        "Inflow Hydration Monitoring System",
        "Water Quality Sensors",
        "Real-time Analytics",
        "Automated Control Systems",
      ],
      features: ["Smart Technology", "Real-time", "Automated"],
    },
    // {
    //   id: "chemical",
    //   title: "Chemical Dosing Systems",
    //   icon: <Filter className="w-8 h-8" />,
    //   description:
    //     "Precision chemical dosing for optimal water treatment efficiency",
    //   items: [
    //     "5 MLD Wastewater Treatment Plant",
    //     "5 MLD Water Treatment Plant",
    //     "20 KLD Leachate Treatment Plant",
    //     "Automated Dosing Controllers",
    //   ],
    //   features: ["Precise Control", "Automated", "Efficient"],
    // },
    // {
    //   id: "specialized",
    //   title: "Specialized Systems",
    //   icon: <Recycle className="w-8 h-8" />,
    //   description:
    //     "Custom engineered solutions for unique water treatment challenges",
    //   items: [
    //     "Custom Water Treatment Plants",
    //     "Industrial Process Water",
    //     "Zero Liquid Discharge Systems",
    //     "Specialized Filtration",
    //   ],
    //   features: ["Custom Design", "Innovative", "Scalable"],
    // },
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
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive water treatment technologies designed for maximum
            efficiency and environmental sustainability. From industrial
            wastewater to drinking water purification.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className={`group relative bg-gray-100 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
            >
              <div className="relative p-4 h-full flex flex-col">
                {/* Icon and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 bg-blue-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {solution.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 font-medium">
                      {solution.items.length} Solutions
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {solution.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="inline-flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      <CheckCircle className="w-3 h-3 mr-1 text-blue-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Solutions List */}
                <div className="space-y-2 mb-6 flex-1">
                  {solution.items.slice(0, 4).map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                  {solution.items.length > 4 && (
                    <div className="text-gray-500 text-xs italic pl-6">
                      +{solution.items.length - 4} more solutions
                    </div>
                  )}
                </div>

                {/* Learn More Button */}
                <motion.button
                  className={`w-full bg-blue-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:bg-blue-700`}
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
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our engineering team can design and implement tailored water
              treatment solutions to meet your specific requirements and
              challenges.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50"
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
