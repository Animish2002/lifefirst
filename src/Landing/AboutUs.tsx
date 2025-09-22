"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Globe, Zap, Award, Shield, ExternalLink } from "lucide-react";

const visionPoints = [
  {
    icon: <Target className="w-5 h-5 text-orange-500" />,
    text: "Sustainable Solutions",
    description: "",
  },
  {
    icon: <Globe className="w-5 h-5 text-green-500" />,
    text: "Environmental Protection",
    description: "",
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-500" />,
    text: "Innovation Driven",
    description: "",
  },
];
const logos = [
  {
    src: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575749/Make_in_India_kgecqj.png",
    alt: "Make in India",
  },
  {
    src: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575748/msme_lvs2fb.png",
    alt: "MSME Ministry",
  },
  {
    src: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575748/DPIIT-logo-trans_tpztkv.png",
    alt: "DPIIT",
  },
  {
    src: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575747/iso_qqjfzt.jpg",
    alt: "ISO 9001:2015",
  },
  {
    src: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575755/sal_nkdhzh.png",
    alt: "Scotland Approved",
  },
  {
    src: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575747/ce_approved_wut8xj.jpg",
    alt: "CE Approved",
  },
];

const AboutSection = () => {
  return (
    <motion.section
      className="py-8 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 md:px-0 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto ">
        {/* Compact Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            About the Company
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-blue-200 shadow-lg rounded-2xl overflow-hidden py-0 h-auto">
            <CardContent className="p-4">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="md:col-span-1">
                  <motion.img
                    src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1755028853/lifefirst_logo_jpg_fpmkho.jpg"
                    alt="Company Facility"
                    className="w-[32em] h-full object-fit rounded-2xl p-6"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Content Section */}
                <div className="py-4 relative">
                  {/* Mission */}
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center">
                      About LifeFirst
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Founded in 2019, LifeFirst Concepts & Technologies emerged
                      from a shared vision between Sagar Shah and Gajanan Ghule
                      to redefine the wastewater treatment landscape. With a
                      passion for excellence and a commitment to quality, our
                      founders recognized a gap in the market for reliable,
                      innovative company that prioritize client satisfaction and
                      community enhancement.
                    </p>
                  </div>
                  <style>
                    {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}
                  </style>
                  <div className="mt-8 overflow-hidden">
                    <div className="flex animate-marquee">
                      {/* Logos */}
                      {logos.map((logo, index) => (
                        <img
                          key={index}
                          src={logo.src}
                          alt={logo.alt}
                          className="h-12 inline-block mx-4"
                        />
                      ))}
                      {/* Duplicated logos for a seamless loop */}
                      {logos.map((logo, index) => (
                        <img
                          key={`duplicate-${index}`}
                          src={logo.src}
                          alt={logo.alt}
                          className="h-12 inline-block mx-4"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Vision Points */}
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3"></div>
                  </div>
                  <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hover:underline hover:text-blue-600">
                    <a href="/about-us" className="text-xs">
                      Click to learn more
                      <ExternalLink className="inline w-4 h-4 mb-1" />
                    </a>
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
