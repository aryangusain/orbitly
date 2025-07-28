"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const SectionWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const transformOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1.5, 0.3])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: transformOpacity
      }}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
