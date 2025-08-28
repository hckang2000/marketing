import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, className, centered = true }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 
        className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
