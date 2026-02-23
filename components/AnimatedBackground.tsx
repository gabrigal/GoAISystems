"use client";

// Lightweight animated background: grid lines + soft glowing orbs.
// All purely CSS/SVG — no heavy libraries needed.
export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Cyber grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top-left cyan orb */}
      <div
        className="orb animate-pulse-slow"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-200px",
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          opacity: 0.12,
        }}
      />

      {/* Bottom-right purple orb */}
      <div
        className="orb animate-pulse-slow"
        style={{
          width: "700px",
          height: "700px",
          bottom: "-300px",
          right: "-200px",
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          opacity: 0.1,
          animationDelay: "2s",
        }}
      />

      {/* Center subtle orb */}
      <div
        className="orb animate-pulse-slow"
        style={{
          width: "400px",
          height: "400px",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          opacity: 0.06,
          animationDelay: "1s",
        }}
      />

      {/* Noise/vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(2,8,23,0.6) 100%)",
        }}
      />
    </div>
  );
}
