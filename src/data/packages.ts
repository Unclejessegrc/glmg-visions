import type { PackageData } from "@/components/site/PackageCard";

export const WEDDING_PACKAGES: PackageData[] = [
  {
    category: "Weddings",
    name: "The Teaser",
    price: "$1,200–$1,800",
    priceLabel: "Introductory range",
    bestFor: "Best for elopements, small weddings, courthouse weddings, and couples who want a short cinematic memory.",
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
    price: "$2,000–$2,800",
    priceLabel: "Introductory range",
    featured: true,
    bestFor: "Best for most weddings and couples who want the main story of the day captured clearly.",
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
    price: "$3,200–$4,500",
    priceLabel: "Introductory range",
    bestFor: "Best for larger weddings and couples who want more of the day preserved.",
    includes: [
      "Up to 8 hours coverage",
      "1–2 videographers",
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
    price: "$600–$1,000",
    priceLabel: "Introductory range",
    bestFor: "Best for small businesses that need quick promotional content, reels, short ads, or a simple brand clip.",
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
    price: "$1,200–$2,200",
    priceLabel: "Introductory range",
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
    price: "$2,800–$4,500",
    priceLabel: "Introductory range",
    bestFor: "Best for businesses that need a small content library with one main video and multiple short-form clips.",
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
    price: "$400–$800",
    priceLabel: "Introductory range",
    bestFor: "Best for small parties, pop-ups, birthdays, baby showers, short events, and basic recap needs.",
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
    price: "$900–$1,500",
    priceLabel: "Introductory range",
    featured: true,
    bestFor: "Best for larger parties, live shows, community events, milestone events, and social-ready recaps.",
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
    name: "Mid Event",
    price: "$1,600–$2,200",
    priceLabel: "Introductory range",
    bestFor: "Best for medium events that need more coverage, stronger editing, and multiple deliverables.",
    includes: [
      "Up to 5 hours coverage",
      "1–2 videographers depending on quote",
      "2–3 minute recap",
      "3 vertical clips",
      "Online delivery",
    ],
  },
  {
    category: "Events",
    name: "Full Experience",
    price: "$2,400+",
    priceLabel: "Introductory range",
    bestFor: "Best for festivals, large private events, live performances, corporate events, and bigger productions.",
    includes: [
      "Up to 6 hours coverage",
      "1–2 videographers",
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
    price: "$500–$900",
    priceLabel: "Introductory range",
    bestFor: "Best for single-location performance videos and artists building their visual catalog.",
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
    price: "$900–$1,800",
    priceLabel: "Introductory range",
    featured: true,
    bestFor: "Best for artists who want performance plus simple story elements.",
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
    price: "$2,000+",
    priceLabel: "Introductory range",
    bestFor: "Best for concept-driven music videos with multiple scenes, planning, and a more detailed edit.",
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

export const CUSTOM_PACKAGES: PackageData[] = [
  {
    category: "Custom",
    name: "Custom Projects",
    price: "Starting at $400+",
    priceLabel: "Intro starting rate",
    bestFor: "Best for pet videos, documentary-style projects, family legacy films, custom creative ideas, and unusual projects.",
    includes: [
      "Discovery call",
      "Custom scope and timeline",
      "Coverage plan based on story needs",
      "Edited final video",
      "Optional social cutdowns",
      "Online delivery",
    ],
  },
];

export const ALL_PACKAGES = [
  ...WEDDING_PACKAGES,
  ...BUSINESS_PACKAGES,
  ...EVENT_PACKAGES,
  ...MUSIC_PACKAGES,
  ...CUSTOM_PACKAGES,
];
