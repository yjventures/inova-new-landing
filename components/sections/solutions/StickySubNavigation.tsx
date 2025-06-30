'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface StickySubNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

const StickySubNavigation: React.FC<StickySubNavigationProps> = ({ 
  activeSection, 
  onSectionChange 
}) => {
  const [isSticky, setIsSticky] = useState(false)

  const navLinks = [
    { text: "Healthcare", href: "#healthcare", id: "healthcare" },
    { text: "Financial Sector", href: "#financial-sector", id: "financial-sector" },
    { text: "Telecom", href: "#telecom", id: "telecom" },
    { text: "Ecommerce", href: "#ecommerce", id: "ecommerce" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 400) // Adjust this value based on when you want it to stick
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    onSectionChange(sectionId)
    
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 120 // Account for sticky nav height
      const elementPosition = element.offsetTop
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isSticky ? 0 : -100, 
        opacity: isSticky ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-40 bg-backgroundDark/95 backdrop-blur-md border-b border-borderSubtle ${
        isSticky ? 'block' : 'hidden'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center py-4">
          <div className="flex space-x-1 surface-card rounded-full p-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={(e) => handleClick(e, link.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-accentPurple text-white'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-backgroundDark'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.text}
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </motion.div>
  )
}

export default StickySubNavigation
