"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

// Shadcn UI components for a consistent form design
const Input = ({ label, type, name, placeholder, value, onChange }) => (
  <div className="relative z-0 w-full mb-6 group">
    <input
      type={type}
      name={name}
      id={name}
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
      value={value}
      onChange={onChange}
    />
    <label
      htmlFor={name}
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

const Textarea = ({ label, name, placeholder, value, onChange }) => (
  <div className="relative z-0 w-full mb-6 group">
    <textarea
      name={name}
      id={name}
      rows="4"
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
      value={value}
      onChange={onChange}
    ></textarea>
    <label
      htmlFor={name}
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);

const Button = ({ children, className, ...props }) => (
  <button
    className={`w-full px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg sm:w-auto hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-200 ${className}`}
    {...props}
  >
    {children}
  </button>
);


const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to an API
    console.log("Form submitted with data:", formData);
    // You could also add a success message or clear the form here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-blue-600" />,
      title: "Phone",
      detail: "+91 (XXX) XXX-XXXX",
      subDetail: "Mon-Fri 9am-5pm",
    },
    {
      icon: <Mail size={24} className="text-blue-600" />,
      title: "Email",
      detail: "info@lifefirsttech.com",
      subDetail: "Respond within 24 hours",
    },
    {
      icon: <MapPin size={24} className="text-blue-600" />,
      title: "Address",
      detail: "123 Main Street, Your City, State",
      subDetail: "Pin: 000000",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navigation />
      <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We would love to hear from you. Fill out the form below or reach
              out directly using our contact information.
            </p>
          </motion.div>

          {/* Main Content: Contact Form & Info */}
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/3 space-y-8"
            >
              <h2 className="text-3xl font-bold text-slate-800">
                Contact Information
              </h2>
              <p className="text-lg text-slate-600">
                Our team is ready to assist you with any questions or project
                inquiries.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-blue-50">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.detail}</p>
                      <p className="text-sm text-slate-400">
                        {item.subDetail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:w-2/3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <Input
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <Textarea
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button type="submit">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;