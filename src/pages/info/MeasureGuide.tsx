import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const headMeasurements = [
  "Head circumference around the widest part of your head",
  "Neck circumference where the head will sit",
  "Chin to top of head height",
  "Forehead to back of head depth",
  "Shoulder to top of head height if you want a larger mascot style head",
  "Glasses, piercings, or hair volume notes if needed",
];

const handPawMeasurements = [
  "Wrist circumference",
  "Palm width across the widest part of your hand",
  "Hand length from wrist to middle fingertip",
  "Middle finger length",
  "Thumb length if the paw design needs separated fingers",
  "Preferred paw style such as slim, plush, kemono, toony, or puffy",
];

const feetPawMeasurements = [
  "Foot length from heel to longest toe",
  "Foot width at the widest point",
  "Regular shoe size",
  "Ankle circumference",
  "Indoor sole or outdoor sole preference",
  "Desired paw size such as natural, oversized, or plush mascot style",
];

const partialMeasurements = [
  "Head circumference",
  "Neck circumference",
  "Wrist circumference",
  "Palm width",
  "Hand length",
  "Foot length if feet paws are included",
  "Shoe size if feet paws are included",
  "Tail placement height from waist or belt line",
];

const plantigradeMeasurements = [
  "Full height",
  "Weight",
  "Neck circumference",
  "Chest circumference",
  "Waist circumference",
  "Hip circumference",
  "Shoulder width",
  "Back width",
  "Arm length from shoulder to wrist",
  "Upper arm circumference",
  "Forearm circumference",
  "Wrist circumference",
  "Torso length from shoulder to crotch",
  "Inseam from crotch to ankle",
  "Outer leg length from waist to ankle",
  "Thigh circumference",
  "Calf circumference",
  "Ankle circumference",
  "Foot length",
  "Foot width",
  "Shoe size",
];

const digitigradeExtraMeasurements = [
  "All plantigrade full suit measurements",
  "Hip to knee length",
  "Knee to ankle length",
  "Upper thigh circumference",
  "Lower thigh circumference",
  "Knee circumference",
  "Calf circumference",
  "Desired leg padding size",
  "Tail placement height",
  "Preferred leg shape such as slim, medium, heavy, or dramatic digitigrade",
];

const optionalFeatures = [
  "Follow me eyes",
  "Interchangeable eyelids",
  "Removable antlers",
  "Magnetic horns",
  "Magnetic accessories",
  "Cooling fan",
  "LED details",
  "Moving jaw",
  "Removable tongue",
  "Indoor or outdoor soles",
  "Claws or no claws",
  "Glasses compatibility",
  "Collars, bandanas, piercings, or props",
];

function MeasurementCard({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-card/70 p-6 shadow-subtle transition hover:-translate-y-1 hover:border-primary/40">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
        {subtitle}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-foreground">{title}</h3>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function MeasureGuide() {
  return (
    <>
      <Helmet>
        <title>Custom Fursuit Measurement Guide | FurNFurry</title>

        <meta
          name="description"
          content="Use the FurNFurry custom fursuit measurement guide for heads, hand paws, feet paws, partials, plantigrade suits, and digitigrade full body builds."
        />
      </Helmet>

      <main className="min-h-screen bg-background pt-32 text-foreground">
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Fursuit Sizing Guide
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Custom Fursuit Measurement Guide
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Accurate measurements help your custom fursuit fit better, move better,
              and feel more comfortable to wear. Use this guide based on what you
              are ordering, whether it is only a head, paws, a partial suit, or a
              full body build.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-primary/25 bg-primary/10 p-6 text-center">
            <h2 className="text-2xl font-bold">Before You Start Measuring</h2>

            <p className="mx-auto mt-3 max-w-3xl leading-8 text-muted-foreground">
              Use a soft measuring tape and keep it snug, not tight. Stand naturally,
              do not pull your body in, and ask another person to help with body
              measurements. If you are between two numbers, write the larger number
              and add a short note.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <MeasurementCard
              title="Head Only Measurements"
              subtitle="For custom fursuit heads"
              items={headMeasurements}
            />

            <MeasurementCard
              title="Hand Paws Only Measurements"
              subtitle="For custom hand paws"
              items={handPawMeasurements}
            />

            <MeasurementCard
              title="Feet Paws Measurements"
              subtitle="For indoor or outdoor feet paws"
              items={feetPawMeasurements}
            />

            <MeasurementCard
              title="Partial Fursuit Measurements"
              subtitle="For head, paws, tail, and feet"
              items={partialMeasurements}
            />
          </div>

          <section className="mt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Full Body Suit Measurements
              </p>

              <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
                Plantigrade and digitigrade suits need different details
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                A plantigrade suit follows your natural leg shape. A digitigrade
                suit needs extra padding and shaping, so it requires more detailed
                leg measurements.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <MeasurementCard
                title="Plantigrade Full Suit"
                subtitle="Natural leg shape"
                items={plantigradeMeasurements}
              />

              <MeasurementCard
                title="Digitigrade Full Suit"
                subtitle="Padded animal leg shape"
                items={digitigradeExtraMeasurements}
              />
            </div>
          </section>

          <section className="mt-20 rounded-[2rem] border border-white/10 bg-card/70 p-6 shadow-elevated md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  Special Build Notes
                </p>

                <h2 className="mt-3 text-3xl font-extrabold">
                  Mention custom features before the quote
                </h2>

                <p className="mt-4 leading-8 text-muted-foreground">
                  Extra features can change the pattern, structure, price, and build
                  time. If your character needs special parts, mention them early so
                  the quote is planned properly from the start.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {optionalFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-background/60 px-4 py-3 text-sm font-semibold text-muted-foreground"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Helpful Measuring Tips
              </p>

              <h2 className="mt-3 text-3xl font-extrabold">
                Small mistakes can affect the final fit
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-card/70 p-6">
                <h3 className="text-xl font-bold">Do not measure over bulky clothes</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Wear fitted clothing so the measurements reflect your actual body
                  size.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-card/70 p-6">
                <h3 className="text-xl font-bold">Keep the tape level</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Chest, waist, hips, thighs, and calves should be measured evenly
                  around the body.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-card/70 p-6">
                <h3 className="text-xl font-bold">Send notes with your numbers</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  If you want extra room, padding, glasses space, or special comfort
                  needs, write that with your measurements.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center">
            <h2 className="text-3xl font-extrabold">
              Ready to send your measurements?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
              Share your reference sheet, build type, measurements, and special
              feature notes so FurNFurry can prepare a personalized quote for your
              custom fursuit.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition hover:scale-[1.02]"
              >
                Start Quote Request
              </Link>

            </div>
          </section>
        </section>
      </main>
    </>
  );
}