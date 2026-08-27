import ParticleBackground from "@/components/LandingPageComponents/ParticleBackground";
import Hero from "@/components/LandingPageComponents/Hero";
import ScrollVideoReveal from "@/components/LandingPageComponents/ScrollVideoReveal";
import Impact from "@/components/LandingPageComponents/Impact/Impact";
import HowLucidWorks from "@/components/LandingPageComponents/HowLucidWorks";
import LucidOverview from "@/components/LandingPageComponents/LucidOverview";
import { TrustAndStatsSection, CTASection } from "@/components/LandingPageComponents/CTASection";
import LandingPageFooter from "@/components/LandingPageComponents/LandingPageFooter";
export default function Home() {

  return (
    <>
      <ParticleBackground />

        <Hero />
        <ScrollVideoReveal />
        <Impact/>
        <HowLucidWorks/>
        <LucidOverview/>
        <TrustAndStatsSection/>
        <CTASection/>
        <LandingPageFooter/>

    </>
  );
}