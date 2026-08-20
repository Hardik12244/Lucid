"use client";

import Link from "next/link";
import { Search } from "lucide-react";

const navLinks = [
  { label: "Compare", href: "/app/compare" },
  { label: "Saved", href: "/app/saved" },
  { label: "History", href: "/app/history" },
];

export default function AppNavbar() {
  return (
    <div className="w-full bg-black px-4 py-4 sm:px-6">
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 sm:px-5">
        <Link
          href="/app"
          className="text-[15px] font-semibold tracking-tight text-white"
        >
          Lucid
        </Link>

        <div className="hidden ml-40 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/app/search"
            className="group flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] pl-2.5 pr-1.5 text-zinc-400 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <Search className="h-4 w-4" strokeWidth={2} />

            <span className="text-[13px] font-medium">
              Search
            </span>

            <kbd className="ml-1 hidden h-[22px] items-center rounded bg-white/[0.05] px-1.5 font-sans text-[11px] font-medium text-zinc-500 transition-colors group-hover:bg-white/[0.1] sm:flex">
              ⌘ K
            </kbd>
          </Link>

          <Link
            href="/"
            className="flex h-9 items-center justify-center rounded-lg bg-white px-4 text-[13px] font-medium text-black transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}