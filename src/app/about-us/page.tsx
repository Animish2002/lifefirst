"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Heart, Lightbulb } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

const AboutUsPage = () => {
  const valuesData = [
    {
      title: "Innovation",
      description:
        "Pioneering cutting-edge technologies to solve complex water treatment challenges.",
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Sustainability",
      description:
        "Committed to eco-friendly solutions that protect our environment for future generations.",
      icon: <Heart className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Excellence",
      description:
        "Delivering the highest quality solutions with precision and attention to detail.",
      icon: <Award className="w-12 h-12 text-orange-600" />,
    },
    {
      title: "Community Focus",
      description:
        "Empowering communities worldwide with access to clean, safe water resources.",
      icon: <Users className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Mission Driven",
      description:
        "Guided by our mission to make clean water accessible to all through innovative technology.",
      icon: <Target className="w-12 h-12 text-cyan-600" />,
    },
    {
      title: "Visionary Leadership",
      description:
        "Leading the industry towards a sustainable future with forward-thinking solutions.",
      icon: <Eye className="w-12 h-12 text-red-600" />,
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[75vh] mt-36 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden">
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
        <div className="relative z-10 flex items-center h-[75vh] pt-20">
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

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-full mr-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-blue-600">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At Life First Technologies, our mission is to provide
                innovative, sustainable, and reliable water solutions that
                empower communities and industries to thrive. We are dedicated
                to creating a positive impact on the environment by protecting
                water resources and promoting responsible usage.
              </p>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <p>Delivering cutting-edge wastewater treatment solutions</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <p>Ensuring access to clean and safe drinking water</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <p>Promoting sustainability through eco-friendly practices</p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-full mr-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-blue-600">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the global leader in water and sanitation technology,
                setting the standard for innovation, quality, and environmental
                stewardship. We envision a future where clean water is a
                fundamental right, and our technology plays a pivotal role in
                making that a reality for everyone.
              </p>
              <div className="mt-8">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Life First Technologies Team"
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
                    width={800}
                    height={300}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to
              excellence in water technology solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesData.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 shadow-lg">
                  <CardHeader className="flex flex-col items-center text-center p-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-full mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-2xl font-semibold text-slate-800">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-6 pt-0">
                    <CardDescription className="text-lg text-slate-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUsPage;
