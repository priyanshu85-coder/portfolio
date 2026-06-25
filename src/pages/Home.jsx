import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowDown,
  FiArrowUpRight,
  FiAward,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiTarget,
  FiUser,
} from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard'
import { Reveal, SectionHeading } from '../components/UI'
import { certifications, education, owner, projects, skills } from '../data/portfolio'

function Hero() {
  return (
    <section className="hero-background relative min-h-screen overflow-hidden bg-grid bg-[size:42px_42px] pt-28">
      <div className="mesh-orb mesh-orb-one" />
      <div className="mesh-orb mesh-orb-two" />
      <div className="mesh-orb mesh-orb-three" />
      <div className="absolute left-[5%] top-36 hidden font-mono text-xs text-cyan/40 lg:block">&lt;creative code /&gt;</div>
      <div className="absolute bottom-24 right-[5%] hidden font-mono text-xs text-violet/40 lg:block">build · learn · repeat</div>
      <div className="page-container grid min-h-[calc(100vh-7rem)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 text-xs font-bold text-emerald-600 shadow-[0_0_30px_rgba(52,211,153,.12)] backdrop-blur dark:text-emerald-300">
            <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-emerald-400" /></span>
            Open to SDE & full stack opportunities
          </div>
          <p className="mb-4 font-mono text-sm font-semibold text-cyan">Hello, I&apos;m {owner.name}</p>
          <h1 className="font-display text-5xl font-black leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            I build scalable <span className="text-gradient">digital products</span> from front to back.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A MERN stack developer and Computer Science engineering student focused on responsive interfaces, dependable APIs, and software that solves real problems.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/resume.pdf" download className="button-primary"><FiDownload /> Download resume</a>
            <a href="#contact" className="button-secondary"><FiMail /> Contact me</a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-xl text-slate-500">
            <a href={owner.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:-translate-y-1 hover:text-cyan"><FiGithub /></a>
            <a href={owner.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:-translate-y-1 hover:text-cyan"><FiLinkedin /></a>
            <a href={owner.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="transition hover:-translate-y-1 hover:text-cyan"><FiCode /></a>
            <span className="h-px w-16 bg-slate-300 dark:bg-white/15" />
            <span className="text-xs font-semibold uppercase tracking-widest">Connect</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} className="relative mx-auto w-full max-w-md">
          <div className="hero-orb glass glow-border relative aspect-square overflow-hidden rounded-[2.5rem] p-6 shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-transparent to-coral/10" />
            <div className="relative grid h-full place-items-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan/20 via-violet/15 to-coral/20">
              <div className="profile-ring absolute size-72 rounded-full border border-cyan/20" />
              <div className="profile-ring profile-ring-delay absolute size-56 rounded-full border border-violet/25" />
              <div className="text-center">
                <div className="relative mx-auto grid size-40 place-items-center rounded-full border border-white/20 bg-gradient-to-br from-cyan via-blue-500 to-violet font-display text-6xl font-black text-white shadow-2xl shadow-violet/30">PR</div>
                <p className="mt-7 font-display text-2xl font-black">{owner.role}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{owner.specialty} · India</p>
              </div>
            </div>
          </div>
          <div className="glass absolute -bottom-5 -left-5 rounded-2xl px-5 py-4"><strong className="block text-2xl">200+</strong><span className="text-xs text-slate-500">DSA problems</span></div>
          <div className="glass absolute -right-5 top-10 rounded-2xl px-5 py-4"><strong className="block text-2xl">3+</strong><span className="text-xs text-slate-500">Live projects</span></div>
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 animate-bounce text-slate-400 sm:block" aria-label="Scroll to about"><FiArrowDown /></a>
    </section>
  )
}

function TechRibbon() {
  const ribbonSkills = skills.filter((skill, index, all) => all.findIndex((item) => item.name === skill.name) === index)
  const loop = [...ribbonSkills, ...ribbonSkills]

  return (
    <section aria-label="Technology stack" className="relative overflow-hidden border-y border-slate-200/70 bg-white/55 py-5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[.025]">
      <div className="ribbon-fade-left absolute inset-y-0 left-0 z-10 w-24" />
      <div className="ribbon-fade-right absolute inset-y-0 right-0 z-10 w-24" />
      <div className="tech-ribbon flex w-max items-center">
        {loop.map((skill, index) => {
          const Icon = skill.icon
          return (
            <div key={`${skill.name}-${index}`} className="mx-5 flex items-center gap-3 text-sm font-bold text-slate-500 transition hover:text-cyan dark:text-slate-400">
              <Icon className={`text-xl ${skill.color}`} />
              <span>{skill.name}</span>
              <span className="ml-5 size-1 rounded-full bg-gradient-to-r from-cyan to-violet" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

function About() {
  const strengths = [
    ['Problem solver', 'I break complex requirements into practical, testable solutions.', FiTarget],
    ['Fast learner', 'I enjoy learning modern tools and applying them to meaningful products.', FiCode],
    ['Team minded', 'I communicate clearly, welcome feedback, and value shared ownership.', FiUser],
  ]
  return (
    <section id="about" className="section-space scroll-mt-16">
      <div className="page-container">
        <SectionHeading eyebrow="01 · About me" title="Engineering with curiosity and intent." description="I care about the details users notice and the architecture they never have to think about." />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal className="glass colorful-card rounded-3xl p-7 sm:p-10">
            <p className="font-display text-2xl font-bold leading-relaxed sm:text-3xl">I&apos;m a Computer Science engineering student building toward a career as a Software Development Engineer and Full Stack Developer.</p>
            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">My work spans React interfaces, Node and Express services, REST APIs, and MongoDB. I enjoy turning requirements into clean product experiences while strengthening my fundamentals through DSA and core computer science.</p>
            <div className="mt-8 grid gap-4 border-t border-slate-200 pt-7 text-sm dark:border-white/10 sm:grid-cols-2">
              <div><span className="block text-slate-500">Education</span><strong>B.E. Computer Science</strong></div>
              <div><span className="block text-slate-500">Career goal</span><strong>SDE / Full Stack Developer</strong></div>
              <div><span className="block text-slate-500">Location</span><strong>India</strong></div>
              <div><span className="block text-slate-500">Graduation</span><strong>June 2026</strong></div>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {strengths.map(([title, text, Icon], i) => (
              <Reveal key={title} delay={i * .08} className="glass hover-card flex gap-5 rounded-2xl p-6">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan"><Icon /></div>
                <div><h3 className="font-display text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const groups = ['Frontend', 'Backend', 'Database', 'Tools']
  return (
    <section id="skills" className="section-space scroll-mt-16 bg-slate-100/70 dark:bg-white/[.025]">
      <div className="page-container">
        <SectionHeading eyebrow="02 · Technical toolkit" title="Skills that ship products." description="A balanced toolkit across client interfaces, server development, databases, and collaborative engineering." />
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group, groupIndex) => (
            <Reveal key={group} delay={groupIndex * .06} className="glass hover-card rounded-3xl p-7">
              <h3 className="mb-7 font-display text-xl font-bold">{group}</h3>
              <div className="space-y-5">
                {skills.filter((skill) => skill.group === group).map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm"><span className="flex items-center gap-2 font-semibold"><Icon className={skill.color} />{skill.name}</span><span className="text-xs text-slate-500">{skill.level}%</span></div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }} className="skill-progress h-full rounded-full bg-gradient-to-r from-cyan via-blue-500 to-violet" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section-space scroll-mt-16">
      <div className="page-container">
        <SectionHeading eyebrow="03 · Selected work" title="Projects built to solve and learn." description="A focused selection of real projects combining product thinking, frontend craft, and practical engineering." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section-space scroll-mt-16 bg-slate-100/70 dark:bg-white/[.025]">
      <div className="page-container">
        <SectionHeading eyebrow="04 · Experience" title="Ready for the first professional chapter." description="Actively looking for an opportunity to contribute, learn, and grow with an ambitious engineering team." />
        <Reveal className="glass colorful-card relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan to-violet" />
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
            <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-cyan/10 text-2xl text-cyan"><FiBriefcase /></div>
            <div className="flex-1">
              <span className="pill">Open to opportunities</span>
              <h3 className="mt-4 font-display text-2xl font-bold">Software Development / Full Stack Internship</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">Seeking a team where I can contribute to production software, learn from experienced engineers, and grow through real product responsibility.</p>
            </div>
            <a href="#contact" className="button-secondary shrink-0">Start a conversation <FiArrowUpRight /></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section-space scroll-mt-16">
      <div className="page-container">
        <SectionHeading eyebrow="05 · Education" title="A strong academic foundation." />
        <div className="relative ml-3 border-l border-slate-300 dark:border-white/15">
          {education.map((item, i) => (
            <Reveal key={item.period} delay={i * .07} className="relative pb-10 pl-9 last:pb-0">
              <div className="absolute -left-2 top-1 size-4 rounded-full border-4 border-white bg-cyan dark:border-ink" />
              <span className="font-mono text-xs text-cyan">{item.period}</span>
              <div className="glass hover-card mt-3 rounded-2xl p-6">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><h3 className="font-display text-xl font-bold">{item.degree}</h3><p className="mt-1 text-slate-500">{item.school}</p></div><strong className="text-cyan">{item.result}</strong></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section-space scroll-mt-16 bg-slate-100/70 dark:bg-white/[.025]">
      <div className="page-container">
        <SectionHeading eyebrow="06 · Certification" title="Learning beyond the curriculum." description="A verified database credential that complements my practical full stack development experience." />
        <div className="max-w-xl">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * .08} className="glass colorful-card relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-violet/15 blur-2xl" />
              <div className="relative flex items-start gap-6">
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet to-cyan text-2xl text-white shadow-lg shadow-violet/20"><FiAward /></div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-cyan">{cert.year} · {cert.issuer}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{cert.title}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-emerald-500"><FiCheck /> Verified from resume</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  const items = [
    ['200+', 'LeetCode problems solved', owner.leetcode],
    ['3 Star', 'Java rating on HackerRank', owner.hackerrank],
    ['5 Star', 'SQL rating on HackerRank', owner.hackerrank],
  ]
  return (
    <section id="achievements" className="section-space scroll-mt-16">
      <div className="page-container">
        <SectionHeading eyebrow="07 · Achievements" title="Consistency creates momentum." />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map(([value, label, link], i) => (
            <Reveal key={label} delay={i * .06} className="glass hover-card achievement-glow rounded-3xl p-7">
              <strong className="font-display text-4xl font-black text-gradient">{value}</strong>
              <p className="mt-4 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-400">{label}</p>
              <a href={link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-xs font-bold hover:text-cyan">View profile <FiArrowUpRight /></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = useState('')
  const submit = (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get('name')}`)
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`)
    setStatus('Your email app is opening with the message prepared.')
    window.location.href = `mailto:${owner.email}?subject=${subject}&body=${body}`
  }
  return (
    <section id="contact" className="section-space scroll-mt-16">
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-violet-950 p-7 text-white shadow-2xl shadow-violet/15 sm:p-12 lg:p-16">
          <div className="mesh-orb mesh-orb-contact" />
          <div className="relative">
          <SectionHeading eyebrow="08 · Contact" title="Let’s build something meaningful." description="I’m currently open to software engineering roles, internships, and thoughtful collaborations." />
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div className="space-y-4">
              <a href={`mailto:${owner.email}`} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"><FiMail className="text-cyan" /><span>{owner.email}</span></a>
              <a href={owner.phoneHref} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"><FiPhone className="text-cyan" /><span>{owner.phone}</span></a>
              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"><FiMapPin className="text-cyan" /><span>India</span></div>
              <div className="flex gap-3 pt-3">
                <a href={owner.github} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-cyan hover:text-ink" aria-label="GitHub"><FiGithub /></a>
                <a href={owner.linkedin} target="_blank" rel="noreferrer" className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-cyan hover:text-ink" aria-label="LinkedIn"><FiLinkedin /></a>
              </div>
            </div>
            <form onSubmit={submit} className="grid gap-4 rounded-3xl bg-white/[.07] p-6 backdrop-blur sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold">Name<input required name="name" autoComplete="name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-cyan" placeholder="Your name" /></label>
                <label className="text-sm font-semibold">Email<input required name="email" type="email" autoComplete="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-cyan" placeholder="you@example.com" /></label>
              </div>
              <label className="text-sm font-semibold">Message<textarea required name="message" rows="5" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-cyan" placeholder="Tell me about the opportunity or project..." /></label>
              <button className="button-primary justify-self-start" type="submit"><FiSend /> Prepare email</button>
              {status && <p role="status" className="text-sm text-cyan">{status}</p>}
            </form>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return <><Hero /><TechRibbon /><About /><Skills /><Projects /><Experience /><Education /><Certifications /><Achievements /><Contact /></>
}
