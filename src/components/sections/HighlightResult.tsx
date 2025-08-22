"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Calendar } from "lucide-react"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"

const results = [
  {
    icon: TrendingUp,
    title: "광고비 대비 매출 상승",
    value: "10배 이상",
    description: "평균 광고비 대비 매출 상승률",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    title: "리드 전환율",
    value: "85%",
    description: "일본 환자 예약 전환율",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Calendar,
    title: "예약 증가율",
    value: "300%",
    description: "평균 예약 증가율",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
]

export function HighlightResult() {
  return (
    <section className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            클리닉브릿지의 핵심 성과
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            클리닉브릿지는 광고비의 최소 10배 이상을 벌 수 있는 일본 마케팅만 제안합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                  <div className={`text-3xl font-bold ${result.color} mb-2`}>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              광고비 대비 매출 상승분 자료
            </h3>
            <p className="text-gray-600 mb-6">
              실제 클라이언트들의 성과 데이터를 바탕으로 한 투명한 결과입니다.
            </p>
            <div className="text-sm text-gray-500">
              * 나중에 추가 예정
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
