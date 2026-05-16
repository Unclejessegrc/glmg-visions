import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { WEDDING_PACKAGES, BUSINESS_PACKAGES, EVENT_PACKAGES, MUSIC_PACKAGES } from "@/data/packages";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing | Good Looks Media Group" },
      { name: "description", content: "Transparent starting prices for wedding films, business video, event recaps, music videos, and custom projects in Rhode Island." },
      { property: "og:title", content: "Packages & Pricing — Good Looks Media Group" },
      { property: "og:description", content: "Starting prices for every lane we film." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
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

function PackagesPage() {
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

      {[
        { title: "Weddings & Milestones", packages: WEDDING_PACKAGES },
        { title: "Business & Commercial", packages: BUSINESS_PACKAGES },
        { title: "Events, Recaps & Live Shows", packages: EVENT_PACKAGES },
        { title: "Music Videos", packages: MUSIC_PACKAGES },
      ].map((group, i) => (
        <section key={group.title} className={`py-14 md:py-20 ${i % 2 === 0 ? "" : "bg-card/40 border-y border-border"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title={group.title} />
            <div className="grid md:grid-cols-3 gap-6">
              {group.packages.map(p => <PackageCard key={p.name} pkg={p} />)}
            </div>
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
                  <th className="p-4">Starting at</th>
                  <th className="p-4">Coverage</th>
                  <th className="p-4">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Weddings — Teaser", "$1,800", "Up to 4 hrs", "Elopements, small weddings"],
                  ["Weddings — Highlight", "$2,800", "Up to 6 hrs", "Most weddings"],
                  ["Weddings — Full Story", "$4,500", "Up to 8 hrs", "Larger weddings, full day"],
                  ["Business — Social Starter", "$900", "Up to 2 hrs", "Quick promos"],
                  ["Business — Brand Builder", "$1,800", "Up to 4 hrs", "Website + social + ads"],
                  ["Business — Campaign Kit", "$3,500", "Half-day", "Full content library"],
                  ["Events — Quick Recap", "$600", "Up to 2 hrs", "Small parties, pop-ups"],
                  ["Events — Main Event", "$1,500", "Up to 4 hrs", "Larger parties, live shows"],
                  ["Events — Full Experience", "$3,000+", "Up to 6 hrs", "Festivals, big corporate"],
                  ["Music — Performance Visual", "$750", "Up to 2 hrs", "Single performance"],
                  ["Music — Artist Video", "$1,500", "Up to 4 hrs", "Performance + story"],
                  ["Music — Full Concept", "$3,000+", "Half-day", "Concept-driven"],
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
