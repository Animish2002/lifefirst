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
    description: (
      <>
        <p>
          <b>LifeFirst Concepts & Technologies Pvt.</b> Ltd. is committed to
          maintaining transparency, accountability, and strong corporate
          governance as we continue to expand our footprint in India, Africa,
          and beyond. The Company Reports for the financial year 2025–26 will
          provide our investors with:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Comprehensive Financial Insights:</strong> Detailed analysis
            of revenue growth, profitability, and key financial metrics to
            showcase the company&apos;s financial health.
          </li>
          <li>
            <strong>Strategic Progress Updates:</strong> Highlights of
            milestones achieved, including new joint ventures, market
            expansions, and technology innovations undertaken during the year.
          </li>
          <li>
            <strong>Project Performance & Impact:</strong> Overview of major
            projects executed across water, wastewater treatment, and hydration
            monitoring solutions, emphasizing both economic value and
            sustainability impact.
          </li>
          <li>
            <strong>Forward-Looking Strategy:</strong> Insights into growth
            plans, market opportunities, and future investments that align with
            LifeFirst&apos;s long-term vision for scaling operations across
            multiple geographies.
          </li>
        </ul>
        <p className="mt-4">
          For investors, these reports are designed to ensure clarity,
          confidence, and alignment with LifeFirst&apos;s mission of creating
          sustainable infrastructure solutions while delivering consistent value
          and returns.
        </p>
      </>
    ),
  },
  {
    id: "item-2",
    title: "LifeFirst Signs Joint Venture Agreement with Tech-Aeon, Zimbabwe",
    date: "September 22, 2025",
    description: (
      <>
        <p>
          LifeFirst Concepts & Technologies Pvt. Ltd. is proud to announce the
          signing of a Joint Venture (JV) Agreement with Tech-Aeon Pvt. Ltd., a
          leading Zimbabwe-based engineering and infrastructure solutions
          company. Under this JV, LifeFirst and Tech-Aeon will jointly establish
          a state-of-the-art manufacturing unit in Zimbabwe to produce FRP
          Bio-Digesters and Containerized Water & Wastewater Treatment Plants.
          This facility will cater not only to Zimbabwe but also to the broader
          African continent, delivering Make-in-Africa solutions that are
          cost-effective, sustainable, and customized for local needs.
        </p>
        <p className="mt-4">
          From an investor&apos;s perspective, this JV provides:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Regional Manufacturing Footprint:</strong> Reduces shipping
            costs, lead times, and import dependencies by enabling local
            production for African markets.
          </li>
          <li>
            <strong>Scalable Market Access:</strong> Positions LifeFirst at the
            heart of Africa&apos;s growing demand for water, sanitation, and
            environmental infrastructure solutions.
          </li>
          <li>
            <strong>Strategic Growth & Partnerships:</strong> Opens doors for
            collaborations with governments, NGOs, and private sector players
            across multiple African countries.
          </li>
          <li>
            <strong>High-Impact Sustainability Projects:</strong> Aligns with
            Africa&apos;s clean water, sanitation, and climate resilience goals,
            creating opportunities for both economic and social returns.
          </li>
        </ul>
        <p className="mt-4">
          This milestone marks a pivotal step in LifeFirst&apos;s Africa growth
          strategy, strengthening its commitment to sustainable infrastructure
          and investor value creation.
        </p>
      </>
    ),
  },
  {
    id: "item-3",
    title: "Signing of Letter of Intent with CHAK",
    date: "August 22, 2025",
    description: (
      <>
        <p>
          We are delighted to announce that LifeFirst Concepts & Technologies
          Pvt. Ltd. has signed a Letter of Intent (Lol) with the Christian
          Health Association of Kenya (CHAK)—the leading faith-based health
          network in Kenya, representing over 600 health facilities including
          hospitals, health centers, and community programs across the country.
          This collaboration will enable LifeFirst to bring its advanced water
          and wastewater treatment solutions as well as hydration monitoring
          systems to CHAK&apos;s vast healthcare network, supporting safe water
          access, sustainable sanitation, and improved healthcare infrastructure
          in Kenya.
        </p>
        <p className="mt-4">
          From an investor&apos;s perspective, this Lol represents:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Market Expansion:</strong> Direct access to a large,
            organized healthcare network in one of Africa&apos;s fastest-growing
            economies.
          </li>
          <li>
            <strong>Social Impact + Business Growth:</strong> Aligns LifeFirst
            with critical health and sustainability initiatives, creating
            opportunities for high-impact, revenue-generating projects.
          </li>
          <li>
            <strong>Strategic Partnerships:</strong> Strengthens
            LifeFirst&apos;s position in Africa as a trusted partner for
            government agencies, NGOs, and private stakeholders seeking
            world-class water and sanitation solutions.
          </li>
        </ul>
        <p className="mt-4">
          This milestone marks a significant step toward scalable growth in
          Africa&apos;s healthcare and infrastructure sector while reinforcing
          LifeFirst&apos;s commitment to sustainability, innovation, and public
          health improvement.
        </p>
      </>
    ),
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
                  {/* Corrected this line: removed the extra <p> tag */}
                  <div className="text-gray-700">{news.description}</div>
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
