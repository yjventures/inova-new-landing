'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ResponsibleAIHeroBackground = () => (
  <div className="absolute inset-0 pointer-events-none select-none">
    {/* Shield and lock "secure tech" vibes */}
    <svg className="absolute left-1/2 top-[70%] opacity-20" style={{ transform: 'translate(-50%,-50%)' }} width="500" height="280" viewBox="0 0 500 280">
      <motion.path
        d="M250,40 Q370,70 420,180 Q370,240 250,260 Q130,240 80,180 Q130,70 250,40"
        stroke="#6C55F2"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.circle
        cx="250" cy="150" r="36"
        fill="#1bcff2"
        opacity={0.13}
        animate={{
          r: [36, 49, 36],
          opacity: [0.13, 0.21, 0.13]
        }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
    </svg>
    {/* Soft glowing accents */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: [0.13, 0.21, 0.13], scale: [0.9, 1.07, 0.9] }}
      transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      className="absolute top-1/2 left-1/3 w-44 h-44 bg-accentPurple/30 rounded-full blur-2xl"
      style={{ transform: "translate(-50%,-50%)" }}
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: [0.08, 0.17, 0.08], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      className="absolute top-1/2 right-1/4 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl"
      style={{ transform: "translate(50%,-50%)" }}
    />
  </div>
)

const ResponsibleAIHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      <ResponsibleAIHeroBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            Responsible AI at Inova{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Ethics, Trust & Impact by Design
            </span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-subtext mb-12 max-w-3xl mx-auto"
        >
          Responsible AI isn’t a buzzword for us - it’s a framework for building fair, transparent, and trustworthy systems that make a positive difference for every stakeholder.
        </motion.p>
      </div>
    </section>
  )
}

export default ResponsibleAIHeroSection
