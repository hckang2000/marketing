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

const InfluencerDM = dynamic(() => import("@/components/sections/InfluencerDM").then(mod => ({ default: mod.InfluencerDM })), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
})

// Lazy load components that are not immediately visible
const SocialProof = dynamic(() => import("@/components/sections/SocialProof").then(mod => ({ default: mod.SocialProof })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
})

const Differentiators = dynamic(() => import("@/components/sections/Differentiators").then(mod => ({ default: mod.Differentiators })), {
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
      <InfluencerDM />
      <FinalCTA onContactClick={openContact} />
    </>
  )
}
