"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Facebook, Linkedin, Github } from "lucide-react";
import { siteData } from "@/lib/siteData";
import AsciiMotif from "./AsciiMotif";

export default function Footer() {
  const org = siteData.organizer;

  return (
    <footer className="w-full border-t border-zinc-200/80 dark:border-zinc-800 bg-[#faf8f5]/80 dark:bg-[#09090b]/80 mt-auto transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-zinc-200/60 dark:border-zinc-800/60">
          {/* Brand Info */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Image
                  src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                  alt="PJDSC Logo"
                  width={24}
                  height={18}
                  className="w-5 h-auto object-contain dark:invert"
                />
              </div>
              <span className="font-sans font-bold text-sm text-zinc-900 dark:text-zinc-100">
                PJDSC 2026
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                · UP Data Science Society
              </span>
            </div>
            <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400 max-w-sm">
              Trace the Pattern, Target the Cure: Advancing Public Health Through Data Science.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 font-mono text-xs">
            <a
              href={`mailto:${org.socialLinks.email}`}
              className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              title="Email"
              aria-label="Email UP DSSoc"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={org.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              title="Facebook"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={org.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              title="LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={org.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              title="GitHub"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <div>
            © 2026 UP Data Science Society (UP DSSoc) · University of the Philippines Diliman
          </div>

          <div className="flex items-center gap-4">
            <Link href="/#primer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              primer
            </Link>
            <Link href="/#organizer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              organizer
            </Link>
            <Link href="/#faq" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              faq
            </Link>
            <Link href="/#sponsors" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              sponsors
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
