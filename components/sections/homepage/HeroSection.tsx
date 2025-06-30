'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    // Handle AI ask functionality
    console.log('Ask:', askBarValue)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-backgroundDark">
      {/* Background Shape */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1, 
            rotate: 360
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96"
        >
          <Image
            src="/images/hero/abstract-shape-1.jpg"
            alt="Abstract flowing purple and blue 3D shape"
            fill
            className="object-contain opacity-50"
            priority
          />
        </motion.div>
        
        {/* Additional floating elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-accentPurple/20 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
        />
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext mb-12 max-w-3xl mx-auto">
            No-code AI agents, developer power, and industry expertise—unleash the next era of automation.
          </p>
        </motion.div>

        {/* Central AI Ask Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <form onSubmit={handleAskSubmit} className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center surface-card rounded-full p-2 border-2 border-transparent hover:border-accentPurple/30 focus-within:border-accentPurple transition-all duration-300">
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
            </div>
          </form>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button variant="gradient" size="lg" asChild>
            <Link href="/book-a-consultation">
              Book a Consultation
            </Link>
          </Button>
        </motion.div>

        {/* Floating indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
