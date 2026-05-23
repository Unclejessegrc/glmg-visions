import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { WEDDING_PACKAGES } from "@/data/packages";
import { absoluteUrl, businessJsonLd, pageJsonLd, serviceJsonLd, websiteJsonLd } from "@/data/seo";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Rhode Island Wedding Videographer | Good Looks Media Group" },
      {
        name: "description",
        content:
          "Good Looks Media Group is a Rhode Island wedding videographer creating cinematic wedding films, highlight videos, ceremony coverage, reception coverage, drone footage, and social media wedding teasers across Rhode Island and New England.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Rhode Island Wedding Videographer | Good Looks Media Group",
      },
      {
        property: "og:description",
        content:
          "Good Looks Media Group creates cinematic wedding films, highlight videos, ceremony coverage, reception coverage, drone footage, and social media wedding teasers across Rhode Island and New England.",
      },
      { property: "og:url", content: absoluteUrl("/weddings") },
      {
        name: "twitter:title",
        content: "Rhode Island Wedding Videographer | Good Looks Media Group",
      },
      {
        name: "twitter:description",
        content:
          "Cinematic wedding films, ceremony coverage, reception coverage, drone footage, and social media wedding teasers across Rhode Island and New England.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/weddings") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            businessJsonLd(),
            websiteJsonLd(),
            pageJsonLd({
              name: "Rhode Island Wedding Videographer",
              description:
                "Good Looks Media Group is a Rhode Island wedding videographer creating cinematic wedding films across Rhode Island and New England.",
              path: "/weddings",
            }),
            serviceJsonLd({
              name: "Wedding Videography",
              description:
                "Cinematic wedding films, ceremony coverage, reception coverage, highlight films, drone wedding footage, social media wedding teasers, and full wedding stories for couples in Rhode Island and New England.",
              path: "/weddings",
            }),
          ],
        }),
      },
    ],
  }),
  component: WeddingsPage,
});

const WEDDING_SERVICES = [
  "Ceremony coverage",
  "Reception coverage",
  "Cinematic highlight films",
  "Full ceremony edits",
  "Toasts and speeches",
  "Drone wedding footage",
  "Social media teaser edits",
  "Elopements and small weddings",
];

const WHY_COUPLES_CHOOSE_US = [
  "Two-person video team",
  "Direct communication with the people filming and editing",
  "Cinematic but natural style",
  "Wedding films that feel personal, not generic",
  "Drone footage available when weather, location, airspace rules, and licensing allow",
  "Flexible packages for small weddings, elopements, and full wedding days",
];

const ADDONS = [
  ["Extra coverage hour", "$75–$125 / hr"],
  ["Second videographer", "Starting at $350"],
  [
    "Drone footage",
    "Starting at $200 (weather, location, airspace rules, and licensing permitting)",
  ],
  ["Raw footage", "Starting at $200"],
  ["48-hour teaser", "Starting at $150"],
  ["Rehearsal dinner coverage", "Custom quote"],
  ["Vertical social clip bundle", "Starting at $150"],
];

const FAQ = [
  {
    q: "How far in advance should we book?",
    a: "Most couples book 6–12 months out. Peak season fills up fast — earlier is better, but we'll always check availability if your date is soon.",
  },
  {
    q: "Do you travel?",
    a: "Yes. Rhode Island is home base. Massachusetts and the rest of New England are by quote. Travel beyond the planned shoot radius gets factored into the quote.",
  },
  {
    q: "When do we get the final film?",
    a: "Standard turnaround is 6–10 weeks depending on package. A 48-hour teaser is available as an add-on.",
  },
  {
    q: "How many revisions?",
    a: "One round of revisions on the final film is included. Additional revisions are billed hourly.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes — a non-refundable retainer reserves your date. The balance is due before final delivery.",
  },
];

function WeddingsPage() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">● WEDDINGS</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            Rhode Island Wedding <span className="text-primary">Videographer</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Good Looks Media Group is a Rhode Island wedding videographer creating cinematic,
            personal wedding films for couples across Rhode Island, Massachusetts, Connecticut, and
            New England. We film ceremonies, receptions, speeches, first looks, drone footage,
            highlight films, teasers, and full wedding stories.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
            >
              Check Availability
            </Link>
            <a
              href="/packages#weddings"
              className="border border-foreground/30 text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
            >
              Wedding Packages
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Wedding Services"
            title="Wedding Videography Services in Rhode Island"
            subtitle="Coverage can stay simple for an elopement or expand into a fuller wedding story with ceremony, reception, speeches, teasers, and add-ons."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WEDDING_SERVICES.map((service) => (
              <article
                key={service}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition"
              >
                <p className="timecode mb-3">Wedding Film</p>
                <h2 className="font-display text-2xl uppercase leading-tight">{service}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-black red-glow">
            <img
              src="/AdobeStock_2007799559.jpeg"
              alt="Outdoor wedding ceremony with drone videography"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p className="timecode mb-3">● LOCAL WEDDINGS</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
              Rhode Island Wedding Locations We Serve
            </h2>
          </div>
          <div className="bg-card border border-border rounded-2xl p-7 md:p-9">
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are based in Rhode Island and available for wedding videography throughout
              Providence, Warwick, Cranston, Newport, Pawtucket, East Providence, South County,
              Bristol, and Narragansett. We also film weddings in Massachusetts, Connecticut, and
              the greater New England area by quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Good Looks"
            title="Why Couples Choose Good Looks Media Group"
            subtitle="A wedding film should feel like your day, not a template. We keep the process clear, personal, and close to the people doing the actual filming and editing."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_COUPLES_CHOOSE_US.map((point) => (
              <article key={point} className="bg-card border border-border rounded-2xl p-6">
                <p className="timecode mb-3">Good Looks</p>
                <h2 className="font-display text-2xl uppercase leading-tight">{point}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="Three ways to film your day."
            subtitle="Every wedding gets a custom final quote. These are introductory starting ranges."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {WEDDING_PACKAGES.map((p) => (
              <PackageCard key={p.name} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Add-ons" title="Make it yours." />
          <div className="grid sm:grid-cols-2 gap-3">
            {ADDONS.map(([name, price]) => (
              <div
                key={name}
                className="flex justify-between items-center bg-card border border-border rounded-lg p-4"
              >
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
          <p className="mt-3 text-muted-foreground">
            Tell us when, where, and what you're imagining. We'll come back with a real quote.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-block bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow"
          >
            Check Availability
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
