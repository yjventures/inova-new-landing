'use client'


import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { Rocket, Users, Star } from 'lucide-react' // Choose any icons you want

const values = [
  {
    icon: <Rocket className="w-14 h-14 text-white" />,
    bg: 'bg-gradient-to-br from-accentPurple via-blue-500 to-accentGradient',
    title: "Innovation",
    desc: "We challenge convention, experiment boldly, and learn from every iteration - creating value through breakthrough ideas."
  },
  {
    icon: <Users className="w-14 h-14 text-white" />,
    bg: 'bg-gradient-to-br from-blue-400 via-accentGradient to-accentPurple',
    title: "Collaboration",
    desc: "Our strength is our diversity. We build together with respect, open minds, and shared purpose, supporting each other's growth."
  },
  {
    icon: <Star className="w-14 h-14 text-white" />,
    bg: 'bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-400',
    title: "Excellence",
    desc: "We strive for mastery in every detail, delivering work that stands up to scrutiny and elevates our partners and our people."
  }
]

const TeamValueSection = () => (
  <section className="relative py-24 bg-backgroundDark">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading text-center mb-8"
      >
        <span className="text-transparent bg-clip-text bg-accentGradient">
          Values That Drive Excellence
        </span>
      </motion.h2>
      <p className="text-center text-textSecondary text-lg max-w-2xl mx-auto mb-16">
        Our values shape our work, our team, and the impact we deliver for our clients.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {values.map(({ icon, bg, title, desc }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="surface-card rounded-2xl px-8 py-12 border border-borderSubtle shadow-lg flex flex-col items-center text-center"
          >
            <div className={`mb-6 rounded-full ${bg} flex items-center justify-center w-20 h-20 shadow-md`}>
              {icon}
            </div>
            <div className="font-jakarta font-bold text-xl text-textPrimary mb-3">{title}</div>
            <div className="text-textSecondary text-base">{desc}</div>

            
          </motion.div>
        ))}
      </div>
      <div>
      <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto relative mt-16"
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
              Join Our Team
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
              <Button
                size="lg"
                asChild
                className="bg-white text-backgroundDark font-semibold border-none shadow hover:bg-gray-200 transition"
              >
                <Link href="/careers-with-inova/">
                  View Open Positions
                </Link>
              </Button>
              
            </div>
          </div>
        </motion.div>
        </div>
    </div>
  </section>
)

export default TeamValueSection
