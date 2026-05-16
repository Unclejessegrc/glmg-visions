import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { WEDDING_PACKAGES } from "@/data/packages";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Wedding Videographer Rhode Island | Good Looks Media Group" },
      { name: "description", content: "Cinematic wedding films in Rhode Island, Providence, Newport, and across New England. Highlight films, ceremony edits, social clips. Packages starting at $1,800." },
      { property: "og:title", content: "Wedding Videographer Rhode Island | Good Looks Media Group" },
      { property: "og:description", content: "Wedding films that feel like the day, not just a recap." },
      { property: "og:url", content: "/weddings" },
    ],
    links: [{ rel: "canonical", href: "/weddings" }],
  }),
  component: WeddingsPage,
});

const ADDONS = [
  ["Extra coverage hour", "$100–$150 / hr"],
  ["Second videographer", "from $500"],
  ["Drone footage", "from $300 (weather + airspace permitting)"],
  ["Raw footage", "from $300"],
  ["48-hour teaser", "from $250"],
  ["Rehearsal dinner coverage", "Custom quote"],
  ["Vertical social clip bundle", "from $250"],
];

const FAQ = [
  { q: "How far in advance should we book?", a: "Most couples book 6–12 months out. Peak season fills up fast — earlier is better, but we'll always check availability if your date is soon." },
  { q: "Do you travel?", a: "Yes. Rhode Island is home base. Massachusetts and the rest of New England are by quote. Travel beyond the planned shoot radius gets factored into the quote." },
  { q: "When do we get the final film?", a: "Standard turnaround is 6–10 weeks depending on package. A 48-hour teaser is available as an add-on." },
  { q: "How many revisions?", a: "One round of revisions on the final film is included. Additional revisions are billed hourly." },
  { q: "Is a deposit required?", a: "Yes — a non-refundable retainer reserves your date. The balance is due before final delivery." },
];

function WeddingsPage() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">● WEDDINGS</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            Wedding films that feel like <span className="text-primary">the day</span>, not just a recap.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Rhode Island wedding videography from a two-person team. Cinematic, intimate, and personal.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-black red-glow">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" className="w-full h-full" loading="lazy" title="Wedding reel" allowFullScreen />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Packages" title="Three ways to film your day." subtitle="Every wedding gets a custom quote. These are starting points." />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {WEDDING_PACKAGES.map(p => <PackageCard key={p.name} pkg={p} />)}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Add-ons" title="Make it yours." />
          <div className="grid sm:grid-cols-2 gap-3">
            {ADDONS.map(([name, price]) => (
              <div key={name} className="flex justify-between items-center bg-card border border-border rounded-lg p-4">
                <span className="font-medium">{name}</span>
                <span className="text-primary text-sm">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions." />
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Check your date.</h2>
          <p className="mt-3 text-muted-foreground">Tell us when, where, and what you're imagining. We'll come back with a real quote.</p>
          <Link to="/contact" className="mt-7 inline-block bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow">Check Availability</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
