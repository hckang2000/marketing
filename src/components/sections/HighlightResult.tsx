"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Calendar } from "lucide-react"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"
import { SectionTitle } from "@/components/common/SectionTitle"
import { ResponsiveText } from "@/components/common/ResponsiveText"
import { useMotionAnimation, useStaggeredAnimation } from "@/lib/hooks/useMotionAnimation"

const results = [
  {
    icon: TrendingUp,
    title: "광고비 대비 매출 상승",
    value: "10배 이상",
    description: "평균 광고비 대비 매출 상승률",
    color: "text-white",
    bgColor: "bg-gray-900",
  },
  {
    icon: Users,
    title: "리드 전환율",
    value: ">60%",
    description: "일본 환자 예약 전환율",
    color: "text-white",
    bgColor: "bg-gray-900",
  },
  {
    icon: Calendar,
    title: "예약 증가율",
    value: "300%",
    description: "평균 예약 증가율",
    color: "text-white",
    bgColor: "bg-gray-900",
  },
]

export function HighlightResult() {
  const motionProps = useMotionAnimation()
  const getStaggeredProps = useStaggeredAnimation(results.length)

  return (
    <section className="section-padding">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <SectionTitle 
            title="클리닉브릿지의 핵심 성과"
          />
          <ResponsiveText
            mobile="클리닉브릿지는 광고비의<br />최소 10배 이상을 벌 수 있는 마케팅만 제안합니다."
            desktop="클리닉브릿지는 광고비의 최소 10배 이상을 벌 수 있는 일본 마케팅만 제안합니다."
            className="text-base text-gray-600 max-w-lg mx-auto"
          />
        </motion.div> 

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              {...getStaggeredProps(index)}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-full ${result.bgColor} flex items-center justify-center mb-4`}>
                    <result.icon className={`h-8 w-8 ${result.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {result.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {result.value}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </Container>
    </section>
  )
}
