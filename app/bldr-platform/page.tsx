import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import BLDRHeroSection from '@/components/sections/bldr/BLDRHeroSection'
import PlatformOverviewSection from '@/components/sections/bldr/PlatformOverviewSection'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'

export default function BLDRPlatformPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <BLDRHeroSection />
      <PlatformOverviewSection />
      <FinalCTASection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
