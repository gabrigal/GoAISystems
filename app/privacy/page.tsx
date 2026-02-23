import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for GO AI Systems — how we collect, use, and protect your information.",
};

const year = new Date().getFullYear();

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">Last updated: January {year}</p>
        </header>

        <div className="prose prose-invert prose-sm max-w-none space-y-8">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              1. Information We Collect
            </h2>
            <p className="text-slate-400 leading-relaxed">
              When you use our contact form or book a call, we collect your
              name, email address, phone number (optional), and any message you
              send. We do not collect payment information — billing is handled
              by third-party processors.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We use your contact information solely to respond to your
              inquiry, schedule strategy calls, and deliver services you
              request. We do not sell, rent, or share your personal information
              with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              3. Cookies & Analytics
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We may use cookies and analytics tools (such as Google Analytics)
              to understand how visitors use our site. This data is aggregated
              and anonymous. You can opt out by adjusting your browser settings
              or using the Google Analytics opt-out extension.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              4. Data Security
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We take reasonable precautions to protect your information. Our
              site uses HTTPS encryption. However, no method of transmission
              over the Internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              5. Third-Party Services
            </h2>
            <p className="text-slate-400 leading-relaxed">
              We may use third-party tools including Calendly (scheduling),
              Google Analytics (analytics), and email service providers. Each
              of these services has its own privacy policy, and we encourage
              you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              6. Your Rights
            </h2>
            <p className="text-slate-400 leading-relaxed">
              You have the right to request access to, correction of, or
              deletion of your personal data. To exercise these rights, email
              us at the address in the Contact section below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">7. Contact</h2>
            <p className="text-slate-400 leading-relaxed">
              For privacy-related questions, contact us at:{" "}
              <a
                href="mailto:privacy@goaisystems.com"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                privacy@goaisystems.com
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
