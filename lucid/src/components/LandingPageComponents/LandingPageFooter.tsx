"use client";

import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";
import FloatingDots from "@/components/ui/FloatingDots";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const productLinks = [
  { label: "How it works", href: "#" },
  { label: "Features", href: "#" },
  { label: "Compare", href: "#" },
];

const companyLinks = [
  { label: "About us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
];

const resourceLinks = [
  { label: "Help Center", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/Silent_twt_",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Github",
    href: "https://github.com/Hardik12244",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
  />
</svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hardik-garg-837665244/",
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
          <a href="/app">
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
          </a>
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