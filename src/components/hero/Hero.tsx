export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-light tracking-tight text-white md:text-[9rem]">
          Lucid
        </h1>

        <h2 className="mt-6 text-5xl font-light leading-tight text-white">
          Buy with{" "}
          <span className="font-medium text-white">
            clarity.
          </span>
          <br />
          <span className="text-zinc-500">
            Not confusion.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Lucid analyzes reviews, discussions, and expert opinions across the
          web to give you one clear buying decision.
        </p>

        <button className="mt-12 rounded-full border border-zinc-700 bg-zinc-900 px-8 py-4 text-lg font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-800">
          Start Searching →
        </button>

        <p className="mt-24 text-sm text-zinc-500">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}