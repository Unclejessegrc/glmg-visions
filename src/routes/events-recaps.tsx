import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { EVENT_PACKAGES } from "@/data/packages";

export const Route = createFileRoute("/events-recaps")({
  head: () => ({
    meta: [
      { title: "Event Videographer Rhode Island | Party & Recap Films" },
      { name: "description", content: "Event recap videos for parties, live shows, festivals, baby showers, fundraisers, and community events across Rhode Island. Starting at $600." },
      { property: "og:title", content: "Event & Recap Videos — Good Looks Media Group" },
      { property: "og:description", content: "Event recaps that make people wish they were there." },
      { property: "og:url", content: "/events-recaps" },
    ],
    links: [{ rel: "canonical", href: "/events-recaps" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">● EVENTS & RECAPS</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-5xl">
            Event recaps that make people <span className="text-primary">wish</span> they were there.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Parties, baby showers, live shows, festivals, pop-ups, nightlife, fundraisers, community events, and private events.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Packages" title="Pick the size of your event." />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {EVENT_PACKAGES.map(p => <PackageCard key={p.name} pkg={p} />)}
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-card/40 border-y border-border">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Throwing something worth filming?</h2>
          <Link to="/contact" className="mt-7 inline-block bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow">Check availability</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
