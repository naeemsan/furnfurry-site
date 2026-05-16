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
  if (type) {
    window.location.href = `/quote?type=${encodeURIComponent(type)}`;
  } else {
    window.location.href = "/quote";
  }
}

function goToProcess() {
  document
    .getElementById("detailed-process")
    ?.scrollIntoView({ behavior: "smooth" });
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
        className="relative overflow-hidden min-h-[85vh] px-4 py-16"
        style={{
  backgroundImage: `
    linear-gradient(
      to right,
      rgba(3,3,10,0.68),
      rgba(3,3,10,0.40),
      rgba(3,3,10,0.25),
      rgba(3,3,10,0.55)
    ),
    url('/custom-fursuit-collage.png')
  `,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/1  via-transparent to-black/1" />

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
                Request a Quote →
              </Button>
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

     {/* INTRO AND BUILD PROCESS */}
<section className="relative overflow-hidden border-y border-border/60 px-4 py-14 sm:px-6 lg:px-8">
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(96,165,250,0.10),transparent_30%)]" />

  <div className="relative mx-auto max-w-6xl">
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="rounded-[2rem] border border-primary/25 bg-card/70 p-7 shadow-subtle">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          Built Around Your Character
        </p>

        <h2 className="mt-3 text-3xl font-extrabold lg:text-5xl">
          Designed for accuracy, comfort and personality
        </h2>

        <p className="mt-5 leading-8 text-muted-foreground">
          Every FurNFurry custom fursuit starts with your character before the
          materials are selected. We look at your species, colors, markings,
          expression, body style, accessories, and how you plan to wear the suit.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Character matching",
            "Comfort focused fit",
            "Detailed shaping",
            "Custom feature planning",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm font-semibold text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-border bg-background/60 p-7 shadow-subtle">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">
          What We Can Build
        </p>

        <div className="mt-5 space-y-5 leading-8 text-muted-foreground">
          <p>
            FurNFurry can plan heads, partial suits, full suits, paws, feet paws,
            tails, horns, antlers, collars, piercings, magnetic parts, removable
            features, and detailed markings based on your reference sheet.
          </p>

          <p>
            You can request options such as follow me eyes, magnetic eyelids,
            interchangeable antlers, indoor or outdoor feet paws, digitigrade
            padding, airbrushed markings, cooling fans, LEDs, moving jaws, and
            custom accessories.
          </p>

          <p>
            The goal is simple. Your suit should feel recognizable to your
            character, comfortable to wear, and strong enough for photos,
            conventions, content, or display.
          </p>
        </div>
      </div>
    </div>

    <div
      id="detailed-process"
      className="mt-10 rounded-[2rem] border border-primary/25 bg-primary/5 p-6 shadow-subtle md:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Real Build Process
          </p>

          <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
            See how custom fursuits are shaped
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            These workshop examples show how a fursuit starts from shaping and
            structure before fur, sewing, lining, finishing, and final details.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                src: "/process-foam-1.png",
                label: "Base frame",
              },
              {
                src: "/process-foam-2.png",
                label: "Shape check",
              },
              {
                src: "/process-clean-head.png",
                label: "Clean shaping",
              },
            ].map((image) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-subtle"
              >
                <img
  src={image.src}
  alt={image.label}
  className="h-[280px] w-full object-contain bg-black/20 p-2 transition duration-500 group-hover:scale-[1.03]"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  {image.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Full Build Process
          </p>

          <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
            How a custom fursuit is made
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            Every build is different, but most custom fursuits follow this path
            from character planning to final photos and shipping.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Character Review",
                text: "We review your fursona, colors, markings, species, expression, style ideas, and special features.",
              },
              {
                title: "Measurements",
                text: "Sizing is checked for comfort, movement, and proportions, especially for partial and full body suits.",
              },
              {
                title: "Foam Shaping",
                text: "The muzzle, cheeks, ears, head shape, and expression are shaped before the fur stage begins.",
              },
              {
                title: "Patterning",
                text: "Fur patterns are planned, cut, sewn, and fitted around the head base or body pattern.",
              },
              {
                title: "Detail Work",
                text: "Eyes, markings, lining, teeth, claws, horns, airbrushing, fans, LEDs, and accessories are added.",
              },
              {
                title: "Final Approval",
                text: "Finished photos are shared before shipping so the suit can be checked before it is packed.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-border bg-background/60 p-5 shadow-subtle transition hover:-translate-y-1 hover:border-primary/35"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-extrabold text-primary">
                  {index + 1}
                </div>

                <h3 className="text-lg font-bold">{step.title}</h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-3xl border border-primary/25 bg-primary/10 p-6 text-center">
            <h3 className="text-2xl font-extrabold">
              Ready to start your own build?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Send your reference sheet and tell us what you want made. We will
              help you understand the best build direction before you commit.
            </p>

            <Button
              onClick={() => scrollToContact()}
              className="mt-6 rounded-2xl px-7 py-4 text-base font-bold"
            >
              Start My Build →
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* OPTIONS WITH PRICING */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
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
<section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.14),transparent_26%)]" />

  <div className="relative mx-auto max-w-6xl">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-primary">
        What Affects Pricing
      </p>

      <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
        Every fursuit is quoted around your character
      </h2>

      <p className="mt-4 leading-8 text-muted-foreground">
        Pricing depends on the build type, character details, materials, custom
        features, measurements, and the amount of hand finishing required.
      </p>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          label: "Markings, species, layers",
          title: "Design Complexity",
          text: "Detailed markings, gradients, unusual species, layered colors, wings, hair, and complex shaping can increase build time.",
        },
        {
          label: "Follow me eyes, mesh, eyelids",
          title: "Eye Options",
          text: "Follow me eyes, printed mesh eyes, magnetic eyelids, sleepy expressions, angry expressions, and custom eye styles can be added.",
        },
        {
          label: "Removable, magnetic, sculpted",
          title: "Horns and Antlers",
          text: "Fixed horns, removable antlers, interchangeable antler sets, magnetic attachments, and sculpted parts affect complexity.",
        },
        {
          label: "Premium fur, shaving, airbrushing",
          title: "Materials and Fur",
          text: "Imported faux fur, shaved markings, airbrushed gradients, fleece details, minky fabric, and premium lining affect final pricing.",
        },
        {
          label: "Plantigrade or digitigrade",
          title: "Body Structure",
          text: "Digitigrade suits need extra padding and shaping. Plantigrade suits are usually simpler but still custom fitted.",
        },
        {
          label: "Indoor soles, outdoor soles, claws",
          title: "Paws and Feet",
          text: "Hand paws, feet paws, plush paw pads, silicone pads, outdoor soles, claws, and custom shapes are priced by detail level.",
        },
        {
          label: "Fans, LEDs, moving jaw",
          title: "Special Features",
          text: "Cooling fans, LED lights, moving jaws, removable tongues, piercings, collars, charms, and accessories can be planned.",
        },
        {
          label: "Color match and reference accuracy",
          title: "Character Accuracy",
          text: "Exact color matching, facial markings, body patterns, expression accuracy, and special markings need more detailed work.",
        },
        {
          label: "Rush orders and event dates",
          title: "Timeline Requests",
          text: "Birthday deadlines, convention dates, priority builds, and rush scheduling may affect quote and queue position.",
        },
      ].map((factor) => (
        <div
          key={factor.title}
          className="group rounded-3xl border border-border bg-card/70 p-6 shadow-subtle transition hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
            {factor.label}
          </p>

          <h3 className="text-xl font-extrabold">{factor.title}</h3>

          <p className="mt-3 leading-7 text-muted-foreground">
            {factor.text}
          </p>

          <div className="mt-5 h-px w-full bg-gradient-to-r from-primary/60 via-border to-transparent" />
        </div>
      ))}
    </div>

    <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-primary/25 bg-primary/10 p-6 text-center">
      <p className="leading-8 text-muted-foreground">
        Most clients receive a personalized quote after sharing references,
        measurements, preferred build style, deadline, and any extra features
        they want included.
      </p>

      <Button
        onClick={() => scrollToContact()}
        className="mt-6 rounded-2xl px-7 py-4"
      >
        Get Your Exact Quote →
      </Button>
    </div>
  </div>
</section>

      {/* REFERENCE SHEET CTA */}
<section className="px-4 py-14 sm:px-6 lg:px-8">
  <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-primary/25 bg-primary/10 p-6 shadow-subtle md:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-primary">
        Send Your Reference Sheet
      </p>

      <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
        Already have a fursona design?
      </h2>

      <p className="mt-4 leading-8 text-muted-foreground">
        A clear reference sheet helps us understand your colors, markings, body
        shape, expression, species, accessories, and special details before we
        price your custom fursuit.
      </p>

      <div className="mt-6 space-y-3">
        {[
          "Front, side, and back views are helpful",
          "Markings and color notes make quoting easier",
          "Accessories, horns, antlers, and paws can be included",
          "No perfect reference sheet is required to start",
        ].map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm font-semibold text-muted-foreground"
          >
            {item}
          </div>
        ))}
      </div>

      <Button
        onClick={() => scrollToContact()}
        className="mt-7 rounded-2xl px-8 py-4 text-base font-bold"
      >
        Start Your Quote Request →
      </Button>
    </div>

    <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
      {REFERENCE_SHEETS.map((image) => (
        <div
          key={image.src}
          className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-subtle transition hover:-translate-y-1 hover:border-primary/35"
        >
          <img
            src={image.src}
            alt={image.label}
            className="h-[220px] w-full object-contain bg-black/20 p-2 transition duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
            {image.label}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ */}
<section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
  <div className="rounded-[2rem] border border-primary/25 bg-primary/10 p-7 shadow-subtle lg:sticky lg:top-24 lg:self-start">
    <p className="text-sm font-bold uppercase tracking-widest text-primary">
      Custom Fursuit FAQ
    </p>

    <h2 className="mt-3 text-3xl font-extrabold">
      Common questions before you order
    </h2>

    <p className="mt-4 leading-8 text-muted-foreground">
      These answers help you understand pricing, build types, styles, timeline,
      and payment planning before sending your quote request.
    </p>

    <Button
      onClick={() => scrollToContact()}
      className="mt-6 rounded-2xl px-7 py-4"
    >
      Ask For a Quote →
    </Button>
  </div>

  <div className="space-y-4">
    {FAQS.map((item) => (
      <div
        key={item.q}
        className="rounded-3xl border border-border bg-card/70 p-6 shadow-subtle transition hover:-translate-y-1 hover:border-primary/35"
      >
        <h3 className="text-lg font-extrabold">{item.q}</h3>

        <p className="mt-3 leading-7 text-muted-foreground">
          {item.a}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* FINAL CTA */}
<section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
  <div
    className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/30 p-8 text-center shadow-elevated"
    style={{
      backgroundImage: `
        linear-gradient(to bottom, rgba(10,10,25,0.80), rgba(10,10,25,0.94)),
        url('/custom-fursuit-collage.png')
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
      Send your reference sheet, build idea, preferred style, and budget range.
      We will help you choose the right fursuit type and explain what is possible
      before you commit.
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