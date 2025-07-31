import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import PartnerHeroSection from '@/components/sections/partner/PartnerHeroSection'
import PartnerFormSection from '@/components/sections/partner/PartnerFormSection'
import PartnersCarouselSection from '@/components/sections/partner/PartnersCarouselSection'

export default function PartnerWithInovaPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <PartnerHeroSection />
      <PartnersCarouselSection/>
      <PartnerFormSection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
