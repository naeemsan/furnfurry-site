import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { CustomBadge } from "@/components/ui/CustomBadge";
import { Button } from "@/components/ui/button";
import { GALLERY_ITEMS } from "@/data/constants";
import type { GalleryCategory } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Heads",
  "Paws",
  "Partials",
  "Full Suits",
  "WIP",
];

// Extended gallery data for a richer grid
const EXTENDED_GALLERY = [
  ...GALLERY_ITEMS,
  {
    id: "g7",
    src: "/assets/generated/hero-fursuit.dim_900x900.png",
    alt: "Purple wolf partial suit",
    category: "Partials" as GalleryCategory,
    label: "Popular",
  },
  {
    id: "g8",
    src: "/assets/generated/gallery-collection.dim_1200x600.jpg",
    alt: "Blue husky feet paws closeup",
    category: "Paws" as GalleryCategory,
    label: "Custom",
  },
  {
    id: "g9",
    src: "/assets/generated/hero-fursuit.dim_900x900.png",
    alt: "WIP dragon head foam base",
    category: "WIP" as GalleryCategory,
  },
];

// Assign height classes for masonry-like variation
const HEIGHT_CLASSES = [
  "h-64 md:h-80",
  "h-48 md:h-56",
  "h-56 md:h-64",
  "h-48 md:h-60",
  "h-64 md:h-72",
  "h-52 md:h-64",
  "h-48 md:h-56",
  "h-56 md:h-64",
  "h-64 md:h-80",
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const filtered =
    activeCategory === "All"
      ? EXTENDED_GALLERY
      : EXTENDED_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <Section id="gallery" variant="muted" data-ocid="gallery.section">
      <Container>
        <SectionHeading
          badge="Portfolio Gallery"
          title="Our Work"
          subtitle="Every piece is one-of-a-kind, hand-crafted from your character's unique design. See what's possible."
        />

        {/* Category filter tabs */}
        <div
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Gallery categories"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              data-ocid={`gallery.filter.${cat.toLowerCase().replace(/\s+/g, "_")}.tab`}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-smooth ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-subtle"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="columns-2 gap-4 md:columns-3"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                data-ocid={`gallery.item.${i + 1}`}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-card"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-smooth group-hover:scale-105 ${
                    HEIGHT_CLASSES[i % HEIGHT_CLASSES.length]
                  }`}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-3 opacity-0 transition-smooth group-hover:opacity-100">
                  <div className="flex justify-between">
                    {item.label ? (
                      <CustomBadge>{item.label}</CustomBadge>
                    ) : (
                      <span />
                    )}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/80 text-sm font-bold text-foreground backdrop-blur-sm">
                      {i + 1}
                    </span>
                  </div>
                  <div
                    className="rounded-xl px-3 py-2 backdrop-blur-sm"
                    style={{
                      background: "oklch(var(--foreground)/0.5)",
                    }}
                  >
                    <p className="text-xs font-semibold leading-tight text-white">
                      {item.alt}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium text-white/70">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Always-visible category chip on bottom-left */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-0 px-3 py-2 opacity-100 transition-smooth group-hover:opacity-0">
                  <span
                    className="inline-block rounded-lg px-2 py-0.5 text-[10px] font-semibold"
                    style={{
                      background: "oklch(var(--primary)/0.85)",
                      color: "oklch(var(--primary-foreground))",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-16 text-center"
            data-ocid="gallery.empty_state"
          >
            <span className="text-4xl">🎨</span>
            <p className="font-display font-bold text-foreground">
              No photos in this category yet
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon — more work is always in progress!
            </p>
          </div>
        )}

        {/* CTA row */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={() => scrollTo("contact")}
            data-ocid="gallery.see_more.button"
            className="rounded-2xl bg-primary px-8 py-3 text-base font-bold text-primary-foreground shadow-subtle hover:bg-primary/90 hover:shadow-elevated transition-smooth"
          >
            Commission Your Own ✨
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollTo("commissions")}
            data-ocid="gallery.view_commissions.button"
            className="rounded-2xl border-2 border-primary px-8 py-3 text-base font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            See What We Make
          </Button>
        </div>
      </Container>
    </Section>
  );
}
