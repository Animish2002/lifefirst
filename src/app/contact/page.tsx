"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

// You could extract these into separate components for better modularity.
// For example, a ContactCard component.
interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  subDetail: string;
  color: string;
}

const ContactCard = ({
  icon,
  title,
  detail,
  subDetail,
  color,
}: ContactItemProps) => (
  <Card className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-slate-300">
    <CardContent className="p-6">
      <div className="flex items-start space-x-4">
        <div
          className={`p-3 rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors duration-300 ${color}`}
        >
          {icon}
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg text-slate-900 mb-1">{title}</CardTitle>
          <p className="text-slate-700 font-medium">{detail}</p>
          <CardDescription className="mt-1">{subDetail}</CardDescription>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
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
      setMessage("Thank you for your message! We'll get back to you soon.");
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      detail: "+91 (XXX) XXX-XXXX",
      subDetail: "Mon-Fri 9am-5pm IST",
      color: "text-blue-600",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      detail: "info@lifefirsttech.com",
      subDetail: "Response within 24 hours",
      color: "text-purple-600",
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      detail: "123 Main Street, Your City",
      subDetail: "Pune, Maharashtra 411001",
      color: "text-emerald-600",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information & Details Section */}
            <section
              className="lg:col-span-2 space-y-8"
              aria-labelledby="contact-info-heading"
            >
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="bg-blue-50 text-blue-700 border-blue-200"
                >
                  Contact Information
                </Badge>
                <h2
                  id="contact-info-heading"
                  className="text-3xl font-bold text-slate-900"
                >
                  Get in Touch
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We&apos;re here to help you succeed. Reach out through any of
                  these channels and we&apos;ll respond promptly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <ContactCard key={index} {...item} />
                ))}
              </div>

              {/* Google Maps Section */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin size={20} aria-hidden="true" />
                    <span>Find Us</span>
                  </CardTitle>
                  <CardDescription>
                    Visit our office or get directions
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-slate-100 relative overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2612716766467!2d73.8474246!3d18.5723528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c079f53e6b3f%3A0x7d0e37e9d72a7201!2sPune%2C%20Maharashtra%20411001%2C%20India!5e0!3m2!1sen!2sus!4v1628169123880!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-b-lg"
                      title="Google Maps location of our office"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Form Section */}
            <section
              className="lg:col-span-3"
              aria-labelledby="contact-form-heading"
            >
              <Card className="shadow-2xl border-slate-200">
                <CardHeader className="pb-6">
                  <CardTitle
                    id="contact-form-heading"
                    className="text-2xl text-slate-900"
                  >
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="text-sm font-semibold text-slate-700"
                        >
                          Full Name
                        </Label>
                        <Input
                          type="text"
                          name="fullName"
                          id="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-slate-700"
                        >
                          Email Address
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-sm font-semibold text-slate-700"
                      >
                        Subject
                      </Label>
                      <Input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold text-slate-700"
                      >
                        Your Message
                      </Label>
                      <Textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or question..."
                        className="resize-none"
                        required
                      />
                    </div>

                    <Separator className="my-6" />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    {message && (
                      <Alert className="border-green-200 bg-green-50">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-700 font-medium">
                          {message}
                        </AlertDescription>
                      </Alert>
                    )}
                  </form>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>

        {/* Bottom CTA Section */}
        <Card className="mx-4 sm:mx-6 lg:mx-8 mb-8 bg-gradient-to-r from-slate-900 to-blue-900 border-0 text-white">
          <CardContent className="py-16 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-slate-300 mb-8">
                Join hundreds of satisfied clients who have transformed their
                businesses with us.
              </p>
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold h-12 px-8"
              >
                Schedule a Free Consultation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
