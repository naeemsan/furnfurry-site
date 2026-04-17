interface PawPrintProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export function PawPrint({
  className = "",
  size = 80,
  opacity = 0.07,
}: PawPrintProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Main pad */}
      <ellipse cx="50" cy="68" rx="22" ry="20" />
      {/* Top left toe */}
      <ellipse cx="25" cy="42" rx="10" ry="12" />
      {/* Top right toe */}
      <ellipse cx="75" cy="42" rx="10" ry="12" />
      {/* Middle left toe */}
      <ellipse cx="37" cy="32" rx="9" ry="11" />
      {/* Middle right toe */}
      <ellipse cx="63" cy="32" rx="9" ry="11" />
    </svg>
  );
}

export function PawBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <PawPrint
        className="absolute -top-8 -left-8 text-primary rotate-[-20deg]"
        size={120}
        opacity={0.06}
      />
      <PawPrint
        className="absolute top-1/4 -right-10 text-secondary rotate-[15deg]"
        size={100}
        opacity={0.08}
      />
      <PawPrint
        className="absolute bottom-12 left-1/4 text-primary rotate-[30deg]"
        size={90}
        opacity={0.05}
      />
      <PawPrint
        className="absolute -bottom-6 right-1/3 text-accent rotate-[-10deg]"
        size={140}
        opacity={0.04}
      />
      <PawPrint
        className="absolute top-1/2 left-1/2 text-secondary rotate-[45deg]"
        size={70}
        opacity={0.06}
      />
    </div>
  );
}
