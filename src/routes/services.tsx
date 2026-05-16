import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Rhode Island Video Production | Good Looks Media Group" },
      { name: "description", content: "Wedding films, business videos, music videos, event recaps, pet videos, documentaries, and custom projects. Rhode Island videographer since 2018." },
      { property: "og:title", content: "Services — Good Looks Media Group" },
      { property: "og:description", content: "Full range of Rhode Island video production services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    id: "weddings",
    title: "Weddings",
    copy: "Cinematic wedding films, teasers, ceremony edits, reception moments, social clips, and full-day storytelling.",
    bestFor: "Couples who want their day preserved in a way that actually feels like the day.",
    deliverables: "Highlight film, ceremony edit, social clips, online delivery.",
    price: "Starting at $1,800",
    to: "/weddings",
  },
  {
    id: "family",
    title: "Baby Showers & Family Milestones",
    copy: "Beautiful coverage for baby showers, birthdays, anniversaries, graduations, family parties, and once-in-a-lifetime milestones.",
    bestFor: "Families who want a real keepsake — not just phone photos.",
    deliverables: "Recap film, social cutdowns, online delivery.",
    price: "Starting at $600",
    to: "/events-recaps",
  },
  {
    id: "business",
    title: "Business Ads & Commercials",
    copy: "Promotional videos, website videos, social ads, service explainers, testimonials, product videos, and brand story content for local businesses.",
    bestFor: "Owners who need video that helps people understand, trust, and buy.",
    deliverables: "Main brand video, vertical clips, captions, multi-format delivery.",
    price: "Starting at $900",
    to: "/business-video",
  },
  {
    id: "music",
    title: "Music Videos",
    copy: "Performance videos, story-driven music videos, artist promo clips, behind-the-scenes edits, and release-ready visuals.",
    bestFor: "Artists building a real catalog of visuals.",
    deliverables: "Final music video, vertical promo clips, optional BTS.",
    price: "Starting at $750",
    to: "/music-videos",
  },
  {
    id: "events",
    title: "Events & Recaps",
    copy: "Recap videos for parties, live shows, festivals, community events, pop-ups, nightlife, fundraisers, and private events.",
    bestFor: "Promoters, organizers, and hosts who need next year's promo.",
    deliverables: "Recap film, vertical clips, online delivery.",
    price: "Starting at $600",
    to: "/events-recaps",
  },
  {
    id: "social",
    title: "YouTube Shorts & Social Content",
    copy: "Vertical content packages for Instagram Reels, TikTok, YouTube Shorts, ads, and launch campaigns.",
    bestFor: "Brands and creators rolling out campaigns.",
    deliverables: "Short-form vertical clips with captions.",
    price: "Custom quote",
    to: "/contact",
  },
  {
    id: "pets",
    title: "Pet Videos",
    copy: "Pet films, memorial keepsakes, funny pet reels, adoption videos, breeder content, and family pet documentaries.",
    bestFor: "Pet parents, rescues, and pet businesses.",
    deliverables: "Short film + social clips.",
    price: "Custom quote",
    to: "/contact",
  },
  {
    id: "docs",
    title: "Documentaries & Legacy Films",
    copy: "Mini-documentaries, personal stories, family legacy interviews, artist stories, brand documentaries, and community features.",
    bestFor: "Anyone with a story worth preserving.",
    deliverables: "Edited mini-documentary, raw interview archive available.",
    price: "Custom quote",
    to: "/contact",
  },
  {
    id: "custom",
    title: "Custom Projects",
    copy: "If it matters to you, we can probably film it. Tell us what you're imagining and we'll help shape it into a real video plan.",
    bestFor: "Anything outside the usual lanes.",
    deliverables: "Scoped to your project.",
    price: "Custom quote",
    to: "/contact",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">● SERVICES</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            Everything we <span className="text-primary">film.</span>
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            Organized into clear lanes so you can find what fits. Custom projects always welcome.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-5">
          {SERVICES.map(s => (
            <article key={s.id} id={s.id} className="bg-card border border-border rounded-2xl p-7 md:p-10 grid md:grid-cols-3 gap-6 hover:border-primary transition">
              <div className="md:col-span-2">
                <h2 className="font-display text-3xl md:text-4xl uppercase">{s.title}</h2>
                <p className="mt-3 text-muted-foreground text-base md:text-lg leading-relaxed">{s.copy}</p>
                <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="timecode mb-1">Best for</p>
                    <p>{s.bestFor}</p>
                  </div>
                  <div>
                    <p className="timecode mb-1">Deliverables</p>
                    <p>{s.deliverables}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 md:items-end">
                <div className="md:text-right">
                  <p className="timecode">Pricing</p>
                  <p className="font-display text-2xl text-primary">{s.price}</p>
                </div>
                <Link to={s.to as any} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90">
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
