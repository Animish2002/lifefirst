import React from "react";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

const certificationsAndClients = [
  {
    title: "ISO Certification",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1758575747/iso_qqjfzt.jpg",
  },
  {
    title: "CE Certification",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1758575747/ce_approved_wut8xj.jpg",
  },
  {
    title: "Startup India",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1758575749/Make_in_India_kgecqj.png",
  },
  {
    title: "MSME",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1758575748/msme_lvs2fb.png",
  },
  {
    title: "MJP",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/mjp_xbwsxo.png",
  },
  {
    title: "PWD",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/pwd_gnabq8.jpg",
  },
  {
    title: "SKOCH",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/skoch_c7kbao.png",
  },
  {
    title: "India Achievers",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/india_achievers_sojonp.png",
  },
  {
    title: "Swift N Lift",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/swift_n_lift_lid9bg.png",
  },
  {
    title: "Collector Latur",
    imageUrl: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764880330/collector_latur_and_nanded_sfamuc.jpg",
  },
  {
    title: "Collector Nanded",
    imageUrl: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764880330/collector_latur_and_nanded_sfamuc.jpg",
  },
  // {
  //   title: "Clients Testimonies",
  //   imageUrl: "https://via.placeholder.com/150",
  // },
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
                className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
              >
                {/* Reduced height from h-40 to h-32 */}
                <div className="h-32 flex items-center justify-center mb-3">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                {/* Smaller text */}
                <h3 className="text-base font-semibold text-gray-800 text-center">
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
