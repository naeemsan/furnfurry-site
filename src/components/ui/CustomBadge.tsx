import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "popular"
  | "custom"
  | "flexible"
  | "madeToOrder"
  | "outline";

interface CustomBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-primary/10 text-primary border-primary/20",
  popular: "bg-secondary/20 text-secondary-foreground border-secondary/30",
  custom: "bg-accent/15 text-accent-foreground border-accent/25",
  flexible: "bg-primary/10 text-primary border-primary/20",
  madeToOrder: "bg-secondary/20 text-secondary-foreground border-secondary/30",
  outline: "bg-transparent text-muted-foreground border-border",
};

const labelMap: Record<string, BadgeVariant> = {
  Popular: "popular",
  "Most Popular": "popular",
  Custom: "custom",
  "Flexible Payments": "flexible",
  "Made to Order": "madeToOrder",
};

export function CustomBadge({
  children,
  variant,
  className,
}: CustomBadgeProps) {
  const childStr = typeof children === "string" ? children : "";
  const resolvedVariant = variant ?? labelMap[childStr] ?? "default";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variantClasses[resolvedVariant],
        className,
      )}
    >
      {children}
    </span>
  );
}
