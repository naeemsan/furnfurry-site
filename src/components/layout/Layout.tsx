import { cn } from "@/lib/utils";
import { motion } from "motion/react";

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
    muted: "bg-card/40",
    lavender: "bg-accent/10",
    primary: "bg-primary",
    card: "bg-card",
  };

  return (
    <motion.section
      id={id}
      data-ocid={dataOcid}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={cn(
        "relative py-16 md:py-24",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </motion.section>
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
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn("mb-12", centered && "text-center", className)}
    >
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
    </motion.div>
  );
}