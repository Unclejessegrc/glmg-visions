import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Good Looks Media Group | Rhode Island Video Team" },
      { name: "description", content: "Good Looks Media Group is a two-person Rhode Island video production team filming weddings, music videos, business content, and personal stories since 2018." },
      { property: "og:title", content: "About — Good Looks Media Group" },
      { property: "og:description", content: "A small Rhode Island video team. You work directly with the people filming and editing." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-3">● ABOUT</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95] max-w-4xl">
            Two people. <span className="text-primary">One camera crew.</span> Whole lot of stories.
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            Good Looks Media Group is a small Rhode Island video production team built on creativity, hustle, and real client relationships.
            Since 2018, we've filmed music videos, weddings, commercials, live performances, events, parties, business content, and personal stories.
          </p>
          <p>
            We're not a giant agency. You work directly with the people planning, filming, and editing your project — start to finish.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading eyebrow="What we film" title="A wide lane, on purpose." />
            <p className="text-muted-foreground leading-relaxed">
              Weddings, baby showers, birthdays, family milestones, business ads, commercials, music videos, live shows,
              parties, festivals, pet videos, mini documentaries, family legacy films, and custom projects.
              If the moment matters to you, it's worth filming.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Why a small team" title="Personal attention. Better video." />
            <p className="text-muted-foreground leading-relaxed">
              No phone trees. No account managers reading scripts. You text the person who's going to edit your footage.
              That's what makes the final video feel like you, not like a template.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our process" title="Five honest steps." />
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

      <section className="py-16 md:py-24 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading align="center" eyebrow="Service area" title="Rhode Island first. New England by quote." />
          <p className="text-muted-foreground">Providence · Warwick · Newport · Cranston · Pawtucket · East Providence · Massachusetts by request · New England by quote</p>
        </div>
      </section>

      <section className="py-20 text-center">
        <Link to="/contact" className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow">Start your project</Link>
      </section>
    </SiteLayout>
  );
}
