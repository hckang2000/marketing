"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const testimonials = [
  {
    id: 1,
    image: "/images/testimonials/testimonial-1.jpg",
    caption: "홍대 OOO의원 원장님 — 일본 인플루언서 마케팅 시작하고 월 매출 2억에서 6개월만에 3.5억으로 올랐습니다.",
  },
  {
    id: 2,
    image: "/images/testimonials/testimonial-2.jpg",
    caption: "강남 XXX의원 원장님 — 광고비 대비 15배 매출이 나옵니다.",
  },
  {
    id: 3,
    image: "/images/testimonials/testimonial-3.jpg",
    caption: "신논현 YYY의원 원장님 — 주말에 일본 환자가 40명까지 오네요.",
  },
]

export function SocialProof() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            원장님들 실제 후기
          </h2>
          <p className="text-base text-gray-600 max-w-lg mx-auto">
            클리닉브릿지와 함께한 원장님들의 실제 후기를 확인해보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-4">
                <Image
                  src={testimonial.image}
                  alt={`후기 이미지 ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed text-center">
                {testimonial.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
