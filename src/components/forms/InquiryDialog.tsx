"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X, Loader2 } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "@/components/common/Button"
import { contactFormSchema, type ContactFormData } from "@/lib/validators"
import { useContact } from "@/components/providers/ContactProvider"

export function InquiryDialog() {
  const { isContactOpen, closeContact } = useContact()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        reset()
        // inquiry-success 이벤트 디스패치
        window.dispatchEvent(new CustomEvent("inquiry-success"))
        setTimeout(() => {
          closeContact()
          setSubmitStatus("idle")
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog.Root open={isContactOpen} onOpenChange={closeContact}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <Dialog.Title className="text-xl font-semibold">1분 문의하기</Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
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
                문의내용 *
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="병원 마케팅에 대해 궁금한 점을 자유롭게 작성해주세요"
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
                "문의하기"
              )}
            </Button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <p className="text-sm text-green-600 text-center">
                문의가 성공적으로 전송되었습니다!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-sm text-red-600 text-center">
                전송 중 오류가 발생했습니다. 다시 시도해주세요.
              </p>
            )}
          </form>
        </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
