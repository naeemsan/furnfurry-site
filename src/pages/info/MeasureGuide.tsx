import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const headMeasurements = [
  "Head circumference around the widest part of your head",
  "Neck circumference where the fursuit head will sit",
  "Chin to top of head height",
  "Forehead to back of head depth",
  "Face width from cheek to cheek",
  "Shoulder to top of head height if you want a bigger mascot style head",
  "Glasses, piercings, hair volume, or comfort notes if needed",
];

const headBaseNotes = [
  "Foam base heads are shaped by hand and are best for soft, toony, plush, kemono, and expressive character styles",
  "3D printed head bases can help with cleaner symmetry, lighter structure, planned airflow, and sharper character accuracy",
  "Both head base types still need fur work, eyes, lining, markings, shaving, and final finishing",
  "The best head base depends on your character design, expression, budget, and how you plan to wear the suit",
];

const handPawMeasurements = [
  "Wrist circumference",
  "Palm width across the widest part of your hand",
  "Hand length from wrist to middle fingertip",
  "Middle finger length",
  "Thumb length if the paw design needs separated fingers",
  "Preferred paw style such as slim, plush, kemono, toony, puffy, or finger escape style",
];

const feetPawMeasurements = [
  "Foot length from heel to longest toe",
  "Foot width at the widest point",
  "Regular shoe size",
  "Ankle circumference",
  "Indoor sole or outdoor sole preference",
  "Desired paw size such as natural, oversized, plush, or mascot style",
];

const partialMeasurements = [
  "Head circumference",
  "Neck circumference",
  "Wrist circumference",
  "Palm width",
  "Hand length",
  "Foot length if feet paws are included",
  "Foot width if feet paws are included",
  "Shoe size if feet paws are included",
  "Tail placement height from waist or belt line",
  "Tail length preference",
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
  "Movement notes if you want easier walking, sitting, or convention wear",
];

const optionalFeatures = [
  "Follow me eyes",
  "Printed mesh eyes",
  "Interchangeable eyelids",
  "Sleepy or angry eyelids",
  "Removable antlers",
  "Magnetic horns",
  "Magnetic accessories",
  "Cooling fan",
  "LED details",
  "Moving jaw",
  "Removable tongue",
  "Indoor soles",
  "Outdoor soles",
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
          <li
            key={item}
            className="flex gap-3 text-sm leading-7 text-muted-foreground"
          >
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
          content="FurNFurry measurement guide for custom fursuit heads, 3D printed head bases, hand paws, feet paws, partial suits, plantigrade suits, and digitigrade full body fursuits."
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
              Accurate measurements help your custom fursuit fit better, move
              better, and feel more comfortable to wear. Use this guide based on
              what you are ordering, whether it is a custom head, 3D printed head
              base, paws, partial suit, plantigrade suit, or digitigrade full
              body fursuit.
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-primary/25 bg-primary/10 p-6 text-center">
            <h2 className="text-2xl font-bold">Before You Start Measuring</h2>

            <p className="mx-auto mt-3 max-w-3xl leading-8 text-muted-foreground">
              Use a soft measuring tape and keep it snug, not tight. Stand
              naturally, avoid bulky clothing, and ask another person to help
              with full body measurements. If you are between two numbers, send
              the larger number and add a short note.
            </p>
          </div>

          <section className="mt-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Head and Paw Measurements
              </p>

              <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
                Start with the parts you are ordering
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                A head only order needs different measurements than paws, feet
                paws, or a partial suit. Send clear numbers and mention any
                comfort needs before the quote.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <MeasurementCard
                title="Head Only Measurements"
                subtitle="For foam or 3D printed fursuit heads"
                items={headMeasurements}
              />

              <MeasurementCard
                title="Foam and 3D Printed Head Notes"
                subtitle="Head base planning"
                items={headBaseNotes}
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
          </section>

          <section className="mt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Full Body Suit Measurements
              </p>

              <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
                Plantigrade and digitigrade suits need different details
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                A plantigrade fursuit follows your natural leg shape. A
                digitigrade fursuit needs extra padding and animal style leg
                shaping, so it requires more detailed leg measurements.
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
                  Special features can change the pattern, head base, structure,
                  price, and build time. If your character needs extra parts,
                  mention them early so the quote is planned properly from the
                  start.
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
                <h3 className="text-xl font-bold">
                  Do not measure over bulky clothes
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Wear fitted clothing so the measurements reflect your actual
                  body size.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-card/70 p-6">
                <h3 className="text-xl font-bold">Keep the tape level</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  Chest, waist, hips, thighs, and calves should be measured
                  evenly around the body.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-card/70 p-6">
                <h3 className="text-xl font-bold">
                  Send notes with your numbers
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  If you want extra room, padding, glasses space, easier
                  movement, or special comfort needs, write that with your
                  measurements.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20 rounded-[2rem] border border-primary/30 bg-primary/10 p-8 text-center">
            <h2 className="text-3xl font-extrabold">
              Ready to send your measurements?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
              Share your reference sheet, build type, measurements, preferred
              head base, and special feature notes so FurNFurry can prepare a
              personalized quote for your custom fursuit.
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