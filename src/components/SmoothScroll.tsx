// components/SmoothScroll.tsx
"use client";
import { useRef, useLayoutEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    stiffness: 50, // lower = softer, floaty
    damping: 30, // lower = bouncy, higher = stable
    mass: 0.8, // higher = heavier feel
  });

  const y = useTransform(smoothY, (val) => -val);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      document.body.style.height = `${scrollRef.current.scrollHeight}px`;
    }
  }, [children]);

  return (
    <div>
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="relative will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
