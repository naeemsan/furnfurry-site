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
        className="absolute inset-0 z-0 scale-[1.02]"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Main cinematic overlay (strong) */}
<div className="absolute inset-0 z-0 bg-gradient-to-r from-black/40 via-black/39 to-black/20" />

{/* Bottom depth shadow */}
<div className="absolute inset-0 z-0 bg-gradient-to-b from-black/25 via-transparent to-black/70" />

{/* Extra left text focus */}
<div className="absolute left-0 top-0 z-0 h-full w-[65%] bg-gradient-to-r from-black/40 via-black/50 to-transparent" />

      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.035] mix-blend-soft-light" />

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