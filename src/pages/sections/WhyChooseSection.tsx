import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import {
  BadgeCheck,
  Brush,
  CreditCard,
  HandHeart,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const WHY_CARDS = [
  {
    icon: Sparkles,
    title: "Character-First Design",
    description:
      "Every build starts with your fursona’s personality, markings, expression, and overall vibe.",
  },
  {
    icon: HandHeart,
    title: "Made-to-Order Craft",
    description:
      "Your fursuit is planned around your character, sizing, comfort, and the way you want to perform.",
  },
  {
    icon: MessageCircleHeart,
    title: "Guided Commission Support",
    description:
      "Not sure what to choose? We help you understand styles, parts, features, and price range before you commit.",
  },
  {
    icon: CreditCard,
    title: "Payment Plans Available",
    description:
      "For larger builds, flexible payments can be discussed so your commission feels easier to manage.",
  },
  {
    icon: Brush,
    title: "Custom Details Matter",
    description:
      "From fur colors and markings to paws, tails, expressions, and add-ons — details are planned carefully.",
  },
  {
    icon: ShieldCheck,
    title: "Limited Slots for Quality",
    description:
      "We take fewer commissions at a time so each project gets proper attention, updates, and care.",
  },
];

export function WhyChooseSection() {
  return (
    <Section id="why-choose" variant="default" data-ocid="why.section">
      <Container>
        <SectionHeading
          badge="Why FurNFurry"
          title="A Custom Fursuit Studio Built Around Your Character"
          subtitle="We focus on custom planning, clear communication, and made-to-order details so your fursona feels personal from the first sketch to final delivery."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                data-ocid={`why.item.${i + 1}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-smooth group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                </div>

                <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mt-12 max-w-4xl rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center md:p-8"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
            <BadgeCheck className="h-6 w-6 text-primary" strokeWidth={1.8} />
          </div>

          <h3 className="font-display text-2xl font-bold text-foreground">
            Limited commissions. More attention per build.
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We keep commission slots limited so every project gets proper
            planning, clear updates, and detail-focused work instead of being
            rushed through a queue.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}