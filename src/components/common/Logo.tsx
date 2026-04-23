import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "light" | "dark"
}

export function Logo({ className, size = "md", variant = "dark" }: LogoProps) {
  const sizeClasses = {
    sm: { text: "text-base font-bold", image: "w-7 h-7" },
    md: { text: "text-lg font-bold", image: "w-8 h-8" },
    lg: { text: "text-xl font-bold", image: "w-10 h-10" },
  }
  const sizes = sizeClasses[size]
  const textColor = variant === "light" ? "text-white" : "text-red-500"

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <div className={cn("relative flex-shrink-0", sizes.image)}>
        <Image
          src="/images/logo.png"
          alt="Clinic Bridge"
          fill
          className="object-contain"
          sizes="40px"
          priority
        />
      </div>
      <span className={cn(sizes.text, textColor, "tracking-tight transition-colors")}>
        CLINIC BRIDGE
      </span>
    </Link>
  )
}
