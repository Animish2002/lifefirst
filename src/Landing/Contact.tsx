"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  X,
  Globe,
} from "lucide-react";

// Define a type for the form data
type FormData = {
  name: string;
  email: string;
  company: string;
  website: string;
  phone: string;
  message: string;
  service: string;
};

// Define a type for the office contact information
type OfficeContact = {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
};

// Define a type for the input change event handler
type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

// Custom Modal component to replace alert()
const MessageModal = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/30"
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full relative border border-gray-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={24} />
        </button>
        <h3 className="text-xl font-bold text-slate-800 mb-4">
          Submission Successful
        </h3>
        <p className="text-slate-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

const CTASection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    message: "",
    service: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: InputChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real-world scenario, you would send this data to an API
    console.log("Form submitted:", formData);
    setIsModalOpen(true);
  };

  const officeContacts: OfficeContact[] = [
    {
      city: "Mumbai",
      address: "123 Business Park, Andheri East, Mumbai - 400069",
      phone: "+91 22 1234 5678",
      email: "mumbai@lifefirsttech.com",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <>
      <motion.section
        className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 font-inter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Main CTA Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-tl from-slate-800 via-slate-900 to-blue-900 text-white shadow-2xl overflow-hidden relative rounded-xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-34 h-34 rounded-full bg-white transform -translate-x-12 -translate-y-12" />
                <div className="absolute bottom-0 right-0 w-34 h-34 rounded-full bg-white transform translate-x-12 translate-y-12" />
              </div>
              <div className="p-6 relative">
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <MessageSquare className="w-16 h-14 text-blue-500 mx-auto mb-6" />
                  </motion.div>

                  <h2 className="text-2xl font-bold mb-2">
                    <span className="">
                      Ready to Create Sustainable Change in
                    </span>
                    &nbsp;
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Water, Wastewater & Sanitation?
                    </span>
                  </h2>

                  <p className="text-sm mb-8 max-w-3xl mx-auto leading-relaxed">
                    Empowering communities through sustainable water,
                    wastewater, and sanitation innovations.
                  </p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-2 text-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg flex items-center justify-center">
                      Connect with LifeFirst
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form and Office Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}

            {/* Office Contacts */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                {officeContacts.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="shadow-lg border border-slate-200 hover:shadow-xl bg-white transition-all duration-300 rounded-xl">
                      <h3 className="text-2xl font-bold text-slate-800 flex items-center p-4">
                        <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                        Visit Us At
                      </h3>
                      <div className="p-6 bg-white mb-4">
                        <h4 className="text-xl font-bold text-slate-800 mb-3">
                          {office.city}
                        </h4>

                        <div className="space-y-2 text-sm text-slate-600">
                          <div className="flex items-start">
                            <MapPin className="w-4 h-4 mt-0.5 mr-2 text-zinc-500 flex-shrink-0" />
                            <span>{office.address}</span>
                          </div>

                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-zinc-500" />
                            <a
                              href={`tel:${office.phone}`}
                              className="text-zinc-600 hover:underline"
                            >
                              {office.phone}
                            </a>
                          </div>

                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-zinc-500" />
                            <a
                              href={`mailto:${office.email}`}
                              className="text-zinc-600 hover:underline"
                            >
                              {office.email}
                            </a>
                          </div>

                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-zinc-500" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="bg-white shadow-xl border border-blue-100 overflow-hidden rounded-lg">
                          <div className="p-0">
                            <div className="h-96 bg-gray-100 relative">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995310096!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640123456789!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <form onSubmit={handleSubmit}>
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white shadow-xl border border-blue-100 rounded-xl">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                      <Send className="w-6 h-6 text-blue-500 mr-3" />
                      Send us a Message
                    </h3>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                              placeholder="Your full name"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Company
                          </label>
                          <div className="relative">
                            <Building className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              name="company"
                              id="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                              placeholder="Your company"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-slate-700 mb-2"
                          >
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                            <input
                              type="tel"
                              name="phone"
                              id="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                              placeholder="+91 12345 67890"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Your Website
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            name="website"
                            id="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                            placeholder="www.yourwebsite.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Service Interest
                        </label>
                        <select
                          name="service"
                          id="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
                        >
                          <option value="">Select a service</option>
                          <option value="water-treatment">
                            Water Treatment Systems
                          </option>
                          <option value="consultation">
                            Free Consultation
                          </option>
                          <option value="maintenance">
                            Maintenance Services
                          </option>
                          <option value="site-assessment">
                            Site Assessment
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                          placeholder="Tell us about your water treatment needs..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg flex items-center justify-center"
                      >
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </form>
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {isModalOpen && (
          <MessageModal
            message="Thank you for your inquiry! We'll get back to you within 24 hours."
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CTASection;
