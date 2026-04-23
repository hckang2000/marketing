import Image from "next/image"
import { Container } from "@/components/common/Container"

interface PageHeroProps {
  category: string
  title: string
  subtitle?: string
  image?: string
}

export function PageHero({
  category,
  title,
  subtitle,
  image = "/images/hero-desktop.jpg",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden -mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <Container>
        <div className="relative z-10 min-h-[360px] flex flex-col justify-center pt-16 pb-12">
          <p className="text-white/70 text-sm font-medium mb-3 tracking-wider uppercase">
            {category}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
