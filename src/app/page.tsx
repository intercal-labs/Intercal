import Image from "next/image";

const navLinks = [
  { href: "#offerings", label: "Offerings" },
  { href: "#hardware", label: "Hardware" },
  { href: "#firmware", label: "Firmware" },
  { href: "#software", label: "Software" },
  { href: "#web", label: "Web" },
  { href: "#people", label: "People" },
  { href: "#contact", label: "Contact" },
] as const;

const offers = [
  {
    id: "web",
    title: "Web development",
    lead: "Taylor’s line",
    body: "Sites and technical care for local businesses. Fast builds, clear scope, and technical maintenance — hosting, DNS, SSL, backups, patches. Not social media, ads, or reputation management.",
  },
  {
    id: "software",
    title: "Software development",
    lead: null,
    body: "Custom apps, integrations, and tools that connect systems a customer already uses. Practical business software — not vaporware platforms.",
  },
  {
    id: "firmware",
    title: "Firmware",
    lead: null,
    body: "Embedded firmware for instruments and devices — STM32-class work, bring-up, and protocols. Product and custom device firmware under the Labs umbrella.",
  },
  {
    id: "hardware",
    title: "Hardware",
    lead: null,
    body: "Boards, instrumentation hardware, and loop/device electronics. Current product focus: HART / 4–20 loop integrity monitoring — parallel tap, not a gateway.",
  },
] as const;

const orgLines = [
  { title: "Field", body: "Calibration, LV controls, plant service" },
  { title: "Products", body: "Instrumentation hardware" },
  { title: "Design", body: "Custom HW / FW / SW — industrial or not" },
] as const;

const workBullets = [
  "Field equipment and controls for plant and shop floors",
  "Embedded firmware and instrumentation electronics",
  "Custom software that ties existing systems together",
] as const;

export default function Home() {
  return (
    <main className="bg-cream text-ink">
      <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10">
          <a href="/" className="shrink-0" aria-label="Intercal Labs home">
            <Image
              src="/intercal-labs-logo.png"
              alt="Intercal Labs"
              width={180}
              height={48}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-5 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.14em] text-cream/75 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="mailto:info@intercallabs.com"
            className="shrink-0 border border-scarlet/80 bg-scarlet px-3.5 py-2 font-[family-name:var(--font-body)] text-[0.65rem] font-medium uppercase tracking-[0.16em] text-cream transition-colors hover:bg-scarlet-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          >
            Email
          </a>
        </div>

        <nav
          aria-label="Sections"
          className="flex gap-4 overflow-x-auto border-t border-cream/10 px-5 py-2.5 lg:hidden sm:px-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.14em] text-cream/70 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* 1) Hero */}
      <section className="relative isolate flex min-h-[calc(100dvh-4.5rem)] items-center overflow-hidden px-5 py-20 sm:px-8 md:px-12 lg:px-16">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="hero-atmosphere absolute inset-0" />
          <div className="hero-grain absolute inset-0 opacity-[0.32]" />
          <div className="hero-grid absolute inset-0 opacity-[0.2]" />
          <div className="absolute inset-y-0 left-0 w-[min(56vw,38rem)] bg-gradient-to-r from-ink via-ink/85 to-transparent" />
        </div>

        <div className="relative w-full max-w-3xl">
          <div className="reveal-brand">
            <Image
              src="/intercal-labs-logo.png"
              alt="Intercal Labs"
              width={720}
              height={190}
              className="h-auto w-full max-w-[min(100%,34rem)]"
              priority
            />
          </div>

          <div aria-hidden className="stagger-rules mt-8 max-w-xs sm:max-w-sm">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <p className="reveal-tagline mt-8 max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--mist)] sm:text-lg">
            Instrumentation, controls, and custom electronics — built and
            supported in the field.
          </p>

          <div className="reveal-cta mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@intercallabs.com"
              className="inline-flex items-center justify-center bg-scarlet px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.14em] text-cream transition-[background-color,transform] duration-300 hover:bg-scarlet-deep hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
            >
              Email us
            </a>
            <a
              href="#offerings"
              className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-cream/70 underline decoration-terracotta/60 underline-offset-4 transition-colors hover:text-cream"
            >
              See offerings
            </a>
          </div>
        </div>
      </section>

      {/* 2) What we offer */}
      <section
        id="offerings"
        className="relative scroll-mt-28 border-t border-ink/10 px-5 py-20 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.2em] text-terracotta">
            Starting out
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            What we offer right now
          </h2>
          <div aria-hidden className="mt-5 h-px w-20 bg-terracotta" />
          <p className="mt-7 max-w-2xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            One Texas lab for industrial tech and custom build work — websites
            and software for cashflow and clients; hardware, firmware, and
            software for products and custom jobs.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-0">
          {offers.map((offer, index) => (
            <article
              key={offer.id}
              id={offer.id}
              className="scroll-mt-28 border-t border-ink/15 py-10 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.18em] text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {offer.title}
                </h3>
                {offer.lead ? (
                  <span className="font-[family-name:var(--font-body)] text-xs tracking-[0.04em] text-ink/55">
                    {offer.lead}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 max-w-2xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
                {offer.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-3xl border-t border-ink/15 pt-10">
          <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            <span className="font-semibold text-ink">Field</span> — calibration
            and LV controls as a future service line. Not the whole company yet;
            we keep that honest.
          </p>
        </div>
      </section>

      {/* 3) How the lab is organized */}
      <section className="border-t border-ink/10 bg-tan/35 px-5 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            How the lab is organized
          </h2>
          <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Three lines under one umbrella.
          </p>
          <div aria-hidden className="mt-6 h-px w-20 bg-terracotta" />

          <ul className="mt-10 space-y-6">
            {orgLines.map((line) => (
              <li
                key={line.title}
                className="grid gap-1 border-l-2 border-scarlet/80 pl-5 sm:grid-cols-[7rem_1fr] sm:items-baseline sm:gap-6"
              >
                <span className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">
                  {line.title}
                </span>
                <span className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
                  {line.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4) Work */}
      <section
        id="work"
        className="scroll-mt-28 border-t border-ink/10 px-5 py-20 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Selected work
          </h2>
          <p className="mt-5 max-w-2xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Capability areas we build around. Employment history and deeper
            samples live on the personal portfolio.
          </p>
          <div aria-hidden className="mt-6 h-px w-20 bg-terracotta" />

          <ul className="mt-10 space-y-4">
            {workBullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base"
              >
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-scarlet" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Portfolio:{" "}
            <a
              href="https://shay-rodriguez.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-scarlet underline decoration-scarlet/35 underline-offset-4 transition-colors hover:text-scarlet-deep"
            >
              shay-rodriguez.vercel.app
            </a>
            . Web samples and demos live there until the web line has its own
            page.
          </p>
        </div>
      </section>

      {/* 5) People */}
      <section
        id="people"
        className="scroll-mt-28 border-t border-ink/10 bg-tan/35 px-5 py-20 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            People
          </h2>
          <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            A small Texas lab. Two owners, clear lanes.
          </p>
          <div aria-hidden className="mt-6 h-px w-20 bg-terracotta" />

          <div className="mt-12 space-y-14">
            <article className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
              <Image
                src="/shay-rodriguez-garcia.webp"
                alt="Shay Rodriguez-Garcia"
                width={160}
                height={213}
                className="h-40 w-[7.5rem] object-cover grayscale-[15%] contrast-[1.05] sm:h-44 sm:w-[8.25rem]"
              />
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Shay Rodriguez-Garcia
                </h3>
                <p className="mt-1 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-terracotta">
                  Founder &amp; CTO
                </p>
                <p className="mt-4 max-w-md font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
                  Industrial hardware, firmware, and software. Owns the product
                  and custom build work.
                </p>
                <a
                  href="https://shay-rodriguez.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.14em] text-scarlet underline decoration-scarlet/35 underline-offset-4 transition-colors hover:text-scarlet-deep"
                >
                  Portfolio
                </a>
              </div>
            </article>

            <article className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
              <div
                aria-hidden
                className="flex h-40 w-[7.5rem] items-center justify-center border border-ink/20 bg-cream sm:h-44 sm:w-[8.25rem]"
              >
                <span className="font-[family-name:var(--font-display)] text-3xl font-black tracking-tight text-ink/80">
                  TR
                </span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Taylor Rodriguez
                </h3>
                <p className="mt-1 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.16em] text-terracotta">
                  COO · Web &amp; Finance
                </p>
                <p className="mt-4 max-w-md font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
                  Web clients, intake, and company finances. Main contact for
                  the web line.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6) Contact */}
      <section
        id="contact"
        className="scroll-mt-28 border-t border-ink/10 px-5 py-20 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Contact
          </h2>
          <div aria-hidden className="mt-6 h-px w-20 bg-terracotta" />
          <p className="mt-8 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Greater Houston / Deer Park area.
          </p>
          <a
            href="mailto:info@intercallabs.com"
            className="mt-4 inline-block font-[family-name:var(--font-display)] text-2xl font-bold text-scarlet transition-colors hover:text-scarlet-deep sm:text-3xl"
          >
            info@intercallabs.com
          </a>
          <div className="mt-10">
            <a
              href="mailto:info@intercallabs.com"
              className="inline-flex items-center justify-center bg-ink px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-[0.14em] text-cream transition-[background-color,transform] duration-300 hover:bg-ink-soft hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/15 bg-ink px-5 py-10 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/intercal-labs-logo.png"
              alt=""
              width={120}
              height={32}
              className="h-7 w-auto opacity-90"
            />
            <p className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.16em] text-cream/60">
              © {new Date().getFullYear()} Intercal Labs
            </p>
          </div>
          <a
            href="mailto:info@intercallabs.com"
            className="font-[family-name:var(--font-body)] text-xs tracking-[0.04em] text-cream/75 underline decoration-terracotta/50 underline-offset-4 transition-colors hover:text-cream"
          >
            info@intercallabs.com
          </a>
        </div>
      </footer>
    </main>
  );
}
