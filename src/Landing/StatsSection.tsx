"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "50+ M Liters", label: "Water Recycled" },
  { number: "100%", label: "Powered by Green Energy" },
  { number: "Zero Liquid", label: "Discharge Policy" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function StatsSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-8 md:p-12 bg-gray-50 rounded-lg shadow-inner border border-gray-100 p-4"
    >
      {/* Stats Section */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 md:px-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 md:p-6 border border-blue-100 shadow-lg text-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                delay: index * 0.1,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-sm md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
