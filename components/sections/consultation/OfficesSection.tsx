'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'

const OfficesSection = () => {
  const offices = [
    {
      location: "Sydney, Australia",
      address: "123 Tech Street, Sydney, NSW 2000",
      email: "sydney@inovasolution.ai",
      phone: "+61 49 331 0 331",
      timezone: "AEDT (UTC+11)"
    },
    {
      location: "Dubai, UAE", 
      address: "456 Innovation Ave, Dubai Internet City",
      email: "dubai@inovasolution.ai",
      phone: "+971 54 220 29 77",
      timezone: "GST (UTC+4)"
    }
  ]

  return (
    <section id="offices" className="py-16 bg-backgroundDark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-jakarta font-bold text-h2 text-textPrimary mb-6">
            Or Contact Us{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Directly
            </span>
          </h2>
          <p className="text-lg text-textSecondary">
            Reach out to our regional offices for immediate assistance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3 }
              }}
              className="surface-card p-6 border border-borderSubtle hover:border-accentPurple/50 transition-all duration-300 group"
            >
              {/* Office Icon */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accentPurple/20 rounded-xl flex items-center justify-center mr-4 group-hover:bg-accentPurple/30 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-accentPurple" />
                </div>
                <div>
                  <h3 className="font-jakarta font-bold text-xl text-textPrimary group-hover:text-accentPurple transition-colors duration-300">
                    {office.location}
                  </h3>
                  <p className="text-textSecondary text-sm">{office.timezone}</p>
                </div>
              </div>

              {/* Office Details */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-textSecondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-textPrimary font-medium">Address</p>
                    <p className="text-textSecondary text-sm">{office.address}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-textSecondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-textPrimary font-medium">Email</p>
                    <a 
                      href={`mailto:${office.email}`}
                      className="text-accentPurple hover:text-white transition-colors duration-200 text-sm"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-textSecondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-textPrimary font-medium">Phone</p>
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-accentPurple hover:text-white transition-colors duration-200 text-sm"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-6 pt-6 border-t border-borderSubtle">
                <h4 className="text-textPrimary font-medium mb-2">Business Hours</h4>
                <div className="text-textSecondary text-sm space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Weekend: Emergency support available</p>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="w-full h-full bg-accentGradient rounded-full blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="surface-card p-6 border border-borderSubtle max-w-2xl mx-auto">
            <h4 className="font-jakarta font-semibold text-lg text-textPrimary mb-4">
              24/7 Support Available
            </h4>
            <p className="text-textSecondary mb-4">
              For urgent technical support or critical issues, our global support team is available around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:team@inovasolution.ai"
                className="text-accentPurple hover:text-white transition-colors duration-200 font-medium"
              >
                support@inovasolution.ai
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OfficesSection
