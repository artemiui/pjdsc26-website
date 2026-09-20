"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, Users, MapPin, AlertCircle, CheckCircle2, ShieldAlert } from "lucide-react";
import { siteData } from "@/lib/siteData";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#faf8f5] dark:bg-[#12151a] border border-zinc-300 dark:border-zinc-700 rounded-xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                Official Registration
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                PJDSC 2026 Edition
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-zinc-900 dark:text-zinc-50">
              Join the 2026 Challenge
            </h3>
            <p className="text-sm font-sans text-zinc-600 dark:text-zinc-400 mt-1">
              Assemble your team of 3 to 5 senior high school or university innovators to advance public health analytics.
            </p>
          </div>

          {/* Key Rates & Periods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {/* Early Registration Card */}
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    Early Registration
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    Regional Quota
                  </span>
                </div>
                <div className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                  ₱300.00 <span className="text-xs font-normal text-zinc-500">/ member</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                  Sept 21 (5:00 PM) – Sept 25, 2026. 5 teams reserved per region (NCR, Luzon, Visayas, Mindanao).
                </p>
              </div>
            </div>

            {/* Regular Registration Card */}
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300">
                    Regular Registration
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    First-Come
                  </span>
                </div>
                <div className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                  ₱350.00 <span className="text-xs font-normal text-zinc-500">/ member</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                  Sept 28 (12:00 AM) – Sept 30, 2026. Open demographic first-come basis up to the 40-team cap.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Rules Checklist */}
          <div className="space-y-2 mb-6 text-xs text-zinc-600 dark:text-zinc-400 font-sans">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Team Composition:</strong> 3 to 5 members enrolled in senior high school or undergraduate/tertiary programs. Cross-school teams are fully allowed.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>40 Teams Cap:</strong> Submissions are validated and accepted strictly on a first-come, first-served basis.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Payment Policy:</strong> Slots are secured once payment validation is confirmed. Strict no-refund policy is enforced by UP DSSoc.
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <a
              href={siteData.event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-mono font-semibold bg-[#234766] text-white hover:bg-[#193349] dark:bg-[#E38363] dark:text-zinc-950 dark:hover:bg-[#db7654] shadow transition-colors text-center"
            >
              <span>Proceed to Registration Form (Google Form)</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-lg text-sm font-mono text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
            >
              Close
            </button>
          </div>

          <div className="mt-3 text-center">
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
              * Current form destination is set to placeholder link: [{siteData.event.registrationLink}].
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
