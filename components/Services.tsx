"use client";

// Four system component cards — the building blocks of the GO AI stack
const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6.6 12.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V22c0 .6-.4 1-1 1C10.6 23 3 15.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 12.8z" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="7" r="4" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M18.5 7l1 1 2-2" stroke="#a78bfa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI Receptionist",
    subtitle: "Inbound Calls",
    tagline: "Never let a call go to voicemail again.",
    features: [
      "Answers every call 24/7 in your brand's voice",
      "Qualifies buyers and sellers with custom scripts",
      "Collects name, phone, email, and property details",
      "Live-transfer to you when a hot lead is on the line",
      "Works with Go HighLevel, Follow Up Boss, and Google Calendar",
    ],
    accent: "from-cyan-500/10 to-blue-500/5",
    border: "hover:border-cyan-500/30",
    glow: "hover:shadow-glow-cyan",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h20v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M4 6l10 9 10-9" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 22v2M8 22v2" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" fill="#22d3ee" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M22 20l-1.5 1.5L19 20" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "SMS + Email Responder",
    subtitle: "Instant Follow-Up",
    tagline: "Respond in seconds, not hours.",
    features: [
      "Triggered automatically after every call or text",
      "Personalized SMS sent within 60 seconds of hangup",
      "Branded email follow-up with your name and photo",
      "1–3 message drip sequence to re-engage cold leads",
      "Missed-call text-back for unanswered inbound calls",
    ],
    accent: "from-violet-500/10 to-purple-500/5",
    border: "hover:border-violet-500/30",
    glow: "hover:shadow-glow-purple",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="20" rx="3" stroke="#22d3ee" strokeWidth="1.5"/>
        <path d="M9 3v4M19 3v4M3 12h22" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 18l3 3 6-6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Appointment Booking",
    subtitle: "Auto-Scheduled",
    tagline: "Leads book themselves into your calendar.",
    features: [
      "Checks your Google Calendar availability in real time",
      "Books appointments without back-and-forth emails",
      "Sends confirmation + reminder to both parties",
      "Reschedule and cancel flows handled automatically",
    ],
    accent: "from-cyan-500/10 to-violet-500/5",
    border: "hover:border-cyan-400/30",
    glow: "hover:shadow-glow-cyan",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="24" height="16" rx="3" stroke="#a78bfa" strokeWidth="1.5"/>
        <path d="M9 21v3M19 21v3M6 24h16" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 12h5M7 15h9" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="10" r="3" fill="#22d3ee" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Landing Page Funnel",
    subtitle: "Your Online Home Base",
    tagline: "A site built to capture and convert.",
    features: [
      "Futuristic, mobile-first design (dark mode)",
      "Lead capture form + Calendly booking embed",
      "SEO foundation: titles, schema, local targeting",
      "Fast load — under 2 seconds",
      "Works standalone or paired with the AI system",
    ],
    accent: "from-fuchsia-500/10 to-pink-500/5",
    border: "hover:border-fuchsia-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
            System components
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Four Tools.{" "}
            <span className="gradient-text">One Lead Machine.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Each component works on its own — or combine them into a bundle
            for a fully automated lead-to-appointment pipeline.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <article
              key={i}
              className={`glass-card rounded-2xl p-7 flex flex-col gap-5 border border-white/5 transition-all duration-300 ${svc.border} ${svc.glow} hover:-translate-y-1 bg-gradient-to-b ${svc.accent}`}
            >
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
      </div>
    </section>
  );
}
