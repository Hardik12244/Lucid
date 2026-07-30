import ParticleBackground from "@/components/backgrounds/ParticleBackground";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505]">
      <ParticleBackground />
      <Hero />
    </main>
  );
}