import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { WEDDING_PACKAGES, BUSINESS_PACKAGES, EVENT_PACKAGES, MUSIC_PACKAGES, CUSTOM_PACKAGES } from "@/data/packages";
import { absoluteUrl, pageJsonLd } from "@/data/seo";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Videography Packages & Pricing RI, CT & MA | Good Looks Media Group" },
      { name: "description", content: "Videography packages and starting price ranges for Rhode Island, Connecticut, Massachusetts, and New England weddings, event media, business video, music videos, and custom projects." },
      { property: "og:title", content: "Packages & Pricing — Good Looks Media Group" },
      { property: "og:description", content: "Starting price ranges for wedding films, event recaps, business video, music videos, and custom projects across New England." },
      { property: "og:url", content: absoluteUrl("/packages") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/packages") }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(pageJsonLd({
        name: "Videography Packages and Pricing for Rhode Island, Connecticut, Massachusetts, and New England",
        description: "Starting price ranges for wedding videography, Rhode Island event media, business video production, music videos, and custom video projects.",
        path: "/packages",
      })),
    }],
  }),
  component: PackagesPage,
});

const FAQ = [
  { q: "Is a deposit required?", a: "Yes — a non-refundable retainer reserves your date. Once your date is locked, that deposit holds the slot for you." },
  { q: "What's the standard turnaround?", a: "Most edits are delivered in 4–10 weeks depending on package and complexity. Rush delivery is available as a custom add-on." },
  { q: "How many revisions are included?", a: "One round of revisions on the final edit is standard. Additional rounds are billed hourly." },
  { q: "Do you provide raw footage?", a: "Raw footage is available as a paid add-on. By default we deliver the finished edit only." },
  { q: "Do you travel?", a: "Rhode Island is home base. MA and the rest of New England are by quote. Travel between planned locations during your shoot is part of the shoot schedule and accounted for in planning." },
  { q: "How is final pricing calculated?", a: "Final quote depends on date, location, coverage time, number of videos, turnaround needs, travel, and editing complexity. Most freelance shoots are built around a 4-hour baseline; additional time may be billed hourly." },
];

const ADD_ONS = [
  "Extra hour: $100–$150",
  "Second videographer: from $500",
  "Drone footage: from $300",
  "48-hour teaser: from $250",
  "Raw footage: from $300",
  "Rehearsal or additional event coverage: custom quote",
  "Vertical social clip bundle: from $250",
];

const PACKAGE_GROUPS = [
  { id: "weddings", title: "Weddings & Milestones", packages: WEDDING_PACKAGES },
  { id: "business-video", title: "Business & Commercial", packages: BUSINESS_PACKAGES },
  { id: "events-recaps", title: "Events, Recaps & Live Shows", packages: EVENT_PACKAGES },
  { id: "music-videos", title: "Music Videos", packages: MUSIC_PACKAGES },
  { id: "custom-projects", title: "Custom Projects", packages: CUSTOM_PACKAGES },
] as const;

function PackagesPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      window.requestAnimationFrame(() => {
        try {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch {
          // Ignore malformed hashes; expected package anchors are controlled links.
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
          <p className="timecode mb-3">● PACKAGES</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            Clear starting points. <span className="text-primary">Custom</span> final quotes.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-3xl">
            Every project is different. Use these as a starting point — final quote depends on date, location, coverage time, number of videos, turnaround needs, travel, and editing complexity.
          </p>
        </div>
      </section>

      {PACKAGE_GROUPS.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-32 py-14 md:py-20 ${i % 2 === 0 ? "" : "bg-card/40 border-y border-border"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={group.title} />
            <div className="grid md:grid-cols-3 gap-6">
              {group.packages.map(p => <PackageCard key={p.name} pkg={p} />)}
            </div>
            <div className="mt-7 border border-border rounded-2xl bg-background/40 p-5 md:p-6">
              <p className="timecode mb-3">Typical add-ons</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {ADD_ONS.map(addOn => <li key={addOn}>{addOn}</li>)}
              </ul>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-4xl">
              Final pricing depends on date, location, coverage time, number of deliverables, editing complexity, turnaround needs, travel, and whether extra crew is needed.
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
                  <th className="p-4">Coverage</th>
                  <th className="p-4">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Weddings — Teaser", "$1,800–$2,400", "Up to 4 hrs", "Elopements, small weddings"],
                  ["Weddings — Highlight", "$2,800–$3,800", "Up to 6 hrs", "Most weddings"],
                  ["Weddings — Full Story", "$4,500–$6,000", "Up to 8 hrs", "Larger weddings, full day"],
                  ["Business — Social Starter", "$900–$1,500", "Up to 2 hrs", "Quick promos"],
                  ["Business — Brand Builder", "$1,800–$3,500", "Up to 4 hrs", "Website + social + ads"],
                  ["Business — Campaign Kit", "$4,500–$7,500", "Half-day", "Full content library"],
                  ["Events — Quick Recap", "$600–$1,200", "Up to 2 hrs", "Small parties, pop-ups"],
                  ["Events — Main Event", "$1,500–$2,800", "Up to 4 hrs", "Larger parties, live shows"],
                  ["Events — Mid Event", "$2,200–$2,600", "Up to 5 hrs", "Deeper event coverage"],
                  ["Events — Full Experience", "$3,000+", "Up to 6 hrs", "Festivals, big corporate"],
                  ["Music — Performance Visual", "$750–$1,500", "Up to 2 hrs", "Single performance"],
                  ["Music — Artist Video", "$1,500–$3,000", "Up to 4 hrs", "Performance + story"],
                  ["Music — Full Concept", "$3,000+", "Half-day", "Concept-driven"],
                  ["Custom Projects", "Custom quote", "Scoped", "Pets, documentaries, personal stories"],
                ].map(row => (
                  <tr key={row[0]} className="hover:bg-card/60">
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4 text-primary">{row[1]}</td>
                    <td className="p-4 text-muted-foreground">{row[2]}</td>
                    <td className="p-4 text-muted-foreground">{row[3]}</td>
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
    </SiteLayout>
  );
}
