import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

const nav = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'achievements', 'contact']

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24)
      const current = [...nav]
        .reverse()
        .find((item) => document.getElementById(item)?.getBoundingClientRect().top <= 140)
      if (current) setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const href = (item) => location.pathname === '/' ? `#${item}` : `/#${item}`

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-slate-200/70 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-ink/80' : 'border-transparent bg-transparent'}`}>
      <div className="page-container flex h-16 items-center justify-between">
        <Link to="/" className="group font-display text-xl font-black tracking-tight">PR<span className="inline-block text-cyan transition-transform duration-300 group-hover:translate-x-1">.</span></Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <a key={item} href={href(item)} className={`nav-link relative py-2 text-xs font-semibold capitalize transition ${active === item && location.pathname === '/' ? 'text-cyan' : 'text-slate-600 hover:text-cyan dark:text-slate-300'}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className="group grid size-10 place-items-center rounded-full border border-slate-200 bg-white/50 transition duration-300 hover:scale-110 hover:border-cyan hover:text-cyan dark:border-white/10 dark:bg-white/5" aria-label="Toggle color mode">
            <motion.span key={dark ? 'sun' : 'moon'} initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }}>{dark ? <FiSun /> : <FiMoon />}</motion.span>
          </button>
          <button onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-slate-200 dark:border-white/10 lg:hidden" aria-label="Toggle navigation">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-slate-200 bg-white dark:border-white/10 dark:bg-ink lg:hidden">
            <div className="page-container grid grid-cols-2 gap-2 py-5">
              {nav.map((item) => <a key={item} href={href(item)} className="rounded-xl px-4 py-3 text-sm font-semibold capitalize hover:bg-slate-100 dark:hover:bg-white/5">{item}</a>)}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
