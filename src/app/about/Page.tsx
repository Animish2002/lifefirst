// app/about/page.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-slate-800">
            About Our Company
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Pioneering advanced water treatment technologies for a cleaner
            world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-xl shadow-lg"
        >
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Life First Technologies, our mission is to provide innovative,
              sustainable, and reliable water solutions that empower communities
              and industries to thrive. We are dedicated to creating a positive
              impact on the environment by protecting water resources and
              promoting responsible usage.
            </p>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-green-500 mt-1 mr-2" />
                <p>Delivering cutting-edge wastewater treatment solutions.</p>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-green-500 mt-1 mr-2" />
                <p>Ensuring access to clean and safe drinking water.</p>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-green-500 mt-1 mr-2" />
                <p>Promoting sustainability through eco-friendly practices.</p>
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img
              src="https://placehold.co/800x600/60A5FA/FFFFFF?text=Our+Team"
              alt="Life First Technologies Team"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg text-center"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            To be the global leader in water and sanitation technology, setting
            the standard for innovation, quality, and environmental stewardship.
            We envision a future where clean water is a fundamental right, and
            our technology plays a pivotal role in making that a reality for
            everyone.
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
