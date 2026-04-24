import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

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
    scrollTo(href);
  };

  return (
    <header
      data-ocid="navbar"
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/55 shadow-[0_0_24px_rgba(168,85,247,0.16)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="group flex items-center gap-2"
          aria-label="FurNFurry — back to top"
        >
          <img
            src="/logo.png"
            alt="FurNFurry"
            className="h-16 w-auto transition duration-300 group-hover:scale-[1.04]"
          />
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              data-ocid={`navbar.${link.label.toLowerCase()}.link`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/10 hover:text-primary active:scale-[0.97]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            onClick={() => handleNav("#contact")}
            data-ocid="navbar.get_quote.primary_button"
            className="relative overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(139,92,246,0.38)] transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 hover:shadow-[0_0_38px_rgba(139,92,246,0.55)] active:scale-[0.97] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full"
          >
            <span className="relative z-10">Get a Quote</span>
          </Button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-card active:scale-[0.97] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          data-ocid="navbar.hamburger.toggle"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div
          className="border-t border-border bg-card/95 backdrop-blur-md md:hidden"
          data-ocid="navbar.mobile_menu"
        >
          <nav className="flex flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                data-ocid={`navbar.mobile.${link.label.toLowerCase()}.link`}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary active:scale-[0.98]"
              >
                {link.label}
              </a>
            ))}

            <Button
              onClick={() => handleNav("#contact")}
              data-ocid="navbar.mobile.get_quote.primary_button"
              className="mt-2 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(139,92,246,0.35)] transition-all duration-300 hover:bg-primary/90 active:scale-[0.98]"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}