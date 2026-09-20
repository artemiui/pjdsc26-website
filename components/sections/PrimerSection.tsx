"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FileText,
  CheckCircle,
  Clock,
  Award,
  Layers,
  Code2,
  Video,
  Presentation,
  ShieldCheck,
  ExternalLink,
  Download,
  Users,
  Building,
  HelpCircle,
} from "lucide-react";
import { siteData } from "@/lib/siteData";

interface PrimerSectionProps {
  onOpenRegister?: () => void;
}

export default function PrimerSection({ onOpenRegister }: PrimerSectionProps) {
  const [activeTab, setActiveTab] = useState<"mechanics" | "schema" | "stages" | "criteria">("mechanics");
  const [criteriaType, setCriteriaType] = useState<"elimination" | "finals">("elimination");

  return (
    <section id="primer" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Official Documentation
            </span>
            <span className="text-[11px] font-mono text-zinc-400">Primer V2026.1</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-zinc-900 dark:text-zinc-100 mt-1">
            Event Primer & Competition Mechanics
          </h2>
          <p className="text-sm font-sans text-zinc-600 dark:text-zinc-400 mt-2">
            Detailed specifications on eligibility, demographic quotas, competition progression, and scoring rubrics.
          </p>
        </div>

        {/* Segmented Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8 font-mono text-xs">
          <button
            onClick={() => setActiveTab("mechanics")}
            className={`px-3.5 py-2 rounded-md transition-colors ${
              activeTab === "mechanics"
                ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            }`}
          >
            Eligibility & Rules
          </button>
          <button
            onClick={() => setActiveTab("schema")}
            className={`px-3.5 py-2 rounded-md transition-colors ${
              activeTab === "schema"
                ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            }`}
          >
            Registration Schema
          </button>
          <button
            onClick={() => setActiveTab("stages")}
            className={`px-3.5 py-2 rounded-md transition-colors ${
              activeTab === "stages"
                ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            }`}
          >
            Competition Stages
          </button>
          <button
            onClick={() => setActiveTab("criteria")}
            className={`px-3.5 py-2 rounded-md transition-colors ${
              activeTab === "criteria"
                ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-sm font-semibold"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
            }`}
          >
            Judging Criteria
          </button>
        </div>

        {/* TAB 1: ELIGIBILITY & MECHANICS */}
        {activeTab === "mechanics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg wireframe-panel bg-white/60 dark:bg-zinc-900/40">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#234766] dark:text-[#88beaf] mb-2">
                  <Users className="w-4 h-4" />
                  <span>Team Composition</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  <li>• Teams must consist of <strong>3 to 5 members</strong>.</li>
                  <li>• Each member must be at least a <strong>senior high school</strong> or <strong>tertiary / undergraduate</strong> student in the Philippines.</li>
                  <li>• Members <strong>need not be from the same university</strong> or school. Cross-institutional teams are encouraged.</li>
                  <li>• Undergraduates on official <strong>Leave of Absence (LOA)</strong> are eligible.</li>
                </ul>
              </div>

              <div className="p-5 rounded-lg wireframe-panel bg-white/60 dark:bg-zinc-900/40">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#234766] dark:text-[#88beaf] mb-2">
                  <Building className="w-4 h-4" />
                  <span>Capacity & Regional Quotas</span>
                </div>
                <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  <li>• Strictly capped at a maximum of <strong>40 teams nationwide</strong> on a first-come, first-served basis.</li>
                  <li>• <strong>Early Registration Quota:</strong> 5 team slots reserved per major island group (NCR, Luzon, Visayas, Mindanao).</li>
                  <li>• Teams representing a region must have at least one member or member's university located in that region.</li>
                  <li>• <strong>Regular Registration:</strong> Remaining slots open to any demographic without regional limits.</li>
                </ul>
              </div>
            </div>

            {/* Fees & Launch Requirement Note */}
            <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/30">
              <h4 className="text-sm font-sans font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                Mandatory Event Launch Attendance
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                To be eligible for the final project development round, each team must submit a complete concept proposal and have <strong>at least one representative attend the official virtual Event Launch on October 10, 2026</strong>. Only qualifying teams meeting both criteria will access the technical workshops and mentorship network.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: REGISTRATION SCHEMA */}
        {activeTab === "schema" && (
          <div className="space-y-6">
            <div className="p-5 rounded-lg wireframe-panel bg-white/60 dark:bg-zinc-900/40">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-sans font-bold text-zinc-900 dark:text-zinc-100">
                  Registration Workflow & Validation Schema
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  Public Schema
                </span>
              </div>

              {/* Step-by-step schema workflow cards */}
              <div className="space-y-3 font-mono text-xs">
                {/* Step 1 */}
                <div className="p-4 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Phase 1 · Sept 21–25</span>
                    <strong className="text-zinc-900 dark:text-zinc-100 font-sans">Early Registration (Regional Quota)</strong>
                    <p className="text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
                      Submit registration form within early window. First 5 qualifying teams from NCR, Luzon, Visayas, Mindanao secure discounted slots.
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800">
                      ₱300.00 / pax
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Phase 2 · Sept 28–30</span>
                    <strong className="text-zinc-900 dark:text-zinc-100 font-sans">Regular Registration (Open Demographic)</strong>
                    <p className="text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
                      Non-quota and open entries processed first-come, first-served until the 40-team quota is reached.
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
                      ₱350.00 / pax
                    </span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Phase 3 · Payment & Confirmation</span>
                    <strong className="text-zinc-900 dark:text-zinc-100 font-sans">Payment Verification & Confirmation</strong>
                    <p className="text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
                      Upload proof of payment within 48 hours of form receipt. Unsettled slots will be released to waitlisted teams.
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-2 py-1 rounded text-zinc-500 text-[11px]">
                      Official PJDSC Team
                    </span>
                  </div>
                </div>
              </div>

              {/* Embedded reference visual schema */}
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-zinc-500">Official Flowchart Graphic</span>
                  <a
                    href="/docs/Early Registration (1).png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-[#234766] dark:text-[#6E9E94] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View full diagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-2 flex justify-center">
                  <Image
                    src="/docs/Early Registration (1).png"
                    alt="Registration Schema Flowchart"
                    width={720}
                    height={380}
                    className="w-full max-h-72 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COMPETITION STAGES */}
        {activeTab === "stages" && (
          <div className="space-y-4">
            {siteData.stages.map((stg) => (
              <div
                key={stg.id}
                className="p-5 rounded-lg wireframe-panel bg-white/60 dark:bg-zinc-900/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-base font-sans font-bold text-zinc-900 dark:text-zinc-100">
                    {stg.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#234766] dark:text-[#88beaf]">
                      {stg.date}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                      {stg.deliverable}
                    </span>
                  </div>
                </div>

                <p className="text-xs font-sans text-zinc-600 dark:text-zinc-300 mb-3 leading-relaxed">
                  {stg.summary}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-zinc-200/80 dark:border-zinc-800 text-xs font-sans text-zinc-600 dark:text-zinc-400">
                  {stg.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-zinc-400 mt-0.5">•</span>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: JUDGING CRITERIA */}
        {activeTab === "criteria" && (
          <div className="space-y-6">
            {/* Criteria Switcher */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-500">Evaluation Phase:</span>
              <div className="inline-flex rounded-md p-1 bg-zinc-200/60 dark:bg-zinc-800 text-xs font-mono">
                <button
                  onClick={() => setCriteriaType("elimination")}
                  className={`px-3 py-1 rounded transition-colors ${
                    criteriaType === "elimination"
                      ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-sm"
                      : "text-zinc-600 dark:text-zinc-400"
                  }`}
                >
                  Elimination Round (Top 10 Selection)
                </button>
                <button
                  onClick={() => setCriteriaType("finals")}
                  className={`px-3 py-1 rounded transition-colors ${
                    criteriaType === "finals"
                      ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold shadow-sm"
                      : "text-zinc-600 dark:text-zinc-400"
                  }`}
                >
                  Final Round (Live Culmination)
                </button>
              </div>
            </div>

            {/* Criteria Cards */}
            <div className="space-y-3">
              {(criteriaType === "elimination" ? siteData.criteriaElimination : siteData.criteriaFinals).map(
                (crit, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg wireframe-panel bg-white/60 dark:bg-zinc-900/40"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-sm font-sans font-bold text-zinc-900 dark:text-zinc-100">
                        {crit.category}
                      </h4>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[#234766] dark:text-[#E38363]">
                        {crit.weight}
                      </span>
                    </div>
                    <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400 mb-2">
                      {crit.description}
                    </p>
                    <ul className="space-y-1 text-xs font-sans text-zinc-600 dark:text-zinc-300">
                      {crit.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-zinc-400">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Resources & Template Downloads Footer Box */}
        <div className="mt-10 p-5 rounded-lg wireframe-panel bg-white/40 dark:bg-zinc-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono font-semibold text-zinc-900 dark:text-zinc-100">
              Download Official References & Submission Templates
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
              Access the proposal template, sponsorship proposal deck, and media kits.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <a
              href={siteData.event.proposalTemplateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <span>proposal template</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href="/docs/[PJDSC '26] Event Primer Content.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90 transition-opacity"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>raw primer (md)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
