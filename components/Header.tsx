"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useRegistration } from "@/lib/registrationContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/primer", label: "Primer" },
  { href: "/timeline", label: "Timeline" },
  { href: "/organizer", label: "Organizer" },
  { href: "/faq", label: "FAQ" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Header() {
  const pathname = usePathname();
  const { openRegister } = useRegistration();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname?.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-zinc-200/60 dark:border-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo + Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                alt="PJDSC 2026"
                width={32}
                height={24}
                className="w-full h-auto object-contain dark:invert transition-transform group-hover:scale-105"
              />
            </div>
            <span className="font-bold text-sm tracking-tight text-[#234766] dark:text-[#7ca5cb]">
              PJDSC <span className="text-[#E38363] dark:text-[#ee9577]">&apos;26</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-[13px] font-medium rounded-md transition-all ${
                  isActive(link.href)
                    ? "text-[#234766] dark:text-[#ee9577] font-semibold bg-[#234766]/8 dark:bg-[#E38363]/15"
                    : "text-[#2b4458]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#7ca5cb] hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={openRegister}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#234766] hover:bg-[#1a354c] dark:bg-[#E38363] dark:hover:bg-[#d87556] text-white dark:text-zinc-950 text-xs font-semibold rounded-md transition-all cursor-pointer shadow-xs"
            >
              Register
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-[#234766] dark:text-zinc-400 hover:text-[#E38363] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 pt-1 border-t border-zinc-200 dark:border-zinc-800 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-[#234766] dark:text-[#ee9577] font-semibold bg-[#234766]/8 dark:bg-[#E38363]/15"
                    : "text-[#2b4458]/80 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#7ca5cb] hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={openRegister}
              className="w-full mt-2 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#234766] dark:bg-[#E38363] text-white dark:text-zinc-950 text-sm font-semibold rounded-md cursor-pointer shadow-xs"
            >
              Register Now
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
