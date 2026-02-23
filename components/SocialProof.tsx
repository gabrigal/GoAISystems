"use client";

// Social proof: Before/After block + metrics strip + testimonial cards
const metrics = [
  { value: "24/7", label: "AI call coverage" },
  { value: "< 60s", label: "Follow-up response time" },
  { value: "7 days", label: "Avg. setup time" },
  { value: "+40%", label: "More booked appointments" },
];

const testimonials = [
  {
    quote:
      "I used to miss 3–4 calls a week because I was showing homes. Now the AI picks up every single one, qualifies them, and I come home to booked appointments on my calendar. It's a game changer.",
    name: "Alex R.",
    location: "Hoboken, NJ",
    role: "Solo Buyer's Agent",
    initials: "AR",
    color: "from-cyan-500 to-blue-500",
  },
  {
    quote:
      "My old follow-up routine was embarrassing — I'd forget to call people back for a day or two. This system texts them within a minute. Leads that used to ghost me are now responding because I'm first.",
    name: "Priya M.",
    location: "Austin, TX",
    role: "Residential Realtor",
    initials: "PM",
    color: "from-violet-500 to-purple-500",
  },
  {
    quote:
      "I was skeptical the AI would sound natural. It doesn't sound robotic at all. One client asked if my 'assistant' could schedule a showing — they had no idea. My calendar filled up in the first two weeks.",
    name: "James T.",
    location: "Miami, FL",
    role: "Luxury Condo Specialist",
    initials: "JT",
    color: "from-fuchsia-500 to-pink-500",
  },
];

// Before/After comparison data
const beforeAfter = [
  { before: "Missed calls go to voicemail", after: "AI picks up every call, 24/7" },
  { before: "Follow-up takes hours (or days)", after: "SMS + email sent in under 60 seconds" },
  { before: "Leads leak while you're with clients", after: "Every lead captured and logged" },
  { before: "Manual calendar back-and-forth", after: "Appointments auto-booked for you" },
];

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.1l-3.7 2.2.7-4.1-3-2.9 4.2-.7L7 1z" fill="#f59e0b"/>
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="social-proof" className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Before / After block */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
              The difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Before <span className="text-slate-600">&</span> After GO AI
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden max-w-3xl mx-auto">
            {/* Before column header */}
            <div className="glass-card p-5 flex items-center gap-2 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 flex-shrink-0" />
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest text-xs">Before</span>
            </div>
            <div className="glass-card p-5 flex items-center gap-2 border-b border-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 flex-shrink-0 animate-pulse-slow" />
              <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest text-xs">After</span>
            </div>

            {/* Rows */}
            {beforeAfter.map((row, i) => (
              <>
                <div key={`b-${i}`} className="glass-card px-5 py-4 flex items-start gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                    <path d="M2 2l10 10M12 2L2 12" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-sm text-slate-500">{row.before}</span>
                </div>
                <div key={`a-${i}`} className="glass-card px-5 py-4 flex items-start gap-3 bg-cyan-500/3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                    <path d="M2.5 7l3 3 6-6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm text-slate-200">{row.after}</span>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mb-20">
          {metrics.map((m) => (
            <div key={m.value} className="glass-card p-6 sm:p-8 text-center hover:bg-white/5 transition-colors">
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">{m.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials header */}
        <div className="text-center mb-12">
          <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
            What agents say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Real Results from Real Agents
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="glass-card glow-border rounded-2xl p-6 flex flex-col gap-4 hover:border-white/10 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <StarRating />
              <blockquote className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role} · {t.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
