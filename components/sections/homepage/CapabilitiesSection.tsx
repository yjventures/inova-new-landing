'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Settings, Layers } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "AI Transformation (AIX)",
      description: "Strategic implementation to reshape your business with AI.",
      cta: { text: "Click to Learn More", href: "/ai-transformation" },
      icon: Lightbulb,
    },
    {
      title: "Custom AI Development",
      description: "Bespoke AI models and solutions tailored to your unique challenges.",
      cta: { text: "Click to Learn More", href: "/custom-ai" },
      icon: Settings,
    },
    {
      title: "BLDR Platform",
      description: "No-code AI agent creation, orchestration, and automation.",
      cta: { text: "Click to Learn More", href: "/bldr-platform" },
      icon: Layers,
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-backgroundDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-6">
            Our <span className="text-transparent bg-clip-text bg-accentGradient">Capabilities</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform how enterprises operate, innovate, and compete in the digital age.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon

            return (
              <Link
                key={index}
                href={capability.cta.href}
                className="group block"
                tabIndex={0}
                aria-label={capability.title + " (Click to learn more)"}
              >
                <motion.div
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <Card className="h-full border-borderSubtle hover:border-accentPurple/50 transition-all duration-300 relative overflow-hidden cursor-pointer focus:ring-2 focus:ring-accentPurple/60">
                    {/* Background gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accentPurple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <CardContent className="p-8 relative z-10">
                      {/* Icon */}
                      <div className="mb-6 relative">
                        <div className="w-16 h-16 surface-card rounded-xl flex items-center justify-center border border-borderSubtle group-hover:border-accentPurple/50 transition-all duration-300">
                          <motion.div
                            whileHover={{ 
                              rotate: 10,
                              scale: 1.1
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-accentPurple group-hover:text-white transition-colors duration-300"
                          >
                            <IconComponent className="h-8 w-8" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="font-jakarta font-bold text-xl text-textPrimary group-hover:text-accentPurple transition-colors duration-300">
                          {capability.title}
                        </h3>
                        <p className="text-textSecondary leading-relaxed">
                          {capability.description}
                        </p>
                      </div>
                    </CardContent>

                    <CardFooter className="p-8 pt-0">
                      <Button
                        variant="ghost"
                        className="group/btn w-full justify-between p-0 h-auto text-accentPurple hover:text-white font-semibold pointer-events-none"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <span>{capability.cta.text}</span>
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </Link>
            )
          })}
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-textSecondary mb-6">
            Ready to explore how our capabilities can transform your business?
          </p>
          <Button variant="purple-border" asChild>
            <Link href="/solutions-by-industry">
              View All Solutions
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
