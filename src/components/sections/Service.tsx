"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const services = [
  {
    id: 1,
    title: "바이럴 콘텐츠 마케팅",
    subtitle: "낮은 CAC로 대규모 인지도 확보",
    logo: "/images/x.png",
    description:
      "X(구 Twitter) 등 현지 SNS 채널에서 바이럴 캠페인을 직접 설계·운영합니다.",
  },
  {
    id: 2,
    title: "인플루언서 마케팅",
    subtitle: "전환성과로 연결되는 콘텐츠 자산",
    logo: "/images/instagram.png",
    description:
      "검증된 일본 현지 인플루언서 풀을 활용해 통합 콘텐츠 캠페인을 운영합니다.",
  },
  {
    id: 3,
    title: "퍼포먼스 광고 (DB)",
    subtitle: "리드 파이프라인 구축",
    logo: "/images/line.png",
    description:
      "Meta·Google 등 글로벌 광고 플랫폼을 통해 잠재 고객의 상담 리드를 확보합니다.",
  },
  {
    id: 4,
    title: "글로벌 SEO",
    subtitle: "장기 자산 확보",
    logo: "/images/google.png",
    description:
      "글로벌 구글 검색 결과에서 시술 등 핵심 키워드 및 브랜드 키워드에서의 상위 노출을 확보합니다.",
  },
  {
    id: 5,
    title: "현지 PR·매거진",
    subtitle: "신뢰 자산 구축",
    logo: "/images/ameba.png",
    description:
      "일본 주요 언론과 뷰티·헬스케어 매거진에 PR 기사를 송출합니다. 프리미엄 브랜딩과 신뢰도 구축에 효과적입니다.",
  },
  {
    id: 6,
    title: "브랜드 채널 운영",
    subtitle: "Owned Media",
    logo: "/images/youtube.png",
    description:
      "유튜브 등 영상 채널에서 진료 과정, 임상 결과 등을 체계적으로 콘텐츠화하여 업로드합니다.",
  },
]

export function Service() {
  const motionProps = useMotionAnimation()

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...motionProps} className="mb-16 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            style={{ wordBreak: "keep-all" }}
          >
            클리닉브릿지의 통합 마케팅 서비스
          </h2>
          <p
            className="text-base text-gray-500 leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            클라이언트사의 규모, 브랜드 포지션에 맞춰<br className="sm:hidden" />{" "}
            통합 채널 전략을 설계합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="relative w-12 h-12 mb-6 flex-shrink-0">
                <Image
                  src={service.logo}
                  alt={service.title}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
