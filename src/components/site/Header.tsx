import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT } from "@/data/contact";

const NAV = [
  { to: "/events-recaps", label: "Events & Music Video", primary: true },
  { to: "/weddings", label: "Weddings" },
  { to: "/for-businesses", label: "B2B Commercial" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-block w-2 h-2 rounded-full bg-primary red-glow group-hover:scale-110 transition" />
          <span className="font-display text-lg md:text-xl tracking-wider">
            GOOD LOOKS<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-xs uppercase tracking-wider transition ${
                "primary" in n && n.primary
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          <a
            href={CONTACT.telHref}
            className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground flex items-center gap-2 transition"
            data-track-event="phone_click"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-md text-xs font-medium uppercase tracking-wider hover:opacity-90 red-glow"
            data-track-event="quote_cta_click"
            data-service-lane="event"
          >
            Request a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur border-t border-border">
          <nav className="flex flex-col p-4 gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`text-base py-3 px-2 border-b border-border ${
                  "primary" in n && n.primary ? "text-primary font-semibold" : "text-foreground"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={CONTACT.telHref}
              onClick={() => setOpen(false)}
              className="text-base py-3 px-2 border-b border-border text-foreground flex items-center gap-2"
              data-track-event="phone_click"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 bg-primary text-primary-foreground text-center py-3 rounded-md font-medium uppercase tracking-wider"
              data-track-event="quote_cta_click"
              data-service-lane="event"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
