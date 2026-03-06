"use client";

import { useState } from "react";
import Link from "next/link";

const BOOK_LINK = "/book";
const CURRENT_YEAR = new Date().getFullYear();

const faqs = [
  {
    q: "How fast will I see results?",
    a: "Most agents see their first booked appointment within 7–14 days of the ads going live. The system is built to move fast — not drip slowly.",
  },
  {
    q: "Do I have to manage the ads myself?",
    a: "Not at all. We handle everything — the setup, the creative, the targeting, and the optimization. You show up for the appointments.",
  },
  {
    q: "What if I already have a website?",
    a: "No problem. The booking funnel is a separate page built specifically for your ad traffic. It doesn't touch anything on your current site.",
  },
  {
    q: "How does the AI receptionist work?",
    a: "When a lead calls your number, an AI answers 24/7, qualifies them using your custom script, and books them directly to your Google Calendar. No voicemail. No missed calls.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We work month-to-month. Our goal is to keep you because the results speak for themselves — not because you're locked in.",
  },
];

const steps = [
  {
    num: "01",
    label: "The Ad",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="14" rx="3" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M7 17v3M17 17v3M4 20h16" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 11h3M8 14h6" stroke="#a78bfa" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    desc: "A targeted Meta ad reaches homeowners thinking about selling — right in your market, right now.",
    accent: "#22d3ee",
  },
  {
    num: "02",
    label: "The Funnel",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 4h18l-7 8v7l-4-2V12L3 4z" stroke="#a78bfa" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    desc: "They click and land on your custom booking page. One goal: get them to schedule a call with you.",
    accent: "#a78bfa",
  },
  {
    num: "03",
    label: "The Appointment",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="17" rx="3" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M8 2v4M16 2v4M3 9h18" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 14l3 3 6-6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: "They book. You get a notification. Your calendar fills — without chasing, cold calling, or door-knocking.",
    accent: "#22d3ee",
  },
];

const headlines = [
  {
    h: "Only Pay for Listing Appointments.",
    sub: "We run the ads, build the funnel, and set up an AI that answers calls and books straight to your calendar.",
  },
  {
    h: "One Listing Pays for This System.",
    sub: "Stop chasing leads. A fully automated pipeline brings listing appointments straight to your calendar — done for you.",
  },
];

const qualifiers: Array<{
  q: string;
  type: "yn" | "select" | "text";
  placeholder?: string;
  options?: string[];
}> = [
  { q: "Are you a licensed real estate agent?", type: "yn" },
  { q: "Are you currently running any paid ads?", type: "yn" },
  {
    q: "How many listing appointments do you want per month?",
    type: "select",
    options: ["1–2", "3–5", "6+", "As many as possible"],
  },
  { q: "What market are you working in?", type: "text", placeholder: "e.g. Miami, FL" },
  { q: "What's the best way to reach you?", type: "text", placeholder: "Phone or email" },
];

export default function ListingAppointmentsPage() {
  const [headline, setHeadline] = useState<0 | 1>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-x-hidden" style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>

      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 border-b border-white/5 bg-[#020817]/85 backdrop-blur-xl">
        <Link href="/" className="text-sm font-extrabold tracking-widest text-cyan-400 uppercase">
          GO AI
        </Link>
        <a
          href="#book"
          className="text-sm px-5 py-2 rounded-full font-semibold text-white transition-all hover:opacity-90 bg-gradient-to-br from-cyan-500 to-violet-500"
        >
          Book My Free Call
        </a>
      </nav>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">

        {/* ambient bg */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6,182,212,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-8 pointer-events-none" style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)", filter: "blur(100px)" }} />

        {/* Headline toggle pill */}
        <div className="inline-flex items-center gap-1 bg-white/5 border border-white/8 rounded-full p-1 mb-10">
          {["Version A", "Version B"].map((lbl, i) => (
            <button
              key={i}
              onClick={() => setHeadline(i as 0 | 1)}
              className={`text-xs font-bold px-5 py-2 rounded-full transition-all duration-200 tracking-wide ${
                headline === i ? "bg-white/10 text-white" : "text-slate-600 hover:text-slate-400"
              }`}
            >
              {lbl}
            </button>
          ))}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.1] max-w-3xl mb-6 tracking-tight">
          <span className="gradient-text">
            {headlines[headline].h}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-lg mb-12 leading-relaxed">
          {headlines[headline].sub}
        </p>

        {/* 3 outcome bullets */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-12">
          {[
            "More listing appointments every month",
            "No cold calling. No door knocking.",
            "Your calendar fills — you just show up.",
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2.5 border border-white/8 rounded-full px-4 py-2.5 bg-white/3 text-sm text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
              {b}
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href="#book"
          className="inline-flex items-center gap-3 font-bold text-base px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-gradient-to-br from-cyan-500 to-violet-500"
        >
          Book My Free 15-Minute Call
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h12M9.5 4.5L14 9l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <p className="text-xs text-slate-600 mt-4">No pitch. No pressure. Just a quick conversation.</p>
      </section>

      {/* ══════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] text-cyan-400/60 uppercase tracking-[0.2em] font-bold text-center mb-3">The System</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Three steps from{" "}
            <span className="gradient-text">scroll to signed.</span>
          </h2>

          <div className="relative grid md:grid-cols-3 gap-8">
            {/* connector line */}
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px"
              style={{ background: "linear-gradient(90deg, rgba(6,182,212,0.2), rgba(139,92,246,0.2), rgba(6,182,212,0.2))" }} />

            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent}15, ${s.accent}05)`,
                    border: `1px solid ${s.accent}25`,
                    boxShadow: `0 0 24px ${s.accent}12`,
                  }}
                >
                  {s.icon}
                </div>
                <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase mb-2">{s.num}</span>
                <h3 className="text-lg font-bold text-white mb-3">{s.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHO IT'S FOR / NOT FOR
      ══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14">Is This a Good Fit?</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl p-8" style={{ border: "1px solid rgba(6,182,212,0.18)", background: "rgba(6,182,212,0.03)" }}>
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-[0.18em] mb-6 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                This is for you if…
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  "You're a licensed agent focused on listings",
                  "You want consistent appointments without cold outreach",
                  "You're tired of buying shared leads from portals",
                  "You're ready to invest in a system, not just an ad",
                  "You want to close more listings this quarter",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                      <path d="M2.5 7l3 3 6-6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8" style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)" }}>
              <h3 className="text-xs font-bold text-slate-600 uppercase tracking-[0.18em] mb-6 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3L3 11" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/></svg>
                This is NOT for you if…
              </h3>
              <ul className="flex flex-col gap-4">
                {[
                  "You're a buyer's agent only",
                  "You're not willing to run paid ads",
                  "You want instant results with zero effort",
                  "You can't follow up when leads book a call",
                  "You're looking for a magic button, not a system",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                      <path d="M3 3l8 8M11 3L3 11" stroke="#475569" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          QUALIFIER + BOOK
      ══════════════════════════════════════════════════ */}
      <section id="book" className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] text-cyan-400/60 uppercase tracking-[0.2em] font-bold text-center mb-3">Book Your Call</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3">Let&apos;s Talk for 15 Minutes</h2>
          <p className="text-sm text-slate-500 text-center mb-12 leading-relaxed">
            Answer 5 quick questions, then pick a time that works for you.
          </p>

          {/* Qualifier */}
          <div className="rounded-2xl p-8 mb-5 border border-white/6" style={{ background: "rgba(15,23,42,0.65)", backdropFilter: "blur(20px)" }}>
            <div className="flex flex-col gap-8">
              {qualifiers.map((item, i) => (
                <div key={i}>
                  <label className="block text-sm font-semibold text-slate-200 mb-3">
                    <span className="text-cyan-500/50 text-xs font-bold tabular-nums mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {item.q}
                  </label>

                  {item.type === "yn" && (
                    <div className="flex gap-3">
                      {["Yes", "No"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setAnswers((p) => ({ ...p, [i]: opt }))}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                            answers[i] === opt
                              ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                              : "border-white/8 bg-white/3 text-slate-400 hover:border-white/16 hover:text-slate-300"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {item.type === "select" && (
                    <div className="grid grid-cols-2 gap-3">
                      {item.options?.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setAnswers((p) => ({ ...p, [i]: opt }))}
                          className={`py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                            answers[i] === opt
                              ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                              : "border-white/8 bg-white/3 text-slate-400 hover:border-white/16 hover:text-slate-300"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {item.type === "text" && (
                    <input
                      type="text"
                      placeholder={item.placeholder}
                      value={answers[i] ?? ""}
                      onChange={(e) => setAnswers((p) => ({ ...p, [i]: e.target.value }))}
                      className="w-full rounded-xl px-4 py-3 text-sm text-white bg-white/5 border border-white/10 transition-colors focus:outline-none focus:border-cyan-500/40 placeholder-slate-600"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Calendly / Calendar embed placeholder */}
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/2 flex flex-col items-center justify-center py-20 px-8 text-center mb-5">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center mb-4">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="2" y="3" width="18" height="17" rx="3" stroke="#22d3ee" strokeWidth="1.4"/>
                <path d="M7 1v4M15 1v4M2 9h18" stroke="#22d3ee" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M7 14l3 3 6-6" stroke="#a78bfa" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-300 mb-1">Calendar Embed Goes Here</p>
            <p className="text-xs text-slate-600 mb-5">Drop in your Calendly, Cal.com, or Google Calendar booking widget</p>
            <a
              href={BOOK_LINK}
              className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full text-white transition-all hover:opacity-90 bg-gradient-to-br from-cyan-500 to-violet-500"
            >
              Book My Free 15-Minute Call →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] text-cyan-400/60 uppercase tracking-[0.2em] font-bold text-center mb-3">Questions</p>
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: openFaq === i ? "rgba(6,182,212,0.2)" : "rgba(255,255,255,0.05)",
                  background: openFaq === i ? "rgba(6,182,212,0.03)" : "rgba(255,255,255,0.015)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 gap-4 text-left cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-slate-200">{faq.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <path d="M8 3v10M3 8h10" stroke={openFaq === i ? "#22d3ee" : "#475569"} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="relative z-10 py-28 px-6 border-t border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />

        <p className="text-[11px] text-cyan-400/60 uppercase tracking-[0.2em] font-bold mb-5">Ready to start?</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold max-w-xl mx-auto mb-5 leading-tight">
          Your Next Listing{" "}
          <span className="gradient-text">Starts With a Call.</span>
        </h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
          15 minutes. No pitch. We&apos;ll show you exactly how the system works and whether it makes sense for your market.
        </p>
        <a
          href={BOOK_LINK}
          className="inline-flex items-center gap-3 font-bold text-base px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-gradient-to-br from-cyan-500 to-violet-500"
        >
          Book My Free 15-Minute Call
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h12M9.5 4.5L14 9l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <p className="text-xs text-slate-600 mt-5">No contracts. No commitments. Just a conversation.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <Link href="/" className="text-sm font-extrabold tracking-widest text-cyan-400/50 uppercase">GO AI</Link>
        <p className="text-xs text-slate-700">© {CURRENT_YEAR} GO AI Services. All rights reserved.</p>
        <Link href="/" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">← Back to main site</Link>
      </footer>
    </div>
  );
}
