"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Container } from "@/components/common/Container"
import { Card, CardContent } from "@/components/common/Card"

const testimonials = [
  {
    id: 1,
    image: "/api/placeholder/300/200",
    caption: "홍대 OOO의원 원장님: 일본 인플루언서 마케팅 시작하고 월 매출 2억에서 6개월만에 4.5억으로 올랐습니다.",
    blur: true,
  },
  {
    id: 2,
    image: "/api/placeholder/300/200",
    caption: "강남 XXX의원 원장님: 클리닉브릿지 덕분에 일본 환자 예약이 300% 증가했습니다.",
    blur: true,
  },
  {
    id: 3,
    image: "/api/placeholder/300/200",
    caption: "서초 YYY의원 원장님: 광고비 대비 15배 수익을 올렸어요. 정말 만족합니다.",
    blur: true,
  },
  {
    id: 4,
    image: "/api/placeholder/300/200",
    caption: "마포 ZZZ의원 원장님: 투명한 소통과 체계적인 마케팅으로 성과가 좋았습니다.",
    blur: true,
  },
  {
    id: 5,
    image: "/api/placeholder/300/200",
    caption: "송파 AAA의원 원장님: 일본 고객 유치가 생각보다 쉬웠어요.",
    blur: true,
  },
  {
    id: 6,
    image: "/api/placeholder/300/200",
    caption: "종로 BBB의원 원장님: 전문적인 서비스에 감동받았습니다.",
    blur: true,
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
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0"
                >
                  <Card className="mx-4">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                        <div
                          className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center"
                          style={{
                            filter: testimonial.blur ? "blur(4px)" : "none",
                          }}
                        >
                          <span className="text-gray-600 font-medium">
                            후기 이미지 {index + 1}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {testimonial.caption}
                      </p>
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
