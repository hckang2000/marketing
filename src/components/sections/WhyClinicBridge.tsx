"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"

export function WhyClinicBridge() {
  return (
    <section className="py-7 lg:py-10 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-black p-6 lg:p-8"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, rgba(193,69,45,0.5), transparent 60%)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-7">
            {/* 텍스트 영역 */}
            <div className="text-center lg:text-left max-w-md">
              <h3
                className="text-xl sm:text-2xl font-bold text-white leading-[1.4]"
                style={{ wordBreak: "keep-all" }}
              >
                서울대 마케터들이 있는 팀은 다릅니다.
              </h3>
              <p
                className="mt-4 text-white/70 text-sm leading-relaxed"
                style={{ wordBreak: "keep-all" }}
              >
                10년 이상의 글로벌 마케팅 경력을 가진 서울대 경영대학 출신 대표와
                현직 의료 자문진이 함께 운영하는 메디컬 마케팅 전문 조직입니다.
              </p>
            </div>

            {/* 이미지 영역 */}
            <div className="w-full lg:flex-1 max-w-md">
              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm p-8">
                <Image
                  src="/images/snu_ui_download.png"
                  alt="서울대학교"
                  fill
                  quality={95}
                  className="object-contain p-8"
                  sizes="(min-width: 1024px) 400px, 100vw"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden mt-6 rounded-3xl bg-black p-6 lg:p-8"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 70% 50%, rgba(193,69,45,0.8), transparent 65%)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-7">
            {/* 텍스트 영역 */}
            <div className="text-center lg:text-left max-w-md">
              <h3
                className="text-xl sm:text-2xl font-bold text-white leading-[1.4]"
                style={{ wordBreak: "keep-all" }}
              >
                가격도 조건도, 숨김 없이 공개합니다.
              </h3>
              <p
                className="mt-4 text-white/70 text-sm leading-relaxed"
                style={{ wordBreak: "keep-all" }}
              >
                포함/미포함 항목까지 투명하게 안내하고, 최소 계약기간과
                독소조항 없는 조건으로 시작하실 수 있습니다.
              </p>
            </div>

            {/* 이미지 영역 */}
            <div className="w-full lg:flex-1 max-w-md">
              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-about.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, 100vw"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
