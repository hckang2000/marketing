"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { SectionTitle } from "@/components/common/SectionTitle"
import { ResponsiveText } from "@/components/common/ResponsiveText"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const dmConversations = [
  {
    id: 1,
    image: "/images/dm/dm-1.jpg",
    caption: "일본 인플루언서와 전 과정을 직접 조율",
  },
  {
    id: 2,
    image: "/images/dm/dm-2.jpg",
    caption: "협찬 제안부터 계약까지 모든 과정을 투명하게 공개",
  },
  {
    id: 3,
    image: "/images/dm/dm-3.jpg",
    caption: "중간 브로커 없이 직접 소통하는 진짜 마케팅",
  },
  {
    id: 4,
    image: "/images/dm/dm-4.jpg",
    caption: "이렇게 모집한 인플루언서 500명 이상 보유",
  },
]

export function InfluencerDM() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <SectionTitle title="일본 인플루언서와<br />진짜로 DM 주고받는 회사" titleClassName="text-3xl lg:text-3xl" />
          <ResponsiveText
            mobile="중간 브로커 NO 직접 대화 YES<br />실제 소통 내역까지 공개합니다. 이 정도 투명성, 보신 적 있나요?"
            desktop="중간 브로커 NO 직접 대화 YES<br />실제 소통 내역까지 공개합니다. 이 정도 투명성, 보신 적 있나요?"
            className="text-base text-gray-600"
          />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {dmConversations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl mb-3">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-gray-600 text-center leading-snug">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
