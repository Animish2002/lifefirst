"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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
  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "info@lifefirsttech.com",
      href: "mailto:info@lifefirsttech.com",
      type: "email",
    },
    {
      icon: <Phone size={16} />,
      text: "+91 (XXX) XXX-XXXX",
      href: "tel:+91XXXXXXXXXX",
      type: "phone",
    },
    {
      icon: <Clock size={16} />,
      text: "Mon-Fri 9AM-5PM IST",
      href: null,
      type: "hours",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={18} />,
      href: "https://facebook.com/lifefirsttech",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: <Twitter size={18} />,
      href: "https://twitter.com/lifefirsttech",
      label: "Twitter",
      color: "hover:text-sky-500",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com/company/lifefirsttech",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://instagram.com/lifefirsttech",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      icon: <Youtube size={18} />,
      href: "https://youtube.com/lifefirsttech",
      label: "YouTube",
      color: "hover:text-red-600",
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-sm"
      >
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              {/* Left Side - Contact Information */}
              <div className="flex items-center space-x-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        <span className="text-slate-400">{item.icon}</span>
                        <span className="hidden sm:inline">{item.text}</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 text-slate-300 text-sm">
                        <span className="text-slate-400">{item.icon}</span>
                        <span className="hidden sm:inline">{item.text}</span>
                      </div>
                    )}
                    {index < contactInfo.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="h-4 mx-4 bg-slate-700 hidden lg:block"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Right Side - Social Links */}
              <div className="flex items-center space-x-1">
                <span className="text-slate-400 text-sm mr-3 hidden md:inline">
                  Follow us:
                </span>
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`h-8 w-8 p-0 text-slate-400 hover:bg-slate-800 transition-all duration-200 ${social.color}`}
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1755028854/lifefirst_logo_png_nb1cje.png"
                  alt="LifeFirst Logo"
                  width={140}
                  height={140}
                  className="w-auto h-auto max-h-12"
                />
              </Link>
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
                        className="text-slate-700 hover:text-blue-600 transition-colors text-lg font-medium relative cursor-pointer flex items-center space-x-1"
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
                        className="text-slate-700 hover:text-blue-600 transition-colors text-lg font-medium relative cursor-pointer"
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
    </>
  );
};

export default Navigation;
