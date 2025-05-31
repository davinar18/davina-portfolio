// app/page.tsx
'use client'

import SparkleCursor from './SparkleCursor'
import WhichDavina from './WhichDavina'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false })

const projects = [
  {
    title: 'RapidResQ',
    description:
      'A smart GIS navigation platform tailored for firefighters. Designed optimized emergency routes with A*, hydrant mapping, and live fire simulation to aid high-stress decisions.',
    tools: ['C++', 'GTK', 'EZGL', 'OpenStreetMap', 'Git'],
    image: '/rapidresq.png'
  },
  {
    title: 'MedQR',
    description:
      'An AI-powered health assistant built in 36 hours. A wearable QR ring pulls up a live medical dashboard with real-time suggestions using Gemini AI. Built for emergency responders.',
    tools: ['Flutter', 'React', 'Firebase', 'Gemini AI'],
    image: '/medqr.png'
  },
  {
    title: 'Morse Code Blink Decoder',
    description:
      'Built an accessible Morse code translator using blink detection. Combined OpenCV and FPGA to convert eye movement into live visual Morse output.',
    tools: ['Python', 'OpenCV', 'Verilog', 'UART', 'VGA'],
    image: '/morse-code.png'
  },
  {
    title: 'Fetal Heart Rate Monitor',
    description:
      'Collaborated with Sunnybrook on a fetal heart rate monitor for twins and triplets. Focused on Doppler signal separation, waveform analysis, and device compliance.',
    tools: ['Python', 'Signal Processing', 'Medical Research'],
    image: '/fetal-heart.png'
  }
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const nextSlide = () => setCurrent((current + 1) % projects.length)
  const prevSlide = () => setCurrent((current - 1 + projects.length) % projects.length)
  const [activeIndex, setActiveIndex] = useState(0)


  return (
    <main className="pt-24 min-h-screen bg-[#0D0D0D] text-[#F5F5F5] px-6 py-12 font-mono">

      <SparkleCursor />
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D0D0D] px-6 py-4 flex justify-between items-center shadow-md">

        <Link
          href="#top"
          className="text-2xl font-bold text-white hover:text-[#F5A8C3] transition-all duration-300 tracking-wide relative group"
        >
          <span className="text-sm font-mono text-[#F5F5F5] tracking-wider before:content-['>_'] before:text-[#A5D8FF]">
            davina.exe
          </span>






          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C7B6F1] group-hover:w-full transition-all duration-300"></span>
        </Link>

        <div className="space-x-4 text-sm">
          {[
            { name: "GitHub", href: "https://github.com/davinar18" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/davina-rajendran" },
            { name: "Email", href: "mailto:davinaraj18@gmail.com" },
            { name: "Resume", href: "https://docs.google.com/document/d/1bmtOOfdZ_sqFQFYnLmICcrV7i4-GYUq2mdQ4K7Yd7Jg/edit?usp=sharing" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              className="hover:text-[#F5A8C3] transition duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mb-32 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-4 md:ml-8 lg:ml-36"

        >
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#F5A8C3] via-[#C7B6F1] to-[#A5D8FF] bg-clip-text text-transparent">
            <Typewriter
              options={{ autoStart: true, delay: 40, cursor: '' }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I'm Davina Rajendran :)")
                  .callFunction(() => {
                    const target = document.querySelector("#typed-taglines")
                    if (target) target.classList.remove("invisible")
                  })
                  .start()
              }}
            />
          </div>
          <div id="typed-taglines" className="text-xl md:text-2xl invisible bg-gradient-to-r from-[#F5A8C3] via-[#C7B6F1] to-[#A5D8FF] bg-clip-text text-transparent">
            <Typewriter
              options={{
                delay: 40,
                autoStart: true,
                loop: true,
                strings: [
                  'Computer Engineering @ UofT',
                  'Double Minor in Artificial Intelligence & Engineering Business',
                  'AI Researcher @ UofT'
                ]
              }}
            />
          </div>
        </motion.div>

        {/* Now Playing Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#181818] rounded-xl p-4 w-[320px] md:ml-8 lg:ml-40 shadow-md"

        >
          <div className="aspect-square w-full bg-[#2A2A2A] rounded-lg mb-4 flex items-center justify-center">
            <svg className="w-20 h-20 text-[#C7B6F1]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 17c0 1.657-1.567 3-3.5 3S2 18.657 2 17s1.567-3 3.5-3c.653 0 1.255.159 1.75.43V6.5l10-2v11.17c0 1.657-1.567 3-3.5 3S10 17.657 10 16s1.567-3 3.5-3c.653 0 1.255.159 1.75.43V5.26l-7 1.4V17z" />
            </svg>
          </div>
          <p className="text-xs text-[#888] uppercase tracking-wide mb-1">Now Playing</p>
          <div className="text-xl font-semibold text-[#F5F5F5]">“ctrl + calm”</div>
          <div className="text-sm text-[#A5D8FF] mb-2">Davina in dev mode</div>
          <div className="w-full h-1 bg-[#333] rounded-full overflow-hidden mb-3">
            <div className="h-full w-2/5 bg-gradient-to-r from-[#C7B6F1] via-[#F5A8C3] to-[#A5D8FF] animate-pulse transition-all duration-500"></div>
          </div>
          <div className="flex justify-between text-xs text-[#888]">
            <span>0:56</span>
            <span>3:07</span>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-[#F5F5F5]">
            <button className="opacity-50">⏮</button>
            <button className="text-xl">▶</button>
            <button className="opacity-50">⏭</button>
          </div>
        </motion.div>
      </section>


      <div className="mb-32">
        <WhichDavina />
      </div>

      {/* Tech Stack Section */}
      <section className="mb-24">
        <h3 className="text-3xl font-semibold mb-16 text-center text-white">
          My Tech Stack
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-sm text-[#E5E5E5]">

          {/* Languages */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#C7B6F1]">Languages I Work With</h4>
            {[
              'C++', 'Python', 'Verilog', 'Assembly', 'Java', 'C',
              'SQL', 'MATLAB', 'C#', 'HTML', 'CSS', 'JavaScript'
            ].map((item, i) => (
              <span
                key={i}
                className="bg-[#1a1a1a] px-3 py-1 rounded-lg border border-[#2A2A2A] inline-block mr-2 mb-2 transition-transform duration-200 hover:scale-105 hover:border-[#F5A8C3] hover:bg-[#1e1e1e]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* AI/ML & Data */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#A5D8FF]">AI & Data Tools</h4>
            {[
              'Machine Learning', 'Computer Vision', 'OpenCV',
              'Signal Processing', 'Classification Algorithms'
            ].map((item, i) => (
              <span
                key={i}
                className="bg-[#1a1a1a] px-3 py-1 rounded-lg border border-[#2A2A2A] inline-block mr-2 mb-2 transition-transform duration-200 hover:scale-105 hover:border-[#F5A8C3] hover:bg-[#1e1e1e]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Frameworks & Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#F5A8C3]">Development Toolkit</h4>
            {[
              'Git', 'GDB', 'Valgrind', 'Jupyter Notebooks', 'Firebase', 'Flutter',
              'React', 'Linux', 'VS Code', 'Microsoft Project', 'Microsoft Excel',
              'Figma', 'Arduino'
            ].map((item, i) => (
              <span
                key={i}
                className="bg-[#1a1a1a] px-3 py-1 rounded-lg border border-[#2A2A2A] inline-block mr-2 mb-2 transition-transform duration-200 hover:scale-105 hover:border-[#F5A8C3] hover:bg-[#1e1e1e]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Other Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#FFD6E8]">Other Tools I Use</h4>
            {[
              'Notion', 'Replit', 'TinkerCAD', 'Agile Development',
              'Test-Driven Development (TDD)', 'Microsoft Word'
            ].map((item, i) => (
              <span
                key={i}
                className="bg-[#1a1a1a] px-3 py-1 rounded-lg border border-[#2A2A2A] inline-block mr-2 mb-2 transition-transform duration-200 hover:scale-105 hover:border-[#F5A8C3] hover:bg-[#1e1e1e]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="mb-32">
        <h3 className="text-4xl font-bold mb-16 text-center text-white">
          Experiences
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left: Role Selector */}
          <div className="pl-4 border-l-[3px] border-gradient-to-b from-[#F5A8C3] to-[#A5D8FF] flex flex-col gap-4 text-sm text-[#D1D1D1]">
            {['University of Toronto', 'Alpha Coding', 'Sunnybrook Hospital'].map((name, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`text-left font-semibold transition-transform hover:scale-[1.02] ${i === activeIndex
                  ? i === 0
                    ? 'text-[#C7B6F1]'
                    : i === 1
                      ? 'text-[#A5D8FF]'
                      : 'text-[#F5A8C3]'
                  : 'text-[#777]'
                  }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* Right: Role Details */}
          <div className="md:col-span-2">
            <div className="bg-[#111] border border-[#2A2A2A] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              {activeIndex === 0 && (
                <>
                  <h4 className="text-xl font-bold text-[#C7B6F1] mb-1">Summer Undergraduate Researcher – AI & LLMs</h4>
                  <p className="text-[#C7B6F1] font-semibold mb-4">University of Toronto • May 2025 – Present • Toronto, ON</p>
                  <ul className="list-disc pl-5 space-y-2 text-[#E0E0E0] text-sm leading-relaxed">
                    <li>Researching causal reasoning and decision-making in large language models under Dr. Frank Rudzicz & PhD Candidate Jinyue Feng.</li>
                    <li>Studying transformer architectures and evaluating behavior through structured experiments and paper reviews.</li>
                    <li>Collaborating on a potential publication focused on LLM explainability and recommendation reliability.</li>
                    <li>Hands-on experience with Python, data analysis, and LLM research tooling.</li>
                  </ul>
                </>
              )}
              {activeIndex === 1 && (
                <>
                  <h4 className="text-xl font-bold text-[#A5D8FF] mb-1">Coding Instructor</h4>
                  <p className="text-[#A5D8FF] font-semibold mb-4">Alpha Coding • May 2024 – Apr 2025 • Remote</p>
                  <ul className="list-disc pl-5 space-y-2 text-[#E0E0E0] text-sm leading-relaxed">
                    <li>Designed and taught beginner to advanced lessons in Python, JavaScript, and robotics for students aged 7–17.</li>
                    <li>Developed interactive projects that improved engagement and boosted student retention.</li>
                    <li>Led collaborative projects to strengthen student problem-solving and teamwork skills.</li>
                  </ul>
                </>
              )}
              {activeIndex === 2 && (
                <>
                  <h4 className="text-xl font-bold text-[#F5A8C3] mb-1">Technical Project Manager</h4>
                  <p className="text-[#F5A8C3] font-semibold mb-4">Sunnybrook Hospital • Jan 2024 – May 2024 • Toronto, ON</p>
                  <ul className="list-disc pl-5 space-y-2 text-[#E0E0E0] text-sm leading-relaxed">
                    <li>Led a 6-person team to develop a Fetal Heart Rate Monitoring System for multi-pregnancy cases.</li>
                    <li>Managed timeline and delivery using Gantt charts and weekly check-ins with stakeholders.</li>
                    <li>Handled client meetings, feedback loops, and agile adjustments across the development lifecycle.</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>




      {/* Projects Carousel */}
      <section className="mb-24">
        <h3 className="text-3xl font-semibold mb-12 text-white pl-4 md:pl-8 text-center">Projects</h3>
        <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 bg-[#111] border border-[#2A2A2A] rounded-xl p-6 overflow-hidden min-h-[420px]">
          <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl z-10 hover:scale-125 transition-transform duration-300 cursor-pointer">←</button>
          <div className="flex-[1.1] flex justify-end items-center pr-4">
            <div className="w-[460px] h-[260px] flex items-center justify-center">
              <Image
                src={projects[current].image}
                alt={projects[current].title}
                width={440}
                height={240}
                className="rounded-lg border border-[#2A2A2A] object-cover"
              />
            </div>
          </div>
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-[520px] pl-4"
          >
            <h4 className="text-2xl font-bold text-[#F5A8C3]">{projects[current].title}</h4>
            <p className="text-sm text-[#E0E0E0] leading-relaxed">{projects[current].description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-[#A5D8FF]">
              {projects[current].tools.map((tool, idx) => (
                <span key={idx} className="bg-[#1c1c1c] px-2 py-1 rounded-md border border-[#2A2A2A]">
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex justify-start gap-2 pt-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 w-2 rounded-full ${idx === current ? 'bg-[#A5D8FF]' : 'bg-[#444]'}`}
                />
              ))}
            </div>
          </motion.div>
          <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl z-10 hover:scale-125 transition-transform duration-300 cursor-pointer">→</button>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-24">
        <h3 className="text-3xl font-semibold mb-8 text-center">About me ♡</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-[#D1D1D1] text-base leading-relaxed max-w-6xl mx-auto">

          {/* LEFT – Clean Info Cards w/ subtle hover interaction */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 px-4 md:px-0 w-full md:ml-12">
            {[
              { label: 'Based in', value: 'Toronto, studying Computer Engineering @ UofT' },
              { label: 'Minors', value: 'Artificial Intelligence + Engineering Business' },
              { label: 'Currently', value: 'AI Researcher @ UofT, iced coffee in hand always' },
              { label: 'Focus', value: 'Building tech that’s emotional, inclusive, and actually helpful' },
              { label: 'Me, offline', value: 'probably journaling my 7th identity crisis, romanticizing random aesthetics, or deep in a TikTok scroll spiral while Grey’s Anatomy plays in the background' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#1a1a1a] p-4 rounded-xl border border-[#2A2A2A] w-full max-w-md transition-all duration-300 hover:border-[#F5A8C3] cursor-default"
              >
                <span className="font-medium text-[#F5A8C3]">{card.label}:</span><br />
                <span className={card.label === 'dreaming of' ? 'text-[#F5A8C3]' : ''}>
                  {card.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* RIGHT – Image + Quote */}
          <div className="flex flex-col items-center justify-start gap-4 w-full mt-24">
            <Image
              src="/coding-girl.png"
              alt="Davina coding and sipping iced coffee"
              width={380}
              height={380}
              className="rounded-xl shadow-md"
            />
            <p className="italic text-[#C7B6F1] text-center text-sm px-3 py-1 rounded-full bg-[#1f1f1f] border border-[#2A2A2A] w-fit">
              “make it cute, make it code”
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-44 mb-32 text-center">
        <h3 className="text-4xl font-bold mb-4 text-white">Let’s Connect ♡</h3>
        <p className="text-[#D1D1D1] mb-8 max-w-2xl mx-auto text-base leading-relaxed">
          Got a project, idea, or just need to rant about your 47 open tabs? I’m here for it.
        </p>
        <a
          href="mailto:davinaraj18@gmail.com"
          className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5A8C3] to-[#C7B6F1] text-black text-base font-semibold shadow-md hover:scale-105 transition-all"
        >
          Say hi ✉️
        </a>
      </section>



      {/* Footer */}
      <footer className="text-center text-xs text-[#888]">
        © {new Date().getFullYear()} Davina Rajendran
      </footer>
    </main>
  )
}
