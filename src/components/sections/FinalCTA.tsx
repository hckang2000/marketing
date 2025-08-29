"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/common/Container"
import { Button } from "@/components/common/Button"
import { ResponsiveText } from "@/components/common/ResponsiveText"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

interface FinalCTAProps {
  onContactClick: () => void
}

export function FinalCTA({ onContactClick }: FinalCTAProps) {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-red-600">
      <Container>
        <motion.div {...motionProps} className="text-center max-w-4xl mx-auto">
          <ResponsiveText
            mobile="지금 바로 문의주세요"
            desktop="지금 바로 문의주세요"
            as="h2"
            className="text-3xl font-bold text-white mb-6"
          />

          <ResponsiveText
            mobile="직접 찾아뵙고 무료로<br />병원 해외마케팅을 진단해드립니다."
            desktop="직접 찾아뵙고 무료로 병원 해외마케팅을 진단해드립니다."
            className="text-base text-white/90 mb-8 leading-relaxed"
          />

          <Button
            onClick={onContactClick}
            variant="default"
            size="lg"
            className="w-full lg:w-96 lg:px-8 bg-white text-red-600 hover:bg-gray-100 text-lg py-4 font-semibold shadow-lg"
          >
            10초 문의하기
          </Button>

          <p className="text-white/70 text-sm mt-4">
            * 상담은 무료이며, 별도 비용이 발생하지 않습니다.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
