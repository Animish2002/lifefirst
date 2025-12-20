"use client";

import Turnstile from "@/app/TurnstileWidget";
import { useState, useEffect } from "react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

// Contact Form Popup Component
const ContactFormPopup = ({
  isOpen,
  onClose,
  solutionTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  solutionTitle: string;
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjkavwqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          solution: solutionTitle, // include solution title in submission
        }),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitMessage("");
          onClose();
        }, 2000);
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all duration-300">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-h-[84vh] w-[30rem] overflow-y-auto transform transition-all duration-300 scale-100 border border-white/20">
        {/* Header */}
        <div className="bg-zinc-100 text-zinc-800 rounded-t-2xl">
          <div className="flex justify-between items-start border-b border-zinc-200 p-4">
            <div>
              <h3 className="text-md font-bold mb-1">
                Interested in {solutionTitle}?
              </h3>
              <p className="text-zinc-900 text-xs">
                Get expert consultation today!
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-900 hover:text-zinc-800 cursor-pointer transition-colors p-1"
              aria-label="Close popup"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="py-4 px-4">
          {submitMessage ? (
            <div className="text-center py-2">
              <div className=" bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-green-600 font-medium">{submitMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-1 px-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-0.5"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-0.5"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-0.5"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-0.5"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-0.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none bg-white/80 backdrop-blur-sm"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Turnstile />

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 text-gray-600 bg-gray-100/80 backdrop-blur-sm rounded-lg hover:bg-gray-200/80 transition-colors font-medium"
                >
                  Maybe Later
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Get In Touch"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// Client Component for handling popup state
const SolutionPageClient = ({ solutionTitle }: { solutionTitle: string }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    // First popup after 3 seconds
    const firstTimer = setTimeout(() => {
      setShowContactForm(true);
    }, 3000);

    // Popup every 1 minute
    const interval = setInterval(() => {
      setShowContactForm(true);
    }, 60000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <ContactFormPopup
      isOpen={showContactForm}
      onClose={handleCloseContactForm}
      solutionTitle={solutionTitle}
    />
  );
};

export default SolutionPageClient;
