"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/common/Container"
import { SectionTitle } from "@/components/common/SectionTitle"
import { ResponsiveText } from "@/components/common/ResponsiveText"
import { useMotionAnimation } from "@/lib/hooks/useMotionAnimation"

const partnerHospitals = [
  {
    id: 1,
    name: "닥터손유나의원",
    image: "/images/sonyouna_logo.jpg",
    url: "http://www.drsonyouna.com/",
  },
  {
    id: 2,
    name: "미모드림클리닉",
    image: "/images/mimodream_logo.png",
    url: "https://mimodream.co.kr/",
  },
  {
    id: 3,
    name: "다움클리닉",
    image: "/images/dawoom.png",
    url: "http://www.dawoomclinic.co.kr/",
  },
]

export function PartnerHospitals() {
  const motionProps = useMotionAnimation()

  const handleImageClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <motion.div {...motionProps} className="text-center mb-12">
          <SectionTitle 
            title="함께하는 병원"
          />
          <ResponsiveText
            mobile="최대한의 매출 성과를 위해<br />지역별로 소수의 병원만 담당합니다"
            desktop="최대한의 매출 성과를 위해 지역별로 소수의 병원만 담당합니다"
            className="text-base text-gray-600 max-w-2xl mx-auto"
          />
        </motion.div>

        <motion.div 
          {...motionProps} 
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
            {partnerHospitals.map((hospital, index) => (
              <motion.div
                key={hospital.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div 
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => handleImageClick(hospital.url)}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-32 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={hospital.image}
                      alt={hospital.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 300px"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hospital Name */}
                  <h3 className="text-lg font-semibold text-gray-800 text-center group-hover:text-primary transition-colors duration-300">
                    {hospital.name}
                  </h3>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel Layout */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-6">
              {partnerHospitals.map((hospital, index) => (
                <motion.div
                  key={hospital.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div 
                    className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => handleImageClick(hospital.url)}
                  >
                    {/* Image and Name in Row */}
                    <div className="flex items-center space-x-4">
                      {/* Image Container */}
                      <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={hospital.image}
                          alt={hospital.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                          sizes="80px"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Hospital Name */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
                          {hospital.name}
                        </h3>
                      </div>
                      
                      {/* Arrow Icon */}
                      <div className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                        <svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
