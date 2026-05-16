import type { PackageData } from "@/components/site/PackageCard";

export const WEDDING_PACKAGES: PackageData[] = [
  {
    category: "Weddings",
    name: "The Teaser",
    price: "$1,800",
    bestFor: "Elopements, small weddings, courthouse weddings, and couples who want a short cinematic memory.",
    includes: [
      "Up to 4 hours coverage",
      "1 videographer",
      "60–90 second teaser film",
      "Basic audio capture",
      "Online delivery",
      "Optional vertical social clips",
    ],
  },
  {
    category: "Weddings",
    name: "The Highlight",
    price: "$2,800",
    featured: true,
    bestFor: "Best for most weddings — the sweet spot of coverage and story.",
    includes: [
      "Up to 6 hours coverage",
      "1 videographer",
      "3–5 minute highlight film",
      "Ceremony + key reception moments",
      "Licensed music",
      "1 vertical teaser for social",
      "Online delivery",
    ],
  },
  {
    category: "Weddings",
    name: "The Full Story",
    price: "$4,500",
    bestFor: "Larger weddings and couples who want the full day preserved.",
    includes: [
      "Up to 8 hours coverage",
      "1–2 videographers (per quote)",
      "5–8 minute cinematic highlight",
      "Ceremony edit",
      "Toasts + key speeches edit",
      "2–3 vertical social clips",
      "Optional raw footage add-on",
    ],
  },
];

export const BUSINESS_PACKAGES: PackageData[] = [
  {
    category: "Business",
    name: "Social Starter",
    price: "$900",
    bestFor: "Small businesses that need quick promotional content.",
    includes: [
      "Up to 2 hours filming",
      "1 location",
      "1 short promo (30–60s)",
      "2 vertical social clips",
      "Basic captions",
      "Online delivery",
    ],
  },
  {
    category: "Business",
    name: "Brand Builder",
    price: "$1,800",
    featured: true,
    bestFor: "Businesses that need website, social, and ad content.",
    includes: [
      "Up to 4 hours filming",
      "1–2 locations",
      "1 main brand video (60–120s)",
      "3–5 vertical clips",
      "Interview or voiceover option",
      "Color correction + audio cleanup",
    ],
  },
  {
    category: "Business",
    name: "Campaign Kit",
    price: "$3,500",
    bestFor: "Businesses that need a full content library.",
    includes: [
      "Half-day production",
      "1 main brand video",
      "5–10 short-form clips",
      "Testimonials or product segments",
      "Web, IG, TikTok, YouTube, ads formats",
      "Strategy call before filming",
    ],
  },
];

export const EVENT_PACKAGES: PackageData[] = [
  {
    category: "Events",
    name: "Quick Recap",
    price: "$600",
    bestFor: "Small parties, pop-ups, birthdays, baby showers, short events.",
    includes: [
      "Up to 2 hours coverage",
      "1 videographer",
      "30–60 second recap",
      "Vertical version available",
      "Online delivery",
    ],
  },
  {
    category: "Events",
    name: "Main Event",
    price: "$1,500",
    featured: true,
    bestFor: "Larger parties, live shows, community events, milestones.",
    includes: [
      "Up to 4 hours coverage",
      "1 videographer",
      "1–2 minute recap",
      "2 vertical social clips",
      "Basic audio capture",
      "Online delivery",
    ],
  },
  {
    category: "Events",
    name: "Full Experience",
    price: "$3,000+",
    bestFor: "Festivals, large parties, live performances, corporate events.",
    includes: [
      "Up to 6 hours coverage",
      "1–2 videographers (per quote)",
      "2–4 minute recap",
      "3–5 vertical clips",
      "Optional interviews",
      "Optional drone footage",
    ],
  },
];

export const MUSIC_PACKAGES: PackageData[] = [
  {
    category: "Music",
    name: "Performance Visual",
    price: "$750",
    bestFor: "Single-location performance edits for artists building their reel.",
    includes: [
      "Up to 2 hours filming",
      "1 location",
      "Performance-based edit",
      "Basic lighting setup",
      "1 final music video",
    ],
  },
  {
    category: "Music",
    name: "Artist Video",
    price: "$1,500",
    featured: true,
    bestFor: "Artists who want performance + story elements.",
    includes: [
      "Up to 4 hours filming",
      "1–2 locations",
      "Performance + story elements",
      "Detailed edit",
      "1 final music video",
      "2 vertical promo clips",
    ],
  },
  {
    category: "Music",
    name: "Full Concept Video",
    price: "$3,000+",
    bestFor: "Concept-driven music videos with multiple scenes and treatments.",
    includes: [
      "Concept planning",
      "Half-day shoot",
      "Multiple scenes",
      "Performance, story, cinematic treatment",
      "1 final music video",
      "3–5 vertical promo clips",
    ],
  },
];

export const ALL_PACKAGES = [
  ...WEDDING_PACKAGES,
  ...BUSINESS_PACKAGES,
  ...EVENT_PACKAGES,
  ...MUSIC_PACKAGES,
];
