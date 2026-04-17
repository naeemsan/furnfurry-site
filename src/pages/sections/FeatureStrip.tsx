import { FEATURE_POINTS } from "@/data/constants";
import { motion } from "motion/react";

export function FeatureStrip() {
  return (
    <section
      data-ocid="feature_strip.section"
      className="relative overflow-hidden border-y border-primary/10 bg-card"
      aria-label="Key features"
    >
      {/* Subtle gradient wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "linear-gradient(90deg, oklch(var(--primary)/0.08), oklch(var(--secondary)/0.1), oklch(var(--primary)/0.08))",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* scrollable on mobile, grid on desktop */}
        <ul
          className="flex items-stretch overflow-x-auto lg:grid lg:grid-cols-6 list-none m-0 p-0"
          style={{ scrollbarWidth: "none" }}
        >
          {FEATURE_POINTS.map((point, i) => (
            <motion.li
              key={point.title}
              data-ocid={`feature_strip.item.${i + 1}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative flex shrink-0 min-w-[168px] lg:min-w-0 flex-col items-center justify-center gap-2.5 px-5 py-7 text-center transition-smooth hover:bg-primary/6 cursor-default"
            >
              {/* Divider */}
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/4 h-1/2 w-px bg-border"
                  aria-hidden="true"
                />
              )}

              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-xl transition-smooth group-hover:bg-primary/20 group-hover:scale-110">
                {point.icon}
              </div>

              {/* Title */}
              <p className="font-display text-sm font-bold text-foreground leading-snug">
                {point.title}
              </p>

              {/* Description (lg only) */}
              <p className="hidden text-xs text-muted-foreground leading-snug max-w-[140px] lg:block">
                {point.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
