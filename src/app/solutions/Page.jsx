"use client";
import { motion } from "framer-motion";
import { Droplets, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

const OurSolutionsPage = () => {
  const solutionsData = [
    {
      title: "Wastewater Treatment",
      description:
        "Advanced systems for treating industrial and municipal wastewater to meet regulatory standards.",
      icon: <Droplets className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Water Treatment Plants",
      description:
        "Custom-engineered water treatment plants for various applications, from drinking water to process water.",
      icon: <Droplets className="w-12 h-12 text-green-600" />,
    },
    {
      title: "Sanitation Solutions",
      description:
        "Comprehensive sanitation systems for rural areas, urban communities, and remote sites.",
      icon: <Droplets className="w-12 h-12 text-orange-600" />,
    },
    {
      title: "Monitoring Systems",
      description:
        "Real-time water quality monitoring and data analytics for proactive management.",
      icon: <Droplets className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Chemical Dosing",
      description:
        "Precise and automated chemical dosing systems for optimal treatment efficiency.",
      icon: <Droplets className="w-12 h-12 text-cyan-600" />,
    },
    {
      title: "Maintenance & Support",
      description:
        "Dedicated support and maintenance services to ensure your systems run smoothly and efficiently.",
      icon: <Droplets className="w-12 h-12 text-red-600" />,
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
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Water treatment facility"
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
                <h1 className="text-3xl md:text-5xl font-semi bold text-white leading-tight mb-6">
                  Advanced Water
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                    Management Solutions
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-lg text-blue-100 mb-8 leading-relaxed"
              >
                Engineering sustainable water treatment systems that protect{" "}
                <br /> our environment and ensure clean water access for
                <br />{" "}
                <span className="font-bold bg-gradient-to-r from-blue-500 via-cyan-400 via-green-400 via-blue-400 via-indigo-500 to-orange-400 bg-clip-text text-transparent">
                  communities worldwide.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
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
              Our Comprehensive Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial consultation to ongoing support, we provide
              end-to-end water management solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution, index) => (
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
                      {solution.icon}
                    </div>
                    <CardTitle className="text-2xl font-semibold text-slate-800">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-6 pt-0">
                    <CardDescription className="text-lg text-slate-600 leading-relaxed">
                      {solution.description}
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

export default OurSolutionsPage;
