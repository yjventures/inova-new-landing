'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MegaMenu } from './MegaMenu'

const Navigation = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { 
      label: 'Capabilities', 
      href: '#',
      hasMegaMenu: true,
      megaMenuType: 'capabilities'
    },
    { 
      label: 'Solutions', 
      href: '#',
      hasMegaMenu: true,
      megaMenuType: 'solutions'
    },
    { 
      label: 'BLDR Platform', 
      href: '/bldr-platform'
    },
    { 
      label: 'Why Inova', 
      href: '#',
      hasMegaMenu: true,
      megaMenuType: 'why-inova'
    },
  ]

  const handleMegaMenuToggle = (menuType: string) => {
    setActiveMegaMenu(activeMegaMenu === menuType ? null : menuType)
  }

  return (
    <nav className="relative bg-backgroundDark border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/inova-logo-white.png"
              alt="Inova AI Solutions"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasMegaMenu ? (
                  <button
                    className="flex items-center text-textPrimary hover:text-accentPurple transition-colors duration-200"
                    onMouseEnter={() => handleMegaMenuToggle(item.megaMenuType!)}
                    onMouseLeave={() => setActiveMegaMenu(null)}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-textPrimary hover:text-accentPurple transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Button variant="purple-border" size="sm" asChild>
              <Link href="/book-a-consultation">Book a Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-textPrimary hover:text-accentPurple"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {activeMegaMenu && (
          <div
            className="absolute top-full left-0 w-full z-50"
            onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <MegaMenu type={activeMegaMenu} />
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surfaceCard border-t border-borderSubtle"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-textPrimary hover:text-accentPurple transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="purple-border" size="sm" className="w-full" asChild>
                <Link href="/book-a-consultation">Book a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
