'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SocialProofSection = () => {
  // Mock client logos - in a real implementation, these would be actual client logos
  const clientLogos = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'HealthSystem', logo: 'HS' },
    { name: 'FinanceFirst', logo: 'FF' },
    { name: 'EduTech', logo: 'ET' },
    { name: 'RetailPro', logo: 'RP' },
    { name: 'ManufacturePlus', logo: 'MP' },
    { name: 'LogisticCore', logo: 'LC' },
    { name: 'ServiceMax', logo: 'SM' },
  ]

  // Duplicate the logos for seamless scrolling
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Background Text Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-jakarta font-bold text-[200px] lg:text-[300px] text-textPrimary select-none"
        >
          500k+
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -50 * clientLogos.length + '%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex gap-8 md:gap-12"
              style={{ width: `${duplicatedLogos.length * 200}px` }}
            >
              {duplicatedLogos.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
                >
                  <div className="w-32 h-16 surface-card rounded-lg flex items-center justify-center border border-borderSubtle hover:border-accentPurple/30 transition-all duration-300 group cursor-pointer">
                    <div className="font-jakarta font-bold text-2xl text-textSecondary group-hover:text-accentPurple transition-colors duration-300">
                      {client.logo}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-backgroundDark to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-backgroundDark to-transparent pointer-events-none z-10" />
        </div>

        {/* Stats or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="font-jakarta font-bold text-3xl text-textPrimary mb-2">500k+</div>
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
