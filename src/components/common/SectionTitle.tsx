import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
  titleClassName?: string
}

export function SectionTitle({ title, subtitle, className, centered = true, titleClassName }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2
        className={cn("text-xl sm:text-2xl font-bold text-gray-900 mb-4", titleClassName)}
        style={{ wordBreak: "keep-all" }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className="text-sm text-gray-600 max-w-2xl mx-auto"
          style={{ wordBreak: "keep-all" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
