"use client";
import Footer from "@/Landing/Footer";
import Navigation from "@/Landing/Navigation";
import React, { useState } from "react";

const investorNews = [
  {
    id: 1,
    title: "Company Reports Strong Q4 2023 Results",
    date: "January 25, 2024",
    description:
      "Our company announced its financial results for the fourth quarter of fiscal year 2023, showcasing significant growth in key market segments and exceeding revenue expectations. The report highlights strategic investments in technology and global expansion efforts.",
  },
  {
    id: 2,
    title: "Leadership Team Welcomes New Chief Financial Officer",
    date: "February 10, 2024",
    description:
      "We are pleased to announce the appointment of Jane Doe as the new Chief Financial Officer. With over 20 years of experience in the technology sector, Jane will be instrumental in guiding our financial strategy for future growth.",
  },
  {
    id: 3,
    title: "Partnership with Global Tech Firm Announced",
    date: "March 1, 2024",
    description:
      "We have entered a strategic partnership with a leading global technology firm to accelerate product development and market reach. This collaboration is expected to create synergies and deliver innovative solutions to our customers worldwide.",
  },
  {
    id: 4,
    title: "Annual Shareholder Meeting Scheduled for April",
    date: "March 15, 2024",
    description:
      "The annual shareholder meeting will be held on April 20, 2024, at our corporate headquarters. Shareholders will be invited to discuss the company's performance and future outlook. A live webcast will also be available for remote attendees.",
  },
];

const Page = () => {
  const [openNewsId, setOpenNewsId] = useState<number | null>(null);

  const toggleNews = (id: number) => {
    setOpenNewsId(openNewsId === id ? null : id);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-4 sm:px-6 lg:px-8 md:mt-24 h-[50vh]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Investor News
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto">
            Stay up-to-date with our latest financial reports, press releases,
            and corporate announcements.
          </p>
        </div>
      </section>

      {/* News Listings Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Latest Updates
          </h2>
          <ul className="divide-y divide-gray-200">
            {investorNews.map((news) => (
              <li
                key={news.id}
                className="py-6 cursor-pointer"
                onClick={() => toggleNews(news.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {news.title}
                    </h3>
                    <p className="text-gray-500">{news.date}</p>
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    {openNewsId === news.id ? "Close" : "Read More"}
                  </button>
                </div>
                {openNewsId === news.id && (
                  <div className="mt-4 p-4 rounded-lg bg-gray-100 border-l-4 border-blue-500 text-gray-700">
                    <p>{news.description}</p>
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
            Financial Filings
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Access our complete library of financial documents and reports.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Reports
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
