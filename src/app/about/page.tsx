"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/common/Card"
import { Button } from "@/components/common/Button"
import { useContact } from "@/components/providers/ContactProvider"



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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              회사 소개
            </h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              클리닉브릿지는 일본 대상<br className="sm:hidden" /> 병원 마케팅 전문 회사입니다
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
                <div className="max-w-2xl mx-auto space-y-4" style={{ wordBreak: 'keep-all', wordWrap: 'break-word' }}>
                  <p className="text-gray-700 leading-relaxed" style={{ wordBreak: 'keep-all', wordWrap: 'break-word' }}>
                    근거 기반 마케팅으로 매출을 올려드리는 클리닉브릿지 대표 이은석입니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed" style={{ wordBreak: 'keep-all', wordWrap: 'break-word' }}>
                    서울대학교 경영대학을 졸업하고 10년 이상의 마케팅 경험을 바탕으로,<br className="hidden sm:inline" />
                    병원들이 일본 시장에서 성공할 수 있도록 도와드리고 있습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed" style={{ wordBreak: 'keep-all', wordWrap: 'break-word' }}>
                    마케팅은 소비가 아니라 투자가 되어야 합니다.<br className="hidden sm:inline" />
                    광고비의 10배 이상을 벌 수 있는 전략으로 원장님들의 성공을 보장하겠습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed" style={{ wordBreak: 'keep-all', wordWrap: 'break-word' }}>
                    항상 폭발적인 매출을 만들었던 실력을 바탕으로<br className="hidden sm:inline" />
                    병원들의 해외 환자 마케팅을 책임지겠습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed" style={{ wordBreak: 'keep-all', wordWrap: 'break-word' }}>
                    저희는 소개로 찾아주시는 분들이 많습니다.<br className="hidden sm:inline" />
                    일을 맡겨보신 분들은 다르다는 것을 느끼시기 때문입니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed" style={{ wordBreak: 'keep-all', wordWrap: 'break-word' }}>
                    가볍게 문의해주세요.<br className="hidden sm:inline" />
                    15분만 만나도 병원의 매출을 올리는 데 기여하겠습니다.
                  </p>
                  <Button onClick={openContact} variant="gradient" className="mt-6">
                    10초 문의하기
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>


        </div>
      </Container>
    </div>
  )
}
