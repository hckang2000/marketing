"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { useContact } from "@/components/providers/ContactProvider"

const Differentiators = dynamic(
  () => import("@/components/sections/Differentiators").then(mod => ({ default: mod.Differentiators })),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
)

const Service = dynamic(
  () => import("@/components/sections/Service").then(mod => ({ default: mod.Service })),
  { loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> }
)

const InfluencerDM = dynamic(
  () => import("@/components/sections/InfluencerDM").then(mod => ({ default: mod.InfluencerDM })),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
)

const SocialProof = dynamic(
  () => import("@/components/sections/SocialProof").then(mod => ({ default: mod.SocialProof })),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
)

export default function HomePage() {
  const { openContact } = useContact()

  return (
    <>
      <Hero onContactClick={openContact} />
      <Differentiators />
      <Service />
      <InfluencerDM />
      <SocialProof />
    </>
  )
}
