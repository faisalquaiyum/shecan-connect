"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
  { href: "/admin", label: "Admin" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 text-sm font-semibold uppercase tracking-wide text-white shadow-lg">
            SC
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900">
              She Can Foundation
            </p>
            <p className="text-xs text-slate-500">Empowering future leaders</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="transition hover:text-slate-900"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Join the mission
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={handleToggle}
        >
          <span className="sr-only">Toggle menu</span>
          Menu
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200/60 bg-white/95 px-6 transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 py-4 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="transition hover:text-slate-900"
              href={link.href}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg"
          >
            Join the mission
          </Link>
        </div>
      </div>
    </header>
  );
}
