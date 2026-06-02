import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const TRUST_BADGES = [
  { icon: "✓", label: "Made-to-Order Builds" },
  { icon: "✓", label: "Custom Fit & Design" },
  { icon: "✓", label: "Payment Plans Available" },
  { icon: "✓", label: "Worldwide Shipping" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="relative min-h-[720px] md:min-h-[calc(100svh-76px)] lg:min-h-[820px]">
        {/* HERO IMAGE */}
        <picture className="absolute inset-0 -z-20 block h-full w-full">
          {/*
            Later agar mobile ke liye separate cropped image banao,
            ye line uncomment karna:
            <source media="(max-width: 767px)" srcSet="/hero-bg-mobile.webp" />
          */}

          <img
            src="/hero-bg.webp"
            alt=""
            className="h-full w-full object-cover object-[47%_center] md:object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        {/* PREMIUM DARK OVERLAYS */}
        <div className="absolute inset-0 -z-10 bg-black/45" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_35%_38%,rgba(168,85,247,0.22),transparent_34%),linear-gradient(90deg,rgba(8,12,20,0.9)_0%,rgba(8,12,20,0.62)_42%,rgba(8,12,20,0.25)_70%,rgba(8,12,20,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />

        {/* CONTENT */}
        <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-5 pb-20 pt-24 sm:px-6 md:min-h-[calc(100svh-76px)] lg:px-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-white shadow-[0_0_35px_rgba(0,0,0,0.35)] backdrop-blur-md sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Limited Commission Slots Open
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_6px_25px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl lg:text-7xl">
              Bring Your Fursona{" "}
              <span className="text-primary">to Life with a</span>{" "}
              Custom Fursuit
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/86 drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)] sm:text-lg md:text-xl">
              FurNFurry creates handmade custom fursuits built around your
              character, style, and personality. From foam base heads to 3D
              printed head bases, partial suits, and full body builds, each
              piece is planned for comfort, expression, and character accuracy.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                onClick={() => scrollTo("contact")}
                className="w-full rounded-2xl px-7 py-6 text-base font-extrabold shadow-[0_0_35px_rgba(168,85,247,0.45)] transition hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(168,85,247,0.65)] active:scale-[0.98] sm:w-auto"
              >
                Start Your Handmade Fursuit →
              </Button>

              <button
                onClick={() => scrollTo("pricing")}
                className="rounded-2xl border border-white/18 bg-white/8 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:border-primary/60 hover:bg-primary/15"
              >
                View Pricing Guide
              </button>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="rounded-2xl border border-white/14 bg-black/28 px-3 py-3 text-center text-xs font-bold text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-md"
                >
                  <span className="mr-1 text-primary">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}