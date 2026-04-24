import { Button } from "@/components/ui/button";

const OPTIONS = [
  {
    title: "Full Body Fursuits",
    text: "A complete head-to-toe custom fursuit made around your fursona’s colors, markings, body shape, and personality.",
  },
  {
    title: "Partial Fursuits",
    text: "Heads, hand paws, feet paws, and tails combined into a lighter setup for conventions, photos, and performance.",
  },
  {
    title: "Custom Fursuit Heads",
    text: "Expressive custom heads designed around your character’s species, muzzle shape, eyes, ears, and overall style.",
  },
  {
    title: "Paws, Tails & Add-ons",
    text: "Matching hand paws, feet paws, tails, claws, markings, and other details to complete your build.",
  },
];

const FAQS = [
  {
    q: "How much does a custom fursuit cost?",
    a: "Every fursuit is quote-based. The final price depends on size, complexity, fur colors, markings, materials, and the type of build.",
  },
  {
    q: "Do you make full body and partial fursuits?",
    a: "Yes. FurNFurry accepts full body fursuits, partial fursuits, heads, paws, tails, and custom add-ons.",
  },
  {
    q: "Can I commission a kemono, toony, or plushy style?",
    a: "Yes. We can discuss kemono, toony, plushy, and semi-realistic styles based on your fursona reference.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Payment plans can be discussed after reviewing your character and final quote.",
  },
];

function scrollToContact() {
  window.location.href = "/#contact";
}

export function CustomFursuitPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section
        className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(8,8,18,0.75), rgba(8,8,18,0.98)),
            url('/hero-bg.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            Custom Fursuit Maker
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Custom Fursuits Made for Your Fursona
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            FurNFurry creates custom full body fursuits, partial fursuits,
            fursuit heads, hand paws, feet paws, tails, and character-based
            builds made to order.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="rounded-2xl px-7 py-4 text-base font-bold"
            >
              Request a Quote →
            </Button>

            <a
              href="/"
              className="inline-flex items-center rounded-2xl border border-white/20 px-7 py-4 font-bold text-white hover:bg-white/10"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold">
            What is a custom fursuit?
          </h2>

          <p className="mt-5 leading-8 text-muted-foreground">
            A custom fursuit is a made-to-order costume created specifically for
            your character. Unlike premade suits, a custom fursuit is built
            around your own fursona, including species, markings, colors, facial
            expression, body style, and special features.
          </p>

          <p className="mt-4 leading-8 text-muted-foreground">
            Every FurNFurry commission starts with your reference sheet and
            design goals, then we plan the build around comfort, style,
            character accuracy, and final presentation.
          </p>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold">
          Custom fursuit options
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {OPTIONS.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-card/70 p-6 shadow-subtle"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-card/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold">
            How the commission process works
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              "Send your fursona reference",
              "Discuss style and features",
              "Confirm quote and deposit",
              "Production begins with updates",
              "Final delivery after completion",
            ].map((step, i) => (
              <div
                key={step}
                className="rounded-2xl border border-border bg-background p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <p className="text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Quote-Based Pricing
          </p>

          <h2 className="text-3xl font-extrabold">
            How much does a custom fursuit cost?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-muted-foreground">
            Custom fursuit pricing depends on design complexity, materials,
            markings, body style, size, and the type of build you want. Full
            body fursuits, partial fursuits, heads, paws, and tails all vary in
            final cost. Every quote is personalized after reviewing your
            character reference.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold">
          Custom fursuit FAQ
        </h2>

        <div className="mt-8 space-y-4">
          {FAQS.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-border bg-card/70 p-6"
            >
              <h3 className="text-lg font-bold">{item.q}</h3>
              <p className="mt-2 leading-7 text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-primary/10 p-8 text-center">
          <h2 className="text-3xl font-extrabold">
            Ready to bring your fursona to life?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Send your reference sheet and tell us what kind of fursuit you want.
            We’ll help you plan the right custom build for your character,
            budget, and style.
          </p>

          <Button
            onClick={scrollToContact}
            className="mt-6 rounded-2xl px-7 py-4 text-base font-bold"
          >
            Request a Quote →
          </Button>
        </div>
      </section>
    </main>
  );
}