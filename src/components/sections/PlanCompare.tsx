"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"
import { Container } from "@/components/common/Container"
import { useStaggeredAnimation } from "@/lib/hooks/useMotionAnimation"

const PLANS = [
  {
    icon: "/images/line.png",
    name: "최소 스타터 플랜",
    price: "15만원",
    featuresTitle: "일본 마케팅 셀프로 시작하는 마케팅",
    features: [
      "일본 LINE 계정 생성 및 현지화 세팅",
    ],
  },
]

const SCATTERED_LOGOS = [
  { src: "/images/instagram.png", side: "left", x: -120, y: 10, rotate: -15, size: 44 },
  { src: "/images/ameba.png", side: "left", x: -230, y: 140, rotate: 10, size: 40 },
  { src: "/images/google.png", side: "left", x: -80, y: 250, rotate: 18, size: 36 },
  { src: "/images/강남언니_logo.png", side: "right", x: -120, y: 0, rotate: 12, size: 44 },
  { src: "/images/x.png", side: "right", x: -230, y: 130, rotate: -14, size: 40 },
  { src: "/images/youtube.png", side: "right", x: -80, y: 250, rotate: -8, size: 40 },
]

export function PlanCompare() {
  const stagger = useStaggeredAnimation(PLANS.length)

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
            style={{ wordBreak: "keep-all" }}
          >
            해외 환자 마케팅 처음이신가요?
          </h2>
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900"
            style={{ wordBreak: "keep-all" }}
          >
            부담없이 바로 시작해보세요!
          </h2>
        </div>

        <div className="mx-auto w-px h-20 bg-gradient-to-b from-gray-300 via-gray-200 to-transparent mb-8" />

        <p
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12"
          style={{ wordBreak: "keep-all" }}
        >
          시작하면 무조건 도움되는 마케팅만 제안합니다.
        </p>

        <div className="relative grid grid-cols-1 gap-6 max-w-sm mx-auto">
          {SCATTERED_LOGOS.map((logo, i) => (
            <div
              key={i}
              className="hidden lg:block absolute rounded-xl bg-white border border-gray-100 shadow-md p-2.5"
              style={{
                top: logo.y,
                [logo.side]: logo.x,
                transform: `rotate(${logo.rotate}deg)`,
              }}
            >
              <Image
                src={logo.src}
                alt=""
                width={logo.size}
                height={logo.size}
                className="object-contain"
                style={{ width: logo.size, height: logo.size }}
              />
            </div>
          ))}

          {PLANS.map((plan, index) => {
            return (
              <motion.div
                key={plan.name}
                {...stagger(index)}
                className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white flex flex-col"
              >
                <div className="py-4 text-center font-bold text-gray-900 bg-gray-100 border-b border-gray-200">
                  {plan.name}
                </div>

                <div className="p-6 flex flex-col items-center text-center flex-1 bg-white">
                  <div className="mb-5">
                    <Image src={plan.icon} alt="" width={56} height={56} className="object-contain" />
                  </div>

                  <p className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
                    {plan.price}
                  </p>

                  <div className="w-full border-t border-dashed border-gray-300 mb-6" />

                  <p className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-gray-700" />
                    {plan.featuresTitle}
                  </p>

                  <ul className="text-sm text-gray-600 space-y-2 mb-6" style={{ wordBreak: "keep-all" }}>
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  <Link
                    href="/pricing"
                    className="mt-auto w-full py-3 rounded-lg text-white font-semibold text-sm text-center bg-[#06C755] hover:bg-[#05a848] transition-colors"
                  >
                    플랜 더 알아보기 →
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
