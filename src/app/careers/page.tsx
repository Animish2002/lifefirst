"use client";
import React, { useState, useRef } from "react";
import { ComponentProps } from "react";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import { CheckCircle } from "lucide-react";
import TurnstileWidget, { TurnstileWidgetRef } from "../TurnstileWidget";

// Icons (keep or replace with your preferred icons)
const JobIcon = ({ className }: ComponentProps<"svg">) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 17H2c1.2 1.3 2.7 2.2 4.3 2.5v-2.1c-1.3-.2-2.5-1-3.6-1.8L2 15M10 15v5c0 1.1-.9 2-2 2s-2-.9-2-2v-5c0-1.1.9-2 2-2s2 .9 2 2zm12-4H2V3h20v8zm-5-3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

const GlobeIcon = ({ className }: ComponentProps<"svg">) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0-4-10 15.3 15.3 0 0 0 4-10z"></path>
    <path d="M2 12h20"></path>
  </svg>
);

const LightbulbIcon = ({ className }: ComponentProps<"svg">) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14c.2-.5 1-.8 1.5-.9a.4.4 0 0 1 .5.3c.4 1.3 1.2 2.6 2.3 3.6.4.4.8 1 1 1.6a.4.4 0 0 0 .5.3.4.4 0 0 0 .3-.5c-.3-.8-1-1.5-1.7-2.1-.8-.8-1.7-1.4-2.7-1.8a.4.4 0 0 0-.5.3z"></path>
    <path d="M14 9a2 2 0 0 1 2-2 2 2 0 0 1 2 2c0 2.2-1.8 4-4 4z"></path>
    <path d="M12 2v6"></path>
    <path d="M12 18v4"></path>
    <path d="M8 12H2"></path>
    <path d="M22 12H16"></path>
    <path d="M4 18l4-4"></path>
    <path d="M18 18l-4-4"></path>
    <path d="M4 6l4 4"></path>
    <path d="M18 6l-4 4"></path>
  </svg>
);

// Success Modal Component
const MessageModal = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex items-center mb-4">
          <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
          <h3 className="text-lg font-semibold text-gray-900">
            Application Submitted!
          </h3>
        </div>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  pdf: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Project Engineer",
    department: "Projects",
    location: "Wadki",
    pdf: "https://careers.life-first.in/JD%20FOR%20PROJECT%20ENGINEER%20(1).pdf",
  },
  {
    id: 2,
    title: "Process Design Engineer",
    department: "Process Engineering",
    location: "Wadki",
    pdf: "https://careers.life-first.in/JD%20FOR%20PROCESS%20DESIGN%20ENGINEER.pdf",
  },
  {
    id: 3,
    title: "Plumber",
    department: "Maintenance / Projects",
    location: "Wadki",
    pdf: "https://careers.life-first.in/JD%20FOR%20PLUMBER.pdf",
  },
  {
    id: 4,
    title: "Electromechanical Engineer",
    department: "Engineering / Projects",
    location: "Project Site / Wadki",
    pdf: "https://careers.life-first.in/JD%20FOR%20ELECTROMACHANICAL%20ENGINEER.pdf",
  },
  {
    id: 5,
    title: "Electrician",
    department: "Electrical / Maintenance / Projects",
    location: "Project Site / Wadki",
    pdf: "https://careers.life-first.in/JD%20FOR%20ELECTRICIAN.pdf",
  },
  {
    id: 6,
    title: "Civil Engineer",
    department: "Engineering / Projects",
    location: "Project Site / Wadki",
    pdf: "https://careers.life-first.in/JD%20FOR%20CIVIL%20ENGINEER.pdf ",
  },
  {
    id: 7,
    title: "HR & Admin Executive",
    department: "HR & Admin",
    location: "Wadki",
    pdf: "https://careers.life-first.in/JD%20FOR%20HR%20ADMIN.pdf",
  },
];

import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [showForm, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentJobTitle, setCurrentJobTitle] = useState("");
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);
  
  // Add Turnstile ref
  const turnstileRef = useRef<TurnstileWidgetRef>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get Turnstile token
    const token = turnstileRef.current?.getToken();
    if (!token) {
      alert("Please complete the security verification.");
      return;
    }

    setLoading(true);

    // Store form reference before async operations
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add Turnstile token to FormData
    formData.append("turnstileToken", token);

    try {
      const response = await fetch(
        "https://formflowapi.thefortune.club/api/submit/2ddf5b7e-e0c6-4877-878f-584885823abe",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsModalOpen(true);
        setShowForm(false);
        setOpenDialogId(null); // Close the dialog
        form.reset();
        // Reset Turnstile on success
        turnstileRef.current?.reset();
      } else {
        alert("Something went wrong. Please try again later.");
        // Reset Turnstile on error
        turnstileRef.current?.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
      // Reset Turnstile on error
      turnstileRef.current?.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navigation />
      <div className="relative md:mt-26 mt-24 overflow-hidden"></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Join Our Team
          </h1>
          <p className="text-md md:text-lg font-light drop-shadow-md max-w-2xl mx-auto">
            We&apos;re building the future, and we need your help. Explore our
            open roles and find your next opportunity.
          </p>
        </div>
      </section>

      {/* Why Join Us Section (two centered sentences) */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 p-2 mb-2">
            Why Work With Us?
          </h2>
          <div className="mb-8">
            <p className="text-lg text-gray-600 max-w-6xl mx-auto">
              We believe in a culture that fosters growth, innovation, and
              collaboration.
            </p>
            <p className="text-lg text-gray-600 mx-auto">
              Our team is our greatest asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <LightbulbIcon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Innovation at Core
              </h3>
              <p className="text-gray-500">
                We encourage creativity and a problem-solving mindset to tackle
                complex challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <GlobeIcon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Global Impact
              </h3>
              <p className="text-gray-500">
                Your work will have a real-world impact on a global scale,
                serving customers worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <JobIcon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Growth & Development
              </h3>
              <p className="text-gray-500">
                We invest in our employees&apos; professional growth through
                mentorship and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section (Modern cards with Apply popups) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 p-2 mb-6 text-center">
            Current Openings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="flex flex-col gap-2 py-2">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg font-semibold">
                    {job.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {job.department} • <br /> {job.location}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="p-4 pt-0">
                  <Dialog
                    open={openDialogId === job.id}
                    onOpenChange={(open) => {
                      setOpenDialogId(open ? job.id : null);
                      if (!open) setShowForm(false);
                      // Reset Turnstile when dialog opens
                      if (open) {
                        setTimeout(() => turnstileRef.current?.reset(), 100);
                      }
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button
                        className="w-full cursor-pointer"
                        variant="outline"
                        onClick={() => {
                          setCurrentJobTitle(job.title);
                          setShowForm(false);
                          setOpenDialogId(job.id);
                        }}
                      >
                        View Details & Apply
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[560px] rounded-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-thin">
                      {/* Header */}
                      <div className=" px-5 py-3 ">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">
                            {job.title}
                          </DialogTitle>
                          <p className="text-sm ">
                            {job.department} • {job.location}
                          </p>
                        </DialogHeader>
                      </div>

                      <div className="px-4 space-y-4">
                        {/* Smaller PDF Viewer */}
                        <div className="border rounded-xl overflow-hidden h-[320px]">
                          <iframe
                            src={`${job.pdf}`}
                            className="w-full h-full"
                          />
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between items-center px-4 py-4">
                          <a
                            href={`${job.pdf}`}
                            download
                            className="px-4 py-1.5 text-sm border rounded-full hover:bg-gray-100 transition"
                          >
                            Download Job Description
                          </a>

                          <Button
                            className="rounded-full px-5 py-1.5 text-sm bg-blue-600 hover:bg-blue-700"
                            onClick={() => setShowForm(true)}
                          >
                            Apply Now
                          </Button>
                        </div>

                        {/* Apply Form (Small & Clean) */}
                        {showForm && (
                          <div className="border rounded-xl p-4 space-y-3 mb-4">
                            <h3 className="text-sm font-semibold">
                              Submit Application
                            </h3>

                            <form
                              onSubmit={handleFormSubmit}
                              className="space-y-3"
                            >
                              <input
                                type="hidden"
                                name="jobTitle"
                                value={job.title}
                              />

                              <div className="space-y-1">
                                <Label className="text-xs">Full Name</Label>
                                <Input name="name" required className="h-9" />
                              </div>

                              <div className="space-y-1">
                                <Label className="text-xs">Email</Label>
                                <Input
                                  name="email"
                                  type="email"
                                  required
                                  className="h-9"
                                />
                              </div>

                              <div className="space-y-1">
                                <Label className="text-xs">Phone</Label>
                                <Input name="phone" required className="h-9" />
                              </div>

                              <div className="space-y-1">
                                <Label className="text-xs">Resume</Label>
                                <Input
                                  type="file"
                                  name="resume"
                                  className="h-9"
                                />
                              </div>
                              
                              {/* Turnstile Widget with ref */}
                              <TurnstileWidget ref={turnstileRef} />
                              
                              <Button
                                className="w-full rounded-full h-9 bg-blue-600 hover:bg-blue-700"
                                type="submit"
                                disabled={loading}
                              >
                                {loading ? "Submitting..." : "Submit"}
                              </Button>
                            </form>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Success Modal */}
      {isModalOpen && (
        <MessageModal
          message="Thank you for your application! We'll review your submission and get back to you soon."
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Page;