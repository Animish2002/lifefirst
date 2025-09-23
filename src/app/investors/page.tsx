"use client";
import Footer from "@/Landing/Footer";
import Navigation from "@/Landing/Navigation";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const investorNews = [
  {
    id: "item-1",
    title: "Company Reports for Financial Year 2025–26",
    date: "September 23, 2025",
    description:
      "LifeFirst Concepts & Technologies Pvt. Ltd. is committed to maintaining transparency, accountability, and strong corporate governance as we continue to expand our footprint in India, Africa, and beyond. The Company Reports for the financial year 2025–26 will provide our investors with: Comprehensive Financial Insights, Strategic Progress Updates, Project Performance & Impact, and Forward-Looking Strategy. These reports are designed to ensure clarity, confidence, and alignment with LifeFirst’s mission of creating sustainable infrastructure solutions while delivering consistent value and returns.",
  },
  {
    id: "item-2",
    title: "LifeFirst Signs Joint Venture Agreement with Tech-Aeon, Zimbabwe",
    date: "September 22, 2025",
    description:
      "LifeFirst Concepts & Technologies Pvt. Ltd. is proud to announce the signing of a Joint Venture (JV) Agreement with Tech-Aeon Pvt. Ltd., a leading Zimbabwe-based engineering and infrastructure solutions company. Under this JV, LifeFirst and Tech-Aeon will jointly establish a state-of-the-art manufacturing unit in Zimbabwe to produce FRP Bio-Digesters and Containerized Water & Wastewater Treatment Plants. This facility will cater to the broader African continent, delivering 'Make-in-Africa' solutions. From an investor’s perspective, this JV provides a Regional Manufacturing Footprint, Scalable Market Access, and Strategic Growth & Partnerships.",
  },
  {
    id: "item-3",
    title: "Signing of Letter of Intent with CHAK",
    date: "August 22, 2025",
    description:
      "We are delighted to announce that LifeFirst Concepts & Technologies Pvt. Ltd. has signed a Letter of Intent (LoI) with the Christian Health Association of Kenya (CHAK)—the leading faith-based health network in Kenya, representing over 600 health facilities. This collaboration will enable LifeFirst to bring its advanced water and wastewater treatment solutions as well as hydration monitoring systems to CHAK’s vast healthcare network. From an investor’s perspective, this LoI represents Market Expansion, Social Impact + Business Growth, and Strategic Partnerships.",
  },
  {
    id: "item-4",
    title: "Starting office & factory in Africa (Zimbabwe)",
    date: "August 27, 2025",
    description:
      "Details regarding the start of our new office and factory in Zimbabwe, along with the attached company registration and tax certificates.",
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
      <div className="relative md:mt-26 mt-24 overflow-hidden"></div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Investor News
          </h1>
          <p className="text-md md:text-lg font-light drop-shadow-md max-w-2xl mx-auto">
            Stay up-to-date with our latest financial reports, press releases,
            and corporate announcements.
          </p>
        </div>
      </section>

      {/* News Listings Section */}
      <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Latest Updates
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {investorNews.map((news) => (
              <AccordionItem key={news.id} value={news.id}>
                <AccordionTrigger>
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-semibold text-gray-900 text-left">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-500 text-left">
                      {news.date}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">{news.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
