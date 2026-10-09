import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "IC-ND-1",
  description:
    "IC-ND-1 (Node-1): parallel loop integrity monitor for existing 4–20 mA / HART loops. Concept in development — not for sale.",
  openGraph: {
    title: "IC-ND-1 · Intercal Labs LLC",
    description:
      "Parallel high-Z loop integrity monitor for stranded HART and independent loop checks. Concept · in development.",
    url: "https://intercallabs.com/concept/ic-nd-1",
  },
  twitter: {
    title: "IC-ND-1 · Intercal Labs LLC",
  },
};

const statusItems = [
  "Concept",
  "In development",
  "Not for sale",
  "Not field-proven",
] as const;

const capabilities = [
  {
    title: "Sense",
    body: "Parallel high-Z sense — loop current + HART listen. Independent view vs PLC/DCS PV.",
  },
  {
    title: "Local UI",
    body: "Local web UI on the plant network — login, status, trends, alarms.",
  },
  {
    title: "Data out",
    body: "Modbus TCP and/or MQTT to PLC/SCADA. Optional cloud path later (AWS, Google Cloud) when the site allows.",
  },
  {
    title: "Roadmap",
    body: "Optional local HMI — not built yet.",
  },
] as const;

export default function IcNd1Page() {
  return (
    <main className="min-w-0 max-w-[100%] overflow-x-hidden bg-cream text-ink">
      <SiteHeader active="concept" />

      <section className="relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 top-10 select-none font-[family-name:var(--font-display)] text-[clamp(5rem,16vw,12rem)] font-semibold leading-none tracking-[-0.05em] text-ink/[0.035]"
        >
          ND-1
        </div>
        <div className="relative mx-auto max-w-[90rem]">
          <p className="font-[family-name:var(--font-body)] text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-terracotta">
            Concept
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(3.5rem,10vw,8rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-ink">
            IC-ND-1
          </h1>
          <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium tracking-[-0.02em] text-ink/50 sm:text-2xl">
            Node-1
          </p>

          <ul className="mt-10 flex flex-wrap gap-x-1 gap-y-2">
            {statusItems.map((item, i) => (
              <li
                key={item}
                className="font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.14em] text-ink/70"
              >
                {i > 0 ? <span className="mx-3 text-terracotta">·</span> : null}
                {item}
              </li>
            ))}
          </ul>

          <div aria-hidden className="stagger-rules mt-12 max-w-[11rem]">
            <span />
            <span />
            <span />
            <span />
          </div>

          <p className="mt-12 max-w-2xl font-[family-name:var(--font-body)] text-lg leading-relaxed text-[color:var(--fog)] sm:text-xl">
            Parallel{" "}
            <span className="text-ink">loop integrity monitor</span> for
            existing 4–20 mA / HART loops. High-Z tap. Does{" "}
            <span className="text-ink">not</span> regenerate the loop.
          </p>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            The problem
          </h2>
          <p className="max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-cream/75 sm:text-lg">
            Many sites have HART-capable transmitters but only pass analog into
            the DCS/PLC. HART sits stranded. Turning HART on in the host often
            means licenses, card/marshalling work, outage risk, or an
            asset-management project. IC-ND-1 is for when you need visibility and
            an independent check without reopening that fight.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
              Who it&apos;s for
            </h2>
            <p className="max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
              Plants, SIs, and facilities with stranded HART, integrity doubt on
              a loop, or need for monitor-only insight beside the existing control
              system.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-tan/35 px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            Target capabilities
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-14">
            {capabilities.map((cap) => (
              <div key={cap.title} className="border-t border-ink/12 pt-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.025em] text-ink">
                  {cap.title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
            Explicitly not
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug tracking-[-0.025em] text-ink sm:text-3xl">
              Not a multiplexer. Not a regenerating gateway. Not a drop-in AMS
              replacement.
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base lg:pt-2">
              Not a claim that every DCS “can&apos;t do HART” — many can. IC-ND-1
              is for when they won&apos;t or can&apos;t enable it cheaply or
              safely.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[90rem]">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Talk to us
          </h2>
          <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/70 sm:text-base">
            Concept status only. Email about IC-ND-1 or pilot interest.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@intercallabs.com?subject=IC-ND-1%20/%20pilot%20interest"
              className="btn btn-primary"
            >
              Email about IC-ND-1
            </a>
            <a href="/#offerings" className="btn btn-secondary">
              Back to offerings
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
