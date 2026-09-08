"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { SectionTitle } from "@/components/common/SectionTitle"
import { useStaggeredAnimation } from "@/lib/hooks/useMotionAnimation"

const TESTIMONIALS = [
  {
    image: "/images/testimonials/testimonial-1.jpg",
    caption: "인플루언서 캠페인 후 일본인 환자 예약 증가",
  },
  {
    image: "/images/testimonials/testimonial-2.jpg",
    caption: "광고비 대비 높은 매출 전환 성과",
  },
  {
    image: "/images/testimonials/testimonial-3.jpg",
    caption: "일본인 인플루언서 협찬 캠페인 이후 주말 내원 증가",
  },
]

export function Testimonials() {
  const stagger = useStaggeredAnimation(TESTIMONIALS.length)

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle title="실제 원장님들의 이야기" subtitle="클리닉브릿지와 함께한 병원의 실제 대화입니다" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, index) => (
            <motion.div key={t.image} {...stagger(index)} className="flex flex-col items-center">
              <div className="relative w-full aspect-[9/10] rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-3">
                <Image
                  src={t.image}
                  alt={t.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="text-sm text-gray-500 text-center" style={{ wordBreak: "keep-all" }}>
                {t.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
