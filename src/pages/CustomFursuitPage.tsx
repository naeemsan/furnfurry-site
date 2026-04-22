export function CustomFursuitPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* TOP */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Custom Fursuit Maker
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Custom Fursuit Maker for Full Body, Partial, and Head Commissions
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            FurNFurry is a custom fursuit maker creating full body fursuits,
            partial fursuits, custom fursuit heads, paws, tails, and character-based
            builds made to order. Every commission is designed around your fursona’s
            colors, markings, expression, and overall style.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mx-auto mt-14 max-w-4xl space-y-12">

          {/* WHAT IS */}
          <section>
            <h2 className="text-2xl font-bold">What is a custom fursuit?</h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              A custom fursuit is a made-to-order costume created specifically for your
              character. Unlike premade suits, a custom fursuit is built around your own
              fursona, including species, markings, colors, facial expression, body style,
              and special features.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              At FurNFurry, we create custom full body fursuits, partial fursuits, custom
              fursuit heads, paws, tails, and matching add-ons. Each project begins with
              your concept and is planned around your design goals, comfort needs, and
              final look.
            </p>
          </section>

          {/* OPTIONS */}
          <section>
            <h2 className="text-2xl font-bold">Our custom fursuit options</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border p-5">
                <h3 className="text-xl font-semibold">Full Body Fursuits</h3>
                <p className="mt-2 text-muted-foreground">
                  A complete custom fursuit built from head to toe for the full
                  character experience.
                </p>
              </div>

              <div className="rounded-2xl border border-border p-5">
                <h3 className="text-xl font-semibold">Partial Fursuits</h3>
                <p className="mt-2 text-muted-foreground">
                  A lighter setup that may include a head, paws, tail, and feet
                  paws depending on your preferences.
                </p>
              </div>

              <div className="rounded-2xl border border-border p-5">
                <h3 className="text-xl font-semibold">Custom Fursuit Heads</h3>
                <p className="mt-2 text-muted-foreground">
                  A custom head designed to match your fursona’s expression,
                  features, and overall style.
                </p>
              </div>

              <div className="rounded-2xl border border-border p-5">
                <h3 className="text-xl font-semibold">Paws, Tails, and Add-ons</h3>
                <p className="mt-2 text-muted-foreground">
                  Matching hand paws, feet paws, tails, and other details can be
                  added based on your character and final build plan.
                </p>
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section>
            <h2 className="text-2xl font-bold">How the process works</h2>

            <ol className="mt-4 space-y-2 text-muted-foreground">
              <li>1. Message us with your character reference</li>
              <li>2. Discuss design details and features</li>
              <li>3. Deposit secures your build slot</li>
              <li>4. Production begins with progress updates</li>
              <li>5. Final delivery once completed</li>
            </ol>
          </section>

          {/* PRICING */}
          <section>
            <h2 className="text-2xl font-bold">
              How much does a custom fursuit cost?
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Custom fursuit pricing depends on design complexity, materials,
              markings, body style, and the type of build you want. Full body
              fursuits, partial fursuits, and custom fursuit heads all vary in
              final cost depending on features and finishing details. Starting
              prices give a baseline, but every quote is personalized to your
              character.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-3xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold">
              Ready to start your custom fursuit?
            </h2>

            <p className="mt-3 text-muted-foreground">
              Tell us about your fursona and what kind of custom fursuit you want
              made. We’ll help you plan the right build for your character,
              style, and budget.
            </p>

            <a
              href="/#contact"
              className="mt-6 inline-flex rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Request a Quote
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}