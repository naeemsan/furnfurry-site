import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function scrollTo(href: string) {
  const id = href.replace("#", "");

  if (window.location.pathname === "/") {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    sessionStorage.setItem("scrollTarget", id);
    window.location.href = "/";
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

    // For section links (#)
    if (href.startsWith("#")) {
      scrollTo(href);
    } else {
      // For page routes (/custom-fursuit etc)
      window.location.href = href;
    }
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
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-3">

        {/* LOGO */}
        <button
          onClick={() => (window.location.href = "/")}
          className="group flex items-center gap-2"
        >
          <img
            src="/logo.png"
            alt="FurNFurry"
            className="h-16 w-auto transition duration-300 group-hover:scale-[1.04]"
          />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith("#")) {
                  e.preventDefault();
                  handleNav(link.href);
                }
              }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/10 hover:text-primary active:scale-[0.97]"
            >
              {link.label}
            </a>
          ))}

          {/* INFO DROPDOWN */}
          <div className="relative group ml-2">
            <button className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
              Info
            </button>

            <div className="absolute left-0 top-full hidden w-56 rounded-xl border border-border bg-card p-2 shadow-lg group-hover:block">

              <a href="/blog" className="block px-3 py-2 text-sm hover:bg-primary/10 rounded-lg">
                Blog
              </a>

              <a href="/terms" className="block px-3 py-2 text-sm hover:bg-primary/10 rounded-lg">
                Commission Terms
              </a>

              <a href="/shipping" className="block px-3 py-2 text-sm hover:bg-primary/10 rounded-lg">
                Shipping
              </a>

              <a href="/refund" className="block px-3 py-2 text-sm hover:bg-primary/10 rounded-lg">
                Refund Policy
              </a>

              <a href="/privacy" className="block px-3 py-2 text-sm hover:bg-primary/10 rounded-lg">
                Privacy
              </a>

              <a href="/measure" className="block px-3 py-2 text-sm hover:bg-primary/10 rounded-lg">
                How to Measure
              </a>

              <a href="/care" className="block px-3 py-2 text-sm hover:bg-primary/10 rounded-lg">
                Care Guide
              </a>

            </div>
          </div>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-card active:scale-[0.97] md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-border bg-card/95 backdrop-blur-md md:hidden">
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

            <a href="/blog" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10">
              Blog
            </a>

            <Button
              onClick={() => handleNav("#contact")}
              className="mt-3 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}