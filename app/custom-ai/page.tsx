import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'
import ConsentPopup from '@/components/global/ConsentPopup'
import CustomAIHeroSection from '@/components/sections/custom/CustomAIHeroSection'
import CustomAIBodySection from '@/components/sections/custom/CustomAIBodySection'

export default function CustomAIPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <CustomAIHeroSection />
      <CustomAIBodySection />
      <FinalCTASection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
