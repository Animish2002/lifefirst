"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
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

const DownloadBrochuresPage = () => {
  const brochuresData = [
    {
      title: "Wastewater Treatment Systems",
      description:
        "A detailed overview of our industrial wastewater treatment solutions.",
      link: "#",
    },
    {
      title: "Sustainable Water Practices",
      description:
        "Learn how our technologies contribute to a more sustainable future.",
      link: "#",
    },
    {
      title: "Product Catalog 2024",
      description:
        "Our complete catalog of products and services for water management.",
      link: "#",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-slate-800">
              Download Our Brochures
            </h1>
            <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our range of solutions and products with our detailed
              brochures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brochuresData.map((brochure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col justify-between p-6 shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-slate-800">
                      {brochure.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-slate-600">
                      {brochure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Brochure
                    </Button>
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

export default DownloadBrochuresPage;
