"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const services = [
  {
    id: 1,
    title: "X 리트윗 이벤트",
    logo: "/images/x.png",
    description: "리트윗 할인 이벤트를 통해 초반 예약 유도. 개원 준비 단계 혹은 극초반에 적합합니다.",
  },
  {
    id: 2,
    title: "인플루언서 협찬",
    logo: "/images/instagram.png",
    description: "소형 인플루언서 협찬을 통해 인지도 확보. 레이저 시술이나 리프팅에 효과적입니다.",
  },
  {
    id: 3,
    title: "DB 마케팅",
    logo: "/images/line.png",
    description: "Meta, Google 광고를 통해 상담 유입. 개원 초반 환자 유입에 적합합니다.",
  },
  {
    id: 4,
    title: "검색최적화 (SEO)",
    logo: "/images/google.png",
    description: "웹사이트 내 후기 작성 및 백링크 작업. 개원 중후반 안정적 트래픽 유지에 적합합니다.",
  },
  {
    id: 5,
    title: "현지 매거진 송출",
    logo: "/images/ameba.png",
    description: "현지 언론과 매거진에 기사 송출. 중고가 맞춤형 클리닉에 적합합니다.",
  },
  {
    id: 6,
    title: "자체 유튜브 운영",
    logo: "/images/youtube.png",
    description: "중고가 특화 시술 홍보에 적합한 영상 콘텐츠 마케팅입니다.",
  },
]

export function Service() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            클리닉브릿지가 제공하는 가치
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            병원의 위치, 주력 시술, 규모에 맞는 채널을 선택해 집중합니다
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 py-8"
            >
              <div className="flex-shrink-0 w-12 h-12 relative">
                <Image
                  src={service.logo}
                  alt={service.title}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

