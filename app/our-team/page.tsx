import Navigation from '@/components/global/Navigation'
import MegaFooter from '@/components/global/MegaFooter'
import ConsentPopup from '@/components/global/ConsentPopup'
import TeamHeroSection from '@/components/sections/team/TeamHeroSection'
import LeadershipSection from '@/components/sections/team/LeadershipSection'
import TeamJourneySection from '@/components/sections/team/TeamJourney'
import TeamValueSection from '@/components/sections/team/TeamValueSection'

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-backgroundDark">
      <Navigation />
      <TeamHeroSection />
      <TeamJourneySection />
      <div id="LeadershipSection">
        <LeadershipSection />
      </div>
      <div id="TeamValueSection">
        <TeamValueSection />
      </div>
      <MegaFooter />
      <ConsentPopup />
    </main>
  )
}
