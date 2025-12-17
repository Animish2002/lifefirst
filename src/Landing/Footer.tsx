"use client";
import { motion } from "framer-motion";
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
  ExternalLink,
  Youtube,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

interface QuickLink {
  name: string;
  href: string;
}

const Footer = () => {
  const quickLinks: QuickLink[] = [
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Our Solutions",
      href: "/solutions",
    },
    {
      name: "Case Studies",
      href: "/case-studies",
    },
    {
      name: "Careers",
      href: "/careers",
    },
    {
      name: "News & Updates",
      href: "/news",
    },
  ];

  const solutions = [
    "Water Treatment",
    "Wastewater Treatment",
    "Sanitation Solutions",
    "Hydration Monitoring Systems",
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/lifefirstconceptsandtechnologies",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaXTwitter className="w-5 h-5" />,
      href: "https://x.com/lifefirstindia?s=11",
      color: "hover:text-blue-400",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/share/14HnstPQUQW/?mibextid=wwXIfr",
      color: "hover:text-blue-700",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/lifefirstconcepts",
      color: "hover:text-pink-600",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "#",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <motion.footer
      className="bg-[rgba(255, 255, 255, 0.15)] text-slate-700 font-semibold border-t "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center justify-center mb-6">
              {/* Droplet Logo */}
              <img
                src="https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1755028854/lifefirst_logo_png_nb1cje.png"
                alt="Droplet Logo"
                className="w-48 "
              />
            </div>

            <p className="text-slate-700 font-medium mb-6 leading-relaxed text-center text-sm">
              Water, Wastewater & Sanitation Solution Company
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 font-semibold ${social.color} transition-all duration-300 hover:bg-white/20`}
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
            <h4 className="text-xl font-bold mb-6 ">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-700 font-medium hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
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
            <h4 className="text-xl font-bold mb-6">Our Solutions</h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-slate-700 font-medium hover:text-green-400 transition-colors duration-200 flex items-center group"
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
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <motion.div
                className="flex items-start group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-blue-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <a href="tel:+919011677277" className="text-slate-700 ">
                    +91 9011 677 277
                  </a>
                  <p className="text-slate-600 font-medium text-sm">
                    Mon-Wed, Fri 9AM-5PM IST, Thu closed
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-green-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <a
                    href="mailto:sales@life-first.in"
                    className="text-slate-700 font-medium block"
                  >
                    sales@life-first.in
                    <span className="text-slate-600 font-medium text-sm block">
                      Expect a response in 2 working days
                    </span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <a
                  href="https://maps.app.goo.gl/5dkdXT8gxGHYHVED9"
                  rel="noopener noreferrer"
                  className="flex items-center group"
                >
                  <MapPin className="w-5 h-5 text-orange-400 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-slate-700 font-medium">
                      Corporate Office
                    </p>
                    <span className="text-slate-600 font-medium text-sm">
                      Pune, MH, India
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-800/10 bg-gradient-to-tl from-slate-800 via-slate-900 to-blue-900 text-white "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-200 font-medium text-md mb-4 md:mb-0">
              <p>&copy; 2025 LifeFirst Technologies. All rights reserved.</p>
            </div>

            <div className="flex space-x-6 text-md">
              <a
                href="/privacy-policy"
                className="text-slate-200 font-medium hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="text-slate-200 font-medium hover:text-blue-400 transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="/sitemap.xml"
                className="text-slate-200 font-medium hover:text-blue-400 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
          <div className="text-center text-slate-100 text-sm mt-4 font-light">
            <p>
              Website Designed & Developed by{" "}
              <a
                href="https://www.thefortune.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-200 font-medium hover:text-yellow-400 transition-colors group"
              >
                The Fortune Club
                <ExternalLink className="inline w-4 h-4 m-1 mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
