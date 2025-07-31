import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'
import ResponsibleAIHeroSection from '@/components/sections/responsible/ResponsibleAIHeroSection'
import ResponsibleAIBodySection from '@/components/sections/responsible/ResponsibleAIBodySection'

export default function ResponsibleAIPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <ResponsibleAIHeroSection />
      <ResponsibleAIBodySection />
      <FinalCTASection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
