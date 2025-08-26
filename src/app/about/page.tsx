"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"
import { Button } from "@/components/common/Button"
import { useContact } from "@/components/providers/ContactProvider"

const timeline = [
  {
    year: "2024",
    title: "클리닉브릿지 설립",
    description: "일본 대상 병원 마케팅 전문 회사로 설립",
  },
  {
    year: "2024",
    title: "첫 번째 성공 사례",
    description: "홍대 OOO의원과 함께 월 매출 2억에서 3.5억으로 성장",
  },
  {
    year: "2024",
    title: "일본 현지 파트너십",
    description: "일본 현지 인플루언서 네트워크 구축 완료",
  },
]

const values = [
  {
    title: "전문성",
    description: "서울대 출신 마케터의 전문적인 서비스",
    icon: "🎯",
  },
  {
    title: "투명성",
    description: "모든 과정을 투명하게 공유하고 소통",
    icon: "🔍",
  },
  {
    title: "성과 중심",
    description: "실제 성과를 만들어내는 마케팅만 제안",
    icon: "📈",
  },
  {
    title: "고객 중심",
    description: "원장님의 성공을 위한 맞춤형 전략",
    icon: "💝",
  },
]

export default function AboutPage() {
  const { openContact } = useContact()

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              회사 소개
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              클리닉브릿지는 일본 대상 병원 마케팅 전문 회사입니다
            </p>
          </motion.div>

          {/* CEO Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 mb-6">
                  <Image
                    src="/images/profiles/ceo_profile.jpg"
                    alt="이은석 대표 프로필 사진"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  이은석 대표
                </CardTitle>
                <p className="text-gray-600">클리닉브릿지 대표</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="max-w-2xl mx-auto space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    안녕하세요. 클리닉브릿지 대표 이은석입니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    서울대학교 경영학과를 졸업하고 10년 이상의 마케팅 경험을 바탕으로, 
                    병원들이 일본 시장에서 성공할 수 있도록 도와드리고 있습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    우리는 단순한 광고 대행이 아닌, 실제 성과를 만들어내는 마케팅만 제안합니다. 
                    광고비의 10배 이상을 벌 수 있는 전략으로 원장님들의 성공을 이끌어가겠습니다.
                  </p>
                  <Button onClick={openContact} variant="gradient" className="mt-6">
                    1분 문의하기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              회사 연혁
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />
                
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="relative flex items-start"
                    >
                      <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-x-1/2" />
                      <div className="ml-16">
                        <div className="text-sm font-semibold text-primary mb-1">
                          {item.year}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              우리의 가치
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
