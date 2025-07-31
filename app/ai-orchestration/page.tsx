import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'
import AIOrchestrationHeroSection from '@/components/sections/orchestration/AIOrchestrationHeroSection'
import AIOrchestrationBodySection from '@/components/sections/orchestration/AIOrchestrationBodySection'

export default function AIOrchestrationPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <AIOrchestrationHeroSection />
      <AIOrchestrationBodySection />
      <FinalCTASection/>
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
