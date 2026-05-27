import type { PackageData } from "@/components/site/PackageCard";

export const EVENT_PACKAGES: PackageData[] = [
  {
    category: "Events",
    serviceLane: "event",
    name: "Quick Recap",
    price: "$400 to $700",
    priceLabel: "Introductory starting range",
    bestFor:
      "Best for small parties, pop-ups, birthdays, baby showers, short events, and basic social recap needs.",
    includes: [
      "Short event coverage",
      "30 to 60 second social recap",
      "Clean edit",
      "Online delivery",
      "Vertical version available when requested",
    ],
  },
  {
    category: "Events",
    serviceLane: "event",
    name: "Main Event",
    price: "$900 to $1,500",
    priceLabel: "Introductory starting range",
    featured: true,
    bestFor:
      "Best fit for most clients. Built for larger parties, live shows, community events, milestone events, and social-ready recaps.",
    includes: [
      "Up to 4 hours coverage",
      "1 videographer",
      "1 to 2 minute highlight recap",
      "2 vertical social clips",
      "Basic audio sync when possible",
      "Color grade",
      "Online delivery",
    ],
  },
  {
    category: "Events",
    serviceLane: "event",
    name: "Full Story",
    price: "$1,800 to $2,400+",
    priceLabel: "Introductory starting range",
    bestFor:
      "Best for bigger events, full live-show coverage, multi-camera needs, extended edits, festivals, and larger productions.",
    includes: [
      "Extended event coverage",
      "1 to 2 videographers depending on quote",
      "Extended highlight or full story edit",
      "Multi-camera options",
      "Licensed music when required",
      "Vertical clips available",
      "Online delivery",
    ],
  },
];

export const MUSIC_PACKAGES: PackageData[] = [
  {
    category: "Artist Video",
    serviceLane: "artist",
    name: "Single Take",
    price: "$600 to $900",
    priceLabel: "Introductory starting range",
    bestFor: "Best for one location, one song, clean performance video.",
    includes: [
      "One location",
      "One song",
      "Simple performance setup",
      "Clean edit",
      "Basic color correction",
      "Online delivery",
    ],
  },
  {
    category: "Artist Video",
    serviceLane: "artist",
    name: "Visual Story",
    price: "$1,200 to $2,000",
    priceLabel: "Introductory starting range",
    featured: true,
    bestFor:
      "Best for artists who want a stronger concept with multiple setups or simple narrative elements.",
    includes: [
      "Multiple setups",
      "Concept-driven edit",
      "Performance and story elements",
      "Basic lighting setup where possible",
      "One final video",
      "Social preview clip",
    ],
  },
  {
    category: "Artist Video",
    serviceLane: "artist",
    name: "Campaign Kit",
    price: "$2,200 to $3,500",
    priceLabel: "Introductory starting range",
    bestFor: "Best for artists preparing a release campaign.",
    includes: [
      "Full music video",
      "Vertical social cuts",
      "Promo clips",
      "Multiple setups",
      "Stronger edit direction",
      "Online delivery",
    ],
  },
];

export const WEDDING_PACKAGES: PackageData[] = [
  {
    category: "Weddings",
    serviceLane: "wedding",
    name: "Teaser",
    price: "$1,200 to $1,800",
    priceLabel: "Introductory starting range",
    bestFor:
      "Best for small weddings, elopements, and couples who want a short cinematic keepsake.",
    includes: [
      "Filming coverage based on package",
      "Edited teaser film",
      "Audio moments when possible",
      "Color correction",
      "Online delivery",
      "Optional add-ons by quote",
    ],
  },
  {
    category: "Weddings",
    serviceLane: "wedding",
    name: "Highlight",
    price: "$2,000 to $2,800",
    priceLabel: "Introductory starting range",
    featured: true,
    bestFor:
      "Best fit for most couples. A polished highlight film with the emotion and key moments of the day.",
    includes: [
      "Filming coverage based on package",
      "Edited highlight film",
      "Ceremony and speech audio when possible",
      "Color correction",
      "Online delivery",
      "Revisions based on package",
    ],
  },
  {
    category: "Weddings",
    serviceLane: "wedding",
    name: "Full Story",
    price: "$3,200 to $4,500",
    priceLabel: "Introductory starting range",
    bestFor:
      "Best for larger weddings, fuller coverage, extended edits, and couples who want more of the day preserved.",
    includes: [
      "Extended filming coverage",
      "Edited highlight or full story film",
      "Ceremony and speech audio when possible",
      "Color correction",
      "Online delivery",
      "Optional add-ons by quote",
    ],
  },
];

export const BUSINESS_PACKAGES: PackageData[] = [
  {
    category: "Business",
    serviceLane: "business",
    name: "Social Starter",
    price: "$600 to $1,000",
    priceLabel: "Introductory starting range",
    bestFor:
      "Best for small businesses that need short-form video, reels, or simple promo content.",
    includes: [
      "Filming",
      "Editing",
      "Short-form cutdowns",
      "Social-ready exports",
      "Revisions based on package",
      "Online delivery",
    ],
  },
  {
    category: "Business",
    serviceLane: "business",
    name: "Brand Builder",
    price: "$1,200 to $2,200",
    priceLabel: "Introductory starting range",
    featured: true,
    bestFor:
      "Best fit for most businesses. Built around a core website video, testimonial, or brand story with short social cutdowns.",
    includes: [
      "Filming",
      "Editing",
      "Website-ready video",
      "Short-form cutdowns",
      "Social-ready exports",
      "Online delivery",
    ],
  },
  {
    category: "Business",
    serviceLane: "business",
    name: "Campaign Kit",
    price: "$2,800 to $4,500",
    priceLabel: "Introductory starting range",
    bestFor:
      "Best for businesses that need a content library, campaign assets, multiple edits, or ongoing marketing use.",
    includes: [
      "Filming",
      "Editing",
      "Multiple campaign edits",
      "Website-ready video",
      "Social-ready exports",
      "Revisions based on package",
    ],
  },
];

export const CUSTOM_PACKAGES: PackageData[] = [
  {
    category: "Custom",
    serviceLane: "custom",
    name: "Custom Projects",
    price: "Starting at $400+",
    priceLabel: "Introductory starting range",
    bestFor:
      "Best for documentaries, family stories, personal projects, reels, and unusual ideas that need a custom scope.",
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
  ...EVENT_PACKAGES,
  ...MUSIC_PACKAGES,
  ...WEDDING_PACKAGES,
  ...BUSINESS_PACKAGES,
  ...CUSTOM_PACKAGES,
];
