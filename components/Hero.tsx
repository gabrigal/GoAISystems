"use client";

import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 1a5 5 0 1 1 0 10A5 5 0 0 1 8 3zm-1 7l-2-2 .7-.7 1.3 1.3 2.8-2.8.7.7L7 10z" fill="#22d3ee"/>
      </svg>
    ),
    text: "AI answers every call 24/7",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 1a5 5 0 1 1 0 10A5 5 0 0 1 8 3zm-1 7l-2-2 .7-.7 1.3 1.3 2.8-2.8.7.7L7 10z" fill="#22d3ee"/>
      </svg>
    ),
    text: "Instant SMS + email follow-up",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2zm0 1a5 5 0 1 1 0 10A5 5 0 0 1 8 3zm-1 7l-2-2 .7-.7 1.3 1.3 2.8-2.8.7.7L7 10z" fill="#22d3ee"/>
      </svg>
    ),
    text: "Appointments booked to your calendar",
  },
];

const integrations = [
  "Google Calendar",
  "Follow Up Boss",
  "Go HighLevel",
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      hero.style.setProperty("--parallax-x", `${x}px`);
      hero.style.setProperty("--parallax-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16"
    >
      {/* Floating badge */}
      <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-semibold tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow inline-block" />
        Now Accepting New Clients
      </div>

      {/* Headline */}
      <h1 className="max-w-3xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6">
        Never Miss
        <span className="block gradient-text">Another Lead.</span>
      </h1>

      {/* Subheadline */}
      <p className="max-w-2xl text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
        GO AI Systems helps solo real estate agents capture every inbound
        lead — our AI receptionist answers 24/7, collects details, sends
        instant follow-ups, and books appointments into your calendar.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a
          href="#contact"
          className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2 font-semibold shadow-glow-cyan"
        >
          <span>Book a Free Strategy Call</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="#bundles"
          className="btn-secondary text-base px-8 py-3.5 inline-flex items-center gap-2"
        >
          <span>See Bundles</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Benefit bullets */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-14">
        {benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
            {b.icon}
            <span>{b.text}</span>
          </div>
        ))}
      </div>

      {/* Works with row */}
      <div className="max-w-2xl w-full mx-auto">
        <p className="text-xs text-slate-600 uppercase tracking-widest mb-4">
          Works with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {integrations.map((name) => (
            <span
              key={name}
              className="px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-slate-500 tracking-wide"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30 animate-float">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M5 10l5 6 5-6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xs text-slate-500">Scroll</span>
      </div>
    </section>
  );
}
