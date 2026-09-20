"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Github, Facebook, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { siteData } from "@/lib/siteData";
import { useRegistration } from "@/lib/registrationContext";

interface HeaderProps {
  onOpenRegister?: () => void;
}

export default function Header({ onOpenRegister }: HeaderProps) {
  const pathname = usePathname();
  const { openRegister } = useRegistration();

  const handleRegisterClick = () => {
    if (onOpenRegister) {
      onOpenRegister();
    } else {
      openRegister();
    }
  };

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(href + "/");
  };

  const getLinkClass = (href: string) => {
    const active = isLinkActive(href);
    return `${
      active
        ? "text-foreground font-semibold border-b border-foreground pb-0.5"
        : "text-zinc-500 dark:text-zinc-400 hover:text-foreground dark:hover:text-foreground"
    } transition-colors whitespace-nowrap`.trim();
  };

  return (
    <header className="flex flex-col gap-5 pt-2 pb-8 border-b border-zinc-200 dark:border-zinc-800">
      {/* Top utility row with subtle live status & Theme Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>pjdsc 2026 · public health analytics</span>
        </div>
        <ThemeToggle />
      </div>

      {/* Main Identity Row */}
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Official Logo Mark */}
        <Link href="/" className="shrink-0 group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-colors">
            <Image
              src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
              alt="PJDSC 2026 Event Logo"
              width={70}
              height={50}
              className="w-full h-auto object-contain dark:invert"
            />
          </div>
        </Link>

        {/* Text Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <h1 className="text-xl sm:text-2xl font-mono font-bold text-foreground tracking-tight">
              pjdsc 2026
            </h1>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
              6th edition
            </span>
          </div>

          <p className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400 mt-0.5 leading-snug">
            Philippine Junior Data Science Challenge · UP Data Science Society
          </p>

          {/* Social / Direct Channels */}
          <div className="flex items-center gap-3 mt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <a
              href={`mailto:${siteData.event.contactEmail}`}
              className="hover:text-foreground transition-colors flex items-center gap-1"
              title="Contact Email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">pjdsc.updssoc@gmail.com</span>
            </a>
            <a
              href={siteData.organizer.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              facebook
            </a>
            <a
              href={siteData.organizer.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              github
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Links Bar */}
      <nav className="w-full flex flex-wrap items-center justify-start gap-x-4 sm:gap-x-6 gap-y-2.5 text-xs sm:text-sm font-mono leading-relaxed pt-1">
        <Link href="/" className={getLinkClass("/")}>
          overview
        </Link>
        <Link href="/primer" className={getLinkClass("/primer")}>
          primer
        </Link>
        <Link href="/timeline" className={getLinkClass("/timeline")}>
          timeline
        </Link>
        <Link href="/organizer" className={getLinkClass("/organizer")}>
          organizer
        </Link>
        <Link href="/faq" className={getLinkClass("/faq")}>
          faq
        </Link>
        <Link href="/sponsors" className={getLinkClass("/sponsors")}>
          sponsors
        </Link>

        {/* Minimalist Register link */}
        <button
          onClick={handleRegisterClick}
          className="text-[#234766] dark:text-[#E38363] hover:underline font-semibold ml-auto flex items-center gap-0.5 text-xs sm:text-sm font-mono cursor-pointer"
        >
          <span>register</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </nav>
    </header>
  );
}
