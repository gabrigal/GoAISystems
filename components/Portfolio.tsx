"use client";

import { useState } from "react";

const examples = [
  {
    id: "luxury",
    label: "Luxury Listing Specialist",
    tag: "Dark · Minimal · High-End",
    heroBg: "linear-gradient(145deg, #09090f 0%, #0d1117 40%, #111827 100%)",
    accentColor: "#c9a84c",
    accentMuted: "rgba(201,168,76,0.12)",
    navLinks: ["Listings", "About", "Press", "Contact"],
    agentName: "Sarah Chen",
    location: "Manhattan, NY",
    headline: "Luxury Real Estate\nDone Differently.",
    sub: "Penthouses · Condos · Investment Properties",
    ctaLabel: "View Current Listings",
    stats: [
      { v: "$2.4B", l: "Volume Sold" },
      { v: "14 yrs", l: "Experience" },
      { v: "4.9★", l: "Client Rating" },
    ],
    navBg: "rgba(9,9,15,0.95)",
    url: "sarahchen.luxury",
  },
  {
    id: "neighborhood",
    label: "Neighborhood Expert",
    tag: "Clean · Bright · Approachable",
    heroBg: "linear-gradient(150deg, #0c1e3d 0%, #0f2d57 50%, #1a3a6b 100%)",
    accentColor: "#38bdf8",
    accentMuted: "rgba(56,189,248,0.12)",
    navLinks: ["Buy", "Sell", "Neighborhoods", "Contact"],
    agentName: "Marcus Rivera",
    location: "Brooklyn, NY",
    headline: "Your Brooklyn\nReal Estate Expert.",
    sub: "Residential · First-Time Buyers · Rentals",
    ctaLabel: "Get a Free Home Value",
    stats: [
      { v: "500+", l: "Homes Sold" },
      { v: "5.0★", l: "Zillow Rating" },
      { v: "24hr", l: "Response Time" },
    ],
    navBg: "rgba(12,30,61,0.95)",
    url: "marcusrivera.homes",
  },
  {
    id: "buyer",
    label: "First-Time Buyer Agent",
    tag: "Warm · Inviting · Trust-First",
    heroBg: "linear-gradient(145deg, #0f0a1e 0%, #1a0f35 50%, #231245 100%)",
    accentColor: "#a78bfa",
    accentMuted: "rgba(167,139,250,0.12)",
    navLinks: ["How It Works", "Listings", "Resources", "Talk to Me"],
    agentName: "Priya Desai",
    location: "Austin, TX",
    headline: "Homeownership\nWithout the Stress.",
    sub: "First-Time Buyers · Relocation · New Builds",
    ctaLabel: "Start Your Journey Free",
    stats: [
      { v: "250+", l: "Buyers Helped" },
      { v: "98%", l: "Satisfaction" },
      { v: "7 days", l: "Avg. Setup" },
    ],
    navBg: "rgba(15,10,30,0.95)",
    url: "priyadesai.realty",
  },
];

function BrowserMockup({ ex, active, onClick }: {
  ex: typeof examples[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative text-left w-full focus:outline-none"
      aria-label={`View ${ex.label} example`}
    >
      {/* Glow behind active card */}
      <div
        className="absolute inset-0 rounded-2xl blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${ex.accentColor}30 0%, transparent 70%)`,
          opacity: active ? 1 : 0,
        }}
      />

      {/* Browser shell */}
      <div
        className="relative rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          border: active
            ? `1px solid ${ex.accentColor}50`
            : "1px solid rgba(255,255,255,0.07)",
          transform: active ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
          boxShadow: active
            ? `0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px ${ex.accentColor}20`
            : "0 8px 30px rgba(0,0,0,0.4)",
        }}
      >
        {/* Browser chrome bar */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-b"
          style={{
            background: "rgba(10,10,18,0.98)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          {/* Window dots */}
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          {/* URL bar */}
          <div
            className="flex-1 flex items-center gap-2 rounded-md px-3 py-1.5 text-[10px]"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
              <path
                d="M5 1a4 4 0 1 0 0 8A4 4 0 0 0 5 1zM1.5 5h7M5 1C3.8 2.5 3 3.7 3 5s.8 2.5 2 4M5 1c1.2 1.5 2 2.7 2 4s-.8 2.5-2 4"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.8"
              />
            </svg>
            <span style={{ color: "rgba(255,255,255,0.35)" }}>{ex.url}</span>
          </div>
        </div>

        {/* Mini website content */}
        <div style={{ background: ex.heroBg, height: "260px", overflow: "hidden", position: "relative" }}>
          {/* Site nav */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{
              background: ex.navBg,
              borderBottom: `1px solid ${ex.accentColor}20`,
            }}
          >
            <span
              className="font-bold text-[9px] tracking-widest uppercase"
              style={{ color: ex.accentColor }}
            >
              {ex.agentName.split(" ")[0]} <span style={{ color: "rgba(255,255,255,0.7)" }}>{ex.agentName.split(" ")[1]}</span>
            </span>
            <div className="flex gap-3">
              {ex.navLinks.slice(0, 3).map((l) => (
                <span key={l} className="text-[7px] text-white/30">{l}</span>
              ))}
            </div>
            <div
              className="text-[7px] font-bold px-2 py-1 rounded"
              style={{ background: ex.accentColor, color: "#000" }}
            >
              Contact
            </div>
          </div>

          {/* Hero content */}
          <div className="px-6 pt-5 pb-4">
            {/* Location badge */}
            <div
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 mb-3 text-[7px] font-semibold"
              style={{
                background: ex.accentMuted,
                border: `1px solid ${ex.accentColor}30`,
                color: ex.accentColor,
              }}
            >
              <span>📍</span>
              <span>{ex.location}</span>
            </div>

            {/* Headline */}
            <div className="mb-3" style={{ lineHeight: 1.15 }}>
              {ex.headline.split("\n").map((line, i) => (
                <div
                  key={i}
                  className="font-black text-[16px] text-white"
                  style={{
                    color: i === 0 ? "white" : ex.accentColor,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Sub */}
            <p className="text-[8px] text-white/40 mb-4">{ex.sub}</p>

            {/* CTA */}
            <div
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-[8px] font-bold"
              style={{ background: ex.accentColor, color: "#000" }}
            >
              {ex.ctaLabel}
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1.5 4h5M4 1.5L6.5 4 4 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="absolute bottom-0 left-0 right-0 flex"
            style={{
              background: "rgba(0,0,0,0.5)",
              borderTop: `1px solid ${ex.accentColor}20`,
              backdropFilter: "blur(8px)",
            }}
          >
            {ex.stats.map((s, i) => (
              <div
                key={i}
                className="flex-1 text-center py-2.5"
                style={{
                  borderRight: i < 2 ? `1px solid ${ex.accentColor}15` : "none",
                }}
              >
                <div className="font-black text-[10px]" style={{ color: ex.accentColor }}>
                  {s.v}
                </div>
                <div className="text-[7px] text-white/30 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Label below */}
      <div className="mt-4 px-1">
        <div
          className="text-[10px] font-bold uppercase tracking-widest mb-1 transition-colors duration-300"
          style={{ color: active ? ex.accentColor : "rgba(255,255,255,0.35)" }}
        >
          {ex.tag}
        </div>
        <div className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
          {ex.label}
        </div>
      </div>
    </button>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(0);

  return (
    <section id="portfolio" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
            Example Sites
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See What You{" "}
            <span className="gradient-text">Could Have</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Every site is designed from scratch for your brand, market, and leads.
            These are examples of the style and feel we build — no templates, no cookie-cutter.
          </p>
        </div>

        {/* Mockup grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {examples.map((ex, i) => (
            <BrowserMockup
              key={ex.id}
              ex={ex}
              active={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        {/* Bottom callout */}
        <div className="glass-card rounded-2xl border border-white/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-3xl mx-auto">
          <div>
            <p className="text-white font-semibold mb-1">Want a site like this?</p>
            <p className="text-slate-400 text-sm">
              Book a free 20-min call. We&apos;ll design your site around your brand, your market, and your leads.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary whitespace-nowrap flex-shrink-0 text-sm px-6 py-3 rounded-xl"
          >
            Get Your Site Built
          </a>
        </div>

      </div>
    </section>
  );
}
