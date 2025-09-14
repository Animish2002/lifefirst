"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Sagar Shah",
      position: "Chief Executive Officer (CEO)",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928794/WhatsApp_Image_2025-07-28_at_15.43.58_rmkh15.jpg",
      description:
        "A visionary leader with over 31 years of experience in the water technology industry.",
    },
    {
      name: "Gajanan Ghule",
      position: "Chief Operations Officer (COO)",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755361767/WhatsApp_Image_2025-07-28_at_15.41.57_sooibr_w9s67f.jpg",
      description:
        "Our technical expert, he transforms innovative ideas into sustainable, practical solutions.",
    },
    {
      name: "Dattaram Rane",
      position: "VP Global Sales & Projects",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928788/WhatsApp_Image_2025-07-28_at_12.08.47_r5kpst.jpg",
      description:
        "With 12 years of global experience, he leads our sales and project execution with expertise.",
    },
    {
      name: "Supriya Sathe",
      position: "Global Business Head Marketing & Sales",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/v1754928788/WhatsApp_Image_2025-07-28_at_11.39.26_xcakld.jpg",
      description:
        "A blend of strategy and purpose-driven leadership, guiding our business and marketing efforts.",
    },
  ];

  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced leaders are at the forefront of innovation,
            dedicated to shaping a sustainable future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              {/* This is where you would use Shadcn Card component */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3 md:h-[7vh] md:w-[30vh] md:px-3 text-center">
                  {member.position}
                </p>

                <a
                  href="/about-us"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
