"use client"
import { itemVariants } from "@/app/page"
import { motion } from "motion/react"

const Footer = () => {
  return (
    <motion.div 
        variants={itemVariants}
        className="text-text-muted flex flex-col text-xs gap-[10px] items-center justify-center pb-6"
    >
        <div>&copy; {new Date().getFullYear()} Orbitly. All rights reserved. </div>
        <div><span className="hover:underline cursor-pointer">Privacy Policy</span> | <span className="hover:underline cursor-pointer">Terms of Service</span></div>
    </motion.div>
  )
}
export default Footer