"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X, Loader2 } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import toast from "react-hot-toast"
import { Button } from "@/components/common/Button"
import { contactFormSchema, type ContactFormData } from "@/lib/validators"
import { useContact } from "@/components/providers/ContactProvider"
import { trackConversion } from "@/lib/gtag"

export function InquiryDialog() {
  const { isContactOpen, closeContact, intent } = useContact()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    if (data.hp) return // honeypot check
    
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        reset()
        // inquiry-success 이벤트 디스패치 (ContentGate 콘텐츠 잠금 해제용, 경로 무관 항상 발사)
        window.dispatchEvent(new CustomEvent("inquiry-success"))
        // 폼 제출 완료 = 실제 리드. 이 시점에 Google Ads 전환을 발사한다.
        trackConversion()

        if (intent === "unlock") {
          // 콘텐츠 게이트 경로: 현재 페이지에 머물러 잠금 해제된 콘텐츠를 노출.
          toast.success("도입 상담 신청이 정상적으로 접수되었습니다.")
          setTimeout(() => {
            closeContact()
          }, 1000)
        } else {
          // 일반 문의 경로: 완료 페이지로 이동.
          closeContact()
          router.push("/inquiry/complete")
        }
      } else {
        toast.error("전송 중 오류가 발생했습니다. 다시 시도해주세요.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("전송 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog.Root open={isContactOpen} onOpenChange={closeContact}>
      <Dialog.Portal>
                          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
         <Dialog.Content 
           className="fixed inset-0 z-50 flex items-center justify-center p-4"
           onClick={(e) => {
             if (e.target === e.currentTarget) {
               closeContact()
             }
           }}
         >
           <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden">
             {/* Header */}
             <div className="flex items-center justify-between p-4 border-b">
               <Dialog.Title className="text-lg font-semibold">도입 상담 신청</Dialog.Title>
               <Dialog.Close asChild>
                 <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                   <X className="h-4 w-4" />
                 </button>
               </Dialog.Close>
             </div>

                     {/* Form */}
           <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-3 overflow-y-auto max-h-[calc(90vh-80px)]">
            {/* Honeypot field */}
            <input
              type="text"
              {...register("hp")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                이름 *
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="이름을 입력해주세요"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                연락처 *
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="010-1234-5678"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Hospital */}
            <div>
              <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-1">
                소속/직책 *
              </label>
              <input
                id="hospital"
                type="text"
                {...register("hospital")}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="예: OOO / 마케팅 담당"
              />
              {errors.hospital && (
                <p className="mt-1 text-sm text-red-600">{errors.hospital.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                이메일 *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="example@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                도입 검토 내용 *
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="검토 중인 글로벌 마케팅 과제나 도입 일정을 간단히 적어 주세요"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="gradient"
              className="w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  전송 중...
                </>
              ) : (
                "도입 상담 신청"
              )}
            </Button>

            
          </form>
        </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
