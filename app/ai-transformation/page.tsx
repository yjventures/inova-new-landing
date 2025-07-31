import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'
import ConsentPopup from '@/components/global/ConsentPopup'
import AITransformationHeroSection from '@/components/sections/transformation/AITransformationHeroSection'
import AITransformationBodySection from '@/components/sections/transformation/AITransformationBodySection'

export default function AITransformationPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <AITransformationHeroSection />
      <AITransformationBodySection />
      <FinalCTASection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
