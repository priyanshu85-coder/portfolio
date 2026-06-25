import React from 'react'
import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 sm:mb-16 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}
    >
      <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[.25em] text-cyan"><span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" />{eyebrow}</p>
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">{description}</p>}
    </motion.div>
  )
}

export function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Tag({ children }) {
  return <span className="pill">{children}</span>
}
