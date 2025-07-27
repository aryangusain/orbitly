import { cn } from "@/lib/utils"
import SectionWrapper from "../SectionWrapper"

const Partition = ({className}: {className?: string}) => {
  return (
    <SectionWrapper className="flex justify-center">
      <div className={cn("h-px w-[60%] bg-gradient-to-r from-background via-highlight to-background", className)}></div>
    </SectionWrapper>
  )
}
export default Partition