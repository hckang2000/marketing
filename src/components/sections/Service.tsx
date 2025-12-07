"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent } from "@/components/common/Card"
import { SectionTitle } from "@/components/common/SectionTitle"
import { ResponsiveText } from "@/components/common/ResponsiveText"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const services = [
  {
    id: 1,
    title: "X 리트윗 이벤트",
    logo: "/images/x.png",
    detail: "리트윗 할인 이벤트를 통해 초반 예약 유도\n개원 준비 단계 혹은 극초반에 적합",
  },
  {
    id: 2,
    title: "인플루언서 협찬",
    logo: "/images/instagram.png",
    detail: "소형 인플루언서 협찬을 통해 인지도 확보\n레이저 시술이나 리프팅에 효과 좋음",
  },
  {
    id: 3,
    title: "DB 마케팅",
    logo: "/images/line.png",
    detail: "Meta, Google 광고를 통해 상담유입\n개원 초반 환자유입에 적합",
  },
  {
    id: 4,
    title: "검색최적화 (SEO)",
    logo: "/images/google.png",
    detail: "웹사이트 내 후기작성 및 백링크 작업\n개원 중후반 안정적 트래픽 유지에 적합",
  },
  {
    id: 5,
    title: "현지 매거진 송출",
    logo: "/images/ameba.png",
    detail: "현지 언론과 매거진에 기사 송출\n중고가 맞춤형 클리닉에 적합",
  },
  {
    id: 6,
    title: "자체 유튜브 운영",
    logo: "/images/youtube.png",
    detail: "중고가 특화 시술 홍보에 적합",
  },
]

export function Service() {
  const motionProps = useMotionAnimation()
  const [openItem, setOpenItem] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gray-900">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <SectionTitle 
            title="병원 맞춤형 서비스"
            titleClassName="text-white"
          />
          <div className="text-base text-gray-300 max-w-2xl mx-auto">
            <ResponsiveText
              mobile="병원의 위치, 주력 시술, 가격대, 규모에 따라<br />집중해야 하는 마케팅이 다르다는 사실 아시나요?"
              desktop="병원의 위치, 주력 시술, 가격대, 규모에 따라 집중해야 하는 마케팅이 다르다는 사실 아시나요?"
              className="mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-white mt-4 inline-block"
            >
              <span className="relative">
                자세한 내용은 클릭해서 확인하세요
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                />
              </span>
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const isOpen = openItem === service.id
            const hasDetail = service.detail && service.detail.trim() !== ""
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`
                    group bg-gray-800 border-gray-700 h-full
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'lg:!bg-gray-800 lg:!border-gray-700 bg-white border-white' : ''}
                    ${hasDetail ? 'cursor-pointer lg:cursor-default lg:hover:bg-white lg:hover:border-white' : ''}
                  `}
                  onClick={(e) => {
                    // 데스크톱에서는 클릭 무시 (lg 브레이크포인트 이상)
                    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
                    if (isDesktop) {
                      e.preventDefault()
                      e.stopPropagation()
                      return
                    }
                    // 모바일에서만 클릭 처리
                    if (hasDetail) {
                      setOpenItem(isOpen ? null : service.id)
                    }
                  }}
                >
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center min-h-[180px] relative">
                    {/* 모바일: 아이콘 */}
                    <div className="relative w-16 h-16 mb-4 flex-shrink-0 lg:hidden">
                      <Image
                        src={service.logo}
                        alt={service.title}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    
                    {/* 데스크톱: 아이콘 - 호버 시 숨김 */}
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                      <div className="relative w-16 h-16">
                        <Image
                          src={service.logo}
                          alt={service.title}
                          fill
                          className="object-contain"
                          sizes="64px"
                        />
                      </div>
                    </div>
                    
                    {/* 데스크톱: Title & Detail - 호버 시 표시 */}
                    <div className="hidden lg:flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      {hasDetail && (
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line px-4">
                          {service.detail}
                        </p>
                      )}
                    </div>
                    
                    {/* 모바일: Title & Toggle */}
                    <div className="flex items-center justify-center gap-2 lg:hidden">
                      <h3 className={`
                        text-lg font-semibold transition-colors duration-300
                        ${isOpen ? 'text-gray-900' : 'text-white'}
                      `}>
                        {service.title}
                      </h3>
                      
                      {/* 모바일: 원 안에 + 아이콘 */}
                      {hasDetail && (
                        <div>
                          <div className={`
                            w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300
                            ${isOpen ? 'border-gray-900 bg-gray-900' : 'border-gray-400 bg-transparent'}
                          `}>
                            {isOpen ? (
                              <Minus className="h-4 w-4 text-white" />
                            ) : (
                              <Plus className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* 모바일: Detail 텍스트 - 클릭 시 토글 */}
                    {hasDetail && (
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden w-full mt-4 lg:hidden"
                      >
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                          {service.detail}
                        </p>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            상담을 신청하시면 현재 상황을 정확히 진단하여<br className="lg:hidden" /> 최적 마케팅 공식을 찾아드립니다
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

