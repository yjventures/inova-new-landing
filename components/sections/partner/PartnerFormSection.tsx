'use client'

import React from 'react'
import { motion } from 'framer-motion'

const calendlyUrl =
  'https://calendly.com/youssefjalloul/become-a-partner?background_color=1a1a1a&text_color=ffffff&primary_color=0009bf'

const PartnerFormSection = () => (
  <section id="partner-form" className="py-20 bg-backgroundDark">
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="surface-card p-8 border border-borderSubtle rounded-2xl shadow-lg"
      >
        <h2 className="font-jakarta font-bold text-2xl text-textPrimary mb-8 text-center">
          Become an Inova Partner
        </h2>
        <p className="text-textSecondary text-lg text-center max-w-2xl mx-auto mb-10">
          Book a 1:1 call with our partnership team to discover how we can collaborate and unlock new growth together.
        </p>

        {/* Calendly Embed */}
        <div className="w-full">
          <iframe
            src={calendlyUrl}
            title="Book a Partnership Call with Inova"
            className="w-full rounded-xl border-0"
            style={{
              minHeight: 700,
              background: "#1a1a1a"
            }}
            frameBorder={0}
          ></iframe>
        </div>

        <div className="text-xs text-textSecondary text-center pt-4 opacity-80">
          Your information is secure and will never be shared.
        </div>
      </motion.div>
    </div>
  </section>
)

export default PartnerFormSection


// 'use client'

// import React, { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Check, AlertCircle, Loader } from 'lucide-react'
// import { Button } from '@/components/ui/Button'

// interface FormData {
//   fullName: string
//   workEmail: string
//   companyName: string
//   companyWebsite: string
//   partnershipReason: string
//   organizationType: string
// }

// interface FormErrors {
//   [key: string]: string
// }

// const PartnerFormSection = () => {
//   const [formData, setFormData] = useState<FormData>({
//     fullName: '',
//     workEmail: '',
//     companyName: '',
//     companyWebsite: '',
//     partnershipReason: '',
//     organizationType: ''
//   })

//   const [errors, setErrors] = useState<FormErrors>({})
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const organizationTypes = [
//     'Consultancy',
//     'System Integrator', 
//     'Digital Agency',
//     'Other'
//   ]

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {}

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = 'Full name is required'
//     }

//     if (!formData.workEmail.trim()) {
//       newErrors.workEmail = 'Work email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
//       newErrors.workEmail = 'Please enter a valid email address'
//     }

//     if (!formData.companyName.trim()) {
//       newErrors.companyName = 'Company name is required'
//     }

//     if (formData.companyWebsite && !/^https?:\/\/.+/.test(formData.companyWebsite)) {
//       newErrors.companyWebsite = 'Please enter a valid URL (including http:// or https://)'
//     }

//     if (!formData.partnershipReason.trim()) {
//       newErrors.partnershipReason = 'Please tell us why you want to partner with Inova'
//     }

//     if (!formData.organizationType) {
//       newErrors.organizationType = 'Please select your organization type'
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({ ...prev, [name]: value }))
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }))
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     if (!validateForm()) {
//       return
//     }

//     setIsSubmitting(true)

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000))
      
//       // In a real implementation, you would send the data to your backend
//       console.log('Partnership application submitted:', formData)
      
//       setIsSubmitted(true)
//     } catch (error) {
//       console.error('Error submitting form:', error)
//       setErrors({ submit: 'An error occurred while submitting your application. Please try again.' })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (isSubmitted) {
//     return (
//       <section id="partner-form" className="py-20 bg-backgroundDark">
//         <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="surface-card p-8 text-center border border-borderSubtle"
//           >
//             <div className="w-16 h-16 bg-systemFeedback-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
//               <Check className="h-8 w-8 text-systemFeedback-success" />
//             </div>
//             <h2 className="font-jakarta font-bold text-2xl text-textPrimary mb-4">
//               Application Submitted Successfully!
//             </h2>
//             <p className="text-textSecondary mb-8">
//               Thank you for your interest in partnering with Inova! Our partnership team will review your application and be in touch soon.
//             </p>
//             <div className="text-textSecondary text-sm">
//               <p>What happens next:</p>
//               <ul className="mt-4 space-y-2 text-left">
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-accentPurple rounded-full mr-3"></div>
//                   Initial review within 2-3 business days
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-accentPurple rounded-full mr-3"></div>
//                   Partnership discovery call if there's a fit
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-2 h-2 bg-accentPurple rounded-full mr-3"></div>
//                   Formal partnership agreement and onboarding
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section id="partner-form" className="py-20 bg-backgroundDark">
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="surface-card p-8 border border-borderSubtle"
//         >
//           <h2 className="font-jakarta font-bold text-2xl text-textPrimary mb-8 text-center">
//             Become an Inova Partner
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullName" className="block text-sm font-medium text-textPrimary mb-2">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple ${
//                   errors.fullName ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
//                 }`}
//                 placeholder="Enter your full name"
//               />
//               {errors.fullName && (
//                 <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
//                   <AlertCircle className="h-4 w-4 mr-1" />
//                   {errors.fullName}
//                 </p>
//               )}
//             </div>

//             {/* Work Email */}
//             <div>
//               <label htmlFor="workEmail" className="block text-sm font-medium text-textPrimary mb-2">
//                 Work Email *
//               </label>
//               <input
//                 type="email"
//                 id="workEmail"
//                 name="workEmail"
//                 value={formData.workEmail}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple ${
//                   errors.workEmail ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
//                 }`}
//                 placeholder="your.email@company.com"
//               />
//               {errors.workEmail && (
//                 <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
//                   <AlertCircle className="h-4 w-4 mr-1" />
//                   {errors.workEmail}
//                 </p>
//               )}
//             </div>

//             {/* Company Name */}
//             <div>
//               <label htmlFor="companyName" className="block text-sm font-medium text-textPrimary mb-2">
//                 Company Name *
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple ${
//                   errors.companyName ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
//                 }`}
//                 placeholder="Your company name"
//               />
//               {errors.companyName && (
//                 <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
//                   <AlertCircle className="h-4 w-4 mr-1" />
//                   {errors.companyName}
//                 </p>
//               )}
//             </div>

//             {/* Company Website */}
//             <div>
//               <label htmlFor="companyWebsite" className="block text-sm font-medium text-textPrimary mb-2">
//                 Company Website
//               </label>
//               <input
//                 type="url"
//                 id="companyWebsite"
//                 name="companyWebsite"
//                 value={formData.companyWebsite}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple ${
//                   errors.companyWebsite ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
//                 }`}
//                 placeholder="https://www.yourcompany.com"
//               />
//               {errors.companyWebsite && (
//                 <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
//                   <AlertCircle className="h-4 w-4 mr-1" />
//                   {errors.companyWebsite}
//                 </p>
//               )}
//             </div>

//             {/* Organization Type */}
//             <div>
//               <label htmlFor="organizationType" className="block text-sm font-medium text-textPrimary mb-2">
//                 Organization Type *
//               </label>
//               <select
//                 id="organizationType"
//                 name="organizationType"
//                 value={formData.organizationType}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple ${
//                   errors.organizationType ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
//                 }`}
//               >
//                 <option value="">Select organization type</option>
//                 {organizationTypes.map((type) => (
//                   <option key={type} value={type}>
//                     {type}
//                   </option>
//                 ))}
//               </select>
//               {errors.organizationType && (
//                 <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
//                   <AlertCircle className="h-4 w-4 mr-1" />
//                   {errors.organizationType}
//                 </p>
//               )}
//             </div>

//             {/* Partnership Reason */}
//             <div>
//               <label htmlFor="partnershipReason" className="block text-sm font-medium text-textPrimary mb-2">
//                 Why do you want to partner with Inova? *
//               </label>
//               <textarea
//                 id="partnershipReason"
//                 name="partnershipReason"
//                 value={formData.partnershipReason}
//                 onChange={handleInputChange}
//                 rows={4}
//                 className={`w-full px-4 py-3 bg-backgroundDark border rounded-lg text-textPrimary placeholder-textSecondary transition-colors focus:outline-none focus:ring-2 focus:ring-accentPurple resize-vertical ${
//                   errors.partnershipReason ? 'border-systemFeedback-error' : 'border-borderSubtle hover:border-accentPurple/50'
//                 }`}
//                 placeholder="Tell us about your partnership goals, how you plan to integrate our solutions, and what value you can bring to the partnership..."
//               />
//               {errors.partnershipReason && (
//                 <p className="mt-1 text-sm text-systemFeedback-error flex items-center">
//                   <AlertCircle className="h-4 w-4 mr-1" />
//                   {errors.partnershipReason}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <div className="pt-4">
//               <Button
//                 type="submit"
//                 variant="gradient"
//                 size="lg"
//                 disabled={isSubmitting}
//                 className="w-full"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader className="h-5 w-5 mr-2 animate-spin" />
//                     Submitting Application...
//                   </>
//                 ) : (
//                   'Submit Application'
//                 )}
//               </Button>
              
//               {errors.submit && (
//                 <p className="mt-3 text-sm text-systemFeedback-error text-center flex items-center justify-center">
//                   <AlertCircle className="h-4 w-4 mr-1" />
//                   {errors.submit}
//                 </p>
//               )}
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default PartnerFormSection
