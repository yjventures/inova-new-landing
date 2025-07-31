'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const ConsultationHeroSection = () => {
  const expectations = [
    "Personalized, confidential discussion",
    "No obligation - just insights", 
    "Guidance on AI strategy and integration"
  ]

  return (
        <section className="pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-28 bg-backgroundDark min-h-screen flex items-center">
        <div className="w-full ps-8 sm:ps-12 lg:ps-20 pe-4 sm:pe-6 lg:pe-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background shape */}
            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10">
              <div className="w-full h-full bg-accentPurple rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-jakarta font-bold text-h2 lg:text-5xl text-textPrimary mb-6 leading-tight"
              >
                Let's Begin the{' '}
                <span className="text-transparent bg-clip-text bg-accentGradient">
                  Conversation
                </span>
                .
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-textSecondary leading-relaxed mb-8"
              >
                Tell us about your challenge, and one of our enterprise AI specialists will schedule a private consultation.
              </motion.p>

              {/* Expectations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-6"
              >
                <h3 className="font-jakarta font-semibold text-xl text-textPrimary">
                  What to Expect
                </h3>
                
                <div className="space-y-4">
                  {expectations.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-6 w-6 text-systemFeedback-success flex-shrink-0" />
                      <span className="text-textPrimary">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enterprise Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 p-6 surface-card rounded-xl border border-borderSubtle"
              >
                <h4 className="font-jakarta font-semibold text-textPrimary mb-3">
                  Why Leading Enterprises Choose Inova
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-accentPurple">98%</div>
                    <div className="text-textSecondary">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="font-semibold text-accentPurple">40%</div>
                    <div className="text-textSecondary">Avg. Efficiency Gain</div>
                  </div>
                  <div>
                    <div className="font-semibold text-accentPurple">5min</div>
                    <div className="text-textSecondary">Setup Time</div>
                  </div>
                  <div>
                    <div className="font-semibold text-accentPurple">24/7</div>
                    <div className="text-textSecondary">AI Agent Support</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative blob */}
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
              <div className="w-full h-full bg-blue-400 rounded-full blur-2xl animate-pulse-glow"></div>
            </div>
          </motion.div>

          {/* Right Column - Calendly goes here */}
          <div className="lg:block hidden">
            {/* Embed Calendly or other form component here */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationHeroSection
