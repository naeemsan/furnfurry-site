const blogs = [
  {
    title: "Custom Fursuit Price Guide 2026",
    description:
      "Learn how much a custom fursuit costs, what affects the price, and how to plan your budget.",
    category: "Pricing Guide",
    image: "/custom-fursuit-price-guide.jpg",
    link: "/blog/custom-fursuit-price-guide",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-background pt-32 text-foreground">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Blogs
          </h1>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <a
              key={blog.link}
              href={blog.link}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]"
            >

              <img
  src="/custom-fursuit-price-guide.jpg"
  alt="Custom fursuit full body example realistic"
  className="mt-8 w-full rounded-2xl border border-white/10 object-contain object-center"
/>

              <div className="p-5">
                <p className="text-xs font-semibold text-primary">
                  {blog.category}
                </p>

                <h2 className="mt-2 text-xl font-bold group-hover:text-primary">
                  {blog.title}
                </h2>

                <p className="mt-3 text-sm text-muted-foreground">
                  {blog.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-primary">
                  Read Blog →
                </p>
              </div>
            </a>
          ))}
        </div>

      </section>
    </main>
  );
}