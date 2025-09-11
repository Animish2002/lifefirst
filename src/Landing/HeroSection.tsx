"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowDown, Pause, Play } from "lucide-react";

// Sample carousel data - replace with your actual data
const carouselData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/v1757067608/1_wq9mmx.jpg",
    title: "Advanced Water Treatment",
    subtitle: "Revolutionary filtration technology",
    description: "Cutting-edge solutions for industrial water processing",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/v1757067608/2_lguy1a.jpg",
    subtitle: "Sustainable Engineering",
    title: "Eco-Friendly Systems",
    description: "Environmental protection through innovative design",
  },
  // {
  //   id: 3,
  //   image:
  //     "https://images.unsplash.com/photo-1581093458791-9f3c3250a33a?w=1920&h=1080&fit=crop",
  //   title: "Complete Sanitation",
  //   subtitle: "Total water management",
  //   description: "Comprehensive solutions for all water treatment needs",
  // },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollYProgress } = useScroll();
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const slideVariants = {
    enter: {
      y: "100%",
      opacity: 1,
      zIndex: 1,
    },
    center: {
      y: "0%",
      opacity: 1,
      zIndex: 2,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      y: "-50%", // Don't move as far up
      opacity: 0.8, // Slight fade but not complete
      zIndex: 0,
      transition: {
        duration: 1, // Longer exit to ensure overlap
        ease: "easeIn",
      },
    },
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-slate-900 "
    >
      <div className="absolute inset-0 bg-slate-900">
        {/* Blurred backdrop for smooth transitions */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transition-all duration-1000"
          style={{
            backgroundImage: `url(${carouselData[currentSlide].image})`,
            filter: "blur(30px) brightness(0.4)",
          }}
        />

        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${carouselData[currentSlide].image})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Play/Pause Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={togglePlayPause}
          className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors text-white"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {carouselData.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div className="relative z-10 pt-24 pb-16" style={{ y: yContent }}>
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid items-center min-h-[80vh]">
            {/* Left Content - Static */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <h1 className="md:text-5xl text-4xl font-bold leading-tight text-white">
                  <span className="block text-gray-200 mb-2 font-medium">
                    Sustainable Water, Wastewater <br /> & Sanitation Solutions
                  </span>
                </h1>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-200 leading-relaxed max-w-2xl"
              >
                Turning Water & Wastewater Challenges in to clean water
                solutions
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 text-lg group transition-all duration-300"
                >
                  Start Your Project
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-xs mb-2">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
