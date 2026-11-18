"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRight, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { finalsData } from "@/lib/finalsData";

// Launcher-style announcement shown once per browser session on site open.
const STORAGE_KEY = "pjdsc-finals-announcement-seen";
const VOLUME = 0.5;

export default function FinalsAnnouncement() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [muted, setMuted] = useState(false);
  const [soundBlocked, setSoundBlocked] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [ended, setEnded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const primaryRef = useRef<HTMLAnchorElement>(null);

  // Decide once, on first load. Visitors arriving on the primer itself skip it.
  useEffect(() => {
    if (pathname === "/finals") return;
    let seen = false;
    try { seen = sessionStorage.getItem(STORAGE_KEY) === "1"; } catch {}
    if (!seen) setOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open) return;
    const video = videoRef.current;
    if (!video) return;
    router.prefetch("/finals");
    document.documentElement.style.overflow = "hidden";
    primaryRef.current?.focus({ preventScroll: true });

    video.volume = VOLUME;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setWaiting(true);
    } else {
      video.muted = false;
      video.play().catch(() => {
        // Browsers refuse audible autoplay until the visitor interacts.
        video.muted = true;
        setMuted(true);
        setSoundBlocked(true);
        video.play().catch(() => setWaiting(true));
      });
    }

    let frame = 0;
    const tick = () => {
      if (barRef.current && video.duration) barRef.current.style.transform = `scaleX(${video.currentTime / video.duration})`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.style.overflow = "";
    };
  }, [open, router]);

  const close = useCallback(() => {
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    videoRef.current?.pause();
    setClosing(true);
    window.setTimeout(() => setOpen(false), 260);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { close(); return; }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    video.volume = VOLUME;
    setMuted(video.muted);
    setSoundBlocked(false);
    if (video.paused && !video.ended) video.play().then(() => setWaiting(false)).catch(() => {});
  };

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended) video.currentTime = 0;
    video.play().then(() => { setWaiting(false); setEnded(false); }).catch(() => {});
  };

  if (!open) return null;

  return (
    <div ref={dialogRef} className={`launch${closing ? " is-closing" : ""}`} role="dialog" aria-modal="true" aria-labelledby="launch-title">
      <header className="launch-top">
        <span className="launch-brand"><Image src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg" alt="" width={32} height={25} />PJDSC 2026</span>
        <button type="button" className={`launch-sound${soundBlocked ? " is-blocked" : ""}`} onClick={toggleSound} aria-pressed={!muted}>
          {muted ? <VolumeX size={16} strokeWidth={1.75} aria-hidden="true" /> : <Volume2 size={16} strokeWidth={1.75} aria-hidden="true" />}
          {soundBlocked ? "Turn on sound" : muted ? "Sound off" : "Sound on"}
        </button>
      </header>

      <div className="launch-stage">
        <div className="launch-frame">
          <video
            ref={videoRef}
            src="/media/finals-announcement.mp4"
            poster="/media/finals-announcement-poster.jpg"
            playsInline
            preload="auto"
            onEnded={() => setEnded(true)}
            onClick={soundBlocked ? toggleSound : undefined}
            aria-label="PJDSC 2026 recap: 36 teams submitted projects across 11 public health topic areas, 10 finalists, and highlights of finalist projects, ending with the culmination and awarding on Saturday, November 21, 2026."
          />
          {(ended || waiting) && (
            <button type="button" className="launch-replay" onClick={play}>
              {ended ? <RotateCcw size={16} strokeWidth={1.75} aria-hidden="true" /> : <Play size={16} strokeWidth={1.75} aria-hidden="true" />}
              {ended ? "Replay" : "Play announcement"}
            </button>
          )}
        </div>
      </div>

      <footer className="launch-bottom">
        <div className="launch-progress" aria-hidden="true"><span ref={barRef} /></div>
        <div className="launch-info">
          <p className="final-round-tag is-static"><span className="final-round-label">FINAL ROUND</span><span className="final-round-date">{finalsData.shortDate}</span></p>
          <h2 id="launch-title">Ten teams. One stage.</h2>
          <p>{finalsData.dateDisplay} · {finalsData.venueName}, UP Diliman</p>
        </div>
        <div className="launch-actions">
          <button type="button" className="launch-secondary" onClick={close}>Continue to site <kbd>Esc</kbd></button>
          <Link ref={primaryRef} href="/finals" className="launch-primary" onClick={close}>Open finalist primer <ArrowUpRight size={20} aria-hidden="true" /></Link>
        </div>
      </footer>
    </div>
  );
}
