import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "이름을 입력해주세요"),
  phone: z.string().min(10, "올바른 전화번호를 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  message: z.string().min(10, "문의내용을 10자 이상 입력해주세요"),
  hp: z.string().optional(), // honeypot field
})

export type ContactFormData = z.infer<typeof contactFormSchema>
