import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "IC-ND-1 — Intercal Labs",
  description:
    "IC-ND-1 (Node-1): parallel loop integrity monitor for existing 4–20 mA / HART loops. Concept in development — not for sale.",
  openGraph: {
    title: "IC-ND-1 — Intercal Labs",
    description:
      "Parallel high-Z loop integrity monitor for stranded HART and independent loop checks. Concept · in development.",
    url: "https://intercallabs.com/concept/ic-nd-1",
  },
};

const statusItems = [
  "Concept",
  "In development",
  "Not for sale",
  "Not field-proven",
] as const;

const capabilities = [
  "Parallel high-Z sense — loop current + HART listen",
  "Independent view vs PLC/DCS PV",
  "Local web UI on the plant network (login, status, trends, alarms)",
  "Data out: Modbus TCP and/or MQTT to PLC/SCADA",
  "Optional cloud path later (AWS, Google Cloud) when the site allows",
  "Roadmap: optional local HMI — not built yet",
] as const;

const notList = [
  "Not a multiplexer",
  "Not a regenerating gateway",
  "Not a drop-in AMS replacement",
  "Not a claim that every DCS “can’t do HART” — many can; IC-ND-1 is for when they won’t or can’t enable it cheaply or safely",
] as const;

export default function IcNd1Page() {
  return (
    <main className="bg-cream text-ink">
      <SiteHeader active="concept" />

      <section className="border-b border-ink/10 px-5 py-16 sm:px-8 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-[family-name:var(--font-body)] text-[0.68rem] uppercase tracking-[0.22em] text-terracotta">
            Concept
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
            IC-ND-1
          </h1>
          <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink/70 sm:text-2xl">
            Node-1
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
            {statusItems.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-3 font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.14em] text-ink/65"
              >
                {i > 0 ? (
                  <span aria-hidden className="text-terracotta/80">
                    ·
                  </span>
                ) : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div aria-hidden className="stagger-rules mt-10 max-w-[12rem]">
            <span />
            <span />
            <span />
            <span />
          </div>

          <p className="mt-10 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
            Parallel{" "}
            <span className="text-ink">loop integrity monitor</span> for
            existing 4–20 mA / HART loops. High-Z tap. Does{" "}
            <span className="text-ink">not</span> regenerate the loop. Not a
            multiplexer. Not a control gateway.
          </p>
        </div>
      </section>

      <section className="border-b border-ink/10 px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-4xl gap-14 lg:grid-cols-[11rem_1fr] lg:gap-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Problem
          </h2>
          <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Many sites have HART-capable transmitters but only pass analog into
            the DCS/PLC. HART sits stranded. Turning HART on in the host often
            means licenses, card/marshalling work, outage risk, or an
            asset-management project. IC-ND-1 is for when you need visibility
            and an independent check without reopening that fight.
          </p>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-tan/30 px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-4xl gap-14 lg:grid-cols-[11rem_1fr] lg:gap-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Who it&apos;s for
          </h2>
          <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Plants, SIs, and facilities with stranded HART, integrity doubt on a
            loop, or need for monitor-only insight beside the existing control
            system.
          </p>
        </div>
      </section>

      <section className="border-b border-ink/10 px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Target capabilities
          </h2>
          <div aria-hidden className="mt-6 h-px w-16 bg-terracotta" />
          <ul className="mt-10 space-y-5">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex gap-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base"
              >
                <span
                  aria-hidden
                  className="mt-[0.55rem] h-px w-6 shrink-0 bg-scarlet"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-ink px-5 py-20 text-cream sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
            Explicitly not
          </h2>
          <div aria-hidden className="mt-6 h-px w-16 bg-terracotta" />
          <ul className="mt-10 space-y-5">
            {notList.map((item) => (
              <li
                key={item}
                className="flex gap-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-cream/78 sm:text-base"
              >
                <span
                  aria-hidden
                  className="mt-[0.55rem] h-px w-6 shrink-0 bg-scarlet"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Talk to us
          </h2>
          <p className="mt-5 max-w-xl font-[family-name:var(--font-body)] text-sm leading-relaxed text-[color:var(--fog)] sm:text-base">
            Confident concept. Honest status. No fake ship dates. Email about
            IC-ND-1 or pilot interest.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:info@intercallabs.com?subject=IC-ND-1%20/%20pilot%20interest"
              className="btn btn-ink"
            >
              Email about IC-ND-1
            </a>
            <a href="/#offerings" className="btn btn-ghost-ink">
              Back to offerings
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
