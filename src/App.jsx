import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import { owner } from './data/portfolio'
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'

function Loader() {
  return (
    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] grid place-items-center bg-ink text-white">
      <div className="text-center">
        <div className="loader-ring mx-auto size-14 rounded-full border-2 border-white/10 border-t-cyan" />
        <p className="mt-5 font-display text-lg font-black">PR<span className="text-cyan">.</span></p>
      </div>
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/10">
      <div className="page-container flex flex-col items-center justify-between gap-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
        <p>&copy; {new Date().getFullYear()} {owner.name}. All rights reserved.</p>
        <p>Built with React, Tailwind CSS & Framer Motion.</p>
        <div className="flex gap-5"><a href={owner.github} target="_blank" rel="noreferrer">GitHub</a><a href={owner.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
      </div>
    </footer>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light')
  const [loading, setLoading] = useState(true)
  const [showTop, setShowTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const location = useLocation()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 0)
    else window.scrollTo({ top: 0 })
  }, [location])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const moveSpotlight = (event) => {
      document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', moveSpotlight, { passive: true })
    return () => window.removeEventListener('pointermove', moveSpotlight)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-cyan via-violet to-coral" style={{ scaleX: scrollYProgress }} />
      <Navbar dark={dark} setDark={setDark} />
      <div className="pointer-spotlight" aria-hidden="true" />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/404" element={<main className="grid min-h-screen place-items-center pt-16 text-center"><div><p className="text-cyan">404</p><h1 className="mt-3 font-display text-5xl font-black">Page not found.</h1><a href="/" className="button-primary mt-8">Return home</a></div></main>} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className={`fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-cyan text-ink shadow-lg transition ${showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}><FiArrowUp /></button>
    </>
  )
}
