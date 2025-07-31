'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Users, Code2, MessageCircle, Heart } from 'lucide-react'

const cultureBlocks = [
  {
    icon: <Rocket className="h-8 w-8 text-accentGradient" />,
    title: "Innovation at Heart",
    desc: "We experiment, iterate, and invent together: failure is part of the journey!"
  },
  {
    icon: <Users className="h-8 w-8 text-blue-400" />,
    title: "Diverse Minds",
    desc: "Our global team comes from many backgrounds. Collaboration and respect are core."
  },
  {
    icon: <Code2 className="h-8 w-8 text-accentPurple" />,
    title: "Built by Builders",
    desc: "Engineers, researchers, and creatives solve real problems, not just ship code."
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-accentGradient" />,
    title: "Transparent Communication",
    desc: "We believe in open dialogue, real feedback, and collective decision-making."
  },
  {
    icon: <Heart className="h-8 w-8 text-blue-400" />,
    title: "Balance & Wellbeing",
    desc: "Your health and happiness matter - flexible hours, time off, and personal growth."
  }
]

const CareersBodySection = () => {
  return (
    <section className="relative py-24 bg-backgroundDark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Culture Section */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-8"
        >
          <span className="text-transparent bg-clip-text bg-accentGradient">
            Life at Inova
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-textSecondary text-lg text-center max-w-3xl mx-auto mb-14"
        >
          We're more than a workplace - we're a launchpad for big ideas, growth, and belonging. Here's what it's like to be part of Inova.
        </motion.p>
        {/* Culture Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          {/* MOBILE: All blocks in a single column */}
          <div className="flex flex-col gap-6 md:hidden">
            {cultureBlocks.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="surface-card rounded-2xl px-6 py-8 text-center border border-borderSubtle shadow-sm hover:shadow-lg transition flex flex-col items-center"
              >
                <div className="mb-4">{icon}</div>
                <div className="font-jakarta font-bold text-lg text-textPrimary mb-2">{title}</div>
                <div className="text-textSecondary text-sm">{desc}</div>
              </div>
            ))}
          </div>
          {/* DESKTOP/TABLET: 3+2 block layout (unchanged) */}
          <div className="hidden md:block">
            {/* Top 3 blocks in a row */}
            <div className="flex justify-center gap-8 mb-0">
              {cultureBlocks.slice(0, 3).map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="surface-card rounded-2xl px-6 py-8 text-center border border-borderSubtle shadow-sm hover:shadow-lg transition flex flex-col items-center w-[350px] md:w-[370px] min-h-[230px] flex-1"
                >
                  <div className="mb-4">{icon}</div>
                  <div className="font-jakarta font-bold text-lg text-textPrimary mb-2">{title}</div>
                  <div className="text-textSecondary text-sm">{desc}</div>
                </div>
              ))}
            </div>
            {/* Bottom 2 blocks, centered */}
            <div className="flex justify-center gap-8 mt-8 mb-20">
              {cultureBlocks.slice(3).map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="surface-card rounded-2xl px-6 py-8 text-center border border-borderSubtle shadow-sm hover:shadow-lg transition flex flex-col items-center w-[300px] md:w-[310px] min-h-[230px]"
                >
                  <div className="mb-4">{icon}</div>
                  <div className="font-jakarta font-bold text-lg text-textPrimary mb-2">{title}</div>
                  <div className="text-textSecondary text-sm">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* How to Apply */}
        <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto relative mt-8 md:mt-0"
          >
          {/* Gradient background at 50% opacity */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(90deg, #6C55F2 0%, #1bcff2 100%)',
              opacity: 0.5,
              zIndex: 0
            }}
          />
          {/* Content layer */}
          <div className="relative z-10 rounded-2xl px-8 py-10 text-center shadow-lg">
            <h3 className="font-jakarta font-semibold text-2xl text-white mb-3">
              How to Apply
            </h3>
            <div className="text-white text-base mb-4">
              Interested in joining? Send your CV, GitHub, or a note about your work to
              <span className="font-semibold ml-1 underline">
                <a href="mailto:team@inovasolution.ai" className="hover:text-blue-200 transition-colors">
                  team@inovasolution.ai
                </a>
              </span>
              . We review every application personally!
            </div>
            <div className="mt-2 text-xs text-white opacity-80">
              We value passion, creativity, and commitment to responsible AI above everything else.
            </div>
            <div className="mt-6 flex justify-center">
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CareersBodySection
