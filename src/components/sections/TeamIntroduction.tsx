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
        <motion.div {...motionProps} className="text-left mb-16 max-w-2xl mx-auto">
          <SectionTitle
            title="메디컬 마케팅 전문 팀"
            centered={false}
            className="mb-8"
            titleClassName="mb-8"
          />
          <ResponsiveText
            mobile="10년 이상의 글로벌 마케팅 경력을 가진<br />서울대 경영대학 출신 대표와<br />현직 의료 자문진이 함께 운영하는<br />메디컬 마케팅 전문 컨설팅 조직입니다."
            desktop="10년 이상의 글로벌 마케팅 경력을 가진 서울대 경영대학 출신 대표와<br />현직 의료 자문진이 함께 운영하는 메디컬 마케팅 전문 컨설팅 조직입니다."
            className="text-base text-gray-600"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* 대표 소개 */}
            <motion.div
              {...motionProps}
              transition={{ delay: 0.2 }}
              className="text-left"
            >
              <div className="w-[11rem] mx-auto">
                <div className="relative w-full aspect-[4/5] mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/profiles/ceo_profile.jpg"
                    alt="이은석 대표"
                    fill
                    quality={95}
                    className="object-cover object-center"
                    sizes="176px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  대표 이은석
                </h3>
                <p className="text-gray-600 whitespace-nowrap">
                  서울대학교 사회학과 15<br />
                  벤처경영학과 졸업
                </p>
              </div>
            </motion.div>

            {/* 팀원 소개 */}
            <motion.div
              {...motionProps}
              transition={{ delay: 0.4 }}
              className="text-left"
            >
              <div className="w-[11rem] mx-auto">
                <div className="relative w-full aspect-[4/5] mb-6 rounded-2xl overflow-hidden bg-white flex items-center justify-center p-6">
                  <Image
                    src="/images/snu_ui_download.png"
                    alt="서울대학교"
                    fill
                    quality={95}
                    className="object-contain p-4"
                    sizes="176px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  서울대학교 팀
                </h3>
                <p className="text-gray-600 whitespace-nowrap">
                  서울대 의대 의학 자문 및<br />
                  서울대 출신 마케터
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
