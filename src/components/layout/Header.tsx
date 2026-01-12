import AppLink from "../ui/AppLink";


import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Daywise logo"
              className="h-8 w-6 object-contain"
            />
            <div className="px-1 font-brand text-[22px] font-bold tracking-[1px] text-slate-900">
              AYWISE
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-[17px] text-slate-600 lg:flex">
            <a href="#features" className="hover:text-slate-900 transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-900 transition">
              Pricing
            </a>
            <AppLink to="/login" text="Log In" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Animated Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div
            className={`mt-2 rounded-2xl bg-white shadow-xl ring-1 ring-black/5
            transform transition-all duration-300 ease-out
            ${open ? "translate-y-0 scale-100" : "-translate-y-2 scale-95"}`}
          >
            <nav className="flex flex-col gap-4 px-6 py-6 text-[17px] text-slate-700">
              <a
                href="#features"
                className="hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                Pricing
              </a>
              <AppLink to="/login" text="Log In" />
            </nav>
          </div>
        </div>

      </div>
    </header>
  );
}
