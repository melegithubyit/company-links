"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.83 1.53V6.77a4.85 4.85 0 01-1.06-.08z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9,18 15,12 9,6" />
  </svg>
);

const SunIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const ShareIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const links = [
  {
    platform: "Website",
    handle: "pitrontech.et",
    url: "https://pitrontech.et",
    icon: <GlobeIcon />,
    hoverBg: "group-hover:from-sky-400 group-hover:to-cyan-600",
  },
  {
    platform: "LinkedIn",
    handle: "Pitron Tech Solutions",
    url: "https://www.linkedin.com/company/pitron-tech-solutions/",
    icon: <LinkedInIcon />,
    hoverBg: "group-hover:from-blue-500 group-hover:to-blue-700",
  },
  {
    platform: "Instagram",
    handle: "@pitron_tech_sol",
    url: "https://www.instagram.com/pitron_tech_sol?igsh=MTg1cGp1YXhtcGduMQ%3D%3D&utm_source=qr",
    icon: <InstagramIcon />,
    hoverBg: "group-hover:from-purple-500 group-hover:to-orange-400",
  },
  {
    platform: "TikTok",
    handle: "@pitron_tech_sol",
    url: "https://www.tiktok.com/@pitron_tech_sol?_r=1&_t=ZS-96b3sTWTI1N",
    icon: <TikTokIcon />,
    hoverBg: "group-hover:from-gray-700 group-hover:to-black",
  },
];

export default function LinksPage() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  // Native share sheet on mobile, copy-link fallback on desktop
  const sharePage = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Pitron Tech Solutions",
          text: "Connect with Pitron Tech Solutions",
          url,
        });
      } catch {
        // share sheet dismissed
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f3f8f9] dark:bg-ink transition-colors duration-500">
      {/* Background: brand pattern + soft glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <div className="pattern-bg absolute inset-0 opacity-[0.14] dark:opacity-45" />
        <div
          className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-brand-light/30 dark:bg-brand/50 blur-3xl"
          style={{ animation: "drift 14s ease-in-out infinite" }}
        />
        <div
          className="absolute -bottom-40 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand/20 dark:bg-brand-light/20 blur-3xl"
          style={{ animation: "drift 18s ease-in-out infinite reverse" }}
        />
      </div>

      <div className="relative">
        {/* Header */}
        <header className="flex items-center justify-end gap-2 px-5 pt-5 max-w-md mx-auto">
          <button
            onClick={sharePage}
            className="h-9 px-3.5 rounded-full flex items-center gap-1.5 text-xs font-semibold bg-white/80 dark:bg-white/10 backdrop-blur-md border border-brand/10 dark:border-white/10 text-brand dark:text-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Share this page"
          >
            {copied ? <CheckIcon /> : <ShareIcon />}
            {copied ? "Copied!" : "Share"}
          </button>
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/80 dark:bg-white/10 backdrop-blur-md border border-brand/10 dark:border-white/10 text-brand dark:text-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Toggle theme"
            suppressHydrationWarning
          >
            {mounted ? isDark ? <SunIcon /> : <MoonIcon /> : <MoonIcon />}
          </button>
        </header>

        {/* Main */}
        <main className="max-w-md mx-auto px-5 pb-10">
          {/* Hero */}
          <div
            className="flex flex-col items-center text-center pt-10 pb-9"
            style={{ animation: "fadeInUp 0.6s ease-out forwards" }}
          >
            <div
              className="relative"
              style={{ animation: "float 5s ease-in-out infinite" }}
            >
              <div className="absolute inset-x-10 inset-y-0 rounded-full bg-brand-light/30 blur-2xl -z-10" />
              <Image
                src="/PitronTech-light.png"
                alt="Pitron Technology Solutions"
                width={14999}
                height={2022}
                sizes="(max-width: 640px) 340px, 440px"
                className="w-[340px] sm:w-[440px] h-auto dark:hidden"
                fetchPriority="high"
              />
              <Image
                src="/PitronTech-dark2.png"
                alt="Pitron Technology Solutions"
                width={14999}
                height={2022}
                sizes="(max-width: 640px) 340px, 440px"
                className="w-[340px] sm:w-[440px] h-auto hidden dark:block"
                fetchPriority="high"
              />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-white/70 dark:bg-white/10 backdrop-blur-md border border-brand/15 dark:border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="max-w-[260px] text-xs font-semibold leading-relaxed tracking-wide text-brand dark:text-white/90">
                Tech that connects text to change it to Done today!
              </span>
            </div>
          </div>

          {/* Link cards */}
          <div className="flex flex-col gap-3.5">
            {links.map((link, i) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-4 rounded-2xl p-4 bg-white/85 dark:bg-brand-deep/60 backdrop-blur-xl border border-brand/10 dark:border-white/10 shadow-[0_4px_20px_-8px_rgba(30,81,96,0.25)] hover:shadow-[0_16px_40px_-12px_rgba(30,81,96,0.45)] dark:hover:shadow-[0_16px_40px_-12px_rgba(79,163,184,0.35)] hover:border-brand/30 dark:hover:border-brand-light/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${0.2 + i * 0.1}s both`,
                }}
              >
                {/* Shine sweep on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 dark:via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:[animation:shine_0.9s_ease-out]"
                />
                <div
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-brand-deep ${link.hoverBg} flex items-center justify-center text-white shadow-lg shadow-brand/30 dark:ring-1 dark:ring-brand-light/40 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  {link.icon}
                </div>
                <div className="relative flex-1 min-w-0">
                  <div className="font-semibold text-brand-deep dark:text-white text-[15px] leading-tight">
                    {link.platform}
                  </div>
                  <div className="text-xs text-brand/70 dark:text-white/55 truncate mt-0.5">
                    {link.handle}
                  </div>
                </div>
                <div className="relative w-8 h-8 rounded-full flex items-center justify-center text-brand/40 dark:text-white/40 group-hover:bg-brand group-hover:text-white dark:group-hover:bg-brand-light dark:group-hover:text-ink transition-all duration-300 group-hover:translate-x-0.5">
                  <ChevronRight />
                </div>
              </a>
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer
          className="text-center pb-8 pt-2 text-xs text-brand/60 dark:text-white/40"
          style={{ animation: "fadeInUp 0.5s ease-out 0.7s both" }}
        >
          © {new Date().getFullYear()} Pitron Technology Solutions
        </footer>
      </div>
    </div>
  );
}
