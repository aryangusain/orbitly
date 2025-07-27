"use client"

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

export const blurVariants = {
  visible: { filter: "blur(0px)", transition: { duration: 0.2 } },
  blurred: { filter: "blur(10px)", transition: { duration: 0.2 } },
};

export default function Home() {

  return (
   <motion.div 
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

        <Footer />
      </div>
   </motion.div>
  );
}
