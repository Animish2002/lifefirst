"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import CTASection from "@/Landing/Contact";

const AboutUsPage = () => {
  const teamMembers1 = [
    {
      name: "Sagar Shah",
      position: "CEO",
      experience:
        "With over 31 years of experience, Sagar leads with a vision for innovative solutions.",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928794/WhatsApp_Image_2025-07-28_at_15.43.58_rmkh15.jpg",
      description:
        "Former co-founder at multiple water tech startups. Expert in sustainable water treatment systems.",
    },
    {
      name: "Gajanan Ghule",
      position: "COO",
      experience:
        "Gajanan, our Technical Head, transforms innovation into sustainable and cost-effective solutions.",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755361767/WhatsApp_Image_2025-07-28_at_15.41.57_sooibr_w9s67f.jpg",
      description:
        "Lead engineering teams at major water treatment facilities. Specialist in process optimization.",
    },
  ];

  const teamMembers2 = [
    {
      name: "Dattaram Rane",
      position: "VP Global Sales & Projects",
      experience:
        "Dattaram holds a Diploma and B.E. in Chemical Engineering, is DNV-certified in Risk Assessment, and brings 12 years of global expertise in the Water Treatment Industry.",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928788/WhatsApp_Image_2025-07-28_at_12.08.47_r5kpst.jpg",
      description:
        "Founding sales team at major industrial water companies. Expert in global market expansion.",
    },
    {
      name: "Supriya Sathe",
      position: "Global Business Head Marketing & Sales",
      experience:
        "Supriya, with a B.E. in Computer Science and an MBA in HR, is a Certified CSR Practitioner who brings a unique blend of strategy, innovation, and purpose-driven leadership.",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928788/WhatsApp_Image_2025-07-28_at_11.39.26_xcakld.jpg",
      description:
        "Former marketing director for sustainable technology companies. Specialist in corporate strategy.",
    },
    {
      name: "Shashank More",
      position: "Manager Projects",
      experience:
        "Shashank, a B.E. in Civil Engineering, brings 8 years of expertise in executing water and wastewater projects with a strong focus on quality, efficiency, reliability, and timely delivery.",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928789/WhatsApp_Image_2025-07-28_at_12.40.01_eg2zec.jpg",
      description:
        "Former project manager at leading infrastructure firms. Expert in large-scale water projects.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[65vh] md:mt-32 mt-34 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928781/20250802_153036_k6qhoj.jpg"
            alt="Water treatment professionals"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-[65vh]">
          <div className="max-w-7xl md:pl-24 px-6 py-20 md:ml-14">
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

      {/* Mission & Vision Section - Redesigned */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation in water technology to create a sustainable
              future for all.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                At Life First Technologies, our mission is to provide
                innovative, sustainable, and reliable water solutions that
                empower communities and industries to thrive.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                  <p className="text-gray-600">
                    Delivering cutting-edge wastewater treatment solutions
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                  <p className="text-gray-600">
                    Ensuring access to clean and safe drinking water
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-600 rounded-full mr-4"></div>
                  <p className="text-gray-600">
                    Building sustainable environmental solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <Eye className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                To be the global leader in water and sanitation technology,
                setting the standard for innovation, quality, and environmental
                stewardship.
              </p>
              <div className="bg-white bg-opacity-50 p-4 rounded-xl">
                <p className="text-gray-600 italic">
                  &quot;We envision a future where clean water is a fundamental
                  right, accessible to every community, and where our technology
                  contributes to a sustainable planet for future
                  generations.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Team Section - Fixed Layout: 2 on top, 3 centered below */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-[90rem] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our diverse team of experienced professionals brings together
              expertise from Chemical, Mechanical, Civil, Electrical, and
              Instrumentation engineering disciplines. Together, we have the
              resources and support to deliver excellence in every project.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            {/* First Row - 2 members centered */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {teamMembers1.slice(0, 2).map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Member Image */}
                      <div className="relative md:w-2/5 flex-shrink-0">
                        <div className="w-full h-64 md:h-full bg-gray-200 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-[40rem] h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 to-transparent"></div>
                      </div>

                      {/* Member Info */}
                      <div className="p-6 md:w-3/5 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm mb-3">
                          {member.position}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                          {member.description}
                        </p>

                        {/* Experience Badge */}
                        <div className="inline-flex items-center bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full w-fit">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          LinkedIn
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Second Row - 3 members centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl">
                {teamMembers2.slice(0, 3).map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Member Image */}
                      <div className="relative md:w-2/5 flex-shrink-0">
                        <div className="w-full h-64 md:h-full bg-gray-200 overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 to-transparent"></div>
                      </div>

                      {/* Member Info */}
                      <div className="p-6 md:w-3/5 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm mb-3">
                          {member.position}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                          {member.description}
                        </p>

                        {/* Experience Badge */}
                        <div className="inline-flex items-center bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full w-fit">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Expert
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
