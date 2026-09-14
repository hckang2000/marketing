"use client"

import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/Hero"
import { LogoWall } from "@/components/sections/LogoWall"
import { TeamGrid } from "@/components/sections/TeamGrid"
import { WhyClinicBridge } from "@/components/sections/WhyClinicBridge"
import { PlanCompare } from "@/components/sections/PlanCompare"
import { QuoteCta } from "@/components/sections/QuoteCta"

const ProofResults = dynamic(
  () => import("@/components/sections/ProofResults").then(mod => ({ default: mod.ProofResults })),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
)

const FAQInsights = dynamic(
  () => import("@/components/sections/FAQInsights").then(mod => ({ default: mod.FAQInsights })),
  { loading: () => <div className="h-96 bg-white animate-pulse" /> }
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoWall />
      <WhyClinicBridge />
      <TeamGrid />
      <ProofResults />
      <PlanCompare />
      <FAQInsights />
      <QuoteCta />
    </>
  )
}
