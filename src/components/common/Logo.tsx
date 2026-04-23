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
    sm: { wrapper: "h-7" },
    md: { wrapper: "h-9" },
    lg: { wrapper: "h-11" },
  }
  const sizes = sizeClasses[size]

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
    >
      <div className={cn("relative flex-shrink-0 w-auto", sizes.wrapper)}>
        <Image
          src="/images/cb-logo.svg"
          alt="Clinic Bridge"
          width={180}
          height={44}
          className="h-full w-auto object-contain"
          style={
            variant === "dark"
              ? {
                  filter:
                    "brightness(0) saturate(100%) invert(17%) sepia(91%) saturate(2498%) hue-rotate(202deg) brightness(94%) contrast(101%)",
                }
              : undefined
          }
          priority
        />
      </div>
    </Link>
  )
}
