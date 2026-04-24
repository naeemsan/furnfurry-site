import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { CustomBadge } from "@/components/ui/CustomBadge";
import { PawPrint } from "@/components/ui/PawPrint";
import { Button } from "@/components/ui/button";
import { COMMISSION_CARDS } from "@/data/constants";
import type { CommissionCard } from "@/types";
import {
  BadgeCheck,
  CheckCircle2,
  CircleHelp,
  PawPrint as PawIcon,
} from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const ACCENT_GRADIENTS = [
  "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--accent)))",
  "linear-gradient(90deg, oklch(var(--secondary)), oklch(var(--primary)/0.7))",
  "linear-gradient(90deg, oklch(var(--accent)), oklch(var(--secondary)))",
  "linear-gradient(90deg, oklch(var(--primary)), oklch(var(--secondary)))",
  "linear-gradient(90deg, oklch(var(--secondary)), oklch(var(--accent)))",
  "linear-gradient(90deg, oklch(var(--accent)), oklch(var(--primary)))",
];

function CommissionCardItem({
  card,
  index,
}: {
  card: CommissionCard;
  index: number;
}) {
  return (
    <motion.article
      data-ocid={`commissions.item.${index + 1}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-subtle hover:shadow-elevated hover:-translate-y-1.5 transition-smooth"
    >
      <div
        className="h-2 w-full shrink-0"
        style={{
          background: ACCENT_GRADIENTS[index % ACCENT_GRADIENTS.length],
        }}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 shadow-subtle transition-smooth group-hover:bg-primary/20 group-hover:scale-110">
              <PawIcon className="h-6 w-6 text-primary" strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                {card.title}
              </h3>

              {card.badge && (
                <div className="mt-1">
                  <CustomBadge>{card.badge}</CustomBadge>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {card.description}
        </p>

        <ul className="mb-6 flex flex-1 flex-col gap-2.5">
          {card.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span className="leading-snug text-foreground/85">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={() => scrollTo("contact")}
          data-ocid={`commissions.request_quote.button.${index + 1}`}
          variant="outline"
          className="mt-auto w-full rounded-xl border-2 border-primary/25 py-2.5 text-sm font-semibold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-elevated"
        >
          Request Quote →
        </Button>
      </div>
    </motion.article>
  );
}

export function CommissionsSection() {
  return (
    <Section id="commissions" variant="default" data-ocid="commissions.section">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <PawPrint
          className="absolute -top-6 right-12 text-primary rotate-[20deg]"
          size={100}
          opacity={0.04}
        />
        <PawPrint
          className="absolute bottom-16 -left-8 text-secondary rotate-[-25deg]"
          size={120}
          opacity={0.04}
        />
      </div>

      <Container>
        <SectionHeading
          badge="What We Make"
          title="Custom Pieces for Every Fursona"
          subtitle="Choose the build type that fits your character, budget, and performance needs — from expressive heads to complete full-body suits."
        />

        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-ocid="commissions.list"
        >
          {COMMISSION_CARDS.map((card, i) => (
            <CommissionCardItem key={card.type} card={card} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 px-6 py-6 text-center sm:flex-row sm:text-left"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
            <CircleHelp className="h-6 w-6 text-primary" strokeWidth={1.8} />
          </div>

          <div className="flex-1">
            <p className="font-display text-base font-bold text-foreground">
              Not sure which option is right for you?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Send us your reference sheet and we’ll help you choose the best
              build type, style, and price range. No commitment required.
            </p>
          </div>

          <Button
            onClick={() => scrollTo("contact")}
            data-ocid="commissions.help_me_choose.button"
            className="shrink-0 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-subtle hover:bg-primary/90 hover:shadow-elevated transition-smooth"
          >
            Help Me Choose
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}