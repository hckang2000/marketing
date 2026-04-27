"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const clientLogos: { id: number; name: string; logo: string; bg?: string }[] = [
  { id: 1, name: "강남언니", logo: "/images/강남언니_logo.png" },
  { id: 2, name: "블리비", logo: "/images/logo_블리비.jpeg", bg: "#F8D2DD" },
  { id: 3, name: "셀린클리닉", logo: "/images/cellinclinic_logo.png", bg: "#0000CC" },
  { id: 4, name: "여신티켓", logo: "/images/여신티켓_logo.png", bg: "linear-gradient(135deg, #FF5495 0%, #F11675 100%)" },
  { id: 5, name: "손유나", logo: "/images/sonyouna_logo.jpg", bg: "linear-gradient(180deg, #1A1C43 0%, #463898 100%)" },
  { id: 6, name: "미앤미", logo: "/images/미앤미_logo.jpg" },
]

export function SocialProof() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-[#EFF6FF]">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            주요 고객사 및 파트너사
          </h2>
          {/* <p className="text-base text-gray-600 max-w-lg mx-auto">
            클리닉브릿지와 함께 성장한 글로벌 마케팅 사례를 확인해보세요.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 max-w-5xl mx-auto">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              viewport={{ once: true }}
              style={client.bg ? { background: client.bg } : undefined}
              className="flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm h-24 sm:h-28 lg:h-32 px-6 py-4"
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
