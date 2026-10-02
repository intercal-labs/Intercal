"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#offerings", label: "Offerings" },
  { href: "/concept/ic-nd-1", label: "IC-ND-1" },
  { href: "/#people", label: "People" },
  { href: "/#contact", label: "Contact" },
] as const;

type SiteHeaderProps = {
  active?: "home" | "concept";
};

export function SiteHeader({ active = "home" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`nav-shell sticky top-0 z-50 border-b border-cream/20 bg-ink backdrop-blur-md transition-[box-shadow] duration-300 ${
        scrolled ? "shadow-[0_8px_28px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-4 py-2 sm:gap-6 sm:px-8 sm:py-2.5 lg:px-12">
        <a href="/" className="shrink-0" aria-label="Intercal Labs home">
          <Image
            src={assets.logoNav}
            alt="Intercal"
            width={912}
            height={158}
            className="h-14 w-auto sm:h-16 lg:h-[4.5rem] xl:h-[4.75rem]"
            priority
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
          {navLinks.map((link) => {
            const isConcept =
              active === "concept" && link.href === "/concept/ic-nd-1";
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link font-[family-name:var(--font-body)] text-[0.74rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isConcept ? "is-active" : ""
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="mailto:info@intercallabs.com"
          className="btn btn-nav-top shrink-0"
        >
          Contact
        </a>
      </div>

      <nav
        aria-label="Sections"
        className="flex gap-5 overflow-x-auto border-t border-cream/15 px-4 py-2.5 xl:hidden sm:px-8"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link shrink-0 font-[family-name:var(--font-body)] text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
