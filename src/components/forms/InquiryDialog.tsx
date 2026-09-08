"use client"

import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import toast from "react-hot-toast"
import { useContact } from "@/components/providers/ContactProvider"
import { ConsultationForm } from "./ConsultationForm"

export function InquiryDialog() {
  const { isContactOpen, closeContact, intent } = useContact()
  const router = useRouter()

  const handleSuccess = () => {
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
            <div className="flex items-center justify-between p-4 border-b">
              <Dialog.Title className="text-lg font-semibold">도입 상담 신청</Dialog.Title>
              <Dialog.Close asChild>
                <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </Dialog.Close>
            </div>

            <div className="p-4 overflow-y-auto max-h-[calc(90vh-80px)]">
              <ConsultationForm onSuccess={handleSuccess} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
