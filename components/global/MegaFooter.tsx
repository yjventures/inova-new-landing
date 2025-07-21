'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const MegaFooter = () => {
  const footerColumns = [
    {
      title: "Company",
      links: [
        { text: "Why Inova?", href: "/why-inova" },
        { text: "Our Team", href: "/our-team" },
        { text: "Resources", href: "/resources" },
        { text: "Careers", href: "/careers" }
      ]
    },
    {
      title: "Platform",
      links: [
        { text: "BLDR Platform", href: "/bldr-platform" },
        { text: "Developer Access", href: "/bldr-platform#developer-access" },
        { text: "Security", href: "/bldr-platform#security" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { text: "By Industry", href: "/solutions-by-industry" },
        { text: "Healthcare", href: "/solutions-by-industry#healthcare" },
        { text: "Finance", href: "/solutions-by-industry#financial-sector" },
        { text: "Ecommerce", href: "/solutions-by-industry#ecommerce" }
      ]
    },
    {
      title: "Connect",
      links: [
        { text: "Book a Consultation", href: "/book-a-consultation" },
        { text: "Partner With Inova", href: "/partner-with-inova" },
        { text: "Contact Us", href: "/book-a-consultation#offices" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "https://au.linkedin.com/company/inova-ai-solutions", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "YouTube", href: "#", icon: Youtube }
  ]

  return (
    <footer className="bg-backgroundDark border-t border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-jakarta font-semibold text-lg text-textPrimary mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-textSecondary hover:text-accentPurple transition-colors duration-200"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-borderSubtle pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Logo and Tagline */}
            <div className="flex flex-col space-y-4">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/inova-logo-white.png"
                  alt="Inova AI Solutions"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-textSecondary italic text-sm">
                "AI, Architected for Enterprise"
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <h4 className="font-jakarta font-semibold text-textPrimary mb-3">
                Contact Information
              </h4>
              <div className="space-y-2">
                <div className="flex items-center text-textSecondary">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:contact@inova.ai" className="hover:text-accentPurple transition-colors">
                    contact@inova.ai
                  </a>
                </div>
                <div className="flex items-center text-textSecondary">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+15551234567" className="hover:text-accentPurple transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center text-textSecondary">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Sydney & Dubai</span>
                </div>
              </div>
            </div>

            {/* Social Links and Legal */}
            <div className="space-y-4">
              {/* Social Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-surfaceCard hover:bg-accentPurple text-textSecondary hover:text-white transition-all duration-200"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>

              {/* Legal Links */}
              <div className="space-y-2">
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link 
                    href="/privacy-policy" 
                    className="text-textSecondary hover:text-accentPurple transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/terms" 
                    className="text-textSecondary hover:text-accentPurple transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </div>
                <p className="text-textSecondary text-sm">
                  © 2025 Inova AI Solutions LTD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default MegaFooter
