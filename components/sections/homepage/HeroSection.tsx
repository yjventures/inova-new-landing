'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mic, Search } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const HeroSection = () => {
  const [askBarValue, setAskBarValue] = useState('')
  const [isListening, setIsListening] = useState(false)

  const handleVoiceInput = () => {
    setIsListening(!isListening)
    // Voice input functionality would be implemented here
  }

  const handleAskSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const base = 'https://chatsite.inovasolutions.ai'
    const query = askBarValue.trim()
    const url = query ? `${base}?q=${encodeURIComponent(query)}` : base
    window.open(url, '_blank', 'noopener,noreferrer')
    setAskBarValue('')
  }

  return (
    <section className="relative min-h-[90vh] py-50 flex items-start justify-center pt-24 overflow-hidden bg-backgroundDark">
      {/* Animated Wavy Background */}
      <div className="absolute left-0 right-0 bottom-20 w-full h-[500px] pointer-events-none select-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 400"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,250 Q480,100 960,250 T1920,250"
            stroke="#6C55F2"
            strokeWidth="6"
            opacity="0.5"
            fill="none"
            animate={{
              d: [
                "M0,250 Q480,100 960,250 T1920,250",
                "M0,220 Q480,140 960,220 T1920,220",
                "M0,250 Q480,100 960,250 T1920,250"
              ],
              y: [0, -30, 0, 30, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0,290 Q520,220 960,280 T1920,290"
            stroke="#1bcff2"
            strokeWidth="4"
            opacity="0.5"
            fill="none"
            animate={{
              d: [
                "M0,290 Q520,220 960,280 T1920,290",
                "M0,310 Q520,260 960,320 T1920,310",
                "M0,290 Q520,220 960,280 T1920,290"
              ],
              y: [0, 30, 0, -30, 0]
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0,330 Q400,350 960,330 T1920,330"
            stroke="#ed57d6"
            strokeWidth="3"
            opacity="0.5"
            fill="none"
            animate={{
              d: [
                "M0,330 Q400,350 960,330 T1920,330",
                "M0,340 Q400,370 960,340 T1920,340",
                "M0,330 Q400,350 960,330 T1920,330"
              ],
              y: [0, -20, 0, 25, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0,370 Q1000,290 1920,370"
            stroke="#15A9D8"
            strokeWidth="2"
            opacity="0.5"
            fill="none"
            animate={{
              d: [
                "M0,370 Q1000,290 1920,370",
                "M0,390 Q1400,390 1920,370",
                "M0,370 Q1000,290 1920,370"
              ],
              y: [0, 25, 0, -25, 0]
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            Architecting Your{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Enterprise AI Future
            </span>
            .
          </h1>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext mb-12 max-w-3xl mx-auto">
            No-code AI agents, developer power, and industry expertise - unleash the next era of automation.
          </p>
        </motion.div> */}

        {/* Central AI Ask Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <form onSubmit={handleAskSubmit} className="relative max-w-2xl mx-auto">
            {/* <div className="relative flex items-center surface-card rounded-full p-2 border-2 border-transparent hover:border-accentPurple/30 focus-within:border-accentPurple transition-all duration-300">
              <Search className="h-5 w-5 text-textSecondary ml-4" />
              <input
                type="text"
                value={askBarValue}
                onChange={(e) => setAskBarValue(e.target.value)}
                placeholder="Ask anything about Enterprise AI transformation..."
                className="flex-1 bg-transparent border-none outline-none text-textPrimary placeholder-textSecondary px-4 py-3 text-lg"
              />
              <button
                type="button"
                onClick={handleVoiceInput}
                className={`p-3 rounded-full transition-all duration-300 mr-2 ${
                  isListening 
                    ? 'bg-accentPurple text-white animate-pulse-glow' 
                    : 'bg-surfaceCard text-textSecondary hover:bg-accentPurple hover:text-white'
                }`}
              >
                <Mic className="h-5 w-5" />
              </button>
            </div> */}
          </form>
        </motion.div>

        {/* CTA Button */}
        {/* <motion.div
          style={{ paddingBottom: "80px" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button variant="gradient" size="lg" asChild>
            <Link href="/book-a-consultation">
              Book a Consultation
            </Link>
          </Button>
        </motion.div> */}

        {/* Embedded iframe */}
        <div className="flex justify-center w-full">
          <iframe
            src="https://translate.inovasolutions.ai/inova-hero/"
            height="550px"
            width="500px"
            style={{ marginTop: '-150px' }}
            allow="microphone; camera"
            className="rounded-md shadow-lg"
          ></iframe>
        </div>

        {/* Floating indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-text"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-textSecondary text-sm"
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
