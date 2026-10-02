import Image from "next/image";
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
  return (
    <header className="nav-shell sticky top-0 z-50 border-b border-cream/10 bg-ink/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12">
        <a href="/" className="shrink-0" aria-label="Intercal Labs home">
          <Image
            src={assets.logo}
            alt="Intercal Labs"
            width={240}
            height={64}
            className="h-11 w-auto sm:h-12 lg:h-14"
            priority
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => {
            const isConcept =
              active === "concept" && link.href === "/concept/ic-nd-1";
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.16em] transition-colors duration-200 ${
                  isConcept
                    ? "text-cream"
                    : "text-cream/70 hover:text-cream"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="mailto:info@intercallabs.com"
          className="btn btn-primary shrink-0"
        >
          Contact
        </a>
      </div>

      <nav
        aria-label="Sections"
        className="flex gap-5 overflow-x-auto border-t border-cream/10 px-5 py-2.5 xl:hidden sm:px-8"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 font-[family-name:var(--font-body)] text-[0.62rem] uppercase tracking-[0.15em] text-cream/65 transition-colors hover:text-cream"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
