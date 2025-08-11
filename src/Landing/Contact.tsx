"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const CTASection = () => {
  const ctaOptions = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Schedule a Call",
      description: "Book a consultation with our experts",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Send Message",
      description: "Get detailed information via email",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Site Visit",
      description: "Request an on-site assessment",
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-50 to-yellow-50",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Card className="bg-gradient-to-br from-white to-blue-50 border-blue-100 shadow-2xl overflow-hidden">
            <CardContent className="p-12 relative">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <MessageSquare className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-slate-800">
                    Ready to Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Water Treatment?
                  </span>
                </h2>

                <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Connect with us to bring sustainable water treatment to your
                  facility or community. Our experts are ready to design the
                  perfect solution for your needs.
                </p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contact Us Now
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                  >
                    Download Brochure
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
            Choose Your Preferred Way to Connect
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`bg-gradient-to-br ${option.bgColor} border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${option.color} text-white rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {option.icon}
                    </motion.div>

                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      {option.title}
                    </h4>
                    <p className="text-slate-600 mb-4 text-sm">
                      {option.description}
                    </p>

                    <Button
                      variant="ghost"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-100 group-hover:translate-x-1 transition-all duration-200"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-blue-100">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-slate-600">Support Available</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-green-100">
              <div className="text-2xl font-bold text-green-600">48hr</div>
              <div className="text-sm text-slate-600">Response Time</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-orange-100">
              <div className="text-2xl font-bold text-orange-600">Free</div>
              <div className="text-sm text-slate-600">Site Assessment</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-cyan-100">
              <div className="text-2xl font-bold text-cyan-600">100%</div>
              <div className="text-sm text-slate-600">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;
