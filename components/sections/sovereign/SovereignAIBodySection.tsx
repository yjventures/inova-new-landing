'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Eye, ServerCog, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: <Eye className="h-8 w-8 text-accentPurple" />,
    title: 'Transparent & Explainable AI',
    desc: 'Trace every decision - inspect, audit, and justify outputs for compliance and peace of mind.',
  },
  {
    icon: <ServerCog className="h-8 w-8 text-blue-400" />,
    title: 'Customizable, Private Deployment',
    desc: 'Run AI models fully on-premises or in your secure private cloud. No external dependencies or hidden data flows.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accentGradient" />,
    title: 'Compliant by Default',
    desc: 'Meets the world’s toughest data residency, privacy, and industry standards - always audit-ready.',
  },
]

const SovereignAIBodySection = () => {
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
            What Makes Inova’s Sovereign AI Different?
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-textSecondary text-lg text-center max-w-3xl mx-auto mb-14"
        >
          Designed for governments, enterprises, and any organization where trust, transparency, and control are paramount - Sovereign AI puts you in command of every facet of your AI, from infrastructure to output.
        </motion.p>
        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map(({ icon, title, desc }) => (
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
        {/* Architecture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#19192a] rounded-2xl px-8 py-12 mb-20 border border-borderSubtle"
        >
          <h3 className="font-jakarta font-semibold text-2xl text-textPrimary mb-4">
            Architecture for the Age of AI Sovereignty
          </h3>
          <ul className="list-disc list-inside text-textSecondary space-y-2 text-base">
            <li>
              <b className="text-textPrimary">On-Premises & Private Cloud Ready:</b> Flexible deployment options to meet your IT and compliance needs.
            </li>
            <li>
              <b className="text-textPrimary">Custom Access & Audit Controls:</b> Define who sees what, when-plus detailed logging for regulatory confidence.
            </li>
            <li>
              <b className="text-textPrimary">Model & Data Lineage:</b> Full visibility into every input, process, and output.
            </li>
            <li>
              <b className="text-textPrimary">Zero Data Sharing:</b> No vendor lock-in, no external calls, no compromise.
            </li>
          </ul>
        </motion.div>
        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-accentPurple/10 px-6 py-3 rounded-full text-accentPurple font-semibold text-base">
            The choice for organizations where control, compliance, and AI excellence are non-negotiable.
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SovereignAIBodySection
