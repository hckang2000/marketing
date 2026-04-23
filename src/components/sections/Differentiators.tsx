"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Search, ArrowRight } from "lucide-react"
import { Container } from "@/components/common/Container"
import { useContact } from "@/components/providers/ContactProvider"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const differentiators = [
  {
    id: 1,
    icon: Users,
    title: "일본 고객 직접 소통",
    subtitle: "1,000명+ 현지 네트워크",
    description:
      "MCN 없이 일본 마이크로 인플루언서와 직접 계약. 1,000명 이상의 일본 고객과 직접 소통한 현지 데이터를 보유하고 있습니다.",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "광고비 10배 매출",
    subtitle: "평균 ROAS 1,000%",
    description:
      "실제 집행한 캠페인에서 광고비 대비 평균 10배 이상의 매출을 기록했습니다. 성과 없는 마케팅은 제안하지 않습니다.",
  },
  {
    id: 3,
    icon: Search,
    title: "데이터 기반 전략",
    subtitle: "서울대 경영 출신 마케터",
    description:
      "서울대 경영 출신 마케터가 설문 데이터와 고객 여정 분석을 바탕으로 병원에 맞는 최적 채널과 예산을 설계합니다.",
  },
]

export function Differentiators() {
  const motionProps = useMotionAnimation()
  const { openContact } = useContact()

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...motionProps} className="mb-16 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-tight">
            클리닉브릿지가 특별한 이유
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            일본 시장에서 검증된 방법으로 병원의 매출을 만들어 드립니다.
            <br />
            클리닉브릿지의 업무 방식입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <div className="mb-7">
                  <Icon className="h-10 w-10 text-red-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{item.subtitle}</p>
                <p className="text-gray-700 text-[15px] leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={openContact}
                  className="inline-flex items-center gap-1 text-red-500 text-sm font-semibold hover:gap-2 transition-all"
                >
                  자세히 보기
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
