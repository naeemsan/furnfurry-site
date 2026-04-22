import { PawPrint } from "@/components/ui/PawPrint";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 shadow-elevated backdrop-blur-md border-b border-border"
          : "bg-card border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
          aria-label="FurNFurry — back to top"
           >
             <img src="/logo.png" alt="FurNFurry" className="h-16 w-auto" />
            </button>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              data-ocid={`navbar.${link.label.toLowerCase()}.link`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => handleNav("#contact")}
            data-ocid="navbar.get_quote.primary_button"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-subtle hover:bg-primary/90 hover:shadow-elevated transition-smooth"
          >
            Get a Quote 
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-smooth hover:bg-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          data-ocid="navbar.hamburger.toggle"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="border-t border-border bg-card/98 backdrop-blur-md md:hidden"
          data-ocid="navbar.mobile_menu"
        >
          <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                data-ocid={`navbar.mobile.${link.label.toLowerCase()}.link`}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/8 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => handleNav("#contact")}
              data-ocid="navbar.mobile.get_quote.primary_button"
              className="mt-2 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground"
            >
              Get a Quote ✨
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
