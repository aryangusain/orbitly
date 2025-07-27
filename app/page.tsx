"use client"

import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Sponsors from "@/components/Sponsors";
import Testimonials from "@/components/Testimonials";
import Partition from "@/components/ui/Partition";
import { motion } from "motion/react";

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6, 
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { filter:"blur(10px)", scale: 0.98, opacity: 0 },
  visible: { filter:"blur(0px)", scale: 1, opacity: 1 },
};

export default function Home() {

  return (
   <motion.div 
      // variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center h-full min-h-screen bg-background text-text-primary "> 
      <Navbar />
      <div className="flex flex-col items-center gap-[60px] w-full">
        <Hero />

        <Partition />
        <Sponsors />
        <Partition />

        <Feature />
        <Partition />

        <Testimonials />
        <Partition />

        <Pricing />
        <Partition />

        <FAQ />
        <Partition />

      <div className="flex flex-col w-full items-center justify-center gap-[60px]">
        <Contact />
        <Footer />
      </div>
      </div>
   </motion.div>
  );
}
