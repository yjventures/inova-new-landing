'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const FinalCTASection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-backgroundDark opacity-80 z-10" />
        <Image
          src="/images/backgrounds/gradient-overlay-1.jpg"
          alt="Subtle animated gradient overlay"
          fill
          className="object-cover opacity-30"
        />
        
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-accentGradient opacity-10 z-5"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accentPurple/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: '100%'
            }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-jakarta font-bold text-h2 text-textPrimary mb-6">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Architect Your Future
            </span>
            ?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-textSecondary mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with our AI experts and unlock your next breakthrough. 
            Let's build the future of your enterprise together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Button variant="gradient" size="lg" className="text-lg px-8 py-4" asChild>
            <Link href="/book-a-consultation">
              Book a Consultation
            </Link>
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-textSecondary">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-systemFeedback-success rounded-full"></div>
              <span className="text-sm">Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-systemFeedback-success rounded-full"></div>
              <span className="text-sm">No obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-systemFeedback-success rounded-full"></div>
              <span className="text-sm">Expert guidance</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative mt-16"
        >
          <div className="flex justify-center space-x-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                className="w-12 h-12 surface-card rounded-lg border border-borderSubtle flex items-center justify-center"
              >
                <div className="w-6 h-6 bg-accentPurple/50 rounded-sm"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTASection
