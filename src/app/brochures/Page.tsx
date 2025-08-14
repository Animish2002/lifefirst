"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Book,
  Clipboard,
  Globe,
  Settings,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import Image from "next/image";

const DownloadBrochuresPage = () => {
  const brochuresData = [
    {
      title: "Wastewater Treatment Systems",
      description:
        "A detailed overview of our industrial wastewater treatment solutions and advanced filtration technologies.",
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      link: "#",
    },
    {
      title: "Sustainable Water Practices",
      description:
        "Learn how our technologies contribute to a more sustainable future and environmental protection.",
      icon: <Globe className="w-12 h-12 text-green-600" />,
      link: "#",
    },
    {
      title: "Product Catalog 2024",
      description:
        "Our complete catalog of products and services for comprehensive water management solutions.",
      icon: <Book className="w-12 h-12 text-orange-600" />,
      link: "#",
    },
    {
      title: "Technical Specifications",
      description:
        "Detailed technical documentation and specifications for all our water treatment equipment.",
      icon: <FileText className="w-12 h-12 text-purple-600" />,
      link: "#",
    },
    {
      title: "Installation Guide",
      description:
        "Step-by-step installation procedures and maintenance guidelines for optimal system performance.",
      icon: <Clipboard className="w-12 h-12 text-cyan-600" />,
      link: "#",
    },
    {
      title: "Case Studies & Solutions",
      description:
        "Real-world applications and success stories showcasing our water treatment implementations.",
      icon: <FileText className="w-12 h-12 text-red-600" />,
      link: "#",
    },
  ];

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
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Technical documents and brochures"
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
                  Comprehensive Resource
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                    Documentation Center
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-lg text-blue-100 mb-8 leading-relaxed"
              >
                Access our complete library of technical brochures, <br />{" "}
                product catalogs, and detailed documentation to <br />
                <span className="font-bold bg-gradient-to-r from-blue-500 via-cyan-400 via-green-400 via-blue-400 via-indigo-500 to-orange-400 bg-clip-text text-transparent">
                  explore our water treatment solutions.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Brochures Section */}
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Download Our Brochures
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our range of solutions and products with our detailed
              technical documentation and comprehensive resource materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brochuresData.map((brochure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 shadow-lg group">
                  <CardHeader className="flex flex-col items-center text-center p-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      {brochure.icon}
                    </div>
                    <CardTitle className="text-2xl font-semibold text-slate-800 mb-2">
                      {brochure.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-600 leading-relaxed">
                      {brochure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                      onClick={() => window.open(brochure.link, "_blank")}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Brochure
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              Need Custom Documentation?
            </h3>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-6">
              Our technical team can provide customized documentation tailored
              to your specific project requirements. Contact us for detailed
              specifications, custom solutions, and technical consultations.
            </p>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              Request Custom Documentation
            </Button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DownloadBrochuresPage;
