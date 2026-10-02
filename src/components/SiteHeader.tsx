"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#offerings", label: "Offerings" },
  { href: "/concept/ic-nd-1", label: "IC-ND-1" },
  { href: "/#work", label: "Work" },
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
      className={`nav-shell sticky top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-ink/15 bg-cream/95 shadow-[0_1px_0_rgba(26,31,36,0.06)]"
          : "border-cream/15 bg-ink"
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-5 px-5 py-3 sm:gap-8 sm:px-8 sm:py-3.5 lg:px-12">
        <a href="/" className="shrink-0" aria-label="Intercal Labs home">
          <Image
            src={assets.logo}
            alt="Intercal Labs"
            width={320}
            height={86}
            className="h-12 w-auto sm:h-14 lg:h-16 xl:h-[4.5rem]"
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
                className={`font-[family-name:var(--font-body)] text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                  scrolled
                    ? isConcept
                      ? "text-scarlet"
                      : "text-ink hover:text-scarlet"
                    : isConcept
                      ? "text-scarlet"
                      : "text-[color:var(--cream)] hover:text-scarlet"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="mailto:info@intercallabs.com"
          className={`btn shrink-0 ${
            scrolled ? "btn-primary" : "btn-nav-top"
          }`}
        >
          Contact
        </a>
      </div>

      <nav
        aria-label="Sections"
        className={`flex gap-5 overflow-x-auto border-t px-5 py-2.5 xl:hidden sm:px-8 ${
          scrolled ? "border-ink/10" : "border-cream/12"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`shrink-0 font-[family-name:var(--font-body)] text-[0.68rem] font-medium uppercase tracking-[0.14em] transition-colors ${
              scrolled
                ? "text-ink/85 hover:text-scarlet"
                : "text-[color:var(--cream)] hover:text-scarlet"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
