import React from 'react'
import { FiArrowLeft, FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio'
import { Tag } from '../components/UI'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  if (!project) return <Navigate to="/404" replace />

  return (
    <main className="min-h-screen pt-28">
      <div className="page-container py-14">
        <Link to="/#projects" className="mb-10 inline-flex items-center gap-2 text-sm font-bold hover:text-cyan"><FiArrowLeft /> Back to projects</Link>
        <div className={`rounded-[2rem] bg-gradient-to-br ${project.gradient} p-8 text-white sm:p-14`}>
          <span className="rounded-full bg-black/20 px-4 py-2 text-xs font-bold backdrop-blur">{project.type}</span>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-black tracking-tight sm:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">{project.description}</p>
        </div>
        <div className="grid gap-8 py-12 lg:grid-cols-[1fr_.45fr]">
          <section className="glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold">Project overview</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
              {project.planned
                ? 'This is a clearly marked portfolio concept and development roadmap. Links and implementation details will be added when the project is built.'
                : 'This project demonstrates practical product development, responsive interface work, and a focus on maintainable implementation. Explore the available source and live deployment below.'}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">{project.tech.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
          </section>
          <aside className="glass rounded-3xl p-8">
            <h2 className="font-display text-xl font-bold">Project links</h2>
            <div className="mt-6 grid gap-3">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary"><FiGithub /> Source code</a>}
              {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="button-primary">Live demo <FiArrowUpRight /></a>}
              {project.planned && <span className="rounded-xl bg-coral/10 p-4 text-center text-sm font-bold text-coral">Planned project</span>}
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
