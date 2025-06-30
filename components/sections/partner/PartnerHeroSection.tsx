'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const PartnerHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Background Partnership Network Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-96 h-96">
          <Image
            src="/images/partner/partner-hero-network.jpg"
            alt="Animated network icon representing partnership"
            fill
            className="object-contain opacity-20"
            priority
          />
        </div>
        
        {/* Animated Partnership Nodes */}
        <div className="absolute inset-0">
          {/* Two distinct shapes that merge */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/4 transform -translate-y-1/2"
          >
            <div className="w-24 h-24 bg-accentPurple/30 rounded-full blur-xl"></div>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.6 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="absolute top-1/2 right-1/4 transform -translate-y-1/2"
          >
            <div className="w-24 h-24 bg-blue-400/30 rounded-full blur-xl"></div>
          </motion.div>
          
          {/* Connecting Bridge */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-accentGradient origin-center"
          />
          
          {/* Partnership Network Points */}
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
          <p className="hero-subtext mb-12 max-w-3xl mx-auto">
            Join our global network of innovators delivering next-generation AI solutions.
            Together, we'll transform how enterprises approach artificial intelligence.
          </p>
        </motion.div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-accentPurple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-accentPurple rounded-lg"></div>
            </div>
            <h3 className="font-jakarta font-semibold text-lg text-textPrimary mb-2">
              Revenue Growth
            </h3>
            <p className="text-textSecondary text-sm">
              Expand your portfolio with cutting-edge AI solutions
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accentPurple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-accentGradient rounded-lg"></div>
            </div>
            <h3 className="font-jakarta font-semibold text-lg text-textPrimary mb-2">
              Technical Support
            </h3>
            <p className="text-textSecondary text-sm">
              Full training and ongoing technical assistance
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accentPurple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-blue-400 rounded-lg"></div>
            </div>
            <h3 className="font-jakarta font-semibold text-lg text-textPrimary mb-2">
              Market Leadership
            </h3>
            <p className="text-textSecondary text-sm">
              Position your firm at the forefront of AI innovation
            </p>
          </div>
        </motion.div>

        {/* Scroll to form indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
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
