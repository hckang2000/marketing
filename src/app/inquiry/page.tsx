"use client"

import { useRouter } from "next/navigation"
import { Container } from "@/components/common/Container"
import { InquiryForm } from "./_components/InquiryForm"

export default function InquiryPage() {
  const router = useRouter()

  return (
    <div className="min-h-[80vh] bg-gray-50 pb-20 pt-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">도입 상담 신청</h1>
            <p className="text-gray-600 leading-relaxed">
              급하게 문의하지 않으셔도 괜찮습니다. 병원 상황과 목표를 구체적으로 남겨주실수록
              첫 상담에서 더 정확한 진단과 답변을 드릴 수 있어요.
              <br className="hidden sm:block" />
              전담 컨설턴트가 영업일 기준 1~2일 이내에 직접 연락드립니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
            <InquiryForm onSuccess={() => router.push("/inquiry/complete")} />
          </div>
        </div>
      </Container>
    </div>
  )
}
