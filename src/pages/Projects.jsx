import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '📈 Real-Time-Cryptocurrency-Tracker',
    desc: 'A single-page application (SPA) displaying real-time price data and historical charts for major cryptocurrencies. Features price alerts and data visualization.',
    ss: '/crypto.png',
    tech: ['React', 'Functional Components', 'Axios', 'Chart.js'],
    live: '#',
    code: 'https://github.com/PratikKumarJha/Real-Time-Cryptocurrency-Tracker'
  },
  {
  title: '🗞️ News App',
  desc: 'A mobile-responsive application that aggregates top headlines from multiple sources. Users receive personalized feeds and full article views.',
  ss: '/newsapp.png',
  tech: ['React', 'React Router', 'Context API (State Management)', 'Axios', 'News API'],
  live: '#',
  code: '#'
  },
  {
    title: '🛒 Online Shop',
    desc: 'A full-stack e-commerce platform (MERN stack) supporting product listing, cart management, and secure checkout. Includes user authentication and an admin dashboard.',
    ss: '/onlineshop.png',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js (MERN Stack)', 'Redux/Context', 'Restful API'],
    live: '#',
    code: 'https://github.com/PratikKumarJha/Online-Shop'
  },
  {
  title: '💼 Portfolio Website',
  desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
  ss: '/portfolio.jpg',
  tech: ['React', 'Framer Motion', 'Tailwind CSS'],
  live: '#',
  code: '#'
  },
  {
    title: '💬 InstantChat –  Chat-Application',
    desc: 'A full-stack, real-time chat application allowing users to create accounts, join multiple channels, and exchange messages instantly. It utilizes WebSockets for instantaneous communication and includes user presence indicators.',
    ss: '/Instantchat.png',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO (for WebSockets)'],
    live: '#',
    code: 'https://github.com/PratikKumarJha/INSTANT-CHAT'
  },
  {
    title: '🔪 Restaurant Website',
    desc: 'A modern web presence featuring a dynamic menu, high-resolution photo gallery, and an integrated online reservation booking system. Optimized for mobile and fast loading.',
    ss: '/restaurant.png',
    tech: ['React', 'React Router', 'CSS Modules/Styled Components', 'Functional Components',],
    live: '#',
    code: '#'
  },
  {
    title: '📌 Quicksell-Kanban-Board',
    desc: 'A task management tool using the Kanban methodology with drag-and-drop functionality. Users can categorize and move tasks across columns with status persistence.',
    ss: '/breastpred.jpg',
    tech: ['React', 'Hooks', 'Drag-and-Drop Library', 'Local Storage', 'CSS'],
    live: '#',
    code: 'https://github.com/PratikKumarJha/QUICKSELL-KANBAN-BOARD'
  },
  {
   title: '🕹️ Tic-Tac-Toe Game',
    desc: 'A command-line or basic GUI two-player implementation of the classic Tic-Tac-Toe game. It features win-condition detection, turn tracking, and score management.',
    ss: '/breastpred.jpg',
    tech: ['Python', 'Standard Library', 'Basic Console I/O (or Tkinter/Pygame for GUI)'],
    live: '#',
    code: 'https://github.com/PratikKumarJha/TikTakToeGame'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, AI innovation.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
