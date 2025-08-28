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
            mobile="10초만 투자해서 문의해주시면"
            desktop="10초만 투자해서 문의해주시면"
            as="h2"
            className="text-3xl font-bold text-white mb-6"
          />

          <ResponsiveText
            mobile="직접 찾아뵙고 무료로<br />병원 해외마케팅을 진단해드립니다."
            desktop="직접 찾아뵙고 무료로 병원 해외마케팅을 진단해드립니다."
            className="text-base text-white/90 mb-8 leading-relaxed"
          />

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              무료 진단 포함 사항
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">현재 마케팅 현황 분석</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">일본 시장 진출 가능성 검토</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">예상 투자 대비 수익 분석</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">맞춤형 마케팅 전략 제안</span>
              </div>
            </div>
          </div>

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
