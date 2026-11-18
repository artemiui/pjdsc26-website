"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { siteData } from "@/lib/siteData";

const tabs = [
  { id: "mechanics", label: "Eligibility and rules" },
  { id: "schema", label: "Registration" },
  { id: "stages", label: "Stages" },
  { id: "criteria", label: "Judging" },
] as const;
type TabId = (typeof tabs)[number]["id"];

const rules = [
  {
    title: "Team eligibility",
    items: [
      "Teams of **3 to 5 members** from any accredited Philippine institution.",
      "Open to **senior high school** and **undergraduate / tertiary** students.",
      "**Cross-university** and inter-regional teams are welcome.",
      "Students on **Leave of Absence (LOA)** remain eligible.",
    ],
  },
  {
    title: "Capacity and quotas",
    items: [
      "Maximum **40 teams nationwide** (first-come, first-served).",
      "**Early Registration:** 5 slots per region (NCR, Luzon, Visayas, Mindanao).",
      "**Regular Registration:** Open to all demographics.",
      "At least one representative must attend the **Virtual Launch (Oct 10)**.",
    ],
  },
  {
    title: "Registration fees",
    items: [
      "**Early Bird:** ₱300.00 per member (Sept 21, 5:00 PM – Sept 25, 11:59 PM).",
      "**Regular:** ₱350.00 per member (Sept 28, 5:00 PM – Sept 30, 11:59 PM).",
      "Covers workshops, mentorship, evaluation, and event access.",
      "**Strict no-refund policy** once slots are secured.",
    ],
  },
  {
    title: "Important notes",
    items: [
      "UP DSSoc members may compete (excluding ExecBoard & PJDSC core).",
      "Proof of enrollment may be requested during verification.",
      "Unpaid slots are forfeited and released to the waitlist.",
    ],
  },
];

const steps = [
  { title: "Early registration", date: "Sept 21–25, 2026", detail: "Regional quota (5 per region). Early bird fee ₱300/pax. Sept 21 (5:00 PM) – Sept 25 (11:59 PM)." },
  { title: "Regular registration", date: "Sept 28–30, 2026", detail: "Open demographic, first-come first-served until 40-team cap. Sept 28 (5:00 PM) – Sept 30 (11:59 PM). Standard fee ₱350/pax." },
  { title: "Verification", date: "Upon payment", detail: "Fee receipt validated, team officially confirmed. Unpaid slots forfeited to waitlist." },
];

const withBold = (text: string) => ({ __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") });

export default function PrimerSection() {
  const [activeTab, setActiveTab] = useState<TabId>("mechanics");
  const [criteriaType, setCriteriaType] = useState<"elimination" | "finals">("elimination");
  const criteria = criteriaType === "elimination" ? siteData.criteriaElimination : siteData.criteriaFinals;

  return (
    <div className="pg">
      <header className="pg-head">
        <h1>Event primer and mechanics</h1>
        <p className="pg-lead">Eligibility, the registration flow, the competition stages, and how your work is evaluated.</p>
      </header>

      <div className="pg-toolbar">
        <div className="pg-tabs" role="tablist" aria-label="Primer sections">
          {tabs.map(tab => (
            <button key={tab.id} type="button" role="tab" aria-selected={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div key={activeTab} className="pg-panel" role="tabpanel">
        {activeTab === "mechanics" && (
          <div className="pg-grid-2">
            {rules.map(block => (
              <section key={block.title} className="pg-block">
                <h2 className="pg-h3">{block.title}</h2>
                <ul className="pg-list">
                  {block.items.map(item => <li key={item} dangerouslySetInnerHTML={withBold(item)} />)}
                </ul>
              </section>
            ))}
          </div>
        )}

        {activeTab === "schema" && (
          <>
            <ol className="pg-grid-3 primer-steps">
              {steps.map((step, i) => (
                <li key={step.title} className="pg-block">
                  <span className="pg-meta">Step {i + 1}</span>
                  <h2 className="pg-h3">{step.title}</h2>
                  <span className="primer-step-date">{step.date}</span>
                  <p className="pg-text">{step.detail}</p>
                </li>
              ))}
            </ol>
            <figure className="primer-figure">
              <figcaption>
                Registration workflow
                <a className="pg-link" href="/docs/Early Registration (1).png" target="_blank" rel="noopener noreferrer">Full image <ArrowUpRight size={14} /></a>
              </figcaption>
              <div>
                <Image src="/docs/Early Registration (1).png" alt="Registration workflow diagram" width={720} height={380} className="w-full max-h-80 object-contain" />
              </div>
            </figure>
          </>
        )}

        {activeTab === "stages" && (
          <div>
            {siteData.stages.map(stage => (
              <section key={stage.id} className="primer-stage">
                <div className="primer-stage-meta">
                  <h2 className="pg-h3">{stage.name}</h2>
                  <span className="primer-step-date">{stage.date}</span>
                  <span className="pg-meta">{stage.deliverable}</span>
                </div>
                <div>
                  <p className="pg-text">{stage.summary}</p>
                  <ul className="pg-list">
                    {stage.requirements.map(req => <li key={req}>{req}</li>)}
                  </ul>
                  {"note" in stage && stage.note && <p className="pg-note"><strong>Note: </strong>{stage.note}</p>}
                </div>
              </section>
            ))}
          </div>
        )}

        {activeTab === "criteria" && (
          <>
            <div className="pg-subtabs" role="tablist" aria-label="Round">
              <button type="button" role="tab" aria-selected={criteriaType === "elimination"} onClick={() => setCriteriaType("elimination")}>Elimination round</button>
              <button type="button" role="tab" aria-selected={criteriaType === "finals"} onClick={() => setCriteriaType("finals")}>Final round</button>
            </div>
            <ul className="primer-criteria pg-rule">
              {criteria.map(c => (
                <li key={c.category}>
                  <h2 className="pg-h3">{c.category}</h2>
                  <span className="criteria-weight">{c.weight}</span>
                  <p className="pg-text">{[c.description, c.points.join(" · ")].filter(Boolean).join(". ")}</p>
                </li>
              ))}
            </ul>
            {criteriaType === "finals" && (
              <p className="pg-contact">The full finals rubric, with what earns each score, is in the <Link href="/finals#program-flow">finalist primer</Link>.</p>
            )}
          </>
        )}
      </div>

      <div className="pg-links">
        <a className="pg-link" href={siteData.event.proposalTemplateLink} target="_blank" rel="noopener noreferrer">Concept proposal template <ArrowUpRight size={14} /></a>
        <a className="pg-link" href={siteData.event.githubRepoLink} target="_blank" rel="noopener noreferrer"><Github size={16} strokeWidth={1.5} /> Official datasets repository <ArrowUpRight size={14} /></a>
      </div>
    </div>
  );
}
