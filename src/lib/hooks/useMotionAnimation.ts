// import { motion } from "framer-motion"

interface UseMotionAnimationProps {
  delay?: number
  duration?: number
  once?: boolean
}

export function useMotionAnimation({ 
  delay = 0, 
  duration = 0.6, 
  once = true 
}: UseMotionAnimationProps = {}) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration, delay },
    viewport: { once }
  }
}

export function useStaggeredAnimation(count: number, baseDelay = 0.1) {
  return (index: number) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: baseDelay * index },
    viewport: { once: true }
  })
}
