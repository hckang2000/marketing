"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/common/Button"
import { Container } from "@/components/common/Container"

interface HeroProps {
  onContactClick: () => void
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Container>
        <div className="relative z-10 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              <span className="block">일본 대상 마케팅만으로</span>
              <span className="block text-gradient">광고비의 10배를 더 벌어준</span>
              <span className="block">병원 전문 마케팅 회사가 있다면</span>
              <span className="block">믿어지시나요?</span>
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              딱 1분만 읽어보시고 무료로 병원마케팅 진단을 받아보세요.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={onContactClick}
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto"
              >
                1분 문의하기
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="/case-studies">실제 사례 보기</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
