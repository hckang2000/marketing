"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent } from "@/components/common/Card"

const testimonials = [
  {
    id: 1,
    desktopImage: "/images/testimonials/testimonial-1-desktop.jpg",
    mobileImage: "/images/testimonials/testimonial-1-mobile.jpg",
    caption: "홍대 OOO의원 원장님: 일본 인플루언서 마케팅 시작하고 월 매출 2억에서 6개월만에 3.5억으로 올랐습니다.",
  },
  {
    id: 2,
    desktopImage: "/images/testimonials/testimonial-2-desktop.jpg",
    mobileImage: "/images/testimonials/testimonial-2-mobile.jpg",
    caption: "강남 XXX의원 원장님: 광고비 대비 15배 매출이면 광고비가 거의 안 든거네요",
  },
  {
    id: 3,
    desktopImage: "/images/testimonials/testimonial-3-desktop.jpg",
    mobileImage: "/images/testimonials/testimonial-3-mobile.jpg",
    caption: "신논현 YYY의원 원장님: 주말에 일본 환자가 40명까지 오네요",
  },
]

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            원장님들 실제 후기
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            클리닉브릿지와 함께한 원장님들의 생생한 후기를 확인해보세요
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative overflow-hidden rounded-none lg:rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="rounded-none lg:rounded-2xl">
                    <CardContent className="p-6">
                      {/* Mobile Image Container - 9:16 비율 (450x800) */}
                      <div className="relative w-full aspect-[9/16] lg:hidden mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={testimonial.mobileImage}
                          alt={`후기 이미지 ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Desktop Image Container - 16:9 비율 (800x450) */}
                      <div className="relative w-full aspect-video hidden lg:block mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={testimonial.desktopImage}
                          alt={`후기 이미지 ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Caption */}
                      <div className="text-center">
                        <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium">
                          {testimonial.caption}
                        </p>
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
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
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
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
