'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const MinimalNavigation = () => {
  return (
    <nav className="bg-backgroundDark border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/inova-logo-white.png"
                alt="Inova AI Solutions"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </motion.div>

          {/* Optional: Small back link or contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:block"
          >
            <Link 
              href="/"
              className="text-textSecondary hover:text-accentPurple transition-colors duration-200 text-sm"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default MinimalNavigation
