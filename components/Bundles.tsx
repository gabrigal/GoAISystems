"use client";

// Bundles section — groups system components into packages without showing prices
interface Bundle {
  name: string;
  tagline: string;
  idealFor: string;
  includes: string[];
  recommended?: boolean;
  accent: string;
  border: string;
  glow: string;
  badgeColor?: string;
}

const bundles: Bundle[] = [
  {
    name: "Starter Funnel",
    tagline: "Get online and start capturing leads.",
    idealFor: "Agents who need a professional web presence with a built-in lead form.",
    includes: [
      "Landing Page (dark mode, mobile-first design)",
      "Lead capture form + Calendly booking embed",
      "Basic SEO structure (titles, meta, sitemap)",
      "Google Analytics setup",
      "Hosted & deployed — live in 7 days",
    ],
    accent: "from-slate-800/60 to-slate-900/40",
    border: "border-slate-700/40 hover:border-cyan-500/30",
    glow: "hover:shadow-glow-cyan",
  },
  {
    name: "Follow-Up Engine",
    tagline: "Stop losing leads to slow response times.",
    idealFor: "Agents who are getting leads but losing them before ever making contact.",
    includes: [
      "SMS Responder — instant text within 60 seconds",
      "Branded email follow-up sequence (1–3 messages)",
      "Missed-call text-back automation",
      "Lead logging to Google Sheet or CRM",
      "Go HighLevel or Follow Up Boss integration",
    ],
    accent: "from-violet-900/30 to-slate-900/40",
    border: "border-violet-700/30 hover:border-violet-400/40",
    glow: "hover:shadow-glow-purple",
  },
  {
    name: "24/7 Booking System",
    tagline: "Calls answered. Leads captured. Appointments booked.",
    idealFor: "Agents who want a fully automated pipeline from first ring to booked meeting.",
    includes: [
      "AI Receptionist — answers every inbound call 24/7",
      "Lead qualification script (custom to your market)",
      "SMS + Email Responder (instant follow-up)",
      "Appointment Booking into Google Calendar",
      "Lead capture + CRM logging (optional)",
      "Live-transfer rules for hot leads",
    ],
    recommended: true,
    accent: "from-cyan-900/30 to-violet-900/20",
    border: "border-cyan-500/30 hover:border-cyan-400/50",
    glow: "hover:shadow-glow-cyan",
    badgeColor: "bg-gradient-to-r from-cyan-500 to-violet-500",
  },
  {
    name: "Custom Bundle",
    tagline: "Already have a website or CRM? We'll plug in what you need.",
    idealFor: "Agents with existing tools who want to add specific components — no rebuilding required.",
    includes: [
      "Mix and match any components",
      "Connect to your existing CRM or website",
      "Custom automation design for your existing stack",
      "Strategy call to map out the right setup",
    ],
    accent: "from-slate-800/40 to-slate-900/40",
    border: "border-white/8 hover:border-white/15",
    glow: "",
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M2.5 7l3 3 6-6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Bundles() {
  return (
    <section id="bundles" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
            Packages
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Choose Your{" "}
            <span className="gradient-text">Bundle</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Start with what solves your biggest problem right now. Add more
            components as you grow. No lock-ins, no bloat.
          </p>
        </div>

        {/* Bundle cards — 4 across on xl, 2 on md, 1 on mobile */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {bundles.map((bundle, i) => (
            <article
              key={i}
              className={`glass-card rounded-2xl border transition-all duration-300 ${bundle.border} ${bundle.glow} hover:-translate-y-1 bg-gradient-to-b ${bundle.accent} flex flex-col`}
            >
              {/* Recommended badge */}
              {bundle.recommended && (
                <div className="px-7 pt-5 pb-0">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-white px-3 py-1 rounded-full ${bundle.badgeColor}`}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M4 0l1 2.5L8 3l-2 2 .5 3L4 6.5 1.5 8 2 5 0 3l3-.5L4 0z" fill="white"/>
                    </svg>
                    Recommended
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col gap-5 flex-1">
                {/* Title + tagline */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{bundle.name}</h3>
                  <p className="text-sm text-slate-400">{bundle.tagline}</p>
                </div>

                {/* Ideal for */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/3 border border-white/5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                    <path d="M7 1a6 6 0 1 0 0 12A6 6 0 0 0 7 1zm0 5v3M7 10.5v.5" stroke="#a78bfa" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  <p className="text-xs text-slate-400 leading-relaxed">{bundle.idealFor}</p>
                </div>

                {/* Includes list */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-3">
                    Includes
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {bundle.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  <a
                    href="#contact"
                    className={`w-full text-center text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 block ${
                      bundle.recommended
                        ? "btn-primary"
                        : "border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <span>Book a Call</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sub-note */}
        <p className="text-center text-xs text-slate-600 mt-8">
          Not sure which fits? The free strategy call will tell you.{" "}
          <a href="#contact" className="text-cyan-400/70 hover:text-cyan-400 underline underline-offset-2 transition-colors">
            Book it here.
          </a>
        </p>
      </div>
    </section>
  );
}
