import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { MUSIC_PACKAGES } from "@/data/packages";
import { absoluteUrl, serviceJsonLd } from "@/data/seo";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/music-videos")({
  head: () => ({
    meta: [
      { title: "Artist Performance Video Rhode Island | Good Looks Media Group" },
      {
        name: "description",
        content:
          "Music videos, artist performance visuals, release promos, and social-ready clips for Rhode Island artists. Request artist performance video pricing.",
      },
      { property: "og:title", content: "Artist Performance Video Rhode Island | Good Looks Media Group" },
      {
        property: "og:description",
        content:
          "Music videos, artist performance visuals, release promos, and social-ready clips for Rhode Island artists.",
      },
      { property: "og:url", content: absoluteUrl("/music-videos") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/music-videos") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: "Artist Performance Video Rhode Island",
            description:
              "Music videos, artist performance visuals, release promos, and social-ready clips for Rhode Island artists.",
            path: "/music-videos",
          }),
        ),
      },
    ],
  }),
  component: MusicPage,
});

const FAQ = [
  {
    q: "What is the turnaround time?",
    a: "Turnaround depends on the video concept, number of setups, edit complexity, and release schedule. We will discuss timeline before booking.",
  },
  {
    q: "Do you travel outside Rhode Island?",
    a: "Yes. Rhode Island is home base. Nearby New England artist video projects are available by quote.",
  },
  {
    q: "How many revisions are included?",
    a: "Most artist video projects include one reasonable revision round. Bigger changes or new creative direction may require an additional quote.",
  },
  {
    q: "What is the deposit to book?",
    a: "A non-refundable retainer reserves the date. The exact deposit depends on the package and final scope.",
  },
  {
    q: "What format do I receive the final video in?",
    a: "Final videos are delivered through an online link in web-ready formats. Vertical social cuts can be included by package or quote.",
  },
];

function MusicPage() {
  useEffect(() => {
    trackEvent("music_page_view", { service_lane: "artist" });
  }, []);

  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">ARTIST VISUALS</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-5xl">
            Artist Performance Video in Rhode Island
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Music videos, performance visuals, release promos, and social-ready clips are now part
            of the Events & Music Video lane. Start there for the full event and artist package
            ladder.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
              data-track-event="quote_cta_click"
              data-service-lane="artist"
            >
              Request a Quote
            </Link>
            <Link
              to="/events-recaps"
              className="border border-foreground/30 text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
            >
              Events & Music Video
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Artist packages"
            title="From one performance to a release campaign."
            subtitle="These packages also appear on the Events & Music Video page so artist visuals stay connected to live coverage, release promos, and social clips."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {MUSIC_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Artist video questions." />
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section className="py-20 text-center bg-card/40 border-y border-border">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Ready to build the visual?</h2>
          <p className="mt-3 text-muted-foreground">
            See the full{" "}
            <Link to="/events-recaps" className="text-primary underline underline-offset-4">
              artist performance video pricing
            </Link>{" "}
            or send the song, concept, date, and city for a quote.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow"
            data-track-event="quote_cta_click"
            data-service-lane="artist"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
