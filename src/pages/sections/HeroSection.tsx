import { Button } from "@/components/ui/button";

const TRUST_BADGES = [
  { icon: "✓", label: "Made-to-Order Builds" },
  { icon: "✓", label: "Custom Fit & Design" },
  { icon: "✓", label: "Payment Plans Available" },
  { icon: "✓", label: "Worldwide Shipping" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark cinematic overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/75 to-black/95" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/45 via-transparent to-black/35" />

      {/* Soft spotlight */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-soft-light" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-background/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Limited Commission Slots Open
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-[0_15px_60px_rgba(0,0,0,1)] sm:text-5xl lg:text-6xl">
              Bring Your Fursona <br />
              <span className="text-pink-400">to Life with a</span> <br />
              Custom Fursuit
            </h1>

            <p className="mt-6 max-w-lg text-white/85 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              Handmade, made-to-order fursuits designed around your character,
              style, and personality — from expressive heads to full body builds.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo("contact")}
                className="rounded-xl bg-pink-400 px-6 py-3 font-semibold text-black shadow-[0_0_30px_rgba(244,114,182,0.35)] transition hover:scale-[1.03] hover:bg-pink-300 active:scale-[0.97]"
              >
                Start Your Custom Fursuit →
              </Button>

              <Button
                onClick={() => scrollTo("gallery")}
                className="rounded-xl border border-white/20 bg-background/10 px-6 py-3 text-white backdrop-blur-md transition hover:scale-[1.03] hover:bg-background/20 active:scale-[0.97]"
              >
                View Our Work →
              </Button>
            </div>

            <div className="mt-4">
              <a
                href="/custom-fursuit"
                className="text-sm text-white underline underline-offset-4 transition hover:text-pink-300"
              >
                Explore custom fursuit options →
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-background/10 px-3 py-2 text-sm text-white backdrop-blur-md"
                >
                  <span className="text-pink-300">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}