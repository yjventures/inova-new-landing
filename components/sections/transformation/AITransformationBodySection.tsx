'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Users2, Rocket } from 'lucide-react'

const pillars = [
  {
    icon: <BarChart3 className="h-8 w-8 text-accentPurple" />,
    title: 'Data-Driven Decisions',
    desc: 'Leverage advanced analytics and machine learning to guide strategy and optimize operations.'
  },
  {
    icon: <Users2 className="h-8 w-8 text-blue-400" />,
    title: 'Human + AI Synergy',
    desc: 'Blend expert talent with AI to enhance every business function - from customer support to supply chain.'
  },
  {
    icon: <Rocket className="h-8 w-8 text-accentGradient" />,
    title: 'Accelerated Growth',
    desc: 'Unlock new revenue streams and achieve a future-proof competitive edge with responsible AI adoption.'
  },
]

const AITransformationBodySection = () => {
  return (
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
            The AI Transformation Journey
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-textSecondary text-lg text-center max-w-3xl mx-auto mb-14"
        >
          Inova delivers more than technology - we orchestrate holistic AI transformation for your entire business, with change management, upskilling, and deep integration into your value chain.
        </motion.p>
        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {pillars.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="surface-card rounded-2xl px-8 py-10 text-center border border-borderSubtle shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-5 flex items-center justify-center">{icon}</div>
              <h3 className="font-jakarta font-semibold text-xl text-textPrimary mb-3">{title}</h3>
              <p className="text-textSecondary text-base">{desc}</p>
            </div>
          ))}
        </motion.div>
        {/* Transformation Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#19192a] rounded-2xl px-8 py-12 mb-20 border border-borderSubtle"
        >
          <h3 className="font-jakarta font-semibold text-2xl text-textPrimary mb-4">
            Our Approach to AI Transformation
          </h3>
          <ul className="list-disc list-inside text-textSecondary space-y-2 text-base">
            <li>
              <b className="text-textPrimary">Assess:</b> Deep-dive into your current capabilities, business goals, and readiness.
            </li>
            <li>
              <b className="text-textPrimary">Strategize:</b> Co-create an AI roadmap, prioritize high-impact use cases, and define KPIs.
            </li>
            <li>
              <b className="text-textPrimary">Implement:</b> Rapid, secure deployment of custom AI solutions and agile change management.
            </li>
            <li>
              <b className="text-textPrimary">Scale:</b> Measure results, iterate, and expand successful initiatives across the organization.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default AITransformationBodySection
