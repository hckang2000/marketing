"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const SERVICE_TAGS = [
  "바이럴 콘텐츠 마케팅",
  "인플루언서 마케팅",
  "퍼포먼스 광고 (DB)",
  "글로벌 SEO",
  "현지 PR·매거진",
  "브랜드 채널 운영",
]

export function FounderIntro() {
  const motionProps = useMotionAnimation()

  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <motion.div {...motionProps} className="flex flex-col items-center text-center">
          <div className="relative w-full max-w-3xl aspect-video mb-10 rounded-2xl overflow-hidden bg-black">
            <Image
              src="/images/ceo-image.png"
              alt="클리닉브릿지 대표"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <p
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.5]"
            style={{ wordBreak: "keep-all" }}
          >
            최고의 요리는 최고의 재료가 다 합니다.
            <br />
            해외환자 마케팅, 최고의 마케터들에게 맡기세요.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {SERVICE_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-medium text-[#C1452D] bg-[#FBEEE8] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
