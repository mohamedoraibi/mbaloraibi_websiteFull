'use client'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
export function FadeIn({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={reduced ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .45, ease: 'easeOut' }}>{children}</motion.div>
}
