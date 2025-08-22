"use client"

import { Hero } from "@/components/sections/Hero"
import { SocialProof } from "@/components/sections/SocialProof"
import { HighlightResult } from "@/components/sections/HighlightResult"
import { TestimonialQuote } from "@/components/sections/TestimonialQuote"
import { Differentiators } from "@/components/sections/Differentiators"
import { Process } from "@/components/sections/Process"
import { PlatformsGrid } from "@/components/sections/PlatformsGrid"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { useContact } from "@/components/providers/ContactProvider"

export default function HomePage() {
  const { openContact } = useContact()

  return (
    <>
      <Hero onContactClick={openContact} />
      <SocialProof />
      <HighlightResult />
      <TestimonialQuote />
      <Differentiators />
      <Process />
      <PlatformsGrid />
      <FinalCTA onContactClick={openContact} />
    </>
  )
}
