import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import {
  ClipboardCheck,
  CreditCard,
  MessageCircle,
  PackageCheck,
  PenTool,
} from "lucide-react";
import { motion } from "motion/react";

const PROCESS_STEPS = [
  {
    icon: MessageCircle,
    title: "Send Your Fursona",
    description:
      "Share your reference sheet, species, style preference, budget range, and the details you want included.",
  },
  {
    icon: PenTool,
    title: "Design Planning",
    description:
      "We study your character and plan the build style, colors, materials, markings, expression, and features.",
  },
  {
    icon: ClipboardCheck,
    title: "Quote & Deposit",
    description:
      "You receive a personalized quote. Once approved, your commission slot is secured with a deposit.",
  },
  {
    icon: CreditCard,
    title: "Build Updates",
    description:
      "Your fursuit is built in stages with progress updates, so you can follow your character coming to life.",
  },
  {
    icon: PackageCheck,
    title: "Final Delivery",
    description:
      "After final approval and payment, your finished suit is safely packed and shipped to your doorstep.",
  },
];

export function ProcessSection() {
  return (
    <Section
      id="process"
      variant="default"
      data-ocid="process.section"
      className="relative overflow-hidden"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <Container>
        <SectionHeading
          badge="Commission Journey"
          title="From Fursona Reference to Finished Suit"
          subtitle="A clear, guided process designed to make your custom fursuit feel exciting, organized, and stress-free."
        />

        <div className="relative mx-auto mt-14 max-w-5xl">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex items-center ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* icon */}
                  <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl border border-primary/30 bg-background shadow-elevated md:left-1/2">
                    <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                  </div>

                  {/* card */}
                  <div className="ml-16 w-full rounded-3xl border border-border bg-card/80 p-6 shadow-subtle backdrop-blur-md transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated md:ml-0 md:w-[44%]">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}