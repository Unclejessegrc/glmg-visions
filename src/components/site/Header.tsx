import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/weddings", label: "Weddings" },
  { to: "/business-video", label: "Business" },
  { to: "/events-recaps", label: "Events" },
  { to: "/music-videos", label: "Music" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-block w-2 h-2 rounded-full bg-primary red-glow group-hover:scale-110 transition" />
          <span className="font-display text-xl md:text-2xl tracking-wider">
            GOOD LOOKS<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+14015551234"
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5"
            data-analytics="click_call"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium uppercase tracking-wider hover:opacity-90 red-glow"
            data-analytics="cta_click_pricing"
          >
            Get Pricing
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
                className="text-lg py-3 px-2 border-b border-border text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 bg-primary text-primary-foreground text-center py-3 rounded-md font-medium uppercase tracking-wider"
            >
              Get Pricing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
