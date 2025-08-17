"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      setMessage(
        "Thank you for your message! We'll get back to you within 24 hours."
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Phone",
      details: ["+91 (020) 1234-5678", "+91 (020) 8765-4321"],
      availability: "Mon-Fri 9:00 AM - 6:00 PM IST",
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email",
      details: ["info@lifefirsttech.com", "support@lifefirsttech.com"],
      availability: "24/7 Response within 2 hours",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Office Address",
      details: [
        "Life First Technologies Pvt Ltd",
        "Sector 15, Pimpri-Chinchwad",
      ],
      availability: "Pune, Maharashtra 411017, India",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[75vh] bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Contact us for water treatment solutions"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-[75vh] pt-20">
          <div className="max-w-7xl md:pl-24 px-6 py-20 md:ml-14">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
                  Let&apos;s Discuss Your
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                    Water Treatment Project
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-lg text-blue-100 mb-8 leading-relaxed"
              >
                Our team of water treatment experts is ready to help <br /> you
                find the perfect solution for your unique <br />
                <span className="font-bold bg-gradient-to-r from-blue-500 via-cyan-400 via-green-400 via-blue-400 via-indigo-500 to-orange-400 bg-clip-text text-transparent">
                  requirements and challenges.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg h-fit">
                <h2 className="text-2xl font-bold text-slate-800 mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-slate-600 text-sm mb-1"
                          >
                            {detail}
                          </p>
                        ))}
                        <div className="flex items-center mt-2">
                          <Clock className="w-4 h-4 text-slate-400 mr-2" />
                          <span className="text-xs text-slate-500">
                            {info.availability}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-8">
                  <h3 className="font-semibold text-slate-800 mb-4">Find Us</h3>
                  <div className="w-full h-48 bg-slate-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.1234567890!2d73.7997406!3d18.6161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c12d3e4f56%3A0x1a2b3c4d5e6f7a8b!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1628169123880!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Our office location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Send us a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullName"
                        className="text-slate-700 font-medium"
                      >
                        Full Name *
                      </Label>
                      <Input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="h-12 border-slate-200 focus:border-blue-600"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-slate-700 font-medium"
                      >
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="h-12 border-slate-200 focus:border-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-slate-700 font-medium"
                      >
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12 border-slate-200 focus:border-blue-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="company"
                        className="text-slate-700 font-medium"
                      >
                        Company Name
                      </Label>
                      <Input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="h-12 border-slate-200 focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-slate-700 font-medium"
                    >
                      Subject *
                    </Label>
                    <Input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this regarding?"
                      className="h-12 border-slate-200 focus:border-blue-600"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-slate-700 font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your water treatment requirements, project details, or any questions you have..."
                      className="resize-none border-slate-200 focus:border-blue-600"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {message && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-700">
                        {message}
                      </AlertDescription>
                    </Alert>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              water management systems with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
