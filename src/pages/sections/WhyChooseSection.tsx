import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { WHY_CARDS } from "@/data/constants";
import {
  Brush,
  CreditCard,
  HandHeart,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const LUCIDE_ICONS = [
  Sparkles,
  HandHeart,
  MessageCircleHeart,
  CreditCard,
  Brush,
  ShieldCheck,
];

const ACCENT_COLORS = [
  "bg-primary/10 text-primary group-hover:bg-primary/20",
  "bg-secondary/20 text-secondary-foreground group-hover:bg-secondary/30",
  "bg-accent/15 text-accent-foreground group-hover:bg-accent/25",
  "bg-primary/10 text-primary group-hover:bg-primary/20",
  "bg-secondary/15 text-secondary-foreground group-hover:bg-secondary/25",
  "bg-accent/10 text-accent-foreground group-hover:bg-accent/20",
];

export function WhyChooseSection() {
  return (
    <Section id="why-choose" variant="default" data-ocid="why.section">
      <Container>
        <SectionHeading
          badge="Why FurNFurry"
          title="Built Around You"
          subtitle="We're not a factory — we're a small studio that genuinely cares about getting your character exactly right."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card, i) => {
            const Icon = LUCIDE_ICONS[i % LUCIDE_ICONS.length];
            const colorClass = ACCENT_COLORS[i % ACCENT_COLORS.length];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                data-ocid={`why.item.${i + 1}`}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-smooth hover:shadow-elevated hover:border-primary/30 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-smooth" />

                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-smooth ${colorClass}`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-6 text-center"
        >
          <p className="font-display text-lg font-bold text-foreground">
            Every commission gets our full attention — from first message to
            final delivery. 🐾
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
            We take limited commissions at a time so your project always gets
            the care it deserves.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
