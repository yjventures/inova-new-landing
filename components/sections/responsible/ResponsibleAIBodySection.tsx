'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Globe, Users } from 'lucide-react'

const principles = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-accentGradient" />,
    title: "Transparency & Fairness",
    desc: "We make AI decisions explainable and auditable, using unbiased data and open model monitoring at every stage."
  },
  {
    icon: <Users className="h-10 w-10 text-blue-400" />,
    title: "Human-Centric Design",
    desc: "We prioritize the people who use, are impacted by, and govern our AI - privacy, inclusivity, and well-being come first."
  },
  {
    icon: <Globe className="h-10 w-10 text-accentPurple" />,
    title: "Sustainable Impact",
    desc: "AI must benefit society and the planet, not just the bottom line. We build for safety, compliance, and long-term value."
  }
]

const productBlocks = [
  {
    name: "Inova CHAT",
    icon: "/images/icons/chat_logo.png",
    desc: "Conversational AI with full audit trails, data privacy, and bias detection - empowering teams while protecting users."
  },
  {
    name: "BLDR Platform",
    icon: "/images/icons/bldr_logo.png",
    desc: "No-code AI creation platform with built-in governance, user consent, and monitoring for responsible deployment at scale."
  },
  {
    name: "Lens Suite",
    icon: "/images/icons/lens_logo.png",
    desc: "From labeling to lifecycle management, our DataOps tools keep human oversight at the core of your AI pipelines."
  }
]

const ResponsibleAIBodySection = () => (
  <section className="relative py-24 bg-backgroundDark">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Responsible AI Principles */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-heading text-center mb-8"
      >
        <span className="text-transparent bg-clip-text bg-accentGradient">
          Our Principles
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-textSecondary text-lg text-center max-w-3xl mx-auto mb-14"
      >
        Every Inova product, platform, and partnership is built on a foundation of transparency, accountability, and lasting benefit - for business and for society.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        {principles.map(({ icon, title, desc }) => (
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

      {/* Product Blocks */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.13 }}
        className="section-heading text-center mb-8"
      >
        <span className="text-transparent bg-clip-text bg-accentGradient">
          Responsible AI in Action
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.14 }}
        className="text-textSecondary text-lg text-center max-w-3xl mx-auto mb-14"
      >
        Our platforms make ethical, trustworthy AI practical. Here’s how Inova delivers on our principles:
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {productBlocks.map(({ name, icon, desc }) => (
          <div
            key={name}
            className="surface-card rounded-2xl px-7 py-9 text-center border border-accentPurple/40 shadow-sm hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="mb-5 flex items-center justify-center">
              <img src={icon} alt={name + " icon"} className="w-14 h-14 object-contain rounded-full border border-accentPurple/30 bg-backgroundDark" />
            </div>
            <div className="font-jakarta font-bold text-lg text-accentGradient mb-2">{name}</div>
            <div className="text-textSecondary text-base">{desc}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)

export default ResponsibleAIBodySection
