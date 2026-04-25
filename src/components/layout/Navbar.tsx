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
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-black/55 shadow-[0_0_24px_rgba(168,85,247,0.16)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <button
          onClick={() => handleNav("#home")}
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
                e.preventDefault();
                handleNav(link.href);
              }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-primary/10 hover:text-primary active:scale-[0.97]"
            >
              {link.label}
            </a>
          ))}

          {/* 🔥 INFO DROPDOWN */}
          <div className="relative group ml-2">
            <button className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary">
              Info
            </button>

            <div className="absolute left-0 top-full hidden w-56 rounded-xl border border-border bg-card p-2 shadow-lg group-hover:block">
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

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => handleNav("#contact")}
            className="relative overflow-hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_0_28px_rgba(139,92,246,0.38)] transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 hover:shadow-[0_0_38px_rgba(139,92,246,0.55)] active:scale-[0.97] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full"
          >
            <span className="relative z-10">Get a Quote</span>
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
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

            {/* MOBILE INFO */}
            <div className="mt-2 border-t border-border pt-2">
              <p className="px-3 text-xs text-muted-foreground mb-2">Info</p>
              <a href="/terms" className="block px-3 py-2 text-sm">Commission Terms</a>
              <a href="/shipping" className="block px-3 py-2 text-sm">Shipping</a>
              <a href="/refund" className="block px-3 py-2 text-sm">Refund</a>
              <a href="/privacy" className="block px-3 py-2 text-sm">Privacy</a>
            </div>

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