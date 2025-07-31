'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Check } from 'lucide-react'

const PlatformOverviewSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const keyBenefits = [
    "No-Code workflow builder",
    "Pre-built AI agent templates", 
    "Seamless integration",
    "Enterprise-grade security"
  ]

  return (
    <section className="py-20 bg-backgroundDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="section-heading mb-6">
                Build AI Agents.{' '}
                <span className="text-transparent bg-clip-text bg-accentGradient">
                  Automate Anything
                </span>
                . No Code Needed.
              </h2>
              
              <p className="text-lg text-textSecondary leading-relaxed mb-8">
                BLDR lets business users drag, drop, and deploy powerful AI agents and automations in minutes.
                No technical expertise required, but developers can go deeper with full API access.
              </p>
            </div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-jakarta font-semibold text-xl text-textPrimary mb-4">
                Key Benefits
              </h3>
              <div className="space-y-3">
                {keyBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-systemFeedback-success rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <span className="text-textPrimary">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center p-4 surface-card rounded-xl border border-borderSubtle">
                <div className="font-jakarta font-bold text-2xl text-textPrimary mb-2">5min</div>
                <div className="text-textSecondary text-sm">Average Setup Time</div>
              </div>
              <div className="text-center p-4 surface-card rounded-xl border border-borderSubtle">
                <div className="font-jakarta font-bold text-2xl text-textPrimary mb-2">99.9%</div>
                <div className="text-textSecondary text-sm">Uptime Guarantee</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden surface-card border border-borderSubtle">
              {!isVideoPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <div className="relative w-full h-full bg-gradient-to-br from-accentPurple/20 to-blue-500/20">
                    <Image
                      src="/images/bldr/bldr-video-thumbnail.jpg"
                      alt="BLDR Platform demonstration video thumbnail"
                      fill
                      className="object-cover opacity-80"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        onClick={handleVideoPlay}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                      >
                        {/* Play button background */}
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:bg-white transition-all duration-300">
                          <Play className="h-8 w-8 text-accentPurple ml-1" fill="currentColor" />
                        </div>
                        
                        {/* Pulse effect */}
                        <div className="absolute inset-0 w-20 h-20 bg-white/20 rounded-full animate-ping"></div>
                      </motion.button>
                    </div>

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 hidden sm:block">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-jakarta font-semibold text-white mb-1">
                          BLDR Platform Demo
                        </h4>
                        <p className="text-white/80 text-sm">
                          See how easy it is to build AI agents with our no-code platform
                        </p>
                        <div className="flex items-center mt-2 text-white/60 text-xs">
                          <span>Duration: 3:42</span>
                          <span className="mx-2">•</span>
                          <span>Product Demo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Embedded Video */
                <iframe
                  src="https://www.youtube.com/embed/xI1vU5AR-vE"
                  title="BLDR Platform Demonstration"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Background glow effect */}
            <div className="absolute -inset-4 bg-accentPurple/10 rounded-3xl blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PlatformOverviewSection
