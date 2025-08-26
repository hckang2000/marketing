"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/common/Container"
import { Button } from "@/components/common/Button"

interface FinalCTAProps {
  onContactClick: () => void
}

export function FinalCTA({ onContactClick }: FinalCTAProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title - Mobile */}
          <h2 className="text-2xl font-bold text-white mb-6 lg:hidden">
            1분만 투자해서 문의해주시면
          </h2>

          {/* Title - Desktop */}
          <h2 className="hidden lg:block text-4xl font-bold text-white mb-6">
            1분만 투자해서 문의해주시면
          </h2>

          {/* Description - Mobile */}
          <p className="text-lg text-white/90 mb-8 leading-relaxed lg:hidden">
            직접 찾아뵙고 무료로<br />
            병원 해외마케팅을 진단해드립니다.
          </p>

          {/* Description - Desktop */}
          <p className="hidden lg:block text-2xl text-white/90 mb-8 leading-relaxed">
            직접 찾아뵙고 무료로 병원 해외마케팅을 진단해드립니다.
          </p>

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
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
          >
            1분 문의하기
          </Button>

          <p className="text-white/70 text-sm mt-4">
            * 상담은 무료이며, 별도 비용이 발생하지 않습니다.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
