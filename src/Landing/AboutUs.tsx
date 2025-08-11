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
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Government Certified",
      description:
        "Fully certified and compliant with all government standards",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Expert Team",
      description: "Experienced professionals with decades of expertise",
    },
    {
      icon: <Beaker className="w-8 h-8 text-blue-500" />,
      title: "R&D Excellence",
      description: "Continuous innovation in water treatment technology",
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: "ISO Certified",
      description: "Quality management systems meeting international standards",
    },
  ];

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

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            About the Company
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Pioneering sustainable water treatment solutions with cutting-edge
            technology and unwavering commitment to environmental excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Company Overview */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/70 backdrop-blur-sm border-blue-100 shadow-xl">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Factory className="w-10 h-10 text-blue-600 mr-4" />
                  <CardTitle className="text-2xl text-slate-800">
                    Our Mission
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  Visionaries who pioneered sustainable water treatment
                  solutions. Our team combines decades of experience with
                  innovative technology to deliver comprehensive water
                  management systems that protect both communities and the
                  environment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-white to-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm"
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center mb-2">
                        {feature.icon}
                        <h4 className="font-semibold text-slate-800 ml-2">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Company History & Values */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Vision & Values */}
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-100 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 flex items-center">
                  <Globe className="w-8 h-8 text-green-500 mr-3" />
                  Vision & Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Leading the transformation towards sustainable water
                  management with innovative solutions that create lasting
                  positive impact on communities worldwide.
                </p>
                <div className="space-y-3">
                  {visionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center bg-white/60 p-3 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {point.icon}
                      <span className="ml-3 text-slate-700 font-medium">
                        {point.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Company Highlights */}
            <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-100 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">
                  Company Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white/60 p-4 rounded-lg">
                    <h5 className="font-semibold text-orange-700 mb-2">
                      USPs & Certifications
                    </h5>
                    <p className="text-slate-600 text-sm">
                      Our unique selling propositions backed by industry
                      certifications and proven track record of successful
                      implementations across diverse sectors.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        15+
                      </div>
                      <div className="text-xs text-slate-600">
                        Years Experience
                      </div>
                    </div>
                    <div className="bg-white/60 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">
                        500+
                      </div>
                      <div className="text-xs text-slate-600">
                        Projects Completed
                      </div>
                    </div>
                  </div>
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
