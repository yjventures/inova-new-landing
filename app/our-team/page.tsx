import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import TeamHeroSection from '@/components/sections/team/TeamHeroSection'
import LeadershipSection from '@/components/sections/team/LeadershipSection'

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <TeamHeroSection />
      <LeadershipSection />
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
