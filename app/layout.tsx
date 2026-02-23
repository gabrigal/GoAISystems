import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goaiservices.com"),
  title: {
    default: "GO AI Systems | Lead-Capturing Websites for Solo Real Estate Agents",
    template: "%s | GO AI Systems",
  },
  description:
    "We build futuristic, high-converting landing pages for solo real estate agents that turn clicks into calls — and plug into your tools when you're ready.",
  keywords: [
    "real estate website",
    "lead generation",
    "real estate agent website",
    "landing page",
    "real estate marketing",
    "lead capture",
    "real estate SEO",
  ],
  authors: [{ name: "Gabriel Ornes", url: "https://goaiservices.com" }],
  creator: "GO AI Systems",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goaiservices.com",
    title: "GO AI Systems | Lead-Capturing Websites for Solo Real Estate Agents",
    description:
      "Futuristic, high-converting websites for solo real estate agents. Turn clicks into calls.",
    siteName: "GO AI Systems",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GO AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GO AI Systems | Real Estate Lead-Capturing Websites",
    description:
      "Futuristic, high-converting websites for solo real estate agents.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#020817] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
