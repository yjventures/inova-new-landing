'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedCareersBackground = () => (
  <div className="absolute inset-0 pointer-events-none select-none">
    {/* Full width flowing constellation lines */}
    <svg
      className="w-full h-[320px] md:h-[340px] lg:h-[360px]"
      viewBox="0 0 1200 320"
      fill="none"
      // Removed preserveAspectRatio="none" to keep proportions!
    >
      {/* Purple polyline */}
      <motion.polyline
        points="80,240 270,70 480,150 700,70 1100,240"
        stroke="#6C55F2"
        strokeWidth="3"
        fill="none"
        opacity={0.12}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      {/* Blue polyline */}
      <motion.polyline
        points="200,290 420,170 900,280 1100,120"
        stroke="#1bcff2"
        opacity={0.12}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          delay: 0.7,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
      {/* Animated nodes */}
      {[
        [270, 70], [480, 150], [700, 70], [1100, 240],
        [420, 170], [900, 280]
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="9"
          fill="#6C55F2"
          opacity={0.12}
          animate={{
            r: [11, 18, 11],
            opacity: [0.13, 0.24, 0.13]
          }}
          transition={{
            duration: 2.5 + i * 0.2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: i * 0.23
          }}
        />
      ))}
    </svg>
    {/* Blurred accent blobs */}
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: [0.13, 0.21, 0.13], scale: [0.92, 1.09, 0.92] }}
      transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
      className="absolute top-[63%] left-1/4 w-72 h-72 bg-accentPurple/30 rounded-full blur-2xl"
      style={{ transform: "translate(-50%,-50%)" }}
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: [0.09, 0.18, 0.09], scale: [0.92, 1.07, 0.92] }}
      transition={{ duration: 9, repeat: Infinity, repeatType: "mirror" }}
      className="absolute top-[82%] right-1/6 w-64 h-64 bg-blue-400/30 rounded-full blur-2xl"
      style={{ transform: "translate(50%,-50%)" }}
    />
  </div>
)

const CareersHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Unique animated constellation background */}
      <AnimatedCareersBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            Join Inova.{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Shape the Future of AI
            </span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-subtext mb-12 max-w-3xl mx-auto"
        >
          We’re a team of builders, scientists, and visionaries: on a mission to create AI that’s ethical, impactful, and globally transformative. If you want to push boundaries and grow with us, let’s connect.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {/* ... Your benefit blocks ... */}
        </motion.div>
      </div>
    </section>
  )
}

export default CareersHeroSection
