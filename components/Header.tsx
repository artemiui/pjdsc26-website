"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/primer", label: "Primer" },
  { href: "/timeline", label: "Timeline" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/organizer", label: "Organizer" },
  { href: "/faq", label: "FAQ" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <>
      {/* Floating Pill-Shaped Navigation Bar */}
      <header className="fixed top-3.5 sm:top-5 inset-x-0 mx-auto w-[92%] sm:w-auto max-w-[890px] z-50 px-2 sm:px-0 transition-all duration-300">
        <div
          className={`rounded-full px-3.5 sm:px-4 py-2 border transition-all duration-300 ${
            scrolled
              ? "bg-white/85 dark:bg-[#0a0a0b]/85 shadow-[0_12px_32px_rgb(0,0,0,0.08)] dark:shadow-[0_12px_32px_rgb(0,0,0,0.45)] border-black/[0.1] dark:border-white/[0.14]"
              : "bg-white/70 dark:bg-[#0a0a0b]/70 shadow-[0_6px_24px_rgb(0,0,0,0.04)] dark:shadow-[0_6px_24px_rgb(0,0,0,0.3)] border-black/[0.08] dark:border-white/[0.1]"
          } backdrop-blur-[14px] flex items-center justify-between gap-3 sm:gap-6`}
        >
          {/* Brand Logo + Pill Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 pl-1.5 pr-2.5 py-1 rounded-full hover:bg-black/[0.03] dark:hover:bg-white/[0.06] transition-colors group"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Image
                src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                alt="PJDSC 2026"
                width={26}
                height={20}
                className="w-full h-auto object-contain dark:invert transition-transform group-hover:scale-105"
              />
            </div>
            <span className="font-bold text-xs sm:text-sm tracking-tight text-[#234766] dark:text-[#7ca5cb]">
              PJDSC <span className="text-[#E38363] dark:text-[#ee9577]">&apos;26</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    active
                      ? "text-[#234766] dark:text-[#f3f6f8] bg-[#234766]/10 dark:bg-[#7ca5cb]/20 font-semibold shadow-xs"
                      : "text-[#2b4458]/75 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8] hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu toggle button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-full text-[#234766] dark:text-zinc-300 hover:bg-black/[0.05] dark:hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Floating Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-18 inset-x-0 mx-auto w-[92%] max-w-sm z-50 p-4 rounded-3xl bg-white/90 dark:bg-[#0f141a]/95 backdrop-blur-[16px] border border-black/[0.08] dark:border-white/[0.1] shadow-2xl space-y-1 md:hidden"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-2xl transition-colors ${
                    active
                      ? "text-[#234766] dark:text-[#f3f6f8] bg-[#234766]/10 dark:bg-[#7ca5cb]/20 font-semibold"
                      : "text-[#2b4458]/80 dark:text-zinc-400 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-[#234766] dark:hover:text-[#7ca5cb]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
