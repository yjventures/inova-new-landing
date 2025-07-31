'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TeamHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Background Network Visualization */}
      <div className="absolute inset-0">
        {/* Animated Network Nodes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-accentPurple/40 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + (i % 4) * 20}%`,
                top: `${30 + Math.floor(i / 4) * 40}%`
              }}
            />
          ))}
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6C55F2" />
                <stop offset="100%" stopColor="#1bcff2" />
              </linearGradient>
            </defs>
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + (i % 3) * 25}%`}
                y1={`${30 + Math.floor(i / 3) * 40}%`}
                x2={`${30 + ((i + 1) % 3) * 25}%`}
                y2={`${40 + Math.floor((i + 1) / 3) * 40}%`}
                stroke="url(#networkGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1
                }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            Meet the{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Minds Behind Inova
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext max-w-3xl mx-auto">
            A team of visionaries, engineers, and creators - dedicated to architecting the future of enterprise AI.
          </p>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 mb-2"
        >
          {/* Button 1 - Gradient */}
          <a
            href="#LeadershipSection"
            className="px-7 py-3 rounded-full font-semibold text-white bg-accentGradient shadow-md hover:shadow-lg hover:brightness-105 transition-all text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-accentPurple/70"
            style={{
              boxShadow: '0 2px 14px 0 rgba(48, 187, 255, 0.10)'
            }}
          >
            Meet Our Team
          </a>
          {/* Button 2 - Outline */}
          <a
            href="#TeamValueSection"
            className="px-7 py-3 rounded-full font-semibold text-accentPurple border-2 border-accentPurple bg-transparent hover:bg-accentPurple/10 transition-all text-base sm:text-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-accentPurple/50"
          >
            Our Values
          </a>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="font-jakarta font-bold text-3xl text-textPrimary mb-2">25+</div>
            <div className="text-textSecondary">Expert Team Members</div>
          </div>
          <div className="text-center">
            <div className="font-jakarta font-bold text-3xl text-textPrimary mb-2">100+</div>
            <div className="text-textSecondary">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="font-jakarta font-bold text-3xl text-textPrimary mb-2">2</div>
            <div className="text-textSecondary">Global Offices</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamHeroSection
