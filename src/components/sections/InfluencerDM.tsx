"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent } from "@/components/common/Card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { SectionTitle } from "@/components/common/SectionTitle"
import { ResponsiveText } from "@/components/common/ResponsiveText"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 커스텀 스타일로 Swiper 기본 스타일 숨기기
import './SocialProof.css'

const AUTOPLAY_MS = 10000

const dmConversations = [
  {
    id: 1,
    image: "/images/dm/dm-1.jpg",
    caption: "일본 인플루언서와<br />전 과정을 직접 조율",
  },
  {
    id: 2,
    image: "/images/dm/dm-2.jpg",
    caption: "협찬 제안부터 계약까지<br />모든 과정을 투명하게 공개",
  },
  {
    id: 3,
    image: "/images/dm/dm-3.jpg",
    caption: "중간 브로커 없이<br />직접 소통하는 진짜 마케팅",
  },
  {
    id: 4,
    image: "/images/dm/dm-4.jpg",
    caption: "이렇게 모집한 인플루언서<br />500명 이상 보유",
  },
]

export function InfluencerDM() {
  const swiperRef = useRef<SwiperType | null>(null)
  const motionProps = useMotionAnimation()

  // const goToSlide = (index: number) => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideTo(index)
  //   }
  // }

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  // 각도 기반 스크롤 제어를 위한 커스텀 터치 이벤트
  const handleTouchStart = useCallback((e: Event) => {
    const touchEvent = e as TouchEvent
    const touch = touchEvent.touches[0]
    const startX = touch.clientX
    const startY = touch.clientY
    
    // 터치 시작점 저장
    ;(e.target as HTMLElement).setAttribute('data-start-x', startX.toString())
    ;(e.target as HTMLElement).setAttribute('data-start-y', startY.toString())
  }, [])

  const handleTouchMove = useCallback((e: Event) => {
    const touchEvent = e as TouchEvent
    const touch = touchEvent.touches[0]
    const startX = parseInt((e.target as HTMLElement).getAttribute('data-start-x') || '0')
    const startY = parseInt((e.target as HTMLElement).getAttribute('data-start-y') || '0')
    
    const deltaX = touch.clientX - startX
    const deltaY = touch.clientY - startY
    
    // 각도 계산 (0도는 수평, 90도는 수직)
    const angle = Math.abs(Math.atan2(deltaY, deltaX) * 180 / Math.PI)
    
    // 드래그 거리가 충분히 클 때만 방향 결정
    const totalDistance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    
    if (totalDistance > 10) {
      // -45도 ~ 45도: 수평 스와이프 (카루셀 이동)
      // 그 외: 수직 스크롤 (페이지 스크롤 허용)
      if (angle <= 45) {
        // 수평 스와이프 - preventDefault로 수직 스크롤 차단
        e.preventDefault()
      }
      // 수직 스크롤의 경우 preventDefault 호출하지 않음
    }
  }, [])

  useEffect(() => {
    // Swiper 컨테이너에 터치 이벤트 리스너 추가
    const swiperContainer = document.querySelector('.swiper-container')
    if (swiperContainer) {
      swiperContainer.addEventListener('touchstart', handleTouchStart, { passive: false })
      swiperContainer.addEventListener('touchmove', handleTouchMove, { passive: false })
      
      return () => {
        swiperContainer.removeEventListener('touchstart', handleTouchStart)
        swiperContainer.removeEventListener('touchmove', handleTouchMove)
      }
    }
  }, [handleTouchStart, handleTouchMove])

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <SectionTitle 
            title="일본 인플루언서와<br class='block sm:inline' />진짜로 DM 주고받는 회사"
          />
          <ResponsiveText
            mobile="중간 브로커 NO 직접 대화 YES<br />이 정도 투명성, 보신 적 있나요?"
            desktop="중간 브로커 NO 직접 대화 YES<br />실제 소통 내역까지 공개합니다. 이 정도 투명성, 보신 적 있나요?"
            className="text-base text-gray-600 max-w-lg mx-auto"
          />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Swiper Carousel */}
          <div className="swiper-container">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: AUTOPLAY_MS, disableOnInteraction: false }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              className="rounded-none lg:rounded-2xl"
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              allowTouchMove={true}
              resistance={true}
              resistanceRatio={0.85}
              touchStartPreventDefault={false}
            >
              {dmConversations.map((conversation, index) => (
                <SwiperSlide key={conversation.id}>
                  <div className="px-4">
                                         <Card className="rounded-none lg:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <CardContent className="p-4 lg:p-6 flex flex-col">
                         {/* Image Container - 350x700 비율 */}
                         <div className="relative w-full max-w-[350px] mx-auto aspect-[350/700] overflow-hidden rounded-lg flex-shrink-0 bg-white">
                           <Image
                             src={conversation.image}
                             alt={`DM 대화 ${index + 1}`}
                             fill
                             className="object-contain"
                             draggable={false}
                             sizes="(max-width: 768px) 100vw, 350px"
                             loading="lazy"
                           />
                         </div>
                         
                         {/* Caption */}
                         <div className="text-center mt-4 lg:mt-6">
                           <p 
                             className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium"
                             dangerouslySetInnerHTML={{ __html: conversation.caption }}
                           />
                         </div>
                       </CardContent>
                     </Card>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="swiper-button-prev p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="이전 슬라이드"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="swiper-button-next p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="다음 슬라이드"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Swiper Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </Container>
    </section>
  )
}
