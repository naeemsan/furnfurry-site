import { FEATURE_POINTS } from "@/data/constants";
import {
  CreditCard,
  FileText,
  MessageCircle,
  Palette,
  ShieldCheck,
  Shirt,
} from "lucide-react";
import { motion } from "motion/react";

const FEATURE_ICONS = [
  Palette,
  Shirt,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  FileText,
];

export function FeatureStrip() {
  return (
    <section
      data-ocid="feature_strip.section"
      className="relative overflow-hidden border-y border-primary/10 bg-card"
      aria-label="Key features"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "linear-gradient(90deg, oklch(var(--primary)/0.08), oklch(var(--secondary)/0.1), oklch(var(--primary)/0.08))",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul
          className="m-0 flex list-none items-stretch overflow-x-auto p-0 lg:grid lg:grid-cols-6"
          style={{ scrollbarWidth: "none" }}
        >
          {FEATURE_POINTS.map((point, i) => {
            const Icon = FEATURE_ICONS[i] ?? ShieldCheck;

            return (
              <motion.li
                key={point.title}
                data-ocid={`feature_strip.item.${i + 1}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative flex min-w-[168px] shrink-0 cursor-default flex-col items-center justify-center gap-2.5 px-5 py-7 text-center transition-smooth hover:bg-primary/6 lg:min-w-0"
              >
                {i > 0 && (
                  <div
                    className="absolute left-0 top-1/4 h-1/2 w-px bg-border"
                    aria-hidden="true"
                  />
                )}

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-smooth group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_22px_rgba(139,92,246,0.25)]">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <p className="font-display text-sm font-bold leading-snug text-foreground">
                  {point.title}
                </p>

                <p className="hidden max-w-[140px] text-xs leading-snug text-muted-foreground lg:block">
                  {point.description}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}