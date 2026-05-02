import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Custom Fursuit", href: "/custom-fursuit" },
  { label: "Gallery", href: "/gallery" },
  { label: "Commissions", href: "#commissions" },
  { label: "Pricing", href: "#pricing" },
  { label: "What We Make", href: "#what-we-make" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

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

    if (href.startsWith("#")) {
      scrollTo(href);
    } else {
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
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-3 sm:px-6 lg:px-8">
        {/* LOGO LEFT */}
        <button
          onClick={() => (window.location.href = "/")}
          className="absolute left-4 top-1/2 -translate-y-1/2 group flex items-center gap-2 sm:left-6 lg:left-8"
        >
          <img
            src="/logo.png"
            alt="FurNFurry"
            className="h-14 w-auto transition duration-300 group-hover:scale-[1.04]"
          />
        </button>

        {/* DESKTOP NAV CENTER */}
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

          {/* INFO DROPDOWN */}
          <div className="relative group ml-2">
            <button className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary">
              Info
            </button>

            <div className="absolute left-0 top-full hidden w-56 rounded-xl border border-border bg-card p-2 shadow-lg group-hover:block">
              <a
                href="/blog"
                className="block rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
              >
                Blog
              </a>

              <a
                href="/terms"
                className="block rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
              >
                Commission Terms
              </a>

              <a
                href="/shipping"
                className="block rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
              >
                Shipping
              </a>

              <a
                href="/refund"
                className="block rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
              >
                Refund Policy
              </a>

              <a
                href="/privacy"
                className="block rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
              >
                Privacy
              </a>

              <a
                href="/measure"
                className="block rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
              >
                How to Measure
              </a>

              <a
                href="/care"
                className="block rounded-lg px-3 py-2 text-sm hover:bg-primary/10"
              >
                Care Guide
              </a>
            </div>
          </div>
        </nav>

        {/* MOBILE BUTTON RIGHT */}
        <button
          className="absolute right-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-all duration-200 hover:scale-[1.03] hover:bg-card active:scale-[0.97] md:hidden"
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

            <a
              href="/blog"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10"
            >
              Blog
            </a>

            <a
              href="/terms"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10"
            >
              Commission Terms
            </a>

            <a
              href="/shipping"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10"
            >
              Shipping
            </a>

            <a
              href="/refund"
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/10"
            >
              Refund Policy
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