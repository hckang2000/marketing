"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, GraduationCap, Target, Heart } from "lucide-react"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"
import { Button } from "@/components/common/Button"

const differentiators = [
  {
    id: 1,
    icon: GraduationCap,
    title: "서울대 출신 마케팅 팀",
    description: "서울대학교 마케팅 전공 대표가 직접 소통하고 컨설팅 해드립니다.",
    details: [
      "대표 포함 전원 서울대학교 출신",
      "10년 이상 마케팅 경력",
      "1:1 맞춤형 전략 수립"
    ],
    profile: {
      name: "이은석 대표",
      education: "서울대학교 벤처경영학과 졸",
      experience: "10년+ 마케팅 경력",
      image: "/images/profiles/ceo_profile.jpg"
    }
    
  },
  {
    id: 2,
    icon: Target,
    title: "광고비의 10배 이상 매출",
    description: "실제 성과가 검증된 마케팅 전략만 선별하여 제공해 드립니다.",
    details: [
      "마이크로 인플루언서 협찬에 집중",
      "일본 고객은 SNS 실제 후기 중시",
      "실시간 LINE 응대서비스",
      "ROAS 1500% 이상 달성 이력"
    ]
  },
  {
    id: 3,
    icon: Heart,
    title: "원장님과 투명/진실 소통",
    description: "모든 과정을 투명하게 공유하고 진실된 소통을 약속합니다",
    details: [
      "모집-방문-콘텐츠-성과 리포트 전체 공유",
      "주간 진행상황 리포트",
      "실시간 피드백 시스템",
      "성과 미달 시 보상 정책"
    ]
  }
]

export function Differentiators() {
  const [openItem, setOpenItem] = useState<number | null>(1)

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
          {/* Title - Mobile */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:hidden">
            클리닉브릿지가<br />
            타 업체와 다른 이유?
          </h2>
          
          {/* Title - Desktop */}
          <h2 className="hidden lg:block text-3xl font-bold text-gray-900 mb-4">
            클리닉브릿지가 타 업체와 다른 이유?
          </h2>
          
          {/* Description - Mobile */}
          <p className="text-base text-gray-600 max-w-lg mx-auto lg:hidden">
            단순한 광고 대행이 아닌 실제 매출을<br />
            만들어내는 차별화된 서비스
          </p>
          
          {/* Description - Desktop */}
          <p className="hidden lg:block text-base text-gray-600 max-w-2xl mx-auto">
            단순한 광고 대행이 아닌, 실제 매출을 만들어내는 차별화된 서비스
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </CardTitle>
                        <p className="text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      {openItem === item.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                {openItem === item.id && (
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">주요 특징</h4>
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-4">
                        {item.profile && (
                          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                            <h4 className="font-semibold text-gray-900 mb-3">대표</h4>
                            <div className="flex items-center space-x-3">
                              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary">
                                {item.profile.image ? (
                                  <Image
                                    src={item.profile.image}
                                    alt={`${item.profile.name} 프로필 사진`}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-white font-semibold text-lg">
                                      {item.profile.name.charAt(0)}
                                    </span>
                                  </div>
                                )}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{item.profile.name}</p>
                                <p className="text-sm text-gray-600">{item.profile.education}</p>
                                <p className="text-sm text-gray-600">{item.profile.experience}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {item.id === 1 && (
                          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                            <h4 className="font-semibold text-gray-900 mb-3">자문의</h4>
                            <div className="flex items-center space-x-3">
                              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-primary">
                                <Image
                                  src="/images/profiles/doctor_profile.jpg"
                                  alt="자문의 프로필 사진"
                                  fill
                                  className="object-cover"
                                  sizes="64px"
                                />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">강OO 자문의</p>
                                <p className="text-sm text-gray-600">서울대학교 의과대학 졸업</p>
                                <p className="text-sm text-gray-600">서울대학교 병원 수련</p>
                                <p className="text-sm text-gray-600">의료 마케팅 5년+ 경력</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="/about#story">창업 스토리 보기</a>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
