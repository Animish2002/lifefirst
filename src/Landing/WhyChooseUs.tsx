"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lightbulb, Rocket, Shield } from "lucide-react"; // Example icons from lucide-react

const services = [
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
    title: "Innovative Solutions",
    description:
      "We provide creative and forward-thinking solutions to meet your business needs.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "Performance Driven",
    description:
      "Our focus is on building high-performance websites that deliver results.",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Secure & Reliable",
    description:
      "We build robust and secure platforms you can depend on, 24/7.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function ServicesSection() {
  return (
    <section className="py-20 bg-white max-w-7xl mx-auto" id="services">
      <div className="container mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          Why Choose Us
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}