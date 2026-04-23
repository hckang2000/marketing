"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const services = [
  {
    id: 1,
    title: "X 리트윗 이벤트",
    subtitle: "초반 예약 유도",
    logo: "/images/x.png",
    description:
      "리트윗 할인 이벤트를 통해 일본 현지 사용자에게 빠르게 노출합니다. 팔로워 수가 많지 않아도 바이럴 효과가 높아 개원 준비 단계나 극초반 병원에 적합합니다.",
  },
  {
    id: 2,
    title: "인플루언서 협찬",
    subtitle: "인지도 확보",
    logo: "/images/instagram.png",
    description:
      "실사용자 기반의 소형 인플루언서를 통해 신뢰도 높은 후기를 확보합니다. 레이저 시술, 리프팅 등 증례 중심 콘텐츠에 효과적입니다.",
  },
  {
    id: 3,
    title: "DB 마케팅",
    subtitle: "상담 유입",
    logo: "/images/line.png",
    description:
      "Meta·Google 광고로 일본 현지 잠재 고객의 상담 문의를 유도합니다. 개원 초반 빠른 환자 유입이 필요한 병원에 적합합니다.",
  },
  {
    id: 4,
    title: "검색최적화 (SEO)",
    subtitle: "안정적 트래픽",
    logo: "/images/google.png",
    description:
      "일본 구글에서 병원명이 상위 노출되도록 웹사이트 내 후기 작성 및 백링크 작업을 진행합니다. 개원 중후반 장기적 트래픽 확보에 적합합니다.",
  },
  {
    id: 5,
    title: "현지 매거진 송출",
    subtitle: "현지 언론 노출",
    logo: "/images/ameba.png",
    description:
      "일본 현지 언론과 뷰티 매거진에 병원 기사를 송출합니다. 고가 시술 브랜딩과 신뢰도 구축에 적합한 중고가 맞춤형 병원에 효과적입니다.",
  },
  {
    id: 6,
    title: "자체 유튜브 운영",
    subtitle: "영상 콘텐츠",
    logo: "/images/youtube.png",
    description:
      "시술 과정과 결과를 영상으로 소개하는 유튜브 채널을 운영합니다. 중고가 특화 시술의 신뢰도를 높이고 장기적 브랜드 자산을 만들어 갑니다.",
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
            클리닉브릿지가 제공하는 가치
          </h2>
          <p
            className="text-base text-gray-500 leading-relaxed"
            style={{ wordBreak: "keep-all" }}
          >
            병원의 위치, 주력 시술, 규모에 맞는 채널을 선택해 집중합니다.
            <br />
            클리닉브릿지의 업무 분야입니다.
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
