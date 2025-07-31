import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import CareersHeroSection from '@/components/sections/careers/CareersHeroSection'
import CareersBodySection from '@/components/sections/careers/CareersBodySection'

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <CareersHeroSection />
      <CareersBodySection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
