"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation, useStaggeredAnimation } from "@/lib/hooks/useMotionAnimation"

const CARDS = [
  {
    image: "/images/pain-points/worry-1.png",
    title: "뭘 해야 하는지\n모르겠어요.",
  },
  {
    image: "/images/pain-points/worry-2.png",
    title: "계약해지 조건이\n복잡해서 불안해요.",
  },
  {
    image: "/images/pain-points/worry-3.png",
    title: "매출이 안 나오면\n어떡하죠?",
  },
]

export function MissedOpportunity() {
  const headlineMotion = useMotionAnimation()
  const cardStagger = useStaggeredAnimation(CARDS.length)

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...headlineMotion} className="text-center mb-12">
          <h2
            className="text-xl sm:text-2xl font-bold text-gray-900 leading-[1.5]"
            style={{ wordBreak: "keep-all" }}
          >
            일본 환자 마케팅,
            <br />
            많이 고민되시죠?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              {...cardStagger(index)}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-b from-gray-100 to-gray-50 min-h-[280px]"
            >
              <h3
                className="font-bold text-gray-900 text-base sm:text-lg whitespace-pre-line leading-snug"
              >
                {card.title}
              </h3>

              <div className="mt-auto pt-6">
                <div className="relative w-72 sm:w-80 aspect-[3/2] rounded-xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
