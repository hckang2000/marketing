"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent } from "@/components/common/Card"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 커스텀 스타일로 Swiper 기본 스타일 숨기기
import './SocialProof.css'

const AUTOPLAY_MS = 10000

const testimonials = [
  {
    id: 1,
    desktopImage: "/images/testimonials/testimonial-1-desktop.jpg",
    mobileImage: "/images/testimonials/testimonial-1-mobile.jpg",
    caption: "홍대 OOO의원 원장님<br />일본 인플루언서 마케팅 시작하고 월 매출 2억에서 6개월만에 3.5억으로 올랐습니다.",
  },
  {
    id: 2,
    desktopImage: "/images/testimonials/testimonial-2-desktop.jpg",
    mobileImage: "/images/testimonials/testimonial-2-mobile.jpg",
    caption: "강남 XXX의원 원장님<br />광고비 대비 15배 매출이 나옵니다.",
  },
  {
    id: 3,
    desktopImage: "/images/testimonials/testimonial-3-desktop.jpg",
    mobileImage: "/images/testimonials/testimonial-3-mobile.jpg",
    caption: "신논현 YYY의원 원장님<br />주말에 일본 환자가 40명까지 오네요",
  },
]

export function SocialProof() {
  const [isPlaying, setIsPlaying] = useState(true)
  const swiperRef = useRef<SwiperType | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex)
  }

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop()
      } else {
        swiperRef.current.autoplay.start()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
    }
  }

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
  const handleTouchStart = (e: Event) => {
    const touchEvent = e as TouchEvent
    const touch = touchEvent.touches[0]
    const startX = touch.clientX
    const startY = touch.clientY
    
    // 터치 시작점 저장
    ;(e.target as HTMLElement).setAttribute('data-start-x', startX.toString())
    ;(e.target as HTMLElement).setAttribute('data-start-y', startY.toString())
  }

  const handleTouchMove = (e: Event) => {
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
  }

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
  }, [])

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            원장님들 실제 후기
          </h2>
          {/* Description - Mobile */}
          <p className="text-base text-gray-600 max-w-lg mx-auto lg:hidden">
            클리닉브릿지와 함께한 원장님들의<br />
            실제 후기를 확인해보세요
          </p>
          
          {/* Description - Desktop */}
          <p className="hidden lg:block text-base text-gray-600 max-w-2xl mx-auto">
            클리닉브릿지와 함께한 원장님들의 실제 후기를 확인해보세요
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Swiper Carousel */}
          <div className="swiper-container">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={isPlaying ? { delay: AUTOPLAY_MS, disableOnInteraction: false } : false}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              onSlideChange={handleSlideChange}
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
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="px-4">
                    <Card className="rounded-none lg:rounded-2xl">
                      <CardContent className="p-6">
                        {/* Mobile Image Container - 9:16 비율 */}
                        <div className="relative w-full aspect-[9/16] lg:hidden mb-4 overflow-hidden rounded-lg">
                          <Image
                            src={testimonial.mobileImage}
                            alt={`후기 이미지 ${index + 1}`}
                            fill
                            className="object-cover"
                            draggable={false}
                            sizes="(max-width: 1024px) 100vw"
                            quality={80}
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Desktop Image Container - 16:9 비율 */}
                        <div className="relative w-full aspect-video hidden lg:block mb-4 overflow-hidden rounded-lg">
                          <Image
                            src={testimonial.desktopImage}
                            alt={`후기 이미지 ${index + 1}`}
                            fill
                            className="object-cover"
                            draggable={false}
                            sizes="(min-width: 1024px) 800px"
                            quality={80}
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Caption */}
                        <div className="text-center">
                          <p 
                            className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium"
                            dangerouslySetInnerHTML={{ __html: testimonial.caption }}
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
              onClick={toggleAutoplay}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label={isPlaying ? "자동 재생 일시정지" : "자동 재생 시작"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-gray-600" />
              ) : (
                <Play className="h-5 w-5 text-gray-600" />
              )}
            </button>

            <button
              onClick={nextSlide}
              className="swiper-button-next p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="다음 슬라이드"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Dots */}
          <div className="swiper-pagination flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`슬라이드 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
