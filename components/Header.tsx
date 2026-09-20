"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { siteData } from "@/lib/siteData";

interface HeaderProps {
  onOpenRegister?: () => void;
}

export default function Header({ onOpenRegister }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "overview", href: "/#overview" },
    { label: "primer & mechanics", href: "/#primer" },
    { label: "timeline", href: "/#timeline" },
    { label: "about the organizer", href: "/#organizer" },
    { label: "faq", href: "/#faq" },
    { label: "sponsors", href: "/#sponsors" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf8f5]/85 dark:bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-200/70 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* SVG Bars Logo */}
            <Image
              src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
              alt="PJDSC 2026"
              width={36}
              height={26}
              className="w-7 h-auto object-contain dark:invert"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-extrabold text-sm sm:text-base tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-[#234766] dark:group-hover:text-[#6E9E94] transition-colors">
                PJDSC '26
              </span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400">
                UP DSSoc
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-tight">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors relative py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Registration Button with placeholder link */}
          <button
            onClick={onOpenRegister}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-[#234766] text-white hover:bg-[#1a344b] dark:bg-[#E38363] dark:text-zinc-950 dark:hover:bg-[#d67252] shadow-sm hover:shadow transition-all"
          >
            <span>register</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 bg-[#faf8f5] dark:bg-[#09090b] border-b border-zinc-200 dark:border-zinc-800 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-mono pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister?.();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-mono font-medium bg-[#234766] text-white dark:bg-[#E38363] dark:text-zinc-950"
            >
              <span>register for pjdsc 2026</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
