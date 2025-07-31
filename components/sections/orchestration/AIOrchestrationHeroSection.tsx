'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Map, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// Animated orchestration "blocks" connecting like a network graph
const OrchestrationBlocks = () => (
  <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none select-none">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-full"
    >
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 340 - 170,
            y: Math.random() * 340 - 170,
            opacity: 0,
            rotate: Math.random() * 360
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0
          }}
          transition={{
            duration: 2.1,
            delay: i * 0.26,
            ease: "easeOut"
          }}
          className={`absolute w-14 h-14 surface-card rounded-xl border border-accentPurple ${
            i === 0 ? 'top-1/3 left-1/4' :
            i === 1 ? 'top-1/4 right-1/3' :
            i === 2 ? 'bottom-1/3 left-1/3' :
            i === 3 ? 'bottom-1/3 right-1/3' :
            'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          }`}
        >
          <div className="w-full h-full bg-accentGradient rounded-xl flex items-center justify-center">
            <div className="text-white font-semibold text-xs">AI</div>
          </div>
        </motion.div>
      ))}
      {/* Connecting orchestration lines */}
      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ duration: 3, delay: 1.1 }}
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="orchestrationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6C55F2" />
            <stop offset="100%" stopColor="#1bcff2" />
          </linearGradient>
        </defs>
        {/* Example network lines */}
        <path d="M60 60 L180 60 L180 180 L60 180 Z" stroke="url(#orchestrationGradient)" strokeWidth="2" fill="none" />
        <path d="M120 60 L120 180" stroke="url(#orchestrationGradient)" strokeWidth="2" fill="none" />
        <path d="M60 120 L180 120" stroke="url(#orchestrationGradient)" strokeWidth="2" fill="none" />
      </motion.svg>
    </motion.div>
  </div>
)

// Features array with Lucide icons, gradient backgrounds, and glow
const features = [
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#38bdf8] to-[#42e1e2]">
        <Map className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Strategic Roadmapping",
    subtitle: "Align AI with your vision"
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#38bdf8] via-[#70e1f5] to-[#7b6ffb]">
        <Users className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Change Enablement",
    subtitle: "Empower teams & scale adoption"
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#b693fd] to-[#38bdf8]">
        <TrendingUp className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Measurable ROI",
    subtitle: "Deliver impact, track value"
  }
]

const AIOrchestrationHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Animated Orchestration Background */}
      <div className="absolute inset-0">
        <OrchestrationBlocks />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            <span className="text-transparent bg-clip-text bg-accentGradient">
              AI Orchestration
            </span>
            : Integrate, Automate, Accelerate
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext mb-12 max-w-3xl mx-auto">
            Synchronize every AI model, data flow, and process across your enterprise - seamlessly, securely, and at scale.
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
            <Link href="/book-a-consultation">
              Get in Touch with Us
            </Link>
          </Button>
          <Button variant="purple-border" size="lg" asChild>
            <Link href="/solutions-by-industry" className="inline-flex items-center space-x-2">
              <span>See our Impact</span>
              <ExternalLink className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
        {/* Feature highlights - Styled glowing boxes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map(({ icon, title, subtitle }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
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

export default AIOrchestrationHeroSection
