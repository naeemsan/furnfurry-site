import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div
      className={cn("min-h-screen bg-background text-foreground", className)}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "lavender" | "primary" | "card";
  "data-ocid"?: string;
}

export function Section({
  id,
  children,
  className,
  variant = "default",
  "data-ocid": dataOcid,
}: SectionProps) {
  const variantClasses = {
    default: "bg-background",
    muted: "bg-muted/40",
    lavender: "bg-accent/10",
    primary: "bg-primary",
    card: "bg-card",
  };

  return (
    <section
      id={id}
      data-ocid={dataOcid}
      className={cn(
        "relative py-16 md:py-24",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  badge?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  badge,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          light ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base md:text-lg",
            centered && "mx-auto",
            light ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
