import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { PORTFOLIO } from "@/data/portfolio";
import { CONTACT } from "@/data/contact";
import { SHOW_PORTFOLIO } from "@/config/features";
import { absoluteUrl, businessJsonLd, pageJsonLd, websiteJsonLd } from "@/data/seo";
import heroImage from "@/assets/hero.jpg";
import {
  Heart,
  Briefcase,
  Music,
  PartyPopper,
  Sparkles,
  Play,
  ArrowRight,
  Phone,
  MessageSquare,
  Video,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rhode Island Videographer & Media Company | Good Looks Media Group" },
      {
        name: "description",
        content:
          "Good Looks Media Group is a Rhode Island videographer and media company filming weddings, events, business videos, music videos, reels, pet films, documentaries, and custom projects across RI and New England.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Rhode Island Videographer & Media Company | Good Looks Media Group",
      },
      {
        property: "og:description",
        content:
          "A Rhode Island videographer and media company filming weddings, events, business videos, music videos, reels, pet films, documentaries, and custom projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      {
        name: "twitter:title",
        content: "Rhode Island Videographer & Media Company | Good Looks Media Group",
      },
      {
        name: "twitter:description",
        content:
          "Good Looks Media Group films weddings, events, business videos, music videos, reels, pet films, documentaries, and custom projects across RI and New England.",
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
              name: "Rhode Island Videographer and Media Company",
              description:
                "Good Looks Media Group is a Rhode Island videographer and media company serving weddings, events, artists, businesses, families, pet films, documentaries, reels, and custom creative projects across Rhode Island and New England.",
              path: "/",
            }),
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  {
    icon: Heart,
    label: "Weddings & Elopements",
    to: "/weddings",
  },
  { icon: Briefcase, label: "Business Ads & Commercials", to: "/for-businesses" },
  { icon: PartyPopper, label: "Events, Parties & Recaps", to: "/events-recaps" },
  { icon: Music, label: "Music Videos", to: "/music-videos" },
  { icon: Video, label: "Reels & Short-Form Content", to: "/services#social" },
  { icon: Sparkles, label: "Pet Films, Documentaries & Custom Stories", to: "/services#custom" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Good Looks Media Group Rhode Island videographer filming cinematic video production at dusk"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <p className="timecode mb-5">REC - RHODE ISLAND VIDEO PRODUCTION - SINCE 2018</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] max-w-5xl text-balance">
            Rhode Island Videographer & Media Company
          </h1>
          <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Good Looks Media Group is a Rhode Island video production team filming weddings,
            events, business content, music videos, social reels, pet films, documentaries, and
            custom stories since 2018. If it matters enough to remember, promote, launch, or share,
            we can help film it the right way.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
              data-analytics="cta_click_pricing"
            >
              Get Pricing Info
            </Link>
            <Link
              to="/services"
              className="border border-foreground/30 text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
              data-analytics="cta_click_services"
            >
              View Services
            </Link>
            <a
              href="#director-reel"
              className="text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2 hover:text-primary"
            >
              <Play className="w-4 h-4 fill-current" /> Watch the Reel
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl">
            {[
              "Filming since 2018",
              "Rhode Island based",
              "Weddings, events, business, music, reels, and custom stories",
              "Fast replies by call, text, or email.",
              "Usually same day.",
            ].map((t) => (
              <div
                key={t}
                className="text-xs sm:text-sm text-muted-foreground border-l-2 border-primary pl-3"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICE SELECTOR */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Choose your lane"
            title="Rhode Island video production, built for more than one kind of story."
            subtitle="Start with the lane that fits your project: weddings, events, business videos, music videos, reels, pet films, documentaries, family milestones, or a custom idea. We are based in Rhode Island and available throughout Warwick, Providence, Newport, South County, Massachusetts, Connecticut, and New England by quote."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {SERVICES.map(({ icon: Icon, label, to }) => (
              <a
                key={label}
                href={to}
                className="group relative bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary hover:-translate-y-1 transition flex flex-col gap-3"
              >
                <Icon className="w-7 h-7 text-primary" />
                <span className="font-medium text-sm md:text-base">{label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground absolute top-5 right-5 group-hover:text-primary group-hover:translate-x-1 transition" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED REEL */}
      <section
        id="director-reel"
        className="scroll-mt-32 py-20 md:py-28 bg-card/40 border-y border-border"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="The reel" title="See how we shoot." align="center" />
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
          <p className="mt-6 text-muted-foreground">
            Like this style?{" "}
            <Link to="/weddings" className="text-primary underline underline-offset-4">
              Cinematic wedding films →
            </Link>
          </p>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW / START HERE */}
      {SHOW_PORTFOLIO ? (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10 gap-4 flex-wrap">
              <SectionHeading eyebrow="Selected work" title="Stories we filmed." />
              <Link
                to="/work"
                className="text-primary uppercase tracking-widest text-sm hover:underline whitespace-nowrap"
              >
                View full portfolio →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PORTFOLIO.slice(0, 6).map((p) => (
                <PortfolioCard key={p.id} item={p} />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Start Here"
              title="Choose the kind of video you need."
              subtitle="Whether you need a wedding film, business promo, event recap, music video, reel, pet video, documentary, family milestone, or custom project, start with the service lane that fits best. We will help you shape the right package."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
              {[
                {
                  name: "Weddings & Elopements",
                  to: "/weddings",
                  icon: Heart,
                },
                {
                  name: "Business Ads & Commercials",
                  to: "/for-businesses",
                  icon: Briefcase,
                },
                { name: "Events, Parties & Recaps", to: "/packages#events-recaps", icon: PartyPopper },
                { name: "Music Videos", to: "/packages#music-videos", icon: Music },
                { name: "Reels & Short-Form Content", to: "/packages#business-video", icon: Video },
                {
                  name: "Pet Films, Documentaries & Custom Stories",
                  to: "/packages#custom-projects",
                  icon: Sparkles,
                },
              ].map(({ name, to, icon: Icon }) => (
                <a
                  key={name}
                  href={to}
                  className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary hover:-translate-y-1 transition flex flex-col gap-4"
                >
                  <Icon className="w-7 h-7 text-primary" />
                  <span className="font-display text-xl uppercase">{name}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground absolute top-6 right-6 group-hover:text-primary group-hover:translate-x-1 transition" />
                </a>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
              >
                Rhode Island video services
              </Link>
              <a
                href="/packages#weddings"
                className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
              >
                View wedding packages
              </a>
              <Link
                to="/contact"
                className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
              >
                Get Pricing
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* PACKAGE PREVIEW */}
      <section className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Introductory starting rates."
            subtitle="Accessible starting ranges for different types of projects, from weddings and events to business videos, music videos, reels, family stories, and custom work. Every project still gets a custom final quote based on date, coverage, and edit complexity."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                name: "Wedding Video Packages Rhode Island",
                price: "Starting at $1,200",
                desc: "Cinematic wedding films, teasers, ceremony and reception storytelling.",
                to: "/packages#weddings",
              },
              {
                name: "Business & Commercial",
                price: "Starting at $600",
                desc: "Promos, brand video, social ads, testimonials.",
                to: "/for-businesses",
                action: "For Businesses →",
              },
              {
                name: "Events, Recaps & Live Shows",
                price: "Starting at $400",
                desc: "Parties, festivals, performances, community.",
                to: "/packages#events-recaps",
              },
              {
                name: "Music Videos",
                price: "Starting at $500",
                desc: "Artist visuals, performance videos, and release promos.",
                to: "/packages#music-videos",
              },
              {
                name: "Custom Projects",
                price: "Starting at $400+",
                desc: "Pets, documentaries, family stories, and unusual ideas.",
                to: "/packages#custom-projects",
              },
            ].map((p) => (
              <a
                key={p.name}
                href={p.to}
                className="bg-card border border-border rounded-2xl p-7 hover:border-primary hover:-translate-y-1 transition"
              >
                <p className="timecode">Intro starting rate</p>
                <p className="font-display text-3xl text-primary mt-1">{p.price}</p>
                <h3 className="font-display text-xl uppercase mt-3">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                <span className="mt-5 inline-flex text-sm uppercase tracking-widest text-foreground">
                  {"action" in p ? p.action : "See details →"}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-4xl">
            These are introductory starting ranges. Final pricing depends on date, location,
            coverage time, number of videos, editing complexity, turnaround needs, travel, and
            whether extra crew is needed.
          </p>
          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-block hover:opacity-90"
            >
              Find the Right Package
            </Link>
          </div>
        </div>
      </section>

      {/* WHY GOOD LOOKS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="Why Good Looks" title="No agency. No middlemen. Just us." />
            <ul className="space-y-4">
              {[
                "You work directly with the people filming and editing.",
                "No bloated agency process.",
                "Creative direction, shooting, editing, and delivery are handled personally.",
                "We help you figure out what kind of video you actually need.",
                "Content can be built for websites, social media, ads, memories, launches, events, and promotion.",
                "Local Rhode Island team. New England projects by quote.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-base md:text-lg">
                  <span className="text-primary font-display text-xl">●</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-zinc-900 to-black" />
            <div className="absolute inset-0 film-grain" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="timecode mb-2">02:14 · RUNTIME</p>
              <p className="font-display text-3xl md:text-4xl uppercase">
                Real people. Real stories. Filmed right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="Five steps from idea to delivery." />
          <ol className="grid md:grid-cols-5 gap-4">
            {[
              ["01", "Tell us what you need"],
              ["02", "Find the right package"],
              ["03", "Plan the shoot"],
              ["04", "We film"],
              ["05", "You get polished video"],
            ].map(([n, t]) => (
              <li
                key={n}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary transition"
              >
                <p className="font-display text-4xl text-primary">{n}</p>
                <p className="mt-2 font-medium">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Trust" title="Local, direct, and built around the real plan." />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Filming since 2018",
                copy: "A Rhode Island-based video team with years of experience capturing weddings, events, businesses, artists, and personal stories.",
              },
              {
                title: "Direct communication",
                copy: "You talk with the people planning, filming, and editing your video, so the details stay clear from inquiry to delivery.",
              },
              {
                title: "Built for local projects",
                copy: "Accessible starting ranges for couples, families, artists, small businesses, events, and custom creative work across RI and New England.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-card border border-border rounded-2xl p-7">
                <p className="timecode mb-3">● GOOD LOOKS MEDIA</p>
                <h3 className="font-display text-2xl uppercase">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="timecode mb-4">● READY WHEN YOU ARE</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] text-balance">
            Ready to make your project look <span className="text-primary">good?</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow"
            >
              Get Pricing Info
            </Link>
            <Link
              to="/contact"
              className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold"
            >
              Check Availability
            </Link>
            <a
              href={CONTACT.smsHref}
              className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2"
              data-analytics="click_text"
            >
              <MessageSquare className="w-4 h-4" /> Text Us
            </a>
            <a
              href={CONTACT.telHref}
              className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2"
              data-analytics="click_call"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
