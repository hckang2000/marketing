"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Layers, Puzzle, Check } from "lucide-react"
import { Container } from "@/components/common/Container"
import { SectionTitle } from "@/components/common/SectionTitle"
import { useStaggeredAnimation } from "@/lib/hooks/useMotionAnimation"

const PLANS = [
  {
    icon: Layers,
    name: "최소 스타터 플랜",
    tagline: "일본 마케팅 꼭 필요한 항목들을 단계별로, 원하는 만큼만 선택",
    price: "15만원",
    priceNote: "VAT 별도 · 최소 계약기간 3개월",
    featuresTitle: "일본 마케팅 셀프로 시작하는 마케팅",
    features: [
      "일본 LINE 계정 세팅 등",
      "일본 신환 발생을 위한 최소 세팅",
    ],
  },
  {
    icon: Puzzle,
    name: "월 구독 마케팅 패키지",
    tagline: "우리병원에 맞춰진 마케팅 요소를, 더 큰 할인으로.",
    price: "월 500만원",
    priceNote: "채널별 개별 계약 가능",
    featuresTitle: "필요한 것만 시작하는 형",
    features: [
      "매출 발생에 필요한 필수 요소를 한번에",
      "패키지 할인으로 진행되어 할인된 가격",
      "인플루언서 협찬 원가 진행",
    ],
  },
]

export function PlanCompare() {
  const stagger = useStaggeredAnimation(PLANS.length)

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle title="우리 병원에 맞는 플랜을 선택하세요" subtitle="통합 운영과 개별 선택, 두 가지 방식 중 고를 수 있습니다" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PLANS.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                {...stagger(index)}
                className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white flex flex-col"
              >
                <div className="py-4 text-center font-bold text-gray-900 bg-gray-100 border-b border-gray-200">
                  {plan.name}
                </div>

                <div className="p-6 flex flex-col items-center text-center flex-1 bg-white">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                    <Icon className="h-8 w-8 text-gray-700" />
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{plan.tagline}</p>

                  <p className="text-2xl sm:text-3xl font-bold mb-1 text-gray-900">
                    {plan.price}
                  </p>
                  <p className="text-xs text-gray-500 mb-6">{plan.priceNote}</p>

                  <div className="w-full border-t border-dashed border-gray-300 mb-6" />

                  <p className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-gray-700" />
                    {plan.featuresTitle}
                  </p>

                  <ul className="text-sm text-gray-600 space-y-2 mb-6" style={{ wordBreak: "keep-all" }}>
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <Link
                    href="/pricing"
                    className="mt-auto w-full py-3 rounded-lg text-white font-semibold text-sm text-center bg-gray-900 hover:bg-gray-800 transition-colors"
                  >
                    플랜 자세히 보기 →
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
