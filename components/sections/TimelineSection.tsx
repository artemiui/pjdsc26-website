"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/lib/siteData";

const phases = [
  { id: "all", label: "All milestones" },
  { id: "registration", label: "Registration" },
  { id: "proposal", label: "Concept proposal" },
  { id: "development", label: "Development" },
  { id: "finals", label: "Finals and pitching" },
] as const;

const phaseInfo: Record<string, { label: string; color: string }> = {
  registration: { label: "Registration", color: "#234766" },
  proposal: { label: "Concept proposal", color: "#6e9e94" },
  development: { label: "Development", color: "#347765" },
  finals: { label: "Finals", color: "#e38363" },
};

export default function TimelineSection() {
  const [phaseFilter, setPhaseFilter] = useState<string>("all");
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const items = phaseFilter === "all" ? siteData.timeline : siteData.timeline.filter(item => item.phase === phaseFilter);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 8);
      setCanScrollRight(el.scrollLeft < max - 8);
      // Fill shows how much of the track has been seen so far.
      if (barRef.current) barRef.current.style.transform = `scaleX(${Math.min(1, (el.scrollLeft + el.clientWidth) / el.scrollWidth)})`;
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [phaseFilter]);

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.8, 352), behavior: "smooth" });
  };

  return (
    <div className="pg">
      <header className="pg-head">
        <h1>Event timeline</h1>
        <p className="pg-lead">Key milestones from registration to the face-to-face final round at UP Diliman.</p>
      </header>

      <div className="pg-toolbar">
        <div className="pg-tabs" role="tablist" aria-label="Competition phases">
          {phases.map(p => (
            <button key={p.id} type="button" role="tab" aria-selected={phaseFilter === p.id} onClick={() => { setPhaseFilter(p.id); trackRef.current?.scrollTo({ left: 0 }); }}>
              {p.label}
            </button>
          ))}
        </div>
        <div className="tl-controls">
          <button type="button" onClick={() => scrollBy(-1)} disabled={!canScrollLeft} aria-label="Scroll timeline back"><ChevronLeft size={18} strokeWidth={1.5} /></button>
          <button type="button" onClick={() => scrollBy(1)} disabled={!canScrollRight} aria-label="Scroll timeline forward"><ChevronRight size={18} strokeWidth={1.5} /></button>
        </div>
      </div>

      <div ref={trackRef} className="tl-track pg-panel" key={phaseFilter} tabIndex={0} aria-label="Milestones, scroll sideways">
        {items.map(item => {
          const phase = phaseInfo[item.phase];
          return (
            <article key={item.title} className={`tl-item${item.highlight ? " is-key" : ""}`}>
              <div className="tl-node" aria-hidden="true"><span /></div>
              <span className="tl-phase"><i className="pg-dot" style={{ background: phase.color }} />{phase.label}{item.highlight ? " · Key milestone" : ""}</span>
              <time className="tl-date">{item.date}</time>
              <h2 className="pg-h3">{item.title}</h2>
              <p className="pg-text">{item.description}</p>
              {item.link && (
                <Link href={item.link} className="pg-link">{item.linkLabel || "Read programme"} <ArrowUpRight size={14} /></Link>
              )}
            </article>
          );
        })}
      </div>

      <div className="tl-foot">
        <div className="tl-scrollbar" aria-hidden="true"><span ref={barRef} /></div>
        <p className="pg-meta">All times are in Philippine Standard Time (UTC+8) and may be updated.</p>
      </div>
    </div>
  );
}
