"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import TestimonialCard from "./ui/TestimonialCard";

interface TestimonialItem {
  name: string;
  comment: string;
  image: string;
}

interface MarqueeRowProps {
  items: TestimonialItem[];
  direction: "left" | "right";
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const isLeft = direction === "left";
  
  const tripleItems = [...items, ...items, ...items];
  
  const cardWidth = 336;
  const totalWidth = items.length * cardWidth;

  return (
    <div 
      className="relative w-full overflow-hidden cursor-pointer"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <motion.div
        initial={{ x: isLeft ? 0 : -totalWidth }}
        animate={{
          x: isLeft 
            ? isPlaying ? -totalWidth : 0
            : isPlaying ? 0 : -totalWidth,
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: isPlaying ? Infinity : 0,
        }}
        className="flex gap-4"
        style={{ width: `${tripleItems.length * cardWidth}px` }}
      >
        {tripleItems.map((item, i) => (
          <TestimonialCard key={`${item.name}-${i}`} {...item} />
        ))}
      </motion.div>

      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      
    </div>
  );
};

export default MarqueeRow;