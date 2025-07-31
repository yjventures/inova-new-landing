'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const PartnerHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Animated Partnership Nodes Only (No Lines) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Purple circle left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
        >
          <div className="w-24 h-24 bg-accentPurple/30 rounded-full blur-xl"></div>
        </motion.div>
        {/* Blue circle right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute top-2/3 right-1/4 transform -translate-y-1/2"
        >
          <div className="w-24 h-24 bg-blue-400/30 rounded-full blur-xl"></div>
        </motion.div>
        {/* Animated network "points" */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-accentPurple/50 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${25 + (i % 3) * 25}%`,
              top: `${40 + Math.floor(i / 3) * 20}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            Partner with Inova.{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Architect the Future Together
            </span>
            .
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext mb-10 max-w-3xl mx-auto">
            Join our global network of innovators delivering next-generation AI solutions.
            Together, we'll transform how enterprises approach artificial intelligence.
          </p>
        </motion.div>

        {/* Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-14"
        >
          <div className="rounded-2xl bg-blue-400/15 border border-accentPurple/25 px-8 py-8 flex-1 min-w-[170px] shadow-xl flex flex-col items-center">
            <div className="font-jakarta font-extrabold text-3xl md:text-4xl mb-1 text-blue-400">150+</div>
            <div className="font-semibold text-textPrimary text-base md:text-lg">Technology Partners</div>
          </div>
          <div className="rounded-2xl bg-blue-400/15 border border-accentPurple/25 px-8 py-8 flex-1 min-w-[170px] shadow-xl flex flex-col items-center">
            <div className="font-jakarta font-extrabold text-3xl md:text-4xl mb-1 text-blue-400">500+</div>
            <div className="font-semibold text-textPrimary text-base md:text-lg">Pre-built Integrations</div>
          </div>
          <div className="rounded-2xl bg-blue-400/15 border border-accentPurple/25 px-8 py-8 flex-1 min-w-[170px] shadow-xl flex flex-col items-center">
            <div className="font-jakarta font-extrabold text-3xl md:text-4xl mb-1 text-blue-400">50+</div>
            <div className="font-semibold text-textPrimary text-base md:text-lg">Strategic Alliances</div>
          </div>
          <div className="rounded-2xl bg-blue-400/15 border border-accentPurple/25 px-8 py-8 flex-1 min-w-[170px] shadow-xl flex flex-col items-center">
            <div className="font-jakarta font-extrabold text-3xl md:text-4xl mb-1 text-blue-400">95%</div>
            <div className="font-semibold text-textPrimary text-base md:text-lg">Integration Success Rate</div>
          </div>
        </motion.div>

        {/* Scroll to form indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.a
            href="#partner-form"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-textSecondary hover:text-accentPurple transition-colors"
          >
            Apply to Partner ↓
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnerHeroSection
