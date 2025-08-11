"use client";

import React from "react";
import { motion } from "framer-motion";


const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            {/* Droplet Logo */}
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="dropletGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="25%" stopColor="#F7931E" />
                    <stop offset="50%" stopColor="#4CAF50" />
                    <stop offset="75%" stopColor="#2196F3" />
                    <stop offset="100%" stopColor="#1976D2" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 10 C30 30, 20 50, 30 70 C40 85, 60 85, 70 70 C80 50, 70 30, 50 10 Z"
                  fill="url(#dropletGradient)"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 bg-clip-text text-transparent">
              Life First Technologies
            </h1>
          </motion.div>

          <div className="flex space-x-8">
            {[
              "Home",
              "Our Company",
              "Solutions",
              "Products & Technologies",
              "Contact",
            ].map((item) => (
              <motion.button
                key={item}
                className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium relative"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
