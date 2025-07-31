'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SocialProofSection = () => {
  const clientLogos = [
    { name: 'TechsDen', logo: 'TechsDen' },
    { name: 'Ideal Solutions', logo: 'Ideal Solutions' },
    { name: 'Globmobi', logo: 'Globmobi' },
    { name: 'Colab Cloud', logo: 'Colab Cloud' },
    { name: 'SB Infowave', logo: 'SB Infowave' },
    { name: 'Canadian University Dubai', logo: 'Canadian University Dubai' },
    { name: 'Maveric', logo: 'Maveric' },
    { name: 'Passageway Consultancy', logo: 'Passageway Consultancy' },
    { name: 'Code', logo: 'Code' },
    { name: 'Data Serve', logo: 'Data Serve' },
    { name: 'MultiMedia Group', logo: 'MultiMedia Group' },
    { name: 'Smart Age', logo: 'Smart Age' },
    { name: 'Green Circle', logo: 'Green Circle' },
    { name: 'SITI', logo: 'SITI' },
    { name: 'Cloned Reality', logo: 'Cloned Reality' },
    { name: 'Proximo', logo: 'Proximo' },
    { name: 'Seed Technologies', logo: 'Seed Technologies' },
    { name: 'IKTIS', logo: 'IKTIS' },
    { name: 'Innoarea', logo: 'Innoarea' },
  ]

  const duplicatedLogos = [...clientLogos, ...clientLogos]
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2) // Half = one cycle
    }
  }, [])

  return (
    <section className="relative py-20 bg-backgroundDark overflow-visible">
      {/* Background Text Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-jakarta font-bold text-[200px] lg:text-[300px] text-textPrimary select-none hidden sm:block"
        >
          100k+
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Section Caption */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-inter font-medium text-lg text-textSecondary max-w-3xl mx-auto">
            Trusted by industry leaders in Ecommerce, Education, Customer Service, and Marketing.
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative overflow-x-hidden overflow-y-visible">
          <motion.div
            ref={containerRef}
            animate={{ x: [0, -scrollWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
                direction: 'left',
              },
            }}
            className="flex gap-8 md:gap-12 py-2"
          >
            {duplicatedLogos.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="px-6 h-16 surface-card rounded-lg inline-flex items-center justify-center border border-borderSubtle hover:border-accentPurple/30 transition-all duration-300 cursor-pointer whitespace-nowrap">
                  <div className="font-jakarta font-bold text-2xl text-textSecondary group-hover:text-accentPurple transition-colors duration-300">
                    {client.logo}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-backgroundDark to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-backgroundDark to-transparent pointer-events-none z-10" />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="font-jakarta font-bold text-3xl text-textPrimary mb-2">100k+</div>
            <div className="text-textSecondary">AI Interactions Processed</div>
          </div>
          <div className="text-center">
            <div className="font-jakarta font-bold text-3xl text-textPrimary mb-2">98%</div>
            <div className="text-textSecondary">Client Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="font-jakarta font-bold text-3xl text-textPrimary mb-2">40%</div>
            <div className="text-textSecondary">Average Efficiency Increase</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProofSection
