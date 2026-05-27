import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Check, Heart, Music, PartyPopper, Play, Video } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { PORTFOLIO } from "@/data/portfolio";
import { SHOW_PORTFOLIO } from "@/config/features";
import { absoluteUrl, businessJsonLd, pageJsonLd, websiteJsonLd } from "@/data/seo";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Good Looks Media Group | Rhode Island Video Production" },
      {
        name: "description",
        content:
          "Event recap, music video, wedding films, and commercial video for Rhode Island. Real production experience. Clear pricing. Request a quote today.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Good Looks Media Group | Rhode Island Video Production" },
      {
        property: "og:description",
        content:
          "Event recap, music video, wedding films, and commercial video for Rhode Island. Real production experience. Clear pricing. Request a quote today.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { name: "twitter:title", content: "Good Looks Media Group | Rhode Island Video Production" },
      {
        name: "twitter:description",
        content:
          "Event recap, music video, wedding films, and commercial video for Rhode Island. Real production experience. Clear pricing. Request a quote today.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            businessJsonLd(),
            websiteJsonLd(),
            pageJsonLd({
              name: "Business, Events & Artist Visuals in Rhode Island",
              description:
                "Cinematic video for Rhode Island businesses, live events, artists, parties, launches, performances, and social-ready campaigns.",
              path: "/",
            }),
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const SERVICE_CARDS = [
  {
    icon: PartyPopper,
    title: "Events & Music Video",
    copy: "Live shows, parties, artist performances, event recaps, release promos, music visuals, and social-ready clips.",
    to: "/events-recaps",
    cta: "View Event Packages",
    primary: true,
    lane: "event",
  },
  {
    icon: Heart,
    title: "Weddings",
    copy: "Wedding teasers, highlight films, and full-story edits for Rhode Island and New England couples.",
    to: "/weddings",
    cta: "View Wedding Packages",
    lane: "wedding",
  },
  {
    icon: Briefcase,
    title: "B2B Commercial",
    copy: "Brand videos, testimonials, website content, reels, and campaign kits for Rhode Island businesses.",
    to: "/for-businesses",
    cta: "View Business Video Packages",
    lane: "business",
  },
] as const;

const TRUST_POINTS = [
  "Rhode Island based video team",
  "Filming since 2018",
  "Direct communication from inquiry to delivery",
  "Event recaps, artist visuals, business content, and wedding films",
  "Clear starting ranges and custom quotes",
  "Social-ready clips available",
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Good Looks Media Group filming cinematic Rhode Island video production"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <p className="timecode mb-5">REC - RHODE ISLAND EVENT VIDEO - SINCE 2018</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] max-w-5xl text-balance">
            Business, Events & Artist Visuals in Rhode Island
          </h1>
          <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Good Looks Media Group creates cinematic video for Rhode Island businesses, live
            events, artists, parties, launches, performances, and social-ready campaigns. Real
            moments, clean visuals, and edits built to promote, share, and remember.
          </p>
          <p className="mt-5 text-sm uppercase tracking-widest text-foreground">
            Filming Rhode Island stories since 2018.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
              data-track-event="quote_cta_click"
              data-service-lane="event"
            >
              Request a Quote
            </Link>
            <a
              href="#recent-work"
              className="border border-foreground/30 text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
            >
              View Recent Work
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we film"
            title="Events first, with weddings and business video when you need them."
            subtitle="Good Looks is built around live moments, artists, parties, local brands, and stories that deserve more than a random phone clip."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICE_CARDS.map(({ icon: Icon, title, copy, to, cta, primary, lane }) => (
              <Link
                key={title}
                to={to}
                className={`group relative bg-card border rounded-2xl p-7 transition hover:-translate-y-1 ${
                  primary ? "border-primary red-glow" : "border-border hover:border-primary"
                }`}
                data-track-event="quote_cta_click"
                data-service-lane={lane}
              >
                {primary && (
                  <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                    Primary focus
                  </span>
                )}
                <Icon className="w-8 h-8 text-primary" />
                <h2 className="font-display text-3xl uppercase mt-5">{title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground">
                  {cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="timecode mb-3">LIVE MOMENTS</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95]">
              Real events deserve better than random phone clips.
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it is a live show, party, pop-up, artist performance, or local event, the
              moment goes fast. We help you turn it into polished video that can be shared,
              promoted, remembered, and reused.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90"
              data-track-event="quote_cta_click"
              data-service-lane="event"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section id="recent-work" className="scroll-mt-32 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="Recent work" title="See how we shoot." align="center" />
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-black red-glow">
            <iframe
              src="https://www.youtube.com/embed/0q_7tljwQHY?si=uum0jp0_yTGuWCrr&rel=0&modestbranding=1"
              className="w-full h-full"
              title="Good Looks Media Group Director Reel"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/events-recaps"
              className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm hover:underline"
            >
              Event recap video Rhode Island <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm hover:underline"
            >
              Rhode Island event videography packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {SHOW_PORTFOLIO && (
        <section className="py-20 md:py-28 bg-card/40 border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10 gap-4 flex-wrap">
              <SectionHeading eyebrow="Selected work" title="Artist visuals and video work." />
              <Link
                to="/work"
                className="text-primary uppercase tracking-widest text-sm hover:underline whitespace-nowrap"
              >
                View Recent Work
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PORTFOLIO.slice(0, 3).map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="Why Good Looks" title="Why people book Good Looks" />
            <ul className="grid sm:grid-cols-2 gap-3">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border bg-card">
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt="Good Looks Media Group cinematic production still"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 film-grain" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="timecode mb-2">GOOD LOOKS MEDIA</p>
              <p className="font-display text-3xl md:text-4xl uppercase">
                Real events. Real energy. Filmed right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="More Good Looks"
            title="Custom stories stay available, lower on the list."
            subtitle="Need something outside the main lanes? We still quote custom stories, reels, documentary-style edits, and unusual ideas when the project fits."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["Reels & Short-Form", Video, "/packages#custom-projects"],
              ["Artist Visuals", Music, "/events-recaps"],
              ["Custom Projects", Play, "/packages#custom-projects"],
            ].map(([title, Icon, to]) => (
              <Link
                key={title as string}
                to={to as string}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition"
              >
                <Icon className="w-7 h-7 text-primary" />
                <h3 className="font-display text-2xl uppercase mt-4">{title as string}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="timecode mb-4">READY WHEN YOU ARE</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] text-balance">
            Ready to film your event?
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
            Tell us the date, location, type of event, and the kind of video you need. We will help
            you choose the right coverage and send a custom quote.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow"
              data-track-event="quote_cta_click"
              data-service-lane="event"
            >
              Request a Quote
            </Link>
            <Link
              to="/packages"
              className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
