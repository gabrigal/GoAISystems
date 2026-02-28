import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for GO AI Systems — the rules governing use of our services.",
};

const year = new Date().getFullYear();

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-100">
      {/* Back nav */}
      <div className="max-w-3xl mx-auto px-4 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8 pb-24">
        <header className="mb-10">
          <p className="text-xs text-cyan-400/70 uppercase tracking-widest font-semibold mb-3">
            Legal
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-slate-500 text-sm">Last updated: January {year}</p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              1. Services
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              GO AI Systems (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides AI systems
              including voice receptionists, SMS/email automation, appointment
              booking workflows, and landing page funnels for real estate
              professionals. By engaging our systems, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              2. Scope of Work
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              The specific deliverables, timelines, and fees for each project
              are outlined in a separate proposal or statement of work agreed
              upon prior to commencement. Any changes to scope must be agreed
              upon in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              3. Client Responsibilities
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              You agree to provide accurate information, timely feedback, and
              any content or assets required for project completion. Delays
              caused by late client input may affect delivery timelines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              4. Intellectual Property
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              Upon receipt of final payment, you receive full ownership of the
              delivered website design and code. We retain the right to display
              completed projects in our portfolio unless you request otherwise
              in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              5. Payment
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              Payment terms are specified in your project proposal. We
              typically require a deposit before work begins. Final payment is
              due before the site goes live. Late payments may result in work
              being paused.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              6. Limitation of Liability
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              We are not liable for any indirect, incidental, or consequential
              damages arising from the use of your website or services. Our
              total liability is limited to the amount paid for the specific
              project in question.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              7. Termination
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              Either party may terminate a project with 7 days written notice.
              In the event of termination, you are responsible for payment of
              all work completed to date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              8. Governing Law
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              These terms are governed by the laws of the State of New York,
              United States. Any disputes will be resolved through good-faith
              negotiation or, if necessary, binding arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              9. SMS Messaging
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm mb-3">
              By providing your mobile phone number on our booking form, you
              consent to receive SMS text messages from GO AI Systems for the
              purpose of appointment confirmation and follow-up communications.
            </p>
            <ul className="text-slate-400 text-sm space-y-2 list-none">
              <li><span className="text-slate-300 font-semibold">Message frequency:</span> Message frequency varies based on your interactions with us.</li>
              <li><span className="text-slate-300 font-semibold">Rates:</span> Message and data rates may apply depending on your carrier plan.</li>
              <li><span className="text-slate-300 font-semibold">Opt-out:</span> Reply <span className="text-white font-semibold">STOP</span> to any message to unsubscribe from future SMS messages at any time. You will receive a one-time confirmation message.</li>
              <li><span className="text-slate-300 font-semibold">Help:</span> Reply <span className="text-white font-semibold">HELP</span> for assistance, or contact us at <a href="mailto:hello@goaisystems.com" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">hello@goaisystems.com</a>.</li>
              <li><span className="text-slate-300 font-semibold">No sharing:</span> We do not sell, rent, or share your phone number with third parties for their marketing purposes.</li>
              <li><span className="text-slate-300 font-semibold">Carriers:</span> Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">10. Contact</h2>
            <p className="text-slate-400 leading-relaxed text-sm">
              For questions about these terms, contact us at:{" "}
              <a
                href="mailto:hello@goaisystems.com"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                hello@goaisystems.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-600">
        &copy; {year} GO AI Systems
      </footer>
    </div>
  );
}
