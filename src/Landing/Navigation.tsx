"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Plus,
  Minus,
  Youtube,
  Instagram,
} from "lucide-react";
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

interface NavSubItem {
  name: string;
  path: string;
  subItems?: NavSubItem[];
}

// Interface for the main navigation links
interface NavLink {
  name: string;
  path: string | null;
  subItems?: NavSubItem[];
}

// Interface for contact information items
interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  href: string | null;
  type: string;
}

// Interface for social media links
interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
  color: string;
}

const navLinks: NavLink[] = [
  {
    name: "Our Company",
    path: null,
    subItems: [
      { name: "About Us", path: "/about-us" },
      { name: "Investors", path: "/investors" },
      { name: "Careers", path: "/careers" },
    ],
  },
  {
    name: "Our Solutions",
    path: "/solutions",
    subItems: [
      {
        name: "Prefabricated Containerised Wastewater Treatment Plants",
        path: "/solutions/wastewater-treatment",
      },
      {
        name: "Prefabricated Effluent Treatment Plant",
        path: "/solutions/effluent-treatment",
      },
      {
        name: "Packaged Water Treatment Plant",
        path: "/solutions/water-treatment",
      },
      {
        name: "Sanitation Solutions",
        path: "/solutions/sanitation",
        subItems: [
          { name: "Bio-Digesters", path: "/solutions/bio-digesters" },
          { name: "Bio-Toilets", path: "/solutions/bio-toilets" },
        ],
      },
      {
        name: "Hydration Monitoring Technology",
        path: "/solutions/hydration-monitoring",
        subItems: [
          {
            name: "InFlow Hydration Monitoring System",
            path: "/solutions/inflow-system",
          },
        ],
      },
    ],
  },
  {
    name: "Products & Technologies",
    path: "/",
    subItems: [
      {
        name: "Pressure Sand Filters (PSF)",
        path: "/solutions/pressure-sand-filters",
      },
      {
        name: "Activated Carbon Filters (ACF)",
        path: "/solutions/activated-carbon-filters",
      },
      { name: "Lamella Clarifier", path: "/solutions/lamella-clarifier" },
      { name: "Tube Settler", path: "/solutions/tube-settlers" },
      {
        name: "Clarifier Mechanism",
        path: "/solutions/clarifier-mechanism",
      },
      {
        name: "Chemical Dosing Systems",
        path: "/solutions/chemical-dosing",
      },

      { name: "Water Softeners", path: "/solutions/water-softeners" },
      {
        name: "Ultrafiltration Systems (UF)",
        path: "/solutions/ultrafiltration",
      },
      {
        name: "Reverse Osmosis Systems (RO)",
        path: "/solutions/reverse-osmosis",
      },
      {
        name: "Demineralization Systems (DM)",
        path: "/solutions/demineralization",
      },
    ],
  },
  {
    name: "Resources",
    path: null,
    subItems: [
      { name: "Brochures", path: "/company-brochures" },
      { name: "Case Studies", path: "/case-studies" },
      { name: "Gallery", path: "/gallery" },
      // { name: "Blogs", path: "/blog" },
      { name: "Recognitions", path: "/recognitions" },
    ],
  },
];

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail size={16} />,
    text: "sales@life-first.in",
    href: "mailto:sales@life-first.in",
    type: "email",
  },
  {
    icon: <Phone size={16} />,
    text: "+91 9011 677 277",
    href: "tel:+919011677277",
    type: "phone",
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: <Linkedin size={18} />,
    href: "https://www.linkedin.com/company/lifefirstconceptsandtechnologies",
    label: "LinkedIn",
    color: "hover:text-blue-900",
  },
  {
    icon: <Twitter size={18} />,
    href: "https://x.com/lifefirstindia?s=11",
    label: "X (formerly known as Twitter)",
    color: "hover:text-sky-800",
  },
  {
    icon: <Facebook size={18} />,
    href: "https://www.facebook.com/share/14HnstPQUQW/?mibextid=wwXIfr",
    label: "Facebook",
    color: "hover:text-blue-800",
  },
  {
    icon: <Instagram size={18} />,
    href: "https://www.instagram.com/lifefirstconcepts",
    label: "Instagram",
    color: "hover:text-blue-900",
  },

  {
    icon: <Youtube size={18} />,
    href: "https://www.youtube.com/@lifefirstindia",
    label: "YouTube",
    color: "hover:text-blue-900",
  },
];

const Navigation: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<
    Record<string, boolean>
  >({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileItem = (itemName: string) => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setMobileExpandedItems({});
  };

  // Mega Menu for Desktop
  const renderMegaMenu = (item: NavLink) => {
    const isOpen = activeDropdown === item.name;

    return (
      <div
        key={item.name}
        className="relative"
        onMouseEnter={() => handleMouseEnter(item.name)}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="text-slate-700 hover:text-blue-600 transition-colors text-md font-medium relative cursor-pointer flex items-center space-x-1 uppercase"
          whileHover={{ y: -2 }}
        >
          {item.path ? (
            <Link href={item.path} className="flex items-center space-x-1">
              <span>{item.name}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </Link>
          ) : (
            <>
              <span>{item.name}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </>
          )}
        </motion.div>

        <AnimatePresence>
          {isOpen && item.subItems && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-5 ${
                item.name === "Our Solutions"
                  ? "w-screen max-w-[35rem]"
                  : "w-[12rem]"
              } bg-white border-t-blue-400 border-t-4 shadow-xl border border-blue-100 overflow-hidden z-50 rounded-b-2xl`}
            >
              {item.name === "Our Solutions" ? (
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Core Solutions Column */}
                    <div>
                      <h3 className="font-semibold text-slate-800 text-md uppercase tracking-wide mb-3 pb-2 border-b border-blue-100">
                        CORE SOLUTIONS
                      </h3>
                      <div className="mb-4">
                        <h3 className="font-medium text-slate-700 text-md uppercase tracking-wide mb-1.5">
                          STP/ETP/WTP
                        </h3>
                        <div className="space-y-2">
                          {item.subItems.slice(0, 3).map((subItem) => (
                            <Link href={subItem.path} key={subItem.name}>
                              <motion.div
                                className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer text-md leading-relaxed flex items-start"
                                whileHover={{ x: 4, color: "#2563eb" }}
                              >
                                <span className="text-blue-400 mr-2 mt-0.5 text-sm">
                                  •
                                </span>
                                {subItem.name}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Sustainable Technologies Column */}
                    <div>
                      <h3 className="font-semibold text-slate-800 text-md uppercase tracking-wide mb-3 pb-2 border-b border-blue-100">
                        SUSTAINABLE TECHNOLOGIES  
                      </h3>

                      <div className="space-y-1.5">
                        {/* Correctly render Sanitation Solutions and Hydration */}
                        {item.subItems.slice(3).map((category) => (
                          <div key={category.name}>
                            <div className="font-medium text-slate-700 text-md uppercase tracking-wide mb-1.5">
                              {category.name}
                            </div>
                            {category.subItems?.map((nestedItem) => (
                              <Link
                                href={nestedItem.path}
                                key={nestedItem.name}
                              >
                                <motion.div
                                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer text-md ml-2 flex items-start"
                                  whileHover={{ x: 4, color: "#2563eb" }}
                                >
                                  <span className="text-blue-400 mr-2 mt-0.5 text-sm">
                                    •
                                  </span>
                                  {nestedItem.name}
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Standard dropdown for other menu items
                <div className="py-2">
                  {item.subItems.map((subItem) => (
                    <Link href={subItem.path} key={subItem.name}>
                      <motion.div
                        className="w-full text-left px-4 py-1 text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center text-md"
                        whileHover={{
                          x: 4,
                          backgroundColor: "rgb(239 246 255)",
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        <span className="text-blue-400 mr-2">•</span>
                        {subItem.name}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  // Accordion Style for Mobile
  const renderMobileAccordion = (item: NavLink) => {
    const isExpanded = mobileExpandedItems[item.name];

    return (
      <div key={item.name} className="border-b border-gray-100 last:border-b-0">
        <motion.button
          className="w-full text-left flex justify-between items-center py-4 text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg"
          onClick={() => toggleMobileItem(item.name)}
        >
          <span>{item.name}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isExpanded && item.subItems && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pl-4 border-l-2 border-blue-200">
                {item.subItems.map((subItem) => (
                  <div key={subItem.name} className="mb-3">
                    {subItem.subItems ? (
                      // Nested accordion
                      <div>
                        <motion.button
                          className="w-full text-left flex justify-between items-center py-2 font-medium text-slate-600 hover:text-blue-600 transition-colors text-base"
                          onClick={() =>
                            toggleMobileItem(`${item.name}-${subItem.name}`)
                          }
                        >
                          <span>{subItem.name}</span>
                          <motion.div
                            animate={{
                              rotate: mobileExpandedItems[
                                `${item.name}-${subItem.name}`
                              ]
                                ? 45
                                : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {mobileExpandedItems[
                              `${item.name}-${subItem.name}`
                            ] ? (
                              <Minus size={16} />
                            ) : (
                              <Plus size={16} />
                            )}
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {mobileExpandedItems[
                            `${item.name}-${subItem.name}`
                          ] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 mt-2 space-y-2 border-l border-blue-100 overflow-hidden"
                            >
                              {subItem.subItems.map((nestedItem) => (
                                <Link
                                  href={nestedItem.path}
                                  key={nestedItem.name}
                                  onClick={handleMobileLinkClick}
                                >
                                  <motion.div
                                    className="block text-sm text-slate-500 hover:text-blue-600 transition-colors py-1"
                                    whileHover={{ x: 4 }}
                                  >
                                    • {nestedItem.name}
                                  </motion.div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Regular item
                      <Link href={subItem.path} onClick={handleMobileLinkClick}>
                        <motion.div
                          className="block text-base text-slate-600 hover:text-blue-600 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          {subItem.name}
                        </motion.div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-sm"
    >
      <div className="bg-zinc-200 text-zinc-900">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-1">
          <div className="flex items-center justify-between py-1.5">
            {/* Left Side - Contact Information */}
            <div className="flex items-center md:space-x-6 space-x-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-slate-800 hover:text-blue-900 transition-colors duration-200 text-sm"
                    >
                      <span className="text-slate-900 h-4 w-4">
                        {item.icon}
                      </span>
                      <span className="hidden sm:inline text-sm">
                        {item.text}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex items-center space-x-2 text-slate-700 text-sm">
                      <span className="text-slate-400">{item.icon}</span>
                      <span className="hidden sm:inline text-sm">
                        {item.text}
                      </span>
                    </div>
                  )}
                  {index < contactInfo.length - 1 && (
                    <div className="h-4 mx-4 w-px bg-slate-700 hidden" />
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Social Links */}
            <div className="flex items-center space-x-1">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`h-4 w-4 ml-3 text-slate-800 hover:bg-slate-100 transition-all duration-200 ${social.color} rounded items-center justify-center hidden sm:flex`}
                >
                  {social.icon}
                </Link>
              ))}

              <Link
                href="/investors"
                className="px-2 text-xs md:text-sm uppercase"
                onClick={handleMobileLinkClick}
              >
                Investors
              </Link>
              <Link
                href="/careers"
                className="px-2 text-xs md:text-sm uppercase"
                onClick={handleMobileLinkClick}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="px-2 text-xs md:text-sm uppercase"
                onClick={handleMobileLinkClick}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-2 md:py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1755163758/Logo_Mark_cxtx7h.png"
                alt="LifeFirst logo droplet"
                className="w-auto h-13 md:h-12"
              />
              <img
                src="https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1755163758/Textmark_x3tms3.png"
                alt="logo mark"
                className="w-auto h-9 md:h-9"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((item) => {
              if (item.subItems) {
                return renderMegaMenu(item);
              } else {
                return (
                  <Link href={item.path as string} key={item.name}>
                    <motion.div
                      className="text-slate-700 hover:text-blue-600 transition-colors text-lg font-medium relative cursor-pointer uppercase"
                      whileHover={{ y: -2 }}
                    >
                      {item.name}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </Link>
                );
              }
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
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
            className="md:hidden bg-white/95 backdrop-blur-md overflow-hidden border-t border-blue-100"
          >
            <div className="px-6 py-4 overflow-y-auto max-h-[80vh]">
              {navLinks.map((item) => {
                if (item.subItems) {
                  return renderMobileAccordion(item);
                } else {
                  return (
                    <Link
                      href={item.path as string}
                      key={item.name}
                      onClick={handleMobileLinkClick}
                    >
                      <motion.div
                        className="block py-4 text-slate-700 hover:text-blue-600 transition-colors font-medium text-lg border-b border-gray-100 last:border-b-0"
                        whileHover={{ x: 4 }}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
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
