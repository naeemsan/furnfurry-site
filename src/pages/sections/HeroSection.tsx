import { PawBackground, PawPrint } from "@/components/ui/PawPrint";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const TRUST_BADGES = [
  { icon: "✨", label: "Custom Made" },
  { icon: "💳", label: "Payment Plans Available" },
  { icon: "💬", label: "Quote-Based Pricing" },
  { icon: "🎨", label: "Design Support Included" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen overflow-hidden bg-primary pt-20 flex items-center"
    >
      <PawBackground />

      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 right-0 h-[700px] w-[700px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />
        <PawPrint
          className="absolute top-16 right-1/4 text-primary-foreground rotate-[25deg]"
          size={60}
          opacity={0.05}
        />
        <PawPrint
          className="absolute bottom-1/4 left-16 text-secondary rotate-[-15deg]"
          size={80}
          opacity={0.08}
        />
        <PawPrint
          className="absolute top-1/3 left-8 text-primary-foreground rotate-[10deg]"
          size={50}
          opacity={0.06}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ── Left: Text ── */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-secondary"
                  style={{
                    animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                  }}
                />
                Open for Commissions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="font-display text-4xl font-extrabold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl"
            >
              Custom Fursuits
              <br />
              <span className="text-secondary">Made for Your</span>
              <br />
              Fursona
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg"
            >
              FurNFurry creates one-of-a-kind fursuit heads, paws, tails,
              partials, and full suits — each one tailored exactly to{" "}
              <em>your</em> character. Your fursona deserves to exist in the
              real world.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollTo("contact")}
                data-ocid="hero.get_quote.primary_button"
                size="lg"
                className="rounded-2xl bg-secondary px-8 py-4 text-base font-bold text-secondary-foreground shadow-elevated hover:bg-secondary/90 hover:scale-[1.03] transition-smooth"
              >
                Get a Quote ✨
              </Button>
              <Button
                onClick={() => scrollTo("gallery")}
                data-ocid="hero.view_gallery.secondary_button"
                variant="outline"
                size="lg"
                className="rounded-2xl border-2 border-primary-foreground/30 bg-transparent px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-smooth"
              >
                View Gallery 🖼️
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-2 text-sm font-medium text-primary-foreground/90 backdrop-blur-sm"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Featured visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-4 rounded-[2rem] opacity-40 blur-2xl"
                style={{ background: "oklch(var(--secondary) / 0.35)" }}
                aria-hidden="true"
              />
              {/* Decorative border */}
              <div
                className="absolute -inset-2 rounded-[2rem] border-2 border-secondary/30"
                aria-hidden="true"
              />

              {/* Image */}
              <img
                src="/assets/generated/hero-fursuit.dim_900x900.png"
                alt="Custom FurNFurry fursuit character — teal and pink fox"
                data-ocid="hero.featured_image"
                className="relative z-10 h-[400px] w-[400px] rounded-[1.5rem] object-cover shadow-elevated sm:h-[460px] sm:w-[460px]"
              />

              {/* Floating: commission status */}
              <div className="absolute -bottom-4 -left-4 z-20 rounded-2xl bg-card px-4 py-3 shadow-elevated border border-border">
                <div className="text-xs font-semibold text-muted-foreground">
                  Commission Status
                </div>
                <div className="mt-0.5 flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full bg-green-500"
                    style={{
                      animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                    }}
                  />
                  <span className="text-sm font-bold text-foreground">
                    Slots Open!
                  </span>
                </div>
              </div>

              {/* Floating: satisfaction */}
              <div className="absolute -top-4 -right-4 z-20 rounded-2xl bg-secondary px-4 py-3 shadow-elevated">
                <div className="text-xs font-semibold text-secondary-foreground/80">
                  Satisfaction
                </div>
                <div className="mt-0.5 text-xl font-bold text-secondary-foreground">
                  100% 🌟
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave transition to next section */}
      <div
        className="absolute inset-x-0 bottom-0 leading-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 56"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full h-14"
          style={{ fill: "oklch(var(--background))" }}
          role="img"
          aria-label="Decorative wave shape"
        >
          <title>Decorative wave shape</title>
          <path d="M0,32 C240,56 480,0 720,28 C960,56 1200,8 1440,32 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  );
}
