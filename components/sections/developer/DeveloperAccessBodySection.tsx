'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2, GitBranch, Globe, Wrench, ShieldCheck } from 'lucide-react'

const devProducts = [
  {
    icon: <Code2 className="h-8 w-8 text-accentGradient" />,
    title: 'Core APIs',
    desc: 'Early access to REST & GraphQL endpoints for LLMs, automation, analytics, and more.'
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-400" />,
    title: 'Sandbox Environments',
    desc: 'Prototype and validate integrations on our cloud or with local Docker, risk-free.'
  },
  {
    icon: <GitBranch className="h-8 w-8 text-accentPurple" />,
    title: 'Open Source Modules',
    desc: 'MIT-licensed starter kits, data connectors, and React components for rapid dev.'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accentGradient" />,
    title: 'Secure Integration',
    desc: 'OAuth2-ready, strong permissioning, and compliance standards out of the box.'
  },
  {
    icon: <Wrench className="h-8 w-8 text-accentPurple" />,
    title: 'Dev Community',
    desc: 'Get feedback, join hackathons, and shape our roadmap - by and for engineers.'
  }
]

const DeveloperAccessBodySection = () => {
  return (
    <section className="relative py-24 bg-backgroundDark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Grid */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading text-center mb-8"
        >
          <span className="text-transparent bg-clip-text bg-accentGradient">
            Build with Us: Let's Make Something Epic
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-textSecondary text-lg text-center max-w-3xl mx-auto mb-14"
        >
          Inova empowers builders beyond APIs – we equip developers with robust tools, 
          open-source modules, and collaborative support to help you create, customize, and scale world-class AI solutions.
        </motion.p>

        {/* Top 3 blocks */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-0">
          {devProducts.slice(0, 3).map(({ icon, title, desc }) => (
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
          {devProducts.slice(3).map(({ icon, title, desc }) => (
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
    </section>
  )
}

export default DeveloperAccessBodySection
