import React from "react";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

const certificationsAndClients = [
  {
    title: "ISO Certification",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575747/iso_qqjfzt.jpg",
  },
  {
    title: "CE Certification",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575747/ce_approved_wut8xj.jpg",
  },
  {
    title: "Startup India",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575749/Make_in_India_kgecqj.png",
  },
  {
    title: "MSME",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/v1758575748/msme_lvs2fb.png",
  },
  {
    title: "MJP",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "PWD",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "SKOCH",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "India Achievers",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Swift N Lift",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Collector Latur",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Collector Nanded",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Clients Testimonies",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const page = () => {
  return (
    <>
      <Navigation />
      <div className="relative md:mt-26 mt-24 overflow-hidden"></div>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Certifications & Clients
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificationsAndClients.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-64"
              >
                <div className="flex-grow flex items-center justify-center p-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mt-auto">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
