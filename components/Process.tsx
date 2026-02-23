"use client";

// Repurposed as the "How It Works" section — 5-step AI lead flow
const steps = [
  {
    number: "01",
    title: "Lead Calls or Texts",
    description:
      "A prospect sees your number on a sign, Zillow, or your landing page. They call or text at 2pm — or 2am. Either way, someone answers.",
    label: "Trigger",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="5" r="3" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="1.5"/>
      </svg>
    ),
    accent: "border-cyan-500/40 bg-cyan-500/5",
  },
  {
    number: "02",
    title: "AI Answers + Qualifies",
    description:
      "Our AI receptionist picks up instantly, greets them by your brand name, and asks qualifying questions — buyer or seller, timeline, area, budget.",
    label: "AI Receptionist",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="12" cy="13" r="2" fill="#22d3ee" fillOpacity="0.3" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M9 13h.01M15 13h.01" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "border-violet-500/40 bg-violet-500/5",
  },
  {
    number: "03",
    title: "Captures Name, Phone, Email + Property Info",
    description:
      "The AI collects every critical data point and logs it. No missed details. No forgotten callbacks. The full lead profile is captured before the call ends.",
    label: "Lead Capture",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12h6M9 8h6M9 16h4" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="#22d3ee" strokeWidth="1.5"/>
        <circle cx="19" cy="19" r="3" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M17.5 19l1 1 2-2" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "border-fuchsia-500/40 bg-fuchsia-500/5",
  },
  {
    number: "04",
    title: "Sends SMS + Email Follow-Up Instantly",
    description:
      "The moment the call ends, a personalized SMS and email go out — your name, your brand. Most agents take hours. You respond in seconds.",
    label: "Instant Follow-Up",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 2L11 13" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "border-cyan-500/30 bg-cyan-500/3",
  },
  {
    number: "05",
    title: "Books Appointment + Logs to Calendar / CRM",
    description:
      "If the lead is ready, the AI checks your real-time availability and books the appointment directly into Google Calendar — and logs it to your CRM if connected.",
    label: "Auto-Booked",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M8 3v4M16 3v4M3 10h18" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 15l2 2 4-4" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "border-violet-500/30 bg-violet-500/3",
  },
];

export default function Process() {
  return (
    <section id="how-it-works" className="relative z-10 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
            The system
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            From first ring to booked appointment — fully automated.
            You focus on clients. The system handles the rest.
          </p>
        </div>

        {/* Steps — vertical timeline */}
        <div className="relative flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={i} className="relative flex gap-6 sm:gap-10">
              {/* Left: number node + vertical connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl border ${step.accent} flex items-center justify-center shadow-card flex-shrink-0`}
                >
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#020817] border border-white/10 flex items-center justify-center text-[9px] font-bold text-slate-400">
                    {step.number}
                  </span>
                </div>
                {/* Connector line — hidden on last step */}
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 my-1"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(6,182,212,0.3), rgba(139,92,246,0.15))",
                      minHeight: "32px",
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Right: content */}
              <div className={`pb-10 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-cyan-400/60 mb-1">
                  {step.label}
                </span>
                <h3 className="font-bold text-white text-base sm:text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 text-sm mb-4">
            See which bundle fits your situation best.
          </p>
          <a
            href="#bundles"
            className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3"
          >
            <span>View Bundles</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
