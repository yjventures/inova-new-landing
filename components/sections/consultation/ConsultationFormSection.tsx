'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const calendlyUrl =
  "https://calendly.com/youssefjalloul/inova-ai-solutions?background_color=1a1a1a&text_color=ffffff&primary_color=004fc9"

const ConsultationFormSection = () => {
  const calendlyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window && !document.getElementById("calendly-widget-script")) {
      const script = document.createElement("script")
      script.id = "calendly-widget-script"
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      // Responsive centering for mobile; keep original margin only on md+
      className="surface-card p-8 border border-borderSubtle max-w-md mx-auto md:-ms-8 rounded-2xl shadow-xl"
    >
      <div className="mb-6">
        <h2 className="font-jakarta font-bold text-xl text-textPrimary mb-2">
          Book Your Consultation
        </h2>
        <p className="text-textSecondary text-sm">
          Instantly schedule a 1:1 session with our AI specialists.<br/>
          (No obligation, just insights)
        </p>
      </div>
      {/* Calendly Widget */}
      <div className="w-full flex justify-center items-center">
        <div
          ref={calendlyRef}
          className="calendly-inline-widget w-full"
          data-url={calendlyUrl}
          style={{ minWidth: 320, height: 700, maxWidth: 400 }}
        />
      </div>
      {/* Trust indicators */}
      <div className="text-center text-xs text-textSecondary pt-4 border-t border-borderSubtle mt-6">
        <p>🔒 Your information is secure and will never be shared</p>
      </div>
    </motion.div>
  )
}

export default ConsultationFormSection
