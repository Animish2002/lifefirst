"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, ChevronLeft, ChevronRight } from "lucide-react";

import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import CTASection from "@/Landing/Contact";

const AboutUsPage = () => {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Sagar Shah",
      position: "CEO",
      experience:
        "With over 31 years of experience, Sagar leads with a vision for innovative solutions.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Gajanan Ghule",
      position: "COO",
      experience:
        "Gajanan, our Technical Head, transforms innovation into sustainable and cost-effective solutions.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Dattaram Rane",
      position: "VP Global Sales & Projects",
      experience:
        "Dattaram holds a Diploma and B.E. in Chemical Engineering, is DNV-certified in Risk Assessment, and brings 12 years of global expertise in the Water Treatment Industry.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Supriya Sathe",
      position: "Global Business Head Marketing & Sales",
      experience:
        "Supriya, with a B.E. in Computer Science and an MBA in HR, is a Certified CSR Practitioner who brings a unique blend of strategy, innovation, and purpose-driven leadership.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c395b36a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Shashank More",
      position: "Manager Projects",
      experience:
        "Shashank, a B.E. in Civil Engineering, brings 8 years of expertise in executing water and wastewater projects with a strong focus on quality, efficiency, reliability, and timely delivery.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextMember = () => {
    setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentTeamMember(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[50vh] md:mt-36 mt-34 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928781/20250802_153036_k6qhoj.jpg"
            alt="Water treatment professionals"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-[50vh]">
          <div className="max-w-7xl md:pl-24 px-6 py-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
                  Pioneering Water
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                    Technology Innovation
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-lg text-blue-100 mb-8 leading-relaxed"
              >
                At Life First Technologies, we&apos;re dedicated to creating{" "}
                <br /> sustainable water solutions that protect our environment{" "}
                <br />
                <span className="font-bold bg-gradient-to-r from-blue-500 via-cyan-400 via-green-400 via-blue-400 via-indigo-500 to-orange-400 bg-clip-text text-transparent">
                  and empower communities worldwide.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section - Restructured */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Life First Technologies Team"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Right side - Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  At Life First Technologies, our mission is to provide
                  innovative, sustainable, and reliable water solutions that
                  empower communities and industries to thrive.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <p>
                      Delivering cutting-edge wastewater treatment solutions
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <p>Ensuring access to clean and safe drinking water</p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 p-3 rounded-full mr-4">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in water and sanitation technology,
                  setting the standard for innovation, quality, and
                  environmental stewardship. We envision a future where clean
                  water is a fundamental right.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team includes seasoned engineers from Chemical, Mechanical,
              Civil, Electrical, and Instrumentation disciplines, along with
              experienced project managers and skilled workers, all dedicated to
              achieving excellence in every project.
            </p>
          </motion.div>

          {/* Team Carousel */}
          <div className="relative bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Team member image */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTeamMember}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="w-80 h-80 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl">
                      <img
                        src={teamMembers[currentTeamMember].image}
                        alt={teamMembers[currentTeamMember].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right side - Team member info */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTeamMember}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <h3 className="text-3xl font-bold text-gray-800">
                      {teamMembers[currentTeamMember].name}
                    </h3>
                    <p className="text-xl font-semibold text-blue-600">
                      {teamMembers[currentTeamMember].position}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {teamMembers[currentTeamMember].experience}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevMember}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextMember}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamMember(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTeamMember ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default AboutUsPage;
