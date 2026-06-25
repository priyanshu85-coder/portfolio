import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si'

export const owner = {
  name: 'Priyanshu Raj',
  role: 'Full Stack Developer',
  specialty: 'MERN Stack',
  email: '8581priyanshu@gmail.com',
  phone: '+91 85819 02083',
  phoneHref: 'tel:+918581902083',
  github: 'https://github.com/priyanshu85-coder',
  linkedin: 'https://linkedin.com/in/priyanshu-raj-733120251',
  leetcode: 'https://leetcode.com/u/Priyanshu_Raj85/',
  hackerrank: 'https://www.hackerrank.com/profile/8581priyanshu',
}

export const skills = [
  { name: 'React.js', level: 88, group: 'Frontend', icon: SiReact, color: 'text-sky-400' },
  { name: 'JavaScript', level: 86, group: 'Frontend', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'HTML5', level: 92, group: 'Frontend', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS3', level: 88, group: 'Frontend', icon: SiCss, color: 'text-blue-500' },
  { name: 'Bootstrap', level: 82, group: 'Frontend', icon: SiBootstrap, color: 'text-violet-500' },
  { name: 'Tailwind CSS', level: 82, group: 'Frontend', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Redux Toolkit', level: 80, group: 'Frontend', icon: SiRedux, color: 'text-violet-400' },
  { name: 'Node.js', level: 84, group: 'Backend', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Express.js', level: 83, group: 'Backend', icon: SiExpress, color: 'dark:text-white' },
  { name: 'REST APIs', level: 85, group: 'Backend', icon: SiNodedotjs, color: 'text-green-400' },
  { name: 'MongoDB', level: 82, group: 'Database', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Git', level: 84, group: 'Tools', icon: SiGit, color: 'text-orange-500' },
  { name: 'GitHub', level: 86, group: 'Tools', icon: SiGithub, color: 'dark:text-white' },
]

export const projects = [
  {
    slug: 'student-flat-finder',
    title: 'StudentFlatFinder',
    type: 'Featured MERN project',
    description: 'A full-stack accommodation platform connecting students with property owners through search, filtering, secure authentication, admin tools, and buyer-owner chat.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/priyanshu85-coder/StudentFlatFinder',
    live: 'https://studentflatfinder.vercel.app/',
    gradient: 'from-cyan-400 via-blue-600 to-violet-700',
    verified: true,
  },
  {
    slug: 'myntra-clone',
    title: 'Myntra Clone',
    type: 'E-commerce frontend',
    description: 'A responsive shopping experience built with reusable React components, Redux Toolkit state management, optimized hooks, and product-focused layouts.',
    tech: ['React', 'Redux Toolkit', 'Bootstrap', 'CSS'],
    github: owner.github,
    gradient: 'from-fuchsia-500 via-pink-500 to-orange-400',
    verified: true,
  },
  {
    slug: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    type: 'JavaScript game',
    description: 'A polished browser game with dynamic computer choices, real-time results, score feedback, and responsive interactions.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/priyanshu85-coder/Rock-Paper-Scissors',
    live: 'https://priyanshu85-coder.github.io/Rock-Paper-Scissors/',
    gradient: 'from-lime-400 via-emerald-500 to-teal-700',
    verified: true,
  },
]

export const education = [
  { period: '2022 - 2026', degree: 'Bachelor of Engineering, Computer Science', school: 'Chandigarh University', result: 'CGPA 7.86' },
  { period: '2019 - 2020', degree: 'Senior Secondary, CBSE', school: 'Holy Kids International School', result: '75.2%' },
  { period: '2017 - 2018', degree: 'Secondary, CBSE', school: 'Dayawati Modi Academy', result: '82.2%' },
]

export const certifications = [
  { title: 'Introduction to Databases', issuer: 'Coursera', year: '2024', verified: true },
]
