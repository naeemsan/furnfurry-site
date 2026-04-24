import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import {
  BadgeCheck,
  CalendarDays,
  Camera,
  CheckCircle2,
  CreditCard,
  FileText,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

const TRUST_POINTS = [
  {
    icon: CreditCard,
    title: "Flexible Installments",
    description:
      "For larger builds, payments can be split into stages during your commission timeline.",
    highlight: true,
  },
  {
    icon: CalendarDays,
    title: "Clear Payment Schedule",
    description:
      "Before work begins, we agree on payment timing so there are no confusing surprises later.",
  },
  {
    icon: FileText,
    title: "Simple Commission Agreement",
    description:
      "A clear written agreement helps protect both sides and keeps expectations easy to understand.",
  },
  {
    icon: Camera,
    title: "Progress Updates",
    description:
      "You receive updates during important stages so you can follow your fursuit coming together.",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    description:
      "Questions are welcome before and during the process. We guide you instead of leaving you guessing.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Quoting",
    description:
      "Your quote is discussed before production starts. Custom details and upgrades are clarified upfront.",
    highlight: true,
  },
];

const REASSURANCES = [
  "Quote confirmed before production begins",
  "Payment plan discussed before deposit",
  "Progress updates during major build stages",
  "Written commission details for clarity",
  "Support for first-time commissioners",
];

export function PaymentTrustSection() {
  return (
    <Section id="payment" variant="lavender" data-ocid="payment.section">
      <Container>
        <SectionHeading
          badge="Payment & Trust"
          title="A Clear Commission Experience From Start to Finish"
          subtitle="Custom fursuits are a big investment. We keep the process organized with clear quotes, payment planning, and communication throughout the build."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((point, i) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                data-ocid={`payment.item.${i + 1}`}
                className={`group flex gap-4 rounded-2xl border p-5 transition-smooth hover:-translate-y-1 hover:shadow-subtle ${
                  point.highlight
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="mb-1 font-display text-base font-bold text-foreground">
                    {point.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 shadow-subtle md:p-8"
        >
          <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={1.8} />
              </div>

              <h3 className="font-display text-2xl font-bold text-foreground">
                Designed to feel safe, clear, and beginner-friendly.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Whether this is your first fursuit commission or your next big
                character build, we help you understand the process before you
                commit.
              </p>
            </div>

            <ul className="space-y-3">
              {REASSURANCES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                    strokeWidth={1.8}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}