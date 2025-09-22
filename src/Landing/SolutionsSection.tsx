"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const SolutionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const router = useRouter();
  const solutions = [
    
    {
      id: "water",
      title: "Water Treatment",
      description:
        "Comprehensive water purification systems for clean and safe drinking water",
      imageurl:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928781/ChatGPT_Image_Aug_2_2025_at_05_22_38_PM_o2nny8.png",
      features: ["High Quality", "Reliable", "Cost Effective"],
      url: "/solutions/water-treatment",
    },
    {
      id: "wastewater",
      title: "Wastewater Treatment",
      description:
        "Advanced wastewater treatment solutions for industrial and municipal applications",
      imageurl:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755164884/wastewater_treatment_plant_yvyzlo.jpg",
      features: ["Eco-friendly", "Energy Efficient", "Low Maintenance"],
      url: "/solutions/wastewater-treatment",
    },
    {
      id: "sanitation",
      title: "Sanitation Solutions",
      description:
        "Sustainable sanitation systems for environmental protection",
      imageurl:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928781/4b2fbe85-ab2c-4bd3-8370-8a9ef6dea608_rptfls.jpg",
      features: ["Sustainable", "Eco-friendly", "Zero Waste"],
      url: "/solutions/bio-digesters",
    },
    {
      id: "hydration",
      title: "Hydration Monitoring Systems",
      description:
        "Smart monitoring systems for real-time water quality control",
      imageurl:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928782/ChatGPT_Image_Aug_2_2025_at_05_05_56_PM_mxrymk.png",
      features: ["Smart Technology", "Real-time", "Automated"],
      url: "/solutions/inflow-system",
    },
  ];

  const handleCardClick = (url: string) => {
    router.push(url); // Navigate to the URL
  };

  return (
    <motion.section
      className="py-8 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto md:px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 p-2">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative Water, Wastewater, and Sanitation Solutions for a
            sustainable future.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 px-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="group relative bg-gray-100 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer select-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(solution.url)}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 25 },
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundImage: `
    ${
      hoveredCard === solution.id
        ? `url(${solution.imageurl})`
        : `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${solution.imageurl})`
    }
  `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Subtle hover overlay */}
              <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredCard === solution.id ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative p-4 h-[40vh] md:[45vh] lg:h-[55vh] flex flex-col z-10">
                {/* Text Content with staggered animation */}
                <motion.div
                  className="flex flex-col"
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: hoveredCard === solution.id ? 0 : 1,
                    y: hoveredCard === solution.id ? -30 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                  }}
                >
                  <motion.h3
                    className="text-lg mt-6 font-semibold text-white mb-3 transition-colors drop-shadow-lg"
                    animate={{
                      y: hoveredCard === solution.id ? -10 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {solution.title}
                  </motion.h3>
                  <motion.p
                    className="text-white text-xs mb-4 leading-relaxed drop-shadow-md opacity-90"
                    animate={{
                      y: hoveredCard === solution.id ? -10 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    {solution.description}
                  </motion.p>
                </motion.div>

                {/* Enhanced Learn More Button */}
                <motion.div
                  className="mx-auto absolute bottom-4 md:left-12 md:right-12 px-4 py-3 flex items-center justify-center transition-all duration-400 cursor-pointer"
                  style={{
                    background:
                      hoveredCard === solution.id
                        ? "transparent"
                        : "rgba(255, 255, 255, 0.15)",
                    backdropFilter:
                      hoveredCard === solution.id ? "none" : "blur(8px)",
                    border:
                      hoveredCard === solution.id
                        ? "none"
                        : "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: hoveredCard === solution.id ? "0" : "0.75rem",
                    boxShadow:
                      hoveredCard === solution.id
                        ? "none"
                        : "0 8px 25px -5px rgba(0, 0, 0, 0.15)",
                  }}
                  whileHover={{
                    scale: hoveredCard === solution.id ? 1 : 1.05,
                    transition: { type: "tween", stiffness: 400, damping: 25 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {hoveredCard === solution.id ? (
                    <motion.div
                      initial={{ y: 0, rotate: 0, scale: 0.8 }}
                      animate={{
                        y: -8,
                        rotate: -45,
                        scale: 1.2,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "backOut",
                        type: "tween",
                        stiffness: 300,
                      }}
                    >
                      <ArrowRight className="w-8 h-8 text-white drop-shadow-lg rounded-3xl border-2" />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="flex items-center text-white text-sm font-medium"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      whileHover={{ x: 2 }}
                      transition={{ type: "tween", stiffness: 600 }}
                    >
                      Learn More
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ type: "tween", stiffness: 600 }}
                      >
                        <ArrowRight className="ml-2 w-4 h-4 " />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Loading indicator for hover state */}
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: hoveredCard === solution.id ? 0.7 : 0,
                    scale: hoveredCard === solution.id ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: hoveredCard === solution.id ? 0.2 : 0,
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-tl from-slate-800 via-slate-900 to-blue-900 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden max-w-6xl mx-auto"
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300, damping: 25 },
            }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-34 h-34 rounded-full bg-white transform -translate-x-12 -translate-y-12" />
              <div className="absolute bottom-0 right-0 w-34 h-34 rounded-full bg-white transform translate-x-12 translate-y-12" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">
                Looking for a customised solution?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
                Our engineering team can design & implement tailored Water,
                Wastewater & Sanitation solutions to meet your specific
                requirements.
              </p>
              <motion.button
                className="bg-white text-blue-600 text-sm px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center">
                  Connect with us
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </span>

                {/* Button hover effect */}
                <motion.div
                  className="absolute inset-0 bg-blue-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
