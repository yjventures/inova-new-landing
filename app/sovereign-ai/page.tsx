import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import SovereignAIHeroSection from '@/components/sections/sovereign/SovereignAIHeroSection'
import SovereignAIBodySection from '@/components/sections/sovereign/SovereignAIBodySection'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'


export default function SovereignAIPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <SovereignAIHeroSection />
      <SovereignAIBodySection />
      <FinalCTASection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
