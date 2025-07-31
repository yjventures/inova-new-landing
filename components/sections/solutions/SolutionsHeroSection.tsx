'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, DollarSign, Phone, ShoppingCart, GraduationCap } from 'lucide-react'

const SolutionsHeroSection = () => {
  const industries = [
    { icon: Heart, name: 'Healthcare', color: 'text-red-400' },
    { icon: DollarSign, name: 'Finance', color: 'text-green-400' },
    { icon: Phone, name: 'Telecom', color: 'text-blue-400' },
    { icon: ShoppingCart, name: 'Ecommerce', color: 'text-purple-400' },
    { icon: GraduationCap, name: 'Education', color: 'text-yellow-400' },
  ]

  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Orbiting Icons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            const angle = (index * 72) * (Math.PI / 180) // 360/5 = 72 degrees
            const radius = 200
            
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: Math.cos(angle) * radius,
                  top: Math.sin(angle) * radius,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                  className={`w-16 h-16 surface-card rounded-xl flex items-center justify-center border border-borderSubtle ${industry.color} opacity-60 hover:opacity-100 transition-opacity duration-300`}
                >
                  <IconComponent className="h-8 w-8" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            AI Solutions,{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Tailored for Your Industry
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext max-w-3xl mx-auto">
            From Healthcare to Telecom, Inova's AI agents and automation platforms deliver measurable results, fast.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsHeroSection
