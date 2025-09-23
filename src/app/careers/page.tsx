"use client";
import React, { useState } from "react";
import { ComponentProps } from "react";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

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

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Factory Manager",
    department: "Engineering",
    location: "Harare, Zimbabwe",
  },
  {
    id: 2,
    title: "Project Engineer",
    department: "Projects",
    location: "Harare, Zimbabwe",
  },
  {
    id: 3,
    title: "Marketing Executive",
    department: "Marketing",
    location: "Harare, Zimbabwe",
  },
];

// Note: Adjust the imports to match your project’s actual UI components.
// The following uses a Shadcn-like pattern (Card, Button, Dialog).
// Ensure you have these components available in your codebase.

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

const Page = () => {
  // No global state needed; each card handles its own dialog
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navigation />
      <div className="relative md:mt-26 mt-24 overflow-hidden"></div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Why Work With Us?
          </h2>
          <div className="mx-auto max-w-md space-y-2 mb-6">
            <p className="text-lg text-gray-600 mx-auto">
              We believe in a culture that fosters growth, innovation, and
              collaboration.
            </p>
            <p className="text-lg text-gray-600 mx-auto">
              Our team is our greatest asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                We invest in our employees' professional growth through
                mentorship and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section (Modern cards with Apply popups) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full cursor-pointer"
                        variant="outline"
                      >
                        View Details & Apply
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[520px]">
                      <DialogHeader className="mb-2">
                        <DialogTitle>Apply for {job.title}</DialogTitle>
                      </DialogHeader>
                      <form
                        action="https://formspree.io/f/your-form-id" // Replace with your FormSpree form ID
                        method="POST"
                        className="space-y-4"
                      >
                        <input type="hidden" name="job" value={job.title} />
                        <label className="block">
                          <span className="text-sm">Full Name</span>
                          <input
                            name="name"
                            type="text"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                          />
                        </label>
                        <label className="block">
                          <span className="text-sm">Email</span>
                          <input
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                          />
                        </label>
                        <label className="block">
                          <span className="text-sm">Cover Letter</span>
                          <textarea
                            name="message"
                            rows={4}
                            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                          ></textarea>
                        </label>
                        <Button type="submit" className="w-full cursor-pointer">
                          Submit Application
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            If you don&apos;t see an opening that fits your skills, we&apos;d
            still love to hear from you.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Connect With Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
