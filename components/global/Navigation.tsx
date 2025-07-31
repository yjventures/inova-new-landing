'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MegaMenu } from './MegaMenu'

const Navigation = () => {
  const [openAccordions, setOpenAccordions] = React.useState<{ [k: number]: boolean }>({});
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMegaMenuMouseEnter = (menuType: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveMegaMenu(menuType);
  };

  const handleMegaMenuMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 450);
  };

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

  return (
    <nav className="sticky top-0 z-50 bg-backgroundDark border-b border-borderSubtle shadow-lg">
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
                    onMouseEnter={() => handleMegaMenuMouseEnter(item.megaMenuType!)}
                    onMouseLeave={handleMegaMenuMouseLeave}
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
            
            <Button
              variant="blue-border"
              size="sm"
              asChild
            >
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
          <motion.div
            key={activeMegaMenu}
            className="absolute top-full left-0 w-full z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => handleMegaMenuMouseEnter(activeMegaMenu)}
            onMouseLeave={handleMegaMenuMouseLeave}
          >
            <MegaMenu type={activeMegaMenu} />
          </motion.div>
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
      <div className="px-4 py-4 space-y-2">
        {navItems.map((item, index) => {
          const isAccordion = !!item.hasMegaMenu;

          let sublinks: any[] = [];
          if (isAccordion) {
            if (item.megaMenuType === 'capabilities') {
              sublinks = [
                { text: "Responsible AI", href: "/responsible-ai" },
                { text: "AI Transformation", href: "/ai-transformation" },
                { text: "Custom AI Development", href: "/custom-ai" },
                { text: "Sovereign AI", href: "/sovereign-ai" },
              ];
            } else if (item.megaMenuType === 'solutions') {
              sublinks = [
                { text: "Healthcare", href: "/solutions-by-industry#healthcare" },
                { text: "Financial Sector", href: "/solutions-by-industry#financial-sector" },
                { text: "Telecom", href: "/solutions-by-industry#telecom" },
                { text: "Ecommerce", href: "/solutions-by-industry#ecommerce" },
                { text: "Education", href: "/solutions-by-industry#education" },
                { text: "Marketing & Agencies", href: "/solutions-by-industry#marketing" },
              ];
            } else if (item.megaMenuType === 'why-inova') {
              sublinks = [
                { text: "Our Approach", href: "/our-approach" },
                { text: "AI Orchestration", href: "/ai-orchestration" },
                { text: "Our Leadership", href: "/our-team" },
                { text: "Partners", href: "/partner-with-inova" },
                { text: "Life at Inova", href: "/careers-with-inova" },
              ];
            }
          }

          // Accordion click handler
          const handleAccordionClick = (i: number) => {
            setOpenAccordions(prev => ({
              ...prev,
              [i]: !prev[i]
            }));
          };

          return (
            <div key={index}>
              {isAccordion ? (
                <div>
                  <button
                    className="w-full flex items-center justify-between text-textPrimary hover:text-accentPurple py-3 transition-colors duration-200"
                    onClick={() => handleAccordionClick(index)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${openAccordions[index] ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openAccordions[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4"
                      >
                        {sublinks.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            className="block text-textSecondary py-2 hover:text-accentPurple"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.text}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block text-textPrimary hover:text-accentPurple transition-colors duration-200 py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
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
