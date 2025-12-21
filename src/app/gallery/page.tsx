"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Eye, Play, Image } from "lucide-react";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const Gallery = () => {
  const galleryData = {
    images: [
      {
        id: 1,
        title: "Effluent Treatment Plant",
        category: "image",
        description:
          "A snapshot of our state-of-the-art 75 KLD ETP",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766269478/Screenshot_20250812_235526_Gallery_dmiay2.jpg",
      },
      {
        id: 2,
        title: "Sewage Treatment Plant",
        category: "image",
        description: "150 KLD Sewage Treatment Plant",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766269466/Dist_Jail_150KLD_eqogap.jpg",
      },
      {
        id: 3,
        title: "50 KLD Sewage Treatment Plant",
        category: "image",
        description:
          "50 KLD Sewage Treatment Plant",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766269465/20251216_194910_1_o7uipk.jpg",
      },
      {
        id: 4,
        title: "Lamella Clarifier and 75 KLD ETP",
        category: "image",
        description:
          "Lamella Clarifier and 75 KLD ETP",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766269451/62440_xwgghp.jpg",
      },
      {
        id: 5,
        title: "Wastewater Treatment System",
        category: "image",
        description: "A large-scale wastewater treatment plant.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766269453/20250706_164037_n4wcja.jpg",
      },
      {
        id: 6,
        title: "Effluent Treatment System",
        category: "image",
        description: "An effluent treatment system for industrial use.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766269467/file_00000000b32461f491937f76ec1015e4_vtjqqa.jpg",
      },
      {
        id: 7,
        title: "Sustainable Products",
        category: "image",
        description:
          "Showcasing our range of sustainable and eco-friendly products.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766269465/20251104_173856_lnqvmc.jpg",
      },
      {
        id: 8,
        title: "Bio-Digester & Bio-Toilets",
        category: "image",
        description: "Our innovative bio-digester and bio-toilet solutions.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766269460/20251120_164212_vuembb.jpg",
      },
      {
        id: 9,
        title: "Hydration Monitoring System",
        category: "image",
        description:
          "A close-up of our advanced hydration monitoring technology.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766269457/20250824_134527_phtwxh.jpg",
      },
    ],
    videos: [
      {
        id: 1,
        title: "3MLD",
        category: "video",
        description: "3MLD in action",
        url: "https://player.cloudinary.com/embed/?cloud_name=dsvfcckqy&public_id=3MLD_jftt8k&profile=cld-default",
        thumbnail:
          "https://res.cloudinary.com/dsvfcckqy/video/upload/so_0/3MLD_jftt8k.jpg",
      },
      {
        id: 2,
        title: "Project - 2000x1800mm Pressure Vessels Filters",
        category: "video",
        description:
          "Dispatch of our 2000x1800mm Pressure Vessels Filters",
        url: "https://player.cloudinary.com/embed/?cloud_name=dsvfcckqy&public_id=2000x1800mm_Filter_by_LFCT_h3og60&profile=cld-default",
       thumbnail:
          "https://res.cloudinary.com/dsvfcckqy/video/upload/so_0/2000x1800mm_Filter_by_LFCT_h3og60.jpg"
      },
      {
        id: 3,
        title: "Diwali Celebrations at LifeFirst",
        category: "video",
        description: "Lighting up the world with one drop at a time",
        url: "https://player.cloudinary.com/embed/?cloud_name=dsvfcckqy&public_id=LFCT_DIWALI_isivai&profile=cld-default",
        thumbnail:
          "https://res.cloudinary.com/dsvfcckqy/video/upload/so_0/LFCT_DIWALI_isivai.jpg",
      },
      {
        id: 4,
        title: "Dussehra Celebrations at LifeFirst",
        category: "video",
        description: "Celebrating Life's festivals with LifeFirst at our Factory",
        url: "https://player.cloudinary.com/embed/?cloud_name=dsvfcckqy&public_id=EVENT_d7xjeb&profile=cld-default",
        thumbnail:
          "https://res.cloudinary.com/dsvfcckqy/video/upload/so_0/EVENT_d7xjeb.jpg",
      },
      {
        id: 5,
        title: "2MLD Water Treatment Plant Process Video",
        category: "video",
        description:
          "Showcasing the process and flow of our 2 millions Water Treatment Plant",
        url: "https://player.cloudinary.com/embed/?cloud_name=dsvfcckqy&public_id=2MLD_WTP_1_1_vgk0lh&profile=cld-default",
        thumbnail:
          "https://res.cloudinary.com/dsvfcckqy/video/upload/so_0/2MLD_WTP_1_1_vgk0lh.jpg",
      },
      {
        id: 6,
        title: "120 KLD Sewage Treatment Plant Export Dispatch Activity - Kuwait",
        category: "video",
        description: "Export dispatch and logistics coordination for a 120 KLD sewage treatment plant supplied for a project in Kuwait.",
        url: "https://player.cloudinary.com/embed/?cloud_name=dsvfcckqy&public_id=Kuwait_1_epe0pj&profile=cld-default",
        thumbnail:
          "https://res.cloudinary.com/dsvfcckqy/video/upload/so_0/Kuwait_1_epe0pj.jpg",
      },
      {
        id: 7,
        title: "6th Anniversary celebration of LifeFirst",
        category: "video",
        description:
          "Commemorating six years of LifeFirst's growth, achievements, and continued commitment to excellence.",
        url: "https://player.cloudinary.com/embed/?cloud_name=dsvfcckqy&public_id=LFCT_6th_Anniversary_1_glokhn&profile=cld-default",
        thumbnail:
          "https://res.cloudinary.com/dsvfcckqy/video/upload/so_0/LFCT_6th_Anniversary_1_glokhn.jpg",
      },
      
    ],
  };

  return (
    <>
      <Navigation />
      <section className="py-8 md:mt-26 mt-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 p-2 mb-2">
              Snapshots of Sustainability in Action
            </h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              A visual story of LifeFirst projects transforming water
              infrastructure and building a better future, one installation at a
              time.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Image className="w-6 h-6" /> Images
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
              {galleryData.images.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative cursor-pointer">
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="text-white w-8 h-8" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl p-0">
                      <DialogHeader className="p-4">
                        <DialogTitle>{item.title}</DialogTitle>
                        <DialogDescription>
                          {item.description}
                        </DialogDescription>
                      </DialogHeader>
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>

          {/* Video Gallery Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Play className="w-6 h-6" /> Videos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData.videos.map((item) => (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative cursor-pointer">
                        <img
                          src={item.thumbnail}
                          alt={`Thumbnail for ${item.title}`}
                          className="w-full h-56 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="text-white w-12 h-12" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 overflow-hidden">
                      <DialogHeader className="p-4 pb-2">
                        <DialogTitle className="text-xl">{item.title}</DialogTitle>
                        <DialogDescription className="text-sm">
                          {item.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="relative w-full pb-[56.25%]">
                        <iframe
                          src={`${item.url}?autoplay=1`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div className="text-center mt-12">
            {/* Additional Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-4">
                Transform Your Water Management Today
              </h3>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-6">
                Join hundreds of satisfied clients who have revolutionized their
                Water, Wastewater, and Sanitation Management with our
                cutting-edge solutions. Connect with us today to explore how we
                can transform your project.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-md font-medium cursor-pointer transition-all duration-200 hover:from-blue-700 hover:to-cyan-700">
                  Get Expert Guidance
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;