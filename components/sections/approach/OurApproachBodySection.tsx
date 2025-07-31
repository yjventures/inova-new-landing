'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Users, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: <Brain className="h-10 w-10 text-accentGradient" />,
    title: "Strategy & Design",
    desc: "Every solution starts with your goals. We architect AI to fit your business, not the other way around - merging tech with insight for maximum impact."
  },
  {
    icon: <Users className="h-10 w-10 text-blue-400" />,
    title: "Co-Creation & Enablement",
    desc: "We’re your partners from day one, upskilling teams, piloting use cases, and building for adoption so your people grow alongside your technology."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accentPurple" />,
    title: "Responsible Innovation",
    desc: "Ethics, security, and transparency aren’t afterthoughts - they’re embedded into every stage, for trustworthy, future-proof AI."
  }
]

const OurApproachBodySection = () => (
  <section className="relative py-24 bg-backgroundDark">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading text-center mb-8"
      >
        <span className="text-transparent bg-clip-text bg-accentGradient">
          Our Methodology
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-textSecondary text-lg text-center max-w-3xl mx-auto mb-14"
      >
        We blend business context, data science, and change management to deliver AI that solves real problems and creates lasting advantage for your team.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        {pillars.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="surface-card rounded-2xl px-7 py-9 text-center border border-borderSubtle shadow-sm hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="mb-5">{icon}</div>
            <div className="font-jakarta font-bold text-lg text-textPrimary mb-2">{title}</div>
            <div className="text-textSecondary text-base">{desc}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)

export default OurApproachBodySection
