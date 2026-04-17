import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { CustomBadge } from "@/components/ui/CustomBadge";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/data/constants";
import { motion } from "motion/react";

const TIER_INCLUDES: Record<string, string[]> = {
  Head: [
    "Custom sculpted foam base",
    "Follow-me toony or 3D eyes",
    "Fur color matching from ref",
    "Moveable jaw option available",
  ],
  "Hand Paws": [
    "Custom claw colors & shape",
    "Fleece or fur palm options",
    "Padded or unpadded fingers",
    "Grip-friendly palm lining",
  ],
  "Feet Paws": [
    "Foam-sculpted toe beans",
    "Non-slip sole available",
    "Matches your character ref",
    "Custom claw detailing",
  ],
  Tail: [
    "Custom length & base shape",
    "Wire armature for posing",
    "Multi-color & gradient options",
    "Clip-on or belt attachment",
  ],
  Partial: [
    "Head + hand paws + tail bundle",
    "Consistent color & fur matching",
    "Optional feet paws add-on",
    "Flexible payment plan included",
  ],
  "Full Suit": [
    "Complete head, body, paws & tail",
    "Digitigrade or regular bodysuit",
    "Breathable inner lining",
    "Custom markings & patterns",
  ],
};

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function PricingSection() {
  return (
    <Section id="pricing" variant="lavender" data-ocid="pricing.section">
      <Container>
        <SectionHeading
          badge="Transparent Pricing"
          title="What Does a Fursuit Cost?"
          subtitle="Every commission is unique — these starting prices give you a real-world baseline. Your final quote is always personalized."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => {
            const includes = TIER_INCLUDES[tier.type] ?? [];
            return (
              <motion.div
                key={tier.type}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                data-ocid={`pricing.item.${i + 1}`}
                className={`group relative flex flex-col rounded-2xl border p-6 transition-smooth hover:-translate-y-1 hover:shadow-elevated ${
                  tier.popular
                    ? "border-primary/50 bg-primary/5 ring-2 ring-primary/25 shadow-subtle"
                    : "border-border bg-card hover:border-primary/25"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <CustomBadge variant="popular">⭐ Most Popular</CustomBadge>
                  </div>
                )}

                {/* Emoji + name */}
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${
                      tier.popular
                        ? "bg-primary/15"
                        : "bg-accent/10 group-hover:bg-primary/10"
                    } transition-smooth`}
                  >
                    {tier.emoji}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {tier.type}
                  </h3>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-5 rounded-xl bg-background/60 px-4 py-3">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Starting at
                  </span>
                  <div className="mt-0.5 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold text-primary">
                      ${tier.startingAt}
                    </span>
                    <span className="text-sm text-muted-foreground">USD</span>
                  </div>
                </div>

                {/* Includes */}
                <ul className="mb-6 flex-1 space-y-2">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-[10px] font-bold">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollTo("contact")}
                  data-ocid={`pricing.get_quote.button.${i + 1}`}
                  className={`w-full rounded-xl font-bold transition-smooth ${
                    tier.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle hover:shadow-elevated"
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20"
                  }`}
                >
                  Request Quote →
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Flexible payments banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 rounded-2xl border-2 border-secondary/40 bg-secondary/10 px-6 py-5 text-center sm:flex-row sm:text-left"
        >
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/25 text-2xl">
            💳
          </span>
          <div className="flex-1">
            <p className="font-display font-bold text-foreground">
              Flexible Partial Payments Available
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Pay over time during your build — we'll work out a schedule that
              fits your budget.
            </p>
          </div>
          <Button
            onClick={() => scrollTo("contact")}
            data-ocid="pricing.payment_plan.button"
            className="shrink-0 rounded-xl bg-secondary/80 px-5 py-2.5 font-bold text-foreground hover:bg-secondary transition-smooth"
          >
            Learn More
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center text-xs text-muted-foreground"
        >
          * Final pricing depends on character complexity, colors, markings,
          materials, and build type. Always request a personalized quote.
        </motion.p>
      </Container>
    </Section>
  );
}
