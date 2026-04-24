import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { ShieldCheck, MessageCircle, FileText, CreditCard } from "lucide-react";
import { motion } from "motion/react";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    title: "Clear & Safe Process",
    text: "Every commission follows a structured process — from planning to delivery, so nothing feels uncertain.",
  },
  {
    icon: FileText,
    title: "Quote Before Commitment",
    text: "You receive a full personalized quote before any payment — no hidden costs or surprises later.",
  },
  {
    icon: MessageCircle,
    title: "Consistent Communication",
    text: "We stay in touch during the build with updates, so you always know what stage your suit is in.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Options",
    text: "For larger builds, payments can be split into stages to make your commission easier to manage.",
  },
];

export function TrustSection() {
  return (
    <Section id="trust" variant="muted">
      <Container>
        <SectionHeading
          badge="Built for First-Time & Serious Buyers"
          title="A Custom Fursuit Experience You Can Trust"
          subtitle="We focus on clarity, communication, and a structured process — so your commission feels safe, transparent, and easy to understand."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-3xl border border-border bg-card p-6 shadow-subtle transition-smooth hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                </div>

                <h3 className="font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-10 mx-auto max-w-3xl rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            We intentionally take a limited number of commissions to ensure each
            project gets proper attention, planning, and quality.
          </p>
        </div>
      </Container>
    </Section>
  );
}