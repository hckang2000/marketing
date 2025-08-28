import { cn } from "@/lib/utils"

interface ResponsiveTextProps {
  mobile: string
  desktop: string
  className?: string
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'span'
}

export function ResponsiveText({ mobile, desktop, className, as: Component = 'p' }: ResponsiveTextProps) {
  return (
    <>
      <Component className={cn("lg:hidden", className)} dangerouslySetInnerHTML={{ __html: mobile }} />
      <Component className={cn("hidden lg:block", className)} dangerouslySetInnerHTML={{ __html: desktop }} />
    </>
  )
}
