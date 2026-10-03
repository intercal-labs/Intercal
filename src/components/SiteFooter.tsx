import Image from "next/image";
import { assets } from "@/lib/assets";

export function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-ink px-5 py-14 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-[90rem] min-w-0 flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Image
            src={assets.logo}
            alt="Intercal Labs"
            width={280}
            height={58}
            className="h-9 w-auto max-w-full sm:h-12"
          />
          <p className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.16em] text-cream/55">
            © {new Date().getFullYear()} Intercal Labs
          </p>
        </div>
        <a
          href="mailto:info@intercallabs.com"
          className="break-words font-[family-name:var(--font-body)] text-sm tracking-[0.02em] text-cream underline decoration-terracotta/50 underline-offset-4 transition-colors hover:text-scarlet [overflow-wrap:anywhere]"
        >
          info@intercallabs.com
        </a>
      </div>
    </footer>
  );
}
