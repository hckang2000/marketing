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
    <section className="section-padding bg-primary">
      <Container>
        <motion.div {...motionProps} className="text-center max-w-4xl mx-auto">
          <ResponsiveText
            mobile="10초 투자해서 문의하시면"
            desktop="10초 투자해서 문의하시면"
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
            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
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
