"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const differentiators = [
  {
    id: 1,
    title: "일본 고객과 직접 소통합니다.",
    description:
      "MCN 없이 일본 마이크로 인플루언서와 직접 계약.\n1,000명 이상의 일본 고객과 직접 소통한 현지 데이터를 보유하고 있습니다.",
    image: "/images/diff-1.jpg",
  },
  {
    id: 2,
    title: "광고비의 10배 매출을 만듭니다.",
    description:
      "실제 집행한 캠페인에서 광고비 대비 평균 10배 이상의 매출을 기록했습니다.\n성과 없는 마케팅은 제안하지 않습니다.",
    image: "/images/diff-2.jpg",
  },
  {
    id: 3,
    title: "데이터 기반 전략을 설계합니다.",
    description:
      "서울대 경영 출신 마케터가 설문 데이터와 고객 여정 분석을 바탕으로\n병원에 맞는 최적 채널과 예산을 설계합니다.",
    image: "/images/diff-3.jpg",
  },
]

export function Differentiators() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...motionProps} className="mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            클리닉브릿지는 특별합니다.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Text area */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              {/* Image area */}
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
