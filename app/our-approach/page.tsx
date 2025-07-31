import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'
import OurApproachHeroSection from '@/components/sections/approach/OurApproachHeroSection'
import OurApproachBodySection from '@/components/sections/approach/OurApproachBodySection'

export default function OurApproachPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <OurApproachHeroSection />
      <OurApproachBodySection />
      <FinalCTASection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
