'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ConsentSettings {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

const ConsentPopup = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consentSettings, setConsentSettings] = useState<ConsentSettings>({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('inova-consent')
    if (!hasConsent) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const consent = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('inova-consent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    const consent = {
      ...consentSettings,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('inova-consent', JSON.stringify(consent))
    setIsVisible(false)
    setShowSettings(false)
  }

  const handleDeclineAll = () => {
    const consent = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('inova-consent', JSON.stringify(consent))
    setIsVisible(false)
  }

  const handleSettingChange = (setting: keyof ConsentSettings, value: boolean) => {
    setConsentSettings(prev => ({
      ...prev,
      [setting]: value
    }))
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          {showSettings && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setShowSettings(false)}
            />
          )}

          {/* Settings Modal */}
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md surface-card p-6 z-50 max-h-[80vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-jakarta font-bold text-xl text-textPrimary">
                    Cookie Settings
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-textSecondary hover:text-textPrimary transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Essential Cookies */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-jakarta font-semibold text-textPrimary">
                          Essential Cookies
                        </h4>
                        <p className="text-sm text-textSecondary">
                          Required for the website to function properly
                        </p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={true}
                          disabled
                          className="sr-only"
                        />
                        <div className="w-11 h-6 bg-accentPurple rounded-full">
                          <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-5 transition-transform"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-jakarta font-semibold text-textPrimary">
                          Analytics Cookies
                        </h4>
                        <p className="text-sm text-textSecondary">
                          Help us understand how visitors interact with our website
                        </p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('analytics', !consentSettings.analytics)}
                        className="relative"
                      >
                        <div className={`w-11 h-6 rounded-full transition-colors ${
                          consentSettings.analytics ? 'bg-accentPurple' : 'bg-gray-600'
                        }`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                            consentSettings.analytics ? 'translate-x-5' : 'translate-x-0'
                          }`}></div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-jakarta font-semibold text-textPrimary">
                          Marketing Cookies
                        </h4>
                        <p className="text-sm text-textSecondary">
                          Used to deliver relevant advertisements
                        </p>
                      </div>
                      <button
                        onClick={() => handleSettingChange('marketing', !consentSettings.marketing)}
                        className="relative"
                      >
                        <div className={`w-11 h-6 rounded-full transition-colors ${
                          consentSettings.marketing ? 'bg-accentPurple' : 'bg-gray-600'
                        }`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                            consentSettings.marketing ? 'translate-x-5' : 'translate-x-0'
                          }`}></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <Button 
                    variant="purple-border" 
                    size="sm" 
                    className="flex-1"
                    onClick={handleDeclineAll}
                  >
                    Decline All
                  </Button>
                  <Button 
                    variant="gradient" 
                    size="sm" 
                    className="flex-1"
                    onClick={handleAcceptSelected}
                  >
                    Save Settings
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Consent Popup */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 surface-card border-t border-borderSubtle p-4 md:p-6 z-30"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-textPrimary text-sm md:text-base leading-relaxed">
                    We use cookies to enhance your experience and analyze site usage. 
                    By continuing, you consent to our{' '}
                    <Link href="/privacy-policy" className="text-accentPurple hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button
                    variant="purple-border"
                    size="sm"
                    onClick={() => setShowSettings(true)}
                    className="w-full sm:w-auto"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Settings
                  </Button>
                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={handleAcceptAll}
                    className="w-full sm:w-auto"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ConsentPopup
