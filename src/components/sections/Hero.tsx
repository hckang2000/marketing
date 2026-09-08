"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/common/Button"
import { Container } from "@/components/common/Container"

export function Hero() {
  return (
    <section className="bg-white py-6 lg:py-8">
      <Container>
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-1.webp"
              alt="Hero background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex items-center min-h-[330px] lg:min-h-[390px] py-8 lg:py-10 px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1
              className="font-bold text-white mb-2 text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.4]"
              style={{ wordBreak: "keep-all" }}
            >
              실패하지 않는 일본 환자 마케팅을 시작하세요
            </h1>

            <p
              className="text-white/80 mb-4 font-normal text-sm sm:text-base leading-relaxed"
              style={{ wordBreak: "keep-all" }}
            >
              수많은 대행사 중, 우리 병원에 맞는 전략만
            </p>

            <div className="flex justify-center">
              <Button
                asChild
                variant="default"
                size="sm"
                className="rounded-full px-6 text-sm bg-[#D65A3B] hover:bg-[#B84A2E]"
              >
                <Link href="/inquiry" className="flex items-center gap-1.5">
                  도입 상담 신청
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
