"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

export function WhyClinicBridge() {
  const headlineMotion = useMotionAnimation()

  return (
    <section className="py-7 lg:py-10 bg-white">
      <Container>
        <motion.div {...headlineMotion} className="text-center mb-7">
          <h2
            className="text-xl sm:text-2xl font-bold text-gray-900 leading-[1.5]"
            style={{ wordBreak: "keep-all" }}
          >
            <span className="text-[#C1452D]">클리닉브릿지</span>는
            <br />
            원장님의 걱정을 믿음으로 바꿉니다
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gray-50 p-6 lg:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-7">
            {/* 텍스트 영역 */}
            <div className="text-center lg:text-left max-w-md">
              <h3
                className="text-xl sm:text-2xl font-bold text-gray-900 leading-[1.4]"
                style={{ wordBreak: "keep-all" }}
              >
                서울대 마케터들이 있는 팀은 다릅니다.
              </h3>
              <p
                className="mt-4 text-gray-500 text-sm leading-relaxed"
                style={{ wordBreak: "keep-all" }}
              >
                10년 이상의 글로벌 마케팅 경력을 가진 서울대 경영대학 출신 대표와
                현직 의료 자문진이 함께 운영하는 메디컬 마케팅 전문 컨설팅 조직입니다.
              </p>
            </div>

            {/* 이미지 영역 */}
            <div className="shrink-0">
              <div className="relative w-[155px] sm:w-[180px] aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm p-6">
                <Image
                  src="/images/snu_ui_download.png"
                  alt="서울대학교"
                  fill
                  quality={95}
                  className="object-contain p-6"
                  sizes="180px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
