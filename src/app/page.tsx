import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { assets } from "@/lib/assets";

const offerings = [
  {
    id: "hardware",
    title: "Hardware development",
    body: [
      "We design and develop custom electronics — schematics, boards, prototypes, and bring-up — for controls, monitoring, and product work. That includes custom PCBs, analog and mixed-signal front ends (including 4–20 mA / instrumentation-style interfaces), power and protection for industrial environments, DIN/cabinet or enclosure packaging, and handoff into firmware so hardware and firmware aren’t two strangers.",
      "We build hardware for client products and for our own. We do not run a finished instrument catalog. Our first product in development is IC-ND-1 (see Concept). Until something is for sale, the offer is design, prototype, and build.",
    ],
  },
  {
    id: "firmware",
    title: "Firmware development",
    body: [
      "We write device firmware: bring-up, drivers, communications, control/monitor logic, and field-updatable releases — the layer between the board and the outside world. Bare-metal and RTOS work, sensor and I/O paths, industrial and serial protocols (UART, SPI, I²C, Modbus, and related plant/device links), wireless/networked devices when required, and bench bring-up with scope/logic tools.",
      "MCU/platform examples (not a closed list): ST STM32, Espressif ESP32, Microchip PIC, other ARM Cortex-class parts, and Linux-class modules when the product is a small computer rather than a microcontroller. Languages: C/C++ on device; Python and host tools for test and manufacturing support.",
    ],
  },
  {
    id: "software",
    title: "Software development",
    body: [
      "We build software that does a real job: connects systems you already run, automates manual work, or delivers a custom tool when off-the-shelf almost fits.",
      "Includes custom web applications (auth, databases, business rules, documents), integrations and data pipelines (legacy, files, on-prem↔cloud, APIs), internal tools (dashboards, workflow automation, CRM-adjacent ops tools), and finishing/hardening AI-scaffolded apps that aren’t production-ready.",
      "Straight answers to common asks: SaaS/multi-tenant when the product is defined; e-commerce when there’s a real catalog/checkout need; AI/LLM/RAG when it earns a place in a workflow; mobile web-first (native when required); enterprise internal tools as a core lane.",
      "Stack examples: TypeScript/JavaScript, Node.js, Python, C/C++ where it belongs, Linux, SQL, REST/APIs, AWS and Google Cloud when needed.",
    ],
  },
  {
    id: "web",
    title: "Web development",
    body: [
      "Client websites and technical maintenance: build, hosting, DNS/SSL, backups, uptime and security patching, dependency updates, forms/email deliverability, minor content edits, troubleshooting. Care is technical only — not ads, reviews, social, or SEO campaigns.",
    ],
  },
  {
    id: "legacy",
    title: "Legacy system retrofit",
    body: [
      "We retrofit what you already have so it talks to the systems you use now — without a full rip-and-replace.",
      "That means pulling data out of legacy machines, panels, and plant gear that only have local gauges, dry contacts, 4–20 mA, Modbus, or an old controller; bridging on-prem and outdated software into modern tools; adding monitoring, logging, or a clean interface where none exists; and combining field I&C + hardware/firmware/software when the job needs all three. Typical jobs: an old skid or cabinet that reports nothing, a Windows-era program that still runs the business, a transmitter that never made it into the host, or a process that still depends on someone walking out to look.",
      "We keep the working asset. We add the path out — signals, device, firmware, software, or all of it. This is not “buy a new DCS.” It’s make the legacy system usable.",
    ],
  },
  {
    id: "field",
    title: "Field work — instrumentation & controls",
    body: [
      "On site we work the instrumentation and low-voltage controls side — loops and signals that measure and command — not building power systems.",
      "Calibration & loops: transmitter and loop calibration, loop checks, commissioning, troubleshooting bad PV/status, verifying 4–20 mA and HART-capable loops, as-left documentation.",
      "Installation & wiring (control/signaling scope): terminating shielded pair; conduit and cable tray for instrumentation/control circuits; marshaling/terminals; like-for-like replacement of instruments and control-side electrical components on existing systems.",
      "Controls support: PLC/programmable controls tied to real I/O; Modbus and related industrial links; cabinet work on the control side.",
      "Procurement: source and stage instrumentation, valves, and controls/electrical parts; install in kind as replacements on an existing design — not process redesign.",
      "Clear line: we do not sell PE-stamped engineering or take 120/240 V premises power as our licensed scope. New power feeds go to a licensed electrician. We stay on Class 1/2/3 remote-control, signaling, and power-limited work (including raceway for those circuits), plus calibration and commissioning — subject to local/plant rules.",
    ],
  },
] as const;

const offeringJump = [
  { href: "#hardware", label: "Hardware" },
  { href: "#firmware", label: "Firmware" },
  { href: "#software", label: "Software" },
  { href: "#web", label: "Web" },
  { href: "#field", label: "Field" },
  { href: "#legacy", label: "Legacy retrofit" },
] as const;

const labLines = [
  {
    title: "Field",
    body: "Instrumentation and low-voltage controls on site — loops, calibration, commissioning.",
  },
  {
    title: "Products",
    body: "In-house product work, starting with IC-ND-1 — still concept, not for sale.",
  },
  {
    title: "Design",
    body: "Custom hardware, firmware, software, and web under one lab.",
  },
] as const;

const workLines = [
  "Custom electronics and instrumentation-side hardware",
  "Device firmware across common MCU and Linux-class platforms",
  "Applications, integrations, and internal tools that meet the work",
  "Client websites with technical hosting and maintenance",
  "Legacy retrofit — keep the asset, add the path out",
  "Field I&C: calibration, loop checks, control-side install",
] as const;

export default function Home() {
  return (
    <main className="bg-cream text-ink">
      <SiteHeader active="home" />

      {/* Hero — one composition */}
      <section className="relative isolate min-h-[calc(100dvh-5.25rem)] overflow-hidden">
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

        <div className="relative flex min-h-[calc(100dvh-5.25rem)] items-end px-5 pb-16 pt-24 sm:items-center sm:px-8 sm:pb-20 sm:pt-20 lg:px-16">
          <div className="w-full max-w-2xl">
            <div className="reveal-brand">
              <Image
                src={assets.logo}
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

            <p className="reveal-line mt-8 max-w-lg font-[family-name:var(--font-display)] text-xl font-bold leading-snug tracking-tight text-[color:var(--mist)] sm:text-2xl">
              Hardware. Firmware. Software. Field. Retrofit.
            </p>

            <div className="reveal-cta mt-9">
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
        className="scroll-mt-32 border-t border-ink/10 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <p className="font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">
            About
          </p>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[2.6rem] font-black leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            A Texas lab for hardware, firmware, software, and field work.
          </h2>
          <div aria-hidden className="mt-7 h-px w-16 bg-terracotta" />
          <p className="mt-8 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
            Intercal Labs designs and builds hardware, firmware, and software,
            performs instrumentation and low-voltage controls field work, and
            retrofits legacy systems so existing gear and software stay useful.
            Greater Houston / Deer Park area.
          </p>
        </div>
      </section>

      {/* Offerings */}
      <section
        id="offerings"
        className="scroll-mt-32 border-t border-ink/10 bg-tan/30 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
              What we offer
            </h2>
            <p className="mt-5 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
              Six lanes. Real scope. Same lab.
            </p>
            <div aria-hidden className="mt-6 h-px w-16 bg-terracotta" />
          </div>

          <nav
            aria-label="Offerings"
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
          >
            {offeringJump.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.14em] text-scarlet underline decoration-scarlet/25 underline-offset-4 transition-colors hover:text-scarlet-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-14 space-y-6">
            {offerings.map((offer, index) => (
              <article
                key={offer.id}
                id={offer.id}
                className="offer-card scroll-mt-32"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.2em] text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {offer.title}
                  </h3>
                </div>
                <div className="mt-5 space-y-4">
                  {offer.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="max-w-3xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-[0.95rem]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lab */}
      <section
        id="lab"
        className="scroll-mt-32 border-t border-ink/10 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Lab
          </h2>
          <p className="mt-5 max-w-lg font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Field · Products · Design — under the Intercal Labs umbrella.
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

      {/* Work */}
      <section
        id="work"
        className="scroll-mt-32 border-t border-ink/10 bg-ink px-5 py-24 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight sm:text-5xl">
            Work
          </h2>
          <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/70 sm:text-base">
            Capability lines. Deeper samples live on the portfolio.
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

      {/* People */}
      <section
        id="people"
        className="scroll-mt-32 border-t border-ink/10 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
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
                src={assets.shay}
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
                src={assets.taylor}
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

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-32 border-t border-ink/10 bg-tan/30 px-5 py-24 sm:px-8 md:px-12 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Contact
          </h2>
          <div aria-hidden className="mt-7 h-px w-16 bg-terracotta" />
          <p className="mt-10 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Greater Houston area.
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

      <SiteFooter />
    </main>
  );
}
