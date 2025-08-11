"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ChevronRight,
  Droplets,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Our Solutions",
    "Case Studies",
    "Careers",
    "News & Updates",
  ];

  const solutions = [
    "Wastewater Treatment",
    "Water Treatment Plants",
    "Sanitation Solutions",
    "Monitoring Systems",
    "Chemical Dosing",
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      color: "hover:text-blue-700",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <motion.footer
      className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              {/* Droplet Logo */}
              <div className="w-10 h-10 mr-3">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="footerDropletGradient"
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
                    fill="url(#footerDropletGradient)"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Life First Technologies
              </h3>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading water treatment solutions provider committed to creating
              sustainable and innovative technologies for a cleaner future.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Our Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-slate-300 hover:text-green-400 transition-colors duration-200 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <Droplets className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {solution}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <motion.div
                className="flex items-start group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-blue-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-slate-300 font-medium">
                    +91 (XXX) XXX-XXXX
                  </p>
                  <p className="text-slate-400 text-sm">
                    24/7 Support Available
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-green-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-slate-300 font-medium">
                    info@lifefirsttech.com
                  </p>
                  <p className="text-slate-400 text-sm">
                    Quick Response Guaranteed
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-orange-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-slate-300 font-medium">Corporate Office</p>
                  <p className="text-slate-400 text-sm">
                    Your City, State - 000000
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3 text-white">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-2 rounded-l-none">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-white/10 bg-slate-900/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Life First Technologies. All rights reserved.</p>
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
