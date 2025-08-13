"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  {
    name: "Our Company",
    path: null,
    subItems: [
      { name: "About LifeFirst", path: "/about" },
      { name: "Brochures", path: "/brochures" },
      { name: "Case Studies", path: "/case-studies" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/">
              <img
                src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1755028854/lifefirst_logo_png_nb1cje.png"
                alt="LifeFirst Logo"
                width={140}
                height={140}
                className="w-auto h-auto max-h-12"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => {
              // Check if the item has sub-items (is a dropdown)
              if (item.subItems) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <motion.button
                      className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium relative cursor-pointer flex items-center space-x-1"
                      whileHover={{ y: -2 }}
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden"
                        >
                          {item.subItems.map((subItem) => (
                            <a href={subItem.path} key={subItem.name}>
                              <motion.div
                                className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                                whileHover={{
                                  x: 4,
                                  backgroundColor: "rgb(239 246 255)",
                                }}
                                transition={{ duration: 0.15 }}
                              >
                                {subItem.name}
                              </motion.div>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else {
                // Regular menu items
                return (
                  <a href={item.path} key={item.name}>
                    <motion.div
                      className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium relative cursor-pointer"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </a>
                );
              }
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((item) => {
                if (item.subItems) {
                  return (
                    <div key={item.name}>
                      <motion.button
                        className="w-full text-left flex justify-between items-center text-slate-700 hover:text-blue-600 transition-colors font-medium relative"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span>{item.name}</span>
                        <motion.div
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 pl-4 border-l-2 border-blue-100 flex flex-col space-y-2 overflow-hidden"
                          >
                            {item.subItems.map((subItem) => (
                              <a href={subItem.path} key={subItem.name}>
                                <motion.div
                                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </motion.div>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                } else {
                  return (
                    <a href={item.path} key={item.name}>
                      <motion.div
                        className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </motion.div>
                    </a>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
