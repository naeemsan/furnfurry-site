import { Helmet } from "react-helmet-async";
const galleryItems = [
  {
    name: "Forest Guardian",
    species: "Original Canine",
    image: "/gallery/forest-guardian-full-view.png",
    description:
      "A full body kemono style fursuit with clean front and back views, showing the full suit shape, tail structure, and fur pattern flow.",
    materials:
      "Premium faux fur, sculpted foam base, soft padding, durable stitching, and breathable inner lining.",
  },
  {
    name: "Pastel Bunny",
    species: "Rabbit",
    image: "/gallery/pastel-bunny-full-view.png",
    description:
      "A soft kemono style bunny fursuit with oversized ears, rounded features, and pastel tones for a cute and friendly character look.",
    materials:
      "High quality faux fur, lightweight foam structure, soft padding, reinforced seams, and comfortable interior lining.",
  },
  {
    name: "Blossom Bird",
    species: "Avian",
    image: "/gallery/blossom-bird-head.png",
    description:
      "A colorful toony style fursuit head with expressive features, bright contrast, and a playful character design.",
    materials:
      "Lightweight foam base, soft fabric finish, mesh vision system, and hand-shaped facial details.",
  },
  {
    name: "Red Panda Cub",
    species: "Red Panda",
    image: "/gallery/red-panda-head.png",
    description:
      "A cute kemono style red panda head with large expressive eyes, soft rounded features, and a friendly appearance.",
    materials:
      "Faux fur exterior, sculpted foam base, breathable lining, soft shaping, and detailed finishing.",
  },
];

export default function GalleryPage() {
  return (
  <>
    <Helmet>
      <title>Fursuit Gallery | Handmade Fursona Builds - FurNFurry</title>

      <meta
        name="description"
        content="Explore handmade furry suit builds, custom character heads, paws, tails, and full suits created for unique fursonas. See different styles, colors, and commission examples."
      />
    </Helmet>

    <main className="min-h-screen bg-background pt-32 text-foreground">
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Fursuit Gallery
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Explore different fursuit styles, species, and material finishes.
            Each suit can be customized based on your character design,
            measurements, and selected features.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {galleryItems.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
            >
              <div className="h-[520px] w-full overflow-hidden bg-black/20">
                <img
                  src={item.image}
                  alt={`${item.name} ${item.species} custom fursuit example`}
                  className="h-full w-full object-contain object-center transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.species}
                </p>

                <h2 className="mt-2 text-2xl font-bold">{item.name}</h2>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Materials:
                  </span>{" "}
                  {item.materials}
                </p>

                <a
                  href={`https://wa.me/18555578702?text=Hi%2C%20I%27m%20interested%20in%20a%20custom%20fursuit%20style%20similar%20to%20${encodeURIComponent(
                    item.name
                  )}.%20Can%20you%20guide%20me%3F`}
                  className="mt-5 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.03]"
                >
                  Get This Style
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-xs text-muted-foreground">
          All fursuits are handmade from the ground up using your character as the base. These images represent style possibilities, while every final piece is custom crafted to your exact design and fit.
          
          
        </p>
      </section>
    </main>
    </>
  );
}