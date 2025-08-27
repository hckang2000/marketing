"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { useContact } from "@/components/providers/ContactProvider"

// Lazy load components that are not immediately visible
const SocialProof = dynamic(() => import("@/components/sections/SocialProof").then(mod => ({ default: mod.SocialProof })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const HighlightResult = dynamic(() => import("@/components/sections/HighlightResult").then(mod => ({ default: mod.HighlightResult })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const TestimonialQuote = dynamic(() => import("@/components/sections/TestimonialQuote").then(mod => ({ default: mod.TestimonialQuote })), {
  loading: () => <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
})

const Differentiators = dynamic(() => import("@/components/sections/Differentiators").then(mod => ({ default: mod.Differentiators })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const Process = dynamic(() => import("@/components/sections/Process").then(mod => ({ default: mod.Process })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const PlatformsGrid = dynamic(() => import("@/components/sections/PlatformsGrid").then(mod => ({ default: mod.PlatformsGrid })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA").then(mod => ({ default: mod.FinalCTA })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

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
