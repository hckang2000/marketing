"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/common/Button"
import { Container } from "@/components/common/Container"

interface HeroProps {
  onContactClick: () => void
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-mobile.jpg"
          alt="Hero background mobile"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/hero-desktop.jpg"
          alt="Hero background desktop"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      <Container>
        <div className="relative z-10 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="block">일본 환자 유치로</span>
              <span className="block bg-red-600 text-white px-4 py-2 rounded-lg inline-block">광고비 10배 매출을</span>
              <span className="block">만드는 병원 마케팅</span>
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto"
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
        <div className="absolute -top-40 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
