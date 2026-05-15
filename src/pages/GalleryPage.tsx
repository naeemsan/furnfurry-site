import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const galleryItems = [
  {
    name: "Forest Guardian",
    species: "Original Canine",
    image: "/gallery/forest-guardian-full-view.png",
    description:
      "This full body canine suit shows a clean front and back view with a bold green palette, balanced markings, and a strong character silhouette. It is a good example for clients who want a complete suit with a clear body shape and readable markings.",
    materials:
      "Premium faux fur, sculpted foam structure, soft body padding, reinforced stitching, breathable lining, hand shaped tail work.",
  },
  {
    name: "Pastel Bunny",
    species: "Rabbit",
    image: "/gallery/pastel-bunny-full-view.png",
    description:
      "A soft bunny build with oversized ears, rounded shapes, and gentle pastel colors. This kind of design works well for cute characters that need a friendly, playful, and convention ready look.",
    materials:
      "Soft faux fur, lightweight foam base, plush padding, reinforced seams, comfortable inner lining, hand finished details.",
  },
  {
    name: "Blossom Bird",
    species: "Avian",
    image: "/gallery/blossom-bird-head.png",
    description:
      "A bright bird head with a playful expression, strong color contrast, and a cheerful face shape. It is a fun direction for characters that need personality, charm, and a more animated look.",
    materials:
      "Lightweight foam base, soft fabric finish, mesh vision area, hand shaped beak work, detailed facial shaping.",
  },
  {
    name: "Red Panda Cub",
    species: "Red Panda",
    image: "/gallery/red-panda-head.png",
    description:
      "A warm red panda head with soft rounded cheeks, large expressive eyes, and a sweet friendly expression. This style fits cozy characters with gentle energy and a soft mascot feel.",
    materials:
      "Faux fur exterior, carved foam base, breathable lining, soft shaping, detailed facial finish, comfortable interior.",
  },
  {
    name: "Aurelian Wolf Head",
    species: "Wolf Canine",
    image: "/gallery/head-wolf-brown.jpg",
    description:
      "A cream and brown canine head with layered face markings, expressive follow me eyes, and a friendly open mouth look. It feels confident without looking too intense, which makes it a strong choice for approachable wolf characters.",
    materials:
      "Luxury faux fur, soft foam base, follow me mesh eyes, fleece details, sculpted nose, lined interior.",
  },
  {
    name: "Calico Lynx Head",
    species: "Lynx Fox Inspired",
    image: "/gallery/head-calico-kemono.jpg",
    description:
      "A character focused head with mixed calico markings, oversized ears, fluffy cheek fur, and purple eyes. The design has a softer kemono inspired feel while still keeping a clear handmade character presence.",
    materials:
      "Premium faux fur, carved foam structure, printed mesh eyes, fleece accents, hand cut markings, comfortable lining.",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Fursuit Gallery | Handmade Fursona Builds | FurNFurry</title>

        <meta
          name="description"
          content="Explore handmade custom fursuit examples by FurNFurry, including fursuit heads, full suits, kemono inspired builds, toony styles, and character focused commission ideas."
        />
      </Helmet>

      <main className="min-h-screen bg-background pt-32 text-foreground">
        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Handmade Build Showcase
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
              Fursuit Gallery
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              A look at different character styles, suit shapes, fur choices,
              and handmade finishing details. Every build starts with your own
              character design and is adjusted around the look you want.
            </p>
          </motion.div>

          <div className="mt-16 space-y-10">
            {galleryItems.map((item, index) => {
              const reversed = index % 2 !== 0;

              return (
                <motion.article
                  key={item.name}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-elevated transition hover:border-primary/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-2 ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative min-h-[360px] overflow-hidden bg-black/20 lg:min-h-[520px]">
                      <img
                        src={item.image}
                        alt={`${item.name} custom fursuit example by FurNFurry`}
                        className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.035]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">
                        {item.species}
                      </p>

                      <h2 className="mt-3 text-3xl font-bold">
                        {item.name}
                      </h2>

                      <p className="mt-5 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="mt-6 rounded-2xl border border-white/10 bg-background/40 p-5">
                        <p className="text-xs font-bold uppercase tracking-widest text-primary">
                          Materials and Finish
                        </p>

                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {item.materials}
                        </p>
                      </div>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a
                          href="/quote"
                          className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:scale-[1.02]"
                        >
                          Request Similar Build
                        </a>

                        <a
                          href="/custom-fursuit"
                          className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-5 py-3 text-sm font-bold transition hover:border-primary/40 hover:text-primary"
                        >
                          View Commission Details
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-card/70 p-6 text-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm leading-7 text-muted-foreground">
              These examples are here to show possible styles, shapes, and
              finishing directions. Your final fursuit is made around your own
              character, measurements, colors, markings, and comfort needs.
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
}