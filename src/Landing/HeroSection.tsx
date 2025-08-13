"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { AnimationGeneratorType } from "framer-motion";
import { ChevronRight, Play, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as AnimationGeneratorType,
        stiffness: 80,
        damping: 20,
      },
    },
  };
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30">
      {/* Dynamic Background */}
      <motion.div className="absolute inset-0" style={{ y: yBg }}>
       

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div className="relative z-10 pt-24 pb-16" style={{ y: yContent }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-slate-800 mb-2">Transform</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent mb-2">
                    Water Systems
                  </span>
                  <span className="block text-3xl lg:text-4xl text-slate-600 font-medium">
                    for a{" "}
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                      Sustainable Future
                    </span>
                  </span>
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 leading-relaxed max-w-2xl"
              >
                Pioneering advanced water treatment technologies that deliver
                exceptional results while protecting our environment. From
                wastewater management to complete sanitation solutions.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Start Your Project
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg group"
                >
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch How It Works
                </Button>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 pt-4"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-green-600 hover:text-green-700 hover:bg-green-50/80"
                >
                  📞 Schedule Consultation
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-orange-600 hover:text-orange-700 hover:bg-orange-50/80"
                >
                  📋 Get Quote
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-purple-600 hover:text-purple-700 hover:bg-purple-50/80"
                >
                  🏭 Site Assessment
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Interactive Elements */}
            <motion.div
              className="lg:col-span-5 space-y-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-slate-400"
        >
          <span className="text-xs mb-2">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
