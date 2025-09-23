"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

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
      className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 px-4 md:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            About the Company
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-blue-200 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 items-center">
                {/* Image */}
                <div className="flex justify-center">
                  <motion.img
                    src="https://res.cloudinary.com/dsvfcckqy/image/upload/v1755028853/lifefirst_logo_jpg_fpmkho.jpg"
                    alt="Company Facility"
                    className="w-52 sm:w-64 md:w-[26rem] object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Text */}
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 text-center md:text-left">
                    About LifeFirst
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base md:leading-relaxed text-center md:text-left">
                    Founded in 2019, LifeFirst Concepts & Technologies emerged
                    from a shared vision between Sagar Shah and Gajanan Ghule to
                    redefine the wastewater treatment landscape. With a passion
                    for excellence and a commitment to quality, our founders
                    recognized a gap in the market for reliable, innovative
                    company that prioritize client satisfaction and community
                    enhancement.
                  </p>

                  {/* Logos - Auto Scroll */}
                  <style>
                    {`
                      @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                      }
                      .animate-marquee {
                        animation: marquee 20s linear infinite;
                        display: flex;
                        width: max-content;
                      }
                    `}
                  </style>
                  <div className="mt-6 overflow-hidden">
                    <div className="animate-marquee">
                      {logos.concat(logos).map((logo, i) => (
                        <img
                          key={i}
                          src={logo.src}
                          alt={logo.alt}
                          className="h-10 sm:h-12 mx-3"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Learn More */}
                  <div className="text-center md:text-left mt-6">
                    <a
                      href="/about-us"
                      className="text-sm sm:text-base text-blue-600 hover:underline flex items-center justify-center md:justify-start"
                    >
                      Click to learn more
                      <ExternalLink className="inline w-4 h-4 ml-1" />
                    </a>
                  </div>
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
