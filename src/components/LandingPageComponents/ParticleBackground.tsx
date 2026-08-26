"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;


        const context = canvas.getContext("2d");
        if (!context) return;

        const ctx = context;

        const PARTICLE_COUNT = 75;
        const LINK_DISTANCE = 270;
        const CURSOR_DISTANCE = 220;

        let animationFrameId = 0;

        const particles: Particle[] = [];

        const mouse = {
            x: null as number | null,
            y: null as number | null,
            tx: null as number | null,
            ty: null as number | null,
        };

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;

            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            glow: boolean;

            constructor() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;

                this.vx = (Math.random() - 0.5) * 0.35;
                this.vy = (Math.random() - 0.5) * 0.35;

                const r = Math.random();

                if (r < 0.08) {
                    this.radius = 5 + Math.random() * 2;
                    this.glow = true;
                } else {
                    this.radius = 2 + Math.random();
                    this.glow = Math.random() < 0.18;
                }
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = window.innerWidth;
                if (this.x > window.innerWidth) this.x = 0;

                if (this.y < 0) this.y = window.innerHeight;
                if (this.y > window.innerHeight) this.y = 0;
            }

            draw() {
                ctx.beginPath();

                ctx.fillStyle = "rgba(255,255,255,0.9)";

                if (this.glow) {
                    ctx.fillStyle = "rgba(255,255,255,0.95)";
                    ctx.shadowBlur = 20;
                    ctx.shadowColor = "rgba(255,255,255,0.4)";
                } else {
                    ctx.fillStyle = "rgba(255,255,255,0.75)";
                }
                const scale =
                    this.glow
                        ? 1 + Math.sin(performance.now() * 0.001 + this.x) * 0.12
                        : 1;

                ctx.arc(
                    this.x,
                    this.y,
                    this.radius * scale,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

                ctx.shadowBlur = 0;
            }
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }

        function connect(
            a: { x: number; y: number },
            b: { x: number; y: number },
            maxDistance: number,
            cursor = false
        ) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;

            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist > maxDistance) return;

            const t = dist / maxDistance;

            const pulse =
                0.85 + Math.sin(performance.now() * 0.0015 + dist * 0.02) * 0.15;

            const opacity =
                Math.pow(1 - t, 3) * pulse;
            ctx.beginPath();

            if (cursor) {
                ctx.strokeStyle = `rgba(255,255,255,${opacity * 0.8})`;
            } else {
                ctx.strokeStyle = `rgba(255,255,255,${opacity * 0.18})`;
            }

            ctx.lineWidth = 1.4;

            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.stroke();
        }


        const animate = () => {
            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            if (
                mouse.x !== null &&
                mouse.y !== null &&
                mouse.tx !== null &&
                mouse.ty !== null
            ) {
                const smoothness = 0.09; // lower = slower

                mouse.x += (mouse.tx - mouse.x) * smoothness;
                mouse.y += (mouse.ty - mouse.y) * smoothness;
            }

            for (const p of particles) {
                p.update();
            }

            for (let i = 0; i < particles.length; i++) {
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                particles[i].draw();

                if (mouse.x !== null && mouse.y !== null) {
                    for (let j = i + 1; j < particles.length; j++) {

                        const d1 = Math.hypot(
                            particles[i].x - mouse.x,
                            particles[i].y - mouse.y
                        );

                        const d2 = Math.hypot(
                            particles[j].x - mouse.x,
                            particles[j].y - mouse.y
                        );

                        if (
                            d1 < CURSOR_DISTANCE &&
                            d2 < CURSOR_DISTANCE
                        ) {
                            connect(
                                particles[i],
                                particles[j],
                                LINK_DISTANCE
                            );
                        }
                    }
                }

                if (mouse.x !== null && mouse.y !== null) {
                    connect(
                        particles[i],
                        { x: mouse.x, y: mouse.y },
                        CURSOR_DISTANCE,
                        true
                    );
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const mouseMove = (e: MouseEvent) => {
            mouse.tx = e.clientX;
            mouse.ty = e.clientY;

            if (mouse.x === null) mouse.x = e.clientX;
            if (mouse.y === null) mouse.y = e.clientY;
        };

        const mouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
            mouse.tx = null;
            mouse.ty = null;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseleave", mouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);

            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 h-full w-full"
        />
    );
}

