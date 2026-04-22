import { Button } from "@/components/ui/button";

const TRUST_BADGES = [
  { icon: "✓", label: "Custom Made" },
  { icon: "✓", label: "Payment Plans Available" },
  { icon: "✓", label: "Quote-Based Pricing" },
  { icon: "✓", label: "Design Support Included" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(10,5,20,0.6), rgba(10,5,20,0.85)),
          url('/hero-bg.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="flex flex-col">

            {/* BADGE */}
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
              🟢 Open for Commissions
            </span>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]">
              Custom Fursuits <br />
              <span className="text-pink-400">Made for Your</span> <br />
              Fursona
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-white/80 max-w-lg">
              FurNFurry creates one-of-a-kind fursuit heads, paws, tails,
              partials, and full suits — each one tailored exactly to your character.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button
                onClick={() => scrollTo("contact")}
                className="bg-pink-400 px-6 py-3 rounded-xl text-black font-semibold hover:bg-pink-300 transition"
              >
                Get a Quote →
              </Button>

              <Button
                onClick={() => scrollTo("gallery")}
                className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl text-white hover:bg-white/20 transition"
              >
                View Gallery →
              </Button>
            </div>

            {/* LINK */}
            <div className="mt-4">
              <a
                href="/custom-fursuit"
                className="text-sm text-white underline"
              >
                Learn more about custom fursuits →
              </a>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-10 flex flex-wrap gap-3">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white"
                >
                  {badge.icon} {badge.label}
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE EMPTY (spacing ke liye) */}
          <div className="hidden lg:block"></div>

        </div>
      </div>
    </section>
  );
}