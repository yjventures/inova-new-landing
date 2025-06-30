'use client'

import React from 'react'
import MinimalNavigation from '@/components/global/MinimalNavigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import ConsultationHeroSection from '@/components/sections/consultation/ConsultationHeroSection'
import ConsultationFormSection from '@/components/sections/consultation/ConsultationFormSection'
import OfficesSection from '@/components/sections/consultation/OfficesSection'

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <MinimalNavigation />
      
      {/* Two-column layout on desktop, stacked on mobile */}
      <section className="py-12 bg-backgroundDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Value Proposition */}
            <div className="lg:pr-8">
              <ConsultationHeroSection />
            </div>

            {/* Right Column - Consultation Form */}
            <div className="lg:pl-8">
              <div className="sticky top-8">
                <ConsultationFormSection />
              </div>
            </div>
          </div>
        </div>
      </section>

      <OfficesSection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
