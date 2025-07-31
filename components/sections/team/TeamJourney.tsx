'use client'

import React from 'react'
import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2022',
    title: '1. Vision Set in Motion',
    description: 'Inova was founded with a mission to bridge the gap between enterprise ambition and real-world AI. Our founders united top minds in data, strategy, and technology - laying the groundwork for rapid, responsible innovation.',
    img: {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=480&q=80',
      alt: 'Team planning vision',
      size: '480x270',
    }
  },
  {
    year: '2023',
    title: '2. Breakthrough Growth',
    description: 'AI-powered pilots deliver measurable impact at scale. Inova’s teams partner with leading enterprises, delivering tangible ROI and proof-of-value through innovative solutions and transparent partnerships.',
    img: {
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=480&q=80',
      alt: 'Data-driven growth',
      size: '480x270',
    }
  },
  {
    year: '2024',
    title: '3. Industry Leadership',
    description: 'Named “Emerging Leader in Enterprise Transformation” by Industry Week. Developed and launched the Inova AI Stack, accelerating client adoption and collaboration with leading tech providers.',
    img: {
      url: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=480&q=80',
      alt: 'Team of professionals collaborating with computers in a modern office',
      size: '480x270'
    }
  },
  {
    year: '2025',
    title: '4. Innovation Frontier',
    description: 'Launched our Innovation Lab and AI-powered transformation platform. Today, we serve 500+ enterprises globally, blending human expertise and data to create positive breakthroughs at scale.',
    img: {
      url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=480&q=80',
      alt: 'Innovation team working',
      size: '480x270'
    }
  }
]

const TeamJourneySection = () => (
  <section className="relative py-24 bg-backgroundDark overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading text-center mb-12"
      >
        <span className="text-transparent bg-clip-text bg-accentGradient">
          Our Journey of Innovation
        </span>
      </motion.h2>
      <p className="text-center text-textSecondary text-lg max-w-2xl mx-auto mb-14">
        From founding vision to industry leadership - see how we evolved by blending business insight with transformative innovation.
      </p>

      <div className="relative flex flex-col gap-12">
        {milestones.map((milestone, idx) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className={`flex flex-col md:flex-row items-center md:items-start md:gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline marker and connector */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start w-28 md:w-32 mb-4 md:mb-0 relative">
              <div className="bg-accentPurple text-white font-bold rounded-full w-16 h-16 flex items-center justify-center text-xl mb-2 shadow-lg z-10">
                {milestone.year}
              </div>
              {/* Timeline vertical line: always show except after the last milestone */}
              {idx < milestones.length && (
                <div className="hidden md:block absolute top-[64px] left-1/2 transform -translate-x-1/2 w-1 h-28 bg-accentPurple/30 rounded-full z-0 opacity-0.5"></div>
              )}
            </div>
            {/* Content Card */}
            <div className="surface-card rounded-2xl border border-borderSubtle shadow-lg px-8 py-8 flex-1 flex flex-col md:flex-row items-center gap-6">
              <img
                src={milestone.img.url}
                alt={milestone.img.alt}
                className="rounded-xl w-[480px] h-[270px] object-cover shadow-md"
                width={480}
                height={270}
                style={{ minWidth: 240 }}
              />
              <div>
                <div className="font-jakarta font-semibold text-xl text-textPrimary mb-2">
                  {milestone.title}
                </div>
                <div className="text-textSecondary text-base">
                  {milestone.description}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default TeamJourneySection
