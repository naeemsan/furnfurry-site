import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const TRUST_PILLS = [
  { icon: Star, label: "Custom Made" },
  { icon: Sparkles, label: "Payment Plans" },
  { icon: MessageCircle, label: "Friendly Process" },
];

export function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-24 md:py-32"
      data-ocid="cta.section"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-10 right-10 h-[260px] w-[260px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-[220px] w-[220px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur-xl shadow-glass sm:px-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-primary-foreground/90 backdrop-blur-md"
            >
              🌟 Commissions Open
            </motion.span>

            <h2 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Ready to Bring Your
              <br />
              <span className="text-secondary">Fursona to Life?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Send us your design and we'll put together a personalized quote just
              for you. No commitment required — just a friendly chat about your
              vision.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {TRUST_PILLS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold text-primary-foreground/90"
                >
                  <Icon size={13} />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                onClick={() => scrollTo("contact")}
                data-ocid="cta.get_quote.primary_button"
                className="h-auto rounded-2xl bg-secondary px-8 py-4 text-base font-bold text-white shadow-glowPink transition-smooth hover:scale-[1.03] hover:bg-secondary/90 hover:shadow-glowPurple"
              >
                <Sparkles size={18} className="mr-2" />
                Get a Quote
              </Button>

              <Button
                onClick={() => scrollTo("contact")}
                data-ocid="cta.message.secondary_button"
                variant="outline"
                className="h-auto rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-primary-foreground backdrop-blur-md shadow-glass transition-smooth hover:bg-white/10"
              >
                <MessageCircle size={18} className="mr-2" />
                Message FurNFurry
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}