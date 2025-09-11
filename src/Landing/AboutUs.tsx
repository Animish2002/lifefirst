"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Beaker, Shield, Target, Globe, Zap } from "lucide-react";

// Defines the content for the vision points
const visionPoints = [
  {
    icon: <Target className="w-6 h-6 text-orange-500" />,
    text: "Sustainable water management solutions",
  },
  {
    icon: <Globe className="w-6 h-6 text-green-500" />,
    text: "Environmental protection and conservation",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    text: "Innovation-driven technology development",
  },
];

// Main component for the About Section
const AboutSection = () => {
  return (
    <motion.section
      className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Main section title */}
        <motion.div
          className="text-center mb-4 md:mb-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900  bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text ">
            About the Company
          </h2>
          {/* <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Pioneering sustainable water treatment solutions with cutting-edge
            technology and an unwavering commitment to environmental excellence.
          </p> */}
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large Rectangular Image Section - Top Left */}
          <motion.div
            className="md:col-span-2 lg:col-span-2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-3xl shadow-xl overflow-hidden h-full ">
              <div className="relative h-64 md:h-full">
                <motion.img
                  src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928781/20250802_153036_k6qhoj.jpg"
                  alt="Company Facility"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Mission & Key Points Section - Top Right */}
          <motion.div
            className="md:col-span-2 lg:col-span-2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl p-6 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Our Mission
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                We are a team of visionaries who pioneered sustainable water
                treatment solutions. Our team combines decades of experience
                with innovative technology to deliver comprehensive water
                management systems for a better, more sustainable future.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {["Government Certified", "ISO Certified", "Expert Team"].map(
                  (point, index) => (
                    <span
                      key={index}
                      className="bg-blue-100/70 text-blue-800 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {point}
                    </span>
                  )
                )}
              </div>
            </Card>
          </motion.div>

          {/* Vision & Values Section - Bottom Full Width */}
          <motion.div
            className="md:col-span-2 lg:col-span-4 mt-6 md:mt-0"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm border-cyan-200 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-green-500 mr-3" />
                  Vision & Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed text-base text-center max-w-4xl mx-auto">
                  Leading the transformation towards sustainable water
                  management with innovative solutions that create a lasting
                  positive impact on communities worldwide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {visionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-center bg-white/70 p-6 rounded-2xl shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="mb-3">{point.icon}</div>
                      <span className="text-slate-700 font-medium text-sm">
                        {point.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
