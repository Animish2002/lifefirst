"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Globe, Zap, Award, Shield } from "lucide-react";

const visionPoints = [
  {
    icon: <Target className="w-5 h-5 text-orange-500" />,
    text: "Sustainable Solutions",
    description: "",
  },
  {
    icon: <Globe className="w-5 h-5 text-green-500" />,
    text: "Environmental Protection",
    description: "",
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-500" />,
    text: "Innovation Driven",
    description: "",
  },
];

const AboutSection = () => {
  return (
    <motion.section
      className="py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 md:px-0 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto ">
        {/* Compact Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            About the Company
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-blue-200 shadow-lg rounded-2xl overflow-hidden py-0 md:h-[60vh]">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-0">
                {/* Image Section */}
                <div className="md:col-span-1">
                  <div className="relative ">
                    <motion.img
                      src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928781/20250802_153036_k6qhoj.jpg"
                      alt="Company Facility"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-2 p-6">
                  {/* Mission */}
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center">
                    
                      About Lifefirst
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We pioneer sustainable water treatment solutions,
                      combining decades of experience with innovative technology
                      for comprehensive water management systems.
                    </p>
                  </div>

                  {/* Certifications */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Government Certified",
                        "ISO Certified",
                        "Expert Team",
                      ].map((cert, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full flex items-center"
                        >
                          <Award className="w-3 h-3 mr-1" />
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Vision Points */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">
                      Our Focus Areas
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {visionPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg border border-cyan-100"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="mr-2">{point.icon}</div>
                          <span className="text-slate-700 text-xs font-medium leading-tight">
                            {point.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
