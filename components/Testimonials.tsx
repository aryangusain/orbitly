"use client"
import { motion } from "motion/react"
import SectionHeading from "./ui/SectionHeading"
import TestimonialCard from "./ui/TestimonialCard"

const Testimonials = () => {
  const items = [
    {
      "name": "Arjun Mehta",
      "comment": "Orbitly helped me launch my app in less than a week. The UI is beautiful and easy to use!",
      "image": "https://i.pravatar.cc/150?img=8"
    },
    {
      "name": "Tanya Kulkarni",
      "comment": "Everything I needed to get started—from branding to analytics—was there. Loved it!",
      "image": "https://i.pravatar.cc/150?img=5"
    },
    {
      "name": "Rahul Jain",
      "comment": "The animations and templates make my startup feel like a million-dollar company.",
      "image": "https://i.pravatar.cc/150?img=3"
    },
    {
      "name": "Maya Reddy",
      "comment": "Slick UI, excellent onboarding, and I launched a beautiful landing page in 30 minutes.",
      "image": "https://i.pravatar.cc/150?img=9"
    },
    {
      "name": "Ishan Verma",
      "comment": "From typography to layout, Orbitly nails the modern aesthetic. Highly recommended!",
      "image": "https://i.pravatar.cc/150?img=12"
    },
    {
      "name": "Ayesha Sheikh",
      "comment": "Support was top-notch. They helped me set everything up. Can't wait to scale!",
      "image": "https://i.pravatar.cc/150?img=16"
    }
  ]

  const slideLeft = {
    animate: {
      x: ["0%", "-100%", "100%"],
      transition: {
        x: {
          duration: 12,
          ease: "linear",
          repeat: Infinity
        }
      }
    }
  };

  const slideRight = {
    animate: {
      x: ["0%", "100%", "-100%"],
      transition: {
        x: {
          duration: 12,
          ease: "linear",
          repeat: Infinity
        }
      }
    }
  };

  return (
    <motion.div id="testimonials" className="flex flex-col items-center justify-center">
        <SectionHeading>Testimonials</SectionHeading>
        <div className="grid grid-rows-2 gap-4 w-[80%]">
          {/* Top row shifted left */}
          <motion.div className="grid grid-cols-3 gap-4" initial={{ x: -30 }}>
            {items.slice(0, 3).map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
          </motion.div>

          {/* Bottom row shifted right */}
          <motion.div className="grid grid-cols-3 gap-4" initial={{ x: 30 }}>
            {items.slice(3, 6).map((item, index) => (
              <TestimonialCard key={index + 3} {...item} />
            ))}
          </motion.div>
        </div>
    </motion.div>
  )
}
export default Testimonials