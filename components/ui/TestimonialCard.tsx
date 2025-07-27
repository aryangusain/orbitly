"use client"

import { motion } from "motion/react";

const TestimonialCard = ({image, name, comment}: {image: string, name: string, comment: string}) => {
  return (
    <motion.div className="flex flex-col gap-[10px] bg-neutral-200 py-[20px] px-[40px] rounded-md">
      <div className="flex gap-[10px] items-center">
        <img src={image} className="size-10 rounded-full"/>
        <div className=" font-semibold text-background">{name}</div>
      </div>
      <div className="text-neutral-600 text-sm">{comment}</div>
    </motion.div>
  )
}
export default TestimonialCard