import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { PawPrint, Sparkles, Scissors, Shirt } from "lucide-react";

const PREVIEW_CARDS = [
  {
    icon: Sparkles,
    title: "Expressive Heads",
    text: "Big personality, clear expression, and character-focused details.",
  },
  {
    icon: PawPrint,
    title: "Paws & Tails",
    text: "Soft, wearable pieces designed to match your fursona’s style.",
  },
  {
    icon: Scissors,
    title: "Partial Builds",
    text: "Heads, paws, tails, sleeves, and feetpaws for a complete look.",
  },
  {
    icon: Shirt,
    title: "Fullsuit Concepts",
    text: "Made-to-order full body builds planned around your character.",
  },
];

export function GallerySection() {
  return (
    <Section id="gallery" variant="muted" data-ocid="gallery.section">
      <Container>
        <SectionHeading
          badge="Design Preview"
          title="Custom Fursuit Work, Made to Order"
          subtitle="Our first featured builds are in progress. For now, explore the types of custom pieces FurNFurry can create for your character."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PREVIEW_CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-subtle transition-smooth hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.8} />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}