"use client"

import { useState, useEffect } from "react"
import { Toaster } from "react-hot-toast"
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
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </ContactProvider>
  )
}
