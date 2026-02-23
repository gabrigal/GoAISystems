"use client";

import { useState } from "react";

const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/EYuwyhnhKaWfCYgo6";

export default function BookPage() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/pre-book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("done");
      // Open Google Calendar booking in new tab
      window.open(GOOGLE_CALENDAR_LINK, "_blank", "noopener,noreferrer");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-[#020817]">
      {/* Ambient orb */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo wordmark */}
        <div className="text-center mb-10">
          <a href="/" className="inline-flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="gradient-text text-xl font-extrabold">GO</span>
            <span className="text-slate-300 font-medium">AI Systems</span>
          </a>
        </div>

        {status === "done" ? (
          /* ── Success state ── */
          <div className="glass-card rounded-2xl border border-cyan-500/20 p-8 text-center flex flex-col items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M5 14l6 6L23 8"
                  stroke="#22d3ee"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white mb-2">You're almost there!</h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                A text was just sent to your phone. Go ahead and pick a time that works for you —
                the calendar should have opened in a new tab.
              </p>
            </div>
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 shadow-glow-cyan"
            >
              <span>Open Calendar Again</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="/" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              ← Back to home
            </a>
          </div>
        ) : (
          /* ── Form state ── */
          <div className="glass-card rounded-2xl border border-white/8 p-8">
            {/* Header */}
            <div className="mb-7">
              <h1 className="text-2xl font-bold text-white mb-2">Book Your Free Strategy Call</h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Drop your name and number — we'll text you to confirm, then take you straight to
                the calendar to pick your time.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Sarah Johnson"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  Mobile Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all"
                />
                <p className="text-[11px] text-slate-600">
                  We'll send a quick confirmation text — no spam, ever.
                </p>
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full py-4 text-sm font-semibold flex items-center justify-center gap-2 shadow-glow-cyan mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="20 10" />
                    </svg>
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Confirm &amp; Pick a Time</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>

            {/* What happens next */}
            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-3">
                What happens next
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "You'll get a quick confirmation text",
                  "You pick a time that works on the calendar",
                  "Gabriel joins the call ready to map out your setup",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-500">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-[10px] text-cyan-400 font-bold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
