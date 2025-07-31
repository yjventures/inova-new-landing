'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play, Check } from 'lucide-react'

const WhyInovaSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const keyBenefits = [
    "Scaling Business with AI",
    "Goal-Driven Design",
    "Co-Creation Partner",
    "Built-in Trust"
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
            className="space-y-8 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="section-heading mb-6">
                Why&nbsp;
                <span className="text-transparent bg-clip-text bg-accentGradient">
                  Inova
                </span>
                ?
              </h2>
              <p className="text-lg text-textSecondary leading-relaxed mb-8">
                We blend business context, data science, and change management to deliver AI that solves real problems and creates lasting advantage for your team.
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
          </motion.div>

          {/* Right Column - Video (Centered on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            // Center video on mobile, keep layout on desktop
            className="relative w-full max-w-[400px] mx-auto lg:mx-0"
          >
            <div className="relative aspect-video min-h-[220px] sm:min-h-[300px] rounded-2xl overflow-hidden surface-card border border-borderSubtle">
              {!isVideoPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <div className="relative w-full h-full bg-gradient-to-br from-accentPurple/20 to-blue-500/20">
                    <Image
                      src="/images/homepage/homepage-inova-thumbnail.jpg"
                      alt="Inova platform overview video thumbnail"
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
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:bg-white transition-all duration-300">
                          <Play className="h-8 w-8 text-accentPurple ml-1" fill="currentColor" />
                        </div>
                        <div className="absolute inset-0 w-20 h-20 bg-white/20 rounded-full animate-ping"></div>
                      </motion.button>
                    </div>

                    {/* Video Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 hidden sm:block">
                      <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-jakarta font-semibold text-white mb-1">
                          Why Choose Inova?
                        </h4>
                        <p className="text-white/80 text-sm">
                          See how Inova transforms your business with AI agents
                        </p>
                        <div className="flex items-center mt-2 text-white/60 text-xs">
                          <span>Duration: 1:45</span>
                          <span className="mx-2">•</span>
                          <span>Inova Ai</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Embedded Video */
                <div className="
                  relative aspect-video min-h-[220px] sm:min-h-[300px] rounded-2xl overflow-hidden surface-card border border-borderSubtle
                  mx-auto w-[95vw] max-w-[400px]
                  md:w-auto md:max-w-none
                ">
                  <iframe
                    src="https://www.youtube.com/embed/kpoFATxofjA"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

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

export default WhyInovaSection
