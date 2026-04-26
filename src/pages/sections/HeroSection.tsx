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
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <motion.div
        className="absolute inset-0 z-0 scale-[1.04]"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/40 via-black/39 to-black/20" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/25 via-transparent to-black/70" />
      <div className="absolute left-0 top-0 z-0 h-full w-[65%] bg-gradient-to-r from-black/40 via-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.035] mix-blend-soft-light" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className="flex flex-col">
            <motion.span
              variants={reveal}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-background/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white shadow-[0_0_24px_rgba(255,255,255,0.08)] backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Limited Commission Slots Open
            </motion.span>

            <motion.h1
              variants={reveal}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="text-4xl font-extrabold leading-tight text-white drop-shadow-[0_15px_60px_rgba(0,0,0,1)] sm:text-5xl lg:text-6xl"
            >
              Bring Your Fursona <br />
              <span className="text-primary">to Life with a</span> <br />
              Custom Fursuit
            </motion.h1>

            <motion.p
              variants={reveal}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 max-w-lg text-white/85 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
            >
              Handmade, made-to-order fursuits designed around your character,
              style, and personality — from expressive heads to full body builds.
            </motion.p>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollTo("contact")}
                className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[0_0_30px_rgba(139,92,246,0.4)] transition hover:scale-[1.03] hover:bg-primary/90 hover:shadow-[0_0_42px_rgba(139,92,246,0.55)] active:scale-[0.97]"
              >
                Start Your Custom Fursuit →
              </Button>

              <Button
                onClick={() => scrollTo("gallery")}
                className="rounded-xl border border-white/20 bg-background/10 px-6 py-3 text-white backdrop-blur-md transition hover:scale-[1.03] hover:bg-background/20 active:scale-[0.97]"
              >
                View Our Work →
              </Button>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mt-4"
            >
              <a
                href="/custom-fursuit"
                className="text-sm text-white underline underline-offset-4 transition hover:text-primary"
              >
                Explore custom fursuit options →
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-xl border border-white/20 bg-background/10 px-3 py-2 text-sm text-white backdrop-blur-md transition hover:scale-[1.03] hover:border-primary/50 hover:bg-white/10"
                >
                  <span className="text-primary">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
}