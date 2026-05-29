import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { absoluteUrl, serviceJsonLd } from "@/data/seo";

export const Route = createFileRoute("/business-video")({
  head: () => ({
    meta: [
      { title: "Commercial Video for Rhode Island Businesses | Good Looks Media Group" },
      {
        name: "description",
        content:
          "Website video, reels, and testimonials for Rhode Island businesses. No giant agency process. Packages start at $600. Get a fast quote.",
      },
      { property: "og:title", content: "Commercial Video for Rhode Island Businesses | Good Looks Media Group" },
      {
        property: "og:description",
        content:
          "Website video, reels, and testimonials for Rhode Island businesses. No giant agency process.",
      },
      { property: "og:url", content: absoluteUrl("/business-video") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/for-businesses") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceJsonLd({
            name: "Commercial Video for Rhode Island Businesses",
            description: "Website video, reels, testimonials, ads, and brand content.",
            path: "/for-businesses",
          }),
        ),
      },
    ],
  }),
  component: BusinessVideoAliasPage,
});

function BusinessVideoAliasPage() {
  return (
    <SiteLayout>
      <section className="min-h-[60vh] flex items-center py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="timecode mb-4">B2B COMMERCIAL VIDEO</p>
          <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.95]">
            Commercial Video for Rhode Island Businesses
          </h1>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
            This service now lives on the B2B Commercial page with current packages, FAQs, and quote
            details.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/for-businesses"
              className="bg-primary text-primary-foreground px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold red-glow"
            >
              View Business Packages
            </Link>
            <Link
              to="/contact"
              className="border border-foreground/30 px-7 py-4 rounded-md uppercase tracking-widest text-sm font-semibold"
              data-track-event="quote_cta_click"
              data-service-lane="business"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
