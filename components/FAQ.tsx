"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can the AI transfer calls to me?",
    answer:
      "Yes. You can configure live-transfer rules so the AI hands off to you when a lead meets certain criteria — like a motivated buyer ready to talk now. Outside your hours, it captures everything and books a callback instead.",
  },
  {
    question: "What if someone texts instead of calls?",
    answer:
      "Covered. The SMS Responder handles inbound texts the same way the AI handles calls: it qualifies the lead, collects contact info, and sends an instant follow-up sequence. Leads don't fall through whether they call or text.",
  },
  {
    question: "Does it integrate with Follow Up Boss or my CRM?",
    answer:
      "Yes — Follow Up Boss and Go HighLevel are directly supported, and most other CRMs can be connected as well. Every lead captured gets logged automatically, so your pipeline stays clean without any manual data entry.",
  },
  {
    question: "Can it book directly into Google Calendar?",
    answer:
      "Absolutely. The Appointment Booking component connects directly to your Google Calendar. The AI checks your real-time availability and only offers slots that are open — no double-bookings, no back-and-forth.",
  },
  {
    question: "Will it sound like a robot?",
    answer:
      "No. We use conversational AI voices that sound natural and professional. Most callers don't realize they're talking to an AI. You can choose a voice, set the tone, and we'll script it to match your brand.",
  },
  {
    question: "Which bundle should I pick?",
    answer:
      "It depends on your biggest bottleneck. If you're missing calls after hours → 24/7 Booking System. If leads go cold because follow-up is slow → Follow-Up Engine. If you need an online presence first → Starter Funnel. Not sure? That's exactly what the free strategy call is for.",
  },
  {
    question: "What do you need from me to launch?",
    answer:
      "Very little. We'll need your phone number for call routing, your Google Calendar access, a list of the questions you want asked (we can draft these), and your preferred voice/tone. Most setups are live within 5–7 business days.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={`glass-card rounded-xl border border-white/5 overflow-hidden transition-all duration-300 ${
        isOpen ? "border-cyan-500/20" : "hover:border-white/10"
      }`}
    >
      {/* text-white on the button prevents browser default button color from bleeding through */}
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-visible:outline-none"
        style={{ color: 'white' }}
        onClick={onToggle}
        aria-expanded={isOpen}
        id={`faq-btn-${index}`}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="font-semibold text-sm sm:text-base pr-4" style={{ color: 'white' }}>
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
            isOpen ? "border-cyan-500/40 rotate-45 bg-cyan-500/10" : ""
          }`}
          aria-hidden="true"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 1v8M1 5h8"
              stroke={isOpen ? "#22d3ee" : "#64748b"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* Accordion panel */}
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "400px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faqs" className="relative z-10 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
            Got questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">
            Plain answers. No jargon. If something isn&apos;t covered here,{" "}
            <a
              href="#contact"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
            >
              just ask
            </a>
            .
          </p>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
