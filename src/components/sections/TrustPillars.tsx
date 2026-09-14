"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useStaggeredAnimation } from "@/lib/hooks/useMotionAnimation"

const PILLARS = [
  {
    image: "/images/hero-about.png",
    headline: "공정위 표준 약관 100% 준수",
    description: "포함/미포함 항목까지, 추가로 발생할 수 있는 비용을 투명하게 안내해요.",
  },
  {
    image: "/images/hero-blog.png",
    headline: "불필요한 상담 없이 가입/해지",
    description: "최소 계약기간, 독소조항 없이 원하실 때 계약을 해지하실 수 있어요.",
  },
  {
    image: "/images/hero-data.png",
    headline: "실제 데이터 기반의 성과만 안내",
    description: "부풀린 숫자가 아닌, 실제 캠페인 데이터로만 성과를 보여드려요.",
  },
]

export function TrustPillars() {
  const stagger = useStaggeredAnimation(PILLARS.length)

  return (
    <section className="pt-2 lg:pt-4 pb-16 lg:pb-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => {
            return (
              <motion.div
                key={pillar.headline}
                {...stagger(index)}
                className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>

                <div className="p-6 bg-gray-50 text-center">
                  <p
                    className="font-bold text-gray-900 text-base sm:text-lg mb-2"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {pillar.headline}
                  </p>
                  <p
                    className="text-sm text-gray-600 leading-relaxed"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
