"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { trackConversion } from "@/lib/gtag"

interface ContactContextType {
  isContactOpen: boolean
  openContact: () => void
  closeContact: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false)

  // 상담 신청 진입점. 모든 CTA(Header, FinalCTA, Hero, Footer, MobileNav, ContentGate)가
  // 이 단일 지점으로 수렴하므로, Google Ads 전환도 여기서 한 번만 발사한다.
  const openContact = () => {
    trackConversion()
    setIsContactOpen(true)
  }
  const closeContact = () => setIsContactOpen(false)

  return (
    <ContactContext.Provider value={{ isContactOpen, openContact, closeContact }}>
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
