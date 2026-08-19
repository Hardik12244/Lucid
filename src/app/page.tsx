import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import ScrollVideoReveal from "@/components/ScrollVideoReveal";
import Impact from "@/components/sections/Impact/Impact";
import HowLucidWorks from "@/components/HowLucidWorks";
import LucidOverview from "@/components/LucidOverview";
import { TrustAndStatsSection, CTASection } from "@/components/CTASection";
import Footer from "@/components/Footer";
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
        <Footer/>

    </>
  );
}