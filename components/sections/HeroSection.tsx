"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { siteData } from "@/lib/siteData";

interface HeroSectionProps {
  onOpenRegister?: () => void;
}

export default function HeroSection({ onOpenRegister }: HeroSectionProps) {
  return (
    <section className="space-y-10 py-6">
      {/* Theme Introduction */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
            01 / theme & challenge
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-foreground leading-snug">
          “Trace the Pattern, Target the Cure”
        </h2>
        <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
          Advancing Public Health Through Data Science
        </p>

        <p className="text-sm font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
          {siteData.event.challengeStatement}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-1 font-semibold text-foreground underline underline-offset-4 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors cursor-pointer"
          >
            <span>register team</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <Link
            href="/primer"
            className="inline-flex items-center gap-1 text-zinc-500 hover:text-foreground transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>view primer</span>
          </Link>

          <a
            href="/docs/PJDSC 2026 Sponsorship Deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-500 hover:text-foreground transition-colors"
          >
            <span>sponsorship deck (pdf)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Overview Metadata List (No Cards / No Panel Backgrounds) */}
      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
          02 / key competition parameters
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-xs font-mono">
          <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-1.5">
            <span className="text-zinc-500 dark:text-zinc-400">capacity</span>
            <span className="font-semibold text-foreground">40 teams nationwide</span>
          </div>
          <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-1.5">
            <span className="text-zinc-500 dark:text-zinc-400">team size</span>
            <span className="font-semibold text-foreground">3 to 5 members</span>
          </div>
          <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-1.5">
            <span className="text-zinc-500 dark:text-zinc-400">demographics</span>
            <span className="font-semibold text-foreground">SHS & Tertiary students</span>
          </div>
          <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-1.5">
            <span className="text-zinc-500 dark:text-zinc-400">regional quotas</span>
            <span className="font-semibold text-foreground">NCR, Luzon, Visayas, Mindanao</span>
          </div>
          <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-1.5">
            <span className="text-zinc-500 dark:text-zinc-400">early reg fee</span>
            <span className="font-semibold text-foreground">₱300.00 / member</span>
          </div>
          <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-1.5">
            <span className="text-zinc-500 dark:text-zinc-400">regular reg fee</span>
            <span className="font-semibold text-foreground">₱350.00 / member</span>
          </div>
        </div>
      </div>

      {/* Four Pillars / Flow (Clean editorial list) */}
      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
          03 / event structure
        </span>

        <div className="space-y-4 pl-1 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">
          {siteData.pillars.map((pillar, i) => (
            <div key={i} className="relative pl-5 space-y-1">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              <div className="flex items-baseline gap-2">
                <span className="font-mono font-medium text-sm text-foreground">
                  {pillar.num}. {pillar.title}
                </span>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  [{pillar.tag}]
                </span>
              </div>
              <p className="text-xs font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Topics (Minimal inline list) */}
      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
          04 / health analytics focus areas
        </span>

        <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {siteData.topics.map((t, idx) => (
            <span key={idx}>
              <span className="hover:text-foreground transition-colors cursor-default" title={t.desc}>
                {t.title.toLowerCase()}
              </span>
              {idx < siteData.topics.length - 1 && (
                <span className="text-zinc-300 dark:text-zinc-700 mx-2">·</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
