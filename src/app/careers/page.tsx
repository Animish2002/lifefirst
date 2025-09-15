"use client";
import React, { useState } from "react";
import { ComponentProps } from "react";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

// Assuming these icons are available or can be replaced with SVG/Lucide icons
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

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
  },
  {
    id: 3,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
  },
  {
    id: 4,
    title: "Data Analyst",
    department: "Analytics",
    location: "San Francisco, CA",
  },
];

const Page = () => {
  const [openJobId, setOpenJobId] = useState<number | null>(null);

  const toggleJobDescription = (id: number) => {
    setOpenJobId(openJobId === id ? null : id);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navigation />
      <div className="relative md:mt-26 mt-24 overflow-hidden"></div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-18 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Join Our Team
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto">
            We&apos;re building the future, and we need your help. Explore our
            open roles and find your next opportunity.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We believe in a culture that fosters growth, innovation, and
            collaboration. Our team is our greatest asset.
          </p>
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
                We invest in our employees professional growth through
                mentorship and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Current Openings
          </h2>
          <ul className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <li
                key={job.id}
                className="py-6 cursor-pointer"
                onClick={() => toggleJobDescription(job.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-gray-500">
                      {job.department} | {job.location}
                    </p>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    {openJobId === job.id ? "Close" : "View Details"}
                  </button>
                </div>
                {openJobId === job.id && (
                  <div className="mt-4 p-4 rounded-lg bg-gray-100 border-l-4 border-blue-500 text-gray-700">
                    <h4 className="font-bold mb-2">Job Description</h4>
                    <p>
                      This is a placeholder for the full job description. We are
                      seeking a passionate and talented individual to join our
                      team. You will be responsible for a range of tasks, from
                      collaborating with cross-functional teams to developing
                      new features.
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
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
