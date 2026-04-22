import { Container, Section, SectionHeading } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function GallerySection() {
  return (
    <Section id="gallery" variant="muted" data-ocid="gallery.section">
      <Container>
        <SectionHeading
          badge="Coming Soon"
          title="Our Work is in the Making"
          subtitle="We're currently crafting our first custom fursuits with care and precision. Stay tuned—amazing creations are on the way."
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-subtle md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
              🐾
            </div>

            <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Our fursuiters are working behind the scenes
            </h3>

            <p className="mt-4 text-muted-foreground md:text-lg">
              Each piece is being carefully designed, shaped, and brought to life.
              Your character deserves nothing less than creativity, detail, and care.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card/40 p-5">
                <p className="text-2xl mb-2">📐</p>
                <p className="font-semibold text-foreground">Custom Designs</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Unique concepts made around your character.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/40 p-5">
                <p className="text-2xl mb-2">🧵</p>
                <p className="font-semibold text-foreground">Careful Crafting</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Built with attention to detail from start to finish.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card/40 p-5">
                <p className="text-2xl mb-2">🚀</p>
                <p className="font-semibold text-foreground">Coming Soon</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our first featured creations will be showcased here soon.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-primary">
                More handcrafted work coming soon — stay tuned for updates!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            onClick={() => scrollTo("contact")}
            data-ocid="gallery.see_more.button"
            className="rounded-2xl bg-primary px-8 py-3 text-base font-bold text-primary-foreground shadow-subtle hover:bg-primary/90 hover:shadow-elevated transition-smooth"
          >
            Commission Your Own 
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
