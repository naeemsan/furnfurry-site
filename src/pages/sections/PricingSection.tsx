import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { CustomBadge } from "@/components/ui/CustomBadge";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/data/constants";
import { motion } from "motion/react";
import {
  Check,
  CreditCard,
  Footprints,
  Hand,
  Package,
  PawPrint,
  Shirt,
  Sparkles,
  Wind,
} from "lucide-react";

const TIER_INCLUDES: Record<string, string[]> = {
  Head: [
    "Custom sculpted foam base",
    "Expressive eyes & styling",
    "Fur color matched to reference",
    "Optional detailing & finishing",
  ],
  "Hand Paws": [
    "Custom claw shape & color",
    "Fur or fleece palm options",
    "Comfortable fit & padding",
    "Grip-friendly lining",
  ],
  "Feet Paws": [
    "Sculpted shape & toe beans",
    "Durable build for walking",
    "Matches your character design",
    "Optional non-slip soles",
  ],
  Tail: [
    "Custom length & shape",
    "Optional poseable core",
    "Multi-color & gradients",
    "Clip or belt attachment",
  ],
  Partial: [
    "Head + paws + tail bundle",
    "Full color consistency",
    "Best value vs individual parts",
    "Flexible payment options",
  ],
  "Full Suit": [
    "Complete full-body build",
    "Custom markings & patterns",
    "Comfort-focused interior",
    "Fully made-to-order design",
  ],
};

const TIER_ICONS = {
  Head: Sparkles,
  "Hand Paws": Hand,
  "Feet Paws": Footprints,
  Tail: Wind,
  Partial: Package,
  "Full Suit": Shirt,
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function PricingSection() {
  return (
    <Section id="pricing" variant="lavender">
      <Container>
        <SectionHeading
          badge="Pricing"
          title="Custom Fursuit Pricing"
          subtitle="Every build is fully custom. These starting prices give you a realistic baseline — final quotes depend on your character and features."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => {
            const includes = TIER_INCLUDES[tier.type] ?? [];
            const Icon =
              TIER_ICONS[tier.type as keyof typeof TIER_ICONS] ?? PawPrint;

            const isPopular = tier.type === "Partial";

            return (
              <motion.div
                key={tier.type}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-xl ${
                  isPopular
                    ? "border-primary/50 bg-primary/5 ring-2 ring-primary/20"
                    : "border-border bg-card"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <CustomBadge variant="popular">
                      Most Popular
                    </CustomBadge>
                  </div>
                )}

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {tier.type}
                  </h3>
                </div>

                <p className="mb-4 text-sm text-muted-foreground">
                  {tier.description}
                </p>

                {/* PRICE DISPLAY */}
                <div className="mb-5 rounded-xl bg-background/60 px-4 py-3">
                  <span className="text-xs uppercase text-muted-foreground">
                    Starting at
                  </span>

                  <div className="mt-1 text-3xl font-extrabold text-primary">
                    {tier.type === "Full Suit"
                      ? "$5,000 – $10,000+"
                      : `$${tier.startingAt.toLocaleString()}`}
                  </div>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Final pricing depends on character complexity and features
                  </p>
                </div>

                <ul className="mb-6 space-y-2 text-sm">
                  {includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollTo("contact")}
                  className={`mt-auto font-bold ${
                    isPopular
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Request Quote →
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* PAYMENT INFO */}
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-secondary/40 bg-secondary/10 p-5">
          <CreditCard className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">
            Flexible payment plans available for larger builds. We'll discuss a
            schedule that fits your budget.
          </p>
        </div>
      </Container>
    </Section>
  );
}