import { createFileRoute } from "@tanstack/react-router";
import { PortfolioHiddenPage } from "@/components/site/PortfolioHiddenPage";
import { SHOW_PORTFOLIO } from "@/config/features";
import { WorkPage } from "./work";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: SHOW_PORTFOLIO
      ? [
          { title: "Portfolio | Good Looks Media Group" },
          { name: "description", content: "Browse Good Looks Media Group video work by service category." },
          { property: "og:title", content: "Portfolio — Good Looks Media Group" },
          { property: "og:url", content: "/portfolio" },
        ]
      : [
          { title: "Portfolio Being Curated | Good Looks Media Group" },
          { name: "description", content: "The Good Looks Media Group portfolio is being curated. Watch the director reel, view services, or request pricing." },
          { name: "robots", content: "noindex, nofollow" },
          { property: "og:title", content: "Portfolio Being Curated — Good Looks Media Group" },
          { property: "og:url", content: "/portfolio" },
        ],
    links: [{ rel: "canonical", href: SHOW_PORTFOLIO ? "/work" : "/portfolio" }],
  }),
  // Portfolio is temporarily hidden until enough real project examples are ready.
  // Change SHOW_PORTFOLIO to true to point this alias back to the full Work page.
  component: SHOW_PORTFOLIO ? WorkPage : PortfolioHiddenPage,
});
