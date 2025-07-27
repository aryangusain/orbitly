"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { blurVariants } from "@/app/page";
import { cn } from "@/lib/utils";

const SectionWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {margin: "-100px 0px -60px 0px"});

  return (
    <motion.div
      ref={ref}
      variants={blurVariants}
      initial="blurred"
      animate={isInView ? "visible" : "blurred"}
      className={cn("w-full", className)}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
