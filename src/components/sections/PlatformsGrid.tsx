"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { Card, CardContent } from "@/components/common/Card"

const platforms = [
  { name: "Instagram", icon: "/images/instagram_icon.png", description: "주요 플랫폼" },
  { name: "X(트위터)", icon: "/images/x_icon.png", description: "실시간 소통" },
  { name: "YouTube", icon: "/images/youtube_icon.png", description: "비디오 콘텐츠" },
  { name: "LINE", icon: "/images/line_icon.png", description: "일본 메신저" }
]

export function PlatformsGrid() {
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            마케팅 대상 플랫폼
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            일본에서 효과를 내는 SNS는 정해져 있습니다
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow cursor-pointer group">
                                 <CardContent className="p-6">
                   <div className="mb-3 group-hover:scale-110 transition-transform flex justify-center">
                     <Image
                       src={platform.icon}
                       alt={`${platform.name} 아이콘`}
                       width={64}
                       height={64}
                       className="w-16 h-16"
                     />
                   </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {platform.description}
                  </p>
                </CardContent>
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
                      <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-sm border border-primary/10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                일본 고객의 의사결정 패턴
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <p className="text-gray-600">SNS 후기 확인</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">72%</div>
                  <p className="text-gray-600">인플루언서 추천</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">68%</div>
                  <p className="text-gray-600">실제 사례 중시</p>
                </div>
              </div>
            </div>
        </motion.div>
      </Container>
    </section>
  )
}
