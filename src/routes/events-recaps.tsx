import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, PartyPopper } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PackageCard } from "@/components/site/PackageCard";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { EVENT_PACKAGES, MUSIC_PACKAGES } from "@/data/packages";
import { PORTFOLIO } from "@/data/portfolio";
import { absoluteUrl, serviceJsonLd } from "@/data/seo";
import { trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/events-recaps")({
  head: () => ({
    meta: [
      { title: "Event Recap & Music Video Rhode Island | Good Looks Media Group" },
      {
        name: "description",
        content:
          "Rhode Island event recap and artist performance video. Clear packages, fast turnaround, and a simple quote process. See our work and request a quote.",
      },
      { property: "og:title", content: "Event Recap & Music Video Rhode Island | Good Looks Media Group" },
      {
        property: "og:description",
        content:
          "Rhode Island event recap and artist performance video. Clear packages, fast turnaround, and a simple quote process.",
      },
      { property: "og:url", content: absoluteUrl("/events-recaps") },
      { name: "twitter:title", content: "Event Recap & Music Video Rhode Island | Good Looks Media Group" },
      {
        name: "twitter:description",
        content:
          "Rhode Island event recap and artist performance video with clear packages and a simple quote process.",
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/events-recaps") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: "Rhode Island Event Recap & Artist Performance Video",
            description:
              "Event recap videos, artist performance videos, release promos, music visuals, and social-ready clips across Rhode Island and nearby New England.",
            path: "/events-recaps",
          }),
        ),
      },
    ],
  }),
  component: EventsPage,
});

const WHO_FOR = [
  "Artists and performers",
  "DJs and event hosts",
  "Birthday parties and private events",
  "Pop-ups and brand launches",
  "Community events",
  "Live shows",
  "Festivals and showcases",
  "Small businesses hosting events",
];

const DELIVERABLES = [
  "Event recap video",
  "Artist performance video",
  "Vertical social clips",
  "Edited highlight video",
  "Audio synced footage when possible",
  "Color correction",
  "Online delivery link",
  "Optional extended edit by quote",
];

const FAQ = [
  {
    q: "How fast can I get a recap?",
    a: "Turnaround depends on the event size, season, and edit complexity. Short recaps are usually faster than multi-camera or extended edits. We will give you an estimated delivery window before booking.",
  },
  {
    q: "Do you film live performances?",
    a: "Yes. We film live shows, showcases, DJ sets, artist performances, and performance visuals. Audio needs are scoped before the shoot.",
  },
  {
    q: "Can you capture clean audio?",
    a: "When possible, yes. Clean audio depends on the venue, soundboard access, performance setup, and how much audio work the project needs.",
  },
  {
    q: "Do you create vertical clips for Instagram, TikTok, and Reels?",
    a: "Yes. Social-ready vertical clips can be included in event, artist, and campaign packages.",
  },
  {
    q: "Can you film music videos?",
    a: "Yes. Artist performance videos, release promos, visual stories, and full music videos are connected to this Events & Music Video lane.",
  },
  {
    q: "Do you travel outside Rhode Island?",
    a: "Yes. Rhode Island is home base. Nearby New England projects are available by quote.",
  },
  {
    q: "How much is the deposit?",
    a: "A non-refundable retainer reserves the date. The exact deposit depends on the scope and will be listed in the quote.",
  },
  {
    q: "How many revisions are included?",
    a: "Most projects include one reasonable revision round. Bigger changes, extra versions, or new creative direction may require an additional quote.",
  },
  {
    q: "What format do I receive the final video in?",
    a: "Final videos are delivered through an online link in web-ready formats. Vertical and platform-specific exports can be included by package or quote.",
  },
];

function EventsPage() {
  useEffect(() => {
    trackEvent("event_page_view", { service_lane: "event" });
    trackEvent("music_page_view", { service_lane: "artist" });
  }, []);

  const samples = PORTFOLIO.filter((item) => item.category.includes("Music")).slice(0, 4);

  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">EVENTS & ARTIST VISUALS</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-5xl">
            Rhode Island Event Recap & Artist Performance Video
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Good Looks Media Group films the energy of real events, from parties and pop-ups to
            live performances, release promos, community events, and artist visuals. We create recap
            videos, performance edits, and vertical clips that help your moment live beyond the day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
              data-track-event="quote_cta_click"
              data-service-lane="event"
            >
              Request a Quote
            </Link>
            <a
              href="#sample-work"
              className="border border-foreground/30 text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
            >
              View Recent Work
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <SectionHeading eyebrow="Who this is for" title="Built for live moments, artists, parties, and local events." />
          <div className="grid sm:grid-cols-2 gap-3">
            {WHO_FOR.map((item) => (
              <div key={item} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                <PartyPopper className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sample-work" className="scroll-mt-32 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof"
            title="Recent work and artist visuals."
            subtitle="We are currently curating our event and artist visual portfolio. Recent samples, still frames, and selected clips will be added as projects are cleared for public use."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {samples.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
            Process note: quick recaps, social clips, and performance edits are scoped around the
            event date, audio needs, turnaround, and how much coverage the final video needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Event recap packages"
            title="Choose the coverage that fits the event."
            subtitle="Introductory starting ranges. Final quote depends on date, location, coverage time, audio needs, edit complexity, crew size, revisions, and deliverables."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {EVENT_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Music / artist performance video packages"
            title="From clean performance to release campaign."
            subtitle="Artist visuals can live inside the event lane or stand alone as a music video, performance visual, or campaign kit."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {MUSIC_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="Deliverables" title="What clients may receive." />
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
            <p className="timecode mb-3">SERVICE AREA</p>
            <h2 className="font-display text-4xl uppercase leading-none">
              Serving Rhode Island and nearby New England.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Need a wedding film or business video too? Good Looks also offers{" "}
              <Link to="/weddings" className="text-primary underline underline-offset-4">
                Rhode Island wedding videography packages
              </Link>{" "}
              and{" "}
              <Link to="/for-businesses" className="text-primary underline underline-offset-4">
                commercial video for local businesses
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Event and artist video questions." />
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="timecode mb-4">READY TO FILM?</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] text-balance">
            Ready to film your event?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us the date, location, type of event, and the kind of video you need. We will help
            you choose the right coverage and send a custom quote.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
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
