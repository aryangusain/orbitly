"use client"

import { motion } from "motion/react"
import SectionHeading from "./ui/SectionHeading"
import FeatureCard from "./ui/FeatureCard"
import { IconDashboard, IconSettingsAutomation, IconTemplate, IconTool } from "@tabler/icons-react"
import SectionWrapper from "./SectionWrapper"

const Feature = () => {
    const features = [
        {
            title: "Custom Landing Pages",
            description: "Design and launch beautifully responsive landing pages without writing a single line of code. Our drag-and-drop builder helps you convert visitors into loyal customers.",
            icon: <IconSettingsAutomation className="size-6 text-highlight"/>,
        },
        {
            title: "Branding Tools",
            description: "From logos to typography and color palettes, Orbitly equips you with everything you need to establish a consistent and memorable brand identity that stands out in a crowded market.",
            icon: <IconTool className="size-6 text-highlight"/>,
        },
        {
            title: "Analytics Dashboard",
            description: "Gain valuable insights with our real-time dashboard. Track page visits, conversion rates, traffic sources, and user behavior—all from a single clean and interactive interface.",
            icon: <IconDashboard className="size-6 text-highlight"/>,
        },
        {
            title: "Templates & AI Assistant",
            description: "Kickstart your journey with a library of stunning prebuilt templates, or let our AI assistant guide you with smart suggestions tailored to your brand, goals, and audience.",
            icon: <IconTemplate className="size-6 text-highlight"/>,
        },
    ]

  return (
    <div
        id="features"
        className="w-full h-fit flex flex-col justify-center items-center"
    >
        <SectionHeading>Features</SectionHeading>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[80%]">
            {features.map((feature, index) => {
                return <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon}/>
            })}
        </div>
    </div>
  )
}
export default Feature