import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import { siteData } from "@/lib/siteData";

// Archive of the Project Development Workshop (October 17, 2026).
export default function ProgrammeSection() {
  const prog = siteData.programme;

  return (
    <div className="pg">
      <header className="pg-head">
        <Link href="/timeline" className="pg-back"><ArrowLeft size={16} strokeWidth={1.5} /> Back to timeline</Link>
        <h1>{prog.title || "Project Development Workshop Programme"}</h1>
        <p className="pg-lead">The Project Development Workshop was held on {prog.date} at the {prog.venueName}, with an online session for remote participants. This page is kept as a record of the day.</p>
      </header>

      <dl className="prog-facts">
        <div><dt>Date</dt><dd>{prog.date}</dd></div>
        <div><dt>Time</dt><dd>{prog.time} (Philippine time)</dd></div>
        <div><dt>Venue</dt><dd>{prog.venueName} · <a className="pg-link" href={prog.venueMapsUrl} target="_blank" rel="noopener noreferrer">Map <ArrowUpRight size={14} /></a></dd></div>
        {prog.attachment && (
          <div>
            <dt>Workshop materials</dt>
            <dd><a className="pg-link" href={prog.attachment.url} download={prog.attachment.name}><Download size={14} strokeWidth={1.75} /> {prog.attachment.name}</a>{prog.attachment.fileSize && <span className="pg-meta"> · {prog.attachment.fileSize}</span>}</dd>
          </div>
        )}
      </dl>

      <section className="pg-section">
        <h2 className="pg-h2">Programme flow</h2>
        <ol className="prog-schedule">
          {prog.schedule.map(item => (
            <li key={item.title + item.time} className={item.isBreak ? "is-break" : undefined}>
              <time>{item.time}</time>
              <span>{item.title}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="pg-links">
        <Link className="pg-link" href="/finals">Finalist primer <ArrowUpRight size={14} /></Link>
        <Link className="pg-link" href="/primer">Event primer and rules <ArrowUpRight size={14} /></Link>
      </div>
    </div>
  );
}
