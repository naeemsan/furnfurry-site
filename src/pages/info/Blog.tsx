import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const blogs = [
  {
    title: "Custom Fursuit Price Guide 2026",
    description:
      "Learn how much a custom fursuit costs, what affects the price, and how to plan your budget.",
    category: "Pricing Guide",
    image: "/custom-fursuit-price-guide.jpg",
    link: "/blog/custom-fursuit-price-guide",
  },
  {
    title: "What Is the Furry Fandom?",
    description:
      "A beginner friendly guide explaining fursonas, fursuits, and the furry community.",
    category: "Fandom Guide",
    image: "/what-is-furry-fandom.jpg",
    link: "/blog/what-is-the-furry-fandom",
  },
  {
    title: "Why Are Custom Fursuits So Expensive?",
    description:
      "Learn what drives fursuit cost, from labor and materials to fit, comfort, character accuracy, and custom design.",
    category: "Fursuit Cost",
    image: "/fursuit-cost-guide-infographic.png",
    link: "/blog/why-are-custom-fursuits-so-expensive",
  },
  {
    title: "Partial Fursuit vs Full Fursuit: Which Should You Choose?",
    description:
      "Compare partial and full fursuits by budget, comfort, heat, storage, character design, and long-term care.",
    category: "Buying Guide",
    image: "/partial-vs-full-hero.png",
    link: "/blog/partial-fursuit-vs-full-fursuit",
  },
  {
    title: "How to Commission Your First Custom Fursuit Without Getting Overwhelmed",
    description:
      "Learn how to commission your first custom fursuit with confidence, from budget and references to measurements, shipping, and refunds.",
    category: "First Commission Guide",
    image: "/hero-first-guide.png",
    link: "/blog/how-to-commission-your-first-custom-fursuit",
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>FurNFurry Blog | Custom Fursuit Guides</title>
        <meta
          name="description"
          content="Read FurNFurry guides about custom fursuit pricing, commissions, measurements, care, partial suits, full suits, and furry fandom basics."
        />
      </Helmet>

      <main className="min-h-screen bg-background pt-32 text-foreground">
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
              FurNFurry Guides
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Custom Fursuit Blog
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Helpful guides for custom fursuit buyers, from pricing and
              measurements to partial suits, full suits, care, and commissions.
            </p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.link}
                to={blog.link}
                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-card/70 shadow-subtle transition duration-300 hover:-translate-y-2 hover:border-primary/45 hover:shadow-elevated"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    {blog.category}
                  </p>

                  <h2 className="mt-3 line-clamp-2 text-2xl font-extrabold leading-tight text-foreground">
                    {blog.title}
                  </h2>

                  <p className="mt-4 line-clamp-3 flex-1 leading-7 text-muted-foreground">
                    {blog.description}
                  </p>

                  <div className="mt-6 inline-flex items-center text-sm font-bold text-primary">
                    Read Blog
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}