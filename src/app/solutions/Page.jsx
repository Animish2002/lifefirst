"use client";
import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
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
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-slate-800">
              Our Comprehensive Solutions
            </h1>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              From initial consultation to ongoing support, we provide
              end-to-end water management solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="flex flex-col items-center text-center p-6">
                    {solution.icon}
                    <CardTitle className="mt-4 text-2xl font-semibold text-slate-800">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center p-6 pt-0">
                    <CardDescription className="text-lg text-slate-600">
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
