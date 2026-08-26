"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollVideoReveal() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const width = useTransform(
        scrollYProgress,
        [0, 0.4, 1],
        ["58vw", "76vw", "96vw"]
    );

    const scale = useTransform(scrollYProgress, [0, 1], [0.84, 1]);
    const radius = useTransform(scrollYProgress, [0, 1], [34, 28]);
    const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

    return (
        <section ref={ref} className="relative h-[220vh] bg-black select-none">
            <div className="sticky top-0 flex min-h-screen items-center justify-center px-8 py-12">
                <motion.div
                    style={{
                        width,
                        scale,
                        borderRadius: radius,
                        opacity,
                        y,
                    }}
                    className="relative"
                >
                    <div className="absolute -inset-1 rounded-[34px] bg-white/5 blur-2xl" />

                    <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[170px]" />

                    <div className="absolute -bottom-24 -left-28 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[150px]" />

                    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#060606] shadow-[0_0_80px_rgba(255,255,255,.08)]">

                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,.16),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(168,85,247,.08),transparent_35%),linear-gradient(to_bottom,#101010,#080808,#050505)]" />

                        <div className="absolute inset-[1px] rounded-[33px] border border-white/[0.045]" />

                        <div className="relative z-20">

                            <div className="pt-12 pb-8 text-center">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="text-[54px] font-[300] leading-none tracking-[-0.05em] text-white"
                                >
                                    See Lucid in action
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.1,
                                    }}
                                    className="mx-auto mt-5 max-w-2xl text-lg font-light leading-8 text-white/55"
                                >
                                    Search any product and instantly get an AI-powered report
                                    with review summaries, pros & cons, price insights and the
                                    best recommendation.
                                </motion.p>
                            </div>

                            <div className="px-7 pb-12">

                                <div
                                    className=" relative overflow-hidden rounded-[38px] border border-white/10 bg-[#050505]/90 backdrop-blur-xl pb-3">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />

                                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                                    <video
                                        controls
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="relative z-10 aspect-video w-full object-cover"
                                    >
                                        <source
                                            src="/Lucid1.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        animate={{
                            x: ["-25%", "130%"],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="pointer-events-none absolute top-0 left-0 h-px w-40 bg-gradient-to-r from-transparent via-white/90 to-transparent blur-[2px]"
                    />

                    <motion.div
                        animate={{
                            x: [-15, 20, -15],
                            y: [-10, 15, -10],
                            opacity: [0.4, 0.65, 0.4],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute -top-28 -right-24 h-[340px] w-[340px] rounded-full bg-blue-400/15 blur-[130px]"
                    />

                    <motion.div
                        animate={{
                            x: [20, -20, 20],
                            y: [15, -10, 15],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                            duration: 11,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="pointer-events-none absolute -bottom-24 -left-24 h-[280px] w-[280px] rounded-full bg-violet-500/10 blur-[130px]"
                    />

                    <div className="pointer-events-none absolute inset-0 rounded-[34px] shadow-[inset_0_0_160px_rgba(0,0,0,.45)]" />

                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                    <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}