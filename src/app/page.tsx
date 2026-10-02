import Image from "next/image";

export default function Home() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,var(--overlay)_0%,var(--overlay)_42%,var(--overlay-soft)_72%,rgba(12,18,24,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(201,151,58,0.12),transparent_45%)]" />
      </div>

      <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col justify-end px-6 pb-16 pt-24 sm:justify-center sm:px-10 sm:pb-20 sm:pt-20 lg:px-12">
        <div className="max-w-xl">
          <h1 className="hero-rise font-[family-name:var(--font-display)] text-[clamp(3.5rem,13vw,6.25rem)] font-semibold leading-[0.9] tracking-tight text-paper">
            Intercal
            <span className="block text-mist">Labs</span>
          </h1>

          <div
            className="hero-rule mt-7 h-px w-24 bg-brass sm:w-32"
            aria-hidden="true"
          />

          <p className="hero-rise hero-rise-delay-1 mt-7 max-w-md text-base leading-relaxed text-mist sm:text-lg">
            Instrumentation, controls, and custom electronics — built and
            supported in the field.
          </p>

          <div className="hero-rise hero-rise-delay-2 mt-10">
            <a
              href="mailto:info@intercallabs.com"
              className="cta-glow inline-flex items-center justify-center border border-brass bg-brass px-7 py-3.5 font-[family-name:var(--font-display)] text-base font-semibold uppercase tracking-[0.14em] text-ink transition-[background-color,border-color,color,transform] duration-200 hover:border-brass-deep hover:bg-brass-deep hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
