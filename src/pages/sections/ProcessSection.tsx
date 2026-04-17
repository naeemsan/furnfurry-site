import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { PROCESS_STEPS } from "@/data/constants";
import { motion } from "motion/react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function ProcessSection() {
  return (
    <Section id="process" variant="default" data-ocid="process.section">
      <Container>
        <SectionHeading
          badge="How It Works"
          title="How the Commission Process Works"
          subtitle="We keep things clear, friendly, and stress-free — from your first message all the way to your doorstep."
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-2 flex items-center justify-between px-10">
            <div
              className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 mx-10"
              style={{
                background:
                  "linear-gradient(90deg, oklch(var(--primary)/0.5), oklch(var(--secondary)/0.5))",
              }}
            />
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-elevated text-2xl"
                style={{
                  background:
                    i % 2 === 0
                      ? "oklch(var(--primary))"
                      : "oklch(var(--secondary))",
                  color:
                    i % 2 === 0
                      ? "oklch(var(--primary-foreground))"
                      : "oklch(var(--secondary-foreground))",
                }}
              >
                {step.icon}
              </motion.div>
            ))}
          </div>

          {/* Content cards */}
          <div className="grid grid-cols-5 gap-3 mt-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 + 0.1 }}
                data-ocid={`process.item.${step.number}`}
                className="rounded-2xl border border-border bg-card p-4 text-center transition-smooth hover:border-primary/30 hover:shadow-subtle"
              >
                {/* Step number pill */}
                <div
                  className="mx-auto mb-3 inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                  style={{
                    background:
                      i % 2 === 0
                        ? "oklch(var(--primary)/0.12)"
                        : "oklch(var(--secondary)/0.2)",
                    color:
                      i % 2 === 0
                        ? "oklch(var(--primary))"
                        : "oklch(var(--secondary-foreground))",
                  }}
                >
                  Step {step.number}
                </div>
                <h3 className="font-display text-sm font-bold leading-snug text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stacked */}
        <div className="relative lg:hidden">
          {/* Vertical spine */}
          <div
            className="absolute left-7 top-0 bottom-0 w-0.5"
            style={{
              background:
                "linear-gradient(to bottom, oklch(var(--primary)/0.4), oklch(var(--secondary)/0.2), transparent)",
            }}
          />

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                data-ocid={`process.item.${step.number}`}
                className="flex gap-5"
              >
                {/* Circle node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-subtle"
                    style={{
                      background:
                        i % 2 === 0
                          ? "oklch(var(--primary))"
                          : "oklch(var(--secondary))",
                      color:
                        i % 2 === 0
                          ? "oklch(var(--primary-foreground))"
                          : "oklch(var(--secondary-foreground))",
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-border bg-card p-4 pb-5">
                  <div
                    className="mb-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide"
                    style={{
                      background:
                        i % 2 === 0
                          ? "oklch(var(--primary)/0.12)"
                          : "oklch(var(--secondary)/0.2)",
                      color:
                        i % 2 === 0
                          ? "oklch(var(--primary))"
                          : "oklch(var(--secondary-foreground))",
                    }}
                  >
                    Step {step.number}
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA below process */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Ready to start your commission journey?
          </p>
          <Button
            onClick={() => scrollTo("contact")}
            data-ocid="process.get_quote.button"
            className="rounded-2xl bg-primary px-8 py-3 font-bold text-primary-foreground text-base hover:bg-primary/90 shadow-subtle hover:shadow-elevated transition-smooth"
          >
            Get a Quote →
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
