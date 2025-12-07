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
    title: "Starting office and factory in Africa (Zimbabwe)",
    date: "August 27, 2025",
    description: (
      <>
        <strong>LifeFirst Expands to Zimbabwe</strong>
        <p>
          LifeFirst Concepts & Technologies (Private) Limited is proud to
          announce the launch of its operations in Zimbabwe. Through this
          expansion, LifeFirst aims to bring world-class sustainable water,
          wastewater, and sanitation solutions to support the country&apos;s growing
          infrastructure and environmental needs. Our Zimbabwe office will serve
          as a regional hub to collaborate with government bodies, private
          institutions, and development partners—delivering innovative, modular,
          and eco-efficient systems designed to improve community health, water
          security, and environmental resilience.
        </p>

        {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <img
          src="https://res.cloudinary.com/dsvfcckqy/image/upload/f_webp/v1765113551/investor_item_4_1_nijuwo.png"
          alt="LifeFirst Zimbabwe Office"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
        <img
          src="https://res.cloudinary.com/dsvfcckqy/image/upload/f_webp/v1765113551/investor_item_4_2_cl4gnp.png"
          alt="LifeFirst Zimbabwe Factory"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
      </>
    ),
  },
  {
    id: "item-2",
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
    id: "item-3",
    title: "Strategic MoU Signing with UTCO, Zimbabwe",
    date: "November 14, 2025",
    description: (
      <>
        <p>
          LifeFirst Concepts & Technologies Pvt. Ltd. is proud to announce the
          signing of a strategic{" "}
          <strong>Memorandum of Understanding (MoU)</strong> with{" "}
          <strong>UTCO</strong>, a fully owned subsidiary of the EXODUS Group,
          Zimbabwe.
        </p>
        <p className="mt-2">
          <strong>EXODUS</strong> is one of Zimbabwe&apos;s most respected and
          fast-growing infrastructure companies, engaged in{" "}
          <strong>
            large-scale construction, civil engineering, mining services,
            housing development, and road infrastructure projects.
          </strong>{" "}
          With a strong track record of delivering complex projects across the
          country, EXODUS has earned a reputation for technical capability,
          reliability, and a deep commitment to national development. UTCO, as
          its execution arm, brings strong operational efficiencies and
          on-ground project management strength.
        </p>
        <p className="mt-2">
          This MoU brings together the strengths of both organizations to
          jointly deliver cutting-edge{" "}
          <strong>Water, Wastewater, and Sanitation solutions</strong>{" "}
          throughout Zimbabwe and the region.
        </p>
        <p className="mt-2">
          Through this collaboration, LifeFirst and UTCO will work jointly on:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>
              Rehabilitation and modernization of Water & Wastewater Treatment
              Plants
            </strong>
          </li>
          <li>
            <strong>
              Deployment of prefabricated and containerized STPs, ETPs, and
              Biodigesters
            </strong>
          </li>
          <li>
            <strong>
              Engineering services, O&M support, and technical capacity-building
            </strong>
          </li>
          <li>
            <strong>
              Supporting municipal councils, industries, institutions, and
              communities with sustainable solutions
            </strong>
          </li>
          <li>
            <strong>
              Creating scalable, future-ready project models that attract
              investment and strengthen infrastructure resilience
            </strong>
          </li>
        </ul>
        <p className="mt-4">
          This partnership reinforces LifeFirst&apos;s commitment to supporting
          Zimbabwe&apos;s water and sanitation transformation, while opening
          meaningful opportunities for{" "}
          <strong>
            joint execution, technology integration, and regional expansion.
          </strong>
        </p>
        {/* Image Gallery */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <img
          src="https://res.cloudinary.com/dsvfcckqy/image/upload/f_webp/v1765114102/investor_item_2_jgwzbi.jpg"
          alt="MOU Signed between LifeFirst and UTCO"
          className="w-full sm:w-[calc(50%-0.5rem)] max-w-md h-auto rounded-lg shadow-md object-cover"
        />
      </div>
      </>
    ),
  },
  {
    id: "item-4",
    title:
      "Strategic MoU Signing with ZINWA – Managing 534 National Water Assets Across Zimbabwe",
    date: "November 26, 2025",
    description: (
      <>
        <p>
          LifeFirst Concepts & Technologies Pvt. Ltd. is proud to announce the
          signing of a major{" "}
          <strong> Memorandum of Understanding (MoU) </strong>
          with the <strong>Zimbabwe National Water Authority (ZINWA)</strong>,
          the central authority responsible for national water supply, water
          treatment, and water resources management.
        </p>
        <p className="mt-2">
          This landmark partnership positions LifeFirst as a key technology and
          implementation partner in strengthening Zimbabwe&apos;s water
          infrastructure. Under this MoU, LifeFirst and ZINWA will jointly
          collaborate on the{" "}
          <strong>
            assessment, rehabilitation, modernization, and long-term management
            of all 534 national water assets,
          </strong>{" "}
          which include:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>Water Treatment Plants (WTPs)</strong>
          </li>
          <li>
            <strong>Sewage Treatment Plants (STPs)</strong>
          </li>
          <li>
            <strong>Raw water & clear water pumping stations</strong>
          </li>
          <li>
            <strong>Transmission and distribution systems</strong>
          </li>
        </ul>

        <p className="mt-2">
          <strong>Scope of Collaboration</strong>
        </p>

        <p className="mt-2">
          Through this MoU, LifeFirst will support ZINWA in:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>
              Conducting detailed technical assessments for all water and
              wastewater assets
            </strong>
          </li>
          <li>
            <strong>Rehabilitating and modernizing aged infrastructure</strong>
          </li>
          <li>
            <strong>
              Introducing prefabricated & containerized treatment solutions
              where required
            </strong>
          </li>
          <li>
            <strong>
              Implementing automation, SCADA, and energy-efficient pumping
              systems
            </strong>
          </li>
          <li>
            <strong>
              Deploying decentralized STPs, ETPs, and Biodigesters
            </strong>
          </li>
          <li>
            <strong>
              Enhancing operational efficiency and reducing downtime
            </strong>
          </li>
          <li>
            <strong>
              Providing training, O&M support, and capacity-building for ZINWA
              teams
            </strong>
          </li>
        </ul>

        <p className="mt-2">
          <strong>A National-Scale Initiative for Water Security</strong>
        </p>

        <p className="mt-2">
          This collaboration represents one of Zimbabwe&apos;s most
          comprehensive water-sector modernization initiatives. It combines
          ZINWA&apos;s national mandate with LifeFirst&apos;s advanced
          technologies and engineering expertise to ensure:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Improved Water Quality</strong>
          </li>
          <li>
            <strong>Reliable Supply</strong>
          </li>
          <li>
            <strong>Reduced non-revenue water</strong>
          </li>
          <li>
            <strong>Sustainable long-term infrastructure development</strong>
          </li>
        </ul>

        <p className="mt-2">
          LifeFirst is honoured to be entrusted with this responsibility and
          remains committed to contributing meaningfully to Zimbabwe&apos;s{" "}
          <strong>water security, resilience, and sustainable growth.</strong>
        </p>
        {/* Image Gallery */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <img
          src="https://res.cloudinary.com/dsvfcckqy/image/upload/f_webp/v1765113771/investor_item_3_zhnzfl.jpg"
          alt="MOU Signed between LifeFirst and Zinwa"
          className="w-full sm:w-[calc(50%-0.5rem)] max-w-md h-auto rounded-lg shadow-md object-cover"
        />
        
      </div>
      </>
    ),
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


