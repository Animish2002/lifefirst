"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Droplets,
  Leaf,
  Shield,
  Zap,
  ChevronRight,
  Filter,
  Recycle,
  Waves,
} from "lucide-react";

interface Solution {
  title: string;
  icon: React.ReactElement;
  color: string;
  bgColor: string;
  borderColor: string;
  items: { name: string; desc: string }[];
}

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("wastewater");

  const solutions: { [key: string]: Solution } = {
    wastewater: {
      title: "Wastewater Treatment Plants",
      icon: <Droplets className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      items: [
        {
          name: "Prefabricated Containerized WWTP",
          desc: "Compact and efficient treatment systems",
        },
        {
          name: "Membrane Bio-Reactor (MBR)",
          desc: "Advanced biological treatment technology",
        },
        {
          name: "Prefabricated Effluent Treatment Plant (ETP)",
          desc: "Industrial wastewater solutions",
        },
        {
          name: "Ultrafiltration Systems (UF)",
          desc: "High-quality filtration technology",
        },
        {
          name: "Reverse Osmosis (RO) Systems",
          desc: "Premium water purification",
        },
      ],
    },
    water: {
      title: "Water Treatment Plants",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      items: [
        {
          name: "Pressure Sand Filters (PSF)",
          desc: "Primary filtration systems",
        },
        {
          name: "Activated Carbon Filters (ACF)",
          desc: "Advanced purification technology",
        },
        { name: "Lamella Clarifier", desc: "High-rate settling systems" },
        {
          name: "Dissolved Air Flotation",
          desc: "Efficient solids separation",
        },
        { name: "Tube Settlers", desc: "Optimized settling technology" },
        { name: "Water Softeners", desc: "Hard water treatment solutions" },
        {
          name: "Demineralization Systems (DM)",
          desc: "Ultra-pure water production",
        },
      ],
    },
    sanitation: {
      title: "Sanitation Solutions",
      icon: <Leaf className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      items: [
        { name: "Bio-Digesters", desc: "Sustainable waste processing" },
        { name: "Bio-Toilets", desc: "Eco-friendly sanitation systems" },
      ],
    },
    hydration: {
      title: "Hydration Monitoring Technology",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-50 to-yellow-50",
      borderColor: "border-orange-200",
      items: [
        {
          name: "Inflow Hydration Monitoring System",
          desc: "Real-time monitoring and control",
        },
      ],
    },
  };

  const additionalSolutions = [
    {
      icon: <Filter className="w-8 h-8 text-blue-500" />,
      title: "Chemical Dosing Systems",
      items: [
        "5 MLD Wastewater Treatment Plant",
        "5 MLD Water Treatment Plant",
        "20 KLD Leachate Treatment Plant",
      ],
    },
    {
      icon: <Recycle className="w-8 h-8 text-green-500" />,
      title: "Specialized Systems",
      items: [
        "Water Treatment Plants",
        "Sanitation Solutions",
        "Hydration Monitoring",
      ],
    },
  ];

  return (
    <motion.section
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive water treatment technologies designed for maximum
            efficiency and environmental sustainability
          </p>
        </motion.div>

        {/* Main Solutions Tabs */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {/* Solution Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-3 sticky top-24">
              {Object.entries(solutions).map(([key, solution]) => (
                <motion.button
                  key={key}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${solution.bgColor} ${solution.borderColor} border shadow-lg`
                      : "bg-slate-50 hover:bg-slate-100 border border-slate-200"
                  }`}
                  onClick={() => setActiveTab(key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-lg ${
                        activeTab === key ? "bg-white/70" : "bg-white"
                      }`}
                    >
                      {solution.icon}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-slate-800 text-sm">
                        {solution.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        {solution.items.length} solutions
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Solution Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${solutions[activeTab].bgColor} rounded-2xl p-8 ${solutions[activeTab].borderColor} border shadow-xl`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white rounded-xl shadow-md">
                  {solutions[activeTab].icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {solutions[activeTab].title}
                  </h3>
                  <Badge
                    className={`mt-2 bg-gradient-to-r ${solutions[activeTab].color} text-white`}
                  >
                    {solutions[activeTab].items.length} Available Solutions
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solutions[activeTab].items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {additionalSolutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {solution.icon}
                  <h4 className="text-xl font-bold text-slate-800 ml-3">
                    {solution.title}
                  </h4>
                </div>
                <div className="space-y-2">
                  {solution.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center bg-white/70 p-3 rounded-lg"
                    >
                      <Waves className="w-4 h-4 text-blue-500 mr-3" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
