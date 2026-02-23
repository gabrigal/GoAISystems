import Link from "next/link";

const year = new Date().getFullYear();

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Book a Call", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="gradient-text text-xl font-extrabold">GO</span>
              <span className="text-slate-300 font-medium">AI Systems</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Futuristic, high-converting websites for solo real estate agents.
              Built fast. Built to last.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-600 font-semibold mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div className="glass-card rounded-xl p-6 border border-white/5">
            <p className="text-sm font-semibold text-white mb-1">
              Ready to get more leads?
            </p>
            <p className="text-xs text-slate-500 mb-4">
              30-minute strategy call. Free. No commitment.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex text-xs px-5 py-2.5"
            >
              <span>Book a Free Call</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5">
          <p className="text-xs text-slate-600">
            &copy; {year} GO AI Systems. All rights reserved.
          </p>
          <ul className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
