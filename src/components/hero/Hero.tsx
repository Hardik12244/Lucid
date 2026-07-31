import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function Hero() {
    return (
        <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="mx-auto mt-auto flex max-w-4xl flex-col items-center text-center">

                <h1 className={`${outfit.className} select-none  mt-16 sm:mt-24 text-8xl font-light text-white sm:text-8xl md:text-[9rem] lg:text-[11rem] `} >
                    Lucid
                </h1>

                <div className="mt-8">

                    <div className="flex">
                        <h2 className="text-2xl font-normal px-3 leading-none tracking-tight text-white/65 sm:text-4xl md:text-5xl">
                            Buy with
                        </h2>
                        <h2 className="text-2xl font-normal leading-none tracking-tight text-white sm:text-4xl md:text-5xl">
                            clarity
                        </h2>
                    </div>

                    <h2 className="mt-3 text-2xl font-normal leading-none tracking-tight text-white/30 sm:text-4xl md:text-5xl">
                        Not confusion.
                    </h2>

                </div>

                <p className="mt-10 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg md:text-xl md:leading-9">
                    Lucid analyzes reviews, discussions, expert opinions, and real user
                    experiences across the web—then gives you one clear buying decision.
                </p>

                <button className="group mt-12 flex h-16 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-9 text-lg font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                    <span>Start Searching</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </button>

                <div className="mt-16 mb-8 flex flex-col items-center gap-3 text-zinc-500">
                    <div className="animate-bounce text-lg">↓</div>

                    <p className="text-sm tracking-wide">
                        Scroll to explore
                    </p>
                </div>
            </div>
        </section>
    );
}
