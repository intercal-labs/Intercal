export default function Home() {
  return (
    <main className="bg-ink text-mist">
      <section className="relative isolate flex min-h-dvh items-center overflow-hidden px-6 py-16 sm:px-10 md:px-16 lg:px-24">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="hero-atmosphere absolute inset-0" />
          <div className="hero-grain absolute inset-0 opacity-[0.35]" />
          <div className="hero-grid absolute inset-0 opacity-[0.22]" />
          <div className="absolute inset-y-0 left-0 w-[min(52vw,36rem)] bg-gradient-to-r from-ink via-ink/80 to-transparent" />
          <div className="absolute -right-24 top-[-10%] h-[70%] w-[55%] rounded-full bg-[radial-gradient(closest-side,rgba(176,141,87,0.14),transparent_70%)] blur-2xl" />
          <div className="absolute bottom-[-20%] left-[20%] h-[50%] w-[60%] rounded-full bg-[radial-gradient(closest-side,rgba(70,92,110,0.22),transparent_72%)] blur-3xl" />
        </div>

        <div className="relative w-full max-w-3xl">
          <p className="reveal-brand font-[family-name:var(--font-display)] text-[clamp(3.6rem,10vw,7rem)] font-semibold leading-[0.88] tracking-[0.02em] text-mist">
            Intercal
            <span className="block text-brass">Labs</span>
          </p>

          <div
            aria-hidden
            className="brand-rule mt-7 h-px w-24 bg-brass sm:w-32"
          />

          <p className="reveal-tagline mt-7 max-w-xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg md:text-xl">
            Instrumentation, controls, and custom electronics — built and
            supported in the field.
          </p>

          <div className="reveal-cta mt-10">
            <a
              href="mailto:info@intercallabs.com"
              className="inline-flex items-center justify-center bg-brass px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-[background-color,transform] duration-300 hover:bg-brass-deep hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mist"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 px-6 py-20 sm:px-10 md:px-16 lg:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_0%_0%,rgba(176,141,87,0.08),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[0.04em] text-mist sm:text-4xl">
            What we do
          </h2>
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
            Field work for calibration and low-voltage controls. Products in
            instrumentation hardware. Design for custom hardware, firmware, and
            software when the shelf options fall short.
          </p>
          <p className="mt-5 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
            Current focus: stranded HART and 4–20 mA loop integrity monitoring —
            parallel tap on the loop, not a gateway.
          </p>
          <p className="mt-5 max-w-2xl font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg">
            Based in Greater Houston. Reach us at{" "}
            <a
              href="mailto:info@intercallabs.com"
              className="text-brass underline decoration-brass/40 underline-offset-4 transition-colors hover:text-mist hover:decoration-mist/50"
            >
              info@intercallabs.com
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 sm:px-10 md:px-16 lg:px-24">
        <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.18em] text-[color:var(--fog)]">
          Intercal Labs · Greater Houston
        </p>
      </footer>
    </main>
  );
}
