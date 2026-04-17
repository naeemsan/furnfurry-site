import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { PawPrint } from "@/components/ui/PawPrint";
import {
  BadgeCheck,
  CalendarDays,
  Camera,
  CheckCircle2,
  CreditCard,
  FileText,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";

const TRUST_POINTS = [
  {
    icon: CreditCard,
    title: "Flexible Installments",
    description:
      "Pay in stages as your suit is built. We'll set up a payment schedule that works for both of us before we start.",
    highlight: true,
  },
  {
    icon: CalendarDays,
    title: "Spread Payments Over Time",
    description:
      "Depending on your build timeline, you can spread payments over weeks or months — no need to pay everything upfront.",
  },
  {
    icon: FileText,
    title: "Simple Agreement",
    description:
      "We use a straightforward commission agreement that protects both you and us. No legalese, just clear expectations.",
  },
  {
    icon: Camera,
    title: "Progress Updates",
    description:
      "You'll receive photos and updates throughout the build so you always know how your suit is coming along.",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    description:
      "Have a question at any time during your commission? Our inbox is always open — real, friendly replies every time.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Quoting",
    description:
      "Your final price is agreed before work begins. No surprise charges or hidden fees — ever.",
    highlight: true,
  },
];

const REASSURANCES = [
  "No hidden fees or surprise charges",
  "Simple written agreement protects both parties",
  "Progress photos at every major milestone",
  "Payment plans tailored to your timeline",
  "Friendly support from first quote to delivery",
];

export function PaymentTrustSection() {
  return (
    <Section id="payment" variant="lavender" data-ocid="payment.section">
      {/* Subtle paw decorations */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <PawPrint
          className="absolute top-10 right-10 text-primary"
          size={90}
          opacity={0.04}
        />
        <PawPrint
          className="absolute bottom-10 left-10 text-secondary"
          size={70}
          opacity={0.05}
        />
      </div>

      <Container>
        <SectionHeading
          badge="Peace of Mind"
          title="Commissioning Made Simple"
          subtitle="We believe the process should feel as good as the finished suit. Here's how we keep things safe, clear, and stress-free."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                data-ocid={`payment.item.${i + 1}`}
                className={`flex gap-4 rounded-2xl border p-5 transition-smooth hover:shadow-subtle ${
                  point.highlight
                    ? "border-primary/25 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground mb-1">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Warm reassurance banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-secondary/30 bg-card p-6 md:p-8"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                🤝 We want you to feel 100% confident
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you're new to commissioning or have questions about how it
                all works, just ask. We're here to help, not just build.
                First-time commissioners are always welcome.
              </p>
            </div>
            <ul className="space-y-2">
              {REASSURANCES.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-primary"
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
