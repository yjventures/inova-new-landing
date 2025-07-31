'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Map, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const hexagonPoints = [
  [90, 10], [160, 50], [160, 130],
  [90, 170], [20, 130], [20, 50], [90, 10]
]

// Simple hexagon mesh lines for animation
function HexMesh({ count = 5, ...props }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" {...props}>
      {[...Array(count)].map((_, i) => (
        <motion.polyline
          key={i}
          points={hexagonPoints.map(([x, y]) =>
            `${90 + (x - 90) * (1 + i * 0.18)},${90 + (y - 90) * (1 + i * 0.18)}`
          ).join(' ')}
          stroke="#6C55F2"
          strokeOpacity={0.13 + i * 0.06}
          strokeWidth={1.7 - i * 0.2}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.7 + i * 0.6, delay: 0.6 + i * 0.23, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      ))}
    </svg>
  )
}

const features = [
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#38bdf8] to-[#42e1e2]">
        <Map className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Strategic Roadmapping",
    subtitle: "Align AI with your vision"
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#38bdf8] via-[#70e1f5] to-[#7b6ffb]">
        <Users className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Change Enablement",
    subtitle: "Empower teams & scale adoption"
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#b693fd] to-[#38bdf8]">
        <TrendingUp className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Measurable ROI",
    subtitle: "Deliver impact, track value"
  }
]

const AITransformationHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Custom Background: Animated Hex Mesh + Gradient Pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        {/* Subtle pulsing blue-violet radial */}
        <motion.div
          initial={{ opacity: 0.16, scale: 0.98 }}
          animate={{ opacity: [0.16, 0.24, 0.16], scale: [0.98, 1.03, 0.98] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
          className="absolute"
          style={{
            width: 500, height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #1bcff2 0%, #6C55F2 60%, transparent 100%)',
            left: '50%', top: '10%', transform: 'translate(-50%, -50%)',
            filter: 'blur(8px)'
          }}
        />
        {/* Animated Hex Mesh */}
        <motion.div
          initial={{ opacity: 0.22 }}
          animate={{ opacity: [0.22, 0.33, 0.22] }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror" }}
          className="absolute"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <HexMesh count={5} width={260} height={260} />
        </motion.div>
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
              AI Transformation
            </span>
            : Architect the Future of Your Enterprise
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext mb-12 max-w-3xl mx-auto">
            Accelerate innovation and resilience with a bespoke AI strategy - tailored for your industry, powered by Inova’s expertise. From roadmap to deployment, we transform how your business thinks, operates, and scales.
          </p>
        </motion.div>
        {/* Single Central CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center items-center"
        >
          <Button variant="gradient" size="lg" asChild>
            <Link href="/book-a-consultation">
              Reshape your Business Today!
            </Link>
          </Button>
        </motion.div>
        {/* Feature highlights - Styled glowing boxes with icons */}
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

export default AITransformationHeroSection
