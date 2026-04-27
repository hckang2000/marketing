"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/common/Container"
import { Button } from "@/components/common/Button"
import { ResponsiveText } from "@/components/common/ResponsiveText"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"
import { trackButtonClick } from "@/lib/gtag"

interface FinalCTAProps {
  onContactClick: () => void
}

export function FinalCTA({ onContactClick }: FinalCTAProps) {
  const motionProps = useMotionAnimation()

  // 문의 버튼 클릭 핸들러
  const handleContactClick = () => {
    trackButtonClick('contact', 'final_cta')
    onContactClick()
  }

  return (
    <section className="section-padding bg-[#014A9F]">
      <Container>
        <motion.div {...motionProps} className="text-center max-w-4xl mx-auto">
          <ResponsiveText
            mobile="도입 상담 신청"
            desktop="도입 상담 신청"
            as="h2"
            className="text-3xl font-bold text-white mb-6"
          />

          <ResponsiveText
            mobile="전담 컨설턴트가 직접 방문하여<br />글로벌 환자 유치 전략을 진단해드립니다."
            desktop="전담 컨설턴트가 직접 방문하여 글로벌 환자 유치 전략을 진단해드립니다."
            className="text-base text-white/90 mb-8 leading-relaxed"
          />

          <Button
            onClick={handleContactClick}
            variant="default"
            size="lg"
            className="w-full lg:w-96 lg:px-8 bg-white text-[#014A9F] hover:bg-gray-100 text-lg py-4 font-semibold shadow-lg"
          >
            도입 상담 신청
          </Button>

          <p className="text-white/70 text-sm mt-4">
            * 도입 진단 및 초기 컨설팅은 무료로 제공됩니다.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
