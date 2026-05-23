import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CalendarDays,
  Film,
  Megaphone,
  MessageCircle,
  Play,
  Quote,
  Smartphone,
  Store,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { absoluteUrl, pageJsonLd, serviceJsonLd } from "@/data/seo";

export const Route = createFileRoute("/for-businesses")({
  head: () => ({
    meta: [
      { title: "Commercial Video for Rhode Island Businesses | Good Looks Media Group" },
      {
        name: "description",
        content:
          "Good Looks Media Group creates commercial video, business promos, social media reels, ads, testimonials, event recaps, and website video for Rhode Island businesses and New England brands.",
      },
      {
        property: "og:title",
        content: "Commercial Video for Rhode Island Businesses | Good Looks Media Group",
      },
      {
        property: "og:description",
        content:
          "Business promos, social media reels, ads, testimonials, event recaps, and website video for Rhode Island businesses and New England brands.",
      },
      { property: "og:url", content: absoluteUrl("/for-businesses") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/for-businesses") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            pageJsonLd({
              name: "Commercial Video for Rhode Island Businesses",
              description:
                "A business-focused landing page for Rhode Island commercial video production, business promos, social media reels, ads, testimonials, event recaps, and website video.",
              path: "/for-businesses",
            }),
            serviceJsonLd({
              name: "Commercial Video for Rhode Island Businesses",
              description:
                "Rhode Island business video, commercial video production, brand promos, social content, testimonials, event recaps, and website video.",
              path: "/for-businesses",
            }),
          ],
        }),
      },
    ],
  }),
  component: ForBusinessesPage,
});

const VIDEO_TYPES = [
  {
    title: "Business Promos",
    icon: Megaphone,
    copy: "Short videos that explain who you are, what you offer, and why people should trust you.",
  },
  {
    title: "Social Media Reels",
    icon: Smartphone,
    copy: "Short-form content for Instagram, TikTok, Facebook, YouTube Shorts, and paid ads.",
  },
  {
    title: "Website Video",
    icon: Building2,
    copy: "Clean, polished video for your homepage, service pages, about page, or landing pages.",
  },
  {
    title: "Testimonials",
    icon: Quote,
    copy: "Customer, client, or team interviews that help build trust.",
  },
  {
    title: "Event Recaps",
    icon: CalendarDays,
    copy: "Coverage for launches, openings, pop-ups, performances, fundraisers, networking events, and community events.",
  },
  {
    title: "Brand Story Videos",
    icon: Film,
    copy: "A more personal video that explains your business, your work, and the people behind it.",
  },
];

const AUDIENCES = [
  "Contractors and trades",
  "Restaurants, food businesses, and cafes",
  "Salons, barbers, and beauty professionals",
  "Fitness, wellness, and coaching businesses",
  "Artists, musicians, and creators",
  "Local shops and product-based businesses",
  "Nonprofits and community organizations",
  "Real estate, property, and rental businesses",
  "Event organizers and venues",
  "Any local business that needs better video content",
];

const USES = [
  "Website hero videos",
  "Google Business Profile updates",
  "Instagram and TikTok reels",
  "Facebook and YouTube content",
  "Paid ad creatives",
  "Service explainers",
  "Launch announcements",
  "Event promotion",
  "Recruiting or team culture content",
  "Customer trust and brand credibility",
];

const BUSINESS_PACKAGES = [
  {
    name: "Starter Business Content",
    price: "$600–$1,000",
    bestFor:
      "For small businesses that need simple, clean video content without overcomplicating the shoot.",
    includes: [
      "Short shoot",
      "Basic promo or reel-style content",
      "Edited video for social or website use",
    ],
    cta: "Request Starter Quote",
  },
  {
    name: "Brand Promo Video",
    price: "$1,200–$2,200",
    bestFor:
      "For businesses that need a stronger video explaining who they are, what they offer, and why customers should trust them.",
    includes: [
      "Planning call",
      "Filming session",
      "Edited brand promo",
      "Social-friendly cutdown if appropriate",
    ],
    cta: "Request Brand Promo Quote",
    featured: true,
  },
  {
    name: "Business Content Day",
    price: "$2,800–$4,500",
    bestFor: "For businesses that want to batch multiple pieces of content in one shoot.",
    includes: [
      "Content planning",
      "Filming block",
      "Multiple short edits",
      "Content for social, website, ads, or launch promotion",
    ],
    cta: "Request Content Day Quote",
  },
];

const WHY = [
  "Local Rhode Island team",
  "Direct communication",
  "No bloated agency process",
  "Creative direction, filming, editing, and delivery handled personally",
  "Content made for real use: websites, social media, ads, launches, and promotion",
  "Available across Rhode Island and New England by quote",
];

function ForBusinessesPage() {
  return (
    <SiteLayout>
      <section className="pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-4">REC - BUSINESS VIDEO - RHODE ISLAND MEDIA COMPANY</p>
          <div className="max-w-5xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] text-balance">
              Commercial Video for Rhode Island Businesses
            </h1>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
              Good Looks Media Group helps Rhode Island businesses create video content that looks
              professional, explains what they do, builds trust, and gives them content to use
              across websites, social media, ads, launches, events, and promotions.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="/contact?projectType=Business%20promo"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow"
              data-analytics="cta_click_business_quote"
            >
              Get a Business Video Quote
            </a>
            <a
              href="/packages#business-video"
              className="border border-foreground/30 text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
            >
              View Business Packages
            </a>
            <a
              href="#what-we-film"
              className="text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2 hover:text-primary"
            >
              <Play className="w-4 h-4 fill-current" /> See What We Film
            </a>
          </div>
        </div>
      </section>

      <section id="what-we-film" className="scroll-mt-32 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Business video"
            title="Video content built for real businesses."
            subtitle="You do not need a giant agency process to make your business look good online. You need clear video, strong visuals, and content that fits where your customers actually see you: your website, Google profile, Instagram, TikTok, Facebook, ads, email, and landing pages."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIDEO_TYPES.map(({ title, icon: Icon, copy }) => (
              <article
                key={title}
                className="bg-card border border-border rounded-2xl p-7 hover:border-primary hover:-translate-y-1 transition"
              >
                <Icon className="w-7 h-7 text-primary" />
                <h3 className="font-display text-2xl uppercase mt-4">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <SectionHeading
              eyebrow="Who it is for"
              title="Built for local owners, brands, and teams."
              subtitle="This page is for Rhode Island business owners, local brands, service providers, creators, artists, organizations, and event-based businesses that need video content without dealing with a bloated agency process."
            />
            <div className="flex flex-wrap gap-3">
              <Link
                to="/business-video"
                className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm hover:underline"
              >
                More on business video <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {AUDIENCES.map((item) => (
              <div key={item} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                <Store className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Where it goes"
            title="What your business can use the video for."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {USES.map((item) => (
              <div
                key={item}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary transition"
              >
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="Business video packages."
            subtitle="These are starting points. Final pricing depends on location, coverage time, editing complexity, number of final videos, turnaround needs, interviews, travel, and whether extra crew or drone footage is needed."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {BUSINESS_PACKAGES.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col bg-card border rounded-2xl p-6 md:p-8 transition hover:-translate-y-1 hover:shadow-card ${
                  pkg.featured ? "border-primary red-glow" : "border-border"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                    Most popular
                  </span>
                )}
                <p className="timecode">Business video</p>
                <h3 className="font-display text-2xl md:text-3xl uppercase mt-1">{pkg.name}</h3>
                <p className="mt-2 text-3xl md:text-4xl font-display text-primary">
                  {pkg.price}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Introductory range
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{pkg.bestFor}</p>
                <ul className="mt-5 space-y-2.5 text-sm flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary font-display text-lg leading-none">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`/contact?projectType=Business%20promo&package=${encodeURIComponent(pkg.name)}`}
                  className="mt-6 inline-flex justify-center items-center bg-primary text-primary-foreground px-5 py-3 rounded-md uppercase tracking-wider text-sm font-medium hover:opacity-90"
                  data-analytics="cta_click_business_package"
                >
                  {pkg.cta}
                </a>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/packages#business-video"
              className="inline-flex items-center gap-2 border border-foreground/30 px-6 py-3 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
            >
              View Business Packages <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-foreground/30 px-6 py-3 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading eyebrow="Why Good Looks" title="Why businesses work with Good Looks." />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Good Looks Media Group is not a giant agency. You work directly with the people
              filming and editing your project. That keeps communication clear, the process
              simpler, and the final video closer to what your business actually needs.
            </p>
          </div>
          <div className="grid gap-3">
            {WHY.map((item) => (
              <div key={item} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                <Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="timecode mb-4">● NOT SURE YET?</p>
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] text-balance">
            Not sure what kind of video you need?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what your business does, what you are trying to promote, and where you want to
            use the video. We will help point you toward the right package or a custom quote.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="/contact?projectType=Business%20promo"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow"
              data-analytics="cta_click_business_quote"
            >
              Get a Business Video Quote
            </a>
            <Link
              to="/contact"
              className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Tell Us What You Need Filmed
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
