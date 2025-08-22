import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  )
}
