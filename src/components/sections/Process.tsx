"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"

const steps = [
  {
    number: "01",
    title: "제공 시술 확인",
    description: "병원의 주요 시술과 특화 분야를 파악하여 타겟 고객층을 분석합니다.",
    descriptionMobile: "병원의 주요 시술과 특화 분야를<br />파악하여 타겟 고객층을 분석합니다.",
    icon: "🔍"
  },
  {
    number: "02",
    title: "인플루언서 모집/선정",
    description: "일본 현지 인플루언서를 모집하고 병원에 적합한 인플루언서를 선정합니다.",
    descriptionMobile: "일본 현지 인플루언서를 모집하고<br />병원에 적합한 인플루언서를 선정합니다.",
    icon: "👥"
  },
  {
    number: "03",
    title: "일정 조율/체험",
    description: "선정된 인플루언서와 일정을 조율하고 실제 시술 체험을 진행합니다.",
    descriptionMobile: "선정된 인플루언서와 일정을 조율하고<br />실제 시술 체험을 진행합니다.",
    icon: "📅"
  },
  {
    number: "04",
    title: "해외 환자 유치",
    description: "인플루언서 콘텐츠를 통해 일본 고객을 유치하고 예약을 관리합니다.",
    descriptionMobile: "인플루언서 콘텐츠를 통해 일본 고객을<br />유치하고 예약을 관리합니다.",
    icon: "🌏"
  },
  {
    number: "05",
    title: "병원 방문(통역)",
    description: "일본 환자의 병원 방문 시 통역 서비스를 제공하여 원활한 소통을 돕습니다.",
    descriptionMobile: "일본 환자의 병원 방문 시 통역 서비스를<br />제공하여 원활한 소통을 돕습니다.",
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
            클리닉브릿지의 5단계 프로세스
          </h2>

          {/* Title - Desktop */}
          <h2 className="hidden lg:block text-3xl font-bold text-gray-900 mb-4">
            클리닉브릿지의 5단계 프로세스
          </h2>

          {/* Description - Mobile */}
          <p className="text-base text-gray-600 max-w-lg mx-auto lg:hidden">
            전문적인 일본 마케팅 프로세스로<br />
            성공적인 결과를 만들어냅니다
          </p>

          {/* Description - Desktop */}
          <p className="hidden lg:block text-base text-gray-600 max-w-2xl mx-auto">
            체계적이고 전문적인 일본 마케팅 프로세스로 성공적인 결과를 만들어냅니다
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2 z-0" />

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
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
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
                  <div className="lg:hidden absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform translate-x-1/2 z-0" />
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              각 단계별 상세한 가이드 제공
            </h3>
            <p className="text-gray-600">
              모든 과정에서 전문가가 함께하며, 단계별 상세한 가이드와 리포트를 제공합니다.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
