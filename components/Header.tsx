"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [{href:"/",label:"Home"},{href:"/primer",label:"Primer"},{href:"/timeline",label:"Timeline"},{href:"/catalogue",label:"Catalogue"},{href:"/organizer",label:"Organizer"},{href:"/faq",label:"FAQ"},{href:"/sponsors",label:"Sponsors"}];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return <header className="site-header"><a className="skip-link" href="#main-content">Skip to content</a><div className="header-inner"><Link href="/" className="site-brand" onClick={() => setOpen(false)}><Image src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg" alt="" width={38} height={30} priority/><span>PJDSC</span></Link><nav aria-label="Main navigation" className="desktop-nav">{links.map(link => <Link href={link.href} key={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}</nav><Link href="/primer" className="header-cta">The challenge <ArrowUpRight size={15}/></Link><button ref={toggle} className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X/> : <Menu/>}</button></div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18}/></Link>)}</nav>}</header>;
}
