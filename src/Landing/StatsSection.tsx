"use client";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// Defines the shape of our stat objects
interface Stat {
  number: number;
  suffix: string;
  label: string;
}

// The data for our statistic cards
const stats: Stat[] = [
  { number: 500, suffix: "+", label: "Projects Successfully Delivered" },
  { number: 50, suffix: " Million Liters", label: "Wastewater Recycled" },
  { number: 100, suffix: "%", label: "Eco-Friendly Systems" },
  { number: 3, suffix: "R's", label: "Reduce, Reuse & Restore" },
];

// Custom hook for the animated number counter
const useCounter = (end: number, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number | null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation (ease out cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(end * easeOutCubic);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
};

// Variants for Framer Motion animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of the children
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Main component that renders the entire Stats Section
export default function App() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-16 px-4 md:px-8 bg-slate-50 rounded-2xl shadow-inner border border-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-stretch"
        >
          {stats.map((stat, index) => (
            <AnimatedStatCard
              key={index}
              stat={stat}
              index={index}
              shouldStart={isInView}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

interface AnimatedStatCardProps {
  stat: Stat;
  index: number;
  shouldStart: boolean;
}

// The individual card component
const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({
  stat,
  index,
  shouldStart,
}) => {
  const count = useCounter(stat.number, 2000 + index * 200, shouldStart);

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 md:p-6 border border-blue-100 shadow-lg"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{
        type: "tween",
        stiffness: 300,
        delay: index * 0.2,
      }}
    >
      {/* Use flexbox to center content vertically and horizontally within the card */}
      <div className="flex flex-col h-full justify-center items-center text-center">
        <motion.div
          className="text-lg lg:text-xl font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            type: "tween",
            stiffness: 200,
          }}
        >
          {count}
          {stat.suffix}
        </motion.div>
        <div className="text-xs md:text-sm text-slate-600 font-medium leading-tight">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
};
