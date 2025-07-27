import { cn } from "@/lib/utils"

const variants = {
    "primary": " bg-highlight text-text-primary hover:bg-[#5e0997] ",
    "secondary": " bg-text-primary text-background hover:bg-[#e2e2e2] "
}

const Button = ({children, className, variant}: {children: React.ReactNode, className?: string, variant: "primary" | "secondary"}) => {
  return (
    <div className={cn("px-4 py-2 rounded-md cursor-pointer text-[15px] font-medium duration-300", variants[variant] , className)}>
        {children}
    </div>
  )
}
export default Button