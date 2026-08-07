import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import ScrollVideoReveal from "@/components/ScrollVideoReveal";
import Impact from "@/components/sections/Impact/Impact";

export default function Home() {

  return (
    <>
      <ParticleBackground />

      <main className="relative z-10">
        <Hero />
        <ScrollVideoReveal />
        <Impact />

        <section className="mx-auto max-w-7xl px-6 py-10">
          ...
        </section>
      </main>
    </>
  );
}