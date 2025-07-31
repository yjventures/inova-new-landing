'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])

  const navLinks = [
    { text: "Healthcare", href: "#healthcare", id: "healthcare" },
    { text: "Financial Sector", href: "#financial-sector", id: "financial-sector" },
    { text: "Telecom", href: "#telecom", id: "telecom" },
    { text: "Ecommerce", href: "#ecommerce", id: "ecommerce" },
    { text: "Education", href: "#education", id: "education" },
    { text: "Marketing & Agency", href: "#marketing", id: "marketing" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-scroll active button into view on mobile when section changes
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth >= 768) return // Only run on mobile/tablet

    const idx = navLinks.findIndex(link => link.id === activeSection)
    const btn = btnRefs.current[idx]
    if (btn && scrollContainerRef.current) {
      btn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }, [activeSection, navLinks])

  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    onSectionChange(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 150
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
      className={`fixed top-[65px] left-0 right-0 z-40 bg-backgroundDark/95 backdrop-blur-md border-b border-borderSubtle ${
        isSticky ? 'block' : 'hidden'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center py-4 mx-[5px] md:mx-0 overflow-x-auto scrollbar-none">
          <div
            className="flex space-x-1 surface-card rounded-full p-1 w-full md:w-auto overflow-x-auto scrollbar-none"
            style={{ minWidth: 0 }}
            ref={scrollContainerRef}
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                ref={el => {
                  btnRefs.current[index] = el
                }}
                onClick={e => handleClick(e, link.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
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
      {/* Hide scrollbars on mobile */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default StickySubNavigation
