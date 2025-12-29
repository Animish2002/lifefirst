"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Building2,
  Droplets,
  Droplet,
  Factory,
Package,
Recycle,
Gauge
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
import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";

const DownloadBrochurespage = () => {
  const brochuresData = [
    {
      title: "Company Profile ",
      description:
        "A detailed overview of our industrial wastewater treatment solutions and advanced filtration technologies.",
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      link: "https://assets.life-first.in/Company_Profile_LifeFirst.pdf",
    },
    {
      title: "Water Treatment System ",
      description:
        "Learn how our technologies contribute to a more sustainable future and environmental protection.",
      icon: <Droplets className="w-12 h-12 text-green-600" />,
      link: "https://assets.life-first.in/Water_and_Wastewater.pdf",
    },
    {
      title: "Wastewater Treatment Systems ",
      description:
        "Our complete catalog of products and services for comprehensive water management solutions.",
      icon: <Droplet className="w-12 h-12 text-orange-600" />,
      link: "https://assets.life-first.in/Water_and_Wastewater.pdf",
    },
    {
      title: "Effluent Treatment System ",
      description:
        "Detailed technical documentation and specifications for all our water treatment equipment.",
      icon: <Factory className="w-12 h-12 text-purple-600" />,
      link: "#",
    },
    {
      title: "General Product Offerings ",
      description:
        "Step-by-step installation procedures and maintenance guidelines for optimal system performance.",
      icon: <Package className="w-12 h-12 text-cyan-600" />,
      link: "https://assets.life-first.in/Water_and_Wastewater.pdf",
    },
    {
      title: "Bio-Digester & Bio-Toilets ",
      description:
        "Real-world applications and success stories showcasing our water treatment implementations.",
      icon: <Recycle className="w-12 h-12 text-green-600" />,
      link: "https://assets.life-first.in/bio-digester.pdf",
    },
    {
      title: "Hydration Monitoring System  ",
      description:
        "Real-world applications and success stories showcasing our water treatment implementations.",
      icon: <Gauge className="w-12 h-12 text-red-600" />,
      link: "https://assets.life-first.in/hydation-monitoring-system.pdf",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="relative md:mt-26 mt-24 overflow-hidden"></div>
      {/* Hero Section */}
      <section className="relative text-white py-10 px-4 overflow-hidden h-[35vh]">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1758622999/organised-documents-references_t7bf44.jpg"
            alt="Technical documents and brochures"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-full pt-10 mx-auto max-w-6xl">
          <div className="px-6 py-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-2xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
                  Comprehensive Resource
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                    Documentation Center
                  </span>
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochures Section */}
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 p-2 mb-2">
              Download Our Brochures
            </h2>
            <p className="text-lg text-gray-600 mx-auto max-w-4xl">
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
                <Card className="h-full relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 shadow-lg group py-3">
                  <CardHeader className="flex flex-col items-center text-center p-4">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      {brochure.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-800 mb-2">
                      {brochure.title}
                    </CardTitle>
                    <CardDescription className="text-md text-slate-600 leading-relaxed">
                      {brochure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 pt-0">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                      onClick={() => window.open(brochure.link, "_blank")}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Brochure
                    </Button>
                  </CardContent>
                  <BorderBeam
                    duration={6}
                    size={400}
                    className="from-transparent via-red-500 to-transparent"
                  />
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="from-transparent via-blue-500 to-transparent"
                  />
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
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-md font-medium cursor-pointer transition-all duration-200 hover:from-blue-700 hover:to-cyan-700">
                Get Expert Guidance
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DownloadBrochurespage;
