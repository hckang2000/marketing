"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent } from "@/components/common/Card"

const AUTOPLAY_MS = 10000
const DRAG_THRESHOLD = 40

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  
  const timerRef = useRef<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const startYRef = useRef(0)
  const deltaXRef = useRef(0)
  const deltaYRef = useRef(0)
  const unlockRef = useRef<null | (() => void)>(null)
  const isHorizontalSwipeRef = useRef(false)

  function lockBodyScroll() {
    if (typeof window === "undefined") return
    const { body } = document
    const prev = body.style.overflow
    body.style.overflow = "hidden"
    unlockRef.current = () => { body.style.overflow = prev }
  }

  function unlockBodyScroll() {
    unlockRef.current?.()
    unlockRef.current = null
  }

  const startAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, AUTOPLAY_MS)
  }

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const resetAutoPlay = () => {
    if (isPlaying) {
      startAutoPlay()
    }
  }

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      unlockBodyScroll()
    }
  }, [isPlaying, currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    resetAutoPlay()
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    resetAutoPlay()
  }

  const handleCardClick = () => {
    if (!isDraggingRef.current) {
      nextSlide()
    }
  }

  const handleDragStart = (clientX: number, clientY: number) => {
    isDraggingRef.current = true
    setIsDragging(true)
    startXRef.current = clientX
    startYRef.current = clientY
    deltaXRef.current = 0
    deltaYRef.current = 0
    isHorizontalSwipeRef.current = false
    stopAutoPlay()
    // lockBodyScroll() 제거 - 방향이 결정된 후에만 스크롤 차단
  }

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return
    
    deltaXRef.current = clientX - startXRef.current
    deltaYRef.current = clientY - startYRef.current
    
    // 각도 계산 (절댓값 제거하여 실제 방향 고려)
    const angle = Math.atan2(deltaYRef.current, deltaXRef.current) * 180 / Math.PI
    
    // 드래그 거리가 충분히 클 때만 방향 결정
    const totalDistance = Math.sqrt(deltaXRef.current * deltaXRef.current + deltaYRef.current * deltaYRef.current)
    
    if (totalDistance > 10 && !isHorizontalSwipeRef.current) {
      // 각도 범위별로 방향 결정
      // -45도 ~ 45도: 수평 스와이프
      // 그 외: 수직 스크롤
      const normalizedAngle = Math.abs(angle)
      isHorizontalSwipeRef.current = normalizedAngle <= 45
      
      // 수평 스와이프로 결정된 경우에만 body 스크롤 차단
      if (isHorizontalSwipeRef.current) {
        lockBodyScroll()
      }
    }
    
    // 수평 스와이프일 때만 카루셀 이동
    if (isHorizontalSwipeRef.current && trackRef.current) {
      const translateX = -(currentIndex * 100) + (deltaXRef.current / trackRef.current.offsetWidth * 100)
      trackRef.current.style.transform = `translateX(${translateX}%)`
      trackRef.current.style.transition = 'none'
    }
  }

  const handleDragEnd = () => {
    unlockBodyScroll()
    
    if (!isDraggingRef.current) return
    
    const deltaX = deltaXRef.current
    const threshold = DRAG_THRESHOLD

    // 수평 스와이프일 때만 슬라이드 전환
    if (isHorizontalSwipeRef.current && Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }

    // Reset transform
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
      trackRef.current.style.transition = 'transform 500ms ease-in-out'
    }

    isDraggingRef.current = false
    setIsDragging(false)
    deltaXRef.current = 0
    deltaYRef.current = 0
    isHorizontalSwipeRef.current = false
    resetAutoPlay()
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX, e.clientY)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return
    handleDragMove(e.clientX, e.clientY)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDraggingRef.current) {
      handleDragEnd()
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    handleDragStart(touch.clientX, touch.clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return
    const touch = e.touches[0]
    
    // 수평 스와이프일 때만 preventDefault (수직 스크롤 차단)
    if (isHorizontalSwipeRef.current) {
      e.preventDefault()
    }
    
    handleDragMove(touch.clientX, touch.clientY)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  const handleTouchCancel = () => {
    handleDragEnd()
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    resetAutoPlay()
  }

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
          {/* Carousel */}
          <div className="relative overflow-hidden rounded-none lg:rounded-2xl">
            <div
              ref={trackRef}
              className={`flex transition-transform duration-500 ease-in-out [touch-action:pan-x] overscroll-contain ${
                isDragging ? 'select-none cursor-grabbing' : 'cursor-grab'
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchCancel}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card 
                    className="rounded-none lg:rounded-2xl cursor-pointer"
                    onClick={handleCardClick}
                  >
                    <CardContent className="p-6">
                      {/* Mobile Image Container - 9:16 비율 (450x800) */}
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
                      
                      {/* Desktop Image Container - 16:9 비율 (800x450) */}
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
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="이전 슬라이드"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
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
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="다음 슬라이드"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
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
