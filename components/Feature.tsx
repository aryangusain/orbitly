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
    description: "Create landing pages easily with our drag-and-drop builder.",
    icon: <IconSettingsAutomation className="size-6 text-text-primary" />,
  },
  {
    title: "Branding Tools",
    description: "Build your brand with logos, fonts, and color palettes.",
    icon: <IconTool className="size-6 text-text-primary" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Monitor traffic and performance in real-time dashboards.",
    icon: <IconDashboard className="size-6 text-text-primary" />,
  },
  {
    title: "Templates & AI Assistant",
    description: "Start quickly with templates or AI-driven suggestions.",
    icon: <IconTemplate className="size-6 text-text-primary" />,
  },
  {
    title: "SEO Optimization",
    description: "Improve search visibility with built-in SEO tools.",
    icon: <IconSettingsAutomation className="size-6 text-text-primary" />,
  },
  {
    title: "Responsive Design",
    description: "Pages look great on desktop, tablet, and mobile.",
    icon: <IconTool className="size-6 text-text-primary" />,
  },
  {
    title: "Team Collaboration",
    description: "Work together in real time with shared editing tools.",
    icon: <IconDashboard className="size-6 text-text-primary" />,
  },
  {
    title: "Custom Domains",
    description: "Use your own domain to boost brand trust.",
    icon: <IconTemplate className="size-6 text-text-primary" />,
  },
];

  return (
    <div
        id="features"
        className="w-full h-fit flex flex-col justify-center items-center mt-[100px]"
    >
        <SectionHeading>Everything You Need</SectionHeading>

        <div className="grid grid-cols-4 grid-rows-2 gap-x-10 gap-y-12 w-fit px-[100px] mb-[60px]">
            {features.map((feature, index) => {
                return <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon}/>
            })}
        </div>
    </div>
  )
}
export default Feature