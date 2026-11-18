import type { Metadata } from "next";
import { ArrowUpRight, Plus } from "lucide-react";
import { finalsData } from "@/lib/finalsData";
import { siteData } from "@/lib/siteData";
import SeatingPlan from "@/components/SeatingPlan";
import ProgramFlow from "@/components/ProgramFlow";

export const metadata: Metadata = {
  title: "Finalist primer | PJDSC 2026",
  description:
    "Program flow, venue details, seating plan, and answers for the Top 10 finalists of the Philippine Junior Data Science Challenge 2026.",
};

const sections = [
  { id: "program-flow", label: "Program flow" },
  { id: "venue", label: "Venue details" },
  { id: "seating", label: "Seating plan" },
  { id: "faq", label: "FAQ" },
];

function Tba({ children = "TBA" }: { children?: string }) {
  return <span className="tba">{children}</span>;
}

export default function FinalsPage() {
  return (
    <div className="finals-page">
      <header className="finals-intro">
        <div className="finals-intro-copy">
          <p className="final-round-tag is-static"><span className="final-round-label">FINAL ROUND</span><span className="final-round-date">{finalsData.shortDate}</span></p>
          <h1>Finalist primer</h1>
          <p className="finals-lead">What the Top 10 teams need for the face-to-face finals: the day&rsquo;s program, where to go, where to sit, and answers to common questions.</p>
          <p className="finals-note">Any changes will be posted here and on the <a href={siteData.event.facebookLink} target="_blank" rel="noopener noreferrer">PJDSC Facebook page</a>.</p>
        </div>
        <dl className="finals-facts">
          <div><dt>Date</dt><dd>{finalsData.dateDisplay}</dd></div>
          <div><dt>Time</dt><dd>8:00 AM to 5:00 PM</dd></div>
          <div><dt>Location</dt><dd>{finalsData.venueName}</dd></div>
          <div><dt>Format</dt><dd>10-min presentation, 10-min Q&amp;A, demo station</dd></div>
        </dl>
      </header>

      <div className="finals-body">
        <nav className="finals-toc" aria-label="On this page">
          <ul>{sections.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>)}</ul>
        </nav>

        <div className="finals-sections">
          <section id="program-flow" aria-labelledby="program-flow-heading">
            <h2 id="program-flow-heading">Program flow</h2>
            <ProgramFlow />

            <h3 className="finals-subhead">On stage</h3>
            <dl className="stage-rules">
              <div><dt>Presentation</dt><dd><strong>10 minutes</strong>Strictly enforced. Teams are stopped at the limit.</dd></div>
              <div><dt>Q&amp;A</dt><dd><strong>10 minutes</strong>Questions from the panel of judges.</dd></div>
              <div><dt>Demo station</dt><dd><strong>Exhibit only</strong>Open to visitors and not part of scoring.</dd></div>
            </dl>

            <h3 className="finals-subhead">Finals judging rubric</h3>
            <p className="rubric-intro">Five criteria, 100% in total. Open a criterion to see what earns each score.</p>
            <ul className="criteria-list">
              {siteData.criteriaFinals.map(c => (
                <li key={c.category}>
                  <details className="rubric">
                    <summary>
                      <div className="rubric-summary">
                        <div className="criteria-row"><span>{c.category}</span><span className="criteria-weight">{c.weight}</span></div>
                        <div className="criteria-bar" aria-hidden="true"><span style={{ width: c.weight }} /></div>
                        <p>{c.points.join(" · ")}</p>
                      </div>
                      <Plus size={18} strokeWidth={1.5} aria-hidden="true" />
                    </summary>
                    {c.subcriteria?.map(sub => (
                      <div key={sub.name} className="rubric-sub">
                        <h4><span>{sub.name}</span><span className="criteria-weight">{sub.weight}</span></h4>
                        <dl className="rubric-levels">
                          {sub.levels.map(level => (
                            <div key={level.label} className={`rubric-level is-${level.label.toLowerCase()}`}>
                              <dt>{level.label}<span>{level.range}</span></dt>
                              <dd>{level.text}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </details>
                </li>
              ))}
            </ul>
          </section>

          <section id="venue" aria-labelledby="venue-heading">
            <h2 id="venue-heading">Venue details</h2>
            <p className="finals-section-lead">The finals take place face to face at the {finalsData.venueName}, National Science Complex, UP Diliman.</p>
            <dl className="venue-list">
              {finalsData.venue.map(v => (
                <div key={v.label}>
                  <dt>{v.label}</dt>
                  <dd>{v.value ? (v.href ? <a href={v.href} target="_blank" rel="noopener noreferrer">{v.value} <ArrowUpRight size={14} /></a> : v.value) : <Tba />}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="seating" aria-labelledby="seating-heading">
            <h2 id="seating-heading">Seating plan</h2>
            <p className="finals-section-lead">Every finalist team has a reserved block of seats. Find your team below to see where you sit.</p>
            <SeatingPlan />
          </section>

          <section id="faq" aria-labelledby="faq-heading">
            <h2 id="faq-heading">FAQ</h2>
            <div className="finals-faq">
              {finalsData.faqs.map(f => (
                <details key={f.question}>
                  <summary>{f.question}<Plus size={18} strokeWidth={1.5} aria-hidden="true" /></summary>
                  <div className="faq-answer">{f.answer ? <p>{f.answer}</p> : <p><Tba /> The organizing team will confirm this before the finals.</p>}</div>
                </details>
              ))}
            </div>
            <p className="finals-contact">Still unsure? Email the team at <a href={`mailto:${siteData.event.contactEmail}`}>{siteData.event.contactEmail}</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}
