"use client";

// Social proof: Before/After block + metrics strip
const metrics = [
  { value: "24/7", label: "AI call coverage" },
  { value: "< 60s", label: "Follow-up response time" },
  { value: "7 days", label: "Avg. setup time" },
  { value: "+40%", label: "More booked appointments" },
];

// Before/After comparison data
const beforeAfter = [
  { before: "Missed calls go to voicemail", after: "AI picks up every call, 24/7" },
  { before: "Follow-up takes hours (or days)", after: "SMS + email sent in under 60 seconds" },
  { before: "Leads leak while you're with clients", after: "Every lead captured and logged" },
  { before: "Manual calendar back-and-forth", after: "Appointments auto-booked for you" },
];

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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {metrics.map((m) => (
            <div key={m.value} className="glass-card p-6 sm:p-8 text-center hover:bg-white/5 transition-colors">
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">{m.value}</div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">{m.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
