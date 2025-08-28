"use client"

import { useState, useEffect } from "react"
import { ContactProvider } from "./ContactProvider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { InquiryDialog } from "@/components/forms/InquiryDialog"

interface ClientProvidersProps {
  children: React.ReactNode
}

export function ClientProviders({ children }: ClientProvidersProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  // MobileNav 상태를 감지하는 함수
  const handleMobileNavStateChange = (open: boolean) => {
    setIsMobileNavOpen(open)
  }

  return (
    <ContactProvider>
      <Header onMobileNavStateChange={handleMobileNavStateChange} />
      <main className={`pt-16 transition-all duration-300 ${
        isMobileNavOpen ? 'blur-sm bg-black/20' : ''
      }`}>
        {children}
      </main>
      <Footer />
      <InquiryDialog />
    </ContactProvider>
  )
}
