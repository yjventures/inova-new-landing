'use client'

import React from 'react'
import { motion } from 'framer-motion'

const DeveloperAccessHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Animated developer/code symbols in background */}
      <div className="absolute inset-x-0 top-[75%] pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 320 - 160,
              y: Math.random() * 220 - 110,
              opacity: 0.07
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 0.18 + i * 0.05
            }}
            transition={{
              duration: 2.4,
              delay: i * 0.35,
              ease: 'easeOut'
            }}
            className={`absolute w-16 h-16 surface-card rounded-lg border border-accentPurple
              ${i === 0 ? 'top-1/3 left-1/3' :
                i === 1 ? 'top-1/2 right-1/3' :
                i === 2 ? 'bottom-1/3 left-1/4' :
                i === 3 ? 'bottom-1/3 right-1/4' :
                'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-accentGradient font-mono text-lg select-none">{['{', '}', '<>', '//', '</>'][i]}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Developer Access
            </span>
            : Build, Integrate, and Innovate with Inova
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext mb-12 max-w-3xl mx-auto">
            Open up your imagination and your stack. Access APIs, open-source modules, and sandbox environments while collaborating with the Inova engineering community. This is your gateway to building with enterprise-grade AI.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default DeveloperAccessHeroSection
