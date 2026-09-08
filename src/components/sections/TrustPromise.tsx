"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { User, ReceiptText, FileCheck2, BarChart3 } from "lucide-react"
import { Container } from "@/components/common/Container"
import { useMotionAnimation, useStaggeredAnimation } from "@/lib/hooks/useMotionAnimation"

const WORRIES = [
  { text: "제안서보다 추가 비용이 자꾸 붙어요", align: "left" as const },
  { text: "계약 해지 조건이 복잡해 불안해요", align: "right" as const },
  { text: "막상 계약하려니 서비스 범위가 달라졌어요", align: "left" as const },
]

const PILLARS = [
  {
    icon: ReceiptText,
    title: "가격 표준 공개",
    description: "모든 가격을 홈페이지에 투명하게 공개해요",
    href: "/pricing",
  },
  {
    icon: FileCheck2,
    title: "간편한 계약 · 해지",
    description: "복잡한 조건 없이 계약 기준을 미리 안내해요",
    href: "/pricing",
  },
  {
    icon: BarChart3,
    title: "성과는 과장없이 보고",
    description: "실제 캠페인 데이터를 그대로 공개해요",
    href: "/#proof-results",
  },
]

function WorryBubble({ text, align }: { text: string; align: "left" | "right" }) {
  const isLeft = align === "left"
  return (
    <div className={`flex items-center gap-3 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
        <User className="h-5 w-5 text-gray-400" />
      </div>
      <div className="bg-gray-900 text-white px-5 py-3 rounded-2xl text-sm sm:text-base font-medium">
        {text}
      </div>
    </div>
  )
}

export function TrustPromise() {
  const headlineMotion = useMotionAnimation()
  const pillarStagger = useStaggeredAnimation(PILLARS.length)

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          {WORRIES.map((w) => (
            <WorryBubble key={w.text} text={w.text} align={w.align} />
          ))}
        </div>

        <motion.div {...headlineMotion} className="text-center mb-12">
          <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">클리닉브릿지는</p>
          <p className="text-2xl sm:text-3xl font-bold text-[#C1452D]">당신의 걱정을 믿음으로 바꿉니다</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div key={pillar.title} {...pillarStagger(index)}>
                <Link
                  href={pillar.href}
                  className="flex flex-col h-full min-h-[280px] p-8 rounded-3xl bg-[#FBEEE8] hover:shadow-md transition-shadow text-center"
                >
                  <h3
                    className="font-bold text-gray-900 text-lg sm:text-xl mb-3 leading-snug"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-8" style={{ wordBreak: "keep-all" }}>
                    {pillar.description}
                  </p>
                  <div className="mt-auto flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <Icon className="h-8 w-8 text-[#C1452D]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
