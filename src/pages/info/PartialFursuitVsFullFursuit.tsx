import { Link } from "react-router-dom";
import { useEffect } from "react";

const IMAGE_PATHS = {
  hero: "/partial-vs-full-hero.png",
  partialBuyer: "/partial-first-time-buyers.png",
  fullChanges: "/full-fursuit-changes.png",
  galleryGuide: "/gallery-choice-guide.png",
  choose: "/which-fursuit-should-you-choose.png",
};

export default function PartialFursuitVsFullFursuit() {
  useEffect(() => {
    document.title =
      "Partial Fursuit vs Full Fursuit: Which Should You Choose? | FurNFurry";

    const metaDescription =
      "Partial fursuit vs full fursuit: compare cost, comfort, care, and wearability to choose the best build for your character.";

    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = metaDescription;
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">

        <Link
          to="/blog"
          className="text-purple-400 text-sm"
        >
          ← Back to Blogs
        </Link>
        
        
        {/* HERO */}
        <header className="mb-11 mt-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">
            Fursuit Buyer Guide
          </p>

          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Partial Fursuit vs Full Fursuit: Which Should You Choose?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            One of the most common questions newer buyers ask is whether they
            should start with a partial fursuit or go straight to a full suit.
            The real answer depends less on what looks most impressive online
            and more on how you actually plan to use the suit.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
            <img
              src={IMAGE_PATHS.hero}
              alt="Partial fursuit vs full fursuit comparison"
              className="h-auto w-full object-cover"
            />
          </div>
        </header>

        <BlogSection title="What a Partial Fursuit Usually Gives You">
          <p>
            A partial is often the most practical starting point because it
            gives you the most recognizable parts of the character without
            covering the entire body. Depending on the exact build, that usually
            means a head, paws, tail, and sometimes additional matching pieces.
            For many people, that is more than enough to create a strong
            character identity right away.
          </p>

          <div className="my-8 grid gap-4 sm:grid-cols-3">
            <InfoBox
              title="Lower Cost"
              text="It usually costs less than a full build, making it easier for new buyers to start."
            />
            <InfoBox
              title="Easier to Wear"
              text="A partial is often easier to put on and more comfortable for longer stretches."
            />
            <InfoBox
              title="Strong Identity"
              text="The head, paws, and tail can already create a recognizable character presence."
            />
          </div>

          <p>
            The biggest advantage of a partial is accessibility. That lines up
            with broader fandom behavior too: research summarized by FurScience
            shows that far more people are interested in fursuiting than
            actually own full suits, and partial ownership has a different
            profile from full ownership.
          </p>
        </BlogSection>

        <ImageBlock
          src={IMAGE_PATHS.partialBuyer}
          alt="Partial fursuit for first time buyers"
        />

        <BlogSection title="Why Partials Make Sense for First-Time Buyers">
          <p>
            If you are still figuring out what you enjoy most, a partial gives
            you space to learn. You can get used to answering for the character
            visually, figure out your care routine, and experience suiting in
            public without jumping straight into the most expensive and
            maintenance-heavy option.
          </p>

          <p>
            A partial can also be easier to style. You can pair it with clothing
            that fits the character vibe, adapt it to different events, and stay
            cooler than you would in a full bodysuit.
          </p>

          <p>
            For many first-time buyers, that flexibility is a feature, not a
            compromise.
          </p>
        </BlogSection>

        <BlogSection title="What a Full Fursuit Changes">
          <h3>The Complete Illusion</h3>

          <p>
            A full fursuit creates the most complete illusion. If your goal is
            full-body character performance, stronger visual immersion, or a very
            specific silhouette, a full build may be the better fit. Some
            characters really do depend on body markings or overall shape in a
            way that feels incomplete without the full form.
          </p>

          <h3>But It Asks More From You</h3>

          <p>
            A full suit also asks more from you. It costs more, needs more
            measurements, usually needs more care, and creates more heat. That is
            why FurnFurry’s{" "}
            <InternalLink to="/measure">measurement guide</InternalLink> becomes
            especially important at this level.
          </p>

          <p>
            Full-suit comfort and mobility depend heavily on accurate sizing,
            especially when the suit includes body padding, feet paws, hands,
            tail, and a full body pattern.
          </p>
        </BlogSection>

        <ImageBlock
          src={IMAGE_PATHS.fullChanges}
          alt="Partial suit and full suit comparison details"
        />

        <BlogSection title="Full Suits Are Not Only About Looks">
          <p>
            A full suit is a commitment to the wearing experience, not just the
            photos. You need to think about how well you handle heat, how long
            you realistically stay suited, where you will change, how you will
            pack the build, and how much space you have for storage afterward.
          </p>

          <p>
            That is where the{" "}
            <InternalLink to="/care">care guide</InternalLink> matters too.
            FurnFurry advises buyers to brush the suit gently after wear, avoid
            storing it while damp, and avoid harsh chemicals and high heat. Those
            habits become more important, not less, when there is simply more
            suit to maintain.
          </p>

          <div className="my-8 grid gap-4 sm:grid-cols-3">
            <InfoBox
              title="Heat Tolerance"
              text="Consider how long you realistically stay suited and how well you handle warm spaces."
            />
            <InfoBox
              title="Storage & Packing"
              text="A full suit needs more space, more packing care, and more travel planning."
            />
            <InfoBox
              title="Ongoing Care"
              text="More fur and padding means more brushing, drying, cleaning, and maintenance."
            />
          </div>
        </BlogSection>

        <BlogSection title="Budget Should Guide the Choice More Than Hype">
          <p>
            Sometimes people want a full suit because it feels like the “real”
            version of commissioning. That mindset creates a lot of unnecessary
            pressure. A partial is not a lesser choice. For many buyers, it is
            the better one.
          </p>

          <h3>Start Grounded</h3>

          <p>
            If you want a grounded way to compare options, start with the{" "}
            <InternalLink to="/blog/custom-fursuit-price-guide">
              Custom Fursuit Price Guide 2026
            </InternalLink>{" "}
            and then compare that with the build language on the{" "}
            <InternalLink to="/custom-fursuit">
              custom fursuit commission page
            </InternalLink>
            . If the character is complex or you are still learning what you
            like, a partial may be the more comfortable and financially
            manageable first step.
          </p>

          <h3>The Hidden Costs Differ Too</h3>

          <p>
            A full suit usually means more material, more labor, more packing
            volume, and sometimes higher shipping complexity simply because the
            finished piece is larger. FurnFurry’s{" "}
            <InternalLink to="/shipping">shipping policy</InternalLink> explains
            production and delivery expectations, while the{" "}
            <InternalLink to="/refund">refund policy</InternalLink> explains why
            custom-made commissions are different from normal retail orders.
          </p>
        </BlogSection>

        <ImageBlock
          src={IMAGE_PATHS.galleryGuide}
          alt="Fursuit gallery examples to help choose a build"
        />

        <BlogSection title="The Gallery Can Tell You What Your Words Cannot">
          <p>
            If you are stuck between the two options, stop guessing and spend
            some time in the <InternalLink to="/gallery">gallery</InternalLink>.
            Pay attention to which builds hold your attention first and why.
            Sometimes people assume they need a full suit when what actually
            excites them most is the head, paws, and tail combination. Other
            times, they realize the character only feels “right” when the body
            pattern is visible too.
          </p>

          <p>
            The gallery is also useful because it brings theory back into
            wearability. A dramatic full build may look amazing in a static
            image, while a cleaner partial may feel much more realistic for your
            own events, travel habits, and climate.
          </p>
        </BlogSection>

        <BlogSection title="Character Design Can Influence the Answer">
          <div className="grid gap-5 md:grid-cols-2">
            <ChoiceBox
              title="Partial Works Best When…"
              items={[
                "The defining features are mostly in the face, hands, and tail.",
                "Your character’s strongest feature is personality and expression.",
                "You want outfit flexibility for conventions, photos, or events.",
                "You want an easier build to wear, clean, store, and travel with.",
              ]}
            />

            <ChoiceBox
              title="Full Suit Works Best When…"
              items={[
                "The body pattern is central to the character design.",
                "The silhouette depends on full-body shape or padding.",
                "You want the strongest full-body character illusion.",
                "You are ready for more measurements, heat, care, and cost.",
              ]}
            />
          </div>

          <p>
            This is why the best choice is usually a design-first decision
            rather than an ego-first decision.
          </p>
        </BlogSection>

        <ImageBlock
          src={IMAGE_PATHS.choose}
          alt="Which fursuit should you choose"
        />

        <BlogSection title="Which One Should You Choose?">
          <div className="grid gap-5 md:grid-cols-2">
            <ChoiceBox
              title="Choose a Partial If…"
              items={[
                "You want easier wear and travel.",
                "You want less upkeep.",
                "You want more outfit flexibility.",
                "You want a more approachable starting budget.",
              ]}
            />

            <ChoiceBox
              title="Choose a Full Suit If…"
              items={[
                "You want the strongest full-body illusion.",
                "You are ready for the extra cost.",
                "You can handle the measurements and heat.",
                "You are prepared for the maintenance commitment.",
              ]}
            />
          </div>

          <p>
            If you are still unsure, compare examples in the{" "}
            <InternalLink to="/gallery">gallery</InternalLink>, review build
            options on the{" "}
            <InternalLink to="/custom-fursuit">custom fursuit page</InternalLink>
            , check the{" "}
            <InternalLink to="/measure">measurement guide</InternalLink>, and
            pressure-test your budget with the{" "}
            <InternalLink to="/blog/custom-fursuit-price-guide">
              price guide
            </InternalLink>
            .
          </p>

          <p>
            The best fursuit is not necessarily the biggest one. It is the one
            you can actually enjoy wearing, caring for, and bringing to life.
          </p>
        </BlogSection>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-primary/30 bg-card/80 p-8 text-center shadow-elevated">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Start Your Commission
          </p>

          <h2 className="mt-3 font-display text-3xl font-extrabold">
            Ready to choose your custom fursuit build?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
            Send your character reference, build type, budget range, and special
            features. We’ll help you decide whether a partial or full fursuit
            makes the most sense for your character.
          </p>

          <Link
            to="/quote"
            className="mt-7 inline-flex rounded-2xl bg-primary px-7 py-4 font-bold text-primary-foreground transition hover:scale-105"
          >
            Request a Custom Quote →
          </Link>
        </section>
      </article>
    </main>
  );
}

function BlogSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="prose prose-invert prose-lg mt-12 max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:leading-8 prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ImageBlock({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
      <img src={src} alt={alt} className="h-auto w-full object-cover" />
    </div>
  );
}

function InfoBox({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 p-5">
      <h4 className="font-display text-lg font-bold text-foreground">
        {title}
      </h4>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}

function ChoiceBox({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/70 p-6">
      <h3 className="font-display text-xl font-bold text-foreground">
        {title}
      </h3>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-muted-foreground">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InternalLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link to={to} className="font-semibold text-primary">
      {children}
    </Link>
  );
}