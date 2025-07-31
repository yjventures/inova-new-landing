import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'

import DeveloperAccessHeroSection from '@/components/sections/developer/DeveloperAccessHeroSection'
import DeveloperAccessBodySection from '@/components/sections/developer/DeveloperAccessBodySection'
import DeveloperConnectForm from '@/components/sections/developer/DeveloperConnectForm'
import FinalCTASection from '@/components/sections/homepage/FinalCTASection'


export default function DeveloperAccessPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <DeveloperAccessHeroSection />
      <DeveloperAccessBodySection />
      <DeveloperConnectForm/>
      <FinalCTASection/>
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
