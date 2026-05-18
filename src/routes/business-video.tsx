import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { BUSINESS_PACKAGES } from "@/data/packages";
import { absoluteUrl, serviceJsonLd } from "@/data/seo";

export const Route = createFileRoute("/business-video")({
  head: () => ({
    meta: [
      { title: "Business Video Production Rhode Island, CT & MA | Good Looks Media Group" },
      { name: "description", content: "Business video production for Rhode Island, Connecticut, and Massachusetts companies. Commercials, brand videos, testimonials, social ads, reels, and website video starting at $900." },
      { property: "og:title", content: "Business Video Production Rhode Island | Good Looks Media Group" },
      { property: "og:description", content: "Commercial video, brand films, website video, and social content for businesses across Rhode Island, Connecticut, Massachusetts, and New England." },
      { property: "og:url", content: absoluteUrl("/business-video") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/business-video") }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(serviceJsonLd({
        name: "Business Video Production in Rhode Island, Connecticut, and Massachusetts",
        description: "Commercials, brand videos, social ads, testimonials, reels, and website video for New England businesses.",
        path: "/business-video",
      })),
    }],
  }),
  component: BusinessPage,
});

const ADDONS = [
  ["Extra filming hour", "$100–$150"],
  ["Extra vertical clip", "$75–$150"],
  ["Captions / subtitles", "from $100"],
  ["Script help", "from $150"],
  ["Additional location", "from $150"],
  ["Rush edit", "Custom quote"],
  ["Monthly content retainer", "from $1,200 / month"],
];

function BusinessPage() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">● BUSINESS VIDEO</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-5xl">
            Video that helps people <span className="text-primary">understand</span>, trust, and buy from your business.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Brand videos, commercials, social ads, testimonials, and content libraries for Rhode Island businesses.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Packages" title="From a single promo to a full content library." />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {BUSINESS_PACKAGES.map(p => <PackageCard key={p.name} pkg={p} />)}
          </div>

          <div className="mt-10 bg-gradient-to-r from-primary/15 via-card to-card border border-primary/30 rounded-2xl p-7 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="timecode mb-2">● PREMIUM CUSTOM CAMPAIGNS</p>
              <h3 className="font-display text-2xl md:text-3xl uppercase">Starting at $4,500+</h3>
              <p className="text-muted-foreground mt-2 max-w-xl">Larger campaigns, multi-location shoots, commercials, training videos, recruitment videos, launch campaigns, or monthly content retainers.</p>
            </div>
            <Link to="/contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-md uppercase tracking-widest text-sm font-semibold whitespace-nowrap">Talk strategy</Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Add-ons" title="Scale up when you need to." />
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

      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Get a quote for your business.</h2>
          <Link to="/contact" className="mt-7 inline-block bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow">Request a quote</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
