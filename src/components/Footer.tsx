"use client";

import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";
import FloatingDots from "@/components/ui/FloatingDots";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const productLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Compare", href: "/compare" },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const resourceLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.12C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.391.521A2.994 2.994 0 00.502 6.186 31.26 31.26 0 000 12a31.26 31.26 0 00.502 5.814 2.994 2.994 0 002.107 2.12c1.886.521 9.391.521 9.391.521s7.505-.521 9.391-.521a2.994 2.994 0 002.107-2.12A31.26 31.26 0 0024 12a31.26 31.26 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
      </svg>
    ),
  },
];

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterWithBanner() {
  return (
    <section className="relative overflow-hidden bg-black">
      <FloatingDots count={65} />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[280px] overflow-hidden">
        <svg
          viewBox="0 0 1280 280"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="arcFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#84cc16" stopOpacity="0" />
              <stop offset="50%" stopColor="#84cc16" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
            </linearGradient>

            <filter id="arcBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          <path
            d="M -100 260 Q 640 -140 1380 260"
            fill="none"
            stroke="url(#arcFade)"
            strokeWidth="2.5"
            filter="url(#arcBlur)"
          />

          <path
            d="M -100 260 Q 640 -140 1380 260"
            fill="none"
            stroke="url(#arcFade)"
            strokeWidth="1"
          />
        </svg>

        <div className="absolute left-1/2 top-0 h-[220px] w-[600px] -translate-x-1/2 rounded-full bg-lime-500/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-20 text-center lg:px-8">
        <h2 className="text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl">
          Your next purchase
          <br />
          <span className="text-lime-400">shouldn&apos;t</span> be a gamble.
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ShimmerButton
            background=""
            shimmerColor="white"
            shimmerSize="0.1em"
            className="rounded-xl px-8 py-4 text-white transition-transform hover:scale-[1.02]"
          >
            <span className="flex items-center gap-2.5 whitespace-nowrap text-[16px] font-semibold text-white">
              Start Searching
            </span>
          </ShimmerButton>
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-lime-400" />
                <span className="text-3xl font-semibold text-white">Lucid</span>
              </Link>

              <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-400">
                AI-powered product research for smarter decisions.
              </p>
            </div>

            <FooterColumn title="Product" links={productLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Resources" links={resourceLinks} />
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            <p className="flex items-center gap-1.5 text-sm text-neutral-400">
              Made with
              <Heart className="h-4 w-4 fill-lime-400 text-lime-400" />
              by Hardik
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}