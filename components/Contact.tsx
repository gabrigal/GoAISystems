"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function InputField({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
        {label} {required && <span className="text-cyan-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
      />
    </div>
  );
}

const callPreview = [
  "Quick audit of your current lead capture gaps",
  "Recommended bundle based on your situation",
  "Realistic timeline + clear next steps to launch",
];

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const setField = (field: keyof FormData) => (value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
            Let&apos;s talk
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Book a <span className="gradient-text">Free Strategy Call</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            30 minutes. No pitch. Just a clear plan for turning your missed
            calls into booked appointments.
          </p>

          {/* What you'll get on the call */}
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center">
            {callPreview.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                  <path d="M2.5 7l3 3 6-6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Google Calendar booking card */}
          <div className="glass-card glow-border rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-white text-lg mb-1">Schedule a Call</h3>
              <p className="text-slate-400 text-sm">
                Pick a time that works for you. Typically 30 minutes.
              </p>
            </div>

            {/* What to expect */}
            <div className="flex flex-col gap-3">
              {[
                { title: "Quick audit", body: "We review your current lead capture gaps in real time." },
                { title: "Bundle recommendation", body: "You'll know exactly which setup fits your situation." },
                { title: "Clear next steps", body: "Timeline, what we need from you, and how fast we can launch." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                    <path d="M3 8l3 3 7-7" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance line */}
            <p className="text-slate-600 text-xs text-center">
              30 minutes · No pitch · No commitment
            </p>

            {/* CTA — goes to /book to capture name + phone before opening Google Calendar */}
            <a
              href="/book"
              className="btn-primary w-full py-4 text-sm font-semibold flex items-center justify-center gap-2 shadow-glow-cyan"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 2v2M12 2v2M2 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M6 11l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Book Your Free Strategy Call</span>
            </a>
          </div>

          {/* Contact form */}
          <div className="glass-card glow-border rounded-2xl p-8">
            <h3 className="font-bold text-white text-lg mb-2">Or Send a Message</h3>
            <p className="text-slate-400 text-sm mb-6">
              Prefer email? Fill this out and we&apos;ll be in touch within 24 hours.
            </p>

            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l5 5 11-11" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Message sent!</p>
                  <p className="text-slate-400 text-sm mt-1">We&apos;ll reply within 24 hours.</p>
                </div>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <InputField label="Full Name" id="name" placeholder="Alex Rodriguez" value={formData.name} onChange={setField("name")} required />
                <InputField label="Email" id="email" type="email" placeholder="alex@realty.com" value={formData.email} onChange={setField("email")} required />
                <InputField label="Phone (optional)" id="phone" type="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={setField("phone")} />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Message <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us your situation — missed calls, slow follow-up, no website. We'll know exactly what to recommend."
                    value={formData.message}
                    onChange={(e) => setField("message")(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200 resize-none"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-red-400 text-xs bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-2">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="btn-primary w-full py-3.5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span>{formState === "loading" ? "Sending..." : "Send Message"}</span>
                  {formState !== "loading" && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l8-5-2 5 2 5L2 7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>

                <p className="text-center text-xs text-slate-600">
                  No spam. Replies within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
