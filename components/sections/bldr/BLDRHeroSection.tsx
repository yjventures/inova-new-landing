'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Zap, ShieldCheck, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const features = [
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#38bdf8] to-[#42e1e2]">
        <Zap className="h-8 w-8 text-white" />
      </div>
    ),
    title: "No-Code Builder",
    subtitle: "Drag & drop interface"
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#38bdf8] via-[#70e1f5] to-[#7b6ffb]">
        <ShieldCheck className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Enterprise Ready",
    subtitle: "Security & compliance built-in"
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#b693fd] to-[#38bdf8]">
        <Code2 className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Developer Access",
    subtitle: "Full API & SDK support"
  }
]

const BLDRHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* BLDR Background Blocks */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 320 - 160,
              y: Math.random() * 220 - 110,
              opacity: 0.05
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 0.1 + i * 0.05
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.3,
              ease: 'easeOut'
            }}
            className={`absolute w-16 h-16 rounded-lg border border-accentPurple bg-accentPurple/10 backdrop-blur
              ${i === 0 ? 'top-1/3 left-1/3' :
                i === 1 ? 'top-1/2 right-1/3' :
                i === 2 ? 'bottom-1/3 left-1/4' :
                i === 3 ? 'bottom-1/3 right-1/4' :
                'top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2'
              }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white font-mono text-md select-none opacity-50">BLDR</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            <span className="text-transparent bg-clip-text bg-accentGradient">
              BLDR
            </span>
            : No-Code Enterprise AI Agent Creation & Automation
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext mb-12 max-w-3xl mx-auto">
            Empower your teams to build, deploy, and automate AI agents – no code required.
            Developers? Go deeper with full developer access.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="gradient" size="lg" asChild>
            <Link href="/book-a-consultation?source=bldr">
              Book a BLDR Demo
            </Link>
          </Button>
          <Button variant="purple-border" size="lg" asChild>
            <Link href="https://www.bldr.bot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
              <span>Try BLDR Now</span>
              <ExternalLink className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map(({ icon, title, subtitle }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center"
            >
              {icon}
              <div className="font-jakarta font-bold text-lg text-textPrimary mb-1">{title}</div>
              <div className="text-textSecondary text-sm">{subtitle}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BLDRHeroSection
