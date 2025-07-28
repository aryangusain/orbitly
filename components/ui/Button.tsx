import { cn } from "@/lib/utils"

const variants = {
    "primary": " bg-text-primary text-background hover:bg-text-primary/90",
    "secondary": " text-text-primary bg-text-primary/10 hover:bg-text-primary/20 "
}

const Button = ({children, className, variant}: {children: React.ReactNode, className?: string, variant: "primary" | "secondary"}) => {
  return (
    <div className={cn("px-4 py-2 rounded-md shadow-md cursor-pointer text-[15px] font-medium duration-300", variants[variant] , className)}>
        {children}
    </div>
  )
}
export default Button