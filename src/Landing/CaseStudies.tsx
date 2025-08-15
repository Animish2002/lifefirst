"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Clock,
  Users,
  MapPin,
  Calendar,
  Target,
  Award,
  BarChart3,
  Leaf,
  TrendingUp,
  Building2,
} from "lucide-react";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Mumbai Metropolitan Water Treatment Overhaul",
      subtitle: "Transforming Municipal Water Infrastructure",
      category: "Municipal",
      location: "Mumbai, Maharashtra",
      duration: "18 months",
      client: "Mumbai Municipal Corporation",
      year: "2023-2024",
      heroImage:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop",
      challenge:
        "The aging water treatment facility serving 2.5 million residents was facing severe capacity constraints and outdated technology, resulting in inconsistent water quality and frequent supply disruptions.",
      solution:
        "Implemented a state-of-the-art membrane bioreactor (MBR) system with advanced automation, upgraded chemical dosing systems, and installed real-time monitoring infrastructure.",
      results: [
        {
          metric: "Water Quality Improvement",
          value: "99.8%",
          description: "BOD removal efficiency",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          metric: "Processing Capacity",
          value: "150%",
          description: "Increase in daily capacity",
          icon: <BarChart3 className="w-5 h-5" />,
        },
        {
          metric: "Energy Efficiency",
          value: "35%",
          description: "Reduction in power consumption",
          icon: <Leaf className="w-5 h-5" />,
        },
        {
          metric: "Population Served",
          value: "2.5M",
          description: "Residents benefiting",
          icon: <Users className="w-5 h-5" />,
        },
      ],
      technologies: [
        "Membrane Bioreactor",
        "SCADA Systems",
        "UV Disinfection",
        "Automated Controls",
      ],
      timeline: [
        {
          phase: "Planning & Design",
          duration: "3 months",
          status: "completed",
        },
        {
          phase: "Infrastructure Setup",
          duration: "8 months",
          status: "completed",
        },
        {
          phase: "System Integration",
          duration: "4 months",
          status: "completed",
        },
        {
          phase: "Testing & Commissioning",
          duration: "3 months",
          status: "completed",
        },
      ],
      impact: {
        environmental:
          "Reduced water wastage by 40% and eliminated untreated discharge",
        social: "Improved water access for underserved communities",
        economic: "₹12 crore annual savings in operational costs",
      },
    },
    {
      id: 2,
      title: "Textile Industry Zero Liquid Discharge",
      subtitle: "Pioneering Sustainable Manufacturing",
      category: "Industrial",
      location: "Pune, Maharashtra",
      duration: "12 months",
      client: "Textile Manufacturing Group",
      year: "2023",
      heroImage:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
      challenge:
        "Major textile manufacturer needed to achieve zero liquid discharge while maintaining production efficiency and controlling costs in compliance with new environmental regulations.",
      solution:
        "Designed and implemented a multi-stage treatment system combining biological treatment, advanced oxidation, reverse osmosis, and evaporation technology.",
      results: [
        {
          metric: "Zero Discharge",
          value: "100%",
          description: "Water recovery and reuse",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          metric: "Chemical Reduction",
          value: "60%",
          description: "Decrease in chemical usage",
          icon: <Leaf className="w-5 h-5" />,
        },
        {
          metric: "Production Efficiency",
          value: "95%",
          description: "Maintained output levels",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          metric: "Compliance Score",
          value: "A+",
          description: "Environmental rating",
          icon: <Award className="w-5 h-5" />,
        },
      ],
      technologies: [
        "Biological Treatment",
        "Reverse Osmosis",
        "Evaporation Systems",
        "Advanced Oxidation",
      ],
      timeline: [
        {
          phase: "Feasibility Study",
          duration: "2 months",
          status: "completed",
        },
        { phase: "System Design", duration: "3 months", status: "completed" },
        { phase: "Installation", duration: "5 months", status: "completed" },
        { phase: "Optimization", duration: "2 months", status: "completed" },
      ],
      impact: {
        environmental:
          "Zero wastewater discharge and 50% reduction in fresh water consumption",
        social: "Improved working conditions and community relations",
        economic: "₹8 crore savings in water costs annually",
      },
    },
    {
      id: 3,
      title: "Pharmaceutical Wastewater Treatment Excellence",
      subtitle: "Advanced Treatment for Complex Waste Streams",
      category: "Pharmaceutical",
      location: "Aurangabad, Maharashtra",
      duration: "15 months",
      client: "Leading Pharma Company",
      year: "2022-2023",
      heroImage:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=400&fit=crop",
      challenge:
        "Pharmaceutical facility required specialized treatment for complex chemical waste streams containing antibiotics, solvents, and high-strength organic compounds.",
      solution:
        "Implemented advanced treatment combining physicochemical treatment, specialized biological systems, and tertiary polishing for pharmaceutical-grade effluent treatment.",
      results: [
        {
          metric: "Contaminant Removal",
          value: "99.9%",
          description: "Pharmaceutical compounds",
          icon: <CheckCircle className="w-5 h-5" />,
        },
        {
          metric: "Regulatory Compliance",
          value: "100%",
          description: "All parameters met",
          icon: <Award className="w-5 h-5" />,
        },
        {
          metric: "Treatment Efficiency",
          value: "98%",
          description: "Overall system performance",
          icon: <TrendingUp className="w-5 h-5" />,
        },
        {
          metric: "Operational Savings",
          value: "45%",
          description: "Reduced disposal costs",
          icon: <BarChart3 className="w-5 h-5" />,
        },
      ],
      technologies: [
        "Advanced Oxidation",
        "Specialized Bioreactors",
        "Activated Carbon",
        "Membrane Filtration",
      ],
      timeline: [
        {
          phase: "Waste Characterization",
          duration: "2 months",
          status: "completed",
        },
        {
          phase: "Process Development",
          duration: "4 months",
          status: "completed",
        },
        {
          phase: "System Construction",
          duration: "7 months",
          status: "completed",
        },
        {
          phase: "Validation & Startup",
          duration: "2 months",
          status: "completed",
        },
      ],
      impact: {
        environmental:
          "Eliminated pharmaceutical compounds from discharge water",
        social: "Protected local water sources and public health",
        economic: "₹15 crore reduction in waste disposal costs over 5 years",
      },
    },
  ];

  const currentCase = caseStudies[activeCase];

  const categoryColors = {
    Municipal: "bg-blue-100 text-blue-800",
    Industrial: "bg-green-100 text-green-800",
    Pharmaceutical: "bg-purple-100 text-purple-800",
  };

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we transform wastewater challenges into sustainable
            solutions
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border">
            {caseStudies.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeCase === index
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {study.category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Case Study Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-80">
            <img
              src={currentCase.heroImage}
              alt={currentCase.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Badge
                  className={`${
                    categoryColors[
                      currentCase.category as keyof typeof categoryColors
                    ]
                  } border-0`}
                >
                  {currentCase.category}
                </Badge>
                <div className="flex items-center gap-1 text-white/90 text-sm">
                  <Calendar className="w-4 h-4" />
                  {currentCase.year}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {currentCase.title}
              </h3>
              <p className="text-lg text-white/90">{currentCase.subtitle}</p>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{currentCase.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{currentCase.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Building2 className="w-4 h-4" />
                <span>{currentCase.client}</span>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-red-500" />
                        <h4 className="text-lg font-semibold">Challenge</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {currentCase.challenge}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <h4 className="text-lg font-semibold">Solution</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {currentCase.solution}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {currentCase.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="results" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentCase.results.map((result, index) => (
                    <Card
                      key={index}
                      className="text-center hover:shadow-md transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-center mb-3">
                          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            {result.icon}
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-500">
                          {result.description}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="timeline" className="mt-6">
                <div className="space-y-4">
                  {currentCase.timeline.map((phase, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-medium text-gray-900">
                            {phase.phase}
                          </h4>
                          <Badge
                            variant="outline"
                            className="text-green-700 border-green-300"
                          >
                            {phase.duration}
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="impact" className="mt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Leaf className="w-5 h-5 text-green-500" />
                        <h4 className="text-lg font-semibold">Environmental</h4>
                      </div>
                      <p className="text-gray-600">
                        {currentCase.impact.environmental}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-5 h-5 text-blue-500" />
                        <h4 className="text-lg font-semibold">Social</h4>
                      </div>
                      <p className="text-gray-600">
                        {currentCase.impact.social}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <BarChart3 className="w-5 h-5 text-orange-500" />
                        <h4 className="text-lg font-semibold">Economic</h4>
                      </div>
                      <p className="text-gray-600">
                        {currentCase.impact.economic}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            onClick={() => setActiveCase(Math.max(0, activeCase - 1))}
            disabled={activeCase === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === activeCase
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() =>
              setActiveCase(Math.min(caseStudies.length - 1, activeCase + 1))
            }
            disabled={activeCase === caseStudies.length - 1}
            className="flex items-center gap-2"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Let&apos;s discuss how we can deliver measurable results for your
              wastewater challenges
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
