import { Button } from "@/components/ui/button";
import { BadgeCheck, CreditCard, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const TRUST_PILLS = [
  { icon: BadgeCheck, label: "Made-to-Order" },
  { icon: CreditCard, label: "Payment Plans" },
  { icon: MessageCircle, label: "Guided Process" },
];

export function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 md:py-32"
      data-ocid="cta.section"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-[240px] w-[240px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/15 via-card to-background p-1 shadow-elevated"
        >
          <div className="rounded-[1.85rem] bg-background/70 px-6 py-12 text-center backdrop-blur-xl sm:px-10">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-4 w-4" strokeWidth={1.8} />
              Limited Commission Slots Open
            </span>

            <h2 className="font-display text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Ready to Bring Your
              <br />
              <span className="text-primary">Fursona to Life?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Send your character reference, idea, or inspiration images. We’ll
              help you plan the right build type, style, features, and price
              range before you commit.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {TRUST_PILLS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground"
                >
                  <Icon className="h-4 w-4 text-primary" strokeWidth={1.8} />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => scrollTo("contact")}
                data-ocid="cta.get_quote.primary_button"
                className="h-auto rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-subtle transition-smooth hover:scale-[1.03] hover:bg-primary/90 hover:shadow-elevated"
              >
                Start Your Custom Fursuit →
              </Button>

              <Button
                onClick={() => scrollTo("contact")}
                data-ocid="cta.message.secondary_button"
                variant="outline"
                className="h-auto rounded-2xl border-2 border-primary/25 bg-card px-8 py-4 text-base font-bold text-primary transition-smooth hover:bg-primary hover:text-primary-foreground"
              >
                Ask a Question
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}