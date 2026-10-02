import Image from "next/image";

const navLinks = [
  { href: "#work-we-do", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#lab", label: "Lab" },
  { href: "#people", label: "People" },
  { href: "#contact", label: "Contact" },
] as const;

const capabilities = [
  {
    id: "hardware",
    title: "Hardware",
    body: "Instrumentation electronics, boards, devices, and loop / physical-layer products — designed, built, and brought into the real world.",
  },
  {
    id: "firmware",
    title: "Firmware",
    body: "Embedded systems, bring-up, protocols, and device software that hits real silicon. Product firmware and custom device work under one roof.",
  },
  {
    id: "software",
    title: "Software",
    body: "Applications, integrations, tools, and systems software that connect to real work — not platforms looking for a problem.",
  },
  {
    id: "web",
    title: "Web",
    body: "Client websites and technical delivery under the Labs umbrella. Clear scope, fast builds, hosting, DNS, SSL, backups, and patches.",
  },
] as const;

const labLines = [
  { title: "Field", body: "Calibration, LV controls, plant service" },
  { title: "Products", body: "Instrumentation hardware" },
  { title: "Design", body: "Custom hardware, firmware, and software" },
] as const;

const workLines = [
  "Instrumentation electronics and loop-side devices",
  "Embedded firmware for instruments and custom hardware",
  "Applications and integrations that meet the work where it is",
  "Client websites and technical delivery",
] as const;

export default function Home() {
  return (
    <main className="bg-cream text-ink">
      <header className="nav-shell sticky top-0 z-50 border-b border-cream/10 bg-ink/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12">
          <a href="/" className="shrink-0" aria-label="Intercal Labs home">
            <Image
              src="/intercal-labs-logo.png"
              alt="Intercal Labs"
              width={220}
              height={58}
              className="h-10 w-auto sm:h-11 lg:h-12"
              priority
            />
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.16em] text-cream/70 transition-colors duration-200 hover:text-cream"
              >
                {link.label}
              </a>
            ))}
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
          className="flex gap-5 overflow-x-auto border-t border-cream/10 px-5 py-2.5 lg:hidden sm:px-8"
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

      {/* 1) Hero — one composition */}
      <section className="relative isolate min-h-[calc(100dvh-4.75rem)] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-lab.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-photo hero-photo-motion object-cover object-[52%_28%] sm:object-[58%_32%]"
          />
          <div aria-hidden className="hero-veil absolute inset-0" />
        </div>

        <div className="relative flex min-h-[calc(100dvh-4.75rem)] items-end px-5 pb-16 pt-24 sm:items-center sm:px-8 sm:pb-20 sm:pt-20 lg:px-16">
          <div className="w-full max-w-2xl">
            <div className="reveal-brand">
              <Image
                src="/intercal-labs-logo.png"
                alt="Intercal Labs"
                width={760}
                height={200}
                className="h-auto w-full max-w-[min(100%,28rem)] sm:max-w-[32rem]"
                priority
              />
            </div>

            <div
              aria-hidden
              className="stagger-rules mt-7 max-w-[14rem] sm:max-w-[16rem]"
            >
              <span />
              <span />
              <span />
              <span />
            </div>

            <p className="reveal-line mt-8 max-w-md font-[family-name:var(--font-body)] text-[0.95rem] leading-relaxed text-[color:var(--mist)] sm:text-base">
              We design and build hardware, firmware, and software.
            </p>

            <div className="reveal-cta mt-9 flex flex-wrap items-center gap-3">
              <a
                href="mailto:info@intercallabs.com"
                className="btn btn-primary"
              >
                Email us
              </a>
              <a href="#capabilities" className="btn btn-secondary">
                Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2) What we do */}
      <section
        id="work-we-do"
        className="scroll-mt-28 border-t border-ink/10 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <p className="font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">
            Intercal Labs
          </p>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[2.6rem] font-black leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Hardware. Firmware. Software. Web.
          </h2>
          <div aria-hidden className="mt-7 h-px w-16 bg-terracotta" />
          <p className="mt-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
            One Texas lab that ships instruments, device software, applications,
            and client websites — Field, Products, and Design under the same
            company.
          </p>
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Current product focus: HART / 4–20 loop integrity monitoring —
            parallel tap, not a gateway.
          </p>
        </div>
      </section>

      {/* 3) Capabilities */}
      <section
        id="capabilities"
        className="scroll-mt-28 border-t border-ink/10 bg-tan/30 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
              Capabilities
            </h2>
            <p className="mt-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
              Four lines of work. Same standard.
            </p>
            <div aria-hidden className="mt-6 h-px w-16 bg-terracotta" />
          </div>

          <div className="mt-16 space-y-0">
            {capabilities.map((cap, index) => (
              <article
                key={cap.id}
                id={cap.id}
                className="scroll-mt-28 grid gap-4 border-t border-ink/15 py-12 first:border-t-0 first:pt-0 md:grid-cols-[8rem_minmax(0,14rem)_1fr] md:gap-10 md:py-14"
              >
                <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {cap.title}
                </h3>
                <p className="max-w-xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base md:pt-2">
                  {cap.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Lab */}
      <section
        id="lab"
        className="scroll-mt-28 border-t border-ink/10 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Lab
          </h2>
          <p className="mt-5 max-w-lg font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Field · Products · Design — one company.
          </p>
          <div aria-hidden className="mt-7 h-px w-16 bg-terracotta" />

          <ul className="mt-14 space-y-10">
            {labLines.map((line) => (
              <li
                key={line.title}
                className="grid items-baseline gap-2 sm:grid-cols-[9rem_1fr] sm:gap-10"
              >
                <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {line.title}
                </span>
                <span className="border-l border-scarlet/70 pl-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
                  {line.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5) Work */}
      <section
        id="work"
        className="scroll-mt-28 border-t border-ink/10 bg-ink px-5 py-24 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight sm:text-5xl">
            Work
          </h2>
          <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/70 sm:text-base">
            Capability in practice. Deeper samples live on the portfolio.
          </p>
          <div aria-hidden className="mt-7 h-px w-16 bg-terracotta" />

          <ul className="mt-12 space-y-5">
            {workLines.map((line) => (
              <li
                key={line}
                className="flex gap-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/78 sm:text-base"
              >
                <span
                  aria-hidden
                  className="mt-[0.55rem] h-px w-6 shrink-0 bg-scarlet"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://shay-rodriguez.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary mt-12 border-cream/35"
          >
            View portfolio
          </a>
        </div>
      </section>

      {/* 6) People */}
      <section
        id="people"
        className="scroll-mt-28 border-t border-ink/10 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            People
          </h2>
          <p className="mt-5 max-w-lg font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Two owners. Clear lanes.
          </p>
          <div aria-hidden className="mt-7 h-px w-16 bg-terracotta" />

          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
            <article className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <Image
                src="/shay-rodriguez-garcia.webp"
                alt="Shay Rodriguez"
                width={176}
                height={234}
                className="h-48 w-36 object-cover object-top contrast-[1.04] sm:h-52 sm:w-[9.5rem]"
              />
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Shay Rodriguez
                </h3>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.16em] text-terracotta">
                  Founder &amp; CTO
                </p>
                <p className="mt-4 max-w-sm font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)]">
                  Industrial hardware, firmware, instruments, and software.
                  Owns the product and custom build work.
                </p>
                <a
                  href="https://shay-rodriguez.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.14em] text-scarlet underline decoration-scarlet/30 underline-offset-4 transition-colors hover:text-scarlet-deep"
                >
                  Portfolio
                </a>
              </div>
            </article>

            <article className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <Image
                src="/taylor-rodriguez.webp"
                alt="Taylor Rodriguez"
                width={176}
                height={234}
                className="h-48 w-36 object-cover object-top contrast-[1.04] sm:h-52 sm:w-[9.5rem]"
              />
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  Taylor Rodriguez
                </h3>
                <p className="mt-2 font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.16em] text-terracotta">
                  COO · Web &amp; Finance
                </p>
                <p className="mt-4 max-w-sm font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)]">
                  Web clients, intake, and company finances. Main contact for
                  the web line.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 7) Contact */}
      <section
        id="contact"
        className="scroll-mt-28 border-t border-ink/10 bg-tan/30 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Contact
          </h2>
          <div aria-hidden className="mt-7 h-px w-16 bg-terracotta" />
          <p className="mt-10 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Greater Houston / Deer Park area.
          </p>
          <a
            href="mailto:info@intercallabs.com"
            className="mt-5 inline-block font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-scarlet transition-colors hover:text-scarlet-deep sm:text-4xl lg:text-5xl"
          >
            info@intercallabs.com
          </a>
          <div className="mt-12">
            <a href="mailto:info@intercallabs.com" className="btn btn-ink">
              Email us
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-cream/10 bg-ink px-5 py-12 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/intercal-labs-logo.png"
              alt=""
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
    </main>
  );
}
