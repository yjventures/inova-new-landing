'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const BLDRHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated BLDR Logo Assembly */}
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-96 h-96 opacity-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full"
          >
            {/* Logo pieces that animate and assemble */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 400 - 200,
                  y: Math.random() * 400 - 200,
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
                  duration: 2,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
                className={`absolute w-16 h-16 surface-card rounded-lg border border-accentPurple ${
                  i === 0 ? 'top-1/3 left-1/3' :
                  i === 1 ? 'top-1/3 right-1/3' :
                  i === 2 ? 'bottom-1/3 left-1/3' :
                  i === 3 ? 'bottom-1/3 right-1/3' :
                  i === 4 ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' :
                  'top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                }`}
              >
                <div className="w-full h-full bg-accentGradient rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-xs">BLDR</div>
                </div>
              </motion.div>
            ))}
            
            {/* Connecting lines */}
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 3, delay: 1 }}
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6C55F2" />
                  <stop offset="100%" stopColor="#1bcff2" />
                </linearGradient>
              </defs>
              <path
                d="M 50 50 L 150 50 L 150 150 L 50 150 Z"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>

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
            Empower your teams to build, deploy, and automate AI agents—no code required. 
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
          {[
            { title: "No-Code Builder", desc: "Drag & drop interface" },
            { title: "Enterprise Ready", desc: "Security & compliance built-in" },
            { title: "Developer Access", desc: "Full API & SDK support" }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="font-jakarta font-semibold text-textPrimary mb-2">
                {feature.title}
              </div>
              <div className="text-textSecondary text-sm">
                {feature.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BLDRHeroSection
