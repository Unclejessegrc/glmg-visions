import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { PORTFOLIO } from "@/data/portfolio";
import { CONTACT } from "@/data/contact";
import heroImage from "@/assets/hero.jpg";
import {
  Heart, Briefcase, Music, PartyPopper, Mic2, Sparkles, Dog, Film,
  Baby, Video, Play, ArrowRight, Phone, MessageSquare
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Good Looks Media Group | Rhode Island Videographer & Video Production" },
      { name: "description", content: "Rhode Island videography for weddings, music videos, business ads, events, and stories worth remembering. Cinematic video production based in Providence since 2018." },
      { property: "og:title", content: "Good Looks Media Group | Rhode Island Videographer" },
      { property: "og:description", content: "Cinematic video for weddings, events, businesses, artists, and everything worth remembering." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Good Looks Media Group",
        image: "/og.jpg",
        description: "Rhode Island video production and videography. Weddings, music videos, business ads, events.",
        address: { "@type": "PostalAddress", addressRegion: "RI", addressCountry: "US" },
        areaServed: "Rhode Island",
        url: "/",
        telephone: "+1-401-465-1529",
        priceRange: "$$",
        foundingDate: "2018",
      }),
    }],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Heart, label: "Weddings", to: "/weddings" },
  { icon: Baby, label: "Baby Showers & Family", to: "/services#family" },
  { icon: Briefcase, label: "Business & Commercials", to: "/business-video" },
  { icon: Music, label: "Music Videos", to: "/music-videos" },
  { icon: Mic2, label: "Live Shows", to: "/events-recaps" },
  { icon: PartyPopper, label: "Parties & Recaps", to: "/events-recaps" },
  { icon: Video, label: "YouTube & Social", to: "/services#social" },
  { icon: Dog, label: "Pet Videos", to: "/services#pets" },
  { icon: Film, label: "Documentaries", to: "/services#docs" },
  { icon: Sparkles, label: "Custom Projects", to: "/contact" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Cinematic videographer at dusk in Rhode Island"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 film-grain" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <p className="timecode mb-5">● REC · RHODE ISLAND · SINCE 2018</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] max-w-5xl text-balance">
            Rhode Island Videography for{" "}
            <span className="text-primary">real moments</span>, big events, and brands that need to be seen.
          </h1>
          <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Good Looks Media Group is a two-person video production team filming weddings, music videos,
            business ads, events, parties, pets, documentaries, and custom stories across Rhode Island and New England.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:opacity-90 red-glow" data-analytics="cta_click_pricing">
              Get Pricing
            </Link>
            <Link to="/contact" className="border border-foreground/30 text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold hover:bg-foreground/10" data-analytics="cta_click_availability">
              Check Availability
            </Link>
            <Link to="/work" className="text-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2 hover:text-primary">
              <Play className="w-4 h-4 fill-current" /> Watch Our Work
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {["Filming since 2018", "Rhode Island based", "Weddings, events, business, music", "Small team, personal attention"].map(t => (
              <div key={t} className="text-xs sm:text-sm text-muted-foreground border-l-2 border-primary pl-3">{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICE SELECTOR */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Choose your lane" title="What do you need filmed?" subtitle="Pick the lane that fits. Don't see it? We probably still film it — tell us what you're imagining." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {SERVICES.map(({ icon: Icon, label, to }) => (
              <Link
                key={label}
                to={to as any}
                className="group relative bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary hover:-translate-y-1 transition flex flex-col gap-3"
              >
                <Icon className="w-7 h-7 text-primary" />
                <span className="font-medium text-sm md:text-base">{label}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground absolute top-5 right-5 group-hover:text-primary group-hover:translate-x-1 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED REEL */}
      <section className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow="The reel" title="See how we shoot." align="center" />
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-black red-glow">
            {/* NOTE: Replace with real YouTube embed ID from Good Looks Media Group */}
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
              className="w-full h-full"
              title="Good Looks Media Group Reel"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="mt-6 text-muted-foreground">Like this style? <Link to="/contact" className="text-primary underline underline-offset-4">Let's talk about your project →</Link></p>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10 gap-4 flex-wrap">
            <SectionHeading eyebrow="Selected work" title="Stories we filmed." />
            <Link to="/work" className="text-primary uppercase tracking-widest text-sm hover:underline whitespace-nowrap">View full portfolio →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.slice(0, 6).map((p) => <PortfolioCard key={p.id} item={p} />)}
          </div>
        </div>
      </section>

      {/* PACKAGE PREVIEW */}
      <section className="py-20 md:py-28 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Pricing" title="Simple packages, custom quotes." subtitle="Three core lanes. Every project gets a custom quote based on date, coverage, and edit complexity." />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Weddings & Milestones", price: "$1,800", desc: "Cinematic wedding films, teasers, full-day storytelling.", to: "/weddings" },
              { name: "Business & Commercial", price: "$900", desc: "Promos, brand video, social ads, testimonials.", to: "/business-video" },
              { name: "Events, Recaps & Live Shows", price: "$600", desc: "Parties, festivals, performances, community.", to: "/events-recaps" },
            ].map((p) => (
              <Link key={p.name} to={p.to as any} className="bg-card border border-border rounded-2xl p-7 hover:border-primary hover:-translate-y-1 transition">
                <p className="timecode">Starting at</p>
                <p className="font-display text-5xl text-primary mt-1">{p.price}</p>
                <h3 className="font-display text-xl uppercase mt-3">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                <span className="mt-5 inline-flex text-sm uppercase tracking-widest text-foreground">See details →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/packages" className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-block hover:opacity-90">See all packages</Link>
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
                "Creative direction, shooting, editing, and delivery — handled personally.",
                "We help you figure out what kind of video you actually need.",
                "Content that works for websites, social, ads, memories, and promotion.",
              ].map(t => (
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
              <p className="font-display text-3xl md:text-4xl uppercase">Real people. Real stories. Filmed right.</p>
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
              ["02", "Pick a package or custom quote"],
              ["03", "Plan the shoot"],
              ["04", "We film"],
              ["05", "You get polished video"],
            ].map(([n, t]) => (
              <li key={n} className="bg-card border border-border rounded-xl p-5 hover:border-primary transition">
                <p className="font-display text-4xl text-primary">{n}</p>
                <p className="mt-2 font-medium">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS — placeholder */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Kind words" title="Clients keep coming back." />
          {/* TODO: Replace with real testimonials when available */}
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { q: "They captured our wedding day exactly how it felt. Watching it back still gets me.", a: "— Wedding client, Newport" },
              { q: "Sales calls got easier the day we put their brand video on our homepage.", a: "— Local business owner, Providence" },
              { q: "Our release dropped harder because the video looked like a real artist video.", a: "— Independent artist" },
            ].map((t, i) => (
              <blockquote key={i} className="bg-card border border-border rounded-2xl p-7">
                <p className="text-primary text-3xl font-display">"</p>
                <p className="text-base md:text-lg leading-relaxed">{t.q}</p>
                <footer className="mt-4 text-sm text-muted-foreground">{t.a}</footer>
              </blockquote>
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
            <Link to="/contact" className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow">Get Pricing</Link>
            <Link to="/contact" className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold">Check Availability</Link>
            <a href={CONTACT.smsHref} className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2" data-analytics="click_text">
              <MessageSquare className="w-4 h-4" /> Text Us
            </a>
            <a href={CONTACT.telHref} className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2" data-analytics="click_call">
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
