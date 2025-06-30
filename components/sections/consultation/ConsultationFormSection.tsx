'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, AlertCircle, Loader, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface FormData {
  name: string
  workEmail: string
  company: string
  primaryChallenge: string
}

interface FormErrors {
  [key: string]: string
}

const ConsultationFormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    workEmail: '',
    company: '',
    primaryChallenge: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    if (!formData.primaryChallenge.trim()) {
      newErrors.primaryChallenge = 'Please describe your primary challenge'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real implementation, you would send the data to your backend
      console.log('Consultation request submitted:', formData)
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'An error occurred while booking your consultation. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="surface-card p-8 border border-borderSubtle max-w-md mx-auto"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-systemFeedback-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-systemFeedback-success" />
          </div>
          <h3 className="font-jakarta font-bold text-xl text-textPrimary mb-4">
            Consultation Booked!
          </h3>
          <p className="text-textSecondary mb-6">
            Thank you! Our team will be in touch soon to schedule your consultation.
          </p>
          <div className="text-left space-y-3 text-sm text-textSecondary">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-accentPurple" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-accentPurple" />
              <span>Tailored AI strategy discussion</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-accentPurple" />
              <span>Custom solution recommendations</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="surface-card p-8 border border-borderSubtle max-w-md mx-auto"
    >
      <div className="mb-6">
        <h2 className="font-jakarta font-bold text-xl text-textPrimary mb-2">
          Book Your Consultation
        </h2>
        <p className="text-textSecondary text-sm">
          Get personalized AI guidance from our experts
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple ${
              errors.name ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.name}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div>
          <label htmlFor="workEmail" className="block text-sm font-medium text-textPrimary mb-2">
            Work Email *
          </label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple ${
              errors.workEmail ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
            }`}
            placeholder="your.email@company.com"
          />
          {errors.workEmail && (
            <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.workEmail}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-textPrimary mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple ${
              errors.company ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
            }`}
            placeholder="Your company name"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.company}
            </p>
          )}
        </div>

        {/* Primary Challenge */}
        <div>
          <label htmlFor="primaryChallenge" className="block text-sm font-medium text-textPrimary mb-2">
            Primary Challenge *
          </label>
          <textarea
            id="primaryChallenge"
            name="primaryChallenge"
            value={formData.primaryChallenge}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple resize-vertical ${
              errors.primaryChallenge ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
            }`}
            placeholder="Describe your main business challenge or AI opportunity..."
          />
          {errors.primaryChallenge && (
            <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.primaryChallenge}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="gradient"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <Loader className="h-5 w-5 mr-2 animate-spin" />
                Booking Consultation...
              </>
            ) : (
              <>
                <Calendar className="h-5 w-5 mr-2" />
                Book My Consultation
              </>
            )}
          </Button>
          
          {errors.submit && (
            <p className="mt-3 text-sm text-systemFeedback-error text-center flex items-center justify-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.submit}
            </p>
          )}
        </div>

        {/* Trust indicators */}
        <div className="text-center text-xs text-textSecondary pt-4 border-t border-borderSubtle">
          <p>🔒 Your information is secure and will never be shared</p>
        </div>
      </form>
    </motion.div>
  )
}

export default ConsultationFormSection
