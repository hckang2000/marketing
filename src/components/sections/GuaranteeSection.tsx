"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/common/Container"
import { SectionTitle } from "@/components/common/SectionTitle"
import { ResponsiveText } from "@/components/common/ResponsiveText"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

export function GuaranteeSection() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800/30 to-gray-900/30" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-700/10 rounded-full blur-2xl" />
      </div>

      <Container>
        <div className="relative z-10">
          <motion.div {...motionProps} className="text-center mb-16">
            <SectionTitle 
              title="광고비 10배 매출 미달시<br class='block sm:inline' />환불로 책임집니다"
              titleClassName="text-white"
            />
          </motion.div>

          <motion.div 
            {...motionProps} 
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* First Description */}
            <div className="text-lg lg:text-xl text-gray-300">
              <p className="lg:hidden">
                목표 미달시 광고비의<br />
                최대 <span className="bg-red-600 text-white px-2 py-1 rounded font-semibold">80%까지 환불</span>로 책임집니다
              </p>
              <p className="hidden lg:block">
                목표 미달시 광고비의 최대 <span className="bg-red-600 text-white px-2 py-1 rounded font-semibold">80%까지 환불</span>로 책임집니다
              </p>
            </div>

            {/* Second Description */}
            <div className="text-lg lg:text-xl text-gray-300">
              <p className="lg:hidden">
                서울대 출신 대표가 목숨 걸고<br />
                6개월 안에 반드시 성과로 증명합니다
              </p>
              <p className="hidden lg:block">
                서울대 출신 대표가 목숨 걸고 6개월 안에 반드시 성과로 증명합니다
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
