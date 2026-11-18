import Image from "next/image";
import { Mail } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function SponsorsSection() {
  return (
    <div className="pg">
      <header className="pg-head">
        <h1>Sponsors and partners</h1>
        <p className="pg-lead">Supported by industry, academic institutions, and student organizations advancing Philippine data science and public health analytics.</p>
      </header>

      {siteData.sponsors.map(tier => {
        const compact = tier.name === "Official partners";
        const cols = compact ? 4 : Math.min(Math.max(tier.slots.length, 2), 4);
        return (
          <section key={tier.name} className="sponsor-tier">
            <h2 className="pg-h2">{tier.name}</h2>
            <ul className={`sponsor-wall${compact ? " is-compact" : ""}`} style={{ ["--cols" as string]: cols }}>
              {tier.slots.map(slot => (
                <li key={slot.name} className="sponsor-cell">
                  <div className="sponsor-logo">
                    {slot.logo
                      ? <Image src={slot.logo} alt="" fill sizes="(max-width: 760px) 50vw, 25vw" className="object-contain" />
                      : null}
                  </div>
                  <span>{slot.name}</span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <section className="sponsor-cta">
        <h2 className="pg-h2">Partner with PJDSC 2026</h2>
        <p className="pg-text">Collaborate with UP DSSoc to empower over 600 student data scientists across 30+ universities nationwide. Gain recruitment visibility, deliver keynote sessions, and mentor future leaders.</p>
        <a className="event-button primary" href={`mailto:${siteData.event.contactEmail}?subject=PJDSC%202026%20Sponsorship%20Inquiry`}>
          Inquire about sponsorship <Mail size={16} strokeWidth={1.75} />
        </a>
      </section>
    </div>
  );
}
