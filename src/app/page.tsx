"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { useContact } from "@/components/providers/ContactProvider"

const TeamIntroduction = dynamic(
  () => import("@/components/sections/TeamIntroduction").then(mod => ({ default: mod.TeamIntroduction })),
  { loading: () => <div className="h-96 bg-gray-100 animate-pulse" /> }
)

const Differentiators = dynamic(
  () => import("@/components/sections/Differentiators").then(mod => ({ default: mod.Differentiators })),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
)

const Service = dynamic(
  () => import("@/components/sections/Service").then(mod => ({ default: mod.Service })),
  { loading: () => <div className="h-96 bg-gray-50 animate-pulse" /> }
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
      <TeamIntroduction />
      <Differentiators />
      <Service />
      <SocialProof />
    </>
  )
}
