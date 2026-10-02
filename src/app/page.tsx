import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { assets } from "@/lib/assets";

const offeringJump = [
  { href: "#hardware", label: "Hardware" },
  { href: "#firmware", label: "Firmware" },
  { href: "#software", label: "Software" },
  { href: "#web", label: "Web" },
  { href: "#field", label: "Field" },
  { href: "#legacy", label: "Legacy" },
] as const;

export default function Home() {
  return (
    <main className="bg-cream text-ink">
      <SiteHeader active="home" />

      {/* Hero — one cinematic composition */}
      <section className="relative isolate min-h-[calc(100dvh-6.5rem)] overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={assets.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-photo hero-photo-motion object-cover object-[52%_28%] sm:object-[58%_32%]"
          />
          <div aria-hidden className="hero-veil absolute inset-0" />
        </div>

        <div className="relative grid min-h-[calc(100dvh-6.5rem)] items-end gap-10 px-5 pb-14 pt-28 sm:items-center sm:px-8 sm:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:pb-24">
          <div className="max-w-2xl">
            <div className="reveal-brand">
              <Image
                src={assets.logo}
                alt="Intercal Labs"
                width={900}
                height={186}
                className="h-auto w-full max-w-[min(100%,34rem)] sm:max-w-[40rem]"
                priority
              />
            </div>

            <div
              aria-hidden
              className="stagger-rules mt-8 max-w-[13rem] sm:max-w-[15rem]"
            >
              <span />
              <span />
              <span />
              <span />
            </div>

            <p className="reveal-line mt-9 max-w-md font-[family-name:var(--font-display)] text-[1.35rem] font-bold leading-[1.2] tracking-tight text-[color:var(--mist)] sm:text-2xl lg:text-[1.75rem]">
              Hardware. Firmware. Software. Field. Retrofit.
            </p>

            <div className="reveal-cta mt-10">
              <a
                href="mailto:info@intercallabs.com"
                className="btn btn-primary"
              >
                Email us
              </a>
            </div>
          </div>

          <aside className="reveal-aside mb-2 hidden max-w-xs justify-self-end border-l border-cream/25 pl-6 lg:block">
            <p className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">
              Texas lab
            </p>
            <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/75">
              Greater Houston / Deer Park. Custom build work — boards, firmware,
              software, and field I&amp;C under one roof.
            </p>
          </aside>
        </div>
      </section>

      {/* About — asymmetric editorial */}
      <section
        id="about"
        className="scroll-mt-36 relative overflow-hidden px-5 py-28 sm:px-8 md:px-12 lg:px-16 lg:py-36"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-16 select-none font-[family-name:var(--font-display)] text-[clamp(6rem,18vw,14rem)] font-black leading-none tracking-tight text-ink/[0.04]"
        >
          LAB
        </div>
        <div className="relative mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20 lg:items-end">
          <div>
            <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-terracotta">
              About
            </p>
            <div aria-hidden className="rule-craft mt-6 w-20" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,5.5vw,4.75rem)] font-black leading-[0.98] tracking-tight text-ink">
              A Texas lab for hardware, firmware, software, and field work.
            </h2>
            <p className="mt-10 max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
              Intercal Labs designs and builds hardware, firmware, and software,
              performs instrumentation and low-voltage controls field work, and
              retrofits legacy systems so existing gear and software stay useful.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings index — not a menu stack */}
      <section
        id="offerings"
        className="scroll-mt-36 border-y border-ink/10 bg-ink px-5 py-20 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-24"
      >
        <div className="mx-auto flex max-w-[90rem] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              What we offer
            </h2>
            <p className="mt-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/70 sm:text-base">
              Six lanes. Real scope. Same lab.
            </p>
          </div>
          <nav
            aria-label="Offerings"
            className="offer-jump flex flex-wrap gap-x-6 gap-y-3 [&_a]:border-cream/35 [&_a]:text-cream [&_a:hover]:border-scarlet [&_a:hover]:text-scarlet"
          >
            {offeringJump.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Hardware — giant type left, copy right */}
      <section
        id="hardware"
        className="scroll-mt-36 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">
              01
            </span>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.88] tracking-tight text-ink">
              Hard
              <br />
              ware
            </h3>
          </div>
          <div className="max-w-2xl space-y-6 pt-2 lg:pt-16">
            <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-[1.05rem]">
              We design and develop custom electronics — schematics, boards,
              prototypes, and bring-up — for controls, monitoring, and product
              work. That includes custom PCBs, analog and mixed-signal front ends
              (including 4–20 mA / instrumentation-style interfaces), power and
              protection for industrial environments, DIN/cabinet or enclosure
              packaging, and handoff into firmware so hardware and firmware
              aren&apos;t two strangers.
            </p>
            <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-[1.05rem]">
              We build hardware for client products and for our own. We do not
              run a finished instrument catalog. Our first product in development
              is{" "}
              <a
                href="/concept/ic-nd-1"
                className="text-scarlet underline decoration-scarlet/30 underline-offset-4 transition-colors hover:text-scarlet-deep"
              >
                IC-ND-1
              </a>
              . Until something is for sale, the offer is design, prototype, and
              build.
            </p>
          </div>
        </div>
      </section>

      {/* Firmware — ink reverse, copy left / type right */}
      <section
        id="firmware"
        className="scroll-mt-36 bg-ink px-5 py-24 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto grid max-w-[90rem] gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="order-2 max-w-2xl space-y-6 lg:order-1 lg:pt-16">
            <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-cream/75 sm:text-[1.05rem]">
              We write device firmware: bring-up, drivers, communications,
              control/monitor logic, and field-updatable releases — the layer
              between the board and the outside world. Bare-metal and RTOS work,
              sensor and I/O paths, industrial and serial protocols (UART, SPI,
              I²C, Modbus, and related plant/device links), wireless/networked
              devices when required, and bench bring-up with scope/logic tools.
            </p>
            <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-cream/75 sm:text-[1.05rem]">
              MCU/platform examples (not a closed list): ST STM32, Espressif
              ESP32, Microchip PIC, other ARM Cortex-class parts, and Linux-class
              modules when the product is a small computer rather than a
              microcontroller. Languages: C/C++ on device; Python and host tools
              for test and manufacturing support.
            </p>
          </div>
          <div className="order-1 lg:order-2 lg:sticky lg:top-40 lg:self-start lg:text-right">
            <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">
              02
            </span>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.88] tracking-tight">
              Firm
              <br />
              ware
            </h3>
          </div>
        </div>
      </section>

      {/* Software — wide opener + detail columns */}
      <section
        id="software"
        className="scroll-mt-36 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">
              03 · Software
            </span>
            <div aria-hidden className="rule-craft hidden w-24 sm:block" />
          </div>
          <h3 className="mt-6 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4.25rem)] font-black leading-[1.02] tracking-tight text-ink">
            Software that does a real job — connect systems, automate work, or
            finish what off-the-shelf almost fits.
          </h3>

          <div className="mt-14 grid gap-12 border-t border-ink/10 pt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base md:col-span-2 lg:col-span-1">
              Custom web applications (auth, databases, business rules,
              documents), integrations and data pipelines (legacy, files,
              on-prem↔cloud, APIs), internal tools (dashboards, workflow
              automation, CRM-adjacent ops tools), and finishing/hardening
              AI-scaffolded apps that aren&apos;t production-ready.
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
              Straight answers: SaaS/multi-tenant when the product is defined;
              e-commerce when there&apos;s a real catalog/checkout need;
              AI/LLM/RAG when it earns a place in a workflow; mobile web-first
              (native when required); enterprise internal tools as a core lane.
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
              Stack examples: TypeScript/JavaScript, Node.js, Python, C/C++ where
              it belongs, Linux, SQL, REST/APIs, AWS and Google Cloud when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Web — slim horizontal band */}
      <section
        id="web"
        className="scroll-mt-36 border-y border-ink/10 bg-tan/40 px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-[90rem] items-center gap-8 lg:grid-cols-[10rem_1fr_auto] lg:gap-14">
          <div>
            <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">
              04
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Web
            </h3>
          </div>
          <p className="max-w-2xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Client websites and technical maintenance: build, hosting, DNS/SSL,
            backups, uptime and security patching, dependency updates,
            forms/email deliverability, minor content edits, troubleshooting.
            Care is technical only — not ads, reviews, social, or SEO campaigns.
          </p>
          <a
            href="mailto:info@intercallabs.com?subject=Web%20inquiry"
            className="btn btn-outline-ink w-fit"
          >
            Ask about web
          </a>
        </div>
      </section>

      {/* Photo break */}
      <section className="photo-break" aria-hidden="true">
        <Image
          src={assets.hero}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[60%_40%]"
        />
        <div className="photo-break-veil absolute inset-0" />
        <div className="relative flex h-full min-h-[inherit] items-end px-5 py-14 sm:px-8 lg:px-16">
          <p className="max-w-md font-[family-name:var(--font-display)] text-2xl font-bold leading-snug tracking-tight text-cream sm:text-3xl">
            Bench to plant floor. Same lab.
          </p>
        </div>
      </section>

      {/* Field — large type + structured prose, not bullets-as-menu */}
      <section
        id="field"
        className="scroll-mt-36 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">
                05 · Field
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tight text-ink">
                Instrumentation &amp; controls — on site.
              </h3>
              <p className="mt-8 max-w-md font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)]">
                Loops and signals that measure and command — not building power
                systems.
              </p>
            </div>
            <div className="space-y-10 border-t border-ink/10 pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
              <div>
                <h4 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
                  Calibration &amp; loops
                </h4>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-[0.95rem]">
                  Transmitter and loop calibration, loop checks, commissioning,
                  troubleshooting bad PV/status, verifying 4–20 mA and
                  HART-capable loops, as-left documentation.
                </p>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
                  Installation &amp; wiring
                </h4>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-[0.95rem]">
                  Control/signaling scope: terminating shielded pair; conduit and
                  cable tray for instrumentation/control circuits;
                  marshaling/terminals; like-for-like replacement of instruments
                  and control-side electrical components on existing systems.
                </p>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
                  Controls &amp; procurement
                </h4>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-[0.95rem]">
                  PLC/programmable controls tied to real I/O; Modbus and related
                  industrial links; cabinet work on the control side. Source and
                  stage instrumentation, valves, and controls/electrical parts;
                  install in kind as replacements on an existing design — not
                  process redesign.
                </p>
              </div>
              <p className="border-t border-ink/10 pt-8 font-[family-name:var(--font-body)] text-sm leading-relaxed text-ink/65">
                Clear line: we do not sell PE-stamped engineering or take
                120/240&nbsp;V premises power as our licensed scope. New power
                feeds go to a licensed electrician. We stay on Class 1/2/3
                remote-control, signaling, and power-limited work — subject to
                local/plant rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy — asymmetric ink band */}
      <section
        id="legacy"
        className="scroll-mt-36 bg-ink px-5 py-24 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start lg:gap-20">
            <div>
              <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.22em] text-terracotta">
                06 · Legacy retrofit
              </span>
              <h3 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.02] tracking-tight">
                Keep the working asset. Add the path out.
              </h3>
              <p className="mt-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-cream/75 sm:text-[1.05rem]">
                We retrofit what you already have so it talks to the systems you
                use now — without a full rip-and-replace. Pull data out of legacy
                machines, panels, and plant gear that only have local gauges, dry
                contacts, 4–20 mA, Modbus, or an old controller; bridge on-prem
                and outdated software into modern tools; add monitoring, logging,
                or a clean interface where none exists.
              </p>
              <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-cream/75 sm:text-[1.05rem]">
                Typical jobs: an old skid or cabinet that reports nothing, a
                Windows-era program that still runs the business, a transmitter
                that never made it into the host, or a process that still depends
                on someone walking out to look. Field I&amp;C +
                hardware/firmware/software when the job needs all three.
              </p>
            </div>
            <aside className="border-t border-cream/15 pt-8 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-2">
              <p className="font-[family-name:var(--font-display)] text-2xl font-bold leading-snug tracking-tight text-cream sm:text-3xl">
                Not “buy a new DCS.”
              </p>
              <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/65">
                Make the legacy system usable — signals, device, firmware,
                software, or all of it.
              </p>
              <a
                href="/concept/ic-nd-1"
                className="btn btn-secondary mt-10"
              >
                See IC-ND-1
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Lab — typographic weight variation, not equal rows */}
      <section
        id="lab"
        className="scroll-mt-36 px-5 py-28 sm:px-8 md:px-12 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-[90rem]">
          <p className="font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.22em] text-terracotta">
            Lab
          </p>
          <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Under one umbrella.
          </h2>

          <div className="mt-20 grid gap-16 border-t border-ink/10 pt-16 md:grid-cols-3 md:gap-10">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-5xl font-black tracking-tight text-ink sm:text-6xl">
                Field
              </h3>
              <p className="mt-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)]">
                Instrumentation and low-voltage controls on site — loops,
                calibration, commissioning.
              </p>
            </div>
            <div className="md:pt-12">
              <h3 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-scarlet sm:text-5xl">
                Products
              </h3>
              <p className="mt-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)]">
                In-house product work, starting with IC-ND-1 — still concept, not
                for sale.
              </p>
            </div>
            <div className="md:pt-24">
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Design
              </h3>
              <p className="mt-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)]">
                Custom hardware, firmware, software, and web under one lab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work — typographic capability grid, not dash menu */}
      <section
        id="work"
        className="scroll-mt-36 bg-tan/35 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Work
              </h2>
              <p className="mt-5 max-w-md font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
                Capability lines. Deeper samples live on the portfolio.
              </p>
            </div>
            <a
              href="https://shay-rodriguez.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ink w-fit"
            >
              View portfolio
            </a>
          </div>

          <div className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Custom electronics & instrumentation-side hardware",
              "Device firmware across MCU and Linux-class platforms",
              "Applications, integrations & internal tools",
              "Client websites with technical hosting",
              "Legacy retrofit — keep the asset, add the path out",
              "Field I&C: calibration, loop checks, control-side install",
            ].map((line) => (
              <div
                key={line}
                className="bg-cream px-6 py-8 sm:px-8 sm:py-10"
              >
                <p className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People — photography-led, asymmetric */}
      <section
        id="people"
        className="scroll-mt-36 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
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
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,5rem)] font-black leading-[1.05] tracking-tight">
            <a
              href="mailto:info@intercallabs.com"
              className="transition-colors hover:text-scarlet"
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
