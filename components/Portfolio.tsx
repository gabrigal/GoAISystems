"use client";

// ─── Mockup 1: Luxury Classic (Navy/Gold/Cream — Cormorant Garamond style) ────
function LuxuryMockup() {
  return (
    <div style={{ height: "100%", background: "#0D1B2E", fontFamily: "Georgia,'Times New Roman',serif", position: "relative", overflow: "hidden" }}>
      {/* Subtle grain */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")", opacity: 0.6, zIndex: 1, pointerEvents: "none" }} />

      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 18px", borderBottom: "1px solid rgba(200,169,110,0.14)", position: "relative", zIndex: 2 }}>
        <span style={{ color: "#C8A96E", fontSize: "9px", letterSpacing: "0.22em", fontWeight: 400, textTransform: "uppercase" }}>Alexandra Reed</span>
        <div style={{ display: "flex", gap: "14px" }}>
          {["Listings", "About", "Journal"].map(l => <span key={l} style={{ color: "rgba(250,247,242,0.35)", fontSize: "7px", letterSpacing: "0.08em", fontFamily: "system-ui" }}>{l}</span>)}
        </div>
        <div style={{ border: "1px solid rgba(200,169,110,0.5)", color: "#C8A96E", fontSize: "7px", padding: "4px 9px", letterSpacing: "0.14em", fontFamily: "system-ui" }}>INQUIRE</div>
      </div>

      {/* Hero */}
      <div style={{ padding: "22px 18px 0", position: "relative", zIndex: 2 }}>
        <div style={{ color: "rgba(200,169,110,0.55)", fontSize: "6.5px", letterSpacing: "0.28em", textTransform: "uppercase", marginBottom: "10px", fontFamily: "system-ui" }}>Manhattan · Brooklyn · The Hamptons</div>
        <div style={{ fontSize: "22px", fontWeight: 400, lineHeight: 1.08, color: "#FAF7F2", letterSpacing: "-0.01em", marginBottom: "2px" }}>Luxury Real Estate,</div>
        <div style={{ fontSize: "22px", fontWeight: 400, fontStyle: "italic", lineHeight: 1.08, color: "#C8A96E", letterSpacing: "-0.01em", marginBottom: "14px" }}>Elevated.</div>
        <div style={{ width: "30px", height: "1px", background: "#C8A96E", opacity: 0.5, marginBottom: "12px" }} />
        <div style={{ fontSize: "7.5px", color: "rgba(250,247,242,0.45)", lineHeight: 1.65, fontFamily: "system-ui", maxWidth: "200px", marginBottom: "16px" }}>
          Representing Manhattan's most coveted properties since 2008. $840M in career sales.
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C8A96E", color: "#0D1B2E", fontSize: "7px", fontFamily: "system-ui", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "8px 13px" }}>
          Schedule a Consultation <span>→</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", borderTop: "1px solid rgba(200,169,110,0.12)", background: "rgba(9,18,36,0.98)", zIndex: 2 }}>
        {[["$840M", "Volume Sold"], ["15 yrs", "Experience"], ["4.9★", "Client Rating"]].map(([v, l], i) => (
          <div key={i} style={{ flex: 1, textAlign: "center", padding: "10px 6px", borderRight: i < 2 ? "1px solid rgba(200,169,110,0.1)" : "none" }}>
            <div style={{ color: "#C8A96E", fontSize: "12px", fontWeight: 700, letterSpacing: "-0.02em" }}>{v}</div>
            <div style={{ color: "rgba(250,247,242,0.28)", fontSize: "6.5px", fontFamily: "system-ui", marginTop: "2px" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Mockup 2: Bold Editorial (Black/White/Lime, stark & modern) ──────────────
function BoldMockup() {
  return (
    <div style={{ height: "100%", background: "#060606", fontFamily: "system-ui,-apple-system,sans-serif", position: "relative", overflow: "hidden" }}>
      {/* Vertical rule accent */}
      <div style={{ position: "absolute", top: 0, left: "62%", width: "1px", height: "100%", background: "linear-gradient(to bottom, transparent 0%, rgba(20,255,100,0.18) 40%, transparent 100%)", zIndex: 1 }} />

      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 18px", borderBottom: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <div style={{ width: "20px", height: "20px", background: "#14FF64", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 900, color: "#060606" }}>JM</div>
          <span style={{ color: "white", fontSize: "8px", fontWeight: 700, letterSpacing: "0.04em" }}>JAMES MORA</span>
        </div>
        <div style={{ background: "#14FF64", color: "#060606", fontSize: "7px", fontWeight: 800, padding: "5px 11px", letterSpacing: "0.05em", textTransform: "uppercase" }}>GET STARTED</div>
      </div>

      {/* Hero — brutalist/editorial */}
      <div style={{ padding: "20px 18px 0", position: "relative", zIndex: 2 }}>
        <div style={{ color: "#14FF64", fontSize: "7px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "11px" }}>● MIAMI · SOUTH BEACH · BRICKELL</div>
        <div style={{ fontSize: "38px", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.05em", color: "white", textTransform: "uppercase", marginBottom: "4px" }}>SOLD.</div>
        <div style={{ fontSize: "38px", fontWeight: 900, lineHeight: 0.88, letterSpacing: "-0.05em", color: "rgba(255,255,255,0.1)", textTransform: "uppercase", marginBottom: "14px" }}>FAST.</div>
        <div style={{ width: "36px", height: "3px", background: "#14FF64", marginBottom: "12px" }} />
        <div style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: "185px", marginBottom: "16px" }}>
          Top 1% agent in Miami-Dade. Zero fluff, zero delays. Your listing sold at full price.
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1.5px solid #14FF64", color: "#14FF64", fontSize: "7px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "7px 13px" }}>
          See My Listings <span>↗</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(6,6,6,0.98)", zIndex: 2 }}>
        {[["147", "Homes Sold"], ["$1.2B", "Volume"], ["Top 1%", "Miami-Dade"]].map(([v, l], i) => (
          <div key={i} style={{ flex: 1, textAlign: "center", padding: "10px 6px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
            <div style={{ color: i === 0 ? "#14FF64" : "white", fontSize: "12px", fontWeight: 900, letterSpacing: "-0.03em" }}>{v}</div>
            <div style={{ color: "rgba(255,255,255,0.22)", fontSize: "6.5px", marginTop: "2px" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Mockup 3: Warm Neighborhood (Cream/Terracotta, inviting & local) ─────────
function WarmMockup() {
  return (
    <div style={{ height: "100%", background: "#FAF5EF", fontFamily: "Georgia,'Times New Roman',serif", position: "relative", overflow: "hidden" }}>
      {/* Warm radial accent */}
      <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,103,60,0.1) 0%, transparent 70%)", zIndex: 1, pointerEvents: "none" }} />

      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 18px", borderBottom: "1px solid rgba(45,30,20,0.1)", background: "#FAF5EF", position: "relative", zIndex: 2 }}>
        <div style={{ fontSize: "9px", fontWeight: 700, color: "#2D1E14", letterSpacing: "0.06em", fontFamily: "system-ui" }}>
          ELENA <span style={{ color: "#C4673C" }}>VASQUEZ</span>
        </div>
        <div style={{ display: "flex", gap: "14px" }}>
          {["Buy", "Sell", "Blog"].map(l => <span key={l} style={{ color: "rgba(45,30,20,0.38)", fontSize: "7px", fontFamily: "system-ui" }}>{l}</span>)}
        </div>
        <div style={{ background: "#C4673C", color: "white", fontSize: "7px", fontFamily: "system-ui", fontWeight: 600, padding: "4px 10px", borderRadius: "20px" }}>Free CMA</div>
      </div>

      {/* Hero */}
      <div style={{ padding: "22px 18px 0", position: "relative", zIndex: 2 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "rgba(196,103,60,0.1)", border: "1px solid rgba(196,103,60,0.25)", borderRadius: "20px", padding: "4px 10px", marginBottom: "12px" }}>
          <span style={{ fontSize: "7px", color: "#C4673C", fontFamily: "system-ui" }}>📍 Austin, Texas</span>
        </div>
        <div style={{ fontSize: "21px", fontWeight: 400, lineHeight: 1.1, color: "#2D1E14", letterSpacing: "-0.01em", marginBottom: "2px" }}>Your Neighbor,</div>
        <div style={{ fontSize: "21px", fontWeight: 400, fontStyle: "italic", lineHeight: 1.1, color: "#C4673C", letterSpacing: "-0.01em", marginBottom: "13px" }}>Your Agent.</div>
        <div style={{ width: "26px", height: "2px", background: "#C4673C", borderRadius: "1px", marginBottom: "12px", opacity: 0.7 }} />
        <div style={{ fontSize: "7.5px", color: "rgba(45,30,20,0.5)", lineHeight: 1.65, fontFamily: "system-ui", maxWidth: "200px", marginBottom: "16px" }}>
          I know every street in Austin. Let me help you find the one that feels like home.
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#C4673C", color: "white", fontSize: "7px", fontFamily: "system-ui", fontWeight: 600, padding: "8px 13px", borderRadius: "6px" }}>
          Get a Free Home Value <span>→</span>
        </div>
      </div>

      {/* Stats */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "flex", borderTop: "1px solid rgba(45,30,20,0.1)", background: "#FAF5EF", zIndex: 2 }}>
        {[["340+", "Homes Sold"], ["5.0★", "Google Rating"], ["8 yrs", "Austin Native"]].map(([v, l], i) => (
          <div key={i} style={{ flex: 1, textAlign: "center", padding: "10px 6px", borderRight: i < 2 ? "1px solid rgba(45,30,20,0.08)" : "none" }}>
            <div style={{ color: "#C4673C", fontSize: "12px", fontWeight: 700, fontFamily: "system-ui", letterSpacing: "-0.02em" }}>{v}</div>
            <div style={{ color: "rgba(45,30,20,0.38)", fontSize: "6.5px", fontFamily: "system-ui", marginTop: "2px" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Browser frame wrapper ────────────────────────────────────────────────────
const frames = [
  { url: "alexandrareed.luxury", label: "Luxury Specialist", tag: "Navy · Gold · Serif", accent: "#C8A96E", content: <LuxuryMockup /> },
  { url: "jamesmora.miami", label: "High-Impact Urban Agent", tag: "Black · Bold · Editorial", accent: "#14FF64", content: <BoldMockup /> },
  { url: "elenavasquez.realty", label: "Neighborhood Expert", tag: "Cream · Terracotta · Warm", accent: "#C4673C", content: <WarmMockup /> },
];

export default function Portfolio() {
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
            Every site is built from scratch — designed around your brand, your market, and your leads.
            No templates. Here&apos;s a taste of what we deliver.
          </p>
        </div>

        {/* Browser mockup grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {frames.map((f, i) => (
            <div
              key={i}
              className="group relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 70%, ${f.accent}25 0%, transparent 70%)` }}
              />

              {/* Browser shell */}
              <div
                className="relative rounded-xl overflow-hidden transition-all duration-400 group-hover:-translate-y-2"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                }}
              >
                {/* Chrome bar */}
                <div style={{ background: "#0e0e16", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "9px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "rgba(255,95,87,0.7)", display: "block" }} />
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "rgba(255,189,68,0.7)", display: "block" }} />
                    <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "rgba(40,201,64,0.7)", display: "block" }} />
                  </div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "5px", padding: "4px 10px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1a4 4 0 1 0 0 8A4 4 0 0 0 5 1zM1.5 5h7M5 1C3.8 2.5 3 3.7 3 5s.8 2.5 2 4M5 1c1.2 1.5 2 2.7 2 4s-.8 2.5-2 4" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.28)", fontSize: "9px", fontFamily: "system-ui" }}>{f.url}</span>
                  </div>
                </div>

                {/* Mini site */}
                <div style={{ height: "320px" }}>
                  {f.content}
                </div>
              </div>

              {/* Label */}
              <div className="mt-4 px-1">
                <div
                  className="text-[10px] font-semibold uppercase tracking-widest mb-1 transition-colors duration-300"
                  style={{ color: `${f.accent}99` }}
                >
                  {f.tag}
                </div>
                <div className="text-sm font-semibold text-white/65 group-hover:text-white/90 transition-colors">
                  {f.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="glass-card rounded-2xl border border-white/5 p-7 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-3xl mx-auto">
          <div>
            <p className="text-white font-semibold mb-1">Want a site built for you?</p>
            <p className="text-slate-400 text-sm">
              Book a free 20-min call — we&apos;ll design your site around your brand, market, and goals.
            </p>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap flex-shrink-0 text-sm px-6 py-3 rounded-xl">
            Get Your Site Built
          </a>
        </div>

      </div>
    </section>
  );
}
