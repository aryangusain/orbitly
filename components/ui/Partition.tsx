import { cn } from "@/lib/utils"

const Partition = ({className}: {className?: string}) => {
  return (
    <div className={cn("h-px w-[60%] bg-gradient-to-r from-background via-highlight to-background", className)}></div>
  )
}
export default Partition