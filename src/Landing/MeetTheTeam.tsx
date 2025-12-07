"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MeetTheTeam = () => {
  const teamMembers1 = [
    {
      name: "Sagar Shah",
      position: "Chief Executive Officer",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1754928794/WhatsApp_Image_2025-07-28_at_15.43.58_rmkh15.jpg",
      description:
        "A visionary leader with over 31 years of experience in the water technology industry.",
    },
    {
      name: "Gajanan Ghule",
      position: "Chief Operations Officer",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1755361767/WhatsApp_Image_2025-07-28_at_15.41.57_sooibr_w9s67f.jpg",
      description:
        "Our technical expert, he transforms innovative ideas into sustainable, practical solutions.",
    },
  ];

  const teamMembers2 = [
    {
      name: "Albert Mnangagwa",
      position: "Chairman (Zimbabwe)",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764883732/albert_mnangagwa_ru5nu9.jpg",
    },
    {
      name: "Dattaram Rane",
      position: "VP Global Sales & Projects",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1754928788/WhatsApp_Image_2025-07-28_at_12.08.47_r5kpst.jpg",
    },
    {
      name: "Supriya Sathe",
      position: "Global Business Head Marketing & Sales",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1754928788/WhatsApp_Image_2025-07-28_at_11.39.26_xcakld.jpg",
    },
    {
      name: "Shashank More",
      position: "Manager Projects",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1754928789/WhatsApp_Image_2025-07-28_at_12.40.01_eg2zec.jpg",
    },
    {
      name: "Vinishka Srilakshmi",
      position: "Head, Strategic Partnerships",
      image:
        "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1758548984/Vinishka_Srilakshmi_zuepn3.jpg",
    },
  ];

  const cardVariants: Variants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mb-16 pb-4 text-center mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 ">
            Leadership Team
          </h2>
          <p className="mt-3 text-gray-600 text-lg mx-auto leading-relaxed">
            Our experienced leaders are at the forefront of innovation, dedicated to shaping a sustainable future.
          </p>
        </motion.div>

        {/* Executive Leadership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers1.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="w-56 h-56 flex-shrink-0 overflow-hidden border-r border-gray-300 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover  rounded-l-xl scale-100 "
                />
              </div>
              {/* Text content */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mt-1">
                  {member.position}
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed max-w-prose">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team grid */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {teamMembers2.map((member, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                viewport={{ once: true }}
                className="flex flex-col cursor-pointer shadow-md hover:shadow-md transition-shadow duration-300 rounded-xl"
              >
                <div className="w-full h-56 overflow-hidden border-gray-300 rounded-t-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover scale-100"
                  />
                </div>
                <h3 className="mt-2 text-gray-900 font-semibold text-base truncate text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 mt-1 text-sm leading-tight line-clamp-2 text-center px-2 pb-4">
                  {member.position}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 max-w-5xl mx-auto "
        >
          <a
            href="/about-us"
            className="flex items-center justify-center gap-1  text-blue-600 font-semibold group hover:gap-2 transition-all"
          >
            Learn more about our team
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 mt-0.5 group-hover:rotate-325" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
