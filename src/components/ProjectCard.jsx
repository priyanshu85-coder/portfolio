import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Tag } from './UI'

export default function ProjectCard({ project, index }) {
  const isFlatFinder = project.slug === 'student-flat-finder'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      whileHover={{ y: -10, scale: 1.015 }}
      className="project-card glass hover-card group overflow-hidden rounded-3xl"
    >
      <div className={`project-visual relative h-56 overflow-hidden bg-gradient-to-br ${project.gradient} p-7`}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-slate-950/15" />
        <div className="absolute -right-10 -top-14 size-44 rounded-full border border-white/20 transition duration-700 group-hover:scale-125 group-hover:rotate-45" />
        <div className="absolute -bottom-16 -left-8 size-40 rounded-full bg-white/10 blur-xl transition duration-700 group-hover:translate-x-12" />
        <div className="project-particle particle-one" />
        <div className="project-particle particle-two" />
        <div className="project-particle particle-three" />

        <span className="relative z-10 rounded-full border border-white/25 bg-slate-950/40 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md">{project.type}</span>
        <div className="project-window absolute right-5 top-16 w-36 rounded-xl border border-white/25 bg-slate-950/35 p-3 shadow-2xl backdrop-blur-md sm:w-40">
          <div className="mb-3 flex gap-1.5"><i /><i /><i /></div>
          {isFlatFinder ? (
            <div className="space-y-2">
              <div className="h-2 w-16 rounded-full bg-white/80" />
              <div className="grid grid-cols-2 gap-2">
                <div className="project-window-card h-12 rounded-md bg-cyan-200/80" />
                <div className="project-window-card h-12 rounded-md bg-violet-200/80" />
              </div>
              <div className="h-1.5 w-20 rounded-full bg-white/35" />
            </div>
          ) : (
            <div className="space-y-2">
              <div className="h-2 w-20 rounded-full bg-white/75" />
              <div className="h-9 rounded-md bg-white/20" />
              <div className="flex gap-2"><div className="h-2 flex-1 rounded bg-white/30" /><div className="h-2 w-7 rounded bg-white/55" /></div>
            </div>
          )}
        </div>
        <div className="absolute inset-x-7 bottom-6 z-10 max-w-[70%] font-display text-3xl font-black text-white drop-shadow-[0_3px_12px_rgba(0,0,0,.75)] transition-transform duration-500 group-hover:-translate-y-1">{project.title}</div>
        <div className="absolute right-5 top-3 text-7xl font-black text-white/15">0{index + 1}</div>
      </div>
      <div className="project-card-body relative p-7">
        <p className="min-h-24 text-sm font-medium leading-6 text-slate-700 dark:text-slate-300">{project.description}</p>
        <div className="my-6 flex flex-wrap gap-2">{project.tech.map((item) => <Tag key={item}>{item}</Tag>)}</div>
        <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
          <Link to={`/projects/${project.slug}`} className="project-action link-arrow inline-flex items-center gap-1.5">Details <FiArrowUpRight /></Link>
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-action inline-flex items-center gap-1.5"><FiGithub /> GitHub</a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-action primary link-arrow inline-flex items-center gap-1.5">Live demo <FiArrowUpRight /></a>}
          {project.planned && <span className="text-coral">Planned project</span>}
        </div>
      </div>
    </motion.article>
  )
}
