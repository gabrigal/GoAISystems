"use client";

// Four system components — what GO AI actually delivers
const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="16" rx="3" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M9 21v3M19 21v3M6 24h16" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="11" r="4" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M18.5 11l1 1 2-2" stroke="#22d3ee" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Paid Ads Management",
    subtitle: "Meta Advertising",
    tagline: "Listing appointment leads on autopilot.",
    features: [
      "Targeted Meta ads built specifically for listing agents",
      "Ad copy, creative, and audience — all done for you",
      "Campaigns optimized for bookings, not just clicks",
      "Weekly performance reports in plain English",
      "Ads drive directly to your booking funnel",
    ],
    accent: "from-violet-500/10 to-fuchsia-500/5",
    border: "hover:border-violet-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="20" rx="3" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M7 12h5M7 16h9" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="9" r="3" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M19 9l.8.8 1.7-1.7" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Booking Funnel Page",
    subtitle: "Your Online Home Base",
    tagline: "Built to turn ad traffic into appointments.",
    features: [
      "Dedicated high-converting landing page for your ads",
      "Mobile-first, fast-loading — under 2 seconds",
      "Lead capture form connected to your calendar",
      "Tracks every click and form submission",
      "Designed for real estate agents, not a generic template",
    ],
    accent: "from-cyan-500/10 to-blue-500/5",
    border: "hover:border-cyan-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6.6 12.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V22c0 .6-.4 1-1 1C10.6 23 3 15.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 12.8z" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="5" width="22" height="16" rx="3" stroke="#a78bfa" strokeWidth="1.5" strokeOpacity="0" fill="none"/>
        <path d="M17 5v4M21 7h-8" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
        <circle cx="21" cy="7" r="4" fill="#a78bfa" fillOpacity="0.15" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M19.8 7l.9.9 1.8-1.8" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI Receptionist",
    subtitle: "Powered by Retell AI",
    tagline: "Answers calls. Books appointments. No voicemail.",
    features: [
      "Picks up every inbound call 24/7 in your brand's voice",
      "Qualifies leads using your custom script",
      "Books directly to your Google Calendar in real time",
      "Collects name, number, email, and property details",
      "No back-and-forth — leads are booked before they hang up",
    ],
    accent: "from-cyan-500/10 to-violet-500/5",
    border: "hover:border-cyan-400/30",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h20v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M4 6l10 9 10-9" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="21" cy="21" r="3.5" fill="#22d3ee" fillOpacity="0.15" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M19.8 21l.9.9 1.8-1.8" stroke="#22d3ee" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Email Responder",
    subtitle: "Form Lead Follow-Up",
    tagline: "Every form submission gets an instant reply.",
    features: [
      "Triggers automatically when someone fills out your form",
      "Branded email sent within seconds of submission",
      "Moves leads toward booking without you lifting a finger",
      "Keeps you top of mind while competitors go silent",
    ],
    accent: "from-fuchsia-500/10 to-pink-500/5",
    border: "hover:border-fuchsia-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]",
    badge: "SMS upgrade available in Phase 2",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
            The Infrastructure
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Four Components.{" "}
            <span className="gradient-text">One System That Books.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every piece is built to work together — from the first ad click to
            a confirmed appointment on your calendar.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <article
              key={i}
              className={`glass-card rounded-2xl p-7 flex flex-col gap-5 border border-white/5 transition-all duration-300 ${svc.border} ${svc.glow} hover:-translate-y-1 bg-gradient-to-b ${svc.accent} relative overflow-hidden`}
            >
              {/* Step number */}
              <span className="absolute top-4 right-5 text-[11px] font-bold text-white/10 tabular-nums">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                {svc.icon}
              </div>

              {/* Title */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400/60 block mb-1">
                  {svc.subtitle}
                </span>
                <h3 className="text-base font-bold text-white mb-1">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-500">{svc.tagline}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1">
                {svc.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                      <path d="M2.5 7l3 3 6-6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Phase 2 badge */}
              {svc.badge && (
                <div className="flex items-center gap-2 text-[10px] text-slate-500 border border-white/5 rounded-full px-3 py-1.5 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 inline-block" />
                  {svc.badge}
                </div>
              )}

              {/* CTA */}
              <a
                href="#contact"
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Book a Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* System flow note */}
        <p className="text-center text-xs text-slate-600 mt-10">
          Ads → Funnel → AI Receptionist → Email Responder → Appointment on your calendar
        </p>
      </div>
    </section>
  );
}
