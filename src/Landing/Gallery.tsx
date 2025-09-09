"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Eye,
  MapPin,
  Calendar,
  Droplets,
  Factory,
  Zap,
  Recycle,
} from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Municipal Water Treatment Plant",
      category: "municipal",
      location: "Mumbai, Maharashtra",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      description:
        "Complete overhaul of municipal water treatment facility serving 2 million residents",
      icon: <Droplets className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "Industrial Effluent Treatment",
      category: "industrial",
      location: "Pune, Maharashtra",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description:
        "Zero liquid discharge system for textile manufacturing plant",
      icon: <Factory className="w-4 h-4" />,
    },
    {
      id: 3,
      title: "Sewage Treatment Plant",
      category: "municipal",
      location: "Nashik, Maharashtra",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=600&h=400&fit=crop",
      description: "Advanced biological treatment system with nutrient removal",
      icon: <Recycle className="w-4 h-4" />,
    },
    {
      id: 4,
      title: "Pharmaceutical Wastewater",
      category: "industrial",
      location: "Aurangabad, Maharashtra",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
      description: "Specialized treatment for pharmaceutical industry waste",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      id: 5,
      title: "Water Recycling Facility",
      category: "recycling",
      location: "Nagpur, Maharashtra",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=600&h=400&fit=crop",
      description:
        "Advanced water recycling and reuse system for commercial complex",
      icon: <Recycle className="w-4 h-4" />,
    },
    {
      id: 6,
      title: "Food Processing Wastewater",
      category: "industrial",
      location: "Kolhapur, Maharashtra",
      date: "2023",
      image:
        "https://images.unsplash.com/photo-1544890225-2f7b69f5cb9d?w=600&h=400&fit=crop",
      description: "Biological treatment system for food processing industry",
      icon: <Factory className="w-4 h-4" />,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: galleryItems.length },
    {
      id: "municipal",
      label: "Municipal",
      count: galleryItems.filter((item) => item.category === "municipal")
        .length,
    },
    {
      id: "industrial",
      label: "Industrial",
      count: galleryItems.filter((item) => item.category === "industrial")
        .length,
    },
    {
      id: "recycling",
      label: "Water Recycling",
      count: galleryItems.filter((item) => item.category === "recycling")
        .length,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 px-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we turned challenges into inspiring success stories.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group transform transition-all duration-500 hover:scale-105"
            >
              <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="bg-white/90 text-gray-900 hover:bg-white transform scale-95 group-hover:scale-100 transition-all duration-300"
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <div className="space-y-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {item.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {item.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-white/90 text-gray-800 backdrop-blur-sm flex items-center gap-1"
                    >
                      {item.icon}
                      {item.category.charAt(0).toUpperCase() +
                        item.category.slice(1)}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
      </div>
    </section>
  );
};

export default Gallery;
