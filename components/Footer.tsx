"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="w-full max-w-[768px] mx-auto px-5 sm:px-6 py-8 border-t border-zinc-200 dark:border-zinc-800 mt-auto text-xs font-mono text-zinc-500 dark:text-zinc-500">
      <div className="flex flex-col sm:flex-row items-baseline justify-between gap-3">
        <div>
          <span>pjdsc 2026 · up data science society</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <Link href="/primer" className="hover:text-foreground transition-colors">
            primer
          </Link>
          <Link href="/timeline" className="hover:text-foreground transition-colors">
            timeline
          </Link>
          <Link href="/organizer" className="hover:text-foreground transition-colors">
            organizer
          </Link>
          <Link href="/faq" className="hover:text-foreground transition-colors">
            faq
          </Link>
          <Link href="/sponsors" className="hover:text-foreground transition-colors">
            sponsors
          </Link>
        </div>
      </div>
    </footer>
  );
}
