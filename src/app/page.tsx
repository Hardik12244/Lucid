import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import ScrollVideoReveal from "@/components/ScrollVideoReveal";
import Impact from "@/components/sections/Impact/Impact";
import HowLucidWorks from "@/components/HowLucidWorks";
export default function Home() {

  return (
    <>
      <ParticleBackground />

        <Hero />
        <ScrollVideoReveal />
        <Impact/>
        <HowLucidWorks/>

    </>
  );
}