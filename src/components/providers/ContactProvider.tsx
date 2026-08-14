"use client"

import { createContext, useContext, useState, ReactNode } from "react"

// 상담 모달을 여는 맥락. 제출 성공 후 동작을 결정한다.
// - "inquiry": 일반 CTA. 제출 후 완료 페이지(/inquiry/complete)로 이동.
// - "unlock": 블로그 콘텐츠 게이트. 제출 후 현재 페이지에서 잠금 해제(이동 없음).
export type ContactIntent = "inquiry" | "unlock"

interface ContactContextType {
  isContactOpen: boolean
  intent: ContactIntent
  openContact: (intent?: ContactIntent) => void
  closeContact: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false)
  const [intent, setIntent] = useState<ContactIntent>("inquiry")

  // onClick 핸들러로 직접 넘겨질 때 MouseEvent가 인자로 들어올 수 있으므로,
  // "unlock"이 명시된 경우에만 unlock으로 처리하고 그 외에는 inquiry로 안전하게 폴백한다.
  const openContact = (nextIntent?: ContactIntent) => {
    setIntent(nextIntent === "unlock" ? "unlock" : "inquiry")
    setIsContactOpen(true)
  }
  const closeContact = () => setIsContactOpen(false)

  return (
    <ContactContext.Provider value={{ isContactOpen, intent, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  )
}

export function useContact() {
  const context = useContext(ContactContext)
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider")
  }
  return context
}
