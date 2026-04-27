"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Search } from "lucide-react"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const differentiators = [
  {
    id: 1,
    icon: Users,
    title: "현지 네트워크 직접 운영",
    description: "중간 에이전시 없이 일본 현지 인플루언서·언론·매체와 직접 계약하고 운영합니다. 1,000명 이상의 검증된 인플루언서 풀을 제공합니다.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "ROI 기반 성과 보장",
    description: "캠페인에서 광고비 대비 평균 10배 이상의 매출을 기록했습니다. KPI 기반 운영으로 측정 가능한 성과만 약속합니다.",
  },
  {
    id: 3,
    icon: Search,
    title: "데이터 기반 전략 컨설팅",
    description: "서울대 경영 출신 컨설턴트가 글로벌 시장 분석과 환자 여정 데이터를 바탕으로 클라이언트사의 규모와 브랜드 포지션에 맞는 통합 전략을 설계합니다.",
  },
]

export function Differentiators() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            style={{ wordBreak: "keep-all" }}
          >
            클리닉브릿지가 특별한 이유
          </h2>
          <p
            className="text-base text-gray-600"
            style={{ wordBreak: "keep-all" }}
          >
            글로벌 시장에서 검증된 방법론으로<br className="sm:hidden" />{" "}
            의료 마케팅의 지속 가능한 성장 구조를 설계합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-[#014A9F]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
