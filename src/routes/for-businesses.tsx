import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Briefcase, Check, Quote, Smartphone, Video } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { BUSINESS_PACKAGES } from "@/data/packages";
import { absoluteUrl, pageJsonLd, serviceJsonLd } from "@/data/seo";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/for-businesses")({
  head: () => ({
    meta: [
      { title: "Commercial Video for Rhode Island Businesses | Good Looks Media Group" },
      {
        name: "description",
        content:
          "Website video, reels, and testimonials for Rhode Island businesses. No giant agency process. Packages start at $600. Get a fast quote.",
      },
      { property: "og:title", content: "Commercial Video for Rhode Island Businesses | Good Looks Media Group" },
      {
        property: "og:description",
        content:
          "Website video, reels, and testimonials for Rhode Island businesses. No giant agency process. Packages start at $600.",
      },
      { property: "og:url", content: absoluteUrl("/for-businesses") },
      { name: "twitter:title", content: "Commercial Video for Rhode Island Businesses | Good Looks Media Group" },
      {
        name: "twitter:description",
        content:
          "Website video, reels, and testimonials for Rhode Island businesses. No giant agency process. Packages start at $600.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/for-businesses") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            pageJsonLd({
              name: "Commercial Video for Rhode Island Businesses",
              description:
                "Website video, reels, testimonials, ads, and brand content for Rhode Island businesses.",
              path: "/for-businesses",
            }),
            serviceJsonLd({
              name: "Commercial Video for Rhode Island Businesses",
              description:
                "Website video, reels, testimonials, ads, and brand content for Rhode Island businesses.",
              path: "/for-businesses",
            }),
          ],
        }),
      },
    ],
  }),
  component: ForBusinessesPage,
});

const USES = [
  ["Website Video", Video],
  ["Testimonials", Quote],
  ["Reels and Social Content", Smartphone],
  ["Ads and Campaign Assets", Briefcase],
];

const DELIVERABLES = [
  "Filming",
  "Editing",
  "Short-form cutdowns",
  "Website-ready video",
  "Social-ready exports",
  "Revisions based on package",
  "Online delivery",
];

const FAQ = [
  {
    q: "What is the turnaround time?",
    a: "Turnaround depends on shoot size, interviews, number of deliverables, and revision needs. We will give you an estimated delivery window before booking.",
  },
  {
    q: "Do you travel outside Rhode Island?",
    a: "Yes. Rhode Island is home base. Nearby New England business video projects are available by quote.",
  },
  {
    q: "How many revisions are included?",
    a: "Most business video projects include one reasonable revision round. Larger changes, extra versions, or new creative direction may require an additional quote.",
  },
  {
    q: "What is the deposit to book?",
    a: "A non-refundable retainer reserves the shoot date. The exact deposit depends on the package and final scope.",
  },
  {
    q: "What format do I receive the final video in?",
    a: "Final videos are delivered through an online link in web-ready and social-ready formats based on the package.",
  },
  {
    q: "Can you film testimonials?",
    a: "Yes. Customer, client, founder, and team testimonials can be planned as a standalone shoot or part of a brand package.",
  },
  {
    q: "Can you create reels from the shoot?",
    a: "Yes. Short-form cutdowns and vertical reels can be included in the package or added by quote.",
  },
  {
    q: "Can this be used for ads?",
    a: "Yes. We can export ad-ready versions when you know the platform, length, and format you need.",
  },
  {
    q: "Can we book a content day?",
    a: "Yes. Campaign Kit and custom business quotes can be built around content days with multiple edits.",
  },
];

function ForBusinessesPage() {
  useEffect(() => {
    trackEvent("business_page_view", { service_lane: "business" });
  }, []);

  return (
    <SiteLayout>
      <section className="pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-4">B2B COMMERCIAL - RHODE ISLAND</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] max-w-5xl text-balance">
            Commercial Video for Rhode Island Businesses
          </h1>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
            Video content for local businesses that need website videos, reels, testimonials, ads,
            and clean brand content without a giant agency process.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
              data-track-event="quote_cta_click"
              data-service-lane="business"
            >
              Request a Quote
            </Link>
            <a
              href="#business-packages"
              className="border border-foreground/30 text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
            >
              View Business Packages
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof"
            title="Video for real local use."
            subtitle="Business samples are shared as client projects are cleared for public use. The process stays simple: plan what the video needs to do, film the useful pieces, then deliver clean edits for web, social, ads, or campaigns."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {USES.map(([title, Icon]) => (
              <article key={title as string} className="bg-card border border-border rounded-xl p-6">
                <Icon className="w-7 h-7 text-primary" />
                <h2 className="font-display text-2xl uppercase mt-4">{title as string}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="business-packages" className="scroll-mt-32 py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="Business video packages."
            subtitle="These are starting points. Final pricing depends on location, coverage time, interviews, editing complexity, number of final videos, turnaround needs, travel, and whether extra crew is needed."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {BUSINESS_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Deliverables" title="What your business can receive." />
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
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="font-display text-4xl uppercase leading-none mt-4">
              Serving Rhode Island and nearby New England.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Hosting a launch, pop-up, or live event? See{" "}
              <Link to="/events-recaps" className="text-primary underline underline-offset-4">
                event recap video Rhode Island
              </Link>
              . Comparing personal event coverage? Review{" "}
              <Link to="/weddings" className="text-primary underline underline-offset-4">
                Rhode Island wedding videography packages
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Business video questions." />
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="timecode mb-4">READY FOR A QUOTE?</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] text-balance">
            Need video for your business?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what your business does, where the video will live, and what you need filmed.
            We will help shape the right scope.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow"
              data-track-event="quote_cta_click"
              data-service-lane="business"
            >
              Request a Quote
            </Link>
            <Link
              to="/packages#business-video"
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
