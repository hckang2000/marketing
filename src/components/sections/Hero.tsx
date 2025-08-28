"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/common/Button"
import { Container } from "@/components/common/Container"
import { ResponsiveText } from "@/components/common/ResponsiveText"

interface HeroProps {
  onContactClick: () => void
}

export function Hero({ onContactClick }: HeroProps) {
  // 현재 날짜로부터 7일 뒤 날짜 계산
  const getDateAfter7Days = () => {
    const today = new Date()
    const after7Days = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    const month = after7Days.getMonth() + 1 // getMonth()는 0부터 시작하므로 +1
    const day = after7Days.getDate()
    return `${month}월 ${day}일`
  }

  const deadlineDate = getDateAfter7Days()

  return (
    <section className="relative overflow-hidden">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-mobile.jpg"
          alt="Hero background mobile"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/hero-desktop.jpg"
          alt="Hero background desktop"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/80" />
      <Container>
        <div className="relative z-10 py-20 lg:py-32 min-h-[80vh] lg:min-h-0 flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="block">일본 환자 유치로</span>
              <span className="block bg-red-600 text-white px-4 py-2 rounded-lg inline-block">광고비 10배 매출 보장</span>
              <span className="block">못하면 무조건 환불</span>
            </motion.h1>

            {/* Subcopy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-2xl text-gray-100 mb-8 max-w-2xl lg:max-w-3xl mx-auto"
            >
              <ResponsiveText
                mobile={`${deadlineDate}까지 문의시 광고비 50% 할인`}
                desktop={`${deadlineDate}까지 문의시 광고비 50% 할인`}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center items-center"
            >
              <Button
                onClick={onContactClick}
                variant="outline"
                size="lg"
                className="w-full lg:w-96 lg:px-8"
              >
                10초 문의하기
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
