import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Fursona Finder", href: "/fursona-finder" },
  { label: "Custom Fursuit", href: "/custom-fursuit" },
  { label: "Gallery", href: "/gallery" },
];

const INFO_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Commission Terms", href: "/terms" },
  { label: "Shipping", href: "/shipping" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Privacy", href: "/privacy" },
  { label: "How to Measure", href: "/measure" },
  { label: "Care Guide", href: "/care" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    window.location.href = href;
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/55 shadow-[0_0_24px_rgba(168,85,247,0.16)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-3 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNav("/")}
          className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center gap-2 sm:left-6 lg:left-8"
        >
          <img
            src="/logo.png"
            alt="FurNFurry"
            className="h-14 w-auto transition duration-300 hover:scale-[1.04]"
          />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/10 hover:text-primary active:scale-[0.97]"
            >
              {link.label}
            </a>
          ))}

          <div className="group relative ml-2">
            <button className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary">
              Info
            </button>

            <div className="absolute left-0 top-full hidden w-56 rounded-xl border border-border bg-card p-2 shadow-lg group-hover:block">
              {INFO_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <button
          className="absolute right-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-card active:scale-[0.97] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-card/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10"
              >
                {link.label}
              </a>
            ))}

            <div className="my-2 border-t border-white/10" />

            {INFO_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}