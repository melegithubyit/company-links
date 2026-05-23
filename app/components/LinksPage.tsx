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

const links = [
  {
    platform: "Website",
    handle: "pitrontech.et",
    url: "https://pitrontech.et",
    icon: <GlobeIcon />,
    iconBg: "bg-gradient-to-br from-sky-400 to-cyan-500",
    shadowColor: "shadow-sky-500/25",
  },
  {
    platform: "LinkedIn",
    handle: "Pitron Tech Solutions",
    url: "https://www.linkedin.com/company/pitron-tech-solutions/",
    icon: <LinkedInIcon />,
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
    shadowColor: "shadow-blue-500/25",
  },
  {
    platform: "Instagram",
    handle: "@pitron_tech_sol",
    url: "https://www.instagram.com/pitron_tech_sol?igsh=MTg1cGp1YXhtcGduMQ%3D%3D&utm_source=qr",
    icon: <InstagramIcon />,
    iconBg: "bg-gradient-to-br from-purple-500 via-rose-500 to-orange-400",
    shadowColor: "shadow-rose-500/25",
  },
  {
    platform: "TikTok",
    handle: "@pitron_tech_sol",
    url: "https://www.tiktok.com/@pitron_tech_sol?_r=1&_t=ZS-96b3sTWTI1N",
    icon: <TikTokIcon />,
    iconBg: "bg-gradient-to-br from-gray-700 to-gray-950",
    shadowColor: "shadow-gray-800/40",
  },
];

export default function LinksPage() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/60 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 transition-colors duration-300">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-5 pb-3 max-w-md mx-auto">
        <div className="flex items-center gap-2.5">
          {(!mounted || !isDark) && (
            <Image
              src="/logo-light.png"
              alt="Pitron logo"
              width={100}
              height={36}
              className="object-contain"
              priority
            />
          )}
          {mounted && isDark && (
            <span className="font-semibold text-white tracking-tight text-sm">
              Pitron
            </span>
          )}
        </div>
        <button
          onClick={toggleTheme}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
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
          className="flex flex-col items-center text-center pt-8 pb-8"
          style={{ animation: "fadeInUp 0.5s ease-out forwards" }}
        >
          {/* {(!mounted || !isDark) && (
            <div className="relative mb-5">
              <div
                className="flex items-center justify-center"
                style={{ animation: "float 3.5s ease-in-out infinite" }}
              >
                <Image
                  src="/logo-light.png"
                  alt="Pitron Tech Solutions"
                  width={160}
                  height={60}
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600 opacity-10 blur-xl -z-10" />
            </div>
          )} */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Pitron Tech Solutions
          </h1>
          <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
            Tech that connects
          </p>
        </div>

        {/* Link cards */}
        <div className="flex flex-col gap-3">
          {links.map((link, i) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-100/80 dark:border-gray-700/40 shadow-sm hover:shadow-xl dark:hover:shadow-gray-950/60 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
              style={{
                animation: `fadeInUp 0.5s ease-out ${0.15 + i * 0.1}s both`,
              }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${link.iconBg} flex items-center justify-center text-white shadow-lg ${link.shadowColor} flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
              >
                {link.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                  {link.platform}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                  {link.handle}
                </div>
              </div>
              <div className="text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-all duration-200 group-hover:translate-x-1">
                <ChevronRight />
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-6 text-xs text-gray-400 dark:text-gray-600"
        style={{ animation: "fadeInUp 0.5s ease-out 0.6s both" }}
      >
        © {new Date().getFullYear()} Pitron Tech Solutions
      </footer>
    </div>
  );
}
