'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import SolutionsHeroSection from '@/components/sections/solutions/SolutionsHeroSection'
import StickySubNavigation from '@/components/sections/solutions/StickySubNavigation'
import IndustrySection from '@/components/sections/solutions/IndustrySection'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'

export default function SolutionsByIndustryPage() {
  const [activeSection, setActiveSection] = useState('healthcare')

  const industries = [
    {
      id: "healthcare",
      name: "Healthcare",
      h2: "Healthcare: Humanizing Care with AI",
      description: "Automate patient intake, personalize care, and ensure compliance with Inova's AI agents. Empower clinicians to build and customize workflows—no code needed, with full developer access.",
      keyFeatures: ["AI-powered patient concierge", "Automated scheduling", "HIPAA and GDPR compliance"],
      cta: { text: "See Healthcare Case Study", href: "/resources/healthcare-case-study" },
      visual: {
        src: "/images/solutions/healthcare-dashboard.jpg",
        alt: "Animated hospital dashboard"
      }
    },
    {
      id: "financial-sector",
      name: "Financial Sector",
      h2: "Finance: Securing Trust with Intelligent AI",
      description: "Transform financial services with AI agents that handle complex queries, automate compliance reporting, and provide personalized investment insights while maintaining the highest security standards.",
      keyFeatures: ["Regulatory compliance automation", "Fraud detection and prevention", "Personalized financial advisory"],
      cta: { text: "Explore Finance Solutions", href: "/resources/finance-case-study" },
      visual: {
        src: "/images/solutions/healthcare-dashboard.jpg", // Reusing for demo
        alt: "Financial dashboard"
      }
    },
    {
      id: "telecom",
      name: "Telecom",
      h2: "Telecom: Connecting Customers with AI Excellence",
      description: "Enhance customer experience and operational efficiency with AI agents that provide 24/7 support, optimize network performance, and predict customer needs before they arise.",
      keyFeatures: ["Intelligent network optimization", "Predictive maintenance", "Multilingual customer support"],
      cta: { text: "View Telecom Success Story", href: "/resources/telecom-case-study" },
      visual: {
        src: "/images/solutions/healthcare-dashboard.jpg", // Reusing for demo
        alt: "Telecom operations dashboard"
      }
    },
    {
      id: "ecommerce",
      name: "Ecommerce",
      h2: "Ecommerce: Personalizing Every Customer Journey",
      description: "Drive sales and customer satisfaction with AI agents that provide personalized shopping experiences, intelligent product recommendations, and seamless order management.",
      keyFeatures: ["Personalized product recommendations", "Intelligent inventory management", "Automated customer service"],
      cta: { text: "Discover Ecommerce Solutions", href: "/resources/ecommerce-case-study" },
      visual: {
        src: "/images/solutions/healthcare-dashboard.jpg", // Reusing for demo
        alt: "Ecommerce analytics dashboard"
      }
    }
  ]

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = industries.map(industry => industry.id)
      const scrollPosition = window.scrollY + 200 // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <SolutionsHeroSection />
      <StickySubNavigation 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      {/* Industry Sections */}
      {industries.map((industry, index) => (
        <IndustrySection
          key={industry.id}
          {...industry}
        />
      ))}
      
      {/* Global CTA Section */}
      <section className="py-20 bg-backgroundDark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-6">
            Ready to Transform{' '}
            <span className="text-transparent bg-clip-text bg-accentGradient">
              Your Industry
            </span>
            ?
          </h2>
          <p className="text-lg text-textSecondary mb-8 max-w-2xl mx-auto">
            Book a consultation with our AI experts and see what's possible for your specific industry and use case.
          </p>
          <FinalCTASection />
        </div>
      </section>
      
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
