import Image from "next/image";
import { HeroMedia } from "@/components/HeroMedia";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { assets } from "@/lib/assets";

const offerings = [
  {
    title: "Hardware & firmware",
    body: (
      <>
        Custom electronics and device software — boards, bring-up, code on the
        device. Client builds and our own. First product in development:{" "}
        <a
          href="/concept/ic-nd-1"
          className="text-scarlet underline decoration-scarlet/30 underline-offset-4 transition-colors hover:text-scarlet-deep"
        >
          IC-ND-1
        </a>{" "}
        (concept — not a finished instrument catalog).
      </>
    ),
  },
  {
    title: "Software & web",
    body: (
      <>
        Applications, integrations, and internal tools that connect systems you
        already run. Client websites with technical maintenance — hosting,
        DNS/SSL, backups, patching. Not ads, social, or SEO campaigns.
      </>
    ),
  },
  {
    title: "Field I&C",
    body: (
      <>
        Instrumentation and low-voltage controls on site: calibration, loop
        checks, commissioning, control-side wiring and install, like-for-like
        instrument replacement. Not premises power; not PE-stamped.
      </>
    ),
  },
  {
    title: "Legacy retrofit",
    body: (
      <>
        Keep the working asset. Add the path out — signals, device, firmware,
        software, or all three — without a full rip-and-replace.
      </>
    ),
  },
] as const;

export default function Home() {
  return (
    <main className="min-w-0 max-w-[100%] overflow-x-hidden bg-cream text-ink">
      <SiteHeader active="home" />

      {/* Hero — nav carries brand lockup; line + CTA over video */}
      <section className="relative isolate min-h-[calc(100dvh-5.5rem)] overflow-hidden">
        <HeroMedia />

        <div className="relative flex min-h-[calc(100dvh-5.5rem)] w-full max-w-[100%] items-end px-5 pb-14 pt-16 sm:items-center sm:px-8 sm:pb-24 sm:pt-24 lg:px-16 lg:pb-28">
          <div className="w-full min-w-0 max-w-xl">
            <div
              aria-hidden
              className="stagger-rules reveal-brand max-w-[9rem] sm:max-w-[12rem]"
            >
              <span />
              <span />
              <span />
              <span />
            </div>

            <p className="reveal-line mt-8 max-w-lg font-[family-name:var(--font-display)] text-[clamp(1.45rem,5.2vw,2.35rem)] font-bold leading-[1.15] tracking-tight text-[color:var(--mist)] sm:mt-10 sm:text-[2.1rem] lg:text-[2.35rem]">
              Hardware. Firmware. Software. Field.
            </p>

            <div className="reveal-cta mt-9 sm:mt-11">
              <a
                href="mailto:info@intercallabs.com"
                className="btn btn-primary"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-36 relative overflow-hidden px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-16 select-none font-[family-name:var(--font-display)] text-[clamp(6rem,18vw,14rem)] font-black leading-none tracking-tight text-ink/[0.04]"
        >
          LAB
        </div>
        <div className="relative mx-auto max-w-[90rem]">
          <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-terracotta">
            About
          </p>
          <div aria-hidden className="rule-craft mt-6 w-20" />
          <h2 className="mt-10 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4.25rem)] font-black leading-[1.02] tracking-tight text-ink">
            A Texas lab for hardware, firmware, software, and field work.
          </h2>
          <div className="mt-10 max-w-2xl space-y-5 font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
            <p>
              Intercal Labs builds custom electronics, device firmware, and
              software under one roof — then carries that work onto the plant
              floor when the job needs boots on site.
            </p>
            <p>
              We do instrumentation and low-voltage controls field work, and we
              retrofit legacy systems so existing gear and software stay useful
              instead of getting ripped out.
            </p>
            <p>
              Based in the Greater Houston area. One lab. Clear scope. No home
              address on the site — email is the door.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings — exactly four short cards */}
      <section
        id="offerings"
        className="scroll-mt-36 border-y border-ink/10 bg-ink px-5 py-20 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[90rem]">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            What we offer
          </h2>
          <p className="mt-5 max-w-lg font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/70 sm:text-base">
            Four lanes. Same lab.
          </p>

          <div className="mt-14 grid gap-px bg-cream/15 sm:grid-cols-2">
            {offerings.map((offer) => (
              <article
                key={offer.title}
                className="bg-ink px-6 py-10 sm:px-8 sm:py-12 lg:px-10"
              >
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-cream sm:text-3xl">
                  {offer.title}
                </h3>
                <div aria-hidden className="rule-craft mt-5 w-12" />
                <p className="mt-6 max-w-md font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/75 sm:text-[0.95rem]">
                  {offer.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IC-ND-1 teaser */}
      <section
        id="ic-nd-1"
        className="scroll-mt-36 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-28"
      >
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-terracotta">
              Concept · not for sale
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tight text-ink">
              IC-ND-1
            </h2>
          </div>
          <div>
            <p className="max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
              Parallel loop integrity monitor for existing 4–20 mA / HART loops.
              Concept in development — not a catalog product, not for sale yet.
            </p>
            <a href="/concept/ic-nd-1" className="btn btn-ink mt-8">
              Read the concept
            </a>
          </div>
        </div>
      </section>

      {/* People */}
      <section
        id="people"
        className="scroll-mt-36 border-t border-ink/10 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
              People
            </h2>
            <p className="font-[family-name:var(--font-body)] text-sm text-[color:var(--fog)]">
              Two owners. Clear lanes.
            </p>
          </div>

          <div className="grid gap-20 lg:grid-cols-2 lg:gap-8">
            <article className="group">
              <div className="relative aspect-[4/5] max-w-md overflow-hidden bg-tan/50">
                <Image
                  src={assets.shay}
                  alt="Shay Rodriguez"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-8 max-w-md">
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-black tracking-tight text-ink sm:text-4xl">
                  Shay Rodriguez
                </h3>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.16em] text-terracotta">
                  Founder &amp; CTO
                </p>
                <p className="mt-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
                  Industrial hardware, firmware, instruments, and software. Owns
                  the product and custom build work.
                </p>
                <a
                  href="https://shay-rodriguez.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-[family-name:var(--font-body)] text-[0.7rem] font-medium uppercase tracking-[0.14em] text-scarlet underline decoration-scarlet/35 underline-offset-4 transition-colors hover:text-scarlet-deep"
                >
                  Portfolio
                </a>
              </div>
            </article>

            <article className="group lg:mt-24">
              <div className="relative aspect-[4/5] max-w-md overflow-hidden bg-tan/50 lg:ml-auto">
                <Image
                  src={assets.taylor}
                  alt="Taylor Rodriguez"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top contrast-[1.04] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-8 max-w-md lg:ml-auto lg:text-right">
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-black tracking-tight text-ink sm:text-4xl">
                  Taylor Rodriguez
                </h3>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.16em] text-terracotta">
                  COO · Web &amp; Finance
                </p>
                <p className="mt-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
                  Web clients, intake, and company finances. Main contact for the
                  web line.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-36 border-t border-ink/10 bg-ink px-5 py-28 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-[90rem]">
          <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-terracotta">
            Contact
          </p>
          <h2 className="mt-6 max-w-full font-[family-name:var(--font-display)] text-[clamp(1.55rem,7vw,5rem)] font-black leading-[1.05] tracking-tight">
            <a
              href="mailto:info@intercallabs.com"
              className="break-words transition-colors hover:text-scarlet [overflow-wrap:anywhere]"
            >
              info@intercallabs.com
            </a>
          </h2>
          <p className="mt-8 font-[family-name:var(--font-body)] text-sm text-cream/65 sm:text-base">
            Greater Houston area.
          </p>
          <div className="mt-12">
            <a href="mailto:info@intercallabs.com" className="btn btn-primary">
              Email us
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
