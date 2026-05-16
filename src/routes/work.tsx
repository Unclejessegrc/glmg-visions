import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { PORTFOLIO, CATEGORIES } from "@/data/portfolio";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work | Rhode Island Video Portfolio | Good Looks Media Group" },
      { name: "description", content: "Browse wedding films, music videos, business ads, event recaps, and more from Rhode Island videographer Good Looks Media Group." },
      { property: "og:title", content: "Our Work — Good Looks Media Group" },
      { property: "og:description", content: "Filterable portfolio of Rhode Island video production work." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [cat, setCat] = useState<string>("All");
  const filtered = cat === "All" ? PORTFOLIO : PORTFOLIO.filter(p => p.category === cat);

  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">● PORTFOLIO</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            The work. <span className="text-primary">Pick a lane.</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Filter by project type. Click any project to play. Want something like one of these? Tap "I want something like this."
          </p>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition ${
                  cat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <div key={p.id} className="contents">
                <PortfolioCard item={p} />
                {(i + 1) % 6 === 0 && (
                  <Link
                    to="/packages"
                    className="sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-primary/20 via-card to-card border border-primary/30 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary transition"
                  >
                    <div>
                      <p className="timecode mb-2">● NOT SURE WHAT FITS?</p>
                      <p className="font-display text-2xl md:text-3xl uppercase">Match me with a package</p>
                    </div>
                    <span className="bg-primary text-primary-foreground px-6 py-3 rounded-md uppercase tracking-widest text-sm font-semibold">See packages →</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No projects in this category yet — but we still film it. <Link to="/contact" className="text-primary underline">Ask us about it.</Link></p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
