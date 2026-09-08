"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"
import { Container } from "@/components/common/Container"
import { SectionTitle } from "@/components/common/SectionTitle"
import { useStaggeredAnimation } from "@/lib/hooks/useMotionAnimation"

const PAIN_POINTS = [
  {
    question: "일본인 문의는 느는데 왜 매출은 그대로일까?",
    detail: "채널만 늘렸을 뿐, 상담·예약까지 이어지는 구조가 없으면 문의는 매출로 연결되지 않습니다.",
  },
  {
    question: "어떤 채널에 예산을 써야 할지 모르겠다",
    detail: "SNS, 인플루언서, 광고, PR 중 우리 병원과 궁합이 맞는 채널을 판단할 기준이 없습니다.",
  },
  {
    question: "번역만 한 콘텐츠로는 신뢰를 주기 어렵다",
    detail: "일본 환자는 가격보다 후기·증례의 신뢰도를 더 중요하게 봅니다. 단순 번역으로는 부족합니다.",
  },
]

export function Problem() {
  const stagger = useStaggeredAnimation(PAIN_POINTS.length)

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle title="이런 고민, 하고 계시지 않나요?" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={item.question}
              {...stagger(index)}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#FBEEE8] flex items-center justify-center mb-4">
                <HelpCircle className="h-5 w-5 text-[#C1452D]" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-base" style={{ wordBreak: "keep-all" }}>
                {item.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ wordBreak: "keep-all" }}>
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
