"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Building2,
  Waves,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  Droplets,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";

const CaseStudiesPage = () => {
  const caseStudiesData = [
    {
      title: "Industrial Wastewater Treatment Plant",
      client: "ABC Manufacturing Ltd.",
      location: "Mumbai, Maharashtra",
      date: "2023",
      description:
        "Complete wastewater treatment solution for a large-scale textile manufacturing facility, treating 5000 liters per day.",
      results: [
        "95% reduction in water pollution",
        "₹2.5M annual cost savings",
        "100% compliance with regulatory standards",
      ],
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Industrial",
    },
    {
      title: "Municipal Water Treatment System",
      client: "Pune Municipal Corporation",
      location: "Pune, Maharashtra",
      date: "2023",
      description:
        "Advanced water treatment system serving 50,000 residents with sustainable and efficient water purification technology.",
      results: [
        "Clean water access for 50K residents",
        "40% energy efficiency improvement",
        "Zero maintenance issues in 12 months",
      ],
      icon: <Building2 className="w-12 h-12 text-green-600" />,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Municipal",
    },
    {
      title: "Rural Sanitation Program",
      client: "Rural Development Authority",
      location: "Nashik District, Maharashtra",
      date: "2024",
      description:
        "Comprehensive sanitation solution for 20 rural villages, including waste management and water treatment facilities.",
      results: [
        "20 villages completely sanitized",
        "8,000 people benefited directly",
        "75% reduction in waterborne diseases",
      ],
      icon: <Waves className="w-12 h-12 text-orange-600" />,
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Rural Development",
    },
    {
      title: "Pharmaceutical Plant Water Treatment",
      client: "PharmaCorp Industries",
      location: "Aurangabad, Maharashtra",
      date: "2023",
      description:
        "High-precision water treatment system for pharmaceutical manufacturing with stringent quality requirements.",
      results: [
        "99.9% purity standards achieved",
        "FDA compliance certification",
        "30% reduction in production costs",
      ],
      icon: <Droplets className="w-12 h-12 text-purple-600" />,
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Pharmaceutical",
    },
    {
      title: "Hotel Chain Water Management",
      client: "Luxury Resorts Group",
      location: "Goa",
      date: "2024",
      description:
        "Integrated water treatment and recycling system for a 5-star resort chain with focus on sustainability.",
      results: [
        "60% water consumption reduction",
        "₹1.8M annual savings",
        "Green certification achieved",
      ],
      icon: <Building2 className="w-12 h-12 text-cyan-600" />,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Hospitality",
    },
    {
      title: "Educational Institution Project",
      client: "Tech University Campus",
      location: "Bangalore, Karnataka",
      date: "2024",
      description:
        "Campus-wide water treatment and management system serving 15,000 students and staff members.",
      results: [
        "15,000 people served daily",
        "Smart monitoring system installed",
        "50% maintenance cost reduction",
      ],
      icon: <Users className="w-12 h-12 text-red-600" />,
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Education",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    },
    {
      number: "1M+",
      label: "People Served",
      icon: <Users className="w-8 h-8 text-green-600" />,
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: <Droplets className="w-8 h-8 text-orange-600" />,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[75vh] bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black bg-opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
        </div>

        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Water treatment success stories"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center h-[75vh] pt-20">
          <div className="max-w-7xl md:pl-24 px-6 py-20">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
                  Real-World Success
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                    Stories & Impact
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm md:text-lg text-blue-100 mb-8 leading-relaxed"
              >
                Discover how our innovative water treatment solutions <br />{" "}
                have transformed communities and industries across <br />
                <span className="font-bold bg-gradient-to-r from-blue-500 via-cyan-400 via-green-400 via-blue-400 via-indigo-500 to-orange-400 bg-clip-text text-transparent">
                  India and beyond.
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore detailed case studies showcasing our innovative solutions
              and the measurable impact we&apos;ve created for our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 shadow-lg overflow-hidden group">
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                      {study.icon}
                    </div>
                  </div>

                  <CardHeader className="p-6">
                    <CardTitle className="text-xl font-semibold text-slate-800 mb-2">
                      {study.title}
                    </CardTitle>
                    <div className="space-y-1 text-sm text-slate-500 mb-3">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-2" />
                        {study.client}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {study.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {study.date}
                      </div>
                    </div>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {study.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-slate-800">
                        Key Results:
                      </h4>
                      {study.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-start text-sm text-slate-600"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 p-12 rounded-xl shadow-lg text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              water management with our innovative solutions. Let&apos;s discuss
              your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CaseStudiesPage;
