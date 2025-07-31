'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Database, Lock } from 'lucide-react'

const features = [
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#38bdf8] to-[#42e1e2]">
        <ShieldCheck className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Full-Stack Auditability",
    subtitle: "Transparent, explainable AI from model to output – no black boxes, no surprises."
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#38bdf8] via-[#70e1f5] to-[#7b6ffb]">
        <Database className="h-8 w-8 text-white" />
      </div>
    ),
    title: "Data Residency & Compliance",
    subtitle: "Deploy anywhere – meet every privacy, industry, and national regulation with ease."
  },
  {
    icon: (
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl shadow-xl bg-gradient-to-br from-[#7b6ffb] via-[#b693fd] to-[#38bdf8]">
        <Lock className="h-8 w-8 text-white" />
      </div>
    ),
    title: "End-to-End Privacy",
    subtitle: "Your data never leaves your environment – ensuring absolute confidentiality."
  }
]

const SovereignAIHeroSection = () => {
  return (
    <section className="relative py-20 bg-backgroundDark overflow-hidden">
      {/* Custom Background Animation: Animated concentric rings + morphing shield */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        {/* Animated Concentric Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 + i * 0.1 }}
            animate={{
              opacity: [0.10, 0.25, 0.10],
              scale: [0.7 + i * 0.1, 1 + i * 0.15, 0.7 + i * 0.1],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            className="absolute"
            style={{
              width: `${350 + i * 120}px`,
              height: `${350 + i * 120}px`,
              borderRadius: '9999px',
              border: '2.5px solid #6C55F2',
              filter: 'blur(0.5px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.2,
            }}
          />
        ))}
        {/* Morphing Glowing Shield Shape */}
        <motion.svg
          width="220"
          height="240"
          viewBox="0 0 220 240"
          fill="none"
          className="absolute"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          initial={{ opacity: 0.2, scale: 0.95 }}
          animate={{
            opacity: [0.22, 0.33, 0.22],
            scale: [0.95, 1.08, 0.95],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        >
          <motion.path
            d="M110 30
                Q165 45 190 80
                Q202 130 110 210
                Q18 130 30 80
                Q55 45 110 30Z"
            fill="url(#shield-gradient)"
            initial={{
              d: "M110 30 Q165 45 190 80 Q202 130 110 210 Q18 130 30 80 Q55 45 110 30Z"
            }}
            animate={{
              d: [
                "M110 30 Q165 45 190 80 Q202 130 110 210 Q18 130 30 80 Q55 45 110 30Z",
                "M110 35 Q170 60 185 85 Q205 130 110 215 Q25 125 35 85 Q60 55 110 35Z",
                "M110 30 Q165 45 190 80 Q202 130 110 210 Q18 130 30 80 Q55 45 110 30Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
            opacity="0.18"
          />
          <defs>
            <radialGradient id="shield-gradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#6C55F2" stopOpacity="0.18" />
              <stop offset="90%" stopColor="#1bcff2" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#10101A" stopOpacity="0" />
            </radialGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-text mb-6">
            Sovereign AI.{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Total Control. Full Compliance.
            </span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="hero-subtext mb-12 max-w-3xl mx-auto">
            Unlock the power of AI on your terms – with complete ownership, auditability, and privacy. Inova’s Sovereign AI platform delivers full-stack control, whether on-premise or in your private cloud.
          </p>
        </motion.div>
        {/* Value Pillars with styled animated boxes and icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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

export default SovereignAIHeroSection
