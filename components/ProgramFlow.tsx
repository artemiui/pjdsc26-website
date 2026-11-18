"use client";

import { useState } from "react";
import { finalsData } from "@/lib/finalsData";

const toMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

function formatTime(total: number, withPeriod = true) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${String(m).padStart(2, "0")}${withPeriod ? (h < 12 ? " AM" : " PM") : ""}`;
}

export default function ProgramFlow() {
  const [expanded, setExpanded] = useState(false);
  const { teamsPerBlock, minutes: slotMinutes, breakdown } = finalsData.presentationSlot;

  return (
    <>
      <div className="program-head">
        <button type="button" role="switch" aria-checked={expanded} className="program-toggle" onClick={() => setExpanded(v => !v)}>
          <span className="program-toggle-track" aria-hidden="true"><span /></span>
          Team time slots
        </button>
      </div>
      <ol className="program-list">
        {finalsData.program.map(item => {
          const start = toMinutes(item.start);
          const block = item.presentationBlock;
          return (
            <li key={item.title} className={block ? "is-presentation" : undefined}>
              <div className="program-time">
                <span>{formatTime(start)}</span>
                <span className="program-duration">{item.minutes} min</span>
              </div>
              <div>
                <h3>{item.title}</h3>
                {item.detail && <p>{item.detail}</p>}
                {block && expanded && (
                  <ol className="program-slots" aria-label={`Team slots, presentation block ${block}`}>
                    {Array.from({ length: teamsPerBlock }, (_, i) => {
                      const slotStart = start + i * slotMinutes;
                      const slotNumber = (block - 1) * teamsPerBlock + i + 1;
                      return (
                        <li key={slotNumber}>
                          <span className="program-slot-time">{formatTime(slotStart, false)}–{formatTime(slotStart + slotMinutes)}</span>
                          <span className="program-slot-name">Slot {slotNumber}</span>
                          <span className="program-slot-split">
                            {breakdown.map(part => <span key={part.label}>{part.minutes} min {part.label}</span>)}
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      {expanded && <p className="program-note">Each team has a {slotMinutes}-minute slot. The presentation order is drawn at random on the day.</p>}
    </>
  );
}
