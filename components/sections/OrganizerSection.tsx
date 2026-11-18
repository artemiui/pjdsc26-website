import Image from "next/image";
import { Mail, Facebook, Linkedin, Github } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function OrganizerSection() {
  const org = siteData.organizer;
  const links = [
    { href: `mailto:${org.socialLinks.email}`, label: "Email", icon: Mail, external: false },
    { href: org.socialLinks.facebook, label: "Facebook", icon: Facebook, external: true },
    { href: org.socialLinks.linkedin, label: "LinkedIn", icon: Linkedin, external: true },
    { href: org.socialLinks.github, label: "GitHub", icon: Github, external: true },
  ];

  return (
    <div className="pg">
      <header className="pg-head">
        <h1>{org.name}</h1>
        <p className="pg-lead">The pioneer data science organization at the University of the Philippines Diliman, founded in {org.founded}.</p>
      </header>

      <section className="org-identity" aria-label="About">
        <Image src="/assets/logos-ver2026/up dssoc/updssoclogoicon.png" alt="UP DSSoc logo" width={96} height={96} />
        <div>
          <p className="pg-meta">{org.acronym} · Founded {org.founded}</p>
          <p className="pg-text" style={{ marginTop: 8 }}>{org.description}</p>
          <div className="org-links">
            {links.map(({ href, label, icon: Icon, external }) => (
              <a key={label} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <Icon size={16} strokeWidth={1.5} aria-hidden="true" />{label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="pg-grid-2 pg-section" style={{ marginTop: 40 }}>
        <section className="pg-block">
          <h2 className="pg-h3">Our vision</h2>
          <p className="pg-text">{org.vision}</p>
        </section>
        <section className="pg-block">
          <h2 className="pg-h3">Our mission</h2>
          <p className="pg-text">{org.mission}</p>
        </section>
      </div>

      <section className="pg-section">
        <h2 className="pg-h2">Core values</h2>
        <div className="pg-grid-3">
          {org.coreValues.map(value => (
            <div key={value.title} className="pg-block">
              <h3 className="pg-h3">{value.title}</h3>
              <p className="pg-text">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
