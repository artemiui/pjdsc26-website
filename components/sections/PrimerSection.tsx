"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, FileText, ArrowUpRight } from "lucide-react";
import { siteData } from "@/lib/siteData";

interface PrimerSectionProps {
  onOpenRegister?: () => void;
}

export default function PrimerSection({ onOpenRegister }: PrimerSectionProps) {
  const [activeTab, setActiveTab] = useState<"mechanics" | "schema" | "stages" | "criteria">("mechanics");
  const [criteriaType, setCriteriaType] = useState<"elimination" | "finals">("elimination");

  return (
    <section className="space-y-8 py-6">
      {/* Title */}
      <div className="space-y-1">
        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
          primer / guidelines
        </span>
        <h2 className="text-2xl font-mono font-bold text-foreground">
          Event Primer & Mechanics
        </h2>
        <p className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400">
          Official competition mechanics, regional quotas, submission milestones, and rubrics.
        </p>
      </div>

      {/* Minimalist Sub-Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-2.5 text-xs font-mono">
        <button
          onClick={() => setActiveTab("mechanics")}
          className={`${
            activeTab === "mechanics"
              ? "text-foreground font-semibold border-b border-foreground pb-0.5"
              : "text-zinc-500 hover:text-foreground"
          } transition-colors cursor-pointer`}
        >
          eligibility & rules
        </button>
        <button
          onClick={() => setActiveTab("schema")}
          className={`${
            activeTab === "schema"
              ? "text-foreground font-semibold border-b border-foreground pb-0.5"
              : "text-zinc-500 hover:text-foreground"
          } transition-colors cursor-pointer`}
        >
          registration schema
        </button>
        <button
          onClick={() => setActiveTab("stages")}
          className={`${
            activeTab === "stages"
              ? "text-foreground font-semibold border-b border-foreground pb-0.5"
              : "text-zinc-500 hover:text-foreground"
          } transition-colors cursor-pointer`}
        >
          stages & deliverables
        </button>
        <button
          onClick={() => setActiveTab("criteria")}
          className={`${
            activeTab === "criteria"
              ? "text-foreground font-semibold border-b border-foreground pb-0.5"
              : "text-zinc-500 hover:text-foreground"
          } transition-colors cursor-pointer`}
        >
          judging criteria
        </button>
      </div>

      {/* TAB 1: ELIGIBILITY & MECHANICS */}
      {activeTab === "mechanics" && (
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
              1. Team Eligibility
            </h3>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <li>The competition is open to teams composed of <strong>3 to 5 members</strong>.</li>
              <li>Each member must be at least a <strong>senior high school student</strong> or an <strong>undergraduate / tertiary student</strong> enrolled in an accredited Philippine institution.</li>
              <li>Members <strong>do not need to be from the same school or university</strong>. Inter-university and inter-regional teams are welcomed.</li>
              <li>Undergraduate students currently on official <strong>Leave of Absence (LOA)</strong> remain eligible to participate.</li>
              <li>Members of the UP Data Science Society may compete, provided they are not Executive Board members, Vice-Directors, or PJDSC 2026 managing core members.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
              2. Capacity & Demographic Quotas
            </h3>
            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <li>Registration is capped strictly at a maximum of <strong>40 teams nationwide</strong> on a first-come, first-served basis.</li>
              <li><strong>Early Registration Period:</strong> A regional demographic quota will be enforced (NCR: 5 slots, Luzon: 5 slots, Visayas: 5 slots, Mindanao: 5 slots). Teams may represent a region if at least one member or their home institution originates from that region.</li>
              <li><strong>Regular Registration Period:</strong> All remaining slots will open to any demographic on an open, first-come, first-served basis.</li>
              <li><strong>Mandatory Launch Attendance:</strong> To advance to the development phase, at least one representative must attend the virtual Event Launch on October 10, 2026.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
              3. Registration Fees & Policies
            </h3>
            <p className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Registration fees are <strong>₱300.00 per member</strong> during Early Registration and <strong>₱350.00 per member</strong> during Regular Registration. Fees cover workshop materials, mentorship matching, evaluation, and event access. A strict no-refund policy is enforced once slots are secured.
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: REGISTRATION SCHEMA */}
      {activeTab === "schema" && (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
              Registration Flowchart & Verification
            </h3>
            <div className="space-y-4 pl-1 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">
              <div className="relative pl-5 space-y-1">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                <h4 className="font-mono font-medium text-sm text-foreground">
                  Step 1: Early Registration (Sept 21–25, 2026)
                </h4>
                <p className="text-xs font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Opens Sept 21 at 5:00 PM. Teams submit the Google Form. Regional quota applies (first 5 per region). Qualifiers pay the discounted fee of ₱300.00/pax.
                </p>
              </div>

              <div className="relative pl-5 space-y-1">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                <h4 className="font-mono font-medium text-sm text-foreground">
                  Step 2: Regular Registration (Sept 28–30, 2026)
                </h4>
                <p className="text-xs font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Opens Sept 28 at 12:00 AM. Open demographic first-come, first-served until the 40-team cap is reached. Standard fee of ₱350.00/pax.
                </p>
              </div>

              <div className="relative pl-5 space-y-1">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                <h4 className="font-mono font-medium text-sm text-foreground">
                  Step 3: Verification & Official Confirmation
                </h4>
                <p className="text-xs font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Upon fee receipt validation, your team is officially inducted as a PJDSC 2026 participating team. Unpaid slots are forfeited and released to the waitlist.
                </p>
              </div>
            </div>

            {/* Clean Flowchart Preview */}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between mb-2 text-xs font-mono">
                <span className="text-zinc-500">Official Schema Schema Graphic</span>
                <a
                  href="/docs/Early Registration (1).png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  <span>open full image</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="border border-zinc-200 dark:border-zinc-800 p-2 rounded flex justify-center">
                <Image
                  src="/docs/Early Registration (1).png"
                  alt="Registration Schema"
                  width={680}
                  height={360}
                  className="w-full max-h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: STAGES & DELIVERABLES */}
      {activeTab === "stages" && (
        <div className="space-y-6">
          <div className="space-y-6 pl-1 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">
            {siteData.stages.map((stg) => (
              <div key={stg.id} className="relative pl-5 space-y-2">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="font-mono font-medium text-sm text-foreground">
                    {stg.name}
                  </h4>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {stg.date} · {stg.deliverable}
                  </span>
                </div>
                <p className="text-xs font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {stg.summary}
                </p>
                <ul className="list-disc list-inside space-y-1 pt-1 text-xs font-sans text-zinc-500 dark:text-zinc-400">
                  {stg.requirements.map((req, rIdx) => (
                    <li key={rIdx}>{req}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: JUDGING CRITERIA */}
      {activeTab === "criteria" && (
        <div className="space-y-6">
          {/* Minimal toggle */}
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-zinc-400">round:</span>
            <button
              onClick={() => setCriteriaType("elimination")}
              className={`${
                criteriaType === "elimination"
                  ? "text-foreground font-semibold border-b border-foreground"
                  : "text-zinc-500 hover:text-foreground"
              } transition-colors cursor-pointer`}
            >
              elimination round (top 10 selection)
            </button>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <button
              onClick={() => setCriteriaType("finals")}
              className={`${
                criteriaType === "finals"
                  ? "text-foreground font-semibold border-b border-foreground"
                  : "text-zinc-500 hover:text-foreground"
              } transition-colors cursor-pointer`}
            >
              final round (live culmination)
            </button>
          </div>

          <div className="space-y-4 pt-2">
            {(criteriaType === "elimination" ? siteData.criteriaElimination : siteData.criteriaFinals).map(
              (crit, i) => (
                <div key={i} className="pb-3 border-b border-zinc-100 dark:border-zinc-900 space-y-1">
                  <div className="flex items-baseline justify-between text-xs font-mono">
                    <span className="font-semibold text-foreground">
                      {crit.category}
                    </span>
                    <span className="text-[#234766] dark:text-[#E38363] font-bold">
                      {crit.weight}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400">
                    {crit.description}
                  </p>
                  <ul className="list-disc list-inside text-xs font-sans text-zinc-600 dark:text-zinc-400 pt-0.5 space-y-0.5">
                    {crit.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Raw Documents Links */}
      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <a
          href={siteData.event.proposalTemplateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          <span>concept proposal template</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <span>·</span>
        <a
          href="/docs/[PJDSC '26] Event Primer Content.md"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>raw primer document (markdown)</span>
        </a>
      </div>
    </section>
  );
}
