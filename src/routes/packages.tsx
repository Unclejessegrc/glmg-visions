import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PackageCard } from "@/components/site/PackageCard";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import {
  BUSINESS_PACKAGES,
  CUSTOM_PACKAGES,
  EDITING_PACKAGES,
  EVENT_PACKAGES,
  MUSIC_PACKAGES,
  WEDDING_PACKAGES,
} from "@/data/packages";
import { absoluteUrl, pageJsonLd } from "@/data/seo";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Videography Packages Rhode Island | Good Looks Media Group" },
      {
        name: "description",
        content:
          "Clear video package ranges for events, music videos, weddings, business video, and editing in Rhode Island. Compare options and request a quote.",
      },
      { property: "og:title", content: "Videography Packages Rhode Island | Good Looks Media Group" },
      {
        property: "og:description",
        content:
          "Clear video package ranges for events, music videos, weddings, business video, and editing in Rhode Island. Compare options and request a quote.",
      },
      { property: "og:url", content: absoluteUrl("/packages") },
      { name: "twitter:title", content: "Videography Packages Rhode Island | Good Looks Media Group" },
      {
        name: "twitter:description",
        content:
          "Clear video package ranges for events, music videos, weddings, business video, and editing in Rhode Island.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/packages") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          pageJsonLd({
            name: "Videography Packages Rhode Island",
            description:
              "Clear video package ranges for events, music videos, weddings, business video, and editing in Rhode Island.",
            path: "/packages",
          }),
        ),
      },
    ],
  }),
  component: PackagesPage,
});

const PACKAGE_GROUPS = [
  { id: "events-recaps", title: "Events, Recaps & Live Shows", packages: EVENT_PACKAGES },
  { id: "music-videos", title: "Music / Artist Performance Video", packages: MUSIC_PACKAGES },
  { id: "weddings", title: "Weddings", packages: WEDDING_PACKAGES },
  { id: "business-video", title: "B2B Commercial Video", packages: BUSINESS_PACKAGES },
  { id: "editing-post-production", title: "Editing & Post-Production", packages: EDITING_PACKAGES },
  { id: "custom-projects", title: "Custom Projects", packages: CUSTOM_PACKAGES },
] as const;

const FAQ = [
  {
    q: "What is the turnaround time?",
    a: "Turnaround depends on project size, season, edit complexity, and the number of final videos. We will give you an estimated delivery window before booking.",
  },
  {
    q: "Do you travel outside Rhode Island?",
    a: "Yes. Rhode Island is home base. Nearby New England projects are available by quote.",
  },
  {
    q: "How many revisions are included?",
    a: "Most packages include one reasonable revision round. Bigger changes, extra versions, or new creative direction may require an additional quote.",
  },
  {
    q: "What is the deposit to book?",
    a: "A non-refundable retainer reserves your date. The exact deposit depends on the package and final scope.",
  },
  {
    q: "What format do I receive the final video in?",
    a: "Final videos are delivered through an online link in web-ready formats. Vertical and platform-specific exports can be included by package or quote.",
  },
  {
    q: "How is final pricing calculated?",
    a: "Final pricing depends on date, location, coverage time, audio needs, edit complexity, crew size, revisions, travel, and deliverables.",
  },
];

function PackagesPage() {
  useEffect(() => {
    trackEvent("pricing_page_view", { page_path: window.location.pathname });

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      window.requestAnimationFrame(() => {
        try {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          // Expected hashes are controlled internal package links.
        }
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">PACKAGES</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            Clear starting ranges. <span className="text-primary">Custom</span> final quotes.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-3xl">
            Compare starting ranges for Rhode Island event recaps, artist visuals, wedding films,
            commercial video, and custom projects.
            Need help with footage you already shot? See the editing-only packages below.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-primary/40 rounded-2xl p-7 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-center red-glow">
            <div>
              <p className="timecode mb-3">CURRENT FOCUS</p>
              <h2 className="font-display text-4xl uppercase leading-none">
                Current focus: Events & Artist Visuals
              </h2>
              <p className="mt-4 text-muted-foreground max-w-3xl">
                We are currently prioritizing Rhode Island event recaps, live performance videos,
                artist visuals, and social-ready clips while continuing to offer wedding and
                business video by quote.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex justify-center bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold"
              data-track-event="quote_cta_click"
              data-service-lane="event"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {PACKAGE_GROUPS.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-32 py-14 md:py-20 ${
            index % 2 === 0 ? "" : "bg-card/40 border-y border-border"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={group.title} />
            <div className="grid md:grid-cols-3 gap-6">
              {group.packages.map((pkg) => (
                <PackageCard key={pkg.name} pkg={pkg} />
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-4xl">
              {group.id === "editing-post-production"
                ? "Starting prices. Final quote depends on raw footage length, file organization, audio quality, edit complexity, revision needs, turnaround time, and final deliverables."
                : "Introductory starting ranges. Final quote depends on date, location, coverage time, audio needs, edit complexity, crew size, revisions, and deliverables."}
            </p>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Compare" title="At a glance." />
          <div className="overflow-x-auto border border-border rounded-2xl scrollbar-none">
            <table className="w-full text-sm">
              <thead className="bg-card text-left uppercase tracking-widest text-xs">
                <tr>
                  <th className="p-4">Lane</th>
                  <th className="p-4">Range</th>
                  <th className="p-4">Best fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Events - Quick Recap", "$400 to $700", "Small parties and pop-ups"],
                  ["Events - Main Event", "$900 to $1,500", "Most event clients"],
                  ["Events - Full Story", "$1,800 to $2,400+", "Bigger events and live shows"],
                  ["Artist Video - Single Take", "$600 to $900", "One song, one location"],
                  ["Artist Video - Visual Story", "$1,200 to $2,000", "Performance plus concept"],
                  ["Weddings - Highlight", "$2,000 to $2,800", "Most couples"],
                  ["Business - Brand Builder", "$1,200 to $2,200", "Most businesses"],
                  ["Editing - Quick Reel Edit", "Starting at $175", "Footage already filmed"],
                  ["Editing - Wedding Highlight Edit", "Starting at $900", "Organized wedding footage"],
                ].map((row) => (
                  <tr key={row[0]} className="hover:bg-card/60">
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4 text-primary">{row[1]}</td>
                    <td className="p-4 text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Pricing questions." />
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Need help choosing?</h2>
          <p className="mt-3 text-muted-foreground">
            Send the project type, date, city, and rough budget. We will point you toward the right
            package or a custom quote.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-block bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow"
            data-track-event="quote_cta_click"
            data-service-lane="event"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
