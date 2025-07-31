'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface IndustrySectionProps {
  id: string
  name: string
  h2: string
  description: string
  keyFeatures: string[]
  cta: {
    text: string
    href: string
  }
  visual: {
    src: string
    alt: string
  }
}

const IndustrySection: React.FC<IndustrySectionProps> = ({
  id,
  name,
  h2,
  description,
  keyFeatures,
  cta,
  visual
}) => {
  return (
    <section 
      id={id} 
      className="py-20 bg-backgroundDark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 surface-card rounded-full text-accentPurple text-sm font-medium mb-4"
              >
                {name}
              </motion.div>
              
              <h2 className="section-heading mb-6">
                {h2}
              </h2>
              
              <p className="text-lg text-textSecondary leading-relaxed">
                {description}
              </p>
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-jakarta font-semibold text-xl text-textPrimary mb-4">
                Key Features
              </h3>
              <div className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-systemFeedback-success rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <span className="text-textPrimary">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="gradient" asChild>
                <Link href={cta.href} className="inline-flex items-center space-x-2">
                  <span>{cta.text}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-accentPurple/20 rounded-3xl blur-3xl transform scale-75"></div>
              
              {/* Main image container */}
              <div className="relative surface-card rounded-3xl p-8 border border-borderSubtle overflow-hidden">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay with animated elements */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accentPurple/20 to-transparent">
                    {/* Animated data points */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-accentPurple rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.7,
                          ease: "easeInOut"
                        }}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Metrics overlay */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="font-jakarta font-bold text-2xl text-textPrimary">98%</div>
                    <div className="text-textSecondary text-sm">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="font-jakarta font-bold text-2xl text-textPrimary">40%</div>
                    <div className="text-textSecondary text-sm">Time Saved</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default IndustrySection
