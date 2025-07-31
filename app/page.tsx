import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import HeroSection from '@/components/sections/homepage/HeroSection'
import SocialProofSection from '@/components/sections/homepage/SocialProofSection'
import CapabilitiesSection from '@/components/sections/homepage/CapabilitiesSection'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'
import WhyInovaSection from '@/components/sections/homepage/WhyInovaSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <CapabilitiesSection />
      <WhyInovaSection />
      <FinalCTASection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
