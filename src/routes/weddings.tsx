import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { WEDDING_PACKAGES } from "@/data/packages";
import { absoluteUrl, businessJsonLd, pageJsonLd, serviceJsonLd, websiteJsonLd } from "@/data/seo";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Rhode Island Wedding Videographer | Good Looks Media Group" },
      {
        name: "description",
        content:
          "Wedding highlight films and full stories for Rhode Island couples. Clear packages starting at $1,200. Watch samples and check your date.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Rhode Island Wedding Videographer | Good Looks Media Group" },
      {
        property: "og:description",
        content:
          "Wedding highlight films and full stories for Rhode Island couples. Clear packages starting at $1,200.",
      },
      { property: "og:url", content: absoluteUrl("/weddings") },
      { name: "twitter:title", content: "Rhode Island Wedding Videographer | Good Looks Media Group" },
      {
        name: "twitter:description",
        content:
          "Wedding highlight films and full stories for Rhode Island couples. Clear packages starting at $1,200.",
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
                "Wedding highlight films and full stories for Rhode Island and nearby New England couples.",
              path: "/weddings",
            }),
            serviceJsonLd({
              name: "Rhode Island Wedding Videographer",
              description:
                "Wedding teasers, highlight films, and full story edits for Rhode Island and nearby New England couples.",
              path: "/weddings",
            }),
          ],
        }),
      },
    ],
  }),
  component: WeddingsPage,
});

const DELIVERABLES = [
  "Filming coverage based on package",
  "Edited teaser or highlight film",
  "Audio moments when possible",
  "Color correction",
  "Online delivery",
  "Revisions based on package",
  "Optional add-ons by quote",
];

const FAQ = [
  {
    q: "What is the turnaround time?",
    a: "Turnaround depends on the package, season, and edit complexity. We will give you an estimated delivery window before booking.",
  },
  {
    q: "Do you travel outside Rhode Island?",
    a: "Yes. Rhode Island is home base. Weddings in nearby New England are available by quote.",
  },
  {
    q: "How many revisions are included?",
    a: "Most wedding packages include one reasonable revision round. Larger restructuring or extra versions may require an additional quote.",
  },
  {
    q: "What is the deposit to book?",
    a: "A non-refundable retainer reserves your date. The exact deposit depends on the package and will be listed in the quote.",
  },
  {
    q: "What format do I receive the final video in?",
    a: "Final films are delivered through an online link in web-ready formats. Vertical teaser exports can be added by package or quote.",
  },
  {
    q: "Do you film ceremonies and speeches?",
    a: "Yes. Ceremony and speech coverage can be included depending on the package and audio setup.",
  },
  {
    q: "Can we add extra hours?",
    a: "Yes. Extra coverage can be added by quote when the schedule needs more time.",
  },
  {
    q: "Do you travel for weddings outside Rhode Island?",
    a: "Yes. Massachusetts, Connecticut, and nearby New England weddings are available by quote.",
  },
];

function WeddingsPage() {
  useEffect(() => {
    trackEvent("wedding_page_view", { service_lane: "wedding" });
  }, []);

  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">WEDDINGS</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            Rhode Island Wedding Videographer
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Wedding films for Rhode Island and nearby New England couples who want the real
            moments, the energy, and the story of the day captured clearly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
              data-track-event="quote_cta_click"
              data-service-lane="wedding"
            >
              Request a Quote
            </Link>
            <a
              href="#wedding-packages"
              className="border border-foreground/30 text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
            >
              View Wedding Packages
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-black red-glow">
            <img
              src="/AdobeStock_2007799559.jpeg"
              alt="Wedding ceremony video coverage"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-3xl">
            Wedding samples are shared when couples clear projects for public use. We keep the
            process direct from inquiry to delivery, with timeline and turnaround discussed before
            booking.
          </p>
        </div>
      </section>

      <section id="wedding-packages" className="scroll-mt-32 py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="Rhode Island wedding videography packages."
            subtitle="Clear starting ranges. Every final quote depends on date, location, coverage time, audio needs, edit complexity, crew size, revisions, and deliverables."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {WEDDING_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Deliverables" title="What your wedding package can include." />
            <ul className="grid sm:grid-cols-2 gap-3">
              {DELIVERABLES.map((item) => (
                <li key={item} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-7 md:p-9">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="font-display text-4xl uppercase leading-none mt-4">
              Serving Rhode Island and nearby New England.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Planning a party, shower, or post-wedding event too? See{" "}
              <Link to="/events-recaps" className="text-primary underline underline-offset-4">
                event recap video Rhode Island
              </Link>
              . Need video for your venue or local brand? We also create{" "}
              <Link to="/for-businesses" className="text-primary underline underline-offset-4">
                commercial video for local businesses
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Wedding video questions." />
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="timecode mb-4">CHECK YOUR DATE</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] text-balance">
            Ready to talk wedding video?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Send the date, city, venue if you have one, and the kind of film you want. We will help
            shape the right package.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow"
              data-track-event="quote_cta_click"
              data-service-lane="wedding"
            >
              Request a Quote
            </Link>
            <Link
              to="/packages#weddings"
              className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2"
            >
              View Packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
