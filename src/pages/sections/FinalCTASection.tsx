import { PawBackground } from "@/components/ui/PawPrint";
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
      className="relative overflow-hidden gradient-primary py-24 md:py-32"
      data-ocid="cta.section"
    >
      <PawBackground />
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-2 text-sm font-semibold text-primary-foreground/90 border border-secondary/40"
          >
            🌟 Commissions Open
          </motion.span>

          <h2 className="font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Ready to Bring Your
            <br />
            <span className="text-secondary">Fursona to Life?</span>
          </h2>

          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-xl mx-auto">
            Send us your design and we'll put together a personalized quote just
            for you. No commitment required — just a friendly chat about your
            vision.
          </p>

          {/* Trust pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {TRUST_PILLS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 px-3 py-1 text-xs font-semibold text-primary-foreground/90"
              >
                <Icon size={13} />
                {label}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => scrollTo("contact")}
              data-ocid="cta.get_quote.primary_button"
              className="rounded-2xl bg-secondary px-8 py-4 text-base font-bold text-secondary-foreground shadow-elevated hover:bg-secondary/90 hover:scale-[1.02] transition-smooth h-auto"
            >
              <Sparkles size={18} className="mr-2" />
              Get a Quote
            </Button>
            <Button
              onClick={() => scrollTo("contact")}
              data-ocid="cta.message.secondary_button"
              variant="outline"
              className="rounded-2xl border-2 border-primary-foreground/30 bg-transparent px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-smooth h-auto"
            >
              <MessageCircle size={18} className="mr-2" />
              Message FurNFurry
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
