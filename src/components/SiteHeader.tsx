"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`nav-shell sticky top-0 z-50 border-b border-cream/20 bg-ink backdrop-blur-md transition-[box-shadow] duration-300 ${
        scrolled ? "shadow-[0_8px_28px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-[90rem] min-w-0 items-center justify-between gap-3 px-4 py-2.5 sm:gap-6 sm:px-8 sm:py-2.5 lg:px-12">
        <a
          href="/"
          className="nav-logo-link min-w-0 shrink"
          aria-label="Intercal Labs home"
          onClick={closeMenu}
        >
          <Image
            src={assets.logoNav}
            alt="Intercal"
            width={912}
            height={158}
            className="nav-logo h-9 w-auto max-h-11 max-w-[min(100%,11.5rem)] sm:h-11 sm:max-h-none sm:max-w-[min(100%,16rem)] lg:h-14 xl:h-[3.5rem]"
            priority
          />
        </a>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 items-center gap-6 lg:gap-7 xl:flex"
        >
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <a
              href="mailto:info@intercallabs.com"
              className="btn btn-nav-top"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            className="nav-menu-toggle xl:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>
            <span aria-hidden className="nav-menu-icon" data-open={menuOpen}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`nav-drawer xl:hidden ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t border-cream/15 px-4 py-4 sm:px-8"
        >
          {navLinks.map((link) => {
            const isConcept =
              active === "concept" && link.href === "/concept/ic-nd-1";
            return (
              <a
                key={link.href}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                className={`nav-link rounded-sm px-1 py-3 font-[family-name:var(--font-body)] text-[0.8rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  isConcept ? "is-active" : ""
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            );
          })}
          <div className="mt-3 sm:hidden">
            <a
              href="mailto:info@intercallabs.com"
              tabIndex={menuOpen ? 0 : -1}
              className="btn btn-nav-top w-full"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
