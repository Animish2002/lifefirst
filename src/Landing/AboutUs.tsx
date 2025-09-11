"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Factory,
  Award,
  Users,
  Beaker,
  Shield,
  Target,
  Globe,
  Zap,
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Government Certified",
      description:
        "Fully certified and compliant with all government standards",
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Expert Team",
      description: "Experienced professionals with decades of expertise",
    },
    {
      icon: <Beaker className="w-6 h-6 text-blue-500" />,
      title: "R&D Excellence",
      description: "Continuous innovation in water treatment technology",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-500" />,
      title: "ISO Certified",
      description: "Quality management systems meeting international standards",
    },
  ];

  const visionPoints = [
    {
      icon: <Target className="w-5 h-5 text-orange-500" />,
      text: "Sustainable water management solutions",
    },
    {
      icon: <Globe className="w-5 h-5 text-green-500" />,
      text: "Environmental protection and conservation",
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      text: "Innovation-driven technology development",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            About the Company
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Pioneering sustainable water treatment solutions with cutting-edge
            technology and unwavering commitment to environmental excellence.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {/* Large Rectangular Image Section - Top Left */}
          <motion.div
            className="md:col-span-4 lg:col-span-4 order-1"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CardContent className="p-0 rounded-xl">
              <div className="relative h-80 overflow-hidden rounded-2xl">
                <motion.img
                  src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928781/20250802_153036_k6qhoj.jpg"
                  alt="Company Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 "
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30"></div>
              </div>
            </CardContent>
          </motion.div>

          {/* Mission Section - Top Right */}
          <motion.div
            className="md:col-span-4 lg:col-span-4 order-2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-xl h-80">
              <CardHeader className="pb-3"></CardHeader>
              <CardContent className="h-full overflow-y-auto">
                <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                  Visionaries who pioneered sustainable water treatment
                  solutions. Our team combines decades of experience with
                  innovative technology to deliver comprehensive water
                  management systems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vision & Values - Bottom Full Width */}
          <motion.div
            className="md:col-span-4 lg:col-span-8 order-3"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-cyan-50/80 to-blue-50/80 backdrop-blur-sm border-cyan-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-green-500 mr-3" />
                  Vision & Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed text-base text-center max-w-4xl mx-auto">
                  Leading the transformation towards sustainable water
                  management with innovative solutions that create lasting
                  positive impact on communities worldwide.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {visionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col items-center text-center bg-white/70 p-6 rounded-xl shadow-sm"
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
