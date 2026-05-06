import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const TRUST_ITEMS = [
  "Custom made from scratch",
  "Worldwide shipping available",
  "Work in progress updates",
  "Quote based pricing",
];

const OPTIONS = [
  {
    title: "Head Only",
    type: "head",
    price: "Starting from $999",
    text: "A custom fursuit head designed around your character’s expression, species, muzzle shape, ears, and overall style.",
    note: "Final price depends on design complexity, materials, and detailing.",
    image: "/build-head-only.jpg",
    button: "Quote Head Only",
  },
  {
    title: "Partial Suit",
    type: "partial",
    price: "Starting from $1,600",
    text: "A lighter build with a custom head, paws, tail, and optional feet paws for a complete character look without a full body suit.",
    note: "A popular choice for conventions, photos, and easier wearability.",
    image: "/build-partial-suit.png",
    button: "Quote Partial Suit",
    popular: true,
  },
  {
    title: "Full Fursuit",
    type: "full",
    price: "Starting from $3,500",
    text: "A full handmade suit built around your fursona, available in plantigrade or digitigrade styles depending on your design.",
    note: "Final price depends on body style, markings, materials, and custom features.",
    image: "/build-full-fursuit.jpg",
    button: "Quote Full Fursuit",
  },
];

const PRICE_FACTORS = [
  "Design complexity",
  "Fur colors and materials",
  "Plantigrade or digitigrade body style",
  "Markings and character details",
  "Extra features and accessories",
  "Rush timing or special requests",
];

const REFERENCE_SHEETS = [
  {
    src: "/reference-sheet-1.png",
    label: "Example Reference",
  },
  {
    src: "/reference-sheet-2.png",
    label: "Example Reference",
  },
  {
    src: "/reference-sheet-3.png",
    label: "Example Reference",
  },
];

const FAQS = [
  {
    q: "How much does a custom fursuit cost?",
    a: "Every fursuit is quote based. The final price depends on size, complexity, fur colors, markings, materials, and the type of build.",
  },
  {
    q: "Do you make full body and partial fursuits?",
    a: "Yes. FurNFurry accepts full body fursuits, partial fursuits, heads, paws, tails, and custom add ons.",
  },
  {
    q: "Can I commission a kemono, toony, or plushy style?",
    a: "Yes. We can discuss kemono, toony, plushy, and semi realistic styles based on your fursona reference.",
  },
  {
    q: "How long does a custom fursuit take?",
    a: "Most projects take around two to four months depending on complexity, build type, materials, and current commission queue.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Payment plans can be discussed after reviewing your character, build type, and final quote.",
  },
];

function scrollToContact(type?: string) {
  let message = "Hi FurNFurry, I want a custom fursuit quote";

  if (type === "head") {
    message += " for a head only build.";
  } else if (type === "partial") {
    message += " for a partial suit.";
  } else if (type === "full") {
    message += " for a full fursuit.";
  } else {
    message += ".";
  }

  message += " I can share my reference sheet.";

  window.open(
    `https://wa.me/18555578702?text=${encodeURIComponent(message)}`,
    "_blank",
  );
}

function goToProcess() {
  window.location.href = "/#process";
}

export function CustomFursuitPage() {
  return (
  <>
    <Helmet>
      <title>Custom Fursuit Commissions | Kemono & Full Suits - FurNFurry</title>

      <meta
        name="description"
        content="Commission a custom fursuit designed around your character’s personality and style. Choose kemono, toony, partial, or full digitigrade builds with custom colors, paws, tails, and more."
      />
    </Helmet>

    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section
        className="relative overflow-hidden px-4 py-28 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(5,5,14,0.88), rgba(5,5,14,0.58), rgba(5,5,14,0.82)),
            url('/hero-bg.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Handmade Custom Fursuit Maker
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Custom Fursuits Built Around Your Fursona
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              FurNFurry creates handmade custom fursuits built around your
              character, style, and personality. From expressive heads to full
              body builds, each piece is carefully crafted to reflect your
              fursona with precision, comfort, and detail.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToContact()}
                className="rounded-2xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:bg-primary/90"
              >
                Start on WhatsApp →
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[2rem] border border-white/15 bg-black/20 p-3 shadow-elevated backdrop-blur-sm">
              <img
                src="/process-clean-head.png"
                alt="Handmade custom fursuit head work in progress"
                className="h-[430px] w-full rounded-[1.5rem] object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-card/70 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-background/50 px-4 py-4 text-center text-sm font-semibold text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              What Is a Custom Fursuit
            </p>

            <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
              Made to order for your character
            </h2>
          </div>

          <div className="space-y-4 leading-8 text-muted-foreground">
            <p>
              A custom fursuit is a made to order costume created specifically
              for your fursona. Unlike premade suits, every part is planned
              around your species, colors, markings, facial expression, body
              style, and special features.
            </p>

            <p>
              Each FurNFurry commission starts with your reference sheet and
              design goals, then we plan the build around character accuracy,
              comfort, visual impact, and wearability.
            </p>
          </div>
        </div>
      </section>

      {/* REAL BUILD PROCESS */}
      <section className="bg-card/40 px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/20 bg-primary/5 p-6 shadow-subtle md:p-8">
          <div className="mb-7 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Real Build Process
            </p>

            <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
              See how custom fursuits are shaped
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              These workshop examples show different fursuit bases at different
              stages of shaping. They are not the same character, but they show
              how real builds start from foam structure before fur, finishing,
              and final detailing.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                src: "/process-foam-1.png",
                label: "Base Frame Example",
              },
              {
                src: "/process-foam-2.png",
                label: "Angle Detail Example",
              },
              {
                src: "/process-clean-head.png",
                label: "Advanced Shaping Example",
              },
            ].map((image) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-subtle transition hover:-translate-y-1 hover:border-primary/35"
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  {image.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <Button onClick={goToProcess} className="rounded-2xl px-7 py-4">
              View Full Process →
            </Button>
          </div>
        </div>
      </section>

      {/* OPTIONS WITH PRICING */}
      <section className="mx-auto max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Build Options
          </p>

          <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
            Choose your custom fursuit build
          </h2>

          <p className="mt-4 text-muted-foreground">
            Select the build type that fits your character, budget, and how you
            plan to use your fursuit.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {OPTIONS.map((item) => (
            <div
              key={item.title}
              onClick={() => scrollToContact(item.type)}
              className={`group relative cursor-pointer overflow-hidden rounded-3xl border bg-card/70 shadow-subtle transition hover:-translate-y-1 hover:shadow-elevated ${
                item.popular
                  ? "border-primary/60 shadow-[0_0_45px_rgba(139,92,246,0.24)]"
                  : "border-border hover:border-primary/35"
              }`}
            >
              {item.popular && (
                <div className="absolute right-4 top-4 z-20 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-[0_0_24px_rgba(139,92,246,0.55)]">
                  Most Popular
                </div>
              )}

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-contain bg-[#d9c4ef] p-2 opacity-95 transition duration-500 group-hover:scale-[1.03]"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-2xl font-extrabold text-primary">
                  {item.price}
                </p>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.text}
                </p>

                <p className="mt-3 text-sm leading-6 text-muted-foreground/80">
                  {item.note}
                </p>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToContact(item.type);
                  }}
                  className="mt-5 rounded-xl px-5"
                >
                  {item.button}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-muted-foreground">
          Final pricing depends on design complexity, materials, body style,
          markings, accessories, and other custom details.
        </p>
      </section>

      {/* PRICE FACTORS */}
      <section className="bg-card/40 px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              What Affects Pricing
            </p>

            <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
              Every fursuit is quoted around your character
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Each build is different, so we review your reference sheet and
              design details before giving an exact quote.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRICE_FACTORS.map((factor) => (
              <div
                key={factor}
                className="rounded-2xl border border-border bg-background/70 p-5 text-center font-semibold text-muted-foreground shadow-subtle transition hover:-translate-y-1 hover:border-primary/35"
              >
                {factor}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={() => scrollToContact()}
              className="rounded-2xl px-7 py-4"
            >
              Get Your Exact Quote →
            </Button>
          </div>
        </div>
      </section>

      {/* REFERENCE SHEET CTA */}
      <section className="px-4 py-18 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-primary/25 bg-primary/10 p-6 shadow-subtle md:p-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Send Your Reference Sheet
            </p>

            <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
              Already have a fursona design?
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Your fursuit is built based on your character reference. These
              examples show the type of reference sheets clients usually provide
              when requesting a custom quote.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {REFERENCE_SHEETS.map((image) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-subtle transition hover:-translate-y-1 hover:border-primary/35"
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="h-[330px] w-full object-contain bg-black/20 p-2 transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  {image.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={() => scrollToContact()}
              className="rounded-2xl px-8 py-4 text-base font-bold"
            >
              Start Your Quote Request →
            </Button>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              A clear reference sheet helps us understand your colors, markings,
              body shape, and expression before pricing your custom fursuit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
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

      {/* FINAL CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/30 p-8 text-center shadow-elevated"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(10,10,25,0.88), rgba(10,10,25,0.94)),
              url('/hero-bg.png')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Start Your Commission
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold text-white lg:text-4xl">
            Ready to bring your fursona to life?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/75">
            Send your reference sheet and tell us what kind of custom fursuit
            you want. We’ll guide you through the process and help you plan the
            right build for your character, style, and budget.
          </p>

          <Button
            onClick={() => scrollToContact()}
            className="mt-7 rounded-2xl px-8 py-4 text-base font-bold"
          >
            Request Your Custom Quote Now
          </Button>

          <p className="mt-4 text-sm text-white/55">
            Limited commission slots available
          </p>
        </div>
      </section>
    </main>
    </>
  );
}