"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { SectionTitle } from "@/components/common/SectionTitle"
import { ResponsiveText } from "@/components/common/ResponsiveText"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

export function TeamIntroduction() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-gray-100">
      <Container>
        <motion.div {...motionProps} className="text-center mb-16">
          <SectionTitle 
            title="신뢰할 수 있는<br class=&quot;sm:hidden&quot; />진짜 '서울대 출신' 마케팅 팀"
          />
          <ResponsiveText
            mobile="10년 이상의 마케팅 경력을 가진<br />서울대 경영대학 출신 대표가<br />현직 의사와 함께 만든 마케팅 대행사입니다."
            desktop="10년 이상의 마케팅 경력을 가진 서울대 경영대학 출신 대표가<br />현직 의사와 함께 만든 마케팅 대행사입니다."
            className="text-base text-gray-600 max-w-2xl mx-auto"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 대표 소개 */}
            <motion.div 
              {...motionProps} 
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/images/profiles/ceo_profile.jpg"
                  alt="이은석 대표"
                  fill
                  className="object-cover rounded-full"
                  sizes="128px"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                대표 이은석
              </h3>
              <p className="text-gray-600">
                서울대학교 사회학과 15 / 벤처경영학과 졸업
              </p>
            </motion.div>

            {/* 팀원 소개 */}
            <motion.div 
              {...motionProps} 
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/images/profiles/doctor_profile.jpg"
                  alt="강OO 자문의"
                  fill
                  className="object-cover rounded-full"
                  sizes="128px"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                자문의 강OO
              </h3>
              <p className="text-gray-600">
                서울대학교 의학전문대학원 12 / 서울대병원 수련
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
