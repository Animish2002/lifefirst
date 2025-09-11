"use client";
import React from "react";
import { motion } from "framer-motion";

import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import CTASection from "@/Landing/Contact";

const ContactPage = () => {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[75vh] bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Contact us for water treatment solutions"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-[75vh] pt-20 max-w-6xl mx-auto">
          <div className="px-6 py-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
                  Let&apos;s Discuss Your
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                    Water Treatment Project
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-lg text-blue-100 mb-8 leading-relaxed"
              >
                Our team of water treatment experts is ready to help <br /> you
                find the perfect solution for your unique <br />
                <span className="font-bold bg-gradient-to-r from-blue-500 via-cyan-400 via-green-400 via-blue-400 via-indigo-500 to-orange-400 bg-clip-text text-transparent">
                  requirements and challenges.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <CTASection />

      <Footer />
    </>
  );
};

export default ContactPage;
