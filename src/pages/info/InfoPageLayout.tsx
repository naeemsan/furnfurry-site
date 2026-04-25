import { Link } from "react-router-dom";

type InfoPageLayoutProps = {
  badge: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function InfoPageLayout({
  badge,
  title,
  subtitle,
  children,
}: InfoPageLayoutProps) {
  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-32 text-foreground sm:px-6">
      <section className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-semibold text-primary hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mb-10 rounded-[2rem] border border-primary/20 bg-card p-8 shadow-elevated md:p-10">
          <span className="mb-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            {badge}
          </span>

          <h1 className="font-display text-4xl font-extrabold md:text-5xl">
            {title}
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        </div>

        <div className="prose prose-invert max-w-none rounded-[2rem] border border-border bg-card/70 p-8 text-muted-foreground shadow-subtle md:p-10">
          {children}
        </div>
      </section>
    </main>
  );
}