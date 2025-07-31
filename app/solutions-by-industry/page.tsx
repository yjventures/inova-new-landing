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
      description: "Automate patient intake, personalize care, and ensure compliance with Inova's AI agents. Empower clinicians to build and customize workflows - no code needed, with full developer access.",
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
        src: "/images/solutions/finance-dashboard.jpg",
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
        src: "/images/solutions/telecom-dashboard.jpg",
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
        src: "/images/solutions/ecommerce-dashboard.jpg", // Reusing for demo
        alt: "Ecommerce analytics dashboard"
      }
    },
    {
      id: "education",
      name: "Education",
      h2: "Education: Unlocking Potential with AI",
      description: "Deliver personalized learning at scale with Inova AI. Empower every student with adaptive tutoring, real-time feedback, and AI-powered dashboards-freeing teachers to focus on mentorship and growth.",
      keyFeatures: [
        "Personalized AI tutoring 24/7", "Adaptive, data-driven learning paths", "Real-time insights for educators"
      ],
      cta: {
        text: "See Education Case Study",
        href: "/resources/education-case-study"
      },
      visual: {
        src: "/images/solutions/education-dashboard.jpg", 
        alt: "AI-powered education dashboard" 
      }
    },
    {
      id: "marketing",
      name: "Marketing & Agency",
      h2: "Marketing: Campaigns Insights that Inspire",
      description: "Unlock the power of data-driven creativity with AI agents that optimize every campaign, personalize engagement at scale, and deliver actionable insights to fuel your growth.",
      keyFeatures: [
        "Real-time campaign optimization",
        "Personalized content delivery",
        "Deep customer segmentation and analytics"
      ],
      cta: { text: "Unravel the Marketing Case Study", href: "/resources/marketing-case-study" },
      visual: {
        src: "/images/solutions/marketing-dashboard.jpg",
        alt: "Marketing analytics dashboard"
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
      <FinalCTASection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
