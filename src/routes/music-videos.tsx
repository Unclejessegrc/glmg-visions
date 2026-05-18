import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { MUSIC_PACKAGES } from "@/data/packages";
import { absoluteUrl, serviceJsonLd } from "@/data/seo";

export const Route = createFileRoute("/music-videos")({
  head: () => ({
    meta: [
      { title: "Music Video Production Rhode Island, CT & MA | Good Looks Media Group" },
      { name: "description", content: "Music video production for artists in Rhode Island, Connecticut, Massachusetts, and New England. Performance visuals, story-driven videos, release promos, and artist reels from $750." },
      { property: "og:title", content: "Music Video Production Rhode Island | Good Looks Media Group" },
      { property: "og:description", content: "Music videos, performance films, release promos, and artist visuals across Rhode Island, Connecticut, Massachusetts, and New England." },
      { property: "og:url", content: absoluteUrl("/music-videos") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/music-videos") }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(serviceJsonLd({
        name: "Music Video Production in Rhode Island, Connecticut, Massachusetts, and New England",
        description: "Performance music videos, artist visuals, release promos, and concept videos for New England artists.",
        path: "/music-videos",
      })),
    }],
  }),
  component: MusicPage,
});

const ADDONS = ["Behind-the-scenes video", "Release promo clips", "Cover art motion loop", "YouTube teaser", "Instagram / TikTok rollout clips"];

function MusicPage() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">● MUSIC VIDEOS</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-5xl">
            Music videos, performance films, and artist visuals with <span className="text-primary">real energy.</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            For independent artists, managers, and performers ready to look like the artist they want to be.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Packages" title="From single performance to full concept." />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {MUSIC_PACKAGES.map(p => <PackageCard key={p.name} pkg={p} />)}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Add-ons" title="Rollout extras." />
          <div className="grid sm:grid-cols-2 gap-3">
            {ADDONS.map(name => (
              <div key={name} className="bg-card border border-border rounded-lg p-4">
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-4xl md:text-5xl uppercase">Drop the video that matches the song.</h2>
          <Link to="/contact" className="mt-7 inline-block bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow">Plan your video</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
