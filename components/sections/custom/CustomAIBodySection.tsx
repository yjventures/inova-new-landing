'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BrainCog, Wrench, Zap, ServerCog, LockKeyhole, CloudLightning } from 'lucide-react'

// Infographic-style blocks: process, features, and benefits

const processBlocks = [
  {
    icon: <Wrench className="h-7 w-7 text-accentPurple" />,
    title: 'Discovery & Design',
    desc: 'Collaborative deep-dive into business goals, data assets, and success metrics.'
  },
  {
    icon: <BrainCog className="h-7 w-7 text-blue-400" />,
    title: 'Model Development',
    desc: 'Custom models - from LLMs to computer vision - tuned for your domain and challenges.'
  },
  {
    icon: <ServerCog className="h-7 w-7 text-accentGradient" />,
    title: 'Integration & Automation',
    desc: 'Seamless deployment in your stack, with process automation and API-first mindset.'
  },
  {
    icon: <LockKeyhole className="h-7 w-7 text-accentPurple" />,
    title: 'Testing & Compliance',
    desc: 'Enterprise-grade security, auditability, and regulatory alignment at every step.'
  },
  {
    icon: <Zap className="h-7 w-7 text-blue-400" />,
    title: 'Launch & Scale',
    desc: 'Ongoing support, monitoring, and iterative enhancement for lasting value.'
  }
]

const benefits = [
  {
    icon: <CloudLightning className="h-7 w-7 text-accentGradient" />,
    title: "Rapid Prototyping",
    desc: "Validate ideas fast, iterate, and move from PoC to production in weeks."
  },
  {
    icon: <Wrench className="h-7 w-7 text-blue-400" />,
    title: "Full-Stack Integration",
    desc: "We don’t just ship models - we deliver business-ready solutions."
  },
  {
    icon: <LockKeyhole className="h-7 w-7 text-accentPurple" />,
    title: "Built for Trust",
    desc: "Security, compliance, and explainability aren’t add-ons - they’re core."
  }
]

const CustomAIBodySection = () => {
  return (
    <section className="relative py-24 bg-backgroundDark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-10"
        >
      
        <span className="text-transparent bg-clip-text bg-accentGradient">
        Our Process: Custom AI, Delivered
        </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-textSecondary text-lg text-center max-w-3xl mx-auto mb-14"
        >
Inova goes beyond building AI - we craft custom AI systems tailored to your business, with end-to-end support, training, and seamless integration.        </motion.p>
           {/* Infographic process bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-stretch gap-8 justify-between mb-20"
        >
          {processBlocks.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="flex-1 bg-[#18182b] rounded-2xl border border-borderSubtle p-6 flex flex-col items-center text-center shadow-md relative"
            >
              <div className="mb-3">{icon}</div>
              <div className="font-jakarta font-semibold text-lg text-textPrimary mb-1">{title}</div>
              <div className="text-textSecondary text-sm">{desc}</div>
              {i < processBlocks.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <span className="inline-block w-10 h-1 bg-accentGradient opacity-50"></span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
        {/* Benefits Blocks */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {benefits.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="surface-card rounded-2xl px-8 py-10 text-center border border-borderSubtle shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4 flex items-center justify-center">{icon}</div>
              <h3 className="font-jakarta font-semibold text-xl text-textPrimary mb-3">{title}</h3>
              <p className="text-textSecondary text-base">{desc}</p>
            </div>
          ))}
        </motion.div> */}
        {/* Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="max-w-3xl mx-auto"
        >
        </motion.div>
      </div>
    </section>
  )
}

export default CustomAIBodySection
