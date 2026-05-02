export default function CustomFursuitPriceGuide() {
  return (
    <main className="min-h-screen bg-background pt-32 text-foreground">
      <article className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">

        {/* CATEGORY */}
        <p className="text-sm font-semibold text-primary">
          Pricing Guide
        </p>

        {/* TITLE */}
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Custom Fursuit Price Guide 2026
        </h1>

        {/* INTRO */}
        <p className="mt-5 text-lg text-muted-foreground">
          Thinking about getting a custom fursuit but not sure how much it costs?
          This guide breaks down pricing, build types, and the key factors that
          affect the final quote.
        </p>

        {/* IMAGE (IMPORTANT FIX) */}
        <img
  src="/custom-fursuit-price-guide.jpg"
  alt="Custom fursuit"
  className="mt-8 h-[420px] w-full rounded-2xl border border-white/10 object-cover object-top"
/>

        {/* SECTION */}
        <h2 className="mt-10 text-2xl font-bold">
          How Much Does a Custom Fursuit Cost?
        </h2>

        <p className="mt-4 text-muted-foreground">
          The cost of a custom fursuit depends on the build type, character
          complexity, materials, and custom features. Each fursuit is handmade,
          so pricing can vary depending on your design.
        </p>

        {/* LIST */}
        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>
            <strong className="text-foreground">Fursuit Head:</strong> $800 – $2,500+
          </li>
          <li>
            <strong className="text-foreground">Partial Fursuit:</strong> $1,500 – $3,500+
          </li>
          <li>
            <strong className="text-foreground">Full Body Fursuit:</strong> $4,000 – $8,000+
          </li>
        </ul>

        {/* SECTION */}
        <h2 className="mt-10 text-2xl font-bold">
          What Affects the Price?
        </h2>

        <h3 className="mt-6 text-xl font-semibold">
          1. Character Complexity
        </h3>
        <p className="mt-3 text-muted-foreground">
          Simple designs cost less, while detailed markings, multiple colors,
          or complex patterns increase the price.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          2. Build Type
        </h3>
        <p className="mt-3 text-muted-foreground">
          A head is cheaper than a partial, and a full suit costs more due to
          additional materials and construction time.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          3. Materials
        </h3>
        <p className="mt-3 text-muted-foreground">
          High-quality faux fur, foam, and internal structure improve comfort
          and durability, but also increase cost.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          4. Extra Features
        </h3>
        <p className="mt-3 text-muted-foreground">
          Features like LED eyes, magnetic eyelids, moving jaws, and fans add
          to the final price.
        </p>

        {/* SECTION */}
        <h2 className="mt-10 text-2xl font-bold">
          Is It Worth It?
        </h2>

        <p className="mt-4 text-muted-foreground">
          A custom fursuit is a handcrafted piece built specifically for your
          character. You are paying for time, craftsmanship, and a fully
          personalized result.
        </p>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-6">
          <h2 className="text-2xl font-bold">
            Planning Your Own Fursuit?
          </h2>

          <p className="mt-3 text-muted-foreground">
            Message FurNFurry on WhatsApp and we’ll guide you based on your
            character, budget, and timeline.
          </p>

          <a
            href="https://wa.me/18555578702?text=Hi%2C%20I%27m%20interested%20in%20a%20custom%20fursuit.%20Can%20you%20guide%20me%3F"
            className="mt-5 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03]"
          >
            Message on WhatsApp
          </a>
        </div>

      </article>
    </main>
  );
}