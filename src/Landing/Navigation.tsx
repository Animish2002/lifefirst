"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownItems = ["About LifeFirst", "Brochures", "Case Studies"];

  const regularMenuItems = [
    "Home",
    "Solutions",
    "Products & Technologies",
    "Contact",
  ];

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
            <h1 className="text-2xl font-bold bg-clip-text text-zinc-800">
              Life First Technologies
            </h1>
          </motion.div>

          <div className="flex space-x-8">
            {/* Regular menu items */}
            {regularMenuItems.map((item) => (
              <motion.button
                key={item}
                className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium relative cursor-pointer"
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

            {/* Our Company dropdown */}
            <div className="relative">
              <motion.button
                className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium relative cursor-pointer flex items-center space-x-1"
                whileHover={{ y: -2 }}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span>Our Company</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {dropdownItems.map((item) => (
                      <motion.button
                        key={item}
                        className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                        whileHover={{
                          x: 4,
                          backgroundColor: "rgb(239 246 255)",
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        {item}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
