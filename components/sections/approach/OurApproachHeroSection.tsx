'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedWavesBackground = () => (
  <div className="absolute inset-0 pointer-events-none select-none">
    {/* Dynamic wavy SVG lines */}
    <svg className="absolute left-1/2 top-1/2 opacity-20" style={{ transform: 'translate(-50%,-50%)' }} width="700" height="280" viewBox="0 0 700 280">
      <motion.path
        d="M0,180 Q175,80 350,180 T700,180"
        stroke="#6C55F2"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.path
        d="M0,210 Q175,110 350,210 T700,210"
        stroke="#1bcff2"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4.1, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.circle
        cx="350" cy="180" r="17"
        fill="#6C55F2"
        opacity={0.19}
        animate={{
          r: [17, 25, 17],
          opacity: [0.19, 0.26, 0.19]
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
    </svg>
    {/* Blurred accent blobs */}
    <motion.div
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: [0.14, 0.22, 0.14], scale: [0.93, 1.09, 0.93] }}
      transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      className="absolute top-1/2 left-1/3 w-48 h-48 bg-accentPurple/30 rounded-full blur-2xl"
      style={{ transform: "translate(-50%,-50%)" }}
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: [0.11, 0.18, 0.11], scale: [0.92, 1.07, 0.92] }}
      transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      className="absolute top-1/2 right-1/4 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl"
      style={{ transform: "translate(50%,-50%)" }}
    />
  </div>
)

const OurApproachHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Animated waves in background */}
      <AnimatedWavesBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            Our Approach:{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Architecting AI for Real Impact
            </span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-subtext mb-12 max-w-3xl mx-auto"
        >
          Inova combines deep technical expertise, hands-on collaboration, and a commitment to responsible AI. Our approach transforms ambition into scalable, sustainable business value.
        </motion.p>
      </div>
    </section>
  )
}

export default OurApproachHeroSection
