import { ContactProvider } from "./ContactProvider"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { InquiryDialog } from "@/components/forms/InquiryDialog"

interface ClientProvidersProps {
  children: React.ReactNode
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ContactProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <InquiryDialog />
    </ContactProvider>
  )
}
