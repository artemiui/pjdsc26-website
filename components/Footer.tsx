"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";
import { siteData } from "@/lib/siteData";
import { useRegistration } from "@/lib/registrationContext";

export default function Footer() {
  const { openRegister } = useRegistration();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 mt-auto">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                alt="PJDSC 2026"
                width={28}
                height={20}
                className="dark:invert"
              />
              <span className="font-bold text-sm text-[#234766] dark:text-[#7ca5cb]">
                PJDSC <span className="text-[#E38363] dark:text-[#ee9577]">&apos;26</span>
              </span>
            </Link>
            <p className="text-xs text-[#2b4458]/75 dark:text-zinc-400 leading-relaxed max-w-[260px]">
              The Philippine Junior Data Science Challenge 2026. Organized by UP Data Science Society.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#234766] dark:text-[#88beaf] uppercase tracking-wider mb-3">
              Competition
            </h4>
            <div className="space-y-2">
              {[
                { href: "/primer", label: "Event Primer" },
                { href: "/timeline", label: "Timeline" },
                { href: "/sponsors", label: "Sponsors" },
                { href: siteData.event.githubRepoLink, label: "GitHub Datasets", external: true },
              ].map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-[#2b4458]/75 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#ee9577] transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-xs text-[#2b4458]/75 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#ee9577] transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#234766] dark:text-[#88beaf] uppercase tracking-wider mb-3">
              About
            </h4>
            <div className="space-y-2">
              {[
                { href: "/organizer", label: "UP DSSoc" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-xs text-[#2b4458]/75 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#ee9577] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteData.organizer.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-[#2b4458]/75 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#ee9577] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-xs font-semibold text-[#234766] dark:text-[#88beaf] uppercase tracking-wider mb-3">
              Get Started
            </h4>
            <div className="space-y-3">
              <button
                onClick={openRegister}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#234766] hover:bg-[#1a354c] dark:bg-[#E38363] dark:hover:bg-[#d87556] text-white dark:text-zinc-950 text-xs font-semibold rounded-md transition-all cursor-pointer shadow-xs"
              >
                Register Now
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`mailto:${siteData.event.contactEmail}`}
                className="flex items-center gap-1.5 text-xs text-[#2b4458]/75 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#ee9577] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#E38363]" />
                {siteData.event.contactEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#2b4458]/60 dark:text-zinc-500">
          <span>© 2026 UP Data Science Society. All rights reserved.</span>
          <span className="text-[#6E9E94] dark:text-[#88beaf] font-medium">Public Health Analytics: Trace the Pattern, Target the Cure</span>
        </div>
      </div>
    </footer>
  );
}
