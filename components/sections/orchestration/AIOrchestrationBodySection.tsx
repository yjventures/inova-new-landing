'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Share2, Cpu, Shuffle, Eye, Settings2, Signal } from 'lucide-react'

const orchestrationPhases = [
  {
    icon: <Share2 className="h-7 w-7 text-accentGradient" />,
    label: "Connect Everything",
    desc: "Integrate models, data sources, APIs, and business logic into a single AI backbone."
  },
  {
    icon: <Cpu className="h-7 w-7 text-accentPurple" />,
    label: "Orchestrate Intelligence",
    desc: "Coordinate workflows - data in, decisions out - with scalable automation."
  },
  {
    icon: <Shuffle className="h-7 w-7 text-blue-400" />,
    label: "Automate at Scale",
    desc: "Deploy, trigger, and manage actions across systems and teams with precision."
  },
  {
    icon: <Eye className="h-7 w-7 text-accentGradient" />,
    label: "Monitor & Adapt",
    desc: "Real-time observability, continuous learning, and closed-loop feedback."
  }
]

const valueBlocks = [
  {
    icon: <Settings2 className="h-7 w-7 text-accentPurple" />,
    title: "End-to-End Orchestration",
    desc: "No more silos - harmonize models, microservices, and data pipelines from one control plane."
  },
  {
    icon: <Signal className="h-7 w-7 text-blue-400" />,
    title: "Adaptive Workflows",
    desc: "Trigger intelligent actions based on data, business events, or model outputs."
  },
  {
    icon: <Cpu className="h-7 w-7 text-accentGradient" />,
    title: "Low-Code/No-Code Ready",
    desc: "Empower business teams to design and launch AI flows - with IT governance and guardrails."
  }
]

const AIOrchestrationBodySection = () => {
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
            AI Orchestration, Unlocked!        
        </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-textSecondary text-lg text-center max-w-3xl mx-auto mb-14">
           Inova seamlessly connects all your AI models, data, and processes - 
           delivering unified orchestration and effortless automation across your business.
            </motion.p>
        {/* Workflow Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.13 }}
          className="flex flex-col md:flex-row md:items-stretch gap-8 justify-between mb-20"
        >
        </motion.div>

        {/* Value Blocks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {valueBlocks.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="surface-card rounded-2xl px-8 py-10 text-center border border-borderSubtle shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-4 flex items-center justify-center">{icon}</div>
              <h3 className="font-jakarta font-semibold text-xl text-textPrimary mb-3">{title}</h3>
              <p className="text-textSecondary text-base">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AIOrchestrationBodySection
