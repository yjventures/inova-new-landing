'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, AlertCircle, Loader } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  company: string
  projectInterest: string
  intendedUse: string
  github: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const DeveloperConnectForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectInterest: '',
    intendedUse: '',
    github: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.projectInterest.trim()) newErrors.projectInterest = 'Please tell us what you want to build or explore'
    if (!formData.intendedUse.trim()) newErrors.intendedUse = 'Please share your intended use case or integration idea'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1800))
      // Here you would send the data to your backend
      setIsSubmitted(true)
    } catch (error) {
      setErrors({ submit: 'An error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-20 bg-backgroundDark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="surface-card p-8 text-center border border-borderSubtle"
          >
            <div className="w-16 h-16 bg-systemFeedback-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-systemFeedback-success" />
            </div>
            <h2 className="font-jakarta font-bold text-2xl text-textPrimary mb-4">
              Thank you for reaching out!
            </h2>
            <p className="text-textSecondary mb-8">
              Our developer relations team will get in touch soon to help you access our APIs, starter kits, or community resources.
            </p>
            <div className="text-textSecondary text-sm">
              <p>What happens next:</p>
              <ul className="mt-4 space-y-2 text-left">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accentPurple rounded-full mr-3"></div>
                  We’ll review your project details and follow up by email
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accentPurple rounded-full mr-3"></div>
                  Get early access to our developer tools and updates
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accentPurple rounded-full mr-3"></div>
                  Option to join our open source beta or Slack group
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-backgroundDark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="surface-card p-8 border border-borderSubtle"
        >
          <h2 className="font-jakarta font-bold text-2xl text-textPrimary mb-8 text-center">
            Connect with the Inova Dev Team Today!
          </h2>
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
                className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accentPurple ${errors.name ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'}`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accentPurple ${errors.email ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'}`}
                placeholder="you@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.email}
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
                className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accentPurple ${errors.company ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'}`}
                placeholder="Your company or organization"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.company}
                </p>
              )}
            </div>
            {/* Project/Interest */}
            <div>
              <label htmlFor="projectInterest" className="block text-sm font-medium text-textPrimary mb-2">
                Project or Interest *
              </label>
              <input
                type="text"
                id="projectInterest"
                name="projectInterest"
                value={formData.projectInterest}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accentPurple ${errors.projectInterest ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'}`}
                placeholder="What do you want to build or explore?"
              />
              {errors.projectInterest && (
                <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.projectInterest}
                </p>
              )}
            </div>
            {/* Intended Use */}
            <div>
              <label htmlFor="intendedUse" className="block text-sm font-medium text-textPrimary mb-2">
                Intended Use Case *
              </label>
              <input
                type="text"
                id="intendedUse"
                name="intendedUse"
                value={formData.intendedUse}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accentPurple ${errors.intendedUse ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'}`}
                placeholder="Describe your intended integration/use case"
              />
              {errors.intendedUse && (
                <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.intendedUse}
                </p>
              )}
            </div>
            {/* Github/Gitlab */}
            <div>
              <label htmlFor="github" className="block text-sm font-medium text-textPrimary mb-2">
                GitHub/GitLab (optional)
              </label>
              <input
                type="url"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-backgroundDark border border-borderSubtle rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accentPurple hover:border-accentPurple/50"
                placeholder="https://github.com/yourhandle"
              />
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-textPrimary mb-2">
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-backgroundDark border border-borderSubtle rounded-lg text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-accentPurple hover:border-accentPurple/50 resize-vertical"
                placeholder="Anything else you'd like to share?"
              />
            </div>
            {/* Submit Button */}
            <div className="pt-4">
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
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
              {errors.submit && (
                <p className="mt-3 text-sm text-systemFeedback-error text-center flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.submit}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default DeveloperConnectForm
