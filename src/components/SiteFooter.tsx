import Image from "next/image";
import { assets } from "@/lib/assets";

export function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-ink px-5 py-12 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <Image
            src={assets.logo}
            alt="Intercal Labs"
            width={140}
            height={37}
            className="h-8 w-auto opacity-90"
          />
          <p className="font-[family-name:var(--font-body)] text-[0.62rem] uppercase tracking-[0.16em] text-cream/55">
            © {new Date().getFullYear()} Intercal Labs
          </p>
        </div>
        <a
          href="mailto:info@intercallabs.com"
          className="font-[family-name:var(--font-body)] text-xs tracking-[0.04em] text-cream/70 underline decoration-terracotta/45 underline-offset-4 transition-colors hover:text-cream"
        >
          info@intercallabs.com
        </a>
      </div>
    </footer>
  );
}
