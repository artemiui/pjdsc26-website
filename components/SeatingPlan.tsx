"use client";

import { useEffect, useRef, useState } from "react";
import { finalsData } from "@/lib/finalsData";

// Geometry follows the official CS Auditorium seat assignment design.
// Rows are numbered from the stage outward; the stage sits at the bottom.
const PITCH = 31;
const SEAT = 26;
const CX = 500;
const CENTER_ROWS = [
  { y: 399, start: 1, count: 7 },
  { y: 342, start: 8, count: 8 },
  { y: 283, start: 16, count: 9 },
  { y: 226, start: 25, count: 10 },
  { y: 167, start: 35, count: 11 },
  { y: 110, start: 46, count: 12, unlabeledUntil: 53 },
];
const WING_ROWS = [
  { start: 1, count: 5 },
  { start: 6, count: 6 },
  { start: 12, count: 6 },
  { start: 18, count: 7 },
  { start: 25, count: 6 },
  { start: 31, count: 6 },
];
const ANGLE = 31;
const RAD = (ANGLE * Math.PI) / 180;

interface Seat { code: string; x: number; y: number; rotate: number; label: boolean }

function buildSeats(): Seat[] {
  const seats: Seat[] = [];
  for (const row of CENTER_ROWS) {
    const x0 = CX - ((row.count - 1) * PITCH) / 2;
    for (let i = 0; i < row.count; i++) {
      const n = row.start + i;
      seats.push({ code: `C${n}`, x: x0 + i * PITCH, y: row.y, rotate: 0, label: !(row.unlabeledUntil && n <= row.unlabeledUntil) });
    }
  }
  WING_ROWS.forEach((row, k) => {
    const sx = 708 + k * 13;
    const sy = 418 - k * 60;
    for (let j = 0; j < row.count; j++) {
      const x = sx + j * PITCH * Math.cos(RAD);
      const y = sy + j * PITCH * Math.sin(RAD);
      seats.push({ code: `R${row.start + j}`, x, y, rotate: ANGLE, label: true });
      // Left wing is numbered from the outer aisle inward, mirroring the right.
      seats.push({ code: `L${row.start + row.count - 1 - j}`, x: 1000 - x, y, rotate: -ANGLE, label: true });
    }
  });
  return seats;
}

const SEATS = buildSeats();
const seatTeam = new Map<string, number>();
for (const team of finalsData.teams) for (const code of team.seats) seatTeam.set(code, team.number);

function seatRange(seats: string[]) {
  return seats.length > 1 ? `${seats[0]}–${seats[seats.length - 1]}` : seats[0];
}

export default function SeatingPlan() {
  const [pinned, setPinned] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? pinned;
  const toggle = (n: number) => setPinned(p => (p === n ? null : n));
  const scroller = useRef<HTMLDivElement>(null);
  // On narrow screens the map scrolls sideways; start on the center block.
  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);

  return (
    <figure className="seat-plan">
      <div className="seat-scroll" ref={scroller}>
        <svg viewBox="60 84 880 476" className="seat-map" role="img" aria-label={`Seating plan for the CS Auditorium. The stage is at the front. ${finalsData.teams.map(t => `Team ${t.number}, ${t.name}: seats ${seatRange(t.seats)}`).join(". ")}.`}>
          {SEATS.map(seat => {
            const team = seatTeam.get(seat.code);
            const state = team === undefined ? "free" : active === null ? "team" : active === team ? "team is-active" : "team is-dim";
            return (
              <g key={seat.code} className={`seat ${state}`} transform={`translate(${seat.x} ${seat.y}) rotate(${seat.rotate})`}
                onClick={team ? () => toggle(team) : undefined}
                onMouseEnter={team ? () => setHovered(team) : undefined}
                onMouseLeave={team ? () => setHovered(null) : undefined}>
                <rect x={-SEAT / 2} y={-SEAT / 2} width={SEAT} height={SEAT} rx={5} />
                {team !== undefined
                  ? <text transform={`rotate(${-seat.rotate})`} className="seat-team-no">{team}</text>
                  : seat.label && <text className="seat-code">{seat.code}</text>}
              </g>
            );
          })}
          <g className="seat-stage">
            <rect x={380} y={470} width={240} height={90} rx={4} />
            <text x={500} y={520}>Stage</text>
          </g>
        </svg>
      </div>
      <figcaption>
        <p className="seat-summary">{finalsData.seatsReserved} seats reserved for {finalsData.teams.length} finalist teams. Select a team to find its seats.</p>
        <ul className="seat-teams" onMouseLeave={() => setHovered(null)}>
          {finalsData.teams.map(team => (
            <li key={team.number}>
              <button type="button" aria-pressed={pinned === team.number} className={active === team.number ? "is-active" : undefined}
                onClick={() => toggle(team.number)} onMouseEnter={() => setHovered(team.number)} onFocus={() => setHovered(team.number)} onBlur={() => setHovered(null)}>
                <span className="seat-team-badge">{team.number}</span>
                <span className="seat-team-name">{team.name}</span>
                <span className="seat-team-seats">{seatRange(team.seats)}</span>
              </button>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
