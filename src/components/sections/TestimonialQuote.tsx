"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Container } from "@/components/common/Container"

export function TestimonialQuote() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <Quote className="h-16 w-16 text-white/20" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-white">
              <p className="text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
                &ldquo;일본 인플루언서 협찬 마케팅 시작하고 월 매출 2억에서 6개월만에 3.5억으로 올랐습니다.&rdquo;
              </p>
              <footer className="text-lg text-white/80">
                - 홍대 OOO의원 원장장님
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
