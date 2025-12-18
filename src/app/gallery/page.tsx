"use client";
import React, { useState } from "react";
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
        title: "Factory",
        category: "image",
        description:
          "A snapshot of our state-of-the-art manufacturing facility.",
        url: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=600&fit=crop",
      },
      {
        id: 2,
        title: "Office",
        category: "image",
        description: "Our corporate office where innovation begins.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1757938131/imgi_2_fb-storyfb_647_011616110611_d6eolt.jpg",
      },
      {
        id: 3,
        title: "6th Annual General Meeting",
        category: "image",
        description:
          "Highlights from our annual general meeting with investors and stakeholders.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1757938131/imgi_2_fb-storyfb_647_011616110611_d6eolt.jpg",
      },
      {
        id: 4,
        title: "Water Treatment System",
        category: "image",
        description:
          "An installed water treatment system in a rural community.",
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
      },
      {
        id: 5,
        title: "Wastewater Treatment System",
        category: "image",
        description: "A large-scale wastewater treatment plant.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1757938131/imgi_2_fb-storyfb_647_011616110611_d6eolt.jpg",
      },
      {
        id: 6,
        title: "Effluent Treatment System",
        category: "image",
        description: "An effluent treatment system for industrial use.",
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      },
      {
        id: 7,
        title: "Sustainable Products",
        category: "image",
        description:
          "Showcasing our range of sustainable and eco-friendly products.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1757938131/imgi_2_fb-storyfb_647_011616110611_d6eolt.jpg",
      },
      {
        id: 8,
        title: "Bio-Digester & Bio-Toilets",
        category: "image",
        description: "Our innovative bio-digester and bio-toilet solutions.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1757938131/imgi_2_fb-storyfb_647_011616110611_d6eolt.jpg",
      },
      {
        id: 9,
        title: "Hydration Monitoring System",
        category: "image",
        description:
          "A close-up of our advanced hydration monitoring technology.",
        url: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1757938131/imgi_2_fb-storyfb_647_011616110611_d6eolt.jpg",
      },
    ],
    videos: [
      {
        id: 1,
        title: "3MLD",
        category: "video",
        description: "An overview of our company's mission and vision.",
        url: "https://player.cloudinary.com/embed/?cloud_name=dsvfcckqy&public_id=3MLD_jftt8k&profile=cld-default",
        thumbnail:
          "https://img.youtube.com/vi/your-video-id-1/maxresdefault.jpg",
      },
      {
        id: 2,
        title: "6th Annual General Meeting",
        category: "video",
        description:
          "A summary of the key discussions and announcements from the AGM.",
        url: "https://www.youtube.com/embed/your-video-id-2",
        thumbnail:
          "https://img.youtube.com/vi/your-video-id-2/maxresdefault.jpg",
      },
      {
        id: 3,
        title: "Water Treatment System",
        category: "video",
        description: "A demonstration of our water treatment system in action.",
        url: "https://www.youtube.com/embed/your-video-id-3",
        thumbnail:
          "https://img.youtube.com/vi/your-video-id-3/maxresdefault.jpg",
      },
      {
        id: 4,
        title: "Wastewater Treatment System",
        category: "video",
        description: "A detailed look at our wastewater treatment process.",
        url: "https://www.youtube.com/embed/your-video-id-4",
        thumbnail:
          "https://img.youtube.com/vi/your-video-id-4/maxresdefault.jpg",
      },
      {
        id: 5,
        title: "Effluent Treatment System",
        category: "video",
        description:
          "Showcasing the efficiency of our industrial effluent treatment solutions.",
        url: "https://www.youtube.com/embed/your-video-id-5",
        thumbnail:
          "https://img.youtube.com/vi/your-video-id-5/maxresdefault.jpg",
      },
      {
        id: 6,
        title: "Sustainable Products",
        category: "video",
        description: "An introduction to our eco-friendly product line.",
        url: "https://www.youtube.com/embed/your-video-id-6",
        thumbnail:
          "https://img.youtube.com/vi/your-video-id-6/maxresdefault.jpg",
      },
      {
        id: 7,
        title: "Bio-Digester & Bio-Toilets",
        category: "video",
        description:
          "Learn about the benefits of our bio-digester and bio-toilet technology.",
        url: "https://www.youtube.com/embed/your-video-id-7",
        thumbnail:
          "https://img.youtube.com/vi/your-video-id-7/maxresdefault.jpg",
      },
      {
        id: 8,
        title: "Hydration Monitoring System",
        category: "video",
        description: "A brief on how our hydration monitoring system works.",
        url: "https://www.youtube.com/embed/your-video-id-8",
        thumbnail:
          "https://img.youtube.com/vi/your-video-id-8/maxresdefault.jpg",
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
                    <DialogContent className="max-w-4xl p-0">
                      {/* Added DialogHeader and DialogTitle for accessibility */}
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
                    <DialogContent className="max-w-4xl p-0">
                      {/* Added DialogHeader and DialogTitle for accessibility */}
                      <DialogHeader className="p-4">
                        <DialogTitle>{item.title}</DialogTitle>
                        <DialogDescription>
                          {item.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="aspect-w-16 aspect-h-9">
                        <iframe
                          src={`${item.url}?autoplay=1`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
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
