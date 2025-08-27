"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"

const steps = [
  {
    number: "01",
    title: "제공 시술 협의",
    description: "일본인에게 인기 있는 시술 위주로 협찬 시술 선정",
    descriptionMobile: "일본인에게 인기 있는 시술 위주로<br />협찬 시술 선정",
    icon: "🔍"
  },
  {
    number: "02",
    title: "인플루언서 모집/선정",
    description: "일본 현지 인플루언서 모집 및 선정",
    descriptionMobile: "일본 현지 인플루언서 모집 및 선정",
    icon: "👥"
  },
  {
    number: "03",
    title: "일정 조율/방문",
    description: "선정된 인플루언서와 일정 조율 및 병원 방문 관리",
    descriptionMobile: "선정된 인플루언서와 일정 조율 및<br />병원 방문 관리",
    icon: "📅"
  },
  {
    number: "04",
    title: "해외 환자 유입 설계",
    description: "인플루언서 콘텐츠와 검색 최적화로 일본 환자 유입",
    descriptionMobile: "인플루언서 콘텐츠와 검색 최적화로<br />일본 환자 유입",
    icon: "🌏"
  },
  {
    number: "05",
    title: "예약응대 및 통역",
    description: "일본 환자의 예약시 LINE 응대 및 내원시 통역 서비스",
    descriptionMobile: "일본 환자의 예약시 LINE 응대 및<br />내원시 통역 서비스",
    icon: "🏥"
  }
]

export function Process() {
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
          {/* Title - Mobile */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:hidden">
            일본 마케팅 프로세스
          </h2>

          {/* Title - Desktop */}
          <h2 className="hidden lg:block text-3xl font-bold text-gray-900 mb-4">
            일본 마케팅 프로세스
          </h2>

          {/* Description - Mobile */}
          <p className="text-base text-gray-600 max-w-lg mx-auto lg:hidden">
            일본인의 생각을 이해하여<br />
            성공적인 결과를 만들어냅니다
          </p>

          {/* Description - Desktop */}
          <p className="hidden lg:block text-base text-gray-600 max-w-2xl mx-auto">
            일본인의 생각을 이해하여 성공적인 결과를 만들어냅니다
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="h-full text-center relative z-10">
                  <CardHeader>
                    <div className="text-sm font-semibold text-primary mb-2">
                      {step.number}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Description - Mobile */}
                    <p
                      className="text-gray-600 text-sm leading-relaxed lg:hidden"
                      dangerouslySetInnerHTML={{ __html: step.descriptionMobile }}
                    />

                    {/* Description - Desktop */}
                    <p className="hidden lg:block text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Connection Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-1/2 -right-4 w-8 h-0.5 bg-primary transform translate-x-1/2 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              각 단계별 상세한 가이드 제공
            </h3>
            <p className="text-gray-600">
              모든 과정에서 1:1 전문가가 배정되며, 단계별 상세한 가이드와 리포트를 제공합니다.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
