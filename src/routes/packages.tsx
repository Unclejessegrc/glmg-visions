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
      { title: "Videography Packages & Pricing in Rhode Island | Good Looks Media Group" },
      { name: "description", content: "Rhode Island videography packages with accessible starting ranges for weddings, events, business videos, music videos, and custom projects." },
      { property: "og:title", content: "Videography Packages & Pricing in Rhode Island | Good Looks Media Group" },
      { property: "og:description", content: "Accessible starting ranges for wedding films, event recaps, business video, music videos, and custom projects across New England." },
      { property: "og:url", content: absoluteUrl("/packages") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/packages") }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(pageJsonLd({
        name: "Videography Packages and Pricing for Rhode Island, Connecticut, Massachusetts, and New England",
        description: "Accessible starting ranges for wedding videography, Rhode Island event media, business video production, music videos, and custom video projects.",
        path: "/packages",
      })),
    }],
  }),
  component: PackagesPage,
});

const FAQ = [
  { q: "Is a deposit required?", a: "Yes - a non-refundable retainer reserves your date. Once your date is locked, that deposit holds the slot for you." },
  { q: "What's the standard turnaround?", a: "Turnaround depends on the project size, season, and editing complexity. Smaller recaps and reels are usually faster. Weddings, commercials, documentary-style edits, and larger projects take longer. We will give you an estimated delivery window before booking." },
  { q: "How many revisions are included?", a: "Most projects include one reasonable revision round for small adjustments. Larger changes, major restructuring, extra versions, or new creative direction after editing has started may require an additional quote." },
  { q: "Do you provide raw footage?", a: "Raw footage may be available as an add-on depending on the project. Raw footage is not the same as a finished film and may require extra transfer, storage, and organization time." },
  { q: "Do you travel?", a: "Yes. We are based in Rhode Island and available for projects across Providence, Warwick, Newport, Cranston, Pawtucket, East Providence, South County, Massachusetts, Connecticut, and New England by quote." },
  { q: "How is final pricing calculated?", a: "Final pricing depends on the date, location, coverage time, number of videos, editing complexity, turnaround needs, travel, and whether extra crew, drone footage, interviews, or additional versions are needed." },
];
const ADD_ONS = [
  "Extra coverage hour: $75–$125 per hour",
  "Second videographer: Starting at $350",
  "Drone footage: Starting at $200. Only if weather, location, airspace rules, and licensing allow it.",
  "48-hour teaser: Starting at $150",
  "Raw footage: Starting at $200",
  "Extra vertical reel: $50–$100 each",
  "Vertical social clip bundle: Starting at $150",
  "Rush editing: Custom quote",
  "Additional location: Starting at $100",
  "Script or concept help: Starting at $100",
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
            Clear starting ranges. <span className="text-primary">Custom</span> final quotes.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-3xl">
            Use these introductory ranges as a starting point. We keep pricing accessible while still quoting each project based on the time, coverage, editing, and deliverables needed.
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
              These are introductory starting ranges. Final pricing depends on date, location, coverage time, number of videos, editing complexity, turnaround needs, travel, and whether extra crew is needed.
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
                  ["Weddings — Teaser", "$1,200–$1,800", "Up to 4 hrs", "Elopements, small weddings"],
                  ["Weddings — Highlight", "$2,000–$2,800", "Up to 6 hrs", "Most weddings"],
                  ["Weddings — Full Story", "$3,200–$4,500", "Up to 8 hrs", "Larger weddings, full day"],
                  ["Business — Social Starter", "$600–$1,000", "Up to 2 hrs", "Quick promos, reels"],
                  ["Business — Brand Builder", "$1,200–$2,200", "Up to 4 hrs", "Website, social, ads"],
                  ["Business — Campaign Kit", "$2,800–$4,500", "Half-day", "Content library"],
                  ["Events — Quick Recap", "$400–$800", "Up to 2 hrs", "Small events"],
                  ["Events — Main Event", "$900–$1,500", "Up to 4 hrs", "Parties, live shows"],
                  ["Events — Mid Event", "$1,600–$2,200", "Up to 5 hrs", "Medium events"],
                  ["Events — Full Experience", "$2,400+", "Up to 6 hrs", "Large events"],
                  ["Music — Performance Visual", "$500–$900", "Up to 2 hrs", "Single performance"],
                  ["Music — Artist Video", "$900–$1,800", "Up to 4 hrs", "Performance + story"],
                  ["Music — Full Concept", "$2,000+", "Half-day", "Concept-driven"],
                  ["Custom — Small Custom Project", "$400+", "Varies", "Pets, family, documentary, custom"],
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
