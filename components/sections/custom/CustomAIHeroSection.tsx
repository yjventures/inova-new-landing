'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Settings2, Layers3, Shield } from 'lucide-react'
import { Button } from '@/components/ui/Button'

function Cog({ size = 54, color = '#6C55F2', delay = 0, speed = 6, style = {}, ...props }) {
  // Simple SVG cog/gear, animated with Framer Motion
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 54 54"
      fill="none"
      className="absolute"
      style={style}
      initial={{ rotate: 0, opacity: 0.16 }}
      animate={{ rotate: 360, opacity: 0.23 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: speed,
        delay,
        ease: "linear"
      }}
      {...props}
    >
      <circle cx="27" cy="27" r="18" stroke={color} strokeWidth="3" opacity="0.8" />
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45) * (Math.PI / 180)
        const x1 = 27 + Math.cos(angle) * 18
        const y1 = 27 + Math.sin(angle) * 18
        const x2 = 27 + Math.cos(angle) * 24
        const y2 = 27 + Math.sin(angle) * 24
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="3"
            opacity="0.63"
          />
        )
      })}
      <circle cx="27" cy="27" r="5.2" fill={color} opacity="0.14" />
    </motion.svg>
  )
}

const features = [
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#38bdf8] to-[#42e1e2]">
        <Settings2 className="h-8 w-8 text-white" />
      </div>
    ),
    title: "End-to-end Engineering",
    subtitle: "From concept to deployment, fully managed"
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#38bdf8] via-[#70e1f5] to-[#7b6ffb]">
        <Layers3 className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Tailored AI Models",
    subtitle: "Built for your unique data, domain, and KPIs"
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#b693fd] to-[#38bdf8]">
        <Shield className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Robust Security",
    subtitle: "Compliance and peace of mind built-in"
  }
]

const CustomAIHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Animated cogs background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <Cog size={90} color="#1bcff2" delay={0} speed={18} style={{ opacity: 0.18 }} />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <Cog size={60} color="#6C55F2" delay={1.7} speed={10} style={{ opacity: 0.22 }} />
        </div>
        <div className="absolute top-2/3 left-1/2">
          <Cog size={48} color="#8e7cf2" delay={0.7} speed={6} style={{ opacity: 0.13 }} />
        </div>
        <div className="absolute bottom-24 right-32">
          <Cog size={72} color="#1bcff2" delay={2.2} speed={13} style={{ opacity: 0.19 }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Custom AI Development
            </span>
            : Solutions Engineered for You
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext mb-12 max-w-3xl mx-auto">
            From ideation to deployment, Inova crafts bespoke AI products and automations for your most complex business challenges – tailored, secure, and built to scale.
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
            <Link href="/book-a-consultation">
              Get in Touch with Us
            </Link>
          </Button>
          <Button variant="purple-border" size="lg" asChild>
            <Link href="/solutions-by-industry" className="inline-flex items-center space-x-2">
              <span>See Our Impact</span>
              <ExternalLink className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {features.map(({ icon, title, subtitle }, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {icon}
              <div className="font-jakarta font-bold text-lg text-textPrimary mb-1">{title}</div>
              <div className="text-textSecondary text-sm">{subtitle}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CustomAIHeroSection
