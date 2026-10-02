import Image from "next/image";

export default function Home() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-ink text-mist">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, var(--overlay) 0%, var(--overlay) 42%, var(--overlay-edge) 72%, rgba(8,12,16,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(120% 80% at 15% 55%, transparent 0%, rgba(8,12,16,0.55) 70%)",
          }}
        />
      </div>

      <section className="relative flex min-h-dvh items-center px-6 py-16 sm:px-10 md:px-16 lg:px-24">
        <div className="w-full max-w-xl">
          <p className="reveal-brand font-[family-name:var(--font-display)] text-[clamp(3.4rem,9vw,6.5rem)] font-semibold leading-[0.9] tracking-[0.02em] text-mist">
            Intercal
            <span className="block">Labs</span>
          </p>

          <div
            aria-hidden
            className="brand-rule mt-6 h-px w-24 bg-brass sm:w-28"
          />

          <p className="reveal-tagline mt-7 max-w-md font-[family-name:var(--font-body)] text-base leading-relaxed text-[color:var(--fog)] sm:text-lg md:text-xl">
            Instrumentation, controls, and custom electronics — built and
            supported in the field.
          </p>

          <div className="reveal-cta mt-9">
            <a
              href="mailto:info@intercallabs.com"
              className="inline-flex items-center justify-center bg-brass px-7 py-3.5 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-[background-color,transform] duration-300 hover:bg-brass-deep hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mist"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
