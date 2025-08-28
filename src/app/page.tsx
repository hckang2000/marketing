"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { useContact } from "@/components/providers/ContactProvider"

// Lazy load components that are not immediately visible
const TeamIntroduction = dynamic(() => import("@/components/sections/TeamIntroduction").then(mod => ({ default: mod.TeamIntroduction })), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

const GuaranteeSection = dynamic(() => import("@/components/sections/GuaranteeSection").then(mod => ({ default: mod.GuaranteeSection })), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
})

// Lazy load components that are not immediately visible
const SocialProof = dynamic(() => import("@/components/sections/SocialProof").then(mod => ({ default: mod.SocialProof })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
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
      <TeamIntroduction />
      <SocialProof />
      <GuaranteeSection />
      <Differentiators />
      <Process />
      <PlatformsGrid />
      <FinalCTA onContactClick={openContact} />
    </>
  )
}
