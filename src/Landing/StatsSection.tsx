"use client";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: 500, suffix: "+", label: "Projects Successfully Delivered" },
  { number: 50, suffix: "+ Million Liters", label: "Wastewater Recycled" },
  { number: 100, suffix: "%", label: "Eco-Friendly Systems" },
  { number: 3, suffix: "R's", label: "Reduce, Reuse & Restore" },
];
interface Stat {
  number: number;
  suffix: string;
  label: string;
}

// Custom hook for counter animation
const useCounter = (end: number, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number | null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(10 + (end - 10) * easeOutQuart);

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function StatsSection() {
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
      className="py-8 md:p-12 bg-gray-50 rounded-lg shadow-inner border border-gray-100 p-4"
    >
      {/* Stats Section */}
      <motion.div variants={itemVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 md:px-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <AnimatedStatCard
              key={index}
              stat={stat}
              index={index}
              shouldStart={isInView}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}

interface AnimatedStatCardProps {
  stat: Stat;
  index: number;
  shouldStart: boolean;
}

const AnimatedStatCard: React.FC<AnimatedStatCardProps> = ({
  stat,
  index,
  shouldStart,
}) => {
  const count = useCounter(stat.number, 2000 + index * 200, shouldStart);

  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 md:p-6 border border-blue-100 shadow-lg text-center"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{
        type: "spring",
        stiffness: 300,
        delay: index * 0.1,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className="text-sm md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          type: "spring",
          stiffness: 200,
        }}
      >
        {count}
        {stat.suffix}
      </motion.div>
      <div className="text-xs md:text-sm text-slate-600 font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};
