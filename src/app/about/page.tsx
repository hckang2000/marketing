"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Button } from "@/components/common/Button"
import { useContact } from "@/components/providers/ContactProvider"
import { TeamIntroduction } from "@/components/sections/TeamIntroduction"
import { PageHero } from "@/components/common/PageHero"

export default function AboutPage() {
  const { openContact } = useContact()

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        category="회사 소개"
        title="클리닉브릿지 소개"
        subtitle="일본 대상 병원 마케팅 전문 회사"
        image="/images/hero-about.png"
      />

      {/* Team Introduction */}
      <TeamIntroduction />

      {/* CEO Profile — 2-column layout */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            {/* Text */}
            <div>
              {/* Label */}
              <p className="text-sm text-[#014A9F] font-medium mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#014A9F] rounded-full inline-block" />
                클리닉브릿지. 이은석 대표
              </p>

              {/* Headline */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight" style={{ wordBreak: 'keep-all' }}>
                마케팅은 소비가 아닌<br />
                투자입니다.
              </h2>

              {/* Quotes */}
              <p className="text-base font-semibold text-gray-800 mb-2" style={{ wordBreak: 'keep-all' }}>
                &ldquo;서울대 경영대 출신 마케터가 직접 전략을 설계합니다.&rdquo;
              </p>
              <p className="text-base font-semibold text-gray-800 mb-8" style={{ wordBreak: 'keep-all' }}>
                &ldquo;광고비의 10배 이상을 벌 수 있는 전략으로 성공을 보장합니다.&rdquo;
              </p>

              {/* Description */}
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed mb-10" style={{ wordBreak: 'keep-all' }}>
                <p>
                  근거 기반 마케팅으로 매출을 올려드리는 클리닉브릿지 대표 이은석입니다.
                  서울대학교 경영대학을 졸업하고 10년 이상의 마케팅 경험을 바탕으로
                  병원들이 일본 시장에서 성공할 수 있도록 도와드리고 있습니다.
                </p>
                <p>
                  항상 폭발적인 매출을 만들었던 실력을 바탕으로
                  병원들의 해외 환자 마케팅을 책임지겠습니다.
                  저희는 소개로 찾아주시는 분들이 많습니다.
                  일을 맡겨보신 분들은 다르다는 것을 느끼시기 때문입니다.
                </p>
                <p>
                  가볍게 문의해주세요.
                  15분만 만나도 병원의 매출을 올리는 데 기여하겠습니다.
                </p>
              </div>

              {/* <Button onClick={openContact} variant="default" size="lg">
                10초 문의하기
              </Button> */}
            </div>

            {/* Image (commented out)
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[12.6rem] aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/profiles/ceo_profile.jpg"
                  alt="이은석 대표"
                  fill
                  quality={95}
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 202px"
                />
              </div>
            </div>
            */}
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
