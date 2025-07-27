"use client"

import { itemVariants } from "@/app/page"
import { motion } from "motion/react"
import Button from "./ui/Button"
import Partition from "./ui/Partition"

const Hero = () => {
  return (
    <motion.div 
        variants={itemVariants} 
        id="home"
        className="flex flex-col gap-[40px] items-center justify-center py-[180px] mt-[60px] w-full relative"
    >   
        <div id="bg-container"></div>
        <div className="flex flex-col items-center gap-[20px]">
            <h2 className="text-5xl font-semibold text-center w-[50rem]">Launch your startup to the stars</h2>
            <Partition className="-mt-5 -z-1 w-[60%]"/>
            <h3 className="text-xl text-center text-text-muted w-[40rem]">Build stunning landing pages, manage your brand, and attract customers—all in one platform</h3>
        </div>
        <div className="flex gap-[10px] items-center justify-center">
            <Button variant="secondary">Watch Demo</Button>
            <Button variant="primary" className="">Start Free Trial</Button>
        </div>
    </motion.div>
  )
}
export default Hero